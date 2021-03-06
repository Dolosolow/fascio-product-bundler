import * as React from 'react';
import { ChakraProvider, theme, CSSReset, Box } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import BuilderForm from 'src/pages/BuilderPanel/FormSections/BuilderForm';

const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <CSSReset />
    <Box>
      <Switch>
        <Route path="/" component={BuilderForm} />
      </Switch>
    </Box>
  </ChakraProvider>
);

export default App;
