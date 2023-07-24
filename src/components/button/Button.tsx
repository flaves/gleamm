import React, { forwardRef, ReactNode } from 'react';
import { Button as ChakraButton, useStyleConfig } from '@chakra-ui/react';
import { Icon } from '../icon/Icon';
import { Icons } from '../../config/icons';

export type Props = {
  children?: ReactNode;
  icon?: Icons;
};

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, icon, ...rest } = props;
  const styles = useStyleConfig(`Button`, rest);

  return (
    <ChakraButton ref={ref} __css={styles} {...props}>
      {children}
      {icon && (
        <Icon icon={icon} size="sm" color="white" style={{ marginLeft: 6 }} />
      )}
    </ChakraButton>
  );
});
