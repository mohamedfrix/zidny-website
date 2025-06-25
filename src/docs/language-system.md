# Multi-Language System Usage Guide

This project includes a comprehensive multi-language system that supports English and French. Here's how to use it:

## Basic Usage

### 1. Using the Hook in Components

```tsx
import { useLanguage } from '@/hooks/use_language';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('aboutUs.title')}</h1>
      <p>{t('aboutUs.description')}</p>
      <p>Current language: {language}</p>
    </div>
  );
}
```

### 2. Language Switcher Component

```tsx
import { LanguageSwitcher } from '@/components/ui/language-switcher';

function Header() {
  return (
    <header>
      <nav>
        {/* Your navigation items */}
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
```

## Adding New Translations

### 1. Update the JSON files

Add new keys to both `src/locales/en.json` and `src/locales/fr.json`:

```json
// en.json
{
  "navigation": {
    "home": "Home",
    "services": "Services"
  },
  "newSection": {
    "title": "New Section",
    "subtitle": "This is a new section"
  }
}
```

```json
// fr.json
{
  "navigation": {
    "home": "Accueil",
    "services": "Services"
  },
  "newSection": {
    "title": "Nouvelle Section",
    "subtitle": "Ceci est une nouvelle section"
  }
}
```

### 2. Update TypeScript types

Update `src/types/language.ts` to include new translation keys:

```typescript
export interface Translations {
  // ...existing keys...
  newSection: {
    title: string;
    subtitle: string;
  };
}
```

## Features

- **Automatic Language Detection**: Detects browser language preference
- **Persistent Storage**: Saves language preference in localStorage
- **Fallback System**: Falls back to English if translation is missing
- **Type Safety**: Full TypeScript support with proper type checking
- **Nested Keys**: Supports nested translation keys (e.g., 'aboutUs.title')
- **Hot Switching**: Language changes apply immediately without page reload

## Available Languages

- English (en)
- French (fr)

## API Reference

### useLanguage Hook

```typescript
const {
  language,        // Current active language ('en' | 'fr')
  setLanguage,     // Function to change language
  t,               // Translation function
  availableLanguages // Array of available language options
} = useLanguage();
```

### Translation Function

```typescript
t('key')                    // Simple key
t('nested.key')            // Nested key
t('missing.key')           // Returns error message for missing keys
```
