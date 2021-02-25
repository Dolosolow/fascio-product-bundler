import { chakra, Stack, Box, Heading, Flex } from '@chakra-ui/react';
import { ReactChildren, ReactNode } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

export interface BBProps {
  children: ReactNode | ReactChildren;
  instructions?: string;
  title: string;
  validated?: boolean;
  direction?: 'column' | 'row';
  position?: 'center' | 'flex-start' | 'flex-end';
  mt?: string;
  pl?: string | Array<string | null>;
}

const formatTitle = (title: string) => {
  return title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
};

const BuilderBlock = ({
  children,
  instructions,
  title,
  validated,
  mt,
  pl,
  position = 'center',
  direction = 'row',
}: BBProps) => {
  const displayInstructions = instructions && (
    <chakra.p fontSize="xs" color="gray.500">
      {instructions}
    </chakra.p>
  );

  return (
    <Flex justifyContent="space-between" mt={mt} pl={pl}>
      <Box mr={5} alignSelf={position}>
        <Heading
          fontSize={['md', null, 'xl']}
          whiteSpace="nowrap"
          mb={2}
          mt={position !== 'center' ? 3 : 0}
        >
          {formatTitle(title)}
          {validated && <CheckIcon color="green.500" ml={4} mr={3} />}
        </Heading>
        {displayInstructions}
      </Box>
      <Stack spacing={3} direction={['column', direction]} maxW="530px">
        {children}
      </Stack>
    </Flex>
  );
};

export default BuilderBlock;
