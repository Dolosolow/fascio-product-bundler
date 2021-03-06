import { chakra, Flex, Stack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import _ from 'lodash';

import HeaderText from 'src/components/HeaderText';

export interface BBProps extends Builder.BuilderTools {
  instructions?: string;
  title: string;
  errors?: FormikErrors<any>;
}

const indicateError = (errors: FormikErrors<any>, name: string) => {
  return _.keysIn(errors).includes(name.split(' ')[0]) ? 'red.400' : 'inherit';
};

const BuilderBlock = (props: BBProps) => {
  const { direction = 'row' } = props;

  const renderInstructions = props.instructions && (
    <chakra.p fontSize="xs">{props.instructions}</chakra.p>
  );

  const renderChildren = (
    <Stack
      spacing={3}
      direction={['column', direction === 'row' ? 'row' : 'column']}
      maxW="530px"
      alignSelf="flex-end"
      position="relative"
    >
      {props.children}
    </Stack>
  );

  return (
    <Flex
      justifyContent="space-between"
      mt={props.mt}
      pl={props.pl}
      direction={[props.responsiveDirection ? 'column' : 'row', null, 'row', 'row']}
    >
      <HeaderText
        title={props.title}
        instructions={renderInstructions}
        textColor={indicateError(props.errors!, props.title)}
      />
      {renderChildren}
    </Flex>
  );
};

export default BuilderBlock;
