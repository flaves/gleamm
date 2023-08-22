import { ReactNode } from 'react';
import { _Link } from '../../../components/link/entities/_Link';
import { _Image } from '../../../components/image/entities/_Image';
import { Icons } from '../../../config/icons';

export type _HomePage = {
  hero: _HomePageHero;
  process: _HomePageProcess;
  gallery: _HomePageGallery;
  team: _HomePageTeam;
  pricing: _HomePagePricing;
  faq: _HomePageFaq;
  cta: _HomePageCta;
};

export type _HomePageHero = {
  badge: ReactNode;
  heading: ReactNode;
  description: ReactNode;
  button: _Link;
  rightImage: _Image;
  leftImage: _Image;
  reviewBadge: ReactNode;
  reviewHeading: ReactNode;
  reviewNumber: number;
  reviewDescription: ReactNode;
  reviewAuthor: ReactNode;
};

export type _HomePageProcess = {
  heading: ReactNode;
  steps: _HomePageProcessStep[];
  headingEnd: ReactNode;
};

export type _HomePageProcessStep = {
  number: string | null;
  heading: ReactNode;
  description: ReactNode;
};

export type _HomePageGallery = {
  leftText: ReactNode;
  rightText: ReactNode;
  images: {
    imageBefore: _Image;
    imageAfter: _Image;
  }[];
};

export type _HomePageTeam = {
  heading: ReactNode;
  team: _TeamMember[];
};

export type _HomePagePricing = {
  badge: ReactNode;
  heading: ReactNode;
  pricingPlans: _PricingPlan[];
};

export type _HomePageFaq = {
  heading: ReactNode;
  questions: _Question[];
  banner: _Banner;
};

export type _HomePageCta = {
  badge: ReactNode;
  heading: ReactNode;
  button: _Link;
};

export type _Question = {
  heading: ReactNode;
  description: ReactNode;
  icon: Icons;
};

export type _Banner = {
  image: _Image;
  heading: ReactNode;
  description: ReactNode;
  button: _Link;
};

export type _TeamMember = {
  name: ReactNode;
  job: ReactNode;
  image: _Image;
};

export type _PricingPlan = {
  plan: ReactNode;
  description: ReactNode;
  price: ReactNode;
  button: _Link;
  detailsHeading: ReactNode;
  detailsText: ReactNode;
};
