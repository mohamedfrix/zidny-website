'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { getBrowserLanguage, isValidLanguage, SUPPORTED_LANGUAGES } from '../utils/language';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; name: string }[];
}

const translations = {
  en,
  fr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const availableLanguages = Object.entries(SUPPORTED_LANGUAGES).map(([code, config]) => ({
  code: code as Language,
  name: config.name,
}));

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load language from localStorage on mount
  useEffect(() => {
    if (!isClient) return;
    
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && isValidLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      setLanguage(getBrowserLanguage());
    }
  }, [isClient]);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem('preferred-language', language);
  }, [language, isClient]);

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackK of keys) {
          if (value && typeof value === 'object' && fallbackK in value) {
            value = (value as Record<string, unknown>)[fallbackK];
          } else {
            return `Missing translation: ${key}`;
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : `Invalid translation key: ${key}`;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
