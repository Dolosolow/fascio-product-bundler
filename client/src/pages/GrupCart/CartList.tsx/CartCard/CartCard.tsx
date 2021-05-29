import { Flex, Image, VStack, Text, Link } from "@chakra-ui/react";

interface CCProps {
  cartItem: Grupie.CartItem;
}

const CartCard = ({ cartItem }: CCProps) => {
  const renderQtyBtn = () => {
    return (
      <Flex h="100%" color="blackAlpha.800" display="flex" alignItems="center">
        <Text fontWeight="bold" mr={5}>
          qty
        </Text>
        <Text>{cartItem.quantity}</Text>
      </Flex>
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
          <Link href="#" isExternal>
            <Text isTruncated w="300px">
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
    </Flex>
  );
};

export default CartCard;
