import { Menu, MenuList, MenuButton, Button } from '@chakra-ui/react';

const QuickMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        aria-label="Options"
        bg="transparent"
        _hover={{ bgColor: '#f1f7ff' }}
        _active={{ bgColor: '#f1f7ff' }}
      >
        •••
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};

export default QuickMenu;
