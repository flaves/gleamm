import React from 'react';
import { PageProps } from 'gatsby';
import { Heading } from '../components/heading/Heading';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import PrismicHomePage = Queries.PrismicHomePage;

interface HomeData {
  homePage: PrismicHomePage;
}

interface Props extends PageProps<HomeData> {}

const IndexPage = (props: Props) => {
  const {} = props;

  return (
    <div>
      <Heading as="h1" variant="hero">
        HOMEPAGE
      </Heading>
    </div>
  );
};

export default IndexPage;

export const Head = (props: Props) => {
  const seo = useSeo(props.data.homePage);
  return <Seo {...seo} />;
};
