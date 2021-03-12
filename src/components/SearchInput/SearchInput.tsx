import { InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = () => {
  return (
    <InputGroup flex="1" flexDirection="column" position="relative">
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
      <Input
        type="search"
        placeholder="Search Products"
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
      />
      <Flex
        hidden={true}
        borderTop="none"
        borderWidth={1}
        rounded="md"
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        boxShadow="lg"
        p="6"
        bg="white"
        h="120px"
        position="absolute"
        top={10}
        w="100%"
        _hover={{ backgroundColor: 'gray.300' }}
        zIndex={100}
      ></Flex>
    </InputGroup>
  );
};

export default SearchInput;
