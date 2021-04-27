import { chakra, Flex, HStack, Button } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useState } from 'react';

import SelectControl from 'src/components/SelectControl';

interface SCFProps {
  totalSelectedProducts: number;
  onSectionChange: (section: string) => void;
  onSubmitProducts: () => void;
  resetTermField: () => void;
}

const SearchCheckboxForm = (props: SCFProps) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const [selectValue, setSelectValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onCancel = () => {
    setSelectValue('');
    props.resetTermField();
  };

  const onProductsSubmit = () => {
    setSubmitting(true);
    if (selectValue !== '') {
      setSelectValue('');
      props.resetTermField();
      props.onSubmitProducts();
    }
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onSectionChange(e.target.value);
  };

  const handleSubmitState = (submitState: boolean = submitting) => {
    setSubmitting(submitState);
    return submitting;
  };

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
      <SelectControl
        placeholder="Select a section"
        options={values.content.sections.map((section) => section.sectionName)}
        value={selectValue}
        setSubmitting={handleSubmitState}
        onChange={onSelectChange}
      />
      <HStack>
        <Button variant="outline" colorScheme="gray" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="button" variant="solid" colorScheme="teal" onClick={onProductsSubmit}>
          Add
        </Button>
      </HStack>
    </Flex>
  );
};

export default SearchCheckboxForm;
