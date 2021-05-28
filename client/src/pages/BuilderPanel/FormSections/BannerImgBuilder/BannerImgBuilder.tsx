import { FlexProps } from '@chakra-ui/react';

import BuilderBlock from '../../BuilderBlock';
import Container from 'src/components/Container';
import Dropzone from '../../Dropzone';

const BannerImgBuilder = (props: FlexProps) => {
  return (
    <Container {...props}>
      <BuilderBlock
        title="Banner Image"
        instructions="Optional: Background image for the created page."
        responsiveDirection
      >
        <Dropzone h="100px" mt={[8, null, 0, 0]} />
      </BuilderBlock>
    </Container>
  );
};

export default BannerImgBuilder;
