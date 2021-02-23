import { ColorModeOptions, extendTheme } from '@chakra-ui/react';

const config: ColorModeOptions = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
