import { Box } from '@chakra-ui/react';

import { ChakraCtrlFocusProvider } from 'src/theme/theme';
import Routes from 'src/routes';

const App = () => (
  <ChakraCtrlFocusProvider>
    <Box>
      <Routes />
    </Box>
  </ChakraCtrlFocusProvider>
);

export default App;
