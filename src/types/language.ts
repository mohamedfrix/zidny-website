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

export type Language = 'en' | 'fr';

export interface LanguageConfig {
  code: Language;
  name: string;
}
