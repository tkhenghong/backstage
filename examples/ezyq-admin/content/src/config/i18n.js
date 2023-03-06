import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ms from '../locales/ms.json'
import en from '../locales/en.json'

const lng = localStorage.getItem('language')

i18n.use(initReactI18next).init({
  resources: {
    en,
    ms,
  },
  fallbackLng: 'en',
  lng: lng ? lng : 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
