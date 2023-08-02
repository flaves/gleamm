import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useSeo } from '../hooks/use-seo';
import { Seo } from '../components/seo/Seo';
import { Layout } from '../components/layout/Layout';
import { ContactPageContainer } from '../containers/contact-page/ContactPageContainer';

type ContactData = {
  contactPage: Queries.PrismicContactPage;
};

type Props = PageProps<ContactData> & {};

const ContactPage = (props: Props) => {
  const { data } = props;

  return (
    <Layout>
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
  query {
    contactPage: prismicContactPage {
      data {
        seo_title
        seo_description
        ...ContactPageFormSectionFragment
        ...ContactPageInformationsSectionFragment
      }
    }
  }
`;
