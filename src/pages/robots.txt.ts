import type { APIRoute } from 'astro';
import { ENV } from '@/config/site';

/** Production: allow all + sitemap. Any other environment: block everything. */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = ENV.indexable
    ? `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${sitemap}\n`
    : `# Non-production build: indexing disabled (set SITE_INDEXABLE=true for production)\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
