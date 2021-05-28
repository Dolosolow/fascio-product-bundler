import {
  Text,
  Flex,
  VStack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import CartCard from "./CartCard";

import { Section } from "src/types/schema";
import { SimpleIconButton } from "src/components/Buttons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

interface CLProps {
  cartItems: Grupie.GrupCart;
  sections: Section[];
}

const CartList = ({ cartItems, sections }: CLProps) => {
  const { id } = useParams<{ id: string }>();

  const renderCards = (sectionIdx: number) => {
    return cartItems.items
      .filter((item) => item.sectionId === sectionIdx)
      .map((filteredItem, idx) => <CartCard key={idx} cartItem={filteredItem} />);
  };

  return (
    <Flex w="70%" h="100%" bg="gray.50" p={[7, 7, 7, 16, 20]} flexDir="column">
      <Text fontSize="x-large" borderLeft="3px solid #121" pl={5} mb={16}>
        My Shopping Bag
      </Text>
      <Accordion allowMultiple>
        {sections.map((section, sectionIdx) => (
          <AccordionItem key={sectionIdx}>
            <AccordionButton as="div" position="relative" cursor="pointer">
              <Box flex="1" textAlign="left">
                {section.sectionName}
              </Box>
              <Link to={`/bundle/${id}?e_section=${sectionIdx}`}>
                <SimpleIconButton
                  position="absolute"
                  right={28}
                  top="51px"
                  h="5px"
                  w="5px"
                  transform="scale(1.0)"
                  _hover={{ color: "#09bba3" }}
                  icon={
                    <Tooltip isTruncated label="Edit items" fontSize="md">
                      <EditIcon />
                    </Tooltip>
                  }
                />
              </Link>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel py={4}>
              <VStack align="flex-start">{renderCards(sectionIdx)}</VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default CartList;
