import { useState } from 'react';
import { FlexProps, Button, useColorModeValue, Flex } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

type GC =
  | React.ReactElement<
      any,
      | string
      | ((props: any) => React.ReactElement<any, any> | null)
      | (new (props: any) => React.Component<any, any, any>)
    >
  | undefined;

interface CMProps extends FlexProps {
  Component: GC;
  fadeTransition: boolean;
  height: 'sm' | 'lg';
  limit?: number;
  title: string;
}

const ComponentMultiplier = ({
  Component,
  height,
  limit,
  title,
  fadeTransition = false,
}: CMProps) => {
  const [list, setList] = useState<GC[]>([]);
  const [hidden, setHidden] = useState(true);

  const addToList = () => {
    if (limit && list.length < limit) {
      setList((list) => [...list, Component]);
    }
  };

  const removeOneFromList = () => {
    const newList: GC[] = Array.from(list);
    newList.pop();
    setList(newList);
  };

  const renderListItems = () => {
    if (!!list.length) {
      return list.map((Child) => {
        return fadeTransition ? Child : Child;
      });
    }
    return null;
  };

  return (
    <>
      {renderListItems()}
      <Flex
        onMouseEnter={() => {
          if (list.length > 0) setHidden(false);
        }}
        onMouseLeave={() => setHidden(true)}
      >
        <Button
          disabled={limit === list.length}
          textAlign="center"
          variant="ghost"
          p={0}
          h={height === 'sm' ? '45px' : '150px'}
          w="100%"
          leftIcon={<AddIcon />}
          onClick={addToList}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        >
          {title}
        </Button>
        <Button
          hidden={hidden}
          bg="red.500"
          textAlign="center"
          variant="ghost"
          p={0}
          h={height === 'sm' ? '45px' : '150px'}
          w="20%"
          ml={2}
          onClick={removeOneFromList}
          _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
          _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </>
  );
};

export default ComponentMultiplier;

//
//
//
// import { useState } from 'react';
// import { FlexProps, Button, useColorModeValue, Flex } from '@chakra-ui/react';
// import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

// type GC =
//   | React.ReactElement<
//       any,
//       | string
//       | ((props: any) => React.ReactElement<any, any> | null)
//       | (new (props: any) => React.Component<any, any, any>)
//     >
//   | undefined;

// interface CMProps extends FlexProps {
//   Component: GC;
//   fadeTransition: boolean;
//   height: 'sm' | 'lg';
//   limit?: number;
//   title: string;
// }

// const ComponentMultiplier = ({
//   Component,
//   height,
//   limit,
//   title,
//   fadeTransition = false,
// }: CMProps) => {
//   const [list, setList] = useState<GC[]>([]);
//   const [hidden, setHidden] = useState(true);

//   const addToList = () => {
//     if (limit && list.length < limit) {
//       setList((list) => [...list, Component]);
//     }
//   };

//   const removeOneFromList = () => {
//     const newList: GC[] = Array.from(list);
//     newList.pop();
//     setList(newList);
//   };

//   const renderListItems = () => {
//     if (!!list.length) {
//       return list.map((Child) => {
//         return fadeTransition ? Child : Child;
//       });
//     }
//     return null;
//   };

//   return (
//     <>
//       {renderListItems()}
//       <Flex
//         onMouseEnter={() => {
//           if (list.length > 0) setHidden(false);
//         }}
//         onMouseLeave={() => setHidden(true)}
//       >
//         <Button
//           disabled={limit === list.length}
//           textAlign="center"
//           variant="ghost"
//           p={0}
//           h={height === 'sm' ? '45px' : '150px'}
//           w="100%"
//           leftIcon={<AddIcon />}
//           onClick={addToList}
//           _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//           _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//         >
//           {title}
//         </Button>
//         <Button
//           hidden={hidden}
//           bg="red.500"
//           textAlign="center"
//           variant="ghost"
//           p={0}
//           h={height === 'sm' ? '45px' : '150px'}
//           w="20%"
//           ml={2}
//           onClick={removeOneFromList}
//           _hover={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//           _active={{ backgroundColor: useColorModeValue('gray.200', 'gray.700') }}
//         >
//           <DeleteIcon />
//         </Button>
//       </Flex>
//     </>
//   );
// };

// export default ComponentMultiplier;
