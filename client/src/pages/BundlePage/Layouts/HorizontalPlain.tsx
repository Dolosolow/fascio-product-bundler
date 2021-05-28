import { useContext } from "react";
import { Flex, Image } from "@chakra-ui/react";

import { CartButton } from "src/components/Buttons";
import ProductCard from "src/components/ProductCard";
import StepProgress from "src/components/StepProgress";
import TextList from "src/components/TextList";
import ProductContainer from "src/components/ProductContainer";
import CartRoutes from "src/routes/cartRoutes";

import cartContext from "src/contexts/cartContext";
import bundleContext from "src/contexts/bundleContext";

import { useSectionValidator } from "src/hooks/useSectionValidator";

const HorizontalPlain = () => {
  const { state: cartState } = useContext(cartContext);
  const bundle = useContext(bundleContext!);

  const sections = bundle!.content.sections;

  const { currentSection, sectionStatus, validate, clampCartItems } = useSectionValidator(
    cartState,
    sections
  );

  const renderLayoutContent = () => (
    <>
      <TextList
        title={`Step ${currentSection + 1} - ${sections[currentSection].sectionName}`}
        messages={sections[currentSection].specialNotes}
        misc={sectionStatus.type === "ERROR" ? sectionStatus.message : undefined}
      />
      <ProductContainer currentSection={currentSection} sections={sections}>
        {sections[currentSection].products.map((item, idx) => {
          const existInCart = cartState.items.find((cartItem) => cartItem.id === item.id);
          return (
            <ProductCard
              key={idx}
              disableIncrements={clampCartItems()}
              sectionConfig={{
                min: sections[currentSection].minSelect,
                max: sections[currentSection].maxSelect,
              }}
              item={{
                ...item,
                sectionId: currentSection,
                quantity: existInCart ? existInCart.quantity : 0,
              }}
            />
          );
        })}
      </ProductContainer>
    </>
  );

  return (
    <Flex w="100%" h="100%" mb={10} flexDir="column" overflowX="clip">
      {bundle && (
        <>
          {bundle.layout.layout_bannerImg && (
            <Image
              w="100%"
              h="250px"
              minH="250px"
              objectFit="cover"
              src={bundle.layout.layout_bannerImg}
            />
          )}
          <Flex justify="center">
            <StepProgress
              my={6}
              w={["80%", "80%", null, "50%"]}
              status={sectionStatus}
              sections={sections}
              handleValidation={validate}
            />
            <CartButton pos="absolute" right="15" itemsInCart={cartState.items} />
          </Flex>
          <CartRoutes>{renderLayoutContent()}</CartRoutes>
        </>
      )}
    </Flex>
  );
};

export default HorizontalPlain;
