import * as React from 'react';
import { ChakraProvider, theme, CSSReset, Box } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import BuilderPanel from '../../pages/BuilderPanel';

const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <CSSReset />
    <Box fontSize="xl">
      <Switch>
        <Route path="/" component={BuilderPanel} />
      </Switch>
    </Box>
  </ChakraProvider>
);

export default App;
