/**
 * Service × neighborhood landing pages (/services/{service}/{city}/).
 *
 * Rules (docs/KEYWORDS.md):
 * - Only core areas confirmed in Notion (Uptown, Lower Greenville, Swiss Avenue)
 *   plus Highland Park, Downtown and Deep Ellum, which are close to the East
 *   Dallas base and were already on the previous site.
 * - Each page has its own intro, local tips and FAQs (no doorway templates).
 * - Local facts are general, publicly known characteristics of each place.
 * - Office pages are prioritized: Maria wants more office clients.
 */
import type { Faq } from './services';
import type { PhotoSlug } from './photos';
import type { HubSlug } from './areas';

export type CitySlug = 'uptown' | 'lower-greenville' | 'swiss-avenue' | 'highland-park' | 'downtown-dallas' | 'deep-ellum';

export type City = {
  slug: CitySlug;
  name: string;
  label: string;
  hub: HubSlug;
  homes: string;
  neighborhoods: string[];
  photo: PhotoSlug;
  photoAlt: string;
};

export const cities: City[] = [
  {
    slug: 'uptown',
    name: 'Uptown',
    label: 'Uptown, Dallas, TX',
    hub: 'dallas',
    homes:
      'Uptown is Dallas’s densest residential neighborhood: mid- and high-rise apartments and condos along McKinney Avenue, townhomes in the State Thomas historic district, and new buildings around West Village and the Katy Trail. It is also full of offices and professional suites, which is why residents and businesses here want the same thing: fast, consistent cleaning that works around building rules.',
    neighborhoods: ['McKinney Avenue', 'State Thomas', 'West Village', 'Katy Trail', 'Cityplace', 'Victory Park (nearby)'],
    photo: 'open-living-kitchen',
    photoAlt: 'Open living room and kitchen in a bright Uptown Dallas apartment after cleaning',
  },
  {
    slug: 'lower-greenville',
    name: 'Lower Greenville',
    label: 'Lower Greenville, Dallas, TX',
    hub: 'dallas',
    homes:
      'Lower Greenville and the nearby M Streets (Greenland Hills) are known for 1920s–1940s Tudor cottages, bungalows and duplexes on tree-lined streets, a few blocks from the restaurants on Greenville Avenue. Original hardwood floors, arched doorways, built-in shelves and vintage tile are common, and so are renters in duplexes and garage apartments.',
    neighborhoods: ['Greenville Avenue', 'M Streets (Greenland Hills)', 'Vickery Place', 'Belmont', 'Lowest Greenville'],
    photo: 'living-room-hardwood',
    photoAlt: 'Living room with hardwood floors and a navy sofa in an East Dallas home after cleaning',
  },
  {
    slug: 'swiss-avenue',
    name: 'Swiss Avenue',
    label: 'Swiss Avenue, Dallas, TX',
    hub: 'dallas',
    homes:
      'The Swiss Avenue Historic District and neighboring Munger Place are home to some of the most admired early-1900s houses in Dallas: Prairie, Tudor, Craftsman and Spanish Revival homes with large rooms, sunrooms, wood trim, leaded and multi-pane windows and original floors. Lakewood, just to the east, adds larger family homes on the way to White Rock Lake.',
    neighborhoods: ['Swiss Avenue Historic District', 'Munger Place', 'Peak’s Suburban Addition', 'Junius Heights', 'Lakewood'],
    photo: 'sunroom-sofa-rug',
    photoAlt: 'Sunroom with many tall windows and a velvet sofa in a historic East Dallas home',
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    label: 'Highland Park, TX',
    hub: 'park-cities',
    homes:
      'Highland Park is a separate town surrounded by Dallas, known for large single-family homes, estate lots and mature trees around Highland Park Village and Turtle Creek. Homes here have many bathrooms, formal rooms and natural stone and wood finishes, so cleaning is about detail and the right products more than speed.',
    neighborhoods: ['Highland Park Village area', 'Turtle Creek', 'Armstrong Parkway', 'University Park (nearby)'],
    photo: 'maria-sunroom',
    photoAlt: 'Chavez team member in a bright sunroom with large windows after finishing a cleaning',
  },
  {
    slug: 'downtown-dallas',
    name: 'Downtown Dallas',
    label: 'Downtown Dallas, TX',
    hub: 'dallas',
    homes:
      'Downtown Dallas mixes office towers with historic buildings converted into offices and lofts around Main Street, the Arts District and the West End. Small firms, startups, nonprofits and shared suites need dependable after-hours cleaning, and the residential lofts above them need regular upkeep too.',
    neighborhoods: ['Main Street District', 'Arts District', 'West End', 'Farmers Market', 'Thanks-Giving Square area'],
    photo: 'office-open-plan',
    photoAlt: 'Open-plan office with desks and large windows in a downtown Dallas building',
  },
  {
    slug: 'deep-ellum',
    name: 'Deep Ellum',
    label: 'Deep Ellum, Dallas, TX',
    hub: 'dallas',
    homes:
      'Deep Ellum, just east of Downtown, is known for its music venues, murals and converted warehouses. Brick-and-concrete lofts, new apartment buildings and creative offices sit side by side, with high ceilings, exposed ducts and big windows that collect dust fast.',
    neighborhoods: ['Elm Street', 'Main Street', 'Commerce Street', 'Baylor (nearby)', 'Exposition Park (nearby)'],
    photo: 'loft-living-room',
    photoAlt: 'Long loft-style living room with beams and large windows after cleaning',
  },
];

export type LocalPage = {
  service: string;
  city: CitySlug;
  seo: { title: string; description: string };
  h1: string;
  lead: string;
  intro: string[];
  tips: { title: string; text: string }[];
  faqs: Faq[];
};

export const localPages: LocalPage[] = [
  /* ---------------- House cleaning ---------------- */
  {
    service: 'house-cleaning',
    city: 'uptown',
    seo: {
      title: 'House Cleaning in Uptown Dallas | Maid Service | Chavez',
      description: 'Apartment and condo cleaning in Uptown Dallas, from McKinney Ave to the Katy Trail. One-time or weekly, biweekly, every 4 weeks. Call or text for a free quote.',
    },
    h1: 'House cleaning in Uptown Dallas',
    lead: 'Apartment, condo and townhome cleaning in Uptown, planned around your building’s rules and your schedule.',
    intro: [
      'Most Uptown homes we clean are apartments and condos in mid- and high-rise buildings around McKinney Avenue, State Thomas and the Katy Trail. The space may be smaller than a house, but it is lived in hard: kitchens used every day, bathrooms with glass showers and floors that track in everything from the trail.',
      'We follow the same written checklist every visit: kitchen, bathrooms, bedrooms, living areas and floors. Because our team is based in East Dallas, Uptown is a short drive, which helps us keep the thing clients mention most in their reviews: showing up on time.',
    ],
    tips: [
      { title: 'Building access', text: 'Tell us about concierge check-in, garage parking, fobs or elevator reservations when you book.' },
      { title: 'Glass showers', text: 'Hard Dallas water spots glass fast. We remove buildup every visit so it never gets ahead of you.' },
      { title: 'Biweekly is enough', text: 'For most one- and two-bedroom units, every two weeks keeps things under control.' },
    ],
    faqs: [
      { q: 'Do you clean apartments in Uptown high-rises?', a: 'Yes. We regularly work in Uptown buildings. Share the building name and any rules for vendors and we plan around them.' },
      { q: 'Can you clean while I am at work?', a: 'Yes. Many Uptown clients leave a key with the concierge or a door code. Tell us how to access the unit and we take care of the rest.' },
    ],
  },
  {
    service: 'house-cleaning',
    city: 'lower-greenville',
    seo: {
      title: 'House Cleaning in Lower Greenville & M Streets | Chavez',
      description: 'House cleaning for Lower Greenville, M Streets and Vickery Place bungalows and duplexes. Hardwood-safe, detail-focused, on time. Call or text for a free quote.',
    },
    h1: 'House cleaning in Lower Greenville and the M Streets',
    lead: 'Careful, detail-focused cleaning for the Tudor cottages, bungalows and duplexes of Lower Greenville, the M Streets and Vickery Place.',
    intro: [
      'Homes around Lower Greenville and the M Streets were mostly built in the 1920s to 1940s. They are full of character, and full of details that a quick clean skips: original hardwood floors, arched doorways, built-in shelves, vintage bathroom tile and lots of window panes.',
      'Our house cleaning follows a written checklist and uses wood-safe products on original floors. We are only a few minutes away in East Dallas, so these neighborhoods are part of our regular weekly routes.',
    ],
    tips: [
      { title: 'Original floors', text: 'We use wood-safe products and a damp (never soaking) mop on older hardwood.' },
      { title: 'Duplexes & garage apartments', text: 'We clean both sides or just one unit. Tell us which before the visit.' },
      { title: 'Street parking', text: 'On busy Greenville weekends, tell us where we can park closest to your door.' },
    ],
    faqs: [
      { q: 'Do you clean homes in the M Streets?', a: 'Yes. The M Streets (Greenland Hills), Lower Greenville, Vickery Place and Belmont are all on our regular routes from East Dallas.' },
      { q: 'Can you clean older tile and fixtures without damaging them?', a: 'Yes. We use gentle products on vintage tile and fixtures and tell you beforehand if something needs a specialist instead of a cleaner.' },
    ],
  },
  {
    service: 'house-cleaning',
    city: 'swiss-avenue',
    seo: {
      title: 'House Cleaning on Swiss Avenue & Munger Place | Chavez',
      description: 'House cleaning for historic Swiss Avenue, Munger Place and Lakewood homes: wood trim, sunrooms, windows and original floors. Call or text for a free quote.',
    },
    h1: 'House cleaning on Swiss Avenue, Munger Place and Lakewood',
    lead: 'Detailed cleaning for some of the most beautiful historic homes in Dallas, a few minutes from our East Dallas base.',
    intro: [
      'The homes of the Swiss Avenue Historic District and Munger Place have large rooms, sunrooms, staircases, wood trim and many windows. Keeping them clean is less about speed and more about patience: dusting trim and banisters, caring for original floors and finishing glass and mirrors without streaks.',
      'The sunroom photo on this page is from a real Chavez cleaning. We work with a written checklist on every visit, and Maria Chavez oversees each home personally.',
    ],
    tips: [
      { title: 'Plan for the size', text: 'Historic homes often have more bathrooms and rooms than the square footage suggests. Include them all when asking for a quote.' },
      { title: 'Start with a deep clean', text: 'Trim, banisters and window frames benefit from a first deep cleaning before regular visits.' },
      { title: 'Delicate finishes', text: 'Tell us about antique furniture, original light fixtures or surfaces you prefer we do not touch.' },
    ],
    faqs: [
      { q: 'Do you clean homes in Munger Place and Lakewood?', a: 'Yes. Swiss Avenue, Munger Place, Peak’s Suburban Addition, Junius Heights and Lakewood are all close to our East Dallas base.' },
      { q: 'How often should a large historic home be cleaned?', a: 'Weekly or biweekly visits keep large homes in good shape, with a deep cleaning once or twice a year for trim, fixtures and windows.' },
    ],
  },
  {
    service: 'house-cleaning',
    city: 'highland-park',
    seo: {
      title: 'House Cleaning in Highland Park, TX | Maid Service | Chavez',
      description: 'Detailed house cleaning and maid service for Highland Park homes: weekly, biweekly or every 4 weeks, with a written checklist. Call or text for a free quote.',
    },
    h1: 'House cleaning in Highland Park, TX',
    lead: 'A detailed, checklist-based house cleaning for Highland Park’s larger homes, on the schedule that suits your household.',
    intro: [
      'Highland Park homes usually mean more bathrooms, formal rooms, stone counters, wood floors and a lot of glass. Our house cleaning covers all of it room by room, and we use products that are right for each surface instead of one spray for everything.',
      'Most Highland Park clients keep a weekly or biweekly schedule so the house is always ready for family and guests. Maria Chavez is your direct contact for questions, scheduling and special requests.',
    ],
    tips: [
      { title: 'Stone and marble', text: 'Tell us about marble or natural stone so we use pH-neutral products on those surfaces.' },
      { title: 'Consistent team', text: 'Recurring clients get the same checklist every visit, so nothing gets missed between cleanings.' },
      { title: 'Event prep', text: 'Hosting? Add a deep-clean visit a few days before to cover trim, fixtures and glass.' },
    ],
    faqs: [
      { q: 'Do you also clean in University Park?', a: 'Yes. We clean homes in both Highland Park and University Park. See our Park Cities page for details.' },
      { q: 'Can you work around household staff or contractors?', a: 'Yes. Let us know who will be in the house and we coordinate the visit so everyone can work without getting in each other’s way.' },
    ],
  },

  /* ---------------- Deep cleaning ---------------- */
  {
    service: 'deep-cleaning',
    city: 'swiss-avenue',
    seo: {
      title: 'Deep Cleaning for Historic Homes in East Dallas | Chavez',
      description: 'Deep cleaning for Swiss Avenue, Munger Place and Lakewood homes: wood trim, banisters, built-ins, fixtures, windows and baseboards. Call or text for a quote.',
    },
    h1: 'Deep cleaning for historic homes on Swiss Avenue and in Lakewood',
    lead: 'Ceiling-to-floor cleaning for older East Dallas homes, where the details are the whole point.',
    intro: [
      'Historic homes collect dust in places newer houses do not have: picture rails, crown molding, banisters, built-in cabinets, transoms and multi-pane windows. A regular visit keeps the main surfaces clean; a deep cleaning is where all of that finally gets attention.',
      'We hand-wipe trim and door frames, dust fixtures and fans, clean inside window glass that can be reached safely and work along every baseboard. We confirm the scope with you before the visit so you know exactly what will be done.',
    ],
    tips: [
      { title: 'Before the home tour', text: 'Planning to open your home for a tour or event? Book the deep clean a few days before.' },
      { title: 'Windows', text: 'Multi-pane windows take time. Let us know how many rooms have them so we plan accordingly.' },
      { title: 'Then go recurring', text: 'After the deep clean, biweekly visits keep the home at that level.' },
    ],
    faqs: [
      { q: 'How long does a deep cleaning take in a large historic home?', a: 'Longer than a regular visit, often a full day for larger homes. We estimate the time after you tell us the number of rooms, bathrooms and the home’s condition.' },
      { q: 'Do you clean chandeliers and antique fixtures?', a: 'We dust and wipe fixtures we can reach safely. For crystal chandeliers or fragile antiques we may recommend a specialist and will tell you before the visit.' },
    ],
  },
  {
    service: 'deep-cleaning',
    city: 'highland-park',
    seo: {
      title: 'Deep Cleaning in Highland Park & University Park | Chavez',
      description: 'Top-to-bottom deep cleaning for Highland Park and University Park homes before holidays, events or a new schedule. Detailed checklist. Free quote.',
    },
    h1: 'Deep cleaning in Highland Park and University Park',
    lead: 'A full reset for larger Park Cities homes: before the holidays, after a renovation or before starting a recurring schedule.',
    intro: [
      'In larger homes, the things that build up slowly (dust on fans and fixtures, grime on cabinet fronts, buildup on glass showers and stone) add up fast. A deep cleaning brings every room back to a clean baseline in one visit.',
      'We work room by room with a written checklist, using surface-appropriate products for stone, wood and stainless. Many Park Cities clients schedule a deep cleaning before Thanksgiving and the holidays, then keep the home on a biweekly plan.',
    ],
    tips: [
      { title: 'Book early for the holidays', text: 'November and December fill up fast. Reserve your deep clean a few weeks ahead.' },
      { title: 'Guest rooms too', text: 'Rooms that are rarely used still collect dust. Include them in the quote.' },
      { title: 'Stone surfaces', text: 'We use pH-neutral products on marble and natural stone.' },
    ],
    faqs: [
      { q: 'Is a deep cleaning worth it for a home that is already cleaned regularly?', a: 'Yes, once or twice a year. Regular visits keep surfaces clean; a deep clean catches trim, fixtures, vents and the areas that regular visits rotate through.' },
      { q: 'Can you deep clean while we are traveling?', a: 'Yes. Many clients schedule it while they are away so they come back to a fresh home. Just leave access instructions.' },
    ],
  },

  /* ---------------- Move in / move out ---------------- */
  {
    service: 'move-in-move-out-cleaning',
    city: 'uptown',
    seo: {
      title: 'Move Out Cleaning in Uptown Dallas | Apartments | Chavez',
      description: 'Apartment move-out and move-in cleaning in Uptown Dallas: inside cabinets and appliances, baseboards and floors, scheduled around your lease. Free quote.',
    },
    h1: 'Move-out cleaning for Uptown Dallas apartments',
    lead: 'Hand back the keys with confidence. Empty-unit cleaning for Uptown apartments and condos, scheduled around your lease end and building rules.',
    intro: [
      'Uptown has one of the highest concentrations of renters in Dallas, and lease ends mean walkthroughs. A move-out cleaning covers what a quick clean misses: inside cabinets and drawers, inside the fridge and oven, baseboards, closets and every corner that was behind furniture.',
      'Moving into Uptown instead? A move-in cleaning gets the unit ready before your boxes arrive, so you unpack into clean cabinets and closets.',
    ],
    tips: [
      { title: 'Reserve the elevator', text: 'If your building requires a reservation for vendors, let us know the window.' },
      { title: 'Schedule after the movers', text: 'Book the cleaning after furniture is out so we can reach every baseboard and closet.' },
      { title: 'Check your lease', text: 'Some leases list specific cleaning items. Send us the list and we cover it.' },
    ],
    faqs: [
      { q: 'How soon can you schedule a move-out cleaning?', a: 'Call or text us with your move-out date. End-of-month dates fill up first, so the sooner you reach out the better.' },
      { q: 'How long does a Texas landlord have to return my deposit?', a: 'Under Texas law, landlords generally have 30 days after you move out and give a forwarding address to refund the deposit or send an itemized list of deductions. Our Texas move-out checklist has more details.' },
    ],
  },
  {
    service: 'move-in-move-out-cleaning',
    city: 'deep-ellum',
    seo: {
      title: 'Apartment & Loft Move Out Cleaning in Deep Ellum | Chavez',
      description: 'Move-out and move-in cleaning for Deep Ellum lofts and apartments: high ceilings, big windows, concrete floors and full kitchens. Call or text for a quote.',
    },
    h1: 'Move-out and move-in cleaning for Deep Ellum lofts and apartments',
    lead: 'Empty-unit cleaning for warehouse lofts and new apartment buildings in Deep Ellum.',
    intro: [
      'Deep Ellum lofts have high ceilings, exposed ducts, big windows and polished concrete or wood floors. Those surfaces show dust and footprints the moment the furniture is gone, which is exactly when a landlord or new tenant walks in.',
      'We clean inside cabinets and appliances, wipe ledges and window sills, detail bathrooms and finish every floor with the right product: concrete, wood or tile.',
    ],
    tips: [
      { title: 'High ledges', text: 'Tell us about lofted areas or high shelves. We clean what can be reached safely with our ladders.' },
      { title: 'Concrete floors', text: 'Sealed concrete needs a neutral cleaner, not a harsh degreaser. We bring the right one.' },
      { title: 'Street parking', text: 'Weekends are busy in Deep Ellum. Weekday cleanings are easier to schedule.' },
    ],
    faqs: [
      { q: 'Do you clean lofts with very high ceilings?', a: 'We clean everything we can reach safely, including ledges and fixtures within ladder height. For very high ducts or beams we will tell you in advance what is included.' },
      { q: 'Do you also clean offices in Deep Ellum?', a: 'Yes. We clean creative offices and studios in Deep Ellum. See our office cleaning page for Deep Ellum.' },
    ],
  },

  /* ---------------- Office cleaning (priority) ---------------- */
  {
    service: 'office-cleaning',
    city: 'uptown',
    seo: {
      title: 'Office Cleaning in Uptown Dallas | After Hours | Chavez',
      description: 'Office cleaning for Uptown Dallas suites and small offices on McKinney Ave and Cityplace: after hours, weekly or several times a week. Free walkthrough.',
    },
    h1: 'Office cleaning in Uptown Dallas',
    lead: 'Professional suites, small offices and showrooms in Uptown cleaned after hours, on the schedule your business needs.',
    intro: [
      'Uptown is home to hundreds of small and mid-size offices: real estate, law, finance, design and wellness businesses in buildings along McKinney Avenue, Cedar Springs and Cityplace. Clients walk in expecting a polished space, and your team works better in one.',
      'We start with a walkthrough, agree on a checklist (workstations, restrooms, break room, reception and conference rooms) and set a schedule outside your hours. Maria Chavez is your direct contact, and the same checklist is followed every visit.',
    ],
    tips: [
      { title: 'After-hours access', text: 'Most Uptown buildings need vendor registration or a key card for evenings. We handle it with your property manager.' },
      { title: 'Client-facing areas first', text: 'Reception, conference rooms and restrooms get priority on every visit.' },
      { title: '2–3 visits a week', text: 'Typical for small offices with a busy kitchen or frequent client visits.' },
    ],
    faqs: [
      { q: 'Do you clean small offices in Uptown Dallas?', a: 'Yes. Small and mid-size offices and suites are our focus. We clean after hours or early in the morning so your team is never interrupted.' },
      { q: 'Can you work with our building’s property manager?', a: 'Yes. We can provide the information building management needs for vendor access. Tell us their requirements when you request a quote.' },
    ],
  },
  {
    service: 'office-cleaning',
    city: 'downtown-dallas',
    seo: {
      title: 'Office Cleaning in Downtown Dallas | Commercial | Chavez',
      description: 'Office and commercial cleaning in Downtown Dallas: Main Street, Arts District and West End offices, cleaned after hours on a fixed schedule. Free walkthrough.',
    },
    h1: 'Office cleaning in Downtown Dallas',
    lead: 'Dependable after-hours cleaning for offices, nonprofits and shared suites in Downtown Dallas.',
    intro: [
      'Downtown Dallas has a mix of large towers and historic buildings converted into offices around Main Street, the Arts District and the West End. We focus on the small and mid-size tenants in those buildings: firms, startups, nonprofits and coworking suites that want a reliable cleaner without a big-contract janitorial company.',
      'You get a custom checklist, a fixed schedule and a direct line to the owner. Restrooms, kitchens and high-touch points are disinfected every visit, and periodic tasks like baseboards and interior glass are scheduled monthly.',
    ],
    tips: [
      { title: 'Historic buildings', text: 'Older downtown buildings have hardwood, tile and stone that need the right products. We adapt to each space.' },
      { title: 'Shared suites', text: 'For coworking spaces we keep common areas consistent between tenants and track supplies.' },
      { title: 'Event days', text: 'Hosting a client event? Add a touch-up clean the same day.' },
    ],
    faqs: [
      { q: 'Are you a janitorial company?', a: 'We are a locally owned cleaning company that cleans offices and small commercial spaces on a recurring schedule. That covers what most small offices mean by janitorial service: trash, restrooms, kitchens, floors and high-touch disinfection.' },
      { q: 'Do you clean on weekends?', a: 'Yes. Weekend and early-morning visits can be scheduled for offices that are busy in the evenings.' },
    ],
  },
  {
    service: 'office-cleaning',
    city: 'deep-ellum',
    seo: {
      title: 'Office & Studio Cleaning in Deep Ellum, Dallas | Chavez',
      description: 'Cleaning for Deep Ellum creative offices, studios and agencies in converted warehouses: floors, restrooms, kitchens and high ledges. Free walkthrough.',
    },
    h1: 'Office and studio cleaning in Deep Ellum',
    lead: 'Creative offices, agencies and studios in Deep Ellum’s converted warehouses, cleaned on your schedule.',
    intro: [
      'Deep Ellum offices rarely look like a standard office. Open warehouse floors, exposed brick and ducts, polished concrete, shared kitchens and lounge areas: all of it looks great clean and shows dust and footprints fast when it is not.',
      'We build a checklist for your space and clean after hours or early in the morning. Studios, agencies, tech teams and salons in Deep Ellum get the same thing our home clients praise us for: on time, thorough and easy to talk to.',
    ],
    tips: [
      { title: 'Concrete floors', text: 'We use neutral cleaners that protect sealed concrete instead of dulling it.' },
      { title: 'Shared kitchens', text: 'High-traffic kitchens and coffee bars benefit from more frequent visits.' },
      { title: 'Weekend events', text: 'If your space hosts events, book a Monday-morning reset.' },
    ],
    faqs: [
      { q: 'Do you clean salons and studios, not just offices?', a: 'Yes. Studios, salons and showrooms are cleaned with a checklist adapted to the space. Tell us what happens in each area and we plan for it.' },
      { q: 'Can we start with a one-time cleaning?', a: 'Yes. Many offices start with one deep cleaning to set a baseline, then move to a weekly schedule.' },
    ],
  },
];

export const cityBySlug = (slug: CitySlug) => cities.find((c) => c.slug === slug)!;
export const localUrl = (service: string, city: string) => `/services/${service}/${city}/`;
export const localForService = (service: string) => localPages.filter((p) => p.service === service);
export const localForCity = (city: CitySlug) => localPages.filter((p) => p.city === city);
export const localForHub = (hub: HubSlug) => localPages.filter((p) => cityBySlug(p.city).hub === hub);
