import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {};

const variants: SystemStyleObject = {
  default: {
    field: {
      width: `100%`,
      height: `52px`,
      borderRadius: 8,
      backgroundColor: `gray.25`,
      color: `gray.800`,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: `18px`,
      borderWidth: 1,
      borderColor: `gray.100`,
      transition: `0.3s`,
      _focus: {
        borderWidth: 1,
        borderColor: `brand.primary.base`,
        boxShadow: `0px 0px 0px 3px #07A1C51A`,
      },
      _placeholder: {
        color: `gray.400`,
      },
      _invalid: {
        borderWidth: 1,
        borderColor: `danger.500`,
        boxShadow: `0px 0px 0px 3px rgba(245, 101, 101, 0.10)`,
      },
    },
  },
};

const defaultProps: SystemStyleObject = {
  variant: `default`,
};

export const Input = {
  parts: [`addon`, `field`, `element`],
  baseStyle,
  variants,
  defaultProps,
};
