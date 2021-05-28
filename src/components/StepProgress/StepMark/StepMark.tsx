import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { CheckIcon } from "src/components/icons/checkmark";

interface SMProps {
  variant?: "outline" | "filled";
  shape?: Builder.Grup.StepsShapeTemplate;
  stepBgColor?: string;
  stepBorder?: string;
  stepFontColor?: string;
  stepIdx: string | number;
  title?: string;
  complete?: boolean;
  hasError?: boolean;
  handleClick: () => void;
}

const StepMark = ({ variant = "filled", ...props }: SMProps) => {
  const renderStepFontColor = () => {
    return variant === "outline" && props.stepFontColor === "#fff" ? "black" : props.stepFontColor;
  };

  const animateOnEvent = () => {
    if (props.hasError) {
      return { scale: [1, 1.25, 1], rotate: [0, -15, 15, -15, 15, -15, 15, 0] };
    } else if (props.complete) {
      return { scale: [1, 1.4, 1] };
    }
    return;
  };

  return (
    <Flex
      position="relative"
      justify="center"
      align="center"
      cursor="pointer"
      onClick={() => props.handleClick()}
    >
      <motion.div animate={animateOnEvent()} transition={{ duration: 0.65 }}>
        <Flex
          border="2px"
          borderColor={props.stepBorder || "#000"}
          bg={variant === "filled" ? props.stepBgColor : "transparent"}
          w="25px"
          h="25px"
          minW="25px"
          borderRadius="100px"
          justify="center"
          align="center"
          flexDir="column"
        >
          {props.complete ? (
            <CheckIcon width="20px" height="20px" fill={renderStepFontColor()} />
          ) : (
            <Text color={renderStepFontColor()} lineHeight="1px" fontWeight="semibold">
              {props.stepIdx}
            </Text>
          )}
        </Flex>
      </motion.div>
      {props.title && (
        <Text position="absolute" top="35px" whiteSpace="nowrap" fontSize="xs">
          {props.title}
        </Text>
      )}
    </Flex>
  );
};

export default StepMark;
