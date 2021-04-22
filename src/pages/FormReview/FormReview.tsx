import React from 'react';
import { useFormikContext } from 'formik';
import { Image, chakra, HStack, Heading, VStack, Divider } from '@chakra-ui/react';
import _ from 'lodash';

import BuilderBlock from 'src/pages/BuilderPanel/BuilderBlock';
import Container from 'src/components/Container';
import HeaderText from 'src/components/HeaderText';
import Thumbnail from 'src/components/Thumbnail';

import { getStepsLayout, getLayoutTemplate } from 'src/pages/helpers/SvgShapeGenerator';

const FormReview = ({
  changeStepsColorScheme,
  toggleShow,
  showAlternateBgClr,
  ...props
}: Builder.BuilderTools) => {
  const { values } = useFormikContext<Builder.Grup.BuilderMap>();

  const selectedLayoutTemplate = getLayoutTemplate(values.layout.template!);
  const selectedStepsLayout = getStepsLayout(
    values.steps.template!,
    _.omit(values.steps, ['template'])
  );

  const renderLayoutTemplate = () => (
    <BuilderBlock title="layout">
      <Thumbnail imgsrc={selectedLayoutTemplate!} />
    </BuilderBlock>
  );

  const renderLayoutBGColor = () => (
    <BuilderBlock title="Background Color" responsiveDirection>
      <Thumbnail
        bg={values.layout?.bgColor}
        value={`bgColor-${values.layout?.bgColor}`}
        h="50px"
        w={['200px', '250px']}
      />
    </BuilderBlock>
  );

  const renderStepsLayout = () => (
    <BuilderBlock title="steps layout" wrapChildren>
      <Thumbnail
        bg={values.layout.bgColor ? values.layout.bgColor : undefined}
        imgsrc={() => selectedStepsLayout}
      />
    </BuilderBlock>
  );

  const renderBannerImage = () => (
    <BuilderBlock title="Banner Image" responsiveDirection>
      {values.layout.bannerImg ? (
        <Image h="100px" mt={[8, null, 0, 0]} src={values.layout.bannerImg} alt="banner image" />
      ) : (
        <HeaderText
          title=""
          content={<chakra.p fontSize="md">No Image Uploaded</chakra.p>}
          textColor="inherit"
        />
      )}
    </BuilderBlock>
  );

  const renderSectionContent = () => (
    <BuilderBlock title="Sections" direction="column">
      {values.content.steps.map((section) => (
        <React.Fragment key={section.section_name}>
          <HStack spacing={4} justify="space-between" wrap="wrap">
            <chakra.p whiteSpace="nowrap">
              <strong style={{ marginRight: '6px' }}>Section:</strong>
              {section.section_name}
            </chakra.p>
            <chakra.p whiteSpace="nowrap">
              <strong style={{ marginRight: '6px' }}>Limit:</strong>
              {section.limit ? section.limit : '-'}
            </chakra.p>
            <chakra.p whiteSpace="nowrap">
              <strong style={{ marginRight: '6px' }}>Required:</strong>
              {section.required ? 'Yes' : 'No'}
            </chakra.p>
            <chakra.p whiteSpace="nowrap">
              <strong style={{ marginRight: '6px' }}># of Products:</strong>
              {section.products.length}
            </chakra.p>
          </HStack>
          {section.specialNotes.length ? (
            <VStack
              style={{ marginTop: 0 }}
              bg="gray.50"
              spacing={0}
              justify="space-between"
              wrap="wrap"
            >
              {section.specialNotes.map((note, idx) => (
                <chakra.p whiteSpace="nowrap">
                  <strong style={{ marginRight: '6px' }}>Note {idx + 1}:</strong>
                  {note}
                </chakra.p>
              ))}
            </VStack>
          ) : null}
          {values.content.steps.length > 1 ? <Divider w="100%" /> : null}
        </React.Fragment>
      ))}
    </BuilderBlock>
  );

  return (
    <Container maxW="900px" {...props} direction="column">
      <Heading fontWeight="light" size="xl" mb={5} alignSelf="flex-start">
        Review and Confirm
      </Heading>
      <chakra.span boxShadow="xs" p="6" rounded="md">
        {renderLayoutTemplate()}
      </chakra.span>
      <chakra.span boxShadow="xs" p="6" rounded="md">
        {renderLayoutBGColor()}
      </chakra.span>
      <chakra.span boxShadow="xs" p="6" rounded="md">
        {renderStepsLayout()}
      </chakra.span>
      <chakra.span boxShadow="xs" p="6" rounded="md">
        {renderBannerImage()}
      </chakra.span>
      <chakra.span boxShadow="xs" p="6" rounded="md">
        {renderSectionContent()}
      </chakra.span>
    </Container>
  );
};

export default FormReview;
