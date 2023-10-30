import React, { JSX, useEffect } from 'react';
import { navigate } from 'gatsby';
import cookies from 'js-cookie';
import { Seo } from '../components/seo/Seo';
import { useTranslation } from '../hooks/use-translations';

function IndexPage(): JSX.Element {
  const { changeLanguage } = useTranslation();

  useEffect(() => {
    const lang = cookies.get(`favorite_language`);
    if (lang) {
      navigate(`/${lang}`);
      changeLanguage(lang);
    } else {
      navigate(`/fr`);
      changeLanguage(`fr`);
    }
  }, []);
  return <></>;
}

export default IndexPage;

export function Head() {
  const currentHref = typeof window !== `undefined` ? location.href : undefined;
  return (
    <Seo>
      <link rel="alternate" href={currentHref} hrefLang="x-default" />
    </Seo>
  );
}
