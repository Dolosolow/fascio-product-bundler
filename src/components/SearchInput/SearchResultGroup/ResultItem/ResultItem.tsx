import { chakra, Flex, HStack } from '@chakra-ui/react';

import Thumbnail from 'src/components/Thumbnail';

interface RIProps {
  children?: React.ReactNode;
  error?: string;
  img?: string;
  title?: string;
  price?: string;
}

const ResultItem = ({ children, error, img, title, price }: RIProps) => {
  const renderEmptySearchMsg = () => (
    <Flex
      px={3}
      w="100%"
      minH="70px"
      cursor={children ? 'default' : 'pointer'}
      _hover={{ backgroundColor: 'gray.100' }}
      justifyContent="center"
      alignItems="center"
    >
      <chakra.p fontSize="md">{error}</chakra.p>
    </Flex>
  );

  const renderResultItemCard = () => (
    <Flex
      px={4}
      w="100%"
      minH="70px"
      cursor={children ? 'default' : 'pointer'}
      _hover={{ backgroundColor: 'gray.100' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack spacing={6}>
        {children}
        <Thumbnail w="40px" h="40px" imgsrc={img} />
      </HStack>
      <chakra.p fontSize="sm">{title}</chakra.p>
      <chakra.p fontSize="sm">${price}</chakra.p>
    </Flex>
  );

  return error ? renderEmptySearchMsg() : renderResultItemCard();
};

export default ResultItem;
