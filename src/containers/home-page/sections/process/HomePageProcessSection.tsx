import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Container } from '../../../../components/container/Container';
import { _HomePageProcess } from '../../entities/_HomePage';
import { Heading } from '../../../../components/heading/Heading';
import { Star } from '../../../../components/star/Star';
import { ProcessStep } from './components/ProcessStep';

export type HomePageProcessSectionData = _HomePageProcess;

type Props = DefaultProps<HomePageProcessSectionData>;

export function HomePageProcessSection(props: Props) {
  const { data } = props;

  return (
    <factory.div id="processus" pt={[20, 40]} mb={[20, null, null, 0]}>
      <Container>
        <factory.div textAlign="center" mb={10}>
          <Heading variant="section">{data.heading}</Heading>
        </factory.div>
        <factory.div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {data.steps.map((step, key) => (
            <ProcessStep
              key={key}
              number={step.number}
              heading={step.heading}
              description={step.description}
              isFirstStep={key === 0}
            />
          ))}
        </factory.div>
        <factory.div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <factory.div
            width={0.5}
            height={118}
            bg="brand.primary.darkest"
            mb={-10}
          />
          <factory.div
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={241}
            height={150}
            position="relative"
          >
            <Heading
              variant="step"
              additionalStyle={{ color: `brand.primary.darkest` }}
            >
              {data.headingEnd}
            </Heading>
            <factory.div position="absolute" top={14} left={0}>
              <Star variant="solid" fill="darkest" />
            </factory.div>
            <factory.div position="absolute" bottom={0} right={16}>
              <Star variant="solid" fill="darkest" />
            </factory.div>
            <factory.div position="absolute" top={5} right={5}>
              <Star variant="solid" fill="darkest" />
            </factory.div>
            <factory.div position="absolute" top={0} left={14}>
              <Star variant="outline" fill="darkest" />
            </factory.div>
            <factory.div position="absolute" bottom={5} left={10}>
              <Star variant="outline" fill="darkest" />
            </factory.div>
            <factory.div position="absolute" bottom={10} right={0}>
              <Star variant="outline" fill="darkest" />
            </factory.div>
          </factory.div>
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePageProcessSectionFragment = graphql`
  fragment HomePageProcessSectionFragment on PrismicHomePageData {
    process_heading {
      richText
    }
    process_steps {
      process_step_number
      process_step_heading {
        text
      }
      process_step_description {
        text
      }
    }
    process_end_heading {
      text
    }
  }
`;
