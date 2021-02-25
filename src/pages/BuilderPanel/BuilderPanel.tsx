import { useState, useEffect } from 'react';
import { Flex, Divider, Stack, Button, Input, Switch, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon, AddIcon } from '@chakra-ui/icons';

import BuilderBlock from './BuilderBlock';
import Container from '../../components/Container';
import ComponentMultiplier from '../../components/ComponentMultiplier';
import Thumbnail from '../../components/Thumbnail';

import LayoutHCol from '../../images/svg/layout-hori-col.svg';
import LayoutHRow from '../../images/svg/layout-vert-row.svg';
import {
  editableStepCM,
  editableStepNM,
  editableStepColorCM,
  editableStepColorNM,
} from '../helpers/editableSvg';

interface BuildScheme {
  layout?: {
    bgColor?: string;
  };
  steps?: {
    alternateBgColor?: string;
    bgColor?: string;
    borderColor?: string;
    fontColor?: string;
  };
}

const initialSchemeState: BuildScheme = {
  layout: {
    bgColor: '#ffffff',
  },
  steps: {
    alternateBgColor: '#ffffff',
    bgColor: '#121212',
    borderColor: '#121212',
    fontColor: '#ffffff',
  },
};

const BuilderPanel = () => {
  const [layoutSvgs, setLayoutSvgs] = useState<string[]>([]);
  const [alternateBgColor, setAlternateBgColor] = useState<boolean>(true);
  const [scheme, setScheme] = useState<BuildScheme>(initialSchemeState);

  useEffect(() => {
    const layoutImgs = [LayoutHCol, LayoutHRow];
    setLayoutSvgs(layoutImgs);
  }, []);

  useEffect(() => {
    if (!alternateBgColor) {
      setScheme({
        ...scheme,
        steps: { ...scheme.steps, alternateBgColor: scheme.layout?.bgColor },
      });
    }
  }, [alternateBgColor]); // eslint-disable-line react-hooks/exhaustive-deps

  // const onSubmitForm = (values: any) => {
  //   console.log(values);
  // };

  const changeLayoutBgColor = (bgColor: string) => {
    if (!alternateBgColor) {
      setScheme({
        layout: { ...scheme.layout, bgColor },
        steps: { ...scheme.steps, alternateBgColor: bgColor },
      });
    } else {
      setScheme({ ...scheme, layout: { ...scheme.layout, bgColor } });
    }
  };

  const changeAlternateBgClr = (bgColor: string) => {
    setScheme({ ...scheme, steps: { ...scheme.steps, alternateBgColor: bgColor } });
  };

  const changeStepsBgClr = (bgColor: string) => {
    setScheme({ ...scheme, steps: { ...scheme.steps, bgColor } });
  };

  const changeStepsBorderClr = (borderColor: string) => {
    setScheme({ ...scheme, steps: { ...scheme.steps, borderColor } });
  };

  const changeStepsFontClr = (fontColor: string) => {
    setScheme({ ...scheme, steps: { ...scheme.steps, fontColor } });
  };

  return (
    <Flex
      flexDirection="column"
      align="center"
      p={[5, null, 7]}
      h="100%"
      bg={useColorModeValue('gray.50', 'grey.300')}
    >
      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="layout"
          instructions="Select one of the predefined layouts. Select between Horizontal/Vertical flow."
        >
          <Thumbnail clickable imgsrc={layoutSvgs[0]} />
          <Thumbnail clickable imgsrc={layoutSvgs[1]} />
        </BuilderBlock>
        <BuilderBlock title="Background Color">
          <Thumbnail
            clickable
            swapColor
            onTNClick={changeLayoutBgColor}
            w="250px"
            h="50px"
            bg={scheme.layout?.bgColor}
          />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="steps layout"
          instructions="Optional: Display numbered steps to completion. If you do not want numbered steps select N/A."
        >
          <Thumbnail
            bg={scheme.layout!.bgColor}
            clickable
            imgsrc={() =>
              editableStepColorCM({
                ...scheme.steps,
                bgColor: scheme.steps?.bgColor,
              })
            }
          />
          <Thumbnail
            bg={scheme.layout!.bgColor}
            clickable
            imgsrc={() =>
              editableStepCM({
                ...scheme.steps,
                bgColor: scheme.steps?.bgColor,
              })
            }
          />
          <Thumbnail
            bg={scheme.layout!.bgColor}
            clickable
            imgsrc={() =>
              editableStepColorNM({
                ...scheme.steps,
                bgColor: scheme.steps?.bgColor,
              })
            }
          />
          <Thumbnail
            bg={scheme.layout!.bgColor}
            clickable
            imgsrc={() =>
              editableStepNM({
                ...scheme.steps,
                bgColor: scheme.steps?.bgColor,
              })
            }
          />
        </BuilderBlock>
        <BuilderBlock title="Set Alternate Background Color">
          <Switch
            style={{ transform: 'scale(1.2)' }}
            size="lg"
            colorScheme="teal"
            defaultChecked={true}
            isChecked={alternateBgColor}
            onChange={() => {
              setAlternateBgColor(!alternateBgColor);
            }}
          />
        </BuilderBlock>
        {alternateBgColor && (
          <BuilderBlock title="Alternate Background Color">
            <Thumbnail
              clickable
              swapColor
              w="250px"
              h="50px"
              onTNClick={changeAlternateBgClr}
              bg={scheme.steps?.alternateBgColor}
            />
          </BuilderBlock>
        )}
        <BuilderBlock title="Background Color">
          <Thumbnail
            clickable
            swapColor
            w="250px"
            h="50px"
            onTNClick={changeStepsBgClr}
            bg={scheme.steps?.bgColor}
          />
        </BuilderBlock>
        <BuilderBlock title="Border Color">
          <Thumbnail
            clickable
            swapColor
            w="250px"
            h="50px"
            onTNClick={changeStepsBorderClr}
            bg={scheme.steps?.borderColor}
          />
        </BuilderBlock>
        <BuilderBlock title="Font Color">
          <Thumbnail
            clickable
            swapColor
            w="250px"
            h="50px"
            onTNClick={changeStepsFontClr}
            bg={scheme.steps?.fontColor}
          />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock title="Banner Image" instructions="Optional: Image can be placed above ">
          <Thumbnail w="520px" maxW="520px" />
        </BuilderBlock>
      </Container>

      <Divider my={6} w="90%" />

      <Container w={['100%', null, '100%', '85%']} direction="column">
        <BuilderBlock
          title="Content"
          instructions="Content to be displayed along with the products you have chosen."
        >
          <></>
        </BuilderBlock>
        <BuilderBlock title="Section 1" direction="column" validated>
          <Input variant="flushed" placeholder="Section Instruction 1" maxW="520px" w="520px" />
          <ComponentMultiplier
            Component={
              <Input variant="flushed" placeholder="Special Note" maxW="520px" w="520px" />
            }
            height="sm"
            limit={2}
            title="Special Note"
            fadeTransition
          />
        </BuilderBlock>
        <BuilderBlock title="Section 2" direction="column" validated>
          <Input variant="flushed" placeholder="Section Instruction 2" maxW="520px" w="520px" />
          <ComponentMultiplier
            Component={
              <Input variant="flushed" placeholder="Special Note" maxW="520px" w="520px" />
            }
            height="sm"
            limit={2}
            title="Special Note"
            fadeTransition
          />
        </BuilderBlock>
        <Button
          variant="ghost"
          h="150px"
          w="100%"
          textAlign="center"
          p={0}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          leftIcon={<AddIcon />}
        >
          Add Step
        </Button>
      </Container>

      <Stack direction="row" spacing={4} align="center" pt="72">
        <Button
          w="160px"
          size="lg"
          colorScheme="green"
          variant="solid"
          rightIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
        <Button w="160px" size="lg" colorScheme="black" variant="outline">
          Cancel
        </Button>
      </Stack>
    </Flex>
  );
};

export default BuilderPanel;
