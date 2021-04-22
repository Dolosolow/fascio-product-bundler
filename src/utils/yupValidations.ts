import * as yup from 'yup';

export const BuilderValidationSchema = yup.object().shape({
  layout: yup.object().shape({
    template: yup.string().nullable().required('Selecting a layout is required.'),
  }),
  steps: yup.object().shape({
    template: yup.string().nullable().required('Selecting a steps template is required.'),
  }),
  content: yup.object().shape({
    steps: yup.array().of(
      yup.object().shape({
        section_name: yup.string().min(5).required('A title for this section is required'),
      })
    ),
  }),
});
