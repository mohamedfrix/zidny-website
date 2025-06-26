import { Language, Translations } from '../lib/language';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations: Record<Language, Translations> = {
  en,
  fr,
};

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}

export function translate(language: Language, key: string): string {
  const t = getTranslations(language);
  const keys = key.split('.');
  
  let value: unknown = t;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to English if key not found
      const fallbackT = translations.en;
      let fallbackValue: unknown = fallbackT;
      for (const fallbackK of keys) {
        if (fallbackValue && typeof fallbackValue === 'object' && fallbackK in fallbackValue) {
          fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackK];
        } else {
          return `Missing translation: ${key}`;
        }
      }
      return typeof fallbackValue === 'string' ? fallbackValue : `Invalid translation key: ${key}`;
    }
  }
  
  return typeof value === 'string' ? value : `Invalid translation key: ${key}`;
}
