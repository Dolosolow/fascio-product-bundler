import { useState, useEffect } from 'react';
import { Divider, VStack, Heading } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import LayoutBuilder from './FormSections/LayoutBuilder';
import StepsSection from './FormSections/StepsBuilder';
import BannerImgBuilder from './FormSections/BannerImgBuilder';
import SectionBuilder from './FormSections/SectionBuilder';
import Container from 'src/components/Container';

const BuilderPanel = () => {
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();
  const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);

  const changeLayoutColorScheme = (key: string, color: string) => {
    console.log(key);
    console.log(color);
    if (!alternateBgColor && values) {
      setValues({
        ...values,
        layout: { ...values.layout, steps_alternateBgColor: color, [key]: color },
      });
    } else {
      setValues({ ...values, layout: { ...values.layout, [key]: color } });
    }
  };

  const changeStepsColorScheme = (key: string, color: string) => {
    console.log(key);
    console.log(color);
    setValues({ ...values, layout: { ...values.layout, [key]: color } });
  };

  useEffect(() => {
    if (!alternateBgColor) {
      setValues({
        ...values,
        layout: { ...values.layout, steps_alternateBgColor: values.layout.layout_bgColor },
      });
    }
  }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container>
        <Heading fontWeight="light" size="xl" mb={12} alignSelf="flex-start">
          Create New Bundle
        </Heading>
      </Container>
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
    </>
  );
};

export default BuilderPanel;
