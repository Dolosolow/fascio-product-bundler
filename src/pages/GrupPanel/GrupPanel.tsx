import { Flex, Heading, VStack, chakra } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
// import { AddIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

import { getAllBundles } from 'src/graphql/queries';

import Container from 'src/components/Container';
import EmptyListState from 'src/components/EmptyListState';
// import TableSaw from 'src/components/TableSaw';

import EmptyBox from 'src/images/svg/empty-box.svg';
// import { emptyTestTableValues } from 'src/data/TestData';

const GrupPanel = () => {
  const { loading, error, data } = useQuery(getAllBundles);

  const renderBundlesList = () => {
    if (loading) {
      return <chakra.p>LOADING...</chakra.p>;
    } else if (error) {
      return <chakra.p>something went wrong</chakra.p>;
    } else if (data) {
      return <pre>{JSON.stringify(data.getBundles, null, 2)}</pre>;
    }

    return;
  };

  return (
    <Flex p={[5, null, 7]}>
      <VStack spacing={14} h="100%" w="100%">
        <Heading fontWeight="light" size="xl" ml={[0, 0, 0, 0, '6.5rem']} alignSelf="flex-start">
          View Bundles
        </Heading>
        <Container direction="column" borderWidth="1px" borderRadius={8}>
          {data && data.getBundles.length > 0 ? (
            renderBundlesList()
          ) : (
            <EmptyListState
              imgsrc={EmptyBox}
              link={{ path: '/page/new', text: 'Create a bundle' }}
              headingText="Start by creating a new bundle"
              subText="Style/add content to the page, add products to the bundle, review and submit. Just like that, you created a bundle."
            />
          )}
        </Container>
      </VStack>
    </Flex>
  );
};

export default GrupPanel;
