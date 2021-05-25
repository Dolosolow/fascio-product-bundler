import { Flex, FlexProps, IconButton } from "@chakra-ui/react";

interface CBProps extends FlexProps {
  icon: JSX.Element;
  children?: React.ReactNode;
  handleOnClick?: () => void;
}

const SimpleIconButton = ({ icon, children, handleOnClick, ...props }: CBProps) => {
  return (
    <Flex
      cursor="pointer"
      h="min-content"
      w="min-content"
      position="relative"
      {...props}
      onClick={handleOnClick}
    >
      <IconButton
        m={4}
        variant="ghost"
        alignSelf="flex-end"
        aria-label="Search database"
        borderRadius="50%"
        icon={icon}
      />
      {children}
    </Flex>
  );
};

export default SimpleIconButton;
