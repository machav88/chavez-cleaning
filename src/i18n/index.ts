/**
 * i18n entry point. Only 'en' is published. To add Spanish:
 * 1. create es.ts with the same shape as en.ts;
 * 2. add 'es' to `locales` in astro.config.mjs;
 * 3. add translated data files and pages under src/pages/es/;
 * 4. only then emit hreflang alternates (see BaseLayout `alternates` prop).
 */
import { en } from './en';

export const defaultLocale = 'en' as const;
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { en } as const;
export const useStrings = (locale: Locale = defaultLocale) => dictionaries[locale];
export const htmlLang: Record<Locale, string> = { en: 'en-US' };
export const ogLocale: Record<Locale, string> = { en: 'en_US' };
