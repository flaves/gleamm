import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {};

const variants: SystemStyleObject = {
  default: {
    minWidth: `max-content`,
    height: `40px`,
    px: 5,
    fontSize: `0.875rem`,
    fontWeight: 500,
    borderRadius: 20,
    backgroundColor: `brand.primary.base`,
    borderWidth: 1,
    borderColor: `brand.primary.darker`,
    color: `white`,
    transition: `0.3s`,
    _hover: {
      borderColor: `transparent`,
      backgroundColor: `brand.primary.darker`,
    },
    _focus: {
      boxShadow: `0px 0px 0px 3px rgba(7, 161, 197, 0.10)`,
    },
  },
};

const defaultProps: SystemStyleObject = {
  variant: `default`,
};

export const Button = {
  baseStyle,
  variants,
  defaultProps,
};
