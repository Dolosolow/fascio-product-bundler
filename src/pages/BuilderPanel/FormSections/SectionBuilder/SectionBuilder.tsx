import { Field, FieldProps } from 'formik';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import FieldList from 'src/components/FieldList';

const SectionBuilder = (props: Builder.BuilderTools) => {
  return (
    <Container {...props}>
      <Field name="content.steps.section_name">
        {({ form }: FieldProps<{ content: { steps: { section_name: string } } }>) => {
          return (
            <BuilderBlock
              title="content"
              instructions="Here you can set the section title and have options to add a note for your customer, make sections required, aswell as set a limit on selections."
              errors={form.errors.content! && form.touched.content! ? form.errors : {}}
            />
          );
        }}
      </Field>
      <FieldList />
    </Container>
  );
};

export default SectionBuilder;
