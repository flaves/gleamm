import React, { ReactNode, useEffect } from 'react';
import cookies from 'js-cookie';
import { Navigation } from '../navigation/Navigation';
import { factory } from '../../theme/factory';
import { Footer } from '../footer/Footer';

type LayoutFragment = {
  navigation: Queries.PrismicNavigation;
  footer: Queries.PrismicFooter;
};

export type Props = {
  children: ReactNode;
  lang: string;
  layout: LayoutFragment;
};

export function Layout(props: Props) {
  const { children, lang, layout } = props;

  useEffect(() => {
    cookies.set(`favorite_language`, lang);
  }, [lang]);

  return (
    <factory.section id="top">
      <Navigation data={layout.navigation} />
      <factory.div>{children}</factory.div>
      <Footer data={layout.footer} />
    </factory.section>
  );
}
