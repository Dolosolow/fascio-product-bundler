import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  FormControl,
  Select,
  SelectProps,
  Icon,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

interface SCProps extends SelectProps {
  placeholder?: string;
  value: string;
  options: string[] | { name: string; value: string }[];
  setSubmitting: (submitState?: boolean) => boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectControl = (props: SCProps) => {
  const { placeholder, value, defaultValue, options, setSubmitting, onChange } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== '') setIsInvalid(false);
    onChange(event);
  };

  const renderSelectOptions = () => {
    return typeof options[0] === 'string'
      ? (options as string[]).map((option, idx) => (
          <option key={idx} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))
      : (options as { name: string; value: string }[]).map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
          </option>
        ));
  };

  useEffect(() => {
    if (value === '' && setSubmitting()) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [value, setSubmitting]);

  return (
    <Popover
      isLazy
      placement="bottom"
      closeOnBlur
      isOpen={isInvalid}
      onClose={() => {
        setIsInvalid(false);
        setSubmitting(false);
      }}
    >
      <PopoverTrigger>
        <FormControl marginRight="auto" w="max-content">
          <Select
            variant="filled"
            placeholder={placeholder ? placeholder : 'Select an option'}
            w="160px"
            marginX={5}
            isInvalid={isInvalid}
            value={value}
            defaultValue={defaultValue ? defaultValue : undefined}
            onChange={onSelectChange}
          >
            {renderSelectOptions()}
          </Select>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent
        style={{ alignSelf: 'flex-start', boxShadow: '0 1.2px 5px 1px rgba(0,0,0,0.15)' }}
      >
        <PopoverArrow />
        <PopoverBody textAlign="center">
          <Icon as={WarningIcon} color="gold" mr={2} mb={1} />
          Select an item from the list
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SelectControl;
