import { Maybe } from '../types/Maybe';
import { PageVariant } from '../types/PageVariant';
import { createLinkPath } from './create-link-path';
import { splitLanguage } from './split-language';

interface GeneratePageVariantInput {
  link?: string;
  lang?: Maybe<string>;
  uid?: Maybe<string>;
  type?: Maybe<string>;
}

export const generatePageVariant = (
  input: GeneratePageVariantInput,
): PageVariant => {
  const lang = splitLanguage(input.lang || `fr-be`);
  if (input.link) {
    return {
      lang,
      path: createLinkPath([input.link]),
    };
  }

  const uid = input.type === `home_page` ? `` : input.uid;

  const link = createLinkPath([lang, uid || ``]);

  return {
    lang,
    path: link || ``,
  };
};

export const generatePageVariants = (
  input: readonly GeneratePageVariantInput[],
): PageVariant[] => {
  if (!input) {
    return [];
  }

  return input.map<PageVariant>((item) => generatePageVariant(item));
};
