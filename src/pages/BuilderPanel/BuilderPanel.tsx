import { useState, useEffect } from 'react';
import { Divider, VStack } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import LayoutBuilder from './FormSections/LayoutBuilder';
import StepsSection from './FormSections/StepsBuilder';
import BannerImgBuilder from './FormSections/BannerImgBuilder';
import SectionBuilder from './FormSections/SectionBuilder';

const BuilderPanel = () => {
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
  const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);

  const changeLayoutColorScheme = (key: string, color: string) => {
    if (!alternateBgColor && values) {
      setValues({
        ...values,
        layout: { ...values.layout, [key]: color },
        steps: { ...values.steps, alternateBgColor: color },
      });
    } else {
      setValues({ ...values, layout: { ...values.layout, [key]: color } });
    }
  };

  const changeStepsColorScheme = (key: string, color: string) => {
    setValues({ ...values, steps: { ...values.steps, [key]: color } });
  };

  useEffect(() => {
    if (!alternateBgColor) {
      setValues({
        ...values,
        steps: { ...values.steps, alternateBgColor: values.layout.bgColor },
      });
    }
  }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <VStack spacing={6} w="100%" divider={<Divider my={6} w="90%" />}>
      <LayoutBuilder direction="column" changeLayoutColorScheme={changeLayoutColorScheme} />
      <StepsSection
        direction="column"
        toggleShow={setAlternateBgColor}
        showAlternateBgClr={alternateBgColor}
        changeStepsColorScheme={changeStepsColorScheme}
      />
      <BannerImgBuilder direction="column" />
      <SectionBuilder direction="column" />
    </VStack>
  );
};

export default BuilderPanel;
