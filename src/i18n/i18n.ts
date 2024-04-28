import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import hiJSON from './translations/HI';
import cnJSON from './translations/CN';
import enJSON from './translations/EN';
import ruJSON from './translations/RU';

const resources = {
  "HI": { translation: hiJSON },
  "CN": { translation: cnJSON },
  "RU": { translation: ruJSON },
  "EN": { translation: enJSON },
};

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    fallbackLng: 'en-EN',
    resources,
    keySeparator: false,
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
