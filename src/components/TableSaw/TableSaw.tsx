import { TableCaption, Table, Thead, Tbody, Tr, Td, Th, Image, Button } from '@chakra-ui/react';
// import { TableCaption, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';
import { TSContents } from './index';

interface TSProps {
  tableCaption?: string;
  tableContents: TSContents;
  EmptyStateComponent?: React.ReactNode;
}

const TableSaw = ({ tableContents, tableCaption, EmptyStateComponent }: TSProps) => {
  const renderTableHeads = () => {
    const THSet = new Set<string>();

    if (tableContents.length) {
      tableContents.forEach((item) => {
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

    if (tableContents.length) {
      return tableContents.map((content, idx) => {
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
      {tableContents.length ? (
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

// import { Button, Image, TableCaption, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// type TContents = Array<
//   Array<{ [key: string]: { value: string; isNumeric?: boolean; menu: boolean } }>
// >;

// interface TSProps {
//   tableCaption?: string;
//   tableContents: TContents;
// }

// const TableSaw = ({ tableContents, tableCaption }: TSProps) => {
//   const renderTableHeads = () => {
//     return tableContents.map((tableRow) => {
//       return tableRow.map((content) => {
//         const key = Object.keys(content)[0];
//         const headerTitle = key;

//         if (!tableRow[key].isNumeric) {
//           return <Th>{headerTitle}</Th>;
//         }
//         return <Th isNumeric>{headerTitle}</Th>;
//       });
//     });
//   };

//   const renderTableBody = () => {
//     return tableContents.map((tableRow, idx) => {
//       const regex = /\b(.jpe?g|.png)/;

//       return tableRow.map((content) => {
//         if (regex.test(content[Object.keys(content)[0]].value)) {
//           return (
//             <Image
//               objectFit="cover"
//               src={content[Object.keys(content)[0]].value}
//               alt="sethoscope"
//               w="50px"
//             />
//           );
//         }

//         if (content[Object.keys(content)[0]].menu) {
//           return <Button variant="ghost">•••</Button>;
//         }

//         return content[Object.keys(content)[0]].value;
//       });
//     });
//   };

//   return (
//     <Table variant="simple" colorScheme="facebook" fontSize="sm">
//       {tableCaption && <TableCaption>{tableCaption}</TableCaption>}
//       <Thead>
//         <Tr>{renderTableHeads()}</Tr>
//       </Thead>
//       <Tbody>
//         <Tr>
//           <Td>
//             <Image
//               objectFit="cover"
//               src="https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/685/2543/6242-01_HERO1x_P__79431.1612374382.jpg?c=2"
//               alt="sethoscope"
//               w="50px"
//             />
//           </Td>
//           <Td>5960</Td>
//           <Td>5960 Littmann Classic III - Plum w/ Mirror Finish & Pink Stem</Td>
//           <Td isNumeric>$194.40</Td>
//           <Td>
//             <Button variant="ghost">•••</Button>
//           </Td>
//         </Tr>
//       </Tbody>
//     </Table>
//   );
// };

// export default TableSaw;
