import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { _HomePageHero } from '../../entities/_HomePage';
import { factory } from '../../../../theme/factory';
import { Badge } from '../../../../components/badge/Badge';
import { Heading } from '../../../../components/heading/Heading';
import { Text } from '../../../../components/text/Text';
import { Button } from '../../../../components/button/Button';
import { Link } from '../../../../components/link/Link';
import { Image } from '../../../../components/image/Image';
import { Container } from '../../../../components/container/Container';
import { ReviewCard } from '../../../../components/review-card/ReviewCard';
import { Star } from '../../../../components/star/Star';
import { link } from '../../../../config/link';

export type HomePageHeroSectionData = _HomePageHero;

type Props = DefaultProps<HomePageHeroSectionData>;

export function HomePageHeroSection(props: Props) {
  const { data } = props;

  return (
    <factory.div>
      <Container>
        <factory.div position="relative">
          <factory.div
            display={[`none`, null, null, `block`]}
            position="absolute"
            left={100}
            top={0}
          >
            <Star variant="solid" fill="base" />
          </factory.div>
          <factory.div
            display={[`none`, null, null, `block`]}
            position="absolute"
            left={425}
            top="44px"
          >
            <Star variant="solid" fill="base" />
          </factory.div>
          <factory.div
            display={[`none`, null, null, `block`]}
            position="absolute"
            left={571}
            bottom={284}
          >
            <Star variant="solid" fill="base" />
          </factory.div>
          <factory.div
            display={[`none`, null, null, `block`]}
            position="absolute"
            left={405}
            bottom={170}
          >
            <Star variant="solid" fill="base" />
          </factory.div>
          <factory.div
            display="flex"
            flexDirection={[`column`, null, null, `row`]}
            justifyContent="space-between"
            alignItems={[`center`, null, null, null, `flex-start`]}
          >
            <factory.div
              display="flex"
              flexDirection="column"
              alignItems={[`center`, null, null, `flex-start`]}
              textAlign={[`center`, null, null, `left`]}
              mt={[0, null, null, 20]}
              ml={[0, null, null, 10]}
              mb={[4, null, null, 0]}
            >
              <factory.div mb={4} ml={2}>
                <Badge icon="sparkles">{data.badge}</Badge>
              </factory.div>
              <factory.div mb={10}>
                <Heading variant="hero">{data.heading}</Heading>
              </factory.div>
              <factory.div mb={[2, null, null, 4]}>
                <Link to={link.appointment} type="anchor" isExternal>
                  <Button>{data.button.label}</Button>
                </Link>
              </factory.div>
              <factory.div>
                <Text variant="helperHero">{data.description}</Text>
              </factory.div>
            </factory.div>
            <factory.div display="flex" alignItems="flex-start" gap={5}>
              <factory.div
                display={[`none`, null, null, `block`]}
                overflow="hidden"
                borderRadius={40}
              >
                <Image height={500} image={data.leftImage} />
              </factory.div>
              <factory.div overflow="hidden" borderRadius={40}>
                <Image
                  height={[400, null, null, 600]}
                  image={data.rightImage}
                />
              </factory.div>
            </factory.div>
          </factory.div>
          <factory.div
            display={[`none`, null, null, `block`]}
            position="absolute"
            bottom={-45}
            left={528}
          >
            <ReviewCard
              badge={data.reviewBadge}
              heading={data.reviewHeading}
              number={data.reviewNumber}
              description={data.reviewDescription}
              author={data.reviewAuthor}
            />
          </factory.div>
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePageHeroSectionFragment = graphql`
  fragment HomePageHeroSectionFragment on PrismicHomePageData {
    hero_result_badge {
      text
    }
    hero_heading {
      richText
    }
    hero_description {
      richText
    }
    hero_button_label
    hero_button_path
    hero_left_image {
      gatsbyImageData(placeholder: BLURRED, width: 350, height: 500)
      alt
    }
    hero_right_image {
      gatsbyImageData(placeholder: BLURRED, width: 350, height: 600)
      alt
    }
    hero_review_badge {
      text
    }
    hero_review_heading {
      text
    }
    hero_review_number
    hero_review_description {
      text
    }
    hero_review_author {
      text
    }
  }
`;
