/**
 * Service areas.
 * - Core (confirmed in Notion): Swiss Avenue, Lower Greenville, Uptown and nearby Dallas.
 * - The previous site also listed suburbs (Plano, Richardson, Irving…). Until Maria
 *   confirms them they are shown only as "ask about availability" (hub: null),
 *   never as pages and never in schema areaServed.
 * Chavez House Cleaning is a mobile team: these are areas served, not offices.
 */
import type { PhotoSlug } from './photos';
import type { Faq } from './services';

export type AreaKind = 'City' | 'Dallas neighborhood';
export type HubSlug = 'dallas' | 'park-cities';
export type Area = { name: string; kind: AreaKind; hub: HubSlug | null };

export const areas: Area[] = [
  // Central & East Dallas (core)
  { name: 'Uptown', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Lower Greenville', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Swiss Avenue', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Munger Place', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Lakewood', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'M Streets', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Knox-Henderson', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Oak Lawn', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Downtown Dallas', kind: 'Dallas neighborhood', hub: 'dallas' },
  { name: 'Deep Ellum', kind: 'Dallas neighborhood', hub: 'dallas' },
  // Park Cities
  { name: 'Highland Park', kind: 'City', hub: 'park-cities' },
  { name: 'University Park', kind: 'City', hub: 'park-cities' },
  // Listed on the previous site — availability to be confirmed
  { name: 'Richardson', kind: 'City', hub: null },
  { name: 'Plano', kind: 'City', hub: null },
  { name: 'Addison', kind: 'City', hub: null },
  { name: 'Garland', kind: 'City', hub: null },
  { name: 'Irving', kind: 'City', hub: null },
  { name: 'Mesquite', kind: 'City', hub: null },
];

export type AreaPage = {
  slug: HubSlug;
  name: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  lead: string;
  photo: PhotoSlug;
  photoAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
  homesHeading: string;
  homes: { title: string; text: string }[];
  gallery: { slug: PhotoSlug; alt: string; caption: string }[];
  faqs: Faq[];
};

export const areaPages: AreaPage[] = [
  {
    slug: 'dallas',
    name: 'Uptown & East Dallas',
    seo: {
      title: 'House Cleaning in Uptown & East Dallas, TX | Chavez',
      description:
        'House and office cleaning in Uptown, Lower Greenville, Swiss Avenue, Lakewood, the M Streets and Downtown Dallas. Locally owned. Call or text for a free quote.',
    },
    eyebrow: 'Uptown · Lower Greenville · Swiss Avenue',
    h1: 'House cleaning in Uptown and East Dallas',
    lead:
      'Chavez House Cleaning is based in East Dallas (75223). Most of our clients live or work within a short drive: Uptown, Lower Greenville, the M Streets, Swiss Avenue, Munger Place, Lakewood, Knox-Henderson, Oak Lawn, Deep Ellum and Downtown.',
    photo: 'living-room-hardwood',
    photoAlt: 'Living room with a navy sectional, round wood coffee table and polished hardwood floor after a Chavez cleaning',
    sections: [
      {
        heading: 'Close to home, so we show up on time',
        paragraphs: [
          'Being on time is the thing our clients mention most in their Google reviews. Part of the reason is simple: our team is based in East Dallas, so Uptown, Lower Greenville and Swiss Avenue are a short drive, not a trip across the Metroplex.',
          'We clean apartments, condos, historic homes and small offices in these neighborhoods every week, with the same checklist on every visit and Maria Chavez personally overseeing the work.',
        ],
      },
      {
        heading: 'Every neighborhood cleans a little differently',
        paragraphs: [
          'A high-rise apartment off McKinney Avenue needs elevator reservations and fast, consistent upkeep. A 1920s Tudor in the M Streets has original hardwood, built-ins and older tile that need a careful hand. A Prairie-style home on Swiss Avenue has more rooms, more trim and more windows than most new builds. We plan each visit around the home in front of us.',
        ],
      },
    ],
    homesHeading: 'Homes and spaces we clean in Uptown and East Dallas',
    homes: [
      { title: 'Uptown apartments & condos', text: 'Mid- and high-rise units around McKinney Ave, State Thomas and the Katy Trail: weekly or biweekly upkeep and move-outs.' },
      { title: 'M Streets & Lower Greenville bungalows', text: 'Tudor cottages and 1920s–40s bungalows with original floors, arched doorways and vintage tile.' },
      { title: 'Swiss Avenue & Munger Place historic homes', text: 'Large early-1900s homes with lots of wood trim, windows and rooms that reward a detailed deep clean.' },
      { title: 'Lakewood family homes', text: 'Busy households with kids and pets that run on a biweekly or every-4-weeks schedule.' },
      { title: 'Small offices in Uptown, Downtown & Deep Ellum', text: 'Offices, studios and suites cleaned after hours so your team walks into a clean space.' },
    ],
    gallery: [
      { slug: 'kitchen-navy-range', alt: 'Kitchen with navy cabinets, white subway tile and a stainless range after cleaning', caption: 'Kitchen detail clean, East Dallas' },
      { slug: 'team-living-room', alt: 'Chavez team member wiping a coffee table in a bright living room', caption: 'Our team at work' },
      { slug: 'kitchen-quartz-counter', alt: 'Quartz countertop and navy cabinets with gold handles, wiped and polished', caption: 'Counters and cabinet fronts' },
    ],
    faqs: [
      { q: 'Which Dallas neighborhoods do you clean in most?', a: 'Uptown, Lower Greenville, the M Streets, Swiss Avenue, Munger Place, Lakewood, Knox-Henderson, Oak Lawn, Deep Ellum and Downtown Dallas. We are based in East Dallas (75223), so these are all close by.' },
      { q: 'Do you clean apartments in Uptown high-rises?', a: 'Yes. Tell us the building, parking or loading instructions and whether the elevator needs to be reserved, and we will plan the visit around the building’s rules.' },
      { q: 'Do you clean offices in these neighborhoods too?', a: 'Yes. We clean small offices, studios and suites in Uptown, Downtown and Deep Ellum, usually after hours or on a fixed weekly schedule.' },
    ],
  },
  {
    slug: 'park-cities',
    name: 'Highland Park & University Park',
    seo: {
      title: 'House Cleaning in Highland Park & University Park, TX',
      description:
        'Detailed house cleaning and deep cleaning for Highland Park and University Park homes. Weekly, biweekly or every 4 weeks. Call or text Chavez for a free quote.',
    },
    eyebrow: 'The Park Cities',
    h1: 'House cleaning in Highland Park and University Park',
    lead:
      'Larger homes, more bathrooms, more windows and finishes that need the right products: Chavez House Cleaning brings a detailed, checklist-based clean to homes in the Park Cities.',
    photo: 'sunroom-sofa-rug',
    photoAlt: 'Sunroom with tall windows, a velvet sofa, blue pillows and a patterned rug after a Chavez cleaning',
    sections: [
      {
        heading: 'Detail work for larger homes',
        paragraphs: [
          'Homes in Highland Park and University Park tend to be large, with several bathrooms, formal rooms, sunrooms and a lot of glass. That means more time on detail: baseboards, window sills, light fixtures, cabinet fronts, stone counters and floors that need the right product, not a generic spray.',
          'Most Park Cities clients start with a deep cleaning and then keep the home on a weekly or biweekly schedule. Maria Chavez oversees every visit and you always know what is included before we arrive.',
        ],
      },
    ],
    homesHeading: 'What Park Cities clients usually ask us for',
    homes: [
      { title: 'Weekly or biweekly upkeep', text: 'A consistent team and the same checklist, so the house is always ready.' },
      { title: 'Deep cleaning before events and holidays', text: 'Trim, baseboards, fixtures and glass before guests arrive.' },
      { title: 'Move-in and move-out cleaning', text: 'Empty-home cleans for buyers, sellers and renters around SMU.' },
      { title: 'After a remodel', text: 'Fine construction dust removed from surfaces, vents and cabinets.' },
    ],
    gallery: [
      { slug: 'maria-sunroom', alt: 'Chavez team member standing in a bright sunroom after finishing a cleaning', caption: 'Our team, after the job' },
      { slug: 'living-room-hardwood', alt: 'Living room with a navy sectional and polished hardwood floor after cleaning', caption: 'Hardwood floors, polished' },
      { slug: 'kitchen-quartz-counter', alt: 'Quartz countertop and navy cabinets with gold handles, wiped and polished', caption: 'Counters and cabinet fronts' },
    ],
    faqs: [
      { q: 'Do you clean homes in Highland Park and University Park?', a: 'Yes. We clean homes in both Park Cities on weekly, biweekly and every-4-weeks schedules, plus one-time deep cleanings and move-in/move-out cleanings.' },
      { q: 'How long does a cleaning take in a large home?', a: 'It depends on the size, number of bathrooms and the type of cleaning. A first deep cleaning takes longer than regular visits. We give you an estimate after you tell us about the home.' },
    ],
  },
];

export const getAreaPage = (slug: AreaPage['slug']) => areaPages.find((a) => a.slug === slug)!;
