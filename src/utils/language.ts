import { Language } from '../types/language';

// Configuration for supported languages
export const SUPPORTED_LANGUAGES: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
};

// Helper function to validate language code
export function isValidLanguage(code: string): code is Language {
  return code in SUPPORTED_LANGUAGES;
}

// Helper function to get browser language with fallback
export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.split('-')[0] as Language;
  return isValidLanguage(browserLang) ? browserLang : 'en';
}

// Helper function to format language name
export function formatLanguageName(code: Language, includeFlag = false): string {
  const config = SUPPORTED_LANGUAGES[code];
  return includeFlag ? `${config.flag} ${config.name}` : config.name;
}
