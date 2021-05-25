import { Flex, Text } from "@chakra-ui/react";

interface TLProps {
  title?: string;
  messages?: string[];
  misc?: JSX.Element;
}

const TextList = ({ title, messages, misc }: TLProps) => {
  return (
    <Flex my={5} flexDir="column" alignSelf="center" align="center" justify="center" w="80%">
      <Text
        borderBottomWidth="1px"
        textAlign="center"
        fontSize="sm"
        fontWeight="bold"
        py={3}
        mb={3}
        w="100%"
      >
        {title}
      </Text>
      {messages &&
        messages.map((msg, idx) => (
          <Text key={idx} fontSize="sm" mb={1} textAlign="center">
            {msg}
          </Text>
        ))}
      {misc && misc}
    </Flex>
  );
};

export default TextList;
