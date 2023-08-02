import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useBreakpointValue } from '@chakra-ui/react';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Heading } from '../../../../components/heading/Heading';
import { _HomePageFaq } from '../../entities/_HomePage';
import { Grid } from '../../../../components/grid/Grid';
import { Container } from '../../../../components/container/Container';
import { Button } from '../../../../components/button/Button';
import { Question } from './components/Question';
import { Banner } from './components/Banner';

export type HomePageFaqSectionData = _HomePageFaq;

type Props = DefaultProps<HomePageFaqSectionData>;

const MotionDiv = motion(factory.div);

export function HomePageFaqSection(props: Props) {
  const { data } = props;
  const controls = useAnimation();
  const isLargerThanSm = useBreakpointValue({
    base: false,
    sm: true,
  });

  const containerVariants = useMemo(
    () => ({
      visible: {
        height: `100%`,
        marginBottom: 0,
        transition: {
          duration: 0.2,
        },
      },
      hidden: {
        marginBottom: 20,
        transition: {
          duration: 0.2,
        },
      },
    }),
    [isLargerThanSm],
  );

  const backgroundVariants = useMemo(
    () => ({
      visible: {
        opacity: 0,
        visibility: `hidden`,
        transition: {
          duration: 0.1,
          visibility: {
            delay: 0.1,
            duration: 0,
          },
        },
      },
      hidden: {
        opacity: isLargerThanSm ? 0 : 1,
        visibility: isLargerThanSm ? `hidden` : `visible`,
        transition: {
          duration: 0.1,
          visibility: {
            delay: 0.1,
            duration: 0,
          },
        },
      },
    }),
    [isLargerThanSm],
  );

  function onReadMore() {
    controls.start(`visible`);
  }

  return (
    <factory.div
      id="questions"
      bg="gray.25"
      mb={[30, 40]}
      py={20}
      px={[0, null, null, null, 100]}
    >
      <Container>
        <MotionDiv
          overflow="hidden"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          position="relative"
          height={isLargerThanSm ? `100%` : 900}
        >
          <factory.div mb={20} textAlign="center">
            <Heading variant="section">{data.heading}</Heading>
          </factory.div>
          <Grid columns={[1, null, null, null, 2]} gap={20} mb={20}>
            {data.questions.map((question, key) => (
              <Question
                key={key}
                heading={question.heading}
                description={question.description}
                icon={question.icon}
              />
            ))}
          </Grid>
          <MotionDiv
            background="linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, #FAFAFA 100%)"
            width="100%"
            height={300}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            display={[`flex`, `none`]}
            justifyContent="center"
            alignItems="flex-end"
            pb={10}
            variants={backgroundVariants}
            initial="hidden"
            animate={controls}
          >
            <Button icon="plus" onClick={onReadMore}>
              Voir plus
            </Button>
          </MotionDiv>
        </MotionDiv>
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
