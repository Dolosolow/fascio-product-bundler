import { useState, useRef } from "react";
import { chakra, Flex, HStack, Checkbox } from "@chakra-ui/react";

import Thumbnail from "src/components/Thumbnail";

interface RIProps {
  value?: string | number;
  error?: string | React.ReactNode;
  img?: string;
  title?: string;
  price?: string;
}

const ResultItem = ({ value, error, img, title, price }: RIProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  };

  return (
    <Flex
      px={error ? 3 : 4}
      w="100%"
      minH="70px"
      cursor="pointer"
      _hover={{ backgroundColor: "gray.100" }}
      justifyContent={error ? "center" : "space-between"}
      alignItems="center"
      onClick={handleClick}
    >
      {error ? (
        <>{typeof error === "string" ? <chakra.p fontSize="md">{error}</chakra.p> : error}</>
      ) : (
        <>
          <HStack spacing={6}>
            <Checkbox
              ref={checkboxRef}
              size="lg"
              value={value}
              onClick={(e) => e.stopPropagation()}
            />
            <Thumbnail w="40px" h="40px" imgsrc={img} />
          </HStack>
          <chakra.p fontSize="sm">{title}</chakra.p>
          <chakra.p fontSize="sm">${price}</chakra.p>
        </>
      )}
    </Flex>
  );
};

export default ResultItem;

//
//
//
//
//
// import { chakra, Flex, HStack } from '@chakra-ui/react';

// import Thumbnail from 'src/components/Thumbnail';

// interface RIProps {
//   children?: React.ReactNode;
//   error?: string | React.ReactNode;
//   img?: string;
//   title?: string;
//   price?: string;
// }

// const ResultItem = ({ children, error, img, title, price }: RIProps) => {
//   const renderEmptySearchMsg = () => (
//     <Flex
//       px={3}
//       w="100%"
//       minH="70px"
//       cursor={children ? 'default' : 'pointer'}
//       _hover={{ backgroundColor: 'gray.100' }}
//       justifyContent="center"
//       alignItems="center"
//     >
//       {typeof error === 'string' ? <chakra.p fontSize="md">{error}</chakra.p> : error}
//     </Flex>
//   );

//   const renderResultItemCard = () => (
//     <Flex
//       px={4}
//       w="100%"
//       minH="70px"
//       cursor={children ? 'default' : 'pointer'}
//       _hover={{ backgroundColor: 'gray.100' }}
//       justifyContent="space-between"
//       alignItems="center"
//     >
//       <HStack spacing={6}>
//         {children}
//         <Thumbnail w="40px" h="40px" imgsrc={img} />
//       </HStack>
//       <chakra.p fontSize="sm">{title}</chakra.p>
//       <chakra.p fontSize="sm">${price}</chakra.p>
//     </Flex>
//   );

//   return error ? renderEmptySearchMsg() : renderResultItemCard();
// };

// export default ResultItem;
