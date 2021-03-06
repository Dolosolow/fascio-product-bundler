import { useState, useContext } from 'react';
import { Button, Input, Flex, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Field, FieldProps } from 'formik';
import _ from 'lodash';

import Container from 'src/components/Container';
import ComponentMultiplier from 'src/components/ComponentMultiplier';
import BuilderBlock from '../../BuilderBlock';

import SchemeContext from 'src/contexts/schemeContext';

const SectionBuilder = (props: Builder.BuilderTools) => {
  const { scheme, setScheme } = useContext(SchemeContext) as Builder.Grup.ContextCreator;
  const [hidden, setHidden] = useState(true);

  const addNewSection = () => {
    console.log('adding new section....');
    setScheme({
      ...scheme,
      content: {
        steps: [
          ...scheme.content.steps,
          {
            instructions: '',
            limit: null,
            section: scheme.content.steps.length + 1,
            specialNotes: [],
          },
        ],
      },
    });
  };

  const removeSection = () => {
    setScheme({
      ...scheme,
      content: {
        steps: _.dropRight(scheme.content.steps),
      },
    });
  };

  const renderContent = () => {
    const steps = scheme.content.steps;

    return steps.map((step) => (
      <BuilderBlock
        key={step.section}
        title={`Section ${step.section}`}
        responsiveDirection={true}
        direction="column"
      >
        <Field name={`content.steps[${step.section - 1}].instructions`}>
          {({ field, form, meta }: FieldProps<typeof scheme.content.steps>) => (
            <>
              <Input
                border={meta.touched && meta.error ? '1px solid #ff4f4f' : undefined}
                borderRadius={meta.touched && meta.error ? 7 : 0}
                p={2}
                name={field.name}
                variant="flushed"
                placeholder={`Section Instruction ${step.section}`}
                maxW="520px"
                w="460px"
              />
              <ComponentMultiplier
                Component={
                  <Input variant="flushed" placeholder="Special Note" maxW="520px" w="460px" />
                }
                height="sm"
                limit={2}
                title="Special Note"
                fadeTransition
              />
            </>
          )}
        </Field>
      </BuilderBlock>
    ));
  };

  return (
    <Container {...props}>
      <Field name="content.steps.instructions">
        {({ form }: FieldProps<{ content: { steps: { instructions: string } } }>) => {
          return (
            <BuilderBlock
              title="content"
              instructions="Content to be displayed along with the products you have chosen."
              errors={form.errors.content! && form.touched.content! ? form.errors : {}}
            />
          );
        }}
      </Field>
      {renderContent()}
      <Flex
        onMouseEnter={() => {
          if (scheme.content.steps.length > 1) setHidden(false);
        }}
        onMouseLeave={() => setHidden(true)}
      >
        <Button
          type="button"
          variant="ghost"
          textAlign="center"
          h="150px"
          p={0}
          w="100%"
          leftIcon={<AddIcon />}
          onClick={addNewSection}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        >
          Add Step
        </Button>
        <Button
          type="button"
          hidden={hidden}
          bg="red.500"
          textAlign="center"
          variant="ghost"
          p={0}
          h={'150px'}
          w="10%"
          ml={2}
          onClick={removeSection}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        >
          <DeleteIcon boxSize={5} />
        </Button>
      </Flex>
    </Container>
  );
};

export default SectionBuilder;

// import { useState, useLayoutEffect } from 'react';
// import { Button, Flex, Input, useColorModeValue } from '@chakra-ui/react';
// import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
// import { Field, FieldProps } from 'formik';

// import Container from 'src/components/Container';
// import ComponentMultiplier from 'src/components/ComponentMultiplier';
// import BuilderBlock from '../../BuilderBlock';

// const SectionBuilder = (props: Builder.BuilderTools) => {
//   const [sections, setSections] = useState<JSX.Element[]>([]);
//   const [hidden, setHidden] = useState(true);

//   const addNewSection = () => {
//     setSections([...sections, createSection(sections.length + 1)]);
//   };

//   const removeSection = () => {
//     const list = Array.from(sections);
//     list.pop();
//     setSections(list);
//   };

//   const createSection = (sectionNum: number) => {
//     return (
//       <BuilderBlock
//         key={sectionNum}
//         title={`Section ${sectionNum}`}
//         responsiveDirection={true}
//         direction="column"
//       >
//         <Field name={`content.steps[${sectionNum - 1}].instructions`}>
//           {({
//             field,
//             form,
//             meta,
//           }: FieldProps<{ content: { steps: { instructions: string } } }>) => (
//             <>
//               <Input
//                 border={meta.touched && form.errors['content'] ? '1px solid #ff4f4f' : undefined}
//                 borderRadius={meta.touched && form.errors['content'] ? 7 : 0}
//                 p={2}
//                 name={`content.steps[${sectionNum - 1}].instructions`}
//                 variant="flushed"
//                 placeholder={`Section Instruction ${sectionNum}`}
//                 maxW="520px"
//                 w="460px"
//                 onChange={form.handleChange}
//               />

//               <ComponentMultiplier
//                 Component={
//                   <Input variant="flushed" placeholder="Special Note" maxW="520px" w="460px" />
//                 }
//                 height="sm"
//                 limit={2}
//                 title="Special Note"
//                 fadeTransition
//               />
//             </>
//           )}
//         </Field>
//       </BuilderBlock>
//     );
//   };

//   useLayoutEffect(() => {
//     setSections([...sections, createSection(1)]);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <Container {...props}>
//       <Field name="content.steps.instructions">
//         {({ form, meta, field }: FieldProps<{ content: { steps: { instructions: string } } }>) => {
//           console.log(form.errors);
//           return (
//             <BuilderBlock
//               title="content"
//               instructions="Content to be displayed along with the products you have chosen."
//               errors={form.errors.content! && form.touched.content! ? form.errors : {}}
//             />
//           );
//         }}
//       </Field>
//       {sections}
//       <Flex
//         onMouseEnter={() => {
//           if (sections.length > 1) setHidden(false);
//         }}
//         onMouseLeave={() => setHidden(true)}
//       >
//         <Button
//           variant="ghost"
//           textAlign="center"
//           h="150px"
//           p={0}
//           w="100%"
//           leftIcon={<AddIcon />}
//           _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//           _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//           onClick={addNewSection}
//         >
//           Add Step
//         </Button>
//         <Button
//           hidden={hidden}
//           bg="red.500"
//           textAlign="center"
//           variant="ghost"
//           p={0}
//           h={'150px'}
//           w="10%"
//           ml={2}
//           onClick={removeSection}
//           _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//           _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//         >
//           <DeleteIcon boxSize={5} />
//         </Button>
//       </Flex>
//     </Container>
//   );
// };

// export default SectionBuilder;
