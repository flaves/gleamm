import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { LegalPageContainer } from '../containers/legal-page/LegalPageContainer';
import { PageContext } from '../types/PageContext';
import { splitLanguage } from '../utils/split-language';

type LegalData = {
  legalPage: Queries.PrismicLegalPage;
  navigation: Queries.PrismicNavigation;
  footer: Queries.PrismicFooter;
};

type Props = PageProps<LegalData> & PageContext & {};

const LegalPage = (props: Props) => {
  const { data, pageContext } = props;
  const { lang } = pageContext;

  const language = splitLanguage(lang);

  const layout = {
    navigation: data.navigation,
    footer: data.footer,
  };

  return (
    <Layout lang={language} layout={layout}>
      <LegalPageContainer data={data} />
    </Layout>
  );
};

export default LegalPage;

export const Head = (props: Props) => {
  const seo = useSeo(props.data.legalPage);
  return <Seo {...seo} />;
};

export const query = graphql`
  query ($id: String!, $lang: String!) {
    navigation: prismicNavigation(lang: { eq: $lang }) {
      ...NavigationFragment
    }
    footer: prismicFooter(lang: { eq: $lang }) {
      ...FooterFragment
    }
    legalPage: prismicLegalPage(id: { eq: $id }) {
      lang
      type
      alternate_languages {
        ...AlternateLanguageFragment
      }
      data {
        seo_title
        seo_description
        ...LegalPageBodySectionFragment
      }
    }
  }
`;
