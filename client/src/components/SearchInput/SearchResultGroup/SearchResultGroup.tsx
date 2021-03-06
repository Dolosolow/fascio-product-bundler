import { useState, useEffect } from "react";
import { VStack, CheckboxGroup, Spinner } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";

import SearchCheckboxForm from "../SearchCheckboxForm";
import ResultItem from "./ResultItem";

import { Product } from "src/types/schema";
import { productsByKeyword } from "src/graphql/queries";

interface SRGProps {
  searchInput: string;
  multipleSelection?: boolean;
  resetTermField: () => void;
}
// types for Apollo/Client useLazyQuery
type TData = { productsByKeyword: Product[] };
type OperationVariables = { keyword: string };

export const SearchResultsGroup = ({
  multipleSelection = false,
  searchInput,
  resetTermField,
}: SRGProps) => {
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
  const [products, setProducts] = useState<string[]>([]);
  const [section, setSection] = useState("");

  const [fetchProducts, { called, loading, data }] = useLazyQuery<TData, OperationVariables>(
    productsByKeyword
  );

  const resetAllFields = () => {
    resetTermField();
    setProducts([]);
  };

  const addProducts = (newProducts: any) => {
    setProducts([...newProducts]);
  };

  const submitProducts = () => {
    const updatedSections = _.chain(values.content.sections).keyBy("sectionName").value();

    products.forEach((prodId) => {
      const product = data!["productsByKeyword"].find((item) => item.id === prodId);
      updatedSections[section].products.push(product!);
    });

    setValues({ ...values, content: { sections: _.values(updatedSections) } });
  };

  const renderResultList = () => {
    if (called && loading)
      return <ResultItem error={<Spinner color="teal.500" thickness="3px" size="xl" />} />;

    if (called && !loading && data) {
      return !data!["productsByKeyword"].length ? (
        <ResultItem error={`No results for "${searchInput}"`} />
      ) : (
        data!["productsByKeyword"].map((item: Product) => {
          return (
            <ResultItem
              key={item.id!}
              value={item.id!}
              title={item.name!}
              img={item["primary_image"]!.url_thumbnail!}
              price={item.price!}
            />
          );
        })
      );
    }

    return null;
  };

  useEffect(() => {
    if (searchInput === "") {
      resetAllFields();
    } else {
      const term = searchInput;
      fetchProducts({ variables: { keyword: term } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    let initialSections = values.content.sections.map((section) => ({
      ...section,
      products: [],
    }));

    setValues({ ...values, content: { sections: initialSections } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VStack
      spacing={0}
      hidden={!searchInput.length}
      borderTop="none"
      borderWidth={1}
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      boxShadow="lg"
      rounded="md"
      bg="white"
      h="max-content"
      position="absolute"
      top={12}
      w="100%"
      zIndex={100}
    >
      <CheckboxGroup
        colorScheme="teal"
        onChange={(values) => addProducts(values)}
        value={searchInput === "" ? [] : products}
      >
        {renderResultList()}
      </CheckboxGroup>
      {multipleSelection && (
        <SearchCheckboxForm
          totalSelectedProducts={products.length}
          onSectionChange={(section) => setSection(section)}
          onSubmitProducts={submitProducts}
          resetTermField={resetAllFields}
        />
      )}
    </VStack>
  );
};
