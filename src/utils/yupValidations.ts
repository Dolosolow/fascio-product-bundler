import * as yup from 'yup';

export const BuilderValidationSchema = yup.object().shape({
  layout: yup.object().shape({
    layout_template: yup.string().nullable().required('Selecting a layout template is required.'),
    steps_template: yup.string().nullable().required('Selecting a steps template is required.'),
  }),
  content: yup.object().shape({
    sections: yup.array().of(
      yup.object().shape({
        section_name: yup.string().min(5).required('A title for this section is required'),
      })
    ),
  }),
});
