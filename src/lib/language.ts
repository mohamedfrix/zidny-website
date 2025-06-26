export type Language = 'en' | 'fr';

export interface Translations {
  aboutUs: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  common: {
    welcome: string;
    learnMore: string;
    getStarted: string;
    language: string;
  };
}

export const SUPPORTED_LANGUAGES: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
};

export const DEFAULT_LANGUAGE: Language = 'en';
export const LANGUAGE_COOKIE_NAME = 'preferred-language';
