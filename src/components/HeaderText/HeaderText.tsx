import { Box, Heading } from '@chakra-ui/react';

interface HTProps {
  content?: '' | JSX.Element | undefined;
  textColor: 'red.400' | 'inherit';
  title: string;
}

const formatTitle = (title: string) => {
  return title.charAt(0).toUpperCase() + title.substring(1);
};

const HeaderText = ({ content, title, textColor }: HTProps) => {
  return (
    <Box
      mr={5}
      alignSelf={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
      color={textColor}
      maxW="480px"
    >
      <Heading fontSize={['md', null, 'xl']} whiteSpace="nowrap" mb={2}>
        {formatTitle(title)}
      </Heading>
      {content}
    </Box>
  );
};

export default HeaderText;
