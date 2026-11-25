/**
 * JSON-LD builders. Only facts visible on the site and documented in
 * src/config/site.ts are emitted. Deliberately omitted until validated:
 * street address (residential), openingHours, aggregateRating/review,
 * licenses/insurance and foundingDate. City-level address + geo are emitted.
 */
import { SITE } from '@/config/site';
import { areas } from '@/data/areas';

export const abs = (path: string) => new URL(path, SITE.url + '/').toString();

export const ORG_ID = abs('/#business');
export const WEBSITE_ID = abs('/#website');

export function businessNode(logoUrl: string, imageUrl: string) {
  const node: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: abs('/'),
    telephone: SITE.phone.e164,
    email: SITE.email,
    logo: { '@type': 'ImageObject', url: logoUrl },
    image: imageUrl,
    description:
      `Locally owned cleaning company in Dallas, Texas, run by Maria Chavez (${SITE.yearsInBusiness}+ years of cleaning experience): house cleaning, deep cleaning, weekly/biweekly/every-4-weeks cleaning, move-in/move-out cleaning, office cleaning and post-construction cleaning in Uptown, East Dallas, Lower Greenville, Swiss Avenue and the Park Cities.`,
    founder: { '@type': 'Person', name: SITE.contactPerson },
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.listings.bbb, SITE.listings.yelp, SITE.listings.google].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone.e164,
      email: SITE.email,
      availableLanguage: ['English', 'Spanish'],
    },
    knowsAbout: ['House cleaning', 'Deep cleaning', 'Recurring house cleaning', 'Move-in and move-out cleaning', 'Office cleaning', 'Post-construction cleaning'],
  };
  node.address = SITE.address
    ? { '@type': 'PostalAddress', addressCountry: 'US', ...SITE.address }
    : { '@type': 'PostalAddress', ...SITE.locality };
  node.geo = { '@type': 'GeoCoordinates', ...SITE.geo };
  node.hasMap = SITE.listings.google ?? undefined;
  if (SITE.openingHours) node.openingHours = SITE.openingHours;
  if (SITE.publishAreaServedInSchema) {
    node.areaServed = areas.filter((a) => a.hub !== null).map((a) => ({ '@type': a.kind === 'City' ? 'City' : 'Place', name: a.kind === 'City' ? `${a.name}, TX` : `${a.name}, Dallas, TX` }));
  }
  return node;
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: SITE.name,
    inLanguage: SITE.locale,
    publisher: { '@id': ORG_ID },
  };
}

export function webPageNode(opts: { url: string; name: string; description: string; type?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': opts.url + '#webpage',
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function breadcrumbNode(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.href),
    })),
  };
}

export function serviceNode(opts: { name: string; description: string; url: string; image?: string; areaServed?: string }) {
  return {
    '@type': 'Service',
    '@id': opts.url + '#service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: { '@id': ORG_ID },
    ...(opts.areaServed ? { areaServed: { '@type': 'City', name: opts.areaServed } } : {}),
  };
}

export function articleNode(opts: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@type': 'BlogPosting',
    '@id': opts.url + '#article',
    mainEntityOfPage: opts.url,
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: SITE.locale,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export const graph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) });
