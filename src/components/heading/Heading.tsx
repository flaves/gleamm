import React, { ReactNode } from 'react';
import { Heading as ChakraHeading, useStyleConfig } from '@chakra-ui/react';
import { HeadingVariants } from './_/types';

export type Props = {
  as?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
  children?: ReactNode;
  variant?: HeadingVariants;
};

export function Heading(props: Props) {
  const {} = props;
  const styles = useStyleConfig(`Heading`, props);
  return <ChakraHeading __css={styles} {...props} />;
}
