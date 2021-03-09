import { ChakraProvider, CSSReset, ColorModeOptions, extendTheme, Theme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import { ColorModeSwitcher } from 'src/ColorModeSwitcher';

const config: ColorModeOptions = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const ChakraCtrlFocusProvider = (props: { theme: Theme; children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={props.theme}>
      <ColorModeSwitcher />
      <CSSReset />
      <Global styles={GlobalStyles} />
      {props.children}
    </ChakraProvider>
  );
};

export default extendTheme({ config });
