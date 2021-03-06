import { useContext } from 'react';
import { Field, FieldProps } from 'formik';
import { Switch } from '@chakra-ui/react';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import RadioImgWrapper from 'src/components/RadioImgWrapper';
import Thumbnail from 'src/components/Thumbnail';

import EditableSvgs from 'src/pages/helpers/editableStepSvg';
import schemeContext from 'src/contexts/schemeContext';

const StepsSection = ({
  changeStepsColorScheme,
  toggleShow,
  showAlternateBgClr,
  ...props
}: Builder.BuilderTools) => {
  const { scheme } = useContext(schemeContext) as Builder.Grup.ContextCreator;

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
                values={form.values}
              />
            </BuilderBlock>
          );
        }}
      </Field>
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
            bg={scheme.steps?.alternateBgColor}
            value={`alternateBgColor-${scheme.steps?.alternateBgColor}`}
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
          bg={scheme.steps?.bgColor}
          value={`bgColor-${scheme.steps?.bgColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Border color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeStepsColorScheme}
          bg={scheme.steps?.borderColor}
          value={`borderColor-${scheme.steps?.borderColor}`}
        />
      </BuilderBlock>
      <BuilderBlock title="Font color" responsiveDirection>
        <Thumbnail
          clickable
          swapColor
          w="250px"
          h="50px"
          onTNClick={changeStepsColorScheme}
          bg={scheme.steps?.fontColor}
          value={`fontColor-${scheme.steps?.fontColor}`}
        />
      </BuilderBlock>
    </Container>
  );
};

export default StepsSection;
