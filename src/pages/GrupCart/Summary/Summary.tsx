import { Flex, Image, HStack, VStack, Text, Button, Input, Divider } from "@chakra-ui/react";

import Logo from "src/images/svg/grup-logo.svg";

const Summary = () => {
  return (
    <Flex w="30%" h="100%" flexDirection="column" alignItems="center" justify="center">
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
            May 10, 2021
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
            <Text>Nursing Bundle for HCCC Students</Text>
            <Text fontSize="xs" color="gray.500">
              Total Items: 7
            </Text>
            <Text fontSize="xs" color="gray.500">
              Bundle price applied.
            </Text>
          </Flex>
          <Text>$129.99</Text>
        </Flex>
        <Flex alignSelf="flex-start" alignItems="center" justify="space-between" w="100%">
          <Text>Promotion Code</Text>
          <Input variant="outline" placeholder="Promo Code" w="40%" />
        </Flex>
        <Divider w="100%" />
        <Flex mb={16} alignSelf="flex-start" justify="space-between" w="100%">
          <Text>Subtotal:</Text>
          <Text fontSize="xl" fontWeight="extrabold">
            $129.99
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
