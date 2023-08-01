import React, { Children, ReactNode } from 'react';
import { Link } from 'gatsby';
import { Link as ChakraLink } from '@chakra-ui/react';
import {
  Elements,
  RichText as PrismicRichText,
  RichTextProps,
} from 'prismic-reactjs';
import { Company } from '../../config/company';
import { Heading } from '../heading/Heading';
import { Text } from '../text/Text';
import { factory } from '../../theme/factory';

const regex = new RegExp(`{{\\s?(\\w+)\\s?}}`, `gm`);

const tags = {
  '{{ address }}': Company.address,
  '{{ bce }}': Company.number,
  '{{ company }}': Company.name,
  '{{ email }}': Company.email,
  '{{ email_help }}': Company.emailHelp,
  '{{ email_privacy }}': Company.emailPrivacy,
  '{{ phone }}': Company.phone,
  '{{ vat }}': Company.vat,
};

const replaceTag = (text: ReactNode): ReactNode => {
  if (typeof text === `string`) {
    return text.replace(regex, (match) => {
      const tagMatch = match as keyof typeof tags;
      if (tags[tagMatch]) {
        return tags[tagMatch];
      }
      return match;
    });
  }

  return text;
};

const replaceChildrenWithTag = (children: ReactNode[]): ReactNode =>
  Children.map<ReactNode, ReactNode>(Children.toArray(children), (child) =>
    replaceTag(child),
  );

export type HTMLSerializer<T> = (
  type: Elements,
  element: any,
  content: string,
  children: T[],
  key: string,
  props: any,
) => T | null;

export const htmlSerializer: HTMLSerializer<ReactNode> = (
  type,
  element,
  _content,
  children,
  key,
  props: Props,
) => {
  const { shouldHaveElements, ...rest } = props;
  const childrenWithTag = replaceChildrenWithTag(children);

  switch (type) {
    case Elements.list:
      return (
        <factory.ul as="ul" listStyleType="circle" pl={10} {...rest}>
          {children}
        </factory.ul>
      );
    case Elements.listItem:
      return (
        <factory.li mb={4} {...rest}>
          {childrenWithTag}
        </factory.li>
      );
    case Elements.oList:
      return (
        <factory.ol pl={10} {...rest}>
          {children}
        </factory.ol>
      );
    case Elements.oListItem:
      return (
        <factory.li mb={4} {...rest}>
          {childrenWithTag}
        </factory.li>
      );
    case Elements.heading1:
      return (
        <Heading key={key} as="h1" variant="hero">
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading2:
      return (
        <Heading key={key} as="h2" variant="section">
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading3:
      return (
        <Heading key={key} as="h3" variant="step">
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading4:
      return (
        <Heading key={key} as="h4" variant="faq">
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading5:
      return (
        <Heading as="h5" key={key} variant="review">
          {childrenWithTag}
        </Heading>
      );
    case Elements.heading6:
      return (
        <Heading key={key} as="h6" variant="panel">
          {childrenWithTag}
        </Heading>
      );
    case Elements.paragraph:
      if (shouldHaveElements) {
        return (
          <Text key={key} {...rest}>
            {childrenWithTag}
          </Text>
        );
      }
      return childrenWithTag;

    case Elements.hyperlink: {
      if (element.data.link_type === `Web`) {
        return (
          <ChakraLink
            href={element.data.url}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration="underline"
          >
            {children}
          </ChakraLink>
        );
      }

      return (
        <Link
          key={key}
          to={element.data.url}
          style={{
            textDecoration: `underline`,
          }}
        >
          {children}
        </Link>
      );
    }
    default:
      return null;
  }
};

type GenericProps = {
  [index: string]: any;
};

export type Props = GenericProps &
  RichTextProps & {
    isBlogPost?: boolean;
    shouldHaveElements?: boolean;
  };

export function RichText(props: Props): JSX.Element {
  const { render, shouldHaveElements, isBlogPost, ...rest } = props;

  return (
    <PrismicRichText
      htmlSerializer={(type, element, content, children, key) =>
        htmlSerializer(type, element, content, children, key, {
          isBlogPost,
          shouldHaveElements,
          ...rest,
        })
      }
      render={render}
    />
  );
}
