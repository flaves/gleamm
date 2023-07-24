import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {};

const variants: SystemStyleObject = {
  h1: {
    fontSize: [`3rem`, null, `3.5rem`, null, `4rem`],
  },
  h2: {
    fontSize: [`2.25rem`, null, `2.5rem`, null, `3rem`],
  },
  h3: {
    fontSize: [`1.75rem`, null, `2rem`, null, `2.5rem`],
  },
  h4: {
    fontSize: [`1.5rem`, null, `1.5rem`, null, `2rem`],
  },
  h5: {
    fontSize: [`1.25rem`, null, `1.5rem`, null, `1.5rem`],
  },
  h6: {
    fontSize: [`mobile.h6`, null, `desktop.h6`],
  },
};

const defaultProps: SystemStyleObject = {
  variant: `h4`,
};

export const Heading = {
  baseStyle,
  variants,
  defaultProps,
};
