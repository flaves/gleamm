import { ReactNode } from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import fr from '../translations/fr.json';

export type IsoCountryCodes = `BE` | `FR` | `EN`;
export type IsoLanguageCodes = `fr-BE` | `nl-BE` | `en-GB`;
export type Languages = `fr` | `nl` | `en`;

export interface Country {
  iso: IsoCountryCodes;
  flag: ReactNode;
  label: ReactNode;
  path: string;
  lang: Languages;
  isDisabled?: boolean;
}

export const Countries: Record<IsoLanguageCodes, Country> = {
  'fr-BE': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgique`,
    path: `fr-be`,
    lang: `fr`,
  },
  'nl-BE': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgïe`,
    path: `nl-be`,
    lang: `nl`,
    isDisabled: true,
  },
  'en-GB': {
    iso: `EN`,
    flag: `🇫🇷`,
    label: `England`,
    path: `en-gb`,
    lang: `en`,
  },
};

export const initI18n = {
  async init() {
    const i18nService = i18n.use(initReactI18next);

    await i18nService.init({
      lng: `fr`,
      fallbackLng: `fr`,
      supportedLngs: [`fr`],
      resources: {
        fr: {
          translation: fr,
        },
      },
    });
  },
};
