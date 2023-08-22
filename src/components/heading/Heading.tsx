import React, { ReactNode } from 'react';
import {
  Heading as ChakraHeading,
  SystemStyleObject,
  useStyleConfig,
} from '@chakra-ui/react';
import { HeadingVariants } from './_/types';

export type Props = {
  additionalStyle?: SystemStyleObject;
  as?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
  children?: ReactNode;
  variant?: HeadingVariants;
  color?: string;
};

export function Heading(props: Props) {
  const { additionalStyle } = props;
  const styles = useStyleConfig(`Heading`, props);
  return <ChakraHeading __css={styles} sx={additionalStyle} {...props} />;
}
