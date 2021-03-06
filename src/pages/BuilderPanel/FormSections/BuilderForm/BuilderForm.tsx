import { useContext, useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { chakra, useColorModeValue, Flex, Button, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import * as yup from 'yup';

import SchemeContext from 'src/contexts/schemeContext';

import BuilderPanel from '../../BuilderPanel';
import NewProducts from 'src/pages/NewProducts';

const pages = [<BuilderPanel />, <NewProducts />];

const validationSchema = yup.object().shape({
  layout: yup.object().shape({
    template: yup.string().nullable().required('Selecting a layout is required.'),
  }),
  steps: yup.object().shape({
    template: yup.string().nullable().required('Selecting a steps template is required.'),
  }),
  content: yup.object().shape({
    steps: yup.array().of(
      yup.object().shape({
        instructions: yup.string().min(5).required('A title for this section is required'),
      })
    ),
  }),
});

const PrintFormikState = (values: any, errors: any) => {
  console.log('====================================');
  console.log('values');
  console.log(values);
  console.log('====================================');
  // console.log('====================================');
  // console.log('schemeContext');
  // console.log(useContext(schemeContext));
  // console.log('====================================');
  console.log('====================================');
  console.log('errors');
  console.log(errors);
  console.log('====================================');
};

const BuilderForm = () => {
  const [scheme, setScheme] = useState(useContext(SchemeContext) as Builder.Grup.BuilderMap);
  const [page, setPage] = useState(0);

  const onFormSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    console.log('SUBMITTED');
    console.log(values);
    setSubmitting(false);
  };

  return (
    <SchemeContext.Provider value={{ scheme, setScheme }}>
      <chakra.span bg={useColorModeValue('gray.50', 'grey.300')}>
        <Formik<Builder.Grup.BuilderMap>
          initialValues={{ ...scheme }}
          onSubmit={onFormSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ values, errors }) => {
            PrintFormikState(values, errors);
            return (
              <Form>
                <Flex flexDirection="column" align="center" p={[5, null, 7]}>
                  {pages[page]}
                  <HStack spacing={4} pt="72" justify="center" w="100%">
                    {page !== 0 && (
                      <Button
                        w="160px"
                        size="lg"
                        colorScheme="black"
                        variant="outline"
                        leftIcon={<ArrowBackIcon />}
                        _hover={{ color: 'teal' }}
                        onClick={() => setPage(page - 1)}
                      >
                        Go back
                      </Button>
                    )}
                    <Button
                      w="160px"
                      size="lg"
                      colorScheme="teal"
                      variant="solid"
                      type={page === pages.length - 1 ? 'submit' : 'button'}
                      rightIcon={<ArrowForwardIcon />}
                      onClick={() => {
                        setScheme(values);
                        setPage(page + 1);
                      }}
                    >
                      {page === pages.length - 1 ? 'Create Page' : 'Add Products'}
                    </Button>
                    <Button w="160px" size="lg" colorScheme="black" variant="outline">
                      Cancel
                    </Button>
                  </HStack>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </chakra.span>
    </SchemeContext.Provider>
  );
};

export default BuilderForm;
