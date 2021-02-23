import { Flex, Box, Divider, Stack, Button, Input, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import BuilderBlock from './builder_block';
import Container from '../../components/Container';

const BuilderPanel = () => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      p={[5, null, 7]}
      h="100%"
      bg={useColorModeValue('gray.100', 'grey.700')}
    >
      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="layout"
          instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
        >
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.3s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="steps layout"
          instructions="Optional: Display numbered steps to completion. If you do not want numbered steps select N/A."
        >
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.3s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
          <Box
            w="120px"
            h="100px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
        </BuilderBlock>
        <BuilderBlock title="Background Color">
          <Box
            w="250px"
            h="50px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            bg="red.300"
            _hover={{ borderColor: 'teal', transition: 'all 0.3s ease-in-out' }}
          />
        </BuilderBlock>
        <BuilderBlock title="Border Color">
          <Box
            w="250px"
            h="50px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            bg="black"
            _hover={{ borderColor: 'teal', transition: 'all 0.3s ease-in-out' }}
          />
        </BuilderBlock>
        <BuilderBlock title="Font Color">
          <Box
            w="250px"
            h="50px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            bg="white"
            _hover={{ borderColor: 'teal', transition: 'all 0.3s ease-in-out' }}
          />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="Banner Image"
          instructions="Optional: Add an image to give an edge to the page."
        >
          <Box
            w="520px"
            h="100px"
            maxW="520px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            cursor="pointer"
            _hover={{ borderColor: 'teal', transition: 'all 0.4s ease-in-out' }}
          />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="Content"
          instructions="Content to be displayed along with the products you have chosen."
        >
          <></>
        </BuilderBlock>
        <BuilderBlock title="Section 1" direction="column" validated={true}>
          <Input variant="flushed" placeholder="Section Instruction 1" maxW="520px" w="520px" />
          <Input variant="flushed" placeholder="Special Note" maxW="520px" w="520px" />
          <Button
            variant="ghost"
            textAlign="center"
            h={14}
            _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
            _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          >
            + Special Note
          </Button>
        </BuilderBlock>
        <BuilderBlock title="Section 2" direction="column" validated={true}>
          <Input variant="flushed" placeholder="Section Instruction 2" maxW="520px" w="520px" />
          <Input variant="flushed" placeholder="Special Note" maxW="520px" w="520px" />
          <Button
            variant="ghost"
            textAlign="center"
            h={14}
            _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
            _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          >
            + Special Note
          </Button>
        </BuilderBlock>
        <Button
          variant="ghost"
          h="150px"
          w="100%"
          textAlign="center"
          p={0}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        >
          + Add Step
        </Button>
      </Container>

      <Stack direction="row" spacing={4} align="center" pt="72" pb={[5, null, 7]}>
        <Button
          w="160px"
          size="lg"
          colorScheme="green"
          variant="solid"
          rightIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
        <Button w="160px" size="lg" colorScheme="black" variant="outline">
          Cancel
        </Button>
      </Stack>
    </Flex>
  );
};

export default BuilderPanel;
