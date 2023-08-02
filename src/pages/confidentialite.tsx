import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { LegalPageContainer } from '../containers/legal-page/LegalPageContainer';

type LegalData = {
  legalPage: Queries.PrismicLegalPage;
};

type Props = PageProps<LegalData> & {};

const LegalPage = (props: Props) => {
  const { data } = props;

  return (
    <Layout>
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
  query {
    legalPage: prismicLegalPage(uid: { eq: "confidentialite" }) {
      data {
        seo_title
        seo_description
        ...LegalPageBodySectionFragment
      }
    }
  }
`;
