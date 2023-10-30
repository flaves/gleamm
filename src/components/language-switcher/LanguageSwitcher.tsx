import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { Select } from '../select/Select';
import { useTranslation } from '../../hooks/use-translations';
import { Countries } from '../../config/i18n';

export function LanguageSwitcher() {
  const { lang, changeLanguage } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(`fr`);

  const languages = Object.values(Countries).map((country) => ({
    label: country.lang.toUpperCase(),
    value: country.lang,
  }));

  async function handleChange(value: string) {
    await changeLanguage(value);
    await navigate(`/${value}`);
    setCurrentLanguage(value);
  }

  useEffect(() => {
    setCurrentLanguage(lang);
  }, [lang]);

  return (
    <Select
      options={languages}
      onChange={handleChange}
      defaultValue={currentLanguage}
    />
  );
}
