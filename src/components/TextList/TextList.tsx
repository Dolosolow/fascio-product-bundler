import { Flex, Text } from "@chakra-ui/react";

interface TLProps {
  messages: string[] | undefined;
  title?: string;
  misc?: JSX.Element;
}

const TextList = ({ title, misc, messages = [] }: TLProps) => {
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
      {messages?.length > 0 &&
        messages.map((msg, idx) => (
          <Text
            key={idx}
            fontSize="sm"
            mb={1}
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: msg }}
          />
        ))}
      {misc && misc}
    </Flex>
  );
};

export default TextList;
