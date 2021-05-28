import { Flex, FlexProps } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

import { BoxCartIcon } from "src/components/icons/boxcart";

import SimpleIconButton from "../SimpleIconButton";

interface CBProps extends FlexProps {
  itemsInCart: any[];
}

const CartButton = ({ itemsInCart, ...props }: CBProps) => {
  let { id } = useParams<{ id: string }>();
  const disabled = itemsInCart.length === 0;

  return (
    <Link to={`/bundle/${id}/cart`} onClick={(e) => disabled && e.preventDefault()}>
      <SimpleIconButton disabled={disabled} icon={<BoxCartIcon />} {...props}>
        {itemsInCart.length > 0 && (
          <Flex
            justify="center"
            align="center"
            lineHeight="1"
            h="18px"
            w="18px"
            borderRadius="50%"
            bg="red.500"
            position="absolute"
            right="49%"
            bottom="18px"
            color="#fff"
            fontSize="12px"
            fontWeight="bold"
          >
            {itemsInCart.length}
          </Flex>
        )}
      </SimpleIconButton>
    </Link>
  );
};

export default CartButton;
