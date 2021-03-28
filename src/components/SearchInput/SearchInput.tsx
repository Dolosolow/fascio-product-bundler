import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import SearchResultGroup from './SearchResultGroup';

const SearchInput = () => {
  const [term, setTerm] = useState('');

  const onTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const resetTerm = () => {
    setTerm('');
  };

  return (
    <InputGroup flex="1" flexDirection="column" position="relative">
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
      <Input
        type="search"
        placeholder="Search Products"
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        onChange={onTermChange}
        value={term}
      />
      <SearchResultGroup
        multipleSelection
        searchInput={term.toLocaleLowerCase()}
        resetTermField={resetTerm}
      />
    </InputGroup>
  );
};

export default SearchInput;
