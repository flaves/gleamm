import { _HomePage } from '../entities/_HomePage';
import { toReactNode } from '../../../components/richtext/mapper/toReactNode';
import { toImage } from '../../../components/image/mapper/toImage';
import { Icons } from '../../../config/icons';

export const mapHomePageQueryToHomePageProps = (
  homePage: Queries.PrismicHomePage,
  lang?: string,
): _HomePage => {
  const isStepProcessEmtpy =
    homePage?.data?.process_steps.length === 0 ||
    homePage?.data?.process_steps?.some(
      (step) =>
        step.process_step_number === null ||
        step.process_step_heading?.text === null ||
        step.process_step_description?.text === null,
    );

  const isGalleryEmpty =
    homePage?.data?.images?.length === 0 ||
    homePage?.data?.images?.some(
      (image) =>
        image?.image_before?.gatsbyImageData === null ||
        image?.image_after?.gatsbyImageData === null,
    );

  const isQuestionsEmpty =
    homePage?.data?.questions?.length === 0 ||
    homePage?.data?.questions?.some(
      (question) =>
        question.question_heading?.text === null ||
        question?.question_text?.text === null ||
        question?.question_icon === null,
    );

  const isTeamMemberEmpty =
    homePage?.data?.team_members?.length === 0 ||
    homePage?.data?.team_members?.some(
      (member) =>
        member?.team_member_job?.text === null ||
        member?.team_member_name?.text === null ||
        member?.team_member_image?.gatsbyImageData === null,
    );

  const isPricingPlanEmpty =
    homePage?.data?.pricing_plans?.length === 0 ||
    homePage?.data?.pricing_plans?.some(
      (plan) =>
        plan?.pricing_plan?.text === null ||
        plan?.pricing_plan_description?.text === null ||
        plan?.pricing_plan_price?.text === null ||
        plan?.pricing_plan_button_label?.text === null ||
        plan?.pricing_plan_button_path?.text === null ||
        plan?.pricing_plan_details_heading?.text === null ||
        plan?.pricing_plan_details_text?.richText?.length === 0,
    );

  if (
    !homePage?.data?.hero_result_badge?.text ||
    homePage?.data?.hero_heading?.richText.length === 0 ||
    homePage?.data?.hero_description?.richText.length === 0 ||
    !homePage?.data?.hero_button_label ||
    !homePage?.data?.hero_button_path ||
    !homePage?.data?.hero_review_badge?.text ||
    !homePage?.data?.hero_review_heading?.text ||
    !homePage?.data?.hero_review_number ||
    !homePage?.data?.hero_review_description?.text ||
    !homePage?.data?.hero_review_author?.text ||
    homePage?.data?.hero_left_image?.gatsbyImageData === null ||
    homePage?.data?.hero_right_image?.gatsbyImageData === null ||
    homePage?.data?.process_heading?.richText?.length === 0 ||
    !homePage?.data?.process_end_heading?.text ||
    isStepProcessEmtpy ||
    !homePage?.data?.left_text?.text ||
    !homePage?.data?.right_text?.text ||
    homePage?.data?.images?.length === 0 ||
    isGalleryEmpty ||
    homePage?.data?.team_heading?.richText?.length === 0 ||
    isTeamMemberEmpty ||
    !homePage?.data?.pricing_badge?.text ||
    homePage?.data?.pricing_heading?.richText?.length === 0 ||
    isPricingPlanEmpty ||
    !homePage?.data?.faq_heading?.text ||
    isQuestionsEmpty ||
    !homePage?.data?.faq_banner_heading?.text ||
    homePage?.data?.faq_banner_image?.gatsbyImageData === null ||
    !homePage?.data?.faq_banner_description?.text ||
    !homePage?.data?.faq_banner_button_label ||
    !homePage?.data?.faq_banner_button_path ||
    !homePage?.data?.cta_badge?.text ||
    homePage?.data?.cta_heading?.richText?.length === 0 ||
    !homePage?.data?.cta_button_label ||
    !homePage?.data?.cta_button_path
  ) {
    throw new Error(`Missing home page data`);
  }

  return {
    hero: {
      badge: homePage?.data?.hero_result_badge?.text,
      heading: toReactNode(homePage?.data?.hero_heading?.richText, true),
      description: toReactNode(
        homePage?.data?.hero_description?.richText,
        true,
      ),
      button: {
        label: homePage?.data?.hero_button_label,
        path: `/${lang}/${homePage?.data?.hero_button_path}`,
      },
      leftImage: toImage(homePage?.data?.hero_left_image?.gatsbyImageData),
      rightImage: toImage(homePage?.data?.hero_right_image?.gatsbyImageData),
      reviewBadge: homePage?.data?.hero_review_badge?.text,
      reviewHeading: homePage?.data?.hero_review_heading?.text,
      reviewNumber: homePage?.data?.hero_review_number,
      reviewDescription: homePage?.data?.hero_review_description?.text,
      reviewAuthor: homePage?.data?.hero_review_author?.text,
    },
    process: {
      heading: toReactNode(homePage?.data?.process_heading?.richText),
      steps: homePage?.data?.process_steps?.map((step) => ({
        number: step?.process_step_number,
        heading: step.process_step_heading?.text,
        description: step.process_step_description?.text,
      })),
      headingEnd: homePage?.data?.process_end_heading?.text,
    },
    gallery: {
      leftText: homePage?.data?.left_text?.text,
      rightText: homePage?.data?.right_text?.text,
      images: homePage?.data?.images?.map((image) => ({
        imageBefore: toImage(image.image_before?.gatsbyImageData),
        imageAfter: toImage(image.image_after?.gatsbyImageData),
      })),
    },
    team: {
      heading: toReactNode(homePage?.data?.team_heading?.richText, true),
      team: homePage?.data?.team_members?.map((member) => ({
        image: toImage(member?.team_member_image?.gatsbyImageData),
        name: member?.team_member_name?.text,
        job: member?.team_member_job?.text,
      })),
    },
    pricing: {
      badge: homePage?.data?.pricing_badge?.text,
      heading: toReactNode(homePage?.data?.pricing_heading?.richText, true),
      pricingPlans: homePage?.data?.pricing_plans?.map((plan) => ({
        plan: plan?.pricing_plan?.text,
        description: plan?.pricing_plan_description?.text,
        price: plan?.pricing_plan_price?.text,
        button: {
          label: plan?.pricing_plan_button_label?.text,
          path: `/${lang}/${plan?.pricing_plan_button_path?.text}`,
        },
        detailsHeading: plan?.pricing_plan_details_heading?.text,
        detailsText: toReactNode(
          plan?.pricing_plan_details_text?.richText,
          true,
        ),
      })),
    },
    faq: {
      heading: homePage?.data?.faq_heading?.text,
      questions: homePage?.data?.questions?.map((question) => ({
        heading: question?.question_heading?.text,
        description: question?.question_text?.text,
        icon: question?.question_icon as Icons,
      })),
      banner: {
        image: toImage(homePage?.data?.faq_banner_image?.gatsbyImageData),
        heading: homePage?.data?.faq_banner_heading?.text,
        description: homePage?.data?.faq_banner_description?.text,
        button: {
          label: homePage?.data?.faq_banner_button_label,
          path: `/${lang}/${homePage?.data?.faq_banner_button_path}`,
        },
      },
    },
    cta: {
      badge: homePage?.data?.cta_badge?.text,
      heading: toReactNode(homePage?.data?.cta_heading?.richText, true),
      button: {
        label: homePage?.data?.cta_button_label,
        path: `/${lang}/${homePage?.data?.cta_button_path}`,
      },
    },
  };
};
