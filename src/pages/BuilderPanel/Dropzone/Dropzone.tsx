import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormikContext } from "formik";
import { Flex, BoxProps, Text, Image } from "@chakra-ui/react";
import _ from "lodash";

import { CloseButton } from "src/components/Buttons/CloseButton";

interface DZProps extends BoxProps {
  value?: string | number;
  onTNClick?: (args?: any) => void;
}

const ImgDropzone = (props: DZProps) => {
  const { setFieldValue } = useFormikContext<Builder.Grup.BuilderMap>();
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [imgFile, setImgFile] = useState<any | null>(null);

  const dropzoneProps = _.omit(props, ["value", "onTNClick"]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        setPreviewImg(reader.result as any);
      };

      setImgFile(Object.assign(file, { preview: URL.createObjectURL(file) }));

      reader.readAsDataURL(file);
    });
  }, []);

  const cancelImgDrop = () => {
    setImgFile(null);
    setPreviewImg(null);
    setFieldValue("layout.layout_bannerImg", null);
  };

  useEffect(() => {
    setFieldValue("layout.layout_bannerImg", imgFile);
  }, [imgFile, setFieldValue]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: "image/jpeg, image/png",
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
      _hover={{ borderColor: "blue.400", transition: "all 0.4s ease-in-out" }}
      {...dropzoneProps}
      {...getRootProps()}
      w="92vw"
      outline="0"
    >
      <input {...getInputProps()} />
      {previewImg && (
        <CloseButton
          variant="light"
          iconSize="sm"
          buttonPosition={{ top: "5px", left: "5px" }}
          onClose={cancelImgDrop}
        />
      )}
      <Text fontSize={["xs", "md"]} color={previewImg ? "white" : "gray.500"} zIndex="2">
        Drag 'n' drop an image here, or click to select a file
      </Text>
      <Text fontSize="xs" color={previewImg ? "white" : "gray.500"} zIndex="2">
        (Only *.jpeg and *.png images will be accepted)
      </Text>
      {previewImg && (
        <Image
          filter="brightness(60%)"
          objectFit="contain"
          position="absolute"
          top="-120px"
          left="0"
          zIndex="1"
          src={previewImg}
        />
      )}
    </Flex>
  );
};

export default ImgDropzone;
