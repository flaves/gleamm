import { useTranslation as useT } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useT();

  async function changeLanguage(lang: string) {
    await i18n.changeLanguage(lang);
  }

  return {
    t,
    lang: i18n.language,
    changeLanguage,
  };
};
