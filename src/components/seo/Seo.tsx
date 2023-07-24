import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Maybe } from '../../types/Maybe';

type Meta = JSX.IntrinsicElements[`meta`];

export interface Props {
  children?: ReactNode;
  title?: Maybe<string>;
  description?: Maybe<string>;
  lang?: string;
  meta?: Meta[];
  ogType?: `article` | `website`;
}

export function Seo(props: Props) {
  const { site } = useStaticQuery(query);

  const metaTitle = props.title || (site.siteMetadata.title as string);

  const metaDescription =
    props.description || (site.siteMetadata.description as string);

  const currentUrl = site.siteMetadata.siteUrl;
  return (
    <>
      <title>
        {`Gleamm | ${metaTitle}`} | {site.siteMetadata.title}
      </title>
      <meta name="lang" content="fr-be" />
      <meta name="description" content={`Gleamm | ${metaDescription}`} />
      <meta name="og:title" content={`Gleamm | ${metaTitle}`} />
      <meta name="og:description" content={`Gleamm | ${metaDescription}`} />
      <meta name="og:url" content={currentUrl} />
      <meta name="og:type" content={props.ogType || `website`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title || ``} />
      {props.children}
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;
