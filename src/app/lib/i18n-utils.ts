import en from "public/locales/en.json";
import lt from "public/locales/lt.json";

const translations: Record<string, any> = { en, lt };

// ✅ Fetch translations dynamically based on locale
export function getTranslations(locale: string) {
  return translations[locale] || translations["en"]; // Default to English if locale is missing
}
