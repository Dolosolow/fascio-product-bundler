import { Box } from '@chakra-ui/react';
import { useContext } from 'react';

import schemeContext from 'src/contexts/schemeContext';

const NewProducts = () => {
  const scheme = useContext(schemeContext);

  return (
    <Box border="3px solid black">
      <h1>New Products</h1>
      <pre>{JSON.stringify(scheme, null, 2)}</pre>
    </Box>
  );
};

export default NewProducts;
