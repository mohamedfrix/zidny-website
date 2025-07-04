'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Language, SUPPORTED_LANGUAGES } from '@/lib/language';
import { ChevronDown } from 'lucide-react';



// Mapping des drapeaux pour chaque langue
const LANGUAGE_FLAGS = {
  en: '🇺🇸', // ou 🇬🇧 pour le Royaume-Uni
  fr: '🇫🇷',
} as const;

export  function LanguageSwitcher(
) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fermer avec la touche Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  const currentLanguageData = {
    code: language,
    name: SUPPORTED_LANGUAGES[language],
    flag: LANGUAGE_FLAGS[language as keyof typeof LANGUAGE_FLAGS]
  };

  
  // Variant dropdown (par défaut)
  return (
    <div className={`relative`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-sm  hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('common.selectLanguage')}
      >
        <span className="text-base">{currentLanguageData.flag}</span>
        <span>{currentLanguageData.name}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le dropdown */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu dropdown */}
          <div className="absolute right-0 z-20 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
            <div className="py-1" role="listbox">
              {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => {
                const isSelected = code === language;
                const flag = LANGUAGE_FLAGS[code as keyof typeof LANGUAGE_FLAGS];
                
                return (
                  <button
                    key={code}
                    onClick={() => handleLanguageSelect(code as Language)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="text-base">{flag}</span>
                    <span className="flex-1">{name}</span>
                    {isSelected && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}