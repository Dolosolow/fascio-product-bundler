import { Flex, Text, VStack } from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

import Container from 'src/components/Container';
import EmptyListState from 'src/components/EmptyListState';
// import TableSaw from 'src/components/TableSaw';

import EmptyBox from 'src/images/svg/empty-box.svg';
// import { emptyTestTableValues } from 'src/data/TestData';

const GrupPanel = () => {
  return (
    <Flex p={[5, null, 7]}>
      <VStack spacing={20} h="100%" w="100%">
        <Text fontSize="3xl" ml={[0, 0, 0, 0, 28]} alignSelf="flex-start">
          View Bundles
        </Text>
        <Container direction="column" borderWidth="1px" borderRadius={8}>
          <EmptyListState
            imgsrc={EmptyBox}
            link={{ path: '/page/new', text: 'Create a bundle' }}
            headingText="Start by creating a new bundle"
            subText="Style/add content to the page, add products to the bundle, review and submit. Just like that, you created a bundle."
          />
        </Container>
      </VStack>
    </Flex>
  );
};

export default GrupPanel;
