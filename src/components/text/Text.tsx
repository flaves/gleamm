import React, { ReactNode } from 'react';
import { Text as ChakraText, useStyleConfig } from '@chakra-ui/react';
import { TextVariants } from './_/types';

export type Props = {
  color?: string;
  className?: string;
  children?: ReactNode;
  variant?: TextVariants;
  onClick?: () => void;
};

export function Text(props: Props) {
  const styles = useStyleConfig(`Text`, props);

  return <ChakraText __css={styles} {...props} />;
}
