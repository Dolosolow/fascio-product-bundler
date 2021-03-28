import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react';

import EmptyListState from 'src/components/EmptyListState';
import TableSaw, { TSContents } from 'src/components/TableSaw';

import FinderSvg from 'src/images/svg/find-prod.svg';

interface ATIProps {
  idx: number;
  section: Builder.Grup.StepContent;
  sectionProducts: TSContents;
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
          tableCaption="View/Modify products in the section"
          tableData={sectionProducts}
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
