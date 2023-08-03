import React, { ReactNode } from 'react';
import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';

export type Props = SimpleGridProps & {
  children?: ReactNode;
};

export function Grid(props: Props) {
  const { children, ...rest } = props;

  return <ChakraSimpleGrid {...rest}>{children}</ChakraSimpleGrid>;
}
