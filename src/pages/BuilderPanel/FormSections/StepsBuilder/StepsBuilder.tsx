import { Field, FieldProps, useFormikContext } from 'formik';
import { Switch, FormControl, Select } from '@chakra-ui/react';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import EditableSvgs from 'src/pages/helpers/editableStepSvg';

const StepsSection = ({
  changeStepsColorScheme,
  toggleShow,
  showAlternateBgClr,
  ...props
}: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();

  const radioOptions: Builder.Grup.StepsTemplate[] = [
    'STEP_COLOR_CM',
    'STEP_COLOR_NM',
    'STEP_CM',
    'STEP_NM',
  ];

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
                options={radioOptions}
                data={EditableSvgs}
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
        <FormControl id="country">
          <Select variant="filled" placeholder="Select a shape" minW="250px">
            <option selected>Circle</option>
            <option>Square</option>
            <option>Diamond</option>
            <option>Rounded Square</option>
            <option>Rounded Diamond</option>
            <option>Burst</option>
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
