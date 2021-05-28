import { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  Icon,
  Placement,
  PopoverContentProps,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

import ErrorPromptContext from 'src/contexts/errorPromptContext';

interface SCProps extends PopoverContentProps {
  children: React.ReactNode;
  placement?: Placement;
  hasError?: boolean;
  value?: string;
  warningInstructions?: string;
  setSubmitting?: (submitState?: boolean) => boolean;
}

const ErrorPrompt = (props: SCProps) => {
  const { value, hasError, warningInstructions, setSubmitting, placement } = props;
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (setSubmitting && value === '' && setSubmitting()) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    if (hasError) {
      setIsInvalid(true);
    }
  }, [value, setSubmitting, hasError]);

  return (
    <ErrorPromptContext.Provider value={{ isInvalid, setIsInvalid }}>
      <Popover
        isLazy
        placement={placement}
        closeOnBlur
        isOpen={isInvalid}
        onClose={() => {
          setIsInvalid(false);
          if (setSubmitting) setSubmitting(false);
        }}
      >
        <PopoverTrigger>{props.children}</PopoverTrigger>
        <PopoverContent
          style={{ boxShadow: '0 1.2px 5px 1px rgba(0,0,0,0.15)' }}
          alignSelf="flex-start"
          top={props.top}
          left={props.left}
          right={props.right}
          bottom={props.bottom}
        >
          <PopoverBody textAlign="center">
            <Icon as={WarningIcon} color="gold" mr={2} mb={1} />
            {warningInstructions && warningInstructions}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ErrorPromptContext.Provider>
  );
};

const ErrorBoundary = ErrorPromptContext.Consumer;

export { ErrorPrompt, ErrorBoundary };
