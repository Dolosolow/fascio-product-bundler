import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, VStack, Heading, chakra, Button, Center, Spinner } from "@chakra-ui/react";

import BundleCard from "./BundleCard";
import Container from "src/components/Container";
import EmptyListState from "src/components/EmptyListState";
import GridTableHead from "src/components/GridTableHead";

import { getAllBundles } from "src/graphql/queries";
import { Query } from "src/types/schema";

import EmptyBox from "src/images/svg/empty-box.svg";

const GrupPanel = () => {
  const { loading, error, data } = useQuery<Query>(getAllBundles);
  const gridItemText = [
    "Bundle Name",
    "Products",
    "Page",
    "Scheduled",
    "Expires",
    "Created",
    "Status",
  ];

  const renderBundlesList = () => {
    if (loading) {
      return (
        <Center mb={5} minH="350px" w="95%">
          <Spinner color="teal.500" thickness="3px" size="xl" />
        </Center>
      );
    } else if (error) {
      return (
        <Center mb={5} minH="350px" w="95%" flexDir="column">
          <chakra.p fontSize={20}>something went wrong</chakra.p>
        </Center>
      );
    } else if (data) {
      const bundles = data.getBundles;

      if (bundles && bundles.length > 0) {
        return (
          <>
            <Link to="/page/new" style={{ alignSelf: "flex-end" }}>
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
            link={{ path: "/page/new", text: "Create a bundle" }}
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
        <Heading fontWeight="light" size="xl" ml={[0, 0, 0, 0, "6.5rem"]} alignSelf="flex-start">
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
