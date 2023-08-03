import React, { ElementType, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/react';

export type Props = {
  children?: ReactNode;
  to: string;
  target?: string;
  rel?: string;
  isAnchor?: boolean;
};

export function Link(props: Props) {
  const { children, to, target, isAnchor = false } = props;

  if (isAnchor) {
    return <a href={to as string}>{children}</a>;
  }

  return (
    <ChakraLink
      as={
        ((props) => (
          <GatsbyLink to={to} target={target} {...props} />
        )) as ElementType
      }
      sx={{ textDecoration: `none !important` }}
    >
      {children}
    </ChakraLink>
  );
}
