import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react';

import EmptyListState from 'src/components/EmptyListState';
import TableSaw from 'src/components/TableSaw';

import FinderSvg from 'src/images/svg/find-prod.svg';

interface ATIProps {
  idx: number;
  section: Builder.Grup.StepContent;
  sectionProducts: Builder.Grup.StepProduct[];
}

const AccordionTableItem = ({ idx, section, sectionProducts }: ATIProps) => {
  return (
    <AccordionItem key={idx} borderWidth="1px">
      <h2>
        <AccordionButton>
          <Flex flex="1" textAlign="left">
            {section.instructions.charAt(0).toUpperCase() + section.instructions.slice(1)}
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableSaw
          quickMenu
          tableCaption="View/Modify products in the section"
          tableData={sectionProducts}
          tableHeads={['image', 'product_sku', 'product_name', 'price']}
          tableName={section.instructions}
          EmptyStateComponent={
            <EmptyListState
              imgsrc={FinderSvg}
              headingText="Start by adding a product"
              subText="Currently there are no products in this section. Use the search bar and begin to add products."
            />
          }
        />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionTableItem;
