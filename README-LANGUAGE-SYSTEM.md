# Multi-Language System - Cookie-Based Implementation

This project now includes a clean, cookie-based multi-language system that supports English and French without SSR/hydration issues.

## Key Features

- **No hydration mismatch**: Server and client render the same content
- **Cookie-based storage**: Language preference persists across sessions
- **SEO-friendly**: Content rendered in correct language on server-side
- **Simple API**: Easy to use throughout the application
- **Type-safe**: Full TypeScript support

## How It Works

### Cookie Storage
- Language preference is stored in a cookie named `preferred-language`
- Server can read the cookie during SSR to render correct content immediately
- No flash of incorrect content or double rendering

### Server-Side Rendering
1. Server reads language preference from cookie
2. Passes initial language to `LanguageProvider`
3. Components render with correct translations from the start

### Client-Side Updates
- Language changes update both React state and cookie
- Cookie persists for 1 year
- Secure in production, lax SameSite policy

## Usage

### Basic Translation
```tsx
import { useLanguage } from '@/hooks/useLanguage';

function MyComponent() {
  const { t } = useLanguage();
  
  return <h1>{t('aboutUs.title')}</h1>;
}
```

### Language Switching
```tsx
import { LanguageSwitcher } from '@/components/ui/language-switcher';

function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
}
```

### Getting Current Language
```tsx
const { language, setLanguage } = useLanguage();
```

## File Structure

```
src/
├── lib/
│   ├── language.ts          # Types and constants
│   ├── cookies.ts           # Client-side cookie functions
│   ├── server-cookies.ts    # Server-side cookie functions
│   └── translations.ts      # Translation logic
├── locales/
│   ├── en.json              # English translations
│   └── fr.json              # French translations
├── context/
│   └── LanguageContext.tsx  # React context
├── hooks/
│   └── useLanguage.ts       # Custom hook
└── components/
    └── ui/
        └── language-switcher.tsx
```

## Adding New Languages

1. Create new JSON file in `src/locales/`
2. Add language to `SUPPORTED_LANGUAGES` in `src/lib/language.ts`
3. Update the `Language` type

## Benefits Over Previous Implementation

- ✅ No `ClientOnly` wrapper needed
- ✅ No fallback content required
- ✅ No hydration mismatches
- ✅ Better SEO
- ✅ Simpler code
- ✅ Better performance
- ✅ No localStorage complexities
