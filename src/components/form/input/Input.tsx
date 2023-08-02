import React, { ChangeEvent, forwardRef, ReactNode } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  useMultiStyleConfig,
} from '@chakra-ui/react';

export type Props = {
  value?: string;
  isInvalid?: boolean;
  rightIcon?: ReactNode;
  rightIconColor?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { rightIcon, rightIconColor, ...rest } = props;
  const styles = useMultiStyleConfig(`Input`, rest);
  return (
    <InputGroup>
      <ChakraInput __css={styles.field} ref={ref} {...rest} />
      {rightIcon && (
        <InputRightElement
          pointerEvents="none"
          children={rightIcon}
          color={rightIconColor}
        />
      )}
    </InputGroup>
  );
});
