import { TableCaption, Table, Thead, Tbody, Tr, Td, Th, Image, MenuItem } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import QuickMenu from '../QuickMenu';

interface TSProps {
  tableCaption?: string;
  tableData: Builder.Grup.StepProduct[];
  tableHeads: string[];
  tableName?: string;
  EmptyStateComponent?: React.ReactNode;
  quickMenu?: boolean;
}

const TableSaw = ({
  tableCaption,
  tableData,
  tableHeads,
  tableName,
  EmptyStateComponent,
  quickMenu = false,
}: TSProps) => {
  const { values, setValues } = useFormikContext<Builder.Grup.BuilderMap>();

  const onEditMenuItem = (id: string) => {
    alert(`editing item: ID ${id}`);
  };

  const onDeleteMenuItem = (id: string) => {
    let sectionProducts = values.content.steps;

    const SPIndex = sectionProducts.findIndex((section) => section.instructions === tableName);

    if (SPIndex !== -1) {
      const updatedProducts = sectionProducts[SPIndex].products.filter((prod) => prod.id !== id);
      sectionProducts[SPIndex].products = updatedProducts;

      setValues({ ...values, content: { steps: [...sectionProducts] } });
    }
  };

  const renderTableHeads = () => {
    return [...tableHeads, quickMenu ? 'action' : ''].map((headKey) => {
      return <Th key={headKey}>{headKey.split('_').join(' ')}</Th>;
    });
  };

  const renderTableBody = () => {
    if (tableData.length) {
      return tableData.map((content, idx) => {
        const row = (
          <>
            <Td>
              <Image
                objectFit="cover"
                src={content.primary_image!.url_thumbnail!}
                alt={content.name!}
                w="50px"
                maxH="50px"
              />
            </Td>
            <Td>{content.sku}</Td>
            <Td>{content.name}</Td>
            <Td>${Number(content.price!).toFixed(2)}</Td>
            {quickMenu && (
              <Td key={idx}>
                <QuickMenu>
                  <MenuItem command="⌘E" onClick={() => onEditMenuItem(content.id!)}>
                    Edit Product
                  </MenuItem>
                  <MenuItem command="⌘D" onClick={() => onDeleteMenuItem(content.id!)}>
                    Delete Product
                  </MenuItem>
                </QuickMenu>
              </Td>
            )}
          </>
        );

        return <Tr key={idx}>{row}</Tr>;
      });
    } else {
      return null;
    }
  };

  return (
    <>
      {tableData.length ? (
        <Table variant="simple" colorScheme="facebook" fontSize="sm">
          {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
          <Thead>
            <Tr>{renderTableHeads()}</Tr>
          </Thead>
          <Tbody>{renderTableBody()}</Tbody>
        </Table>
      ) : (
        EmptyStateComponent
      )}
    </>
  );
};

export default TableSaw;
