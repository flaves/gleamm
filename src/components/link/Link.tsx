import React, { ElementType, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/react';

type LinkProps = {
  type?: undefined;
};

type AnchorProps = {
  type?: `anchor`;
  target?: string;
  rel?: string;
  isExternal?: boolean;
};

export type Props = (AnchorProps | LinkProps) & {
  children: ReactNode;
  to: string;
};

export function Link(props: Props) {
  const { children, type, to } = props;

  if (type === `anchor`) {
    const { target, rel, isExternal } = props;
    const anchorProps = isExternal
      ? { target: `_blank`, rel: `noopener noreferrer` }
      : { target, rel };
    return (
      <a href={to} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <ChakraLink
      as={((props) => <GatsbyLink to={to} {...props} />) as ElementType}
      sx={{ textDecoration: `none !important` }}
    >
      {children}
    </ChakraLink>
  );
}
