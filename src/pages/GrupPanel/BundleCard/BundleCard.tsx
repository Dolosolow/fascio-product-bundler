import { Grid, GridItem, MenuItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { DynoButton } from 'src/components/Buttons';
import QuickMenu from 'src/components/QuickMenu';

import { Bundle } from 'src/types/schema';

interface BCProps {
  bundle: Bundle;
}

const BundleCard = ({ bundle }: BCProps) => {
  const formatCreatedAtDate = () => {
    const month = dayjs(bundle.date_created).month() + 1;
    const date = dayjs(bundle.date_created).date();
    const year = dayjs(bundle.date_created).year();

    return `${month}-${date}-${year}`;
  };

  const getTotalProducts = () => {
    let count = 0;

    bundle.content.sections.forEach((section) => {
      count += section.products.length;
    });

    return count;
  };

  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      gap={0}
      borderWidth="1px"
      borderRadius="md"
      p={3}
      alignItems="center"
      w="100%"
    >
      <GridItem rowSpan={1} colSpan={2} minW="70px">
        <Text isTruncated>{bundle.bundleName}</Text>
      </GridItem>
      <GridItem rowSpan={1} colStart={3} colEnd={3} margin="auto" minW="70px" textAlign="center">
        <Text>{getTotalProducts()}</Text>
      </GridItem>
      <GridItem rowSpan={1} colStart={4} colEnd={4} margin="auto" minW="70px" textAlign="center">
        <Link to={`/bundle/${bundle.id}`}>
          <Text
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
            minW="70px"
            textAlign="center"
          >
            Preview
          </Text>
        </Link>
      </GridItem>
      <GridItem
        rowSpan={1}
        colStart={5}
        colEnd={5}
        whiteSpace="nowrap"
        margin="auto"
        minW="70px"
        textAlign="center"
      >
        <Text>n/a</Text>
      </GridItem>
      <GridItem
        rowSpan={1}
        colStart={6}
        colEnd={6}
        whiteSpace="nowrap"
        margin="auto"
        minW="70px"
        textAlign="center"
      >
        <Text>n/a</Text>
      </GridItem>
      <GridItem
        rowSpan={1}
        colStart={7}
        colEnd={7}
        whiteSpace="nowrap"
        margin="auto"
        minW="70px"
        textAlign="center"
      >
        <Text>{formatCreatedAtDate()}</Text>
      </GridItem>
      <GridItem rowSpan={1} colStart={9} colEnd={9}>
        <DynoButton buttonStatus={bundle.status} />
      </GridItem>
      <GridItem rowSpan={1} colStart={10} colEnd={10} margin="auto" minW="70px" textAlign="center">
        <QuickMenu>
          <MenuItem command="⌘E" onClick={() => alert(bundle.id)}>
            Edit Bundle
          </MenuItem>
          <MenuItem command="⌘D" onClick={() => alert(bundle.id)}>
            Delete Bundle
          </MenuItem>
        </QuickMenu>
      </GridItem>
    </Grid>
  );
};

export default BundleCard;
