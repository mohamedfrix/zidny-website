'use client';

import React from 'react';
import { useLanguage, Language } from '../../context/LanguageContext';
import { ClientOnly } from './client-only';

interface LanguageSwitcherProps {
  className?: string;
}

function LanguageSwitcherContent({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, availableLanguages, t } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium">{t('common.language')}:</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="px-3 py-1 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {availableLanguages.map((lang: { code: Language; name: string }) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const fallback = (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium">Language:</span>
      <select className="px-3 py-1 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );

  return (
    <ClientOnly fallback={fallback}>
      <LanguageSwitcherContent className={className} />
    </ClientOnly>
  );
}
