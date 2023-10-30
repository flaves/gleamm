import React, { ReactNode, useEffect } from 'react';
import { Navigation } from '../navigation/Navigation';
import { factory } from '../../theme/factory';
import { Footer } from '../footer/Footer';
import { useTranslation } from '../../hooks/use-translations';
import { splitLanguage } from '../../utils/split-language';

type LayoutFragment = {
  navigation: Queries.PrismicNavigation;
  footer: Queries.PrismicFooter;
};

export type Props = {
  children: ReactNode;
  layout: LayoutFragment;
  lang: string;
};

export function Layout(props: Props) {
  const { children, lang, layout } = props;
  const { changeLanguage } = useTranslation();

  useEffect(() => {
    (async function () {
      await changeLanguage(splitLanguage(lang));
    })();
  }, [lang]);

  return (
    <factory.section id="top">
      <Navigation data={layout.navigation} />
      <factory.div>{children}</factory.div>
      <Footer data={layout.footer} />
    </factory.section>
  );
}
