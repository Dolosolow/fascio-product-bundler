import { Field, FieldProps, useFormikContext } from 'formik';
import { Input } from '@chakra-ui/react';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import LayoutHoriCol from 'src/images/svg/layout-hori-col.svg';
import LayoutVertRow from 'src/images/svg/layout-vert-row.svg';

const LayoutBuilder = ({ changeColorScheme, ...props }: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const radioOptions: Builder.Grup.LayoutTemplate[] = ['G1_HORICOL', 'G1_VERTROW'];

  return (
    <Container {...props}>
      <Field name="bundleName">
        {({ field, meta }: FieldProps<{ bundleName: string }>) => (
          <BuilderBlock
            responsiveDirection
            title="bundle Name"
            instructions="Naming your bundle so it'll be easier to distinguish among the others."
            errors={meta.touched && meta.error ? { bundle: meta.error } : {}}
          >
            <Input
              border={meta.touched && meta.error ? '1px solid #ff4f4f' : undefined}
              borderRadius={meta.touched && meta.error ? 7 : 0}
              p={2}
              name={field.name}
              variant="flushed"
              placeholder="Section Name"
              maxW="520px"
              w="460px"
              value={field.value.bundleName}
              onChange={field.onChange}
            />
          </BuilderBlock>
        )}
      </Field>
      <Field name="layout.layout_template">
        {({ form, meta }: FieldProps<{ layout: { layout_template: string } }>) => {
          return (
            <BuilderBlock
              title="page Layout"
              instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
              errors={meta.touched && meta.error ? { page: meta.error } : {}}
              my="3"
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
            <BuilderBlock title="Background Color" instructions="Page primary background color.">
              <Thumbnail
                clickable
                swapColor
                bg={values.layout?.layout_bgColor}
                value={`layout_bgColor-${values.layout?.layout_bgColor}`}
                onTNClick={changeColorScheme}
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
