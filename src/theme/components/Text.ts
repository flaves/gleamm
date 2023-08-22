import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  color: `text.secondary`,
};

const variants: SystemStyleObject = {
  teamMember: {
    fontSize: `1.25rem`,
    lineHeight: `normal`,
    fontWeight: 600,
  },
  paragraph: {
    fontSize: [`0.875rem`, null, `1rem`],
    lineHeight: [`20px`, null, `24px`],
    fontWeight: 400,
  },
  helperHero: {
    fontSize: [`0.625rem`, null, `0.75rem`],
    lineHeight: `16px`,
    fontWeight: 500,
  },
  navLink: {
    fontSize: `0.875rem`,
    lineHeight: `20px`,
    fontWeight: 500,
    transition: `0.2s`,
    _hover: {
      color: `text.primary`,
    },
  },
  reviewBody: {
    fontSize: `0.875rem`,
    lineHeight: `20px`,
    fontWeight: 500,
  },
  reviewHelper: {
    fontSize: `0.875rem`,
    lineHeight: `normal`,
    fontWeight: 600,
    color: `gray.400`,
  },
  contactLabel: {
    fontSize: `0.875rem`,
    lineHeight: `18px`,
    fontWeight: 500,
  },
  contactLink: {
    fontSize: `1rem`,
    lineHeight: `22px`,
    fontWeight: 600,
    color: `text.primary`,
  },
};

const defaultProps: SystemStyleObject = {
  variant: `paragraph`,
};

export const Text = {
  baseStyle,
  variants,
  defaultProps,
};
