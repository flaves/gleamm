import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { _HomePageCta } from '../../entities/_HomePage';
import { Container } from '../../../../components/container/Container';
import { Badge } from '../../../../components/badge/Badge';
import { Link } from '../../../../components/link/Link';
import { Button } from '../../../../components/button/Button';
import { link } from '../../../../config/link';

export type HomePageCtaSectionData = _HomePageCta;

type Props = DefaultProps<HomePageCtaSectionData>;

export function HomePageCtaSection(props: Props) {
  const { data } = props;

  return (
    <factory.div mb={[10, 20]}>
      <Container>
        <factory.div textAlign="center">
          <factory.div display="flex" justifyContent="center" mb={4}>
            <Badge icon="comments">{data.badge}</Badge>
          </factory.div>
          <factory.div mb={10}>{data.heading}</factory.div>
          <factory.div>
            <Link to={link.appointment} type="anchor" isExternal>
              <Button>{data.button.label}</Button>
            </Link>
          </factory.div>
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePageCtaSectionFragment = graphql`
  fragment HomePageCtaSectionFragment on PrismicHomePageData {
    cta_badge {
      text
    }
    cta_heading {
      richText
    }
    cta_button_label
    cta_button_path
  }
`;
