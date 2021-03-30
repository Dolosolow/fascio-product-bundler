import { Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react';

const QuickMenu = () => {
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
      <MenuList>
        <MenuItem command="⌘E">Edit Product</MenuItem>
        <MenuItem command="⌘D">Delete Product</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default QuickMenu;
