import * as React from 'react';
import { Box, theme } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import BuilderForm from 'src/pages/BuilderPanel/FormSections/BuilderForm';
import { ChakraCtrlFocusProvider } from 'src/theme/theme';

const App = () => (
  <ChakraCtrlFocusProvider theme={theme}>
    <Box>
      <Switch>
        <Route path="/" component={BuilderForm} />
      </Switch>
    </Box>
  </ChakraCtrlFocusProvider>
);

export default App;
