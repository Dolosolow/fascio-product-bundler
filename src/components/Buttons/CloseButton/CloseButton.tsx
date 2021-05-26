import { Button, useColorModeValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

interface CBProps {
  onClose: () => void;
  iconSize?: "sm" | "md" | "lg";
  buttonPosition?: { top: string; left: string };
  variant?: "light" | "dark";
}

export const CloseButton = (props: CBProps) => {
  const { variant = "dark", buttonPosition = { left: "0", top: "40px" } } = props;
  const defaultBtnEvenColor = useColorModeValue("gray.200", "gray.700");

  const configureButtonSize = () => {
    switch (props.iconSize) {
      case "sm":
        return "0.8";
      case "md":
        return "1";
      case "lg":
        return "1.2";
      default:
        return "1";
    }
  };

  const handleOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.onClose();
  };

  return (
    <Button
      variant="ghost"
      cursor="pointer"
      p={0}
      alignSelf="flex-start"
      borderRadius="100px"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bgColor={variant === "light" ? "gray.200" : "transparent"}
      border={`1px solid ${defaultBtnEvenColor}`}
      top={buttonPosition.top}
      left={buttonPosition.left}
      zIndex={100}
      onClick={handleOnClose}
      transform={`scale(${configureButtonSize()})`}
      _hover={{ backgroundColor: defaultBtnEvenColor }}
      _active={{ backgroundColor: defaultBtnEvenColor }}
    >
      <CloseIcon />
    </Button>
  );
};
