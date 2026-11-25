// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production origin. Override with SITE_URL (see .env.example).
const SITE_URL = process.env.SITE_URL || 'https://chavezhousecleaning.com';

// Paths that must never appear in the sitemap.
const SITEMAP_EXCLUDE = ['/404', '/thank-you'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // English is the only published locale. Spanish can be added later by
  // adding 'es' here and creating src/pages/es/* (see docs/I18N.md).
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !SITEMAP_EXCLUDE.some((p) => new URL(page).pathname.startsWith(p)),
    }),
  ],
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
