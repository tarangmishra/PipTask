import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './english.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: english
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
