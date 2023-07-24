import React, { ReactNode } from 'react';
import { Text as ChakraText, useStyleConfig } from '@chakra-ui/react';
import { TextVariants } from './_/types';

export type Props = {
  children?: ReactNode;
  variant?: TextVariants;
};

export function Text(props: Props) {
  const styles = useStyleConfig(`Text`, props);

  return <ChakraText __css={styles} {...props} />;
}
