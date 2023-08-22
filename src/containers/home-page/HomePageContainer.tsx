import React from 'react';
import { DefaultProps } from '../../types/DefaultProps';
import { factory } from '../../theme/factory';
import { mapHomePageQueryToHomePageProps } from './mapper/mapHomePageQueryToHomePageProps';
import {
  HomePageHeroSection,
  HomePageHeroSectionData,
} from './sections/hero/HomePageHeroSection';
import {
  HomePageProcessSection,
  HomePageProcessSectionData,
} from './sections/process/HomePageProcessSection';
import {
  HomePageGallerySection,
  HomePageGallerySectionData,
} from './sections/gallery/HomePageGallery';
import {
  HomePageFaqSection,
  HomePageFaqSectionData,
} from './sections/faq/HomePageFaq';
import {
  HomePageCtaSection,
  HomePageCtaSectionData,
} from './sections/cta/HomePageCta';
import {
  HomePageTeamSection,
  HomePageTeamSectionData,
} from './sections/team/HomePageTeamSection';
import {
  HomePagePricingSection,
  HomePagePricingSectionData,
} from './sections/pricing/HomePagePricingSection';

type HomePageContainerData = {
  homePage: Queries.PrismicHomePage;
};

type Props = DefaultProps<HomePageContainerData>;

export function HomePageContainer(props: Props) {
  const { data } = props;
  const homePageData = mapHomePageQueryToHomePageProps(data.homePage);

  const homePageHeroSectionData: HomePageHeroSectionData = {
    badge: homePageData.hero.badge,
    heading: homePageData.hero.heading,
    description: homePageData.hero.description,
    button: homePageData.hero.button,
    leftImage: homePageData.hero.leftImage,
    rightImage: homePageData.hero.rightImage,
    reviewBadge: homePageData.hero.reviewBadge,
    reviewHeading: homePageData.hero.reviewHeading,
    reviewNumber: homePageData.hero.reviewNumber,
    reviewDescription: homePageData.hero.reviewDescription,
    reviewAuthor: homePageData.hero.reviewAuthor,
  };

  const homePageProcessSectionData: HomePageProcessSectionData = {
    heading: homePageData.process.heading,
    steps: homePageData.process.steps,
    headingEnd: homePageData.process.headingEnd,
  };

  const homePageGallerySectionData: HomePageGallerySectionData = {
    leftText: homePageData.gallery.leftText,
    rightText: homePageData.gallery.rightText,
    images: homePageData.gallery.images,
  };

  const homePageTeamSectionData: HomePageTeamSectionData = {
    heading: homePageData.team.heading,
    team: homePageData.team.team,
  };

  const homePagePricingSectionData: HomePagePricingSectionData = {
    badge: homePageData.pricing.badge,
    heading: homePageData.pricing.heading,
    pricingPlans: homePageData.pricing.pricingPlans,
  };

  const homePageFaqSectionData: HomePageFaqSectionData = {
    heading: homePageData.faq.heading,
    questions: homePageData.faq.questions,
    banner: homePageData.faq.banner,
  };

  const homePageCtaSectionData: HomePageCtaSectionData = {
    badge: homePageData.cta.badge,
    heading: homePageData.cta.heading,
    button: homePageData.cta.button,
  };

  return (
    <factory.section pt={20}>
      <HomePageHeroSection data={homePageHeroSectionData} />
      <HomePageProcessSection data={homePageProcessSectionData} />
      <HomePageGallerySection data={homePageGallerySectionData} />
      <HomePageTeamSection data={homePageTeamSectionData} />
      <HomePagePricingSection data={homePagePricingSectionData} />
      <HomePageFaqSection data={homePageFaqSectionData} />
      <HomePageCtaSection data={homePageCtaSectionData} />
    </factory.section>
  );
}
