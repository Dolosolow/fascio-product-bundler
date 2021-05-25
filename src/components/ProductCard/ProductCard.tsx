import { useContext } from "react";
import {
  WrapItem,
  VStack,
  Image,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import cartContext from "src/contexts/cartContext";

interface PCProps {
  item: Grupie.CartItem;
}

const ProductCard = ({ item }: PCProps) => {
  const { dispatch } = useContext(cartContext);

  const handleQtyChange = (type: "INCR" | "DECR" | "CTRL", qty: number) => {
    let updatedQty = 0;

    if (type === "INCR") {
      updatedQty = item.quantity + qty;
    } else if (type === "DECR") {
      updatedQty = item.quantity - qty;
    } else {
      updatedQty = qty;
    }

    if (updatedQty <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: item.id });
    } else {
      dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: updatedQty } });
    }
  };

  return (
    <WrapItem>
      <VStack
        alignSelf="center"
        justifyContent="flex-end"
        borderWidth="1px"
        flexDir="column"
        borderRadius={6}
        w={["235px", "235px", "260px"]}
        h="400px"
        p={3}
      >
        <Image src={item.primary_image.url_standard} objectFit="contain" h="160px" w="100%" />
        <Text alignSelf="flex-end" noOfLines={2}>
          {item.name}
        </Text>
        <Text alignSelf="flex-end" color="red.500">
          ${item.price}
        </Text>
        <Button
          type="button"
          h="40px"
          w="100%"
          color="blackAlpha.800"
          variant="outline"
          display="flex"
          justifyContent="space-between"
        >
          <ChevronDownIcon
            as="button"
            fontSize="35px"
            _hover={{ color: "red" }}
            onClick={() => handleQtyChange("DECR", 1)}
          />
          <NumberInput
            variant="unstyled"
            value={item.quantity}
            onChange={(value) => handleQtyChange("CTRL", +value)}
          >
            <NumberInputField textAlign="center" />
          </NumberInput>
          <ChevronUpIcon
            as="button"
            fontSize="35px"
            _hover={{ color: "red" }}
            onClick={() => handleQtyChange("INCR", 1)}
          />
        </Button>
        <Button
          type="button"
          h="40px"
          w="100%"
          color="white"
          _hover={{ backgroundColor: "teal" }}
          bg="#121212"
          onClick={() => handleQtyChange("INCR", 1)}
        >
          Add
        </Button>
      </VStack>
    </WrapItem>
  );
};

export default ProductCard;
