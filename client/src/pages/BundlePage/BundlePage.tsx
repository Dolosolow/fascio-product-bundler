import { useState, useEffect, useReducer } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router";

import EmptyListState from "src/components/EmptyListState";
import HorizontalPlain from "./Layouts/HorizontalPlain";
import Footer from "src/components/Footer";

import { getBundle } from "src/graphql/queries";
import { Bundle } from "src/types/schema";

import bundleContext from "src/contexts/bundleContext";
import cartContext, { initialCartState } from "src/contexts/cartContext";
import cartReducer from "src/reducers/cartReducers";

import EmptyBundle from "src/images/svg/empty-bundle.svg";

// types for Apollo/Client useLazyQuery
type TData = { getBundle: Bundle };
type OperationVariables = { id: string };

const BundlePage = () => {
  let { id } = useParams<{ id: string }>();

  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const [fetchBundle, { loading, error, data }] = useLazyQuery<TData, OperationVariables>(
    getBundle,
    {
      variables: { id },
    }
  );

  const renderContent = () => {
    if (loading) {
      return (
        <Spinner
          h="150px"
          w="150px"
          thickness="3px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      );
    } else if (bundle === null || error === null) {
      return (
        <EmptyListState
          height="200px"
          imgsrc={EmptyBundle}
          headingText="Uh oh, Bundle has expired or been removed."
        />
      );
    }

    if (data) {
      const layout = <HorizontalPlain />;
      return (
        <bundleContext.Provider value={bundle}>
          <cartContext.Provider value={{ state, dispatch }}>{layout}</cartContext.Provider>
        </bundleContext.Provider>
      );
    }

    return (
      <Spinner
        h="150px"
        w="150px"
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
    );
  };

  useEffect(() => {
    fetchBundle();
    if (data) {
      setBundle(data!.getBundle);
    }
  }, [fetchBundle, data]);

  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      pb="30px"
      w="100vw"
      h={bundle === null || error === null ? "100vh" : "100%"}
    >
      {renderContent()}
      <Footer text="Powered by Grup ©" />
    </Flex>
  );
};

export default BundlePage;
