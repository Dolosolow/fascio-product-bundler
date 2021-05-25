import { useContext } from "react";
import { Flex } from "@chakra-ui/react";

import Summary from "./Summary";

import bundleContext from "src/contexts/bundleContext";
import cartContext from "src/contexts/cartContext";
import CartList from "./CartList.tsx/CartList";

const GrupCart = () => {
  const { state } = useContext(cartContext);
  const bundle = useContext(bundleContext);

  console.log(state);

  return (
    <Flex w="100%" h="100%">
      <CartList sections={bundle!.content.sections} cartItems={state} />
      <Summary />
    </Flex>
  );
};

export default GrupCart;
