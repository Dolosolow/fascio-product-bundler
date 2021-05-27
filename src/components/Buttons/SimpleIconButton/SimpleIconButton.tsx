import { Flex, FlexProps, IconButton } from "@chakra-ui/react";

interface CBProps extends FlexProps {
  icon: JSX.Element;
  disabled?: boolean;
  children?: React.ReactNode;
  handleClick?: () => void;
}

const SimpleIconButton = ({ disabled = false, ...props }: CBProps) => {
  return (
    <Flex
      cursor="pointer"
      h="min-content"
      w="min-content"
      position="relative"
      {...props}
      onClick={props.handleClick}
    >
      <IconButton
        disabled={disabled}
        m={4}
        variant="ghost"
        alignSelf="flex-end"
        aria-label="Search database"
        borderRadius="50%"
        icon={props.icon}
      />
      {props.children}
    </Flex>
  );
};

export default SimpleIconButton;
