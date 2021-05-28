import React, { useState, useEffect } from "react";
import { chakra, Button } from "@chakra-ui/react";

export interface DBProps {
  buttonStatus: "ACTIVE" | "INACTIVE" | "REMOVED" | "EXPIRED";
}

const DynoButton = ({ buttonStatus }: DBProps) => {
  const [buttonState, setButtonState] = useState<string>(buttonStatus);
  const [buttonHovered, setButtonHovered] = useState(false);

  const getButtonState = (bundleStatus: string) => {
    let buttonState = "";

    if (bundleStatus === "ACTIVE") {
      buttonState = buttonHovered ? "stop" : "running";
    } else if (bundleStatus === "INACTIVE") {
      buttonState = buttonHovered ? "start" : "standby";
    }

    return buttonState
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    switch (buttonState) {
      case "INACTIVE":
        setButtonState("ACTIVE");
        break;
      case "ACTIVE":
        setButtonState("INACTIVE");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setButtonState(buttonState);
  }, [buttonState]);

  return (
    <Button
      type="button"
      colorScheme={buttonState === "ACTIVE" ? "green" : "yellow"}
      display="flex"
      flexDir="column"
      justifyContent="flex-end"
      overflow="hidden"
      variant="solid"
      minW="105px"
      maxW="105px"
      alignSelf="flex-end"
      onMouseEnter={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
      onClick={handleButtonClick}
    >
      <chakra.p
        transform={`${buttonHovered ? "translateY(40px)" : "translateY(0)"}`}
        display="flex"
        transition="all 0.2s ease-in"
        alignItems="center"
        h="40px"
        minH="40px"
      >
        {getButtonState(buttonState)}
      </chakra.p>
      <chakra.p
        transform={`${buttonHovered ? "translateY(40px)" : "translateY(0)"}`}
        display="flex"
        transition="all 0.2s ease-in"
        alignItems="center"
        h="40px"
        minH="40px"
      >
        {getButtonState(buttonState)}
      </chakra.p>
    </Button>
  );
};

export default DynoButton;
