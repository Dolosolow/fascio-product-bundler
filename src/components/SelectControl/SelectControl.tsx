import { FormControl, Select, SelectProps } from '@chakra-ui/react';

import { ErrorBoundary, ErrorPrompt } from '../ErrorPrompt';

interface SCProps extends SelectProps {
  placeholder?: string;
  value: string;
  options: string[] | { name: string; value: string }[];
  setSubmitting: (submitState?: boolean) => boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectControl = (props: SCProps) => {
  const { placeholder, value, defaultValue, options, setSubmitting, onChange } = props;

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

  return (
    <ErrorPrompt
      setSubmitting={setSubmitting}
      value={value}
      placement="bottom"
      warningInstructions="Select an item from the list"
    >
      <FormControl marginRight="auto" w="max-content">
        <ErrorBoundary>
          {({ isInvalid }) => {
            return (
              <Select
                variant="filled"
                placeholder={placeholder ? placeholder : 'Select an option'}
                w="160px"
                marginX={5}
                isInvalid={isInvalid}
                value={value}
                defaultValue={defaultValue ? defaultValue : undefined}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  onChange(event);
                }}
              >
                {renderSelectOptions()}
              </Select>
            );
          }}
        </ErrorBoundary>
      </FormControl>
    </ErrorPrompt>
  );
};

export default SelectControl;
