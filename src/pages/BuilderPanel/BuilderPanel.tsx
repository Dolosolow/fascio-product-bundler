import { useState, useEffect, useContext } from 'react';
import { Divider, VStack } from '@chakra-ui/react';

import LayoutBuilder from './FormSections/LayoutBuilder';
import StepsSection from './FormSections/StepsBuilder';
import BannerImgBuilder from './FormSections/BannerImgBuilder';
import SectionBuilder from './FormSections/SectionBuilder';

import SchemeContext from 'src/contexts/schemeContext';

const BuilderPanel = () => {
  const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);
  const { scheme, setScheme } = useContext(SchemeContext) as Builder.Grup.ContextCreator;

  const changeLayoutColorScheme = (key: string, color: string) => {
    if (!alternateBgColor && scheme) {
      setScheme!({
        ...scheme,
        layout: { ...scheme.layout, [key]: color },
        steps: { ...scheme.steps, alternateBgColor: color },
      });
    } else {
      setScheme!({ ...scheme, layout: { ...scheme.layout, [key]: color } });
    }
  };

  const changeStepsColorScheme = (key: string, color: string) => {
    setScheme!({ ...scheme, steps: { ...scheme.steps, [key]: color } });
  };

  useEffect(() => {
    if (!alternateBgColor) {
      setScheme!({
        ...scheme,
        steps: { ...scheme.steps, alternateBgColor: scheme.layout.bgColor },
      });
    }
  }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <VStack spacing={6} divider={<Divider my={6} w="90%" />} w="100%">
      <LayoutBuilder changeLayoutColorScheme={changeLayoutColorScheme} direction="column" />
      <StepsSection
        toggleShow={setAlternateBgColor}
        showAlternateBgClr={alternateBgColor}
        changeStepsColorScheme={changeStepsColorScheme}
        direction="column"
      />
      <BannerImgBuilder direction="column" />
      <SectionBuilder direction="column" />
    </VStack>
  );
};

export default BuilderPanel;
