import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GatsbyBrowser } from 'gatsby';
import i18n from 'i18next';

export const WrapPageElement: GatsbyBrowser[`wrapPageElement`] = ({
  element,
}) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS="translations">
      {element}
    </I18nextProvider>
  );
};
