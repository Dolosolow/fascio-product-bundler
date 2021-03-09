import React, { useState } from 'react';
import { Input, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, useFormikContext } from 'formik';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import ComponentMultiplier from '../ComponentMultiplier';

const FieldList = () => {
  let boundArrayHelpers: FieldArrayRenderProps;

  const btnEventColor = useColorModeValue('gray.200', 'gray.700');
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const [hidden, setHidden] = useState(true);

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
                  title={`Section ${idx + 1}`}
                  responsiveDirection={true}
                  direction="column"
                  border="2px solid red"
                  pl={['0', '5', null, '12', '20']}
                  mt={12}
                >
                  <Field name={`content.steps[${idx}].instructions`}>
                    {({ field, form, meta }: FieldProps<typeof values.content.steps>) => {
                      return (
                        <>
                          <Input
                            border={meta.touched && meta.error ? '1px solid #ff4f4f' : undefined}
                            borderRadius={meta.touched && meta.error ? 7 : 0}
                            p={2}
                            name={field.name}
                            variant="flushed"
                            placeholder={`Section Instructions`}
                            maxW="520px"
                            w="460px"
                            value={step.instructions}
                            onChange={form.handleChange}
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
              limit: null,
              section: values.content.steps.length + 1,
              specialNotes: [],
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
          <DeleteIcon boxSize={5} />
        </Button>
      </Flex>
    </>
  );
};

export default FieldList;
