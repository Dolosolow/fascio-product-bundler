import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, FormikHelpers, Form } from "formik";
import { chakra, useColorModeValue, Flex } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { addNewBundle } from "src/graphql/mutations";
import { BundleInput } from "src/types/schema";
import { uploadToCloudianry } from "src/utils/uploadToCloudinary";

import FormPageController from "src/components/MultPageForm/FormPagesController";
import { getAllBundles } from "src/graphql/queries";

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
  const [requestState, setRequestState] = useState("");
  const history = useHistory();

  const [addBundle] = useMutation<TData, OperationVariables>(addNewBundle);

  const onPageSubmit = (_: any, { setSubmitting }: FormikHelpers<any>) => {
    setSubmitting(false);
  };

  const onFormSubmit = async (values: Builder.Grup.BuilderMap) => {
    let formValues = { ...values };

    if (formValues.layout.layout_bannerImg) {
      setRequestState("Uploading image...");

      const imgUrl = await uploadToCloudianry(
        process.env.REACT_APP_CLOUDINARY_URL as string,
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRE as string,
        formValues.layout.layout_bannerImg
      );

      setRequestState("Upload complete.");

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
      setRequestState("Creating bundle....");

      await addBundle({
        variables: { newBundle: newBundle as BundleInput },
        refetchQueries: [{ query: getAllBundles }],
      });

      history.push("/");
      setRequestState("");
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
                  requestState={requestState}
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
