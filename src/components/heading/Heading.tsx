import React, { forwardRef } from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export type Props = HeadingProps & {}

export const Heading = (props: Props) => {
    console.log(props, 'PROPS')
    const styles = useStyleConfig(`Heading`, props);

    return <ChakraHeading __css={styles} {...props} />;
  }
;
