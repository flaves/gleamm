import { Maybe } from '../types/Maybe';
import {
  generatePageVariant,
  generatePageVariants,
} from '../utils/generate-page-variant';

interface UseSeoPageInput {
  link?: string;
  uid?: Maybe<string>;
  type?: Maybe<string>;
}

interface UseSeoDataInput {
  seo_title?: Maybe<string>;
  seo_description?: Maybe<string>;
}

interface UseSeoInput<D> extends UseSeoPageInput {
  alternate_languages: readonly UseSeoPageInput[];
  data?: D;
}

interface UseSeoCustomInput {
  title?: Maybe<string>;
  description?: Maybe<string>;
}

export const useSeo = <I extends UseSeoInput<D>, D extends UseSeoDataInput>(
  page: I[`data`] extends D ? I : UseSeoInput<any>,
  custom?: UseSeoCustomInput,
) => {
  const title = custom?.title || page?.data?.seo_title;
  const description = custom?.description || page?.data?.seo_description;
  const currentPage = generatePageVariant(page);
  const pageVariants = generatePageVariants(page.alternate_languages);

  return { title, description, currentPage, pageVariants };
};
