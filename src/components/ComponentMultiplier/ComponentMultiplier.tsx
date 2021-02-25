import { useState } from 'react';
import { FlexProps, Button, useColorModeValue, Fade } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

type GC =
  | React.ReactElement<
      any,
      | string
      | ((props: any) => React.ReactElement<any, any> | null)
      | (new (props: any) => React.Component<any, any, any>)
    >
  | undefined;

interface CMProps extends FlexProps {
  Component: GC;
  fadeTransition: boolean;
  height: 'sm' | 'lg';
  limit?: number;
  title: string;
}

const ComponentMultiplier = ({
  Component,
  height,
  limit,
  title,
  fadeTransition = false,
}: CMProps) => {
  const [list, setList] = useState<GC[]>([]);

  const addToList = () => {
    if (limit && list.length < limit) {
      setList((list) => [...list, Component]);
    }
  };

  return (
    <>
      {!!list.length &&
        list.map((Child) => {
          return fadeTransition ? <Fade in={true}>{Child}</Fade> : Child;
        })}
      <Button
        textAlign="center"
        variant="ghost"
        p={0}
        h={height === 'sm' ? '45px' : '150px'}
        w="100%"
        leftIcon={<AddIcon />}
        onClick={addToList}
        _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
      >
        {title}
      </Button>
    </>
  );
};

export default ComponentMultiplier;
