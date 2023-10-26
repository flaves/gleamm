import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { ContactPageContainer } from '../containers/contact-page/ContactPageContainer';
import { PageContext } from '../types/PageContext';

type ContactData = {
  contactPage: Queries.PrismicContactPage;
};

type Props = PageProps<ContactData> & PageContext & {};

const ContactPage = (props: Props) => {
  const { data, pageContext } = props;
  const { lang } = pageContext;

  const layout = {
    navigation: data.navigation,
    footer: data.footer,
  };

  return (
    <Layout lang={lang} layout={layout}>
      <ContactPageContainer data={data} />
    </Layout>
  );
};

export default ContactPage;

export const Head = (props: Props) => {
  const seo = useSeo(props.data.contactPage);
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
    contactPage: prismicContactPage(id: { eq: $id }) {
      data {
        seo_title
        seo_description
        ...ContactPageFormSectionFragment
        ...ContactPageInformationsSectionFragment
      }
    }
  }
`;
