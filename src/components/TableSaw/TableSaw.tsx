import { TableCaption, Table, Thead, Tbody, Tr, Td, Th, Image, Button } from '@chakra-ui/react';
import { TSContents } from './index';

interface TSProps {
  tableCaption?: string;
  tableData: TSContents;
  EmptyStateComponent?: React.ReactNode;
}

const TableSaw = ({ tableData, tableCaption, EmptyStateComponent }: TSProps) => {
  const renderTableHeads = () => {
    const THSet = new Set<string>();

    if (tableData.length) {
      tableData.forEach((item) => {
        if (THSet.size < Object.keys(item.data).length) {
          Object.keys(item.data).forEach((content) => {
            THSet.add(content);
          });
        }
      });
      return [...THSet].map((headKey) => {
        return <Th key={headKey}>{headKey.split('_').join(' ')}</Th>;
      });
    } else {
      return null;
    }
  };

  const renderTableBody = () => {
    const regex = /\b(.jpe?g|.png)/;

    if (tableData.length) {
      return tableData.map((content, idx) => {
        const row = Object.keys(content.data).map((key, idx) => {
          const item = content.data;

          if (regex.test(item[key].value)) {
            return (
              <Td key={idx}>
                <Image objectFit="cover" src={item[key].value} alt="sethoscope" w="50px" />
              </Td>
            );
          }
          if (item[key].menu) {
            return (
              <Td key={idx}>
                <Button variant="ghost">•••</Button>
              </Td>
            );
          }
          return (
            <Td key={idx}>
              {item[key].isPrice && '$'}
              {item[key].value}
            </Td>
          );
        });
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
