import React, { ChangeEvent, forwardRef } from 'react';
import { Textarea as ChakraTextarea, useStyleConfig } from '@chakra-ui/react';

export type Props = {
  label?: string;
  name?: string;
  isInvalid?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { isInvalid } = props;
  const styles = useStyleConfig(`Textarea`, props);

  return (
    <ChakraTextarea __css={styles} isInvalid={isInvalid} ref={ref} {...props} />
  );
});
