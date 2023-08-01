import React, { ReactNode } from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';

export type Props = {
  children?: ReactNode;
};

export function Container(props: Props) {
  const { children } = props;

  return (
    <ChakraContainer maxWidth={1420} px={5}>
      {children}
    </ChakraContainer>
  );
}
