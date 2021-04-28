import { Grid, GridItem, GridProps } from '@chakra-ui/react';

interface GTHProps extends GridProps {
  gridItems: string[];
}

const GridTableHead = (props: GTHProps) => {
  const renderGridContent = () => {
    return props.gridItems.map((item, idx) => {
      if (idx === 0) {
        return (
          <GridItem rowSpan={1} colSpan={2} minW="70px">
            <h4>{item}</h4>
          </GridItem>
        );
      } else if (idx === props.gridItems.length - 1) {
        return (
          <GridItem
            rowSpan={1}
            colStart={props.gridItems.length + 2}
            colEnd={props.gridItems.length + 2}
            margin="auto"
            minW="70px"
            textAlign="center"
          >
            {item}
          </GridItem>
        );
      } else {
        return (
          <GridItem
            rowSpan={1}
            colStart={2 + idx}
            colEnd={2 + idx}
            margin="auto"
            minW="70px"
            textAlign="center"
          >
            {item}
          </GridItem>
        );
      }
    });
  };

  return (
    <Grid
      templateColumns={props.templateColumns || 'repeat(10, 1fr)'}
      gap={props.gap || 0}
      p={props.p || 3}
      borderBottomWidth={props.borderBottomWidth || '1px'}
      mb={props.mb || 3}
      color={props.color || 'gray.500'}
      alignItems={props.alignItems || 'center'}
      alignSelf={props.alignSelf || 'center'}
      w={props.w || '95%'}
    >
      {renderGridContent()}
    </Grid>
  );
};

export default GridTableHead;
