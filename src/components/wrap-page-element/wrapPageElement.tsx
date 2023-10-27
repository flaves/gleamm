import React from 'react';
import { GatsbyBrowser } from 'gatsby';

export const WrapPageElement: GatsbyBrowser[`wrapPageElement`] = ({
  element,
}) => {
  return <>{element}</>;
};
