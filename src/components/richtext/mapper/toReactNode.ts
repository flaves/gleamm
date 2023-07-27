import { ReactNode } from 'react';
import { RichTextBlock } from 'prismic-reactjs';
import { RichText } from '../RichText';

export const toReactNode = (
  richText?: RichTextBlock[],
  shouldHaveElements?: boolean,
  additionalProps?: Record<string, any>,
  isBlogPost?: boolean,
): ReactNode => {
  if (richText && richText.length > 0) {
    return RichText({
      render: richText,
      shouldHaveElements,
      ...additionalProps,
      isBlogPost,
    });
  }
  return ``;
};
