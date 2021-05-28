import { Flex, Image, HStack, VStack, Text, Button, Input, Divider } from "@chakra-ui/react";
import { Bundle } from "src/types/schema";
import { GrupCart } from "src/types/grup";

import Logo from "src/images/svg/grup-logo.svg";

const Summary = ({ bundle, cart }: { bundle: Bundle; cart: GrupCart }) => {
  return (
    <Flex w="35%" h="100%" flexDirection="column" alignItems="center" justify="center">
      <Image mt={16} mb={2} src={Logo} objectFit="contain" h="100px" w="100px" />
      <HStack spacing={5} as="sub">
        <Text fontWeight="bold">
          Status:
          <Text as="span" ml={1} fontWeight="normal">
            Incomplete
          </Text>
        </Text>
        <Text fontWeight="bold">
          Date:
          <Text as="span" ml={1} fontWeight="normal">
            {new Date(Date.now()).toDateString().split(" ").slice(1, 4).join(" ")}
          </Text>
        </Text>
      </HStack>
      <VStack spacing={4} w="90%">
        <Text my={8} p={2} as="h2" bg="gray.50" w="100%" fontWeight="bold">
          Order Summary
        </Text>
        {/* bundle details */}
        {/* promo code */}
        <Flex mb={6} alignSelf="flex-start" justify="space-between" fontSize="14px" w="100%">
          <Flex flexDir="column">
            <Text>{bundle.bundleName}</Text>
            <Text fontSize="xs" color="gray.500">
              Total Items: {cart.items.length}
            </Text>
            <Text fontSize="xs" color="gray.500">
              Bundle price applied.
            </Text>
          </Flex>
          <Text>${cart.totalPrice}</Text>
        </Flex>
        <Flex alignSelf="flex-start" alignItems="center" justify="space-between" w="100%">
          <Text>Promotion Code</Text>
          <Input variant="outline" placeholder="Promo Code" w="40%" />
        </Flex>
        <Divider w="100%" />
        <Flex mb={16} alignSelf="flex-start" justify="space-between" w="100%">
          <Text>Subtotal:</Text>
          <Text fontSize="xl" fontWeight="extrabold">
            ${cart.totalPrice}
          </Text>
        </Flex>
        <Button type="submit" colorScheme="teal">
          Add Bundle to Cart
        </Button>
      </VStack>
    </Flex>
  );
};

export default Summary;
