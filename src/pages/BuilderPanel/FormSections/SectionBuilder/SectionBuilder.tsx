import { Field, FieldProps } from 'formik';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import FieldList from 'src/components/FieldList';

const SectionBuilder = (props: Builder.BuilderTools) => {
  return (
    <Container {...props}>
      <Field name="content.steps.instructions">
        {({ form }: FieldProps<{ content: { steps: { instructions: string } } }>) => {
          return (
            <BuilderBlock
              title="content"
              instructions="Content to be displayed along with the products you have chosen."
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
