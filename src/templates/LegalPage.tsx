import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { LegalPageContainer } from '../containers/legal-page/LegalPageContainer';
import { PageContext } from '../types/PageContext';

type LegalData = {
  legalPage: Queries.PrismicLegalPage;
};

type Props = PageProps<LegalData> & PageContext & {};

const LegalPage = (props: Props) => {
  const { data, pageContext } = props;
  const { lang } = pageContext;

  const layout = {
    navigation: data.navigation,
    footer: data.footer,
  };

  return (
    <Layout lang={lang} layout={layout}>
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
      data {
        seo_title
        seo_description
        ...LegalPageBodySectionFragment
      }
    }
  }
`;
