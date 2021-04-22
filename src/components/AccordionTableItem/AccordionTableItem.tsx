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
  hasError?: boolean;
  section: Builder.Grup.SectionContent;
  sectionProducts: Builder.Grup.StepProduct[];
}

const AccordionTableItem = ({ idx, hasError, section, sectionProducts }: ATIProps) => {
  return (
    <AccordionItem key={idx} padding={3} borderWidth="1px">
      <h2>
        <AccordionButton>
          <Flex flex="1" textAlign="left" color={hasError ? 'red.500' : 'inherit'}>
            {section.section_name.charAt(0).toUpperCase() + section.section_name.slice(1)}
          </Flex>
          <AccordionIcon color={hasError ? 'red.500' : 'inherit'} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableSaw
          quickMenu
          tableCaption="View/Modify products in the section"
          tableData={sectionProducts}
          tableHeads={['image', 'product_sku', 'product_name', 'price']}
          tableName={section.section_name}
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
