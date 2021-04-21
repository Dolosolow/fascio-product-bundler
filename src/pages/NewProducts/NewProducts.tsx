import { Heading, VStack, Flex, Select, Accordion } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import _ from 'lodash';

import { ErrorBoundary, ErrorPrompt } from 'src/components/ErrorPrompt';
import AccordionTableItem from 'src/components/AccordionTableItem';
import Container from 'src/components/Container';
import SearchInput from 'src/components/SearchInput';

const NewProducts = () => {
  const { values, errors } = useFormikContext<Builder.Grup.BuilderMap>();

  const renderProductLists = () => {
    return (
      <ErrorPrompt
        hasError={!_.isEmpty(errors)}
        warningInstructions="section products cannot be left empty."
        placement="top"
        top="-50px"
        left="855px"
      >
        <ErrorBoundary>
          {({ isInvalid }) => {
            return values.content.steps.map((section, idx) => {
              return (
                <AccordionTableItem
                  key={idx}
                  idx={idx}
                  section={section}
                  sectionProducts={section.products}
                  hasError={isInvalid}
                />
              );
            });
          }}
        </ErrorBoundary>
      </ErrorPrompt>
    );
  };

  return (
    <VStack h="100%" w="100%">
      <Container direction="column">
        <Heading fontWeight="light" size="xl" mb={5} alignSelf="flex-start">
          Add Products
        </Heading>
        <Flex>
          <Select
            placeholder="Filter"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            borderBottomLeftRadius={0}
            w="13%"
            minW="118px"
          >
            <option value="brand">Brand</option>
            <option value="category">Category</option>
          </Select>
          <SearchInput />
        </Flex>
        <Accordion defaultIndex={[0]} allowToggle position="relative">
          {renderProductLists()}
        </Accordion>
      </Container>
    </VStack>
  );
};

export default NewProducts;
