/**
 * Single source of truth for business data — Chavez House Cleaning LLC.
 *
 * Sources: Helice client record in Notion (Chavez House Cleaning) and the
 * previous website (chavezhousecleaning.com), checked 2026-11-23.
 * Anything not confirmed by Maria Chavez stays null/false — see
 * docs/CLIENT-VALIDATION.md. Never add licenses, insurance, ratings, hours or
 * prices without written confirmation.
 */

export const SITE = {
  name: 'Chavez House Cleaning',
  legalName: 'Chavez House Cleaning LLC',
  shortName: 'Chavez',
  url: (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') ?? 'https://chavezhousecleaning.com',
  locale: 'en-US',
  contactPerson: 'Maria Chavez',
  phone: {
    display: '(972) 330-0164',
    e164: '+19723300164',
    href: 'tel:+19723300164',
    sms: 'sms:+19723300164',
  },
  /** Second work line from the Notion record. Not shown until Maria says which line answers what. */
  phoneAlt: '(972) 765-6710',
  email: 'maria88chavez77@gmail.com',
  baseRegion: 'Dallas, Texas',
  social: {
    instagram: 'https://www.instagram.com/chavezhousecleaning',
    facebook: 'https://www.facebook.com/profile.php?id=61557071875398',
  },
  listings: {
    /** Google Business Profile (CID from the old site's map link). */
    google: 'https://maps.google.com/?cid=16213525298243072727' as null | string,
    /** Write-a-review link: needs the place ID from the GBP dashboard. */
    googleReview: null as null | string,
    bbb: null as null | string,
    yelp: null as null | string,
  },

  /* ---- Pending confirmation: keep null/false until validated ---- */
  /** The registered address is an apartment (residential): not published. Mobile team. */
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  },
  /** City-level location used in schema (no street). */
  locality: { addressLocality: 'Dallas', addressRegion: 'TX', postalCode: '75223', addressCountry: 'US' },
  geo: { latitude: 32.8207, longitude: -96.7482 },
  openingHours: null as null | string[],
  /** Notion: 10 years in the trade; 2.5 years running her own company (as of 2026). */
  yearsInBusiness: 10 as null | number,
  /** "Licensed and insured" appeared on the old site but is not confirmed in writing. */
  trust: { bbbAccredited: false, licensed: false, insured: false },
  /** Old site widget: "Excellent, based on 10 reviews" (2023). Re-check live GBP before showing a number. */
  googleRating: null as null | { value: string; count: number },
  /** Publish areaServed in JSON-LD (core Dallas areas are confirmed in Notion). */
  publishAreaServedInSchema: true,
} as const;

/** Runtime flags derived from the environment. */
export const ENV = {
  /** Only true on the real production build (Cloudflare build variable). */
  indexable: import.meta.env.SITE_INDEXABLE === 'true' || process.env.SITE_INDEXABLE === 'true',
  formMode: (import.meta.env.PUBLIC_FORM_MODE || 'demo') as 'demo' | 'endpoint',
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT || '') as string,
  ga4Id: (import.meta.env.PUBLIC_GA4_ID || '') as string,
};
