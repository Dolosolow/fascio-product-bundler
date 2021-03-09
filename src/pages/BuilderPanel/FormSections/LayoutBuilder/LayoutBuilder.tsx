import { Field, FieldProps, useFormikContext } from 'formik';

import BuilderBlock from '../../BuilderBlock';
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
      <Field name="layout.template">
        {({ form, meta }: FieldProps<{ layout: { template: string } }>) => {
          return (
            <BuilderBlock
              title="layout"
              instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
              errors={meta.touched ? form.errors : {}}
            >
              <RadioImgWrapper
                name="layout.template"
                options={radioOptions}
                data={[LayoutHoriCol, LayoutVertRow]}
                radioValues={form.values}
              />
            </BuilderBlock>
          );
        }}
      </Field>
      <Field name="layout.bgColor">
        {({ form, field }: FieldProps<{ layout: { bgColor: string } }>) => {
          return (
            <BuilderBlock title="Background Color" responsiveDirection>
              <Thumbnail
                clickable
                swapColor
                bg={values.layout?.bgColor}
                value={`bgColor-${values.layout?.bgColor}`}
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

// import { useContext } from 'react';
// import { Field, FieldProps } from 'formik';

// import BuilderBlock from '../../BuilderBlock';
// import Container from 'src/components/Container';
// import RadioImgWrapper from 'src/components/RadioImgWrapper';
// import Thumbnail from 'src/components/Thumbnail';

// import LayoutHoriCol from 'src/images/svg/layout-hori-col.svg';
// import LayoutVertRow from 'src/images/svg/layout-vert-row.svg';
// import schemeContext from 'src/contexts/schemeContext';

// const LayoutBuilder = ({ changeLayoutColorScheme, ...props }: Builder.BuilderTools) => {
//   const { scheme } = useContext(schemeContext) as Builder.Grup.ContextCreator;
//   const radioOptions: Builder.Grup.LayoutTemplate[] = ['G1_HORICOL', 'G1_VERTROW'];

//   return (
//     <Container {...props}>
//       <Field name="layout.template">
//         {({ form, meta }: FieldProps<{ layout: { template: string } }>) => {
//           return (
//             <BuilderBlock
//               title="layout"
//               instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
//               errors={meta.touched ? form.errors : {}}
//             >
//               <RadioImgWrapper
//                 name="layout.template"
//                 options={radioOptions}
//                 data={[LayoutHoriCol, LayoutVertRow]}
//                 values={form.values}
//               />
//             </BuilderBlock>
//           );
//         }}
//       </Field>
//       <Field name="layout.bgColor">
//         {({ form, field }: FieldProps<{ layout: { bgColor: string } }>) => {
//           return (
//             <BuilderBlock title="Background Color" responsiveDirection>
//               <Thumbnail
//                 clickable
//                 swapColor
//                 bg={scheme.layout?.bgColor}
//                 value={`bgColor-${scheme.layout?.bgColor}`}
//                 onTNClick={changeLayoutColorScheme}
//                 h="50px"
//                 w={['200px', '250px']}
//               />
//             </BuilderBlock>
//           );
//         }}
//       </Field>
//     </Container>
//   );
// };

// export default LayoutBuilder;
