import { chakra, Flex, HStack, FormControl, Select, Button } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

interface SCFProps {
  totalSelectedProducts: number;
  onSectionChange: (section: string) => void;
  onSubmitProducts: () => void;
  resetTermField: () => void;
}

const SearchCheckboxForm = (props: SCFProps) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const [selectValue, setSelectValue] = useState('');

  const onCancel = () => {
    setSelectValue('');
    props.resetTermField();
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onSectionChange(e.target.value);
  };

  const onProductsSubmit = () => {
    if (selectValue !== '') {
      setSelectValue('');
      props.resetTermField();
      props.onSubmitProducts();
    }
  };

  const renderSelectItems = () => (
    <FormControl name="addToSection">
      <Select
        name="section"
        variant="filled"
        placeholder="Select a section"
        w="160px"
        defaultValue="CRL"
        marginX={5}
        isRequired={true}
        value={selectValue}
        onChange={onSelectChange}
      >
        {values.content.steps.map((section) => (
          <option key={section.instructions} value={section.instructions}>
            {section.instructions.charAt(0).toUpperCase() + section.instructions.slice(1)}
          </option>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Flex
      w="100%"
      h="70px"
      minH="70px"
      borderTopWidth={1}
      px={5}
      alignItems="center"
      justifyContent="space-between"
    >
      <chakra.p whiteSpace="nowrap">
        <strong>{props.totalSelectedProducts}</strong> product selected
      </chakra.p>
      {renderSelectItems()}
      <HStack>
        <Button variant="outline" colorScheme="gray" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="solid" colorScheme="teal" onClick={onProductsSubmit}>
          Add
        </Button>
      </HStack>
    </Flex>
  );
};

export default SearchCheckboxForm;
