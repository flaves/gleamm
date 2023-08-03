import React, { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../navigation/Navigation';
import { factory } from '../../theme/factory';
import { Footer } from '../footer/Footer';

type LayoutQuery = {
  navigation: Queries.PrismicNavigation;
  footer: Queries.PrismicFooter;
};

export type Props = {
  children: ReactNode;
};

export function Layout(props: Props) {
  const { children } = props;
  const layout = useStaticQuery<LayoutQuery>(layoutQuery);

  return (
    <factory.section id="top">
      <Navigation data={layout.navigation} />
      <factory.div>{children}</factory.div>
      <Footer data={layout.footer} />
    </factory.section>
  );
}

export const layoutQuery = graphql`
  query LayoutQuery {
    navigation: prismicNavigation {
      data {
        anchors {
          label
          path
        }
        button_label
        button_path
      }
    }
    footer: prismicFooter {
      data {
        contact_address {
          richText
        }
        contact_email {
          text
        }
        anchors_heading {
          text
        }
        anchors {
          label
          path
        }
        legal_heading {
          text
        }
        legal_links {
          label
          path
        }
        socials {
          social
          path
        }
      }
    }
  }
`;
