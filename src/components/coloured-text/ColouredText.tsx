import React, { forwardRef, ReactElement, ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import parse from 'html-react-parser';
import { factory } from '../../theme/factory';

export type Props = {
  children: ReactNode;
};

export const ColouredText = forwardRef<HTMLHeadingElement, Props>(
  (props, ref) => {
    const { children } = props;

    const replaceWords = (text: string) => {
      const regex = /\*(\p{L}[\p{L}\p{N}\p{M}\p{Pc}\p{Mn}\p{Mc}]+)\*/gu;
      return text.replaceAll(regex, `<span class="gradient">$1</span>`);
    };

    return (
      <factory.div
        sx={{
          '& span.gradient': {
            background: `linear-gradient(90deg, #A770EF 0%, #CF8BF3 50%, #FDB99B 100%)`,
            backgroundClip: `text`,
          },
        }}
        ref={ref}
      >
        {parse(
          replaceWords(renderToString(children as ReactElement<any, string>)),
        )}
      </factory.div>
    );
  },
);
