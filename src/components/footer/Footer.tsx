import React from 'react';
import { graphql } from 'gatsby';
import { factory } from '../../theme/factory';
import { DefaultProps } from '../../types/DefaultProps';
import { Text } from '../text/Text';
import { LogoThumbnail } from '../logo-thumbnail/LogoThumbnail';
import { Link } from '../link/Link';
import { Heading } from '../heading/Heading';
import { Socials } from '../socials/Socials';
import { Container } from '../container/Container';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';
import { mapFooterQueryToFooterProps } from './mapper/mapFooterQueryToFooterProps';

type FooterData = Queries.PrismicFooter & {};

type Props = DefaultProps<FooterData>;

export function Footer(props: Props) {
  const { data } = props;
  const footer = mapFooterQueryToFooterProps(data);

  return (
    <factory.div
      borderTopWidth={1}
      borderTopColor="gray.50"
      pt={[`60px`, null, null, 5]}
      pb={10}
      px={[0, null, null, 100]}
    >
      <Container>
        <factory.div
          display="flex"
          flexDirection={[`column`, null, null, `row`]}
          justifyContent="space-between"
        >
          <factory.div mb={[10, null, null, 0]}>
            <factory.div mb={5}>
              <LogoThumbnail />
            </factory.div>
            <factory.div mb={5} sx={{ 'p:hover': { color: `text.secondary` } }}>
              {footer.address}
            </factory.div>
            <factory.div
              sx={{
                p: { color: `#07A1C5` },
                'p:hover': { color: `#07A1C5` },
                a: {
                  textDecoration: `underline !important`,
                  textDecorationColor: `#07A1C5 !important`,
                },
              }}
            >
              <Link to={footer.email.path || ``}>
                <Text variant="navLink">{footer.email.label}</Text>
              </Link>
            </factory.div>
          </factory.div>
          <factory.div
            display="flex"
            flexDirection="column"
            mb={[10, null, null, 0]}
          >
            <factory.div mb={6}>
              <Heading variant="footer">{footer.anchorsHeading}</Heading>
            </factory.div>
            {footer.anchors.map((anchor, key) => (
              <factory.div key={key} mb={3}>
                <Link to={anchor.path || ``}>
                  <Text variant="navLink">{anchor.label}</Text>
                </Link>
              </factory.div>
            ))}
          </factory.div>
          <factory.div
            display="flex"
            flexDirection="column"
            mb={[5, null, null, 0]}
          >
            <factory.div mb={6}>
              <Heading variant="footer">{footer.legalHeading}</Heading>
            </factory.div>
            {footer.legalLinks.map((link, key) => (
              <factory.div key={key} mb={3}>
                <Link to={link.path || ``}>
                  <Text variant="navLink">{link.label}</Text>
                </Link>
              </factory.div>
            ))}
          </factory.div>
          <factory.div>
            <Socials socials={footer.socials} />
            <factory.div mt={2}>
              <LanguageSwitcher />
            </factory.div>
          </factory.div>
        </factory.div>
        <factory.div
          textAlign="center"
          my={10}
          sx={{ 'p:hover': { color: `text.secondary` } }}
        >
          <Text variant="navLink">© {new Date().getFullYear()} Gleamm</Text>
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const footerFragment = graphql`
  fragment FooterFragment on PrismicFooter {
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
`;
