import {
  Heading,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Container from 'src/components/Container';
import Thumbnail from 'src/components/Thumbnail';
// import BuilderBlock from '../BuilderPanel/BuilderBlock';
// import { useFormikContext } from 'formik';

const NewProducts = () => {
  //   const { values } = useFormikContext<Builder.Grup.BuilderMap>();
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
          instructions: 'Section 1',
          limit: null,
          section: 1,
          specialNotes: [],
        },
        {
          instructions: 'Section 2',
          limit: null,
          section: 2,
          specialNotes: [],
        },
      ],
    },
  };

  const sections = testValues.content.steps;

  console.log(sections);

  return (
    <VStack w="100%">
      <Container direction="column">
        <Heading as="h1" size="xl" mb={10} alignSelf="flex-start">
          Add Products
        </Heading>
        <Flex>
          <Select
            placeholder="Filter"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            w="13%"
            minW="118px"
          >
            <option value="brand">Brand</option>
            <option value="category">Category</option>
            <option value="option3">Option 3</option>
          </Select>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
            <Input
              type="search"
              placeholder="Search Products"
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
            />
          </InputGroup>
        </Flex>
        <Accordion allowToggle>
          {testValues.content.steps.map((section) => (
            <AccordionItem borderWidth="1px">
              <h2>
                <AccordionButton>
                  <Flex flex="1" textAlign="left">
                    {section.instructions}
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Thumbnail bg="red.300" />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </VStack>
  );
};

export default NewProducts;

// {testValues.content.steps.map((section) => (
// 	<Accordion key={section.section}>
// 		<AccordionItem>
// 			<h2>
// 				<AccordionButton>
// 					<Flex flex="1" textAlign="left">
// 						{section}
// 					</Flex>
// 				</AccordionButton>
// 			</h2>
// 			<AccordionPanel pb={4}>
// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// 			</AccordionPanel>
// 		</AccordionItem>
// 	</Accordion>
// ))}

/* <VStack spacing={6} divider={<Divider my={6} w="90%" />} w="100%">
<Box w="100%">
  <Heading as="h1" size="xl" mb={10}>
    New Products
  </Heading>
  <Container direction="column">
    <BuilderBlock
      title="Section 1"
      instructions="Add Products followed by selecting any optional filters."
    >
      {sections[0].instructions}
    </BuilderBlock>
  </Container>
</Box>
</VStack> */
