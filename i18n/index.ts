import en from "@/i18n/locales/en.json";
import tr from "@/i18n/locales/tr.json";
import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
