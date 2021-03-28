import { useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { chakra, useColorModeValue, Flex } from '@chakra-ui/react';

import FormPageController from 'src/components/MultPageForm/FormPagesController';

interface MPFProps {
  formPages: React.ReactNode[];
  initialFormValues: Builder.Grup.BuilderMap;
  validationSchema?: any | (() => any);
}

const MultiPageForm = ({ formPages, initialFormValues, validationSchema }: MPFProps) => {
  const [page, setPage] = useState(0);

  const onFormSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    console.log('SUBMITTED');
    console.log(values);
    setSubmitting(false);
  };

  return (
    <chakra.span bg={useColorModeValue('gray.50', 'grey.300')}>
      <Formik<Builder.Grup.BuilderMap>
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ values, setValues, validateForm, handleSubmit }) => {
          return (
            <Form>
              <Flex flexDirection="column" align="center" p={[5, null, 7]}>
                {formPages[page]}
                <FormPageController
                  page={page}
                  pages={formPages}
                  setPage={setPage}
                  values={values}
                  setValues={setValues}
                  validateForm={validateForm}
                  handleSubmit={handleSubmit}
                />
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </chakra.span>
  );
};

export default MultiPageForm;
