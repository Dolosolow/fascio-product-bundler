import { VStack, CheckboxGroup, Checkbox } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import _ from 'lodash';

import SearchCheckboxForm from '../SearchCheckboxForm';
import ResultItem from './ResultItem';

import { testTableValues } from 'src/data/TestData';

interface SRGProps {
  searchInput: string;
  multipleSelection?: boolean;
  resetTermField: () => void;
}

const SearchResultsGroup = ({
  multipleSelection = false,
  searchInput,
  resetTermField,
}: SRGProps) => {
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [section, setSection] = useState('');

  const renderResultList = () => (
    <VStack maxH="380px" overflowY="scroll" w="100%">
      {!searchResults.length ? (
        <ResultItem error={`No results for "${searchInput}"`} />
      ) : (
        searchResults.map((result) => {
          const { id, data } = result;
          return (
            <ResultItem
              key={id}
              title={data.product_name.value}
              img={data.image.value}
              price={data.price.value}
            >
              <Checkbox size="lg" value={id} />
            </ResultItem>
          );
        })
      )}
    </VStack>
  );

  const addProducts = (newProducts: any) => {
    setProducts([...newProducts]);
  };

  const onSectionChange = (section: string) => {
    setSection(section);
  };

  const resetAllFields = () => {
    resetTermField();
    setProducts([]);
  };

  const submitProducts = () => {
    const updatedSections = _.chain(values.content.steps).keyBy('instructions').value();
    products.forEach((prod) => updatedSections[section].products.push(prod));
    setValues({ ...values, content: { steps: _.values(updatedSections) } });
  };

  useEffect(() => {
    if (searchInput !== '') {
      const term = searchInput;
      const results = testTableValues.filter((item) =>
        item.data['product_name'].value.toLocaleLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  return (
    <VStack
      spacing={0}
      hidden={!searchInput.length}
      borderTop="none"
      borderWidth={1}
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      boxShadow="lg"
      rounded="md"
      bg="white"
      h="max-content"
      position="absolute"
      top={12}
      w="100%"
      zIndex={100}
    >
      <CheckboxGroup
        colorScheme="teal"
        onChange={(values) => addProducts(values)}
        value={searchInput === '' ? [] : products}
      >
        {renderResultList()}
      </CheckboxGroup>
      {multipleSelection && (
        <SearchCheckboxForm
          totalSelectedProducts={products.length}
          onSectionChange={onSectionChange}
          onSubmitProducts={submitProducts}
          resetTermField={resetAllFields}
        />
      )}
    </VStack>
  );
};

export default SearchResultsGroup;
