import React, { JSX } from 'react';
import { Seo } from '../components/seo/Seo';

function IndexPage(): JSX.Element {
  return <></>;
}

export default IndexPage;

export function Head() {
  const currentHref = typeof window !== `undefined` ? location.href : undefined;
  return (
    <Seo
      currentPage={{ lang: ``, path: `/` }}
      pageVariants={[{ lang: ``, path: `/` }]}
    >
      <link rel="alternate" href={currentHref} hrefLang="x-default" />
    </Seo>
  );
}
