import { useState } from 'react';
import { Box, BoxProps, Image } from '@chakra-ui/react';
import { SketchPicker } from 'react-color';

type SVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

interface TNProps extends BoxProps {
  clickable?: boolean;
  imgsrc?: SVGComponent | string;
  swapColor?: boolean;
  value?: string | number;
  onTNClick?: (...args: any) => void;
}

const Thumbnail = (props: TNProps) => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const { clickable = true, swapColor = false } = props;

  const changeBgColor = (color: string) => {
    const key = props.value as string;
    if (swapColor && props.onTNClick) {
      setBgColor(color);
      props.onTNClick(key.split('-')[0], color);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (clickable && props.onTNClick) {
      if (props.swapColor) {
        setShowClrPicker(!showClrPicker);
      } else {
        props.onTNClick();
      }
    }
  };

  const renderContent = () => {
    if (props.imgsrc) {
      return typeof props.imgsrc === 'string' ? (
        <Image objectFit="cover" h="100%" w="100%" src={props.imgsrc} />
      ) : (
        <props.imgsrc />
      );
    }
    return null;
  };

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        borderColor="gray.400"
        bg={props.bg ? props.bg : bgColor}
        cursor={clickable ? 'pointer' : 'default'}
        overflow="hidden"
        pos="relative"
        w={props.w ? props.w : '120px'}
        h={props.h ? props.h : '100px'}
        _hover={{ borderColor: 'black', transition: 'all 0.4s ease-in-out' }}
        onClick={handleClick}
      >
        {renderContent()}
      </Box>
      {showClrPicker && (
        <Box
          color="black"
          position="absolute"
          right="14px"
          zIndex="100"
          onMouseLeave={() => setShowClrPicker(false)}
        >
          <SketchPicker color={bgColor} onChangeComplete={(color) => changeBgColor(color.hex)} />
        </Box>
      )}
    </>
  );
};

export default Thumbnail;
