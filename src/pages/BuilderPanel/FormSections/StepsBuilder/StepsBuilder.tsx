import { useState } from 'react';
import { Field, FieldProps, useFormikContext } from 'formik';
import { Switch, FormControl, Select } from '@chakra-ui/react';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import { getStepsLayout } from 'src/pages/helpers/SvgShapeGenerator';

const StepsSection = ({
  changeStepsColorScheme,
  toggleShow,
  showAlternateBgClr,
  ...props
}: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();
  const [indicatorShape, setIndicatorShape] = useState<Builder.Grup.StepsShapeTemplate>('CRL');

  return (
    <Container {...props}>
      <Field name="steps.template">
        {({ form, meta }: FieldProps<{ steps: { template: string } }>) => {
          return (
            <BuilderBlock
              title="steps layout"
              instructions="Optional: Display numbered steps to completion. If you do not want numbered steps select N/A."
              wrapChildren
              errors={meta.touched ? form.errors : {}}
            >
              <RadioImgWrapper
                name="steps.template"
                data={getStepsLayout(indicatorShape)}
                radioValues={form.values}
              />
            </BuilderBlock>
          );
        }}
      </Field>
      <BuilderBlock
        title="Indicator Shape"
        instructions="Optional: Display numbered steps to completion. If you do not want numbered steps select N/A."
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
          onChange={() => {
            if (toggleShow) toggleShow(!showAlternateBgClr);
          }}
        />
      </BuilderBlock>
      {showAlternateBgClr && (
        <BuilderBlock title="Alt background color" responsiveDirection>
          <Thumbnail
            clickable
            swapColor
            w="250px"
            h="50px"
            onTNClick={changeStepsColorScheme}
            bg={values.steps.alternateBgColor}
            value={`alternateBgColor-${values.steps.alternateBgColor}`}
          />
        </BuilderBlock>
      )}
      <BuilderBlock title="Background color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeStepsColorScheme}
          bg={values.steps.bgColor}
          value={`bgColor-${values.steps.bgColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Border color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeStepsColorScheme}
          bg={values.steps.borderColor}
          value={`borderColor-${values.steps.borderColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Font color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeStepsColorScheme}
          bg={values.steps.fontColor}
          value={`fontColor-${values.steps.fontColor}`}
        />
      </BuilderBlock>
    </Container>
  );
};

export default StepsSection;
