import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  maxWidth: 1420,
};

const variants: SystemStyleObject = {
  default: {
    px: 5,
  },
  nav: {
    px: 120,
  },
};

const defaultProps: SystemStyleObject = {
  variant: `default`,
};

export const Container = {
  baseStyle,
  variants,
  defaultProps,
};
