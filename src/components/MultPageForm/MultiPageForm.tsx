import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, FormikHelpers, Form } from "formik";
import { chakra, useColorModeValue, Flex } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { addNewBundle } from "src/graphql/mutations";
import { getAllBundles } from "src/graphql/queries";
import { BundleInput, Query } from "src/types/schema";
import { uploadToCloudianry } from "src/utils/uploadToCloudinary";

import FormPageController from "src/components/MultPageForm/FormPagesController";

interface MPFProps {
  formPages: React.ReactNode[];
  initialFormValues: Builder.Grup.BuilderMap;
  validationSchema?: any | (() => any);
}

// types for Apollo/Client useLazyQuery
type TData = { addNewBundle: any };
type OperationVariables = { newBundle: BundleInput };

const MultiPageForm = ({ formPages, initialFormValues, validationSchema }: MPFProps) => {
  const [page, setPage] = useState(0);
  const history = useHistory();

  const [addBundle] = useMutation<TData, OperationVariables>(addNewBundle);

  const onPageSubmit = (_: any, { setSubmitting }: FormikHelpers<any>) => {
    setSubmitting(false);
  };

  const onFormSubmit = async (values: Builder.Grup.BuilderMap) => {
    let formValues = { ...values };

    if (formValues.layout.layout_bannerImg) {
      const imgUrl = await uploadToCloudianry(
        "https://api.cloudinary.com/v1_1/dnrj5jpxf/upload",
        "fascio_21",
        formValues.layout.layout_bannerImg
      );

      formValues = {
        ...formValues,
        layout: {
          ...formValues.layout,
          layout_bannerImg: imgUrl,
        },
      };
    }

    const newBundle = {
      ...formValues,
      storeId: "0",
    };

    try {
      await addBundle({
        variables: { newBundle: newBundle as BundleInput },
        update: (cache, { data }) => {
          const bundlesData = cache.readQuery<Query>({ query: getAllBundles });

          cache.writeQuery<Query>({
            query: getAllBundles,
            data: {
              getBundles: [...bundlesData!.getBundles!, data!.addNewBundle],
            },
          });
        },
      });

      history.push("/");
    } catch (err) {
      console.log("error-on-submit", err);
    }
  };

  return (
    <chakra.span bg={useColorModeValue("gray.50", "grey.300")}>
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
