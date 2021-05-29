import { Box } from "@chakra-ui/react";

import { ChakraCtrlFocusProvider } from "src/theme/theme";
import { ApolloGQLProvider } from "src/graphql/provider";
import Routes from "src/routes/mainRoutes";

const App = () => {
  return (
    <ChakraCtrlFocusProvider>
      <ApolloGQLProvider>
        <Box>
          <Routes />
        </Box>
      </ApolloGQLProvider>
    </ChakraCtrlFocusProvider>
  );
};

export default App;
