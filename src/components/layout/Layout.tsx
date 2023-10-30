import React, { ReactNode, useEffect } from 'react';
import cookies from 'js-cookie';
import { Navigation } from '../navigation/Navigation';
import { factory } from '../../theme/factory';
import { Footer } from '../footer/Footer';
import { useTranslation } from '../../hooks/use-translations';

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
  const { lang: language, changeLanguage } = useTranslation();

  useEffect(() => {
    cookies.set(`favorite_language`, language);
    (async function () {
      await changeLanguage(lang);
    })();
  }, [language]);

  return (
    <factory.section id="top">
      <Navigation data={layout.navigation} />
      <factory.div>{children}</factory.div>
      <Footer data={layout.footer} />
    </factory.section>
  );
}
