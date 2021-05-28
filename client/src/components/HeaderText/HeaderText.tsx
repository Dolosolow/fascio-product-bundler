import { Box, Heading, HeadingProps } from '@chakra-ui/react';

interface HTProps extends HeadingProps {
  content?: '' | JSX.Element | undefined;
  textColor: 'red.400' | 'inherit';
  title: string;
}

const formatTitle = (title: string) => {
  return title.charAt(0).toUpperCase() + title.substring(1);
};

const HeaderText = (props: HTProps) => {
  const { content, title, textColor, alignSelf = 'center' } = props;

  return (
    <Box
      mb={['0', '3']}
      mr={5}
      alignSelf={alignSelf}
      color={textColor || props.color}
      maxW={props.maxW || '480px'}
    >
      <Heading fontSize={['md', null, 'xl']} whiteSpace="nowrap" mb="0.5">
        {formatTitle(title)}
      </Heading>
      {content}
    </Box>
  );
};

export default HeaderText;
