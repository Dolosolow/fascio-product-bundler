import { VStack, CheckboxGroup, Checkbox, Spinner } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import _ from 'lodash';

import SearchCheckboxForm from '../SearchCheckboxForm';
import ResultItem from './ResultItem';

import { Product } from 'src/types/schema';

interface SRGProps {
  searchInput: string;
  multipleSelection?: boolean;
  resetTermField: () => void;
}

const productsByKeyword = gql`
  query productsByKeyword($keyword: String!) {
    productsByKeyword(keyword: $keyword) {
      id
      sku
      name
      price
      sale_price
      primary_image {
        id
        description
        url_thumbnail
      }
    }
  }
`;

const SearchResultsGroup = ({
  multipleSelection = false,
  searchInput,
  resetTermField,
}: SRGProps) => {
  // const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
  const { values, setValues } = useFormikContext<any>();
  const [products, setProducts] = useState<any[]>([]);
  const [section, setSection] = useState('');

  const [fetchProducts, { called, loading, data }] = useLazyQuery<
    { productsByKeyword: Product[] },
    { keyword: string }
  >(productsByKeyword);

  const addProducts = (newProducts: any) => {
    setProducts([...newProducts]);
  };

  const onSectionChange = (section: string) => {
    setSection(section);
  };

  const resetAllFields = () => {
    resetTermField();
    setProducts([]);
  };

  const submitProducts = () => {
    const updatedSections = _.chain(values.content.steps).keyBy('instructions').value();
    products.forEach((prodId) => {
      const product = data!['productsByKeyword'].find((item) => item.id === prodId);
      updatedSections[section].products.push(product);
    });
    setValues({ ...values, content: { steps: _.values(updatedSections) } });
    console.log(`values submitting products: ${section}`);
    console.log(updatedSections[section].products);
  };

  const renderResultList = () => {
    if (called && loading)
      return <ResultItem error={<Spinner color="teal.500" thickness="3px" size="xl" />} />;

    if (called && !loading) {
      return !data!['productsByKeyword'].length ? (
        <ResultItem error={`No results for "${searchInput}"`} />
      ) : (
        data!['productsByKeyword'].map((item: Product) => {
          return (
            <ResultItem
              key={item.id!}
              title={item.name!}
              img={item['primary_image']!.url_thumbnail!}
              price={item.price!}
            >
              <Checkbox size="lg" value={item.id!} />
            </ResultItem>
          );
        })
      );
    }

    return null;
  };

  useEffect(() => {
    const fetchProductsByKeyword = () => {
      const term = searchInput;
      fetchProducts({ variables: { keyword: term } });
    };

    fetchProductsByKeyword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

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
        value={searchInput === '' ? [] : products}
      >
        {renderResultList()}
      </CheckboxGroup>
      {multipleSelection && (
        <SearchCheckboxForm
          totalSelectedProducts={products.length}
          onSectionChange={onSectionChange}
          onSubmitProducts={submitProducts}
          resetTermField={resetAllFields}
        />
      )}
    </VStack>
  );
};

export default SearchResultsGroup;

//
//

// import { VStack, CheckboxGroup, Checkbox } from '@chakra-ui/react';
// import { useFormikContext } from 'formik';
// import { useState, useEffect } from 'react';
// import _ from 'lodash';

// import SearchCheckboxForm from '../SearchCheckboxForm';
// import ResultItem from './ResultItem';

// import { testTableValues } from 'src/data/TestData';

// interface SRGProps {
//   searchInput: string;
//   multipleSelection?: boolean;
//   resetTermField: () => void;
// }

// const SearchResultsGroup = ({
//   multipleSelection = false,
//   searchInput,
//   resetTermField,
// }: SRGProps) => {
//   const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);
//   const [section, setSection] = useState('');

//   const renderResultList = () => (
//     <VStack maxH="380px" overflowY="scroll" w="100%">
//       {!searchResults.length ? (
//         <ResultItem error={`No results for "${searchInput}"`} />
//       ) : (
//         searchResults.map((result) => {
//           const { id, data } = result;
//           return (
//             <ResultItem
//               key={id}
//               title={data.product_name.value}
//               img={data.image.value}
//               price={data.price.value}
//             >
//               <Checkbox size="lg" value={id} />
//             </ResultItem>
//           );
//         })
//       )}
//     </VStack>
//   );

//   const addProducts = (newProducts: any) => {
//     setProducts([...newProducts]);
//   };

//   const onSectionChange = (section: string) => {
//     setSection(section);
//   };

//   const resetAllFields = () => {
//     resetTermField();
//     setProducts([]);
//   };

//   const submitProducts = () => {
//     const updatedSections = _.chain(values.content.steps).keyBy('instructions').value();
//     products.forEach((prod) => updatedSections[section].products.push(prod));
//     setValues({ ...values, content: { steps: _.values(updatedSections) } });
//   };

//   useEffect(() => {
//     if (searchInput.length > 0) {
//       const term = searchInput;
//       const results = testTableValues.filter((item) =>
//         item.data['product_name'].value.toLocaleLowerCase().includes(term)
//       );
//       setSearchResults(results);
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchInput]);

//   return (
//     <VStack
//       spacing={0}
//       hidden={!searchInput.length}
//       borderTop="none"
//       borderWidth={1}
//       borderTopLeftRadius={0}
//       borderTopRightRadius={0}
//       boxShadow="lg"
//       rounded="md"
//       bg="white"
//       h="max-content"
//       position="absolute"
//       top={12}
//       w="100%"
//       zIndex={100}
//     >
//       <CheckboxGroup
//         colorScheme="teal"
//         onChange={(values) => addProducts(values)}
//         value={searchInput === '' ? [] : products}
//       >
//         {renderResultList()}
//       </CheckboxGroup>
//       {multipleSelection && (
//         <SearchCheckboxForm
//           totalSelectedProducts={products.length}
//           onSectionChange={onSectionChange}
//           onSubmitProducts={submitProducts}
//           resetTermField={resetAllFields}
//         />
//       )}
//     </VStack>
//   );
// };

// export default SearchResultsGroup;
