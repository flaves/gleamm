import { useTranslation as useT } from 'react-i18next';

export const useTranslation = () => {
  const { t } = useT();
  return {
    t,
  };
};
