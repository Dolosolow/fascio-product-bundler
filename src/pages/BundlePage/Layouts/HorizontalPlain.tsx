import { useState, useContext, useEffect } from "react";
import { Flex, Image, Fade, Text, chakra } from "@chakra-ui/react";

import { CartButton } from "src/components/Buttons";
import ProductCard from "src/components/ProductCard";
import StepProgress from "src/components/StepProgress";
import TextList from "src/components/TextList";
import ProductContainer from "src/components/ProductContainer";
import CartRoutes from "src/routes/cartRoutes";

import { useQuery } from "src/hooks";
import cartContext from "src/contexts/cartContext";
import bundleContext from "src/contexts/bundleContext";

import bgImg from "../nurse.png";

const sectionNotes = ["Please select atleast one from this section and continue to the next step."];

interface ValidationStatus {
  type: "ERROR" | "SUCCESS" | "N/A";
  field: string;
  message: JSX.Element | undefined;
}

const HorizontalPlain = () => {
  const { state } = useContext(cartContext);
  const bundle = useContext(bundleContext!);
  const querySection = useQuery("e_section");

  const [currentSection, setCurrentSection] = useState<number>(0);
  const [sectionStatus, setSectionStatus] = useState<ValidationStatus>({
    type: "N/A",
    field: "",
    message: undefined,
  });

  const sections = bundle!.content.sections;

  const validateSection = (idx: number) => {
    const sectionCartItems = state.items.filter((item) => item.sectionId === currentSection);
    const section = sections[currentSection];

    let status: "ERROR" | "SUCCESS";

    if (section.required) {
      if (section.minSelect <= sectionCartItems.length) {
        status = "SUCCESS";
        setCurrentSection(idx);
      } else {
        status = "ERROR";
      }
    } else {
      status = "SUCCESS";
      setCurrentSection(idx);
    }

    setSectionStatus({
      type: status,
      field: sections[currentSection].sectionName,
      message: (
        <Fade in={true}>
          <Text color="red.500" fontSize="sm" mb={1} textAlign="center">
            <chakra.strong mr={1}>Please select {section.minSelect} product.</chakra.strong>
          </Text>
        </Fade>
      ),
    });
  };

  const renderLayoutContent = () => (
    <>
      <TextList
        title={`Step ${currentSection + 1} - ${sections[currentSection].sectionName}`}
        messages={[...sectionNotes]}
        misc={sectionStatus && sectionStatus.type === "ERROR" ? sectionStatus.message : undefined}
      />
      <ProductContainer currentSection={currentSection} sections={sections}>
        {sections[currentSection].products.map((item, idx) => {
          const existInCart = state.items.find((cartItem) => cartItem.id === item.id);
          return (
            <ProductCard
              key={idx}
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

  useEffect(() => {
    if (querySection) {
      setCurrentSection(+querySection);
    }
  }, [querySection]);

  return (
    <Flex h="100%" mb={10} flexDir="column" overflowX="clip">
      <Image w="100%" h="250px" minH="250px" objectFit="cover" src={bgImg}></Image>
      <Flex justify="center">
        <StepProgress
          my={6}
          w={["80%", "80%", null, "50%"]}
          status={sectionStatus}
          sections={sections}
          handleValidation={validateSection}
        />
        <CartButton pos="absolute" right="0" itemsInCart={state.items} />
      </Flex>
      <CartRoutes>{renderLayoutContent()}</CartRoutes>
    </Flex>
  );
};

export default HorizontalPlain;

// import { useState, useContext, useEffect } from "react";
// import { Flex, Image, Fade, Text, chakra } from "@chakra-ui/react";

// import { CartButton } from "src/components/Buttons";
// import ProductCard from "src/components/ProductCard";
// import StepProgress from "src/components/StepProgress";
// import TextList from "src/components/TextList";
// import ProductContainer from "src/components/ProductContainer";
// import CartRoutes from "src/routes/cartRoutes";

// import { useQuery } from "src/hooks";
// import cartContext from "src/contexts/cartContext";
// import bundleContext from "src/contexts/bundleContext";

// import bgImg from "../nurse.png";

// const sectionNotes = ["Please select atleast one from this section and continue to the next step."];

// const HorizontalPlain = () => {
//   const { state } = useContext(cartContext);
//   const bundle = useContext(bundleContext!);
//   const querySection = useQuery("e_section");

//   const sections = bundle!.content.sections;

//   const [error, setError] = useState<any>({});
//   const [currentSection, setCurrentSection] = useState<number>(0);

//   const validateSection = (idx: number) => {
//     const sectionCartItems = state.items.filter((item) => item.sectionId === currentSection);
//     const section = sections[currentSection];

//     if (section.required) {
//       if (section.minSelect <= sectionCartItems.length) {
//         setCurrentSection(idx);
//         return true;
//       } else {
//         setError({
//           field: sections[currentSection].sectionName,
//           message: (
//             <Fade in={true}>
//               <Text color="red.500" fontSize="sm" mb={1} textAlign="center">
//                 <chakra.strong mr={1}>Please select {section.minSelect} product.</chakra.strong>
//               </Text>
//             </Fade>
//           ),
//         });
//         return false;
//       }
//     } else {
//       setCurrentSection(idx);
//       return true;
//     }
//   };

//   const renderLayoutContent = () => (
//     <>
//       <TextList
//         title={`Step ${currentSection + 1} - ${sections[currentSection].sectionName}`}
//         messages={[...sectionNotes]}
//         misc={error && error.message}
//       />
//       <ProductContainer currentSection={currentSection} sections={sections}>
//         {sections[currentSection].products.map((item, idx) => {
//           const existInCart = state.items.find((cartItem) => cartItem.id === item.id);
//           return (
//             <ProductCard
//               key={idx}
//               setError={() => setError({})}
//               item={{
//                 ...item,
//                 sectionId: currentSection,
//                 quantity: existInCart ? existInCart.quantity : 0,
//               }}
//             />
//           );
//         })}
//       </ProductContainer>
//     </>
//   );

//   useEffect(() => {
//     if (querySection) {
//       setCurrentSection(+querySection);
//     }
//   }, [querySection]);

//   return (
//     <Flex h="100%" mb={10} flexDir="column" overflowX="clip">
//       <Image w="100%" h="250px" minH="250px" objectFit="cover" src={bgImg}></Image>
//       <Flex justify="center">
//         <StepProgress
//           my={6}
//           w={["80%", "80%", null, "50%"]}
//           error={error}
//           sections={sections}
//           handleValidation={validateSection}
//         />
//         <CartButton pos="absolute" right="0" itemsInCart={state.items} />
//       </Flex>
//       <CartRoutes>{renderLayoutContent()}</CartRoutes>
//     </Flex>
//   );
// };

// export default HorizontalPlain;
