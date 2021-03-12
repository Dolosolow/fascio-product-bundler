import { Box, theme } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import BuilderForm from 'src/pages/BuilderPanel/FormSections/BuilderForm';
import GrupPanel from 'src/pages/GrupPanel';

import { ChakraCtrlFocusProvider } from 'src/theme/theme';

const App = () => (
  <ChakraCtrlFocusProvider theme={theme}>
    <Box>
      <Switch>
        <Route path="/page/new" component={BuilderForm} />
        <Route path="/" component={GrupPanel} />
      </Switch>
    </Box>
  </ChakraCtrlFocusProvider>
);

export default App;
