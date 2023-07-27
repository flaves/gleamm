import React from 'react';
import { factory } from '../../theme/factory';
import { DefaultProps } from '../../types/DefaultProps';
import { Text } from '../text/Text';
import { LogoThumbnail } from '../logo-thumbnail/LogoThumbnail';
import { Link } from '../link/Link';
import { Heading } from '../heading/Heading';
import { Socials } from '../socials/Socials';
import { mapFooterQueryToFooterProps } from './mapper/mapFooterQueryToFooterProps';

type FooterData = Queries.PrismicFooter & {};

type Props = DefaultProps<FooterData>;

export function Footer(props: Props) {
  const { data } = props;
  const footer = mapFooterQueryToFooterProps(data);

  return (
    <factory.div px={120}>
      <factory.div display="flex" justifyContent="space-between">
        <factory.div gridColumn="span 1" mb={5}>
          <factory.div mb={5}>
            <LogoThumbnail />
          </factory.div>
          <factory.div mb={5} sx={{ 'p:hover': { color: `text.secondary` } }}>
            {footer.address}
          </factory.div>
          <factory.div
            sx={{
              p: { color: `#07A1C5` },
            }}
          >
            <Link to={footer.email.path || ``}>
              <Text>{footer.email.label}</Text>
            </Link>
          </factory.div>
        </factory.div>
        <factory.div display="flex" flexDirection="column" gridColumn="span 1">
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
          gridColumn={[`span 1`, null, `span 1`, `span 1`]}
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
        <factory.div gridColumn={[`span 1`, null, `span 1`, `span 1`]}>
          <Socials socials={footer.socials} />
        </factory.div>
      </factory.div>
      <factory.div textAlign="center" my={10}>
        <Text>© {new Date().getFullYear()} Gleamm</Text>
      </factory.div>
    </factory.div>
  );
}
