import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Heading } from '../../../../components/heading/Heading';
import { _HomePageFaq } from '../../entities/_HomePage';
import { Grid } from '../../../../components/grid/Grid';
import { Container } from '../../../../components/container/Container';
import { Question } from './components/Question';
import { Banner } from './components/Banner';

export type HomePageFaqSectionData = _HomePageFaq;

type Props = DefaultProps<HomePageFaqSectionData>;

export function HomePageFaqSection(props: Props) {
  const { data } = props;

  return (
    <factory.div bg="gray.25" mb={40} py={20} px={120}>
      <Container>
        <factory.div mb={20} textAlign="center">
          <Heading variant="section">{data.heading}</Heading>
        </factory.div>
        <Grid columns={2} gap={20} mb={20}>
          {data.questions.map((question, key) => (
            <Question
              key={key}
              heading={question.heading}
              description={question.description}
              icon={question.icon}
            />
          ))}
        </Grid>
        <Banner
          image={data.banner.image}
          heading={data.banner.heading}
          description={data.banner.description}
          button={data.banner.button}
        />
      </Container>
    </factory.div>
  );
}

export const homePageFaqSectionFragment = graphql`
  fragment HomePageFaqSectionFragment on PrismicHomePageData {
    faq_heading {
      text
    }
    questions {
      question_heading {
        text
      }
      question_icon
      question_text {
        text
      }
    }
    faq_banner_heading {
      text
    }
    faq_banner_description {
      text
    }
    faq_banner_image {
      gatsbyImageData(placeholder: BLURRED, width: 80, height: 80)
      alt
    }
    faq_banner_button_label
    faq_banner_button_path
  }
`;
