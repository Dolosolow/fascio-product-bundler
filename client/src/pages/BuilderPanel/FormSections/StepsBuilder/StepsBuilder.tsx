import { useState } from 'react';
import { Field, FieldProps, useFormikContext } from 'formik';
import { Switch, FormControl, Select } from '@chakra-ui/react';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import { getStepsTemplate } from 'src/pages/helpers/SvgShapeGenerator';

const StepsSection = ({
  changeColorScheme,
  toggleShow,
  showAlternateBgClr,
  ...props
}: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const [indicatorShape, setIndicatorShape] = useState<Builder.Grup.StepsShapeTemplate>('CRL');

  return (
    <Container {...props}>
      <Field name="layout.steps_template">
        {({ form, meta }: FieldProps<{ layout: { steps_template: string } }>) => {
          return (
            <BuilderBlock
              title="steps Layout"
              instructions="Optional: Display numbered steps to completion. If you do not want numbered steps select N/A."
              wrapChildren
              errors={meta.touched && meta.error ? { steps: meta.error } : {}}
            >
              <RadioImgWrapper
                name="layout.steps_template"
                data={getStepsTemplate(indicatorShape)}
                radioValues={form.values}
              />
            </BuilderBlock>
          );
        }}
      </Field>
      <BuilderBlock
        title="Indicator Shape"
        instructions="Select from a variety of step indicators shapes. Default shape: Circle."
        wrapChildren
      >
        <FormControl id="shape">
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              if (e.target.value !== '') {
                setIndicatorShape(e.target.value as Builder.Grup.StepsShapeTemplate);
              }
            }}
            variant="filled"
            placeholder="Select a shape"
            minW="250px"
            defaultValue={indicatorShape}
          >
            <option value="CRL">Circle</option>
            <option value="SQR">Square</option>
            <option value="RDSQR">Rounded Square</option>
            <option value="DMD">Diamond</option>
            <option value="RDDMD">Rounded Diamond</option>
            <option value="BRST">Burst</option>
          </Select>
        </FormControl>
      </BuilderBlock>
      <BuilderBlock title="Set Alt background color">
        <Switch
          style={{ transform: 'scale(1.2)' }}
          size="lg"
          colorScheme="teal"
          defaultChecked={true}
          isChecked={showAlternateBgClr}
          onChange={() => (toggleShow ? toggleShow(!showAlternateBgClr) : null)}
        />
      </BuilderBlock>
      {showAlternateBgClr && (
        <BuilderBlock title="Alt background color" responsiveDirection>
          <Thumbnail
            clickable
            swapColor
            w="250px"
            h="50px"
            onTNClick={changeColorScheme}
            bg={values.layout.steps_alternateBgColor}
            value={`steps_alternateBgColor-${values.layout.steps_alternateBgColor}`}
          />
        </BuilderBlock>
      )}
      <BuilderBlock title="Background color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeColorScheme}
          bg={values.layout.steps_bgColor}
          value={`steps_bgColor-${values.layout.steps_bgColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Border color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeColorScheme}
          bg={values.layout.steps_borderColor}
          value={`steps_borderColor-${values.layout.steps_borderColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Font color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeColorScheme}
          bg={values.layout.steps_fontColor}
          value={`steps_fontColor-${values.layout.steps_fontColor}`}
        />
      </BuilderBlock>
    </Container>
  );
};

export default StepsSection;
