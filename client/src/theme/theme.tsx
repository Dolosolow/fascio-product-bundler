import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap");

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: { heading: "Source Sans Pro", body: "Source Sans Pro" },
});

export const ChakraCtrlFocusProvider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      {props.children}
    </ChakraProvider>
  );
};
