import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { services } from '@/data/services';
import { areas, areaPages } from '@/data/areas';
import { getCollection } from 'astro:content';
import { localPages, cityBySlug, localUrl } from '@/data/local';

/** llms.txt — plain Markdown summary for AI search engines (GEO). Built from site data. */
export const GET: APIRoute = async ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const posts = (await getCollection('resources', ({ data }) => !data.draft)).sort((a, b) => +b.data.published - +a.data.published);
  const body = `# ${SITE.name}

> ${SITE.legalName} is a locally owned house cleaning, maid service and office cleaning company based in East Dallas, Texas (75223), run by ${SITE.contactPerson}. We clean homes, apartments and offices in Uptown, Lower Greenville, the M Streets, Swiss Avenue, Munger Place, Lakewood, White Rock Lake, Knox-Henderson, Oak Lawn, Deep Ellum, Downtown Dallas, Highland Park, University Park and nearby cities (Richardson, Plano, Allen, Carrollton, Addison, Garland, Irving, Mesquite). Our main focus is office cleaning for dental offices, law firms and small businesses, plus recurring and move-in/move-out cleaning: house cleaning, deep cleaning, weekly/biweekly/every-3-weeks/monthly cleaning, move-in/move-out cleaning, office cleaning and post-construction cleaning. No laundry service. Free quotes by phone, text or email.

- Phone / text: ${SITE.phone.display} (${SITE.phone.e164})
- Email: ${SITE.email}
- Point of contact: ${SITE.contactPerson}
- Service model: mobile team that comes to the client; no storefront office
- Based in: Dallas, TX 75223 (East Dallas)
- Experience: ${SITE.contactPerson} has ${SITE.yearsInBusiness}+ years of cleaning experience
- Google Business Profile: ${SITE.listings.google}
- Clients describe us on Google as on time, thorough and easy to communicate with

## Services
${services.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}): ${s.answer}`).join('\n')}

## Service areas
${areaPages.map((a) => `- [${a.name}](${u(`/service-areas/${a.slug}/`)})`).join('\n')}
- Core areas: ${areas.filter((a) => a.hub).map((a) => a.name).join(', ')} ([full list](${u('/service-areas/')}))
- Nearby cities served: ${areas.filter((a) => !a.hub).map((a) => a.name).join(', ')}

## Services by neighborhood
${localPages.map((p) => `- [${services.find((s) => s.slug === p.service)!.name} in ${cityBySlug(p.city).label}](${u(localUrl(p.service, p.city))})`).join('\n')}

## Guides
${posts.map((p) => `- [${p.data.title}](${u(`/resources/${p.id.replace(/\.md$/, '')}/`)}): ${p.data.description}`).join('\n')}

## Company
- [About Chavez House Cleaning](${u('/about/')})
- [Contact / free quote](${u('/contact/')})
- [Privacy policy](${u('/privacy-policy/')})
- Profiles: ${[SITE.social.instagram, SITE.social.facebook, SITE.listings.bbb, SITE.listings.yelp, SITE.listings.google].filter(Boolean).join(' · ')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
