import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  color: `text.heading`,
};

const variants: SystemStyleObject = {
  hero: {
    fontSize: [`2.5rem`, null, `6rem`],
    lineHeight: [`44px`, null, `96px`],
    fontWeight: 700,
  },
  review: {
    fontSize: `1.125rem`,
    lineHeight: `normal`,
    fontWeight: 600,
  },
  section: {
    fontSize: [`2rem`, null, `4rem`],
    lineHeight: [`40px`, null, `normal`],
    fontWeight: 700,
  },
  step: {
    fontSize: [`1.5rem`, null, `2rem`],
    lineHeight: `normal`,
    fontWeight: 600,
  },
  faq: {
    fontSize: [`1.125rem`, null, `1.25rem`],
    lineHeight: `normal`,
    fontWeight: 600,
  },
  panel: {
    fontSize: `1.125rem`,
    lineHeight: `22px`,
    fontWeight: 600,
  },
  footer: {
    fontSize: `1rem`,
    lineHeight: `normal`,
    fontWeight: 600,
  },
  pricing: {
    fontSize: `2.5rem`,
    fontWeight: 500,
  },
};

const defaultProps: SystemStyleObject = {
  variant: `section`,
};

export const Heading = {
  baseStyle,
  variants,
  defaultProps,
};
