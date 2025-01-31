import en from "public/locales/en.json"; // ✅ Corrected import
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lt from "public/locales/lt.json"; // ✅ Corrected import

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        lt: { translation: lt },
      },
      lng: typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
}

// ✅ Store translations in a dynamic object
const translations: Record<string, any> = { en, lt };

// ✅ Function to get translations based on locale
export function getTranslations(locale: string) {
  return translations[locale] || translations["en"]; // Default to English if locale is missing
}

export { i18n }; // ✅ Named export
