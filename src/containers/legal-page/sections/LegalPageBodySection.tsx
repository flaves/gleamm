import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../types/DefaultProps';
import { _LegalPage } from '../entities/_LegalPage';
import { Container } from '../../../components/container/Container';
import { factory } from '../../../theme/factory';
import { Heading } from '../../../components/heading/Heading';

export type LegalPageBodySectionData = _LegalPage;

type Props = DefaultProps<LegalPageBodySectionData>;

export function LegalPageBodySection(props: Props) {
  const { data } = props;

  return (
    <factory.div>
      <Container>
        <factory.div mb={10}>
          <Heading variant="step">{data.heading}</Heading>
        </factory.div>
        <factory.div
          sx={{
            'h1, h2, h3, h4, h5, h6': {
              my: 5,
            },
          }}
        >
          {data.body}
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const legalPageBodySectionFragment = graphql`
  fragment LegalPageBodySectionFragment on PrismicLegalPageData {
    heading {
      text
    }
    body {
      richText
    }
  }
`;
