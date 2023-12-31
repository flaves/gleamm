import { ReactNode } from 'react';
import { initReactI18next } from 'react-i18next';
import { use } from 'i18next';

import fr from '../translations/fr.json';
import nl from '../translations/nl.json';
import en from '../translations/en.json';

export type IsoCountryCodes = `BE` | `FR` | `EN`;
export type IsoLanguageCodes = `fr-be` | `nl-be` | `en-gb`;
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
  'fr-be': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgique`,
    path: `fr-be`,
    lang: `fr`,
  },
  'nl-be': {
    iso: `BE`,
    flag: `🇧🇪`,
    label: `Belgïe`,
    path: `nl-be`,
    lang: `nl`,
  },
  'en-gb': {
    iso: `EN`,
    flag: `🇫🇷`,
    label: `England`,
    path: `en-gb`,
    lang: `en`,
  },
};

export const initI18n = {
  async init() {
    const i18nService = use(initReactI18next);

    await i18nService.init({
      lng: `fr`,
      fallbackLng: `fr`,
      supportedLngs: [`fr`, `nl`, `en`],
      resources: {
        fr: {
          translation: fr,
        },
        nl: {
          translation: nl,
        },
        en: {
          translation: en,
        },
      },
    });
  },
};
