import React, { JSX, useEffect } from 'react';
import { navigate } from 'gatsby';
import cookies from 'js-cookie';
import { Seo } from '../components/seo/Seo';

function IndexPage(): JSX.Element {
  useEffect(() => {
    const lang = cookies.get(`favorite_language`);
    if (lang) {
      navigate(`/${lang}`);
    } else {
      navigate(`/fr-be`);
    }
  }, []);
  return <></>;
}

export default IndexPage;

export function Head() {
  const currentHref = typeof window !== `undefined` ? location.href : undefined;
  console.log(currentHref, `CURRENT HREF`);
  return (
    <Seo>
      <link rel="alternate" href={currentHref} hrefLang="x-default" />
    </Seo>
  );
}
