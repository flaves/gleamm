import { SystemStyleObject } from '@chakra-ui/react';

const baseStyle: SystemStyleObject = {
  root: {
    width: `max-content`,
    py: 1.5,
    px: 2.5,
    borderRadius: 99,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: `18px`,
    color: `brand.primary.base`,
    borderWidth: 1,
    borderColor: `brand.primary.lighter`,
    backgroundColor: `brand.primary.lightest`,
  },
  icon: {
    color: `#07A1C5`,
    size: `lg`,
    marginRight: 6,
  },
};

const defaultProps: SystemStyleObject = {};

export const Badge = {
  parts: [`root`, `icon`],
  baseStyle,
  defaultProps,
};
