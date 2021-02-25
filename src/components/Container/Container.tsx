import React from 'react';
import { FlexProps, Flex } from '@chakra-ui/react';

export interface CProps extends FlexProps {}

const Container = (props: CProps) => {
  const children = React.Children.map(props.children, (child, idx) => {
    if (React.isValidElement(child) && idx > 0) {
      return React.cloneElement(child, { ...child.props, mt: '8', pl: ['5', null, '12', '20'] });
    }
    return child;
  });

  return <Flex {...props}>{children}</Flex>;
};

export default Container;
