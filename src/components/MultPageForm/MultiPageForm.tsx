import React, { useState } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { chakra, useColorModeValue, Flex } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';

import { addNewBundle } from 'src/graphql/mutations';
// import { CreationResponse } from 'src/types/schema';
// import { BundleInput } from 'src/types/schema';

import FormPageController from 'src/components/MultPageForm/FormPagesController';

interface MPFProps {
  formPages: React.ReactNode[];
  initialFormValues: Builder.Grup.BuilderMap;
  validationSchema?: any | (() => any);
}

// types for Apollo/Client useLazyQuery
type TData = { addNewBundle: any };
type OperationVariables = { newBundle: any };

const MultiPageForm = ({ formPages, initialFormValues, validationSchema }: MPFProps) => {
  const [page, setPage] = useState(0);
  const [addBundle] = useMutation<TData, OperationVariables>(addNewBundle);

  const onPageSubmit = (_: any, { setSubmitting }: FormikHelpers<any>) => {
    setSubmitting(false);
  };

  const onFormSubmit = async (values: Builder.Grup.BuilderMap) => {
    const newBundle = {
      storeId: '0',
      layout: { ...values.layout },
      content: { ...values.content },
    };
    try {
      await addBundle({ variables: { newBundle } });
    } catch (err) {
      console.log(err);
    }
    console.log('====================================');
    console.log('creating new bundle');
    console.log(newBundle);
    console.log('====================================');
  };

  return (
    <chakra.span bg={useColorModeValue('gray.50', 'grey.300')}>
      <Formik<Builder.Grup.BuilderMap>
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={onPageSubmit}
        validateOnBlur={false}
      >
        {({ values, handleSubmit }) => {
          return (
            <Form>
              <Flex flexDirection="column" align="center" p={[5, null, 7]}>
                {formPages[page]}
                <FormPageController
                  page={page}
                  pages={formPages}
                  setPage={setPage}
                  handleSubmit={handleSubmit}
                  handleFormSubmit={() => onFormSubmit(values)}
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
