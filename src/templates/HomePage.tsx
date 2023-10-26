import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { HomePageContainer } from '../containers/home-page/HomePageContainer';
import { PageContext } from '../types/PageContext';

type HomeData = {
  homePage: Queries.PrismicHomePage;
};

type Props = PageProps<HomeData> & PageContext & {};

const HomePage = (props: Props) => {
  const { data, pageContext } = props;
  const { lang } = pageContext;

  const layout = {
    navigation: data.navigation,
    footer: data.footer,
  };

  return (
    <Layout lang={lang} layout={layout}>
      <HomePageContainer data={data} lang={lang} />
    </Layout>
  );
};

export default HomePage;

export const Head = (props: Props) => {
  const seo = useSeo(props.data.homePage);
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
    homePage: prismicHomePage(id: { eq: $id }) {
      data {
        seo_title
        seo_description
        ...HomePageHeroSectionFragment
        ...HomePageProcessSectionFragment
        ...HomePageGallerySectionFragment
        ...HomePageTeamSectionFragment
        ...HomePagePricingSectionFragment
        ...HomePageFaqSectionFragment
        ...HomePageCtaSectionFragment
      }
    }
  }
`;
