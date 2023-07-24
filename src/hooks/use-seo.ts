import { Maybe } from '../types/Maybe';

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
  const title = custom?.title || page?.data?.meta_title;
  const description = custom?.description || page?.data?.meta_description;

  return { title, description };
};
