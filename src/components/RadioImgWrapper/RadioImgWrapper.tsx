import { useContext } from 'react';
import { Box, FlexProps, Wrap, Radio } from '@chakra-ui/react';
import { RadioGroupControl } from 'formik-chakra-ui';

import Thumbnail from '../Thumbnail';

import schemeContext from 'src/contexts/schemeContext';

interface RIWProp extends FlexProps {
  name: string;
  values: any;
  options: Array<any>;
  data: Array<any>;
}

const RadioImgWrapper = ({ name, values, options, data }: RIWProp) => {
  const { scheme } = useContext(schemeContext) as Builder.Grup.ContextCreator;
  return (
    <RadioGroupControl name={name}>
      <Wrap
        spacing={3}
        alignSelf="flex-end"
        justify="flex-end"
        direction={['column', 'row']}
        shouldWrapChildren={true}
        maxW="530px"
        position="relative"
      >
        {data.map((img, idx) => (
          <Box
            key={options[idx]}
            as="label"
            cursor="pointer"
            borderRadius={8}
            boxShadow={
              values[name.split('.')[0]].template === options[idx]
                ? '0 0 0 2px #319795'
                : '0 0 0 2px rgba(177, 177, 177, 0.6)'
            }
            _focus={{
              boxShadow: '0 0 0 2px #319795',
            }}
          >
            <Radio value={options[idx]} display="none" />
            <Thumbnail
              clickable
              bg={name.includes('steps') ? scheme.layout.bgColor : undefined}
              imgsrc={
                name.includes('layout')
                  ? img
                  : () =>
                      img({
                        ...scheme.steps,
                        bgColor: scheme.steps?.bgColor,
                      })
              }
            />
          </Box>
        ))}
      </Wrap>
    </RadioGroupControl>
  );
};

export default RadioImgWrapper;
