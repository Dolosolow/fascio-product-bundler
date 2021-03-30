import { HStack, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FormikErrors } from 'formik';
import _ from 'lodash';

interface FPGProps {
  page: number;
  pages: React.ReactNode[];
  values: Builder.Grup.BuilderMap;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setValues: (values: React.SetStateAction<Builder.Grup.BuilderMap>) => void;
  validateForm: (values?: any) => Promise<FormikErrors<Builder.Grup.BuilderMap>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const FormPagesController = (props: FPGProps) => {
  return (
    <HStack spacing={4} pt="44" justify="center" w="100%">
      {props.page !== 0 && (
        <Button
          w="160px"
          size="lg"
          colorScheme="gray"
          variant="outline"
          leftIcon={<ArrowBackIcon />}
          onClick={() => props.setPage(props.page - 1)}
        >
          Go back
        </Button>
      )}
      <Link to="/">
        <Button w="160px" size="lg" colorScheme="gray" variant="outline">
          Cancel
        </Button>
      </Link>
      <Button
        w="160px"
        size="lg"
        colorScheme="teal"
        variant="solid"
        type={props.page === props.pages.length - 1 ? 'submit' : 'button'}
        rightIcon={<ArrowForwardIcon />}
        onClick={() => {
          props.handleSubmit();
          props.validateForm().then((value) => {
            if (!_.isEmpty(value)) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              props.setValues(props.values);
              props.setPage(props.page + 1);
            }
          });
        }}
      >
        {props.page === props.pages.length - 1 ? 'Create Page' : 'Add Products'}
      </Button>
    </HStack>
  );
};

export default FormPagesController;
