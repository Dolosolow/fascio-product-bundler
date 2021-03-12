import {
  Heading,
  VStack,
  Select,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import Container from 'src/components/Container';
import EmptyListState from 'src/components/EmptyListState';
import SearchInput from 'src/components/SearchInput';
import TableSaw from 'src/components/TableSaw';

import FinderSvg from 'src/images/svg/find-prod.svg';

import { testTableValues } from 'src/data/TestData';

const NewProducts = () => {
  const testValues: Builder.Grup.BuilderMap = {
    layout: {
      bannerImg: null,
      bgColor: '#eeeeee',
      template: 'G1_VERTROW',
    },
    steps: {
      template: 'STEP_COLOR_CM',
      alternateBgColor: '#eeeeee',
      bgColor: '#28a8e4',
      borderColor: '#121212',
      fontColor: '#ffffff',
    },
    content: {
      steps: [
        {
          instructions: 'Sethescope',
          limit: null,
          section: 1,
          specialNotes: [],
          products: [],
        },
        {
          instructions: 'Safety',
          limit: null,
          section: 2,
          specialNotes: [],
          products: [],
        },
        {
          instructions: 'Equipment',
          limit: null,
          section: 3,
          specialNotes: [],
          products: [],
        },
      ],
    },
  };

  const renderProductLists = () => {
    return testValues.content.steps.map((section, idx) => (
      <AccordionItem key={idx} borderWidth="1px">
        <h2>
          <AccordionButton>
            <Flex flex="1" textAlign="left">
              {section.instructions}
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TableSaw
            tableCaption="View/Modify products in the section"
            tableContents={testTableValues}
            EmptyStateComponent={
              <EmptyListState
                imgsrc={FinderSvg}
                headingText="Start by adding a product"
                subText="Currently there are no products in this section. Use the search bar and begin to add products."
              />
            }
          />
        </AccordionPanel>
      </AccordionItem>
    ));
  };

  return (
    <VStack h="100%" w="100%">
      <Container direction="column">
        <Heading as="h1" fontWeight="normal" size="xl" mb={10} alignSelf="flex-start">
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
            <option value="option3">Option 3</option>
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
