import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { HomePageContainer } from '../containers/home-page/HomePageContainer';

type HomeData = {
  homePage: Queries.PrismicHomePage;
};

type Props = PageProps<HomeData> & {};

const IndexPage = (props: Props) => {
  const { data } = props;

  return (
    <Layout>
      <HomePageContainer data={data} />
    </Layout>
  );
};

export default IndexPage;

export const Head = (props: Props) => {
  const seo = useSeo(props.data.homePage);
  return <Seo {...seo} />;
};

export const query = graphql`
  query {
    homePage: prismicHomePage {
      data {
        seo_title
        seo_description
        ...HomePageHeroSectionFragment
        ...HomePageProcessSectionFragment
        ...HomePageGallerySectionFragment
        ...HomePageFaqSectionFragment
        ...HomePageCtaSectionFragment
      }
    }
  }
`;
