'use client';

import { useLanguage } from '../context/LanguageContext';

// Re-export the hook for convenience
export { useLanguage };

// Additional utility functions can be added here if needed
// Note: This function should be used inside a React component that has access to the useLanguage hook
export function createFormatMessage() {
  return function formatMessage(t: (key: string) => string, key: string, params?: Record<string, string>): string {
    let message = t(key);
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        message = message.replace(`{${param}}`, value);
      });
    }
    
    return message;
  };
}