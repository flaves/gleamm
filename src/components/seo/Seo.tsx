import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Maybe } from '../../types/Maybe';
import { PageVariant } from '../../types/PageVariant';

type Meta = JSX.IntrinsicElements[`meta`];

export interface Props {
  children?: ReactNode;
  currentPage: PageVariant;
  pageVariants: PageVariant[];
  title?: Maybe<string>;
  description?: Maybe<string>;
  lang?: string;
  meta?: Meta[];
  ogType?: `article` | `website`;
}

export function Seo(props: Props) {
  const { currentPage, pageVariants } = props;
  const { site } = useStaticQuery(query);

  const metaTitle = props.title || (site.siteMetadata.title as string);

  const metaDescription =
    props.description || (site.siteMetadata.description as string);

  const currentUrl = currentPage
    ? `${site.siteMetadata.siteUrl}${currentPage.path}`
    : ``;
  const renderCurrentPage = () => {
    return <link rel="canonical" href={currentUrl} />;
  };

  const renderPageVariants = () => {
    if (currentPage) {
      return [currentPage, ...(pageVariants || [])].map((pageVariant, key) => {
        return (
          <link
            key={key}
            rel="alternate"
            href={`${site.siteMetadata.siteUrl}${pageVariant.path}`}
            hrefLang={pageVariant.lang}
          />
        );
      });
    }
    return <link />;
  };

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
      {renderCurrentPage()}
      <link
        rel="alternate"
        href={site.siteMetadata.siteUrl}
        hrefLang="x-default"
      />
      {renderPageVariants()}
    </>
  );
}

export const query = graphql`
  fragment AlternateLanguageFragment on PrismicAlternateLanguage {
    lang
    uid
    type
  }
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
