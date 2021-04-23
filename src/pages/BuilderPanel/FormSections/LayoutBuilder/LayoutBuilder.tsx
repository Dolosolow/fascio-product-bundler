import { Field, FieldProps, useFormikContext } from 'formik';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import LayoutHoriCol from 'src/images/svg/layout-hori-col.svg';
import LayoutVertRow from 'src/images/svg/layout-vert-row.svg';

const LayoutBuilder = ({ changeLayoutColorScheme, ...props }: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const radioOptions: Builder.Grup.LayoutTemplate[] = ['G1_HORICOL', 'G1_VERTROW'];

  return (
    <Container {...props}>
      <Field name="layout.layout_template">
        {({ form, meta }: FieldProps<{ layout: { layout_template: string } }>) => {
          return (
            <BuilderBlock
              title="layout"
              instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
              errors={meta.touched && meta.error ? { layout: meta.error } : {}}
            >
              <RadioImgWrapper
                name="layout.layout_template"
                options={radioOptions}
                data={[LayoutHoriCol, LayoutVertRow]}
                radioValues={form.values}
              />
            </BuilderBlock>
          );
        }}
      </Field>
      <Field name="layout.layout_bgColor">
        {() => {
          return (
            <BuilderBlock title="Background Color" responsiveDirection>
              <Thumbnail
                clickable
                swapColor
                bg={values.layout?.layout_bgColor}
                value={`layout_bgColor-${values.layout?.layout_bgColor}`}
                onTNClick={changeLayoutColorScheme}
                h="50px"
                w={['200px', '250px']}
              />
            </BuilderBlock>
          );
        }}
      </Field>
    </Container>
  );
};

export default LayoutBuilder;
