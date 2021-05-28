import { ChakraProvider, CSSReset, extendTheme, ColorModeOptions } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import { ColorModeSwitcher } from 'src/ColorModeSwitcher';

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;

const config: ColorModeOptions = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: { heading: 'Source Sans Pro', body: 'Source Sans Pro' },
});

export const ChakraCtrlFocusProvider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <CSSReset />
      <Global styles={GlobalStyles} />
      {props.children}
    </ChakraProvider>
  );
};
