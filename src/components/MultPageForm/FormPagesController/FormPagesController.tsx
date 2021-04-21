import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useFormikContext } from 'formik';
import { Link } from 'react-router-dom';
import _ from 'lodash';

interface FPGProps {
  page: number;
  pages: React.ReactNode[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleFormSubmit: () => void;
}

const FormPagesController = (props: FPGProps) => {
  const {
    values,
    setErrors,
    setValues,
    validateForm,
  } = useFormikContext<Builder.Grup.BuilderMap>();

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

  const onFormPageSubmit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    props.handleSubmit();
    validateForm().then(async (value) => {
      let error: boolean = false;

      switch (props.page) {
        case 0:
          error = !_.isEmpty(value);
          setErrors(value);
          break;
        case 1:
          error = values.content.steps.some((section) => {
            return section.products.length === 0;
          });
          if (error) {
            setErrors({ content: { steps: `section products cannot be left empty.` } });
          }
          break;
        case 2:
          props.handleFormSubmit();
          break;
        default:
          break;
      }

      if (error) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setValues(values);
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
        onClick={onFormPageSubmit}
      >
        {renderNextStepBtn()}
      </Button>
    </HStack>
  );
};

export default FormPagesController;
