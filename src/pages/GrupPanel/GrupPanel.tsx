import { Flex, VStack, Heading, chakra, Button } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import { getAllBundles } from 'src/graphql/queries';
import { Query } from 'src/types/schema';

import BundleCard from './BundleCard';
import Container from 'src/components/Container';
import EmptyListState from 'src/components/EmptyListState';
import GridTableHead from 'src/components/GridTableHead';

import EmptyBox from 'src/images/svg/empty-box.svg';

const GrupPanel = () => {
  const { loading, error, data } = useQuery<Query>(getAllBundles);
  const gridItemText = [
    'Bundle Name',
    'Products',
    'Page',
    'Scheduled',
    'Expires',
    'Created',
    'Status',
  ];

  const renderBundlesList = () => {
    if (loading) {
      return <chakra.p>LOADING...</chakra.p>;
    } else if (error) {
      return <chakra.p>something went wrong</chakra.p>;
    } else if (data) {
      const bundles = data.getBundles!;

      if (bundles.length > 0) {
        return (
          <>
            <Link to="/page/new" style={{ alignSelf: 'flex-end' }}>
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                m="3"
                mb="8"
                w="max-content"
              >
                Create a Bundle
              </Button>
            </Link>
            <GridTableHead gridItems={gridItemText} />
            <VStack alignSelf="center" spacing={3} mb={5} w="95%">
              {bundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </VStack>
          </>
        );
      } else {
        return (
          <EmptyListState
            imgsrc={EmptyBox}
            link={{ path: '/page/new', text: 'Create a bundle' }}
            headingText="Start by creating a new bundle"
            subText="Style/add content to the page, add products to the bundle, review and submit. Just like that, you created a bundle."
          />
        );
      }
    }
    return null;
  };

  return (
    <Flex p={[5, null, 7]}>
      <VStack spacing={14} h="100%" w="100%">
        <Heading fontWeight="light" size="xl" ml={[0, 0, 0, 0, '6.5rem']} alignSelf="flex-start">
          View Bundles
        </Heading>
        <Container direction="column" borderWidth="1px" borderRadius={8} minW="100%">
          {renderBundlesList()}
        </Container>
      </VStack>
    </Flex>
  );
};

export default GrupPanel;
