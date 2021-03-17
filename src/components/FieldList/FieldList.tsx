import React, { useState } from 'react';
import {
  Input,
  Flex,
  Button,
  useColorModeValue,
  Checkbox,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  HStack,
  chakra,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, useFormikContext } from 'formik';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import ComponentMultiplier from '../ComponentMultiplier';

const FieldList = () => {
  let boundArrayHelpers: FieldArrayRenderProps;

  const [hidden, setHidden] = useState(true);

  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const btnEventColor = useColorModeValue('gray.200', 'gray.700');

  const bindArrayHelpers = (arrHelpers: FieldArrayRenderProps) => {
    boundArrayHelpers = arrHelpers;
  };

  return (
    <>
      <FieldArray name="content.steps">
        {(arrHelpers) =>
          values.content.steps &&
          values.content.steps.length &&
          values.content.steps.map((step, idx) => {
            bindArrayHelpers(arrHelpers);

            return (
              <React.Fragment key={idx}>
                <BuilderBlock
                  key={idx}
                  responsiveDirection={true}
                  direction="column"
                  border="2px solid red"
                  mt={12}
                  pl={['0', '5', null, '12', '20']}
                  title={`Section ${idx + 1}`}
                >
                  <Field name={`content.steps[${idx}].instructions`}>
                    {({ field, meta }: FieldProps<typeof values.content.steps>) => {
                      return (
                        <>
                          <Input
                            border={meta.touched && meta.error ? '1px solid #ff4f4f' : undefined}
                            borderRadius={meta.touched && meta.error ? 7 : 0}
                            p={2}
                            name={field.name}
                            variant="flushed"
                            placeholder={`Section Title`}
                            maxW="520px"
                            w="460px"
                            value={step.instructions}
                            onChange={field.onChange}
                          />
                          <ComponentMultiplier
                            Component={
                              <Input
                                variant="flushed"
                                placeholder="Special Note"
                                maxW="520px"
                                w="460px"
                              />
                            }
                            height="sm"
                            limit={2}
                            title="Special Note"
                            fadeTransition
                          />
                        </>
                      );
                    }}
                  </Field>
                  <HStack justifyContent="space-between">
                    <Field type="checkbox" name={`content.steps[${idx}].required`}>
                      {({ field }: FieldProps<typeof values.content.steps>) => {
                        return (
                          <Checkbox colorScheme="teal" name={field.name} onChange={field.onChange}>
                            Required section
                          </Checkbox>
                        );
                      }}
                    </Field>
                    <Field type="number" name={`content.steps[${idx}].limit`}>
                      {({ field, form }: FieldProps<typeof values.content.steps>) => {
                        return (
                          <Flex alignItems="center">
                            <NumberInput
                              name={field.name}
                              defaultValue={0}
                              maxW={20}
                              min={0}
                              size="sm"
                              onChange={(_, numValue) =>
                                form.setFieldValue(`content.steps[${idx}].limit`, numValue)
                              }
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <chakra.label htmlFor={`content.steps[${idx}].limit`} ml={3}>
                              Section buy limit
                            </chakra.label>
                          </Flex>
                        );
                      }}
                    </Field>
                  </HStack>
                </BuilderBlock>
              </React.Fragment>
            );
          })
        }
      </FieldArray>

      <Flex
        onMouseEnter={() => {
          if (values.content.steps.length > 1) setHidden(false);
        }}
        onMouseLeave={() => setHidden(true)}
        mt={6}
      >
        <Button
          variant="ghost"
          textAlign="center"
          h="150px"
          p={0}
          w="100%"
          leftIcon={<AddIcon />}
          onClick={() =>
            boundArrayHelpers.insert(values.content.steps.length + 1, {
              instructions: '',
              section: values.content.steps.length + 1,
              limit: 0,
              required: false,
              specialNotes: [],
              products: [],
            })
          }
          _hover={{ backgroundColor: btnEventColor }}
          _active={{ backgroundColor: btnEventColor }}
        >
          Add Step
        </Button>
        <Button
          hidden={hidden}
          bg="red.500"
          textAlign="center"
          variant="ghost"
          p={0}
          h={'150px'}
          w="10%"
          ml={2}
          onClick={() => boundArrayHelpers.remove(values.content.steps.length - 1)}
          _hover={{ backgroundColor: btnEventColor }}
          _active={{ backgroundColor: btnEventColor }}
        >
          <DeleteIcon color="white" boxSize={5} />
        </Button>
      </Flex>
    </>
  );
};

export default FieldList;
