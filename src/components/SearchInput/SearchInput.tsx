import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import SearchResultGroup from './SearchResultGroup';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [term, setTerm] = useState('');
  let timer: any;

  const onSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    clearTimeout(timer);
    timer = setTimeout(() => {
      setTerm(e.target.value);
    }, 1000);
  };

  const resetTerm = () => {
    setTerm('');
    setValue('');
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
        onChange={onSetValue}
        value={value}
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
