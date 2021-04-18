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
  const renderNextStepBtn = () => {
    switch (props.page) {
      case 0:
        return 'Add Products';
      case 1:
        return 'Review - Confirm';
      case 2:
        return 'Create Page';
      default:
        return;
    }
  };

  const onFormSectionSubmit = async () => {
    props.handleSubmit();
    props.validateForm().then(async (value) => {
      let error: boolean = false;

      switch (props.page) {
        case 0:
          error = !_.isEmpty(value);
          break;
        case 1:
          error = props.values.content.steps.some((section) => {
            return section.products.length === 0;
          });
          break;
        case 2:
        default:
          break;
      }

      if (error) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        props.setValues(props.values);
        props.setPage(props.page + 1);
      }
    });
  };

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
        minW="160px"
        size="lg"
        colorScheme="teal"
        variant="solid"
        type={props.page === props.pages.length - 1 ? 'submit' : 'button'}
        rightIcon={<ArrowForwardIcon />}
        onClick={onFormSectionSubmit}
      >
        {renderNextStepBtn()}
      </Button>
    </HStack>
  );
};

export default FormPagesController;
