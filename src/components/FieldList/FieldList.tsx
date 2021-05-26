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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, useFormikContext } from "formik";

import BuilderBlock from "src/pages/BuilderPanel/BuilderBlock";
import ComponentMultiplier from "../ComponentMultiplier";

import { CloseButton } from "src/components/Buttons/CloseButton";

const FieldList = () => {
  let boundArrayHelpers: FieldArrayRenderProps;

  const { values, errors, touched } = useFormikContext<Builder.Grup.BuilderMap>();
  const btnEventColor = useColorModeValue("gray.200", "gray.700");

  const bindArrayHelpers = (arrHelpers: FieldArrayRenderProps) => {
    boundArrayHelpers = arrHelpers;
  };

  return (
    <>
      <FieldArray name="content.sections">
        {(arrHelpers) =>
          values.content.sections &&
          values.content.sections.length &&
          values.content.sections.map((section, idx) => {
            bindArrayHelpers(arrHelpers);
            return (
              <div key={idx} style={{ position: "relative" }}>
                {values.content.sections.length > 1 && (
                  <CloseButton onClose={() => boundArrayHelpers.remove(idx)} />
                )}
                <BuilderBlock
                  key={idx}
                  responsiveDirection={true}
                  direction="column"
                  mt={12}
                  pl={["0", "0", "12", "12", "12"]}
                  title={`Section ${idx + 1}`}
                  errors={
                    errors.content?.sections![idx] && touched.content?.sections![idx]
                      ? JSON.parse(`{"Section": "Section is required"}`)
                      : undefined
                  }
                >
                  <Field name={`content.sections[${idx}].sectionName`}>
                    {({ field, meta }: FieldProps<typeof values.content.sections>) => {
                      return (
                        <>
                          <Input
                            border={meta.touched && meta.error ? "1px solid #ff4f4f" : undefined}
                            borderRadius={meta.touched && meta.error ? 7 : 0}
                            p={2}
                            name={field.name}
                            variant="flushed"
                            placeholder={`Section Title`}
                            maxW="520px"
                            w="460px"
                            value={section.sectionName}
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
                    <Field type="checkbox" name={`content.sections[${idx}].required`}>
                      {({ field }: FieldProps<typeof values.content.sections>) => {
                        return (
                          <Checkbox colorScheme="teal" name={field.name} onChange={field.onChange}>
                            Required
                          </Checkbox>
                        );
                      }}
                    </Field>
                    {values.content.sections[idx].required && (
                      <Field type="number" name={`content.sections[${idx}].minSelect`}>
                        {({ field, form }: FieldProps<typeof values.content.sections>) => {
                          return (
                            <Flex alignItems="center">
                              <NumberInput
                                name={field.name}
                                defaultValue={0}
                                maxW={20}
                                min={0}
                                size="sm"
                                onChange={(_, numValue) =>
                                  form.setFieldValue(`content.sections[${idx}].minSelect`, numValue)
                                }
                              >
                                <NumberInputField />
                                <NumberInputStepper>
                                  <NumberIncrementStepper />
                                  <NumberDecrementStepper />
                                </NumberInputStepper>
                              </NumberInput>
                              <chakra.label htmlFor={`content.sections[${idx}].minSelect`} ml={3}>
                                Min Limit
                              </chakra.label>
                            </Flex>
                          );
                        }}
                      </Field>
                    )}
                    <Field type="number" name={`content.sections[${idx}].maxSelect`}>
                      {({ field, form }: FieldProps<typeof values.content.sections>) => {
                        return (
                          <Flex alignItems="center">
                            <NumberInput
                              name={field.name}
                              defaultValue={0}
                              maxW={20}
                              min={0}
                              size="sm"
                              onChange={(_, numValue) =>
                                form.setFieldValue(`content.sections[${idx}].maxSelect`, numValue)
                              }
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <chakra.label htmlFor={`content.sections[${idx}].maxSelect`} ml={3}>
                              Max Limit
                            </chakra.label>
                          </Flex>
                        );
                      }}
                    </Field>
                  </HStack>
                </BuilderBlock>
              </div>
            );
          })
        }
      </FieldArray>

      <Flex mt={6}>
        <Button
          variant="ghost"
          textAlign="center"
          h="150px"
          p={0}
          w="100%"
          leftIcon={<AddIcon />}
          onClick={() =>
            boundArrayHelpers.insert(values.content.sections.length + 1, {
              sectionName: "",
              maxSelect: 0,
              minSelect: 0,
              required: false,
              specialNotes: [],
              products: [],
            })
          }
          _hover={{ backgroundColor: btnEventColor }}
          _active={{ backgroundColor: btnEventColor }}
        >
          Add Section
        </Button>
      </Flex>
    </>
  );
};

export default FieldList;
