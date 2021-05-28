import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { SimpleIconButton } from "src/components/Buttons";
import Summary from "./Summary";

import bundleContext from "src/contexts/bundleContext";
import cartContext from "src/contexts/cartContext";
import CartList from "./CartList.tsx/CartList";

const GrupCart = () => {
  const { state: cartState } = useContext(cartContext);
  const bundle = useContext(bundleContext);

  const history = useHistory();

  return (
    <Flex w="100%" h="100%" position="relative">
      <SimpleIconButton
        position="absolute"
        left={12}
        top={16}
        h="5px"
        w="5px"
        transform="scale(1.0)"
        _hover={{ color: "#09bba3" }}
        handleClick={() => history.goBack()}
        icon={<ChevronLeftIcon fontSize="5xl" />}
      />
      <CartList sections={bundle!.content.sections} cartItems={cartState} />
      <Summary bundle={bundle!} cart={cartState} />
    </Flex>
  );
};

export default GrupCart;
