import { VStack, Image, Text, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

interface ELSProps {
  headingText?: string;
  imgsrc: string;
  link?: { path: string; text: string };
  subText?: string;
}

const EmptyListState = ({ headingText, subText, imgsrc, link }: ELSProps) => {
  const renderLinkBtn = () => {
    return (
      link && (
        <Link to={link.path} style={{ marginTop: '22px' }}>
          <Button leftIcon={<AddIcon />} colorScheme="teal">
            {link.text}
          </Button>
        </Link>
      )
    );
  };

  // const renderLinkBtn = () => {
  //   return (
  //     link && (
  //       <Button onClick={() => getTestQuery()} leftIcon={<AddIcon />} colorScheme="teal">
  //         {link.text}
  //       </Button>
  //     )
  //   );
  // };

  return (
    <VStack spacing={2} h="100%" w="100%" justify="center" direction="column" my={6}>
      <Image src={imgsrc} h="150px" />
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        {headingText}
      </Text>
      <Text px={34} fontSize="sm" fontWeight="normal" textAlign="center" color="gray.500" w="lg">
        {subText}
      </Text>
      {renderLinkBtn()}
    </VStack>
  );
};

export default EmptyListState;
