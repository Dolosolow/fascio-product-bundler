import { Heading, VStack, Flex, Select, Accordion } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import _ from 'lodash';

import AccordionTableItem from 'src/components/AccordionTableItem';
import Container from 'src/components/Container';
import SearchInput from 'src/components/SearchInput';
import { TSContents } from 'src/components/TableSaw';

import { testTableValues } from 'src/data/TestData';

const NewProducts = () => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();

  const renderProductLists = () => {
    return values.content.steps.map((section, idx) => {
      const sectionProducts: TSContents = [];

      section.products.forEach((productId) => {
        sectionProducts.push(_.chain(testTableValues).keyBy('id').value()[productId]);
      });

      return (
        <AccordionTableItem
          key={idx}
          idx={idx}
          section={section}
          sectionProducts={sectionProducts}
        />
      );
    });
  };

  return (
    <VStack h="100%" w="100%">
      <Container direction="column">
        <Heading
          fontWeight="light"
          size="xl"
          ml={['1.2rem', '1.2rem', '1.2rem', '1.2rem', '5rem']}
          mb={5}
          alignSelf="flex-start"
        >
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
        <Accordion defaultIndex={[0]} allowToggle>
          {renderProductLists()}
        </Accordion>
      </Container>
    </VStack>
  );
};

export default NewProducts;
