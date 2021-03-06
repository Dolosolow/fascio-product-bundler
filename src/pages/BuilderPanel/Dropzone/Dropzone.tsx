import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Flex, BoxProps, Text, Image } from '@chakra-ui/react';
import _ from 'lodash';

interface DZProps extends BoxProps {
  value?: string | number;
  onTNClick?: (args?: any) => void;
}

const ImgDropzone = (props: DZProps) => {
  const [imgData, setImgData] = useState<any | null>(null);
  const dropzoneProps = _.omit(props, ['value', 'onTNClick']);

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        setImgData(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/jpeg, image/png',
  });

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      borderWidth="2px"
      borderRadius="lg"
      borderColor="gray.400"
      borderStyle="dashed"
      cursor="pointer"
      overflow="hidden"
      pos="relative"
      _hover={{ borderColor: 'blue.400', transition: 'all 0.4s ease-in-out' }}
      {...dropzoneProps}
      {...getRootProps()}
      w="92vw"
      outline="0"
    >
      <input {...getInputProps()} />
      <Text fontSize={['xs', 'md']} color={imgData ? 'white' : 'gray.500'} zIndex="2">
        Drag 'n' drop an image here, or click to select a file
      </Text>
      <Text fontSize="xs" color={imgData ? 'white' : 'gray.500'} zIndex="2">
        (Only *.jpeg and *.png images will be accepted)
      </Text>
      {imgData && (
        <Image
          filter="brightness(60%)"
          objectFit="contain"
          position="absolute"
          top="-120px"
          left="0"
          zIndex="1"
          src={imgData}
        />
      )}
    </Flex>
  );
};

export default ImgDropzone;
