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
  const flexProps = _.omit(props, [
    'direction',
    'instructions',
    'title',
    'errors',
    'wrapChildren',
    'responsiveDirection',
  ]);
  const { direction = 'row' } = props;

  const renderInstructions = props.instructions && (
    <chakra.p fontSize="xs" maxW="400px">
      {props.instructions}
    </chakra.p>
  );

  const renderChildren = (
    <Stack
      spacing={3}
      direction={['column', direction === 'row' ? 'row' : 'column']}
      maxW="530px"
      alignSelf="center"
      position="relative"
    >
      {props.children}
    </Stack>
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      {...flexProps}
      direction={[props.responsiveDirection ? 'column' : 'row', null, 'row', 'row']}
    >
      <HeaderText
        alignSelf={props.responsiveDirection ? 'flex-start' : undefined}
        title={props.title}
        content={renderInstructions}
        textColor={indicateError(props.errors!, props.title)}
      />
      {renderChildren}
    </Flex>
  );
};

export default BuilderBlock;
