import { useState, useEffect } from 'react';
import { Divider, VStack } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import LayoutBuilder from './FormSections/LayoutBuilder';
import StepsSection from './FormSections/StepsBuilder';
import BannerImgBuilder from './FormSections/BannerImgBuilder';
import SectionBuilder from './FormSections/SectionBuilder';

const BuilderPanel = () => {
  const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();

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

// import { useState, useEffect, useContext } from 'react';
// import { Divider, VStack } from '@chakra-ui/react';

// import LayoutBuilder from './FormSections/LayoutBuilder';
// import StepsSection from './FormSections/StepsBuilder';
// import BannerImgBuilder from './FormSections/BannerImgBuilder';
// import SectionBuilder from './FormSections/SectionBuilder';

// import SchemeContext from 'src/contexts/schemeContext';
// import { useFormikContext } from 'formik';

// const BuilderPanel = () => {
//   const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);
//   const { scheme, setScheme } = useContext(SchemeContext) as Builder.Grup.ContextCreator;
//   const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();

//   const changeLayoutColorScheme = (key: string, color: string) => {
//     if (!alternateBgColor && scheme) {
//       setScheme!({
//         ...scheme,
//         layout: { ...scheme.layout, [key]: color },
//         steps: { ...scheme.steps, alternateBgColor: color },
//       });
//     } else {
//       setScheme!({ ...scheme, layout: { ...scheme.layout, [key]: color } });
//     }
//   };

//   const changeStepsColorScheme = (key: string, color: string) => {
//     setScheme!({ ...scheme, steps: { ...scheme.steps, [key]: color } });
//   };

//   useEffect(() => {
//     if (!alternateBgColor) {
//       setScheme!({
//         ...scheme,
//         steps: { ...scheme.steps, alternateBgColor: scheme.layout.bgColor },
//       });
//     }
//   }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <VStack spacing={6} divider={<Divider my={6} w="90%" />} w="100%">
//       <LayoutBuilder changeLayoutColorScheme={changeLayoutColorScheme} direction="column" />
//       <StepsSection
//         toggleShow={setAlternateBgColor}
//         showAlternateBgClr={alternateBgColor}
//         changeStepsColorScheme={changeStepsColorScheme}
//         direction="column"
//       />
//       <BannerImgBuilder direction="column" />
//       <SectionBuilder direction="column" />
//     </VStack>
//   );
// };

// export default BuilderPanel;

//
//
//
//
//
//
//
//
//
//
//
//

// import { useState, useEffect, useContext } from 'react';
// import { Flex, Divider, Stack, Button, useColorModeValue } from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';

// import LayoutBuilder from './FormSections/LayoutBuilder';
// import StepsSection from './FormSections/StepsBuilder';
// import BannerImgBuilder from './FormSections/BannerImgBuilder';
// import SectionBuilder from './FormSections/SectionBuilder';

// import SchemeContext from 'src/contexts/schemeContext';

// const BuilderPanel = () => {
//   const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);
//   const { scheme, setScheme } = useContext(SchemeContext) as Builder.Grup.ContextCreator;

//   const changeLayoutColorScheme = (key: string, color: string) => {
//     if (!alternateBgColor && scheme) {
//       setScheme!({
//         ...scheme,
//         layout: { ...scheme.layout, [key]: color },
//         steps: { ...scheme.steps, alternateBgColor: color },
//       });
//     } else {
//       setScheme!({ ...scheme, layout: { ...scheme.layout, [key]: color } });
//     }
//   };

//   const changeStepsColorScheme = (key: string, color: string) => {
//     setScheme!({ ...scheme, steps: { ...scheme.steps, [key]: color } });
//   };

//   useEffect(() => {
//     if (!alternateBgColor) {
//       setScheme!({
//         ...scheme,
//         steps: { ...scheme.steps, alternateBgColor: scheme.layout.bgColor },
//       });
//     }
//   }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <Flex
//       flexDirection="column"
//       align="center"
//       p={[5, null, 7]}
//       h="100%"
//       bg={useColorModeValue('gray.50', 'grey.300')}
//     >
//       <SchemeContext.Provider value={{ scheme, setScheme }}>
//         <LayoutBuilder
//           changeLayoutColorScheme={changeLayoutColorScheme}
//           w={['100%', '100%', '100%', '85%']}
//           direction="column"
//         />
//         <Divider my={6} w="90%" />
//         <StepsSection
//           toggleShow={setAlternateBgColor}
//           showAlternateBgClr={alternateBgColor}
//           changeStepsColorScheme={changeStepsColorScheme}
//           w={['100%', null, '100%', '85%']}
//           direction="column"
//         />
//         <Divider my={6} w="90%" />
//         <BannerImgBuilder w={['100%', null, '100%', '85%']} direction="column" />
//         <Divider my={6} />
//         <SectionBuilder w={['100%', null, '100%', '85%']} direction="column" />

//         <Stack direction="row" spacing={4} align="center" pt="72">
//           <Button
//             w="160px"
//             size="lg"
//             colorScheme="green"
//             variant="solid"
//             type="submit"
//             rightIcon={<ArrowForwardIcon />}
//           >
//             Add Products
//           </Button>
//           <Button w="160px" size="lg" colorScheme="black" variant="outline">
//             Cancel
//           </Button>
//         </Stack>
//       </SchemeContext.Provider>
//     </Flex>
//   );
// };

// export default BuilderPanel;
