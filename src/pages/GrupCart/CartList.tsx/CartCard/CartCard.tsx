import {
  Flex,
  Image,
  VStack,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from "@chakra-ui/icons";

import { SimpleIconButton } from "src/components/Buttons";

interface CCProps {
  cartItem: Grupie.CartItem;
}

const CartCard = ({ cartItem }: CCProps) => {
  const renderQtyBtn = () => {
    return (
      <Button
        type="button"
        h="100%"
        w="140px"
        color="blackAlpha.800"
        variant="ghost"
        display="flex"
        alignItems="center"
      >
        <ChevronDownIcon fontSize="35px" _hover={{ color: "red" }} onClick={() => {}} />
        <NumberInput variant="unstyled" value={cartItem.quantity} onChange={() => {}}>
          <NumberInputField textAlign="center" />
        </NumberInput>
        <ChevronUpIcon fontSize="35px" _hover={{ color: "red" }} onClick={() => {}} />
      </Button>
    );
  };

  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Flex
        borderWidth="1px"
        minW="775px"
        w="100%"
        h="100px"
        bg="#fff"
        px={3}
        align="center"
        justify="space-around"
        borderRadius="12px"
      >
        <Image src={cartItem.primary_image.url_thumbnail} objectFit="contain" h="50px" w="50px" />
        <VStack spacing={1} maxW="288px" w="288px" alignItems="flex-start">
          <Link href={`https://google.com`} isExternal>
            <Text isTruncated w="288px">
              {cartItem.name}
            </Text>
          </Link>
          <Text alignSelf="flex-start" color="gray.400" as="sub">
            sku: {cartItem.sku}
          </Text>
        </VStack>
        {renderQtyBtn()}
        <Flex>
          {cartItem.sale_price && (
            <Text
              textAlign="right"
              fontSize="15px"
              color="red.500"
              minW="52px"
              textDecoration="line-through"
            >
              $ {Number(cartItem.price).toFixed(2)}
            </Text>
          )}
          <Text textAlign="right" ml={5} fontSize="15px" minW="52px">
            $ {Number(cartItem.price).toFixed(2)}
          </Text>
        </Flex>
      </Flex>
      <SimpleIconButton icon={<CloseIcon />} handleOnClick={() => {}} />
    </Flex>
  );
};

export default CartCard;
