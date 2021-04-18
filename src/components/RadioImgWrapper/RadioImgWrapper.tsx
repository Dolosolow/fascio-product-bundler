import { Box, FlexProps, Wrap, Radio } from '@chakra-ui/react';
import { RadioGroupControl } from 'formik-chakra-ui';
import { useFormikContext } from 'formik';

import Thumbnail from '../Thumbnail';

interface RIWProp extends FlexProps {
  name: string;
  radioValues: any;
  options?: Array<any>;
  data: any[];
  disabled?: boolean;
}

const RadioImgWrapper = ({ name, radioValues, options, data, disabled = false }: RIWProp) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();

  const isChecked = (name: string, idx: number, targetValue?: string) => {
    let target: any;

    if (options) {
      target = options[idx];
    } else {
      target = targetValue;
    }

    return radioValues[name.split('.')[0]].template === target
      ? '0 0 0 2px #319795'
      : '0 0 0 2px rgba(177, 177, 177, 0.6)';
  };

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
        {data.map((img: any, idx: number) => (
          <Box
            key={idx}
            as="label"
            cursor="pointer"
            borderRadius={8}
            boxShadow={isChecked(name, idx, img ? img.id : undefined)}
          >
            <Radio value={options ? options[idx] : img.id} display="none" disabled={disabled} />
            <Thumbnail
              key={idx}
              clickable
              bg={name.includes('steps') ? values.layout.bgColor : undefined}
              imgsrc={
                typeof img === 'string'
                  ? img
                  : () =>
                      img.generate({
                        ...values.steps,
                        bgColor: values.steps.bgColor,
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
