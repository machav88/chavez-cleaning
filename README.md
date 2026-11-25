# Chavez House Cleaning — website

Official website of **Chavez House Cleaning LLC** (Dallas, TX).
Designed and developed by **[Helice DS LLC](https://heliceds.com/)**.

Static, SEO-first site: English (en-US), built with Astro and deployed on Cloudflare.

## Requirements

- Node.js 22+

## Commands

```bash
npm install
npm run dev        # local development at http://localhost:4321
npm run build      # production build in dist/ (noindex unless SITE_INDEXABLE=true)
npm run preview    # serve dist/ locally
npm run qa         # SEO and link checks on dist/ (run after build)
```

Production build (indexable): `SITE_INDEXABLE=true npm run build`.

## Environment variables

See `.env.example`.

| Variable | Purpose |
|---|---|
| `SITE_URL` | Canonical origin (default `https://chavezhousecleaning.com`) |
| `SITE_INDEXABLE` | `true` only in production; any other value adds `noindex` and a blocking robots.txt |
| `PUBLIC_FORM_MODE` / `PUBLIC_FORM_ENDPOINT` | Optional contact form transport (`demo` by default) |
| `PUBLIC_GA4_ID` | Optional GA4 measurement ID |

## Deployment (Cloudflare)

- **Cloudflare Pages / Workers Builds connected to this repo:** build command `npm run build`, output directory `dist`, variable `SITE_INDEXABLE=true` in production only.
- **Or with Wrangler:** `npm run build && npx wrangler deploy` (config in `wrangler.jsonc`).
- `public/_redirects`: 301 redirects from the previous website (see `docs/REDIRECTS.md`).
- `public/_headers`: security and cache headers.

## Structure

```
src/
  config/site.ts        business data (name, phone, email, profiles)
  data/services.ts      service pages content
  data/areas.ts         service areas and area pages
  data/local.ts         service × neighborhood pages
  data/reviews.ts       Google reviews shown as text
  content/resources/    guides (Markdown)
  components/           UI components (FastQuoted widget, header, footer…)
  layouts/BaseLayout    <head>: title, description, canonical, Open Graph, JSON-LD
  lib/schema.ts         structured data builders
  pages/                routes, robots.txt, llms.txt
public/                 media, icons, _redirects, _headers
```

## Integrations

- **FastQuoted** instant-quote widget (HomeSuite Pro) — `src/components/FastQuoted.astro`.

## Credits

Media: photos by Chavez House Cleaning and royalty-free images/videos from Pexels.

© Chavez House Cleaning LLC. Website by Helice DS LLC.
