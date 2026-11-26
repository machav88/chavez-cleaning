/**
 * Service pages content (English) — Chavez House Cleaning, Dallas TX.
 *
 * Services and frequencies come from the Notion client record (basic and deep
 * cleaning; weekly, biweekly, every 3 weeks, monthly; no laundry service) and the
 * previous website (house, deep, move in/out, office, construction cleaning).
 * Keyword targets: docs/KEYWORDS.md. Nothing here promises prices, licenses,
 * insurance or response times. `status: 'validate'` = scope to confirm with Maria.
 */
import type { PhotoSlug } from './photos';

export type ChecklistGroup = { area: string; items: string[] };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  status: 'confirmed' | 'validate';
  /** Residential or commercial track (commercial pages expand in phase 2). */
  track: 'home' | 'business';
  seo: { title: string; description: string };
  h1: string;
  eyebrow: string;
  lead: string;
  /** 1–2 sentence direct answer shown first (AEO). */
  answer: string;
  cardSummary: string;
  photo: PhotoSlug;
  photoPosition?: string;
  photoAlt: string;
  intro: { heading: string; paragraphs: string[] };
  goodFor: { title: string; text: string }[];
  checklistHeading: string;
  checklistNote?: string;
  checklist: ChecklistGroup[];
  extras?: { heading: string; text: string; items: string[] };
  secondaryPhoto?: { slug: PhotoSlug; alt: string; caption?: string };
  faqs: Faq[];
  related: string[];
  cta: { heading: string; text: string };
};

const ADD_ONS = [
  'Inside the refrigerator',
  'Inside the oven',
  'Inside kitchen cabinets',
  'Interior windows and tracks',
  'Wall spot-cleaning',
  'Patio or balcony',
  'Garage sweep',
  'Dishes',
];

const KITCHEN = [
  'Wipe and polish appliance exteriors (fridge, dishwasher, range)',
  'Clean the stovetop and range front',
  'Clean the microwave inside and out',
  'Wash and disinfect sinks; polish faucets',
  'Wipe counters, backsplash and small appliances',
  'Sweep and mop the floor',
];
const BATHS = [
  'Scrub showers and tubs; remove soap scum and hard-water spots from glass',
  'Clean and disinfect toilets, counters and sinks',
  'Polish faucets, fixtures and mirrors',
  'Wipe cabinet fronts and towel bars',
  'Sweep and mop floors',
];
const LIVING = [
  'Dust furniture, shelves, décor and reachable surfaces',
  'Make beds (change linens when fresh sheets are left out)',
  'Clean glass tables and mirrors',
  'Remove visible cobwebs',
  'Vacuum carpets and rugs; sweep and mop hard floors',
  'Empty trash cans and replace liners',
];

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'house-cleaning',
    name: 'House Cleaning',
    status: 'confirmed',
    track: 'home',
    seo: {
      title: 'House Cleaning Service in Dallas, TX | Chavez House Cleaning',
      description:
        'Locally owned house cleaning and maid service in Dallas: kitchens, baths, bedrooms and floors, one-time or recurring. Call or text (972) 330-0164 for a quote.',
    },
    eyebrow: 'Our most requested service',
    h1: 'House cleaning service in Dallas, TX',
    answer:
      'Chavez House Cleaning is a locally owned house cleaning and maid service in Dallas. We clean kitchens, bathrooms, bedrooms, living areas and floors with the same checklist every visit, one time or weekly, biweekly, every 3 weeks or monthly.',
    lead:
      'A thorough, room-by-room clean of the spaces you live in every day, for houses, apartments and condos in Uptown, East Dallas and the Park Cities.',
    cardSummary: 'Room-by-room cleaning of kitchens, bathrooms, bedrooms and floors, once or on a schedule.',
    photo: 'team-living-room',
    photoAlt: 'Chavez team member cleaning a coffee table in a bright Dallas living room with hardwood floors',
    intro: {
      heading: 'What a Chavez house cleaning includes',
      paragraphs: [
        'Our general house cleaning is the service most Dallas clients start with. Life gets busy and homes get messy; we take the kitchen, bathrooms, bedrooms and living areas off your list so you can spend the weekend on something else.',
        'Every visit follows a written checklist, so you know what will be done before we arrive. Maria Chavez has more than 10 years of cleaning experience and personally oversees her team, which is why clients keep mentioning the same three things in their reviews: on time, thorough and easy to communicate with.',
        'If your home has not had a professional clean in a while, we may suggest starting with a deep cleaning first, then moving to regular visits.',
      ],
    },
    goodFor: [
      { title: 'Busy professionals', text: 'Uptown and downtown workers who would rather not spend Saturday scrubbing.' },
      { title: 'Families in Lakewood & the Park Cities', text: 'Kids, pets and a lot of floor space, kept under control.' },
      { title: 'Apartments & condos', text: 'High-rise and mid-rise units, with building access planned ahead.' },
      { title: 'Before guests', text: 'A one-time clean so the house is ready when people walk in.' },
    ],
    checklistHeading: 'House cleaning checklist',
    checklist: [
      { area: 'Kitchen', items: KITCHEN },
      { area: 'Bathrooms', items: BATHS },
      { area: 'Bedrooms & living areas', items: LIVING },
    ],
    extras: {
      heading: 'Optional add-ons',
      text: 'Ask for any of these when you request your quote so we can plan the extra time. We do not offer laundry service.',
      items: ADD_ONS,
    },
    secondaryPhoto: { slug: 'kitchen-quartz-counter', alt: 'Quartz kitchen counter and navy cabinets wiped and polished after a cleaning', caption: 'A real Chavez kitchen clean' },
    faqs: [
      { q: 'How much does house cleaning cost in Dallas?', a: 'It depends on the size of the home (bedrooms, bathrooms, square footage), its condition, the type of cleaning and any add-ons. Call or text us with those details and we will send a free quote before you book. Our cost guide explains what changes the price.' },
      { q: 'Is Chavez House Cleaning a maid service?', a: 'Yes. We are a locally owned house cleaning and maid service based in East Dallas. Our team comes to your home with a written checklist, one time or on a weekly, biweekly, every-3-weeks or monthly schedule.' },
      { q: 'Can I book just one cleaning?', a: 'Yes. One-time cleanings use the same checklist as our recurring visits. Many clients start with one visit and then decide on a schedule.' },
      { q: 'Do I need to be home during the cleaning?', a: 'No. Many clients leave entry instructions, a key or a door code. Let us know how to enter and how to handle any alarm system.' },
      { q: 'Do you do laundry?', a: 'No. We do not offer laundry service. If you leave fresh sheets out, we are happy to make the beds.' },
    ],
    related: ['deep-cleaning', 'recurring-cleaning', 'move-in-move-out-cleaning'],
    cta: { heading: 'Get a house cleaning quote', text: 'Tell us the size of your home and when you would like us to come. We reply with a free quote.' },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    status: 'confirmed',
    track: 'home',
    seo: {
      title: 'Deep Cleaning Services in Dallas, TX | Chavez House Cleaning',
      description:
        'Top-to-bottom deep cleaning for Dallas homes: baseboards, light fixtures, vents, blinds, cabinet fronts and built-up grime. See the checklist and get a quote.',
    },
    eyebrow: 'Ceiling-to-floor cleaning',
    h1: 'Deep cleaning services in Dallas, TX',
    answer:
      'A deep cleaning covers everything in a regular clean plus the spots regular upkeep skips: light fixtures, switch plates, inside window glass, trim, baseboards, door frames, vents, blinds and the corner under the bed that has not been touched in months.',
    lead:
      'The reset your home needs before starting a recurring schedule, after a busy season or before hosting in Dallas.',
    cardSummary: 'A detailed clean that adds fixtures, trim, baseboards, vents, blinds and built-up grime.',
    photo: 'kitchen-navy-range',
    photoAlt: 'Kitchen with navy cabinets, subway tile and a stainless range wiped down during a deep cleaning',
    photoPosition: '50% 60%',
    intro: {
      heading: 'When a deep cleaning makes sense',
      paragraphs: [
        'Our deep cleaning gives attention to every room from the ceiling to the floor and the spaces in between. We slow down on what a regular visit only touches: light fixtures and switch plates, inside window glass, trims, shelves, doors and door frames, under the beds and behind what can be moved safely.',
        'It is the right first visit for a home that has not had a professional clean in a while, and it makes every later visit faster because each one starts from a clean baseline.',
        'In older East Dallas homes, like the bungalows of the M Streets or the historic homes on Swiss Avenue, a deep cleaning is where wood trim, built-ins and vintage tile finally get the time they need.',
      ],
    },
    goodFor: [
      { title: 'First visit', text: 'Sets a clean baseline before weekly, biweekly, every-3-weeks or monthly service.' },
      { title: 'Seasonal reset', text: 'Spring cleaning, before Thanksgiving or the holidays, or after summer.' },
      { title: 'Before hosting', text: 'When guests will notice the details, not just the counters.' },
      { title: 'Built-up grime', text: 'Greasy kitchens, soap-scum showers, dusty vents and baseboards.' },
    ],
    checklistHeading: 'Deep cleaning checklist',
    checklistNote: 'Includes every task from our house cleaning checklist, plus:',
    checklist: [
      { area: 'Kitchen', items: ['Cabinet fronts and handles degreased', 'Range hood and backsplash detailed', 'Small appliances moved and cleaned behind', 'Baseboards, switch plates and light fixtures', 'Window sills and blinds'] },
      { area: 'Bathrooms', items: ['Grout and tile scrubbed', 'Hard-water buildup on glass and fixtures treated', 'Cabinet fronts and baseboards', 'Vents and light fixtures dusted'] },
      { area: 'Whole home', items: ['Baseboards, trim and door frames hand-wiped', 'Doors, knobs and switch plates', 'Inside window glass (reachable)', 'Ceiling fans, vents and light fixtures', 'Blinds and window sills', 'Under beds and furniture that can be moved safely'] },
    ],
    extras: { heading: 'Popular deep cleaning add-ons', text: 'Add them when you request your quote.', items: ADD_ONS },
    secondaryPhoto: { slug: 'bathroom-modern', alt: 'Modern bathroom with glass shower and double vanity, clean and dry' },
    faqs: [
      { q: 'What is the difference between deep cleaning and regular cleaning?', a: 'Regular cleaning keeps visible surfaces clean. Deep cleaning adds light fixtures, switch plates, trim, baseboards, door frames, vents, blinds, inside window glass and built-up grime. See our full guide on deep vs. regular cleaning.' },
      { q: 'How long does a deep cleaning take?', a: 'Longer than a regular visit. The time depends on the size of the home and its condition; we give you an estimate after you tell us about it.' },
      { q: 'How often should a Dallas home get a deep cleaning?', a: 'Most homes do well with a deep cleaning once or twice a year plus regular visits in between. Homes with pets, kids, a recent remodel or a lot of North Texas dust may need it more often.' },
      { q: 'Should I book a deep cleaning before recurring service?', a: 'Usually, yes. Starting from a deep-cleaned baseline makes weekly or biweekly visits faster and more consistent.' },
    ],
    related: ['house-cleaning', 'recurring-cleaning', 'move-in-move-out-cleaning'],
    cta: { heading: 'Book a deep cleaning', text: 'Tell us about your home and its condition. We reply with a free quote and the checklist.' },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'recurring-cleaning',
    name: 'Weekly & Biweekly Cleaning',
    status: 'confirmed',
    track: 'home',
    seo: {
      title: 'Weekly, Biweekly & Monthly House Cleaning in Dallas, TX',
      description:
        'Recurring house cleaning in Dallas: weekly, biweekly, every 3 weeks or monthly, with the same checklist every visit. Locally owned, on time. Free quote.',
    },
    eyebrow: 'Weekly · biweekly · every 3 weeks · monthly',
    h1: 'Weekly, biweekly and monthly house cleaning in Dallas',
    answer:
      'Recurring cleaning means our team comes back on a fixed schedule (every week, every two weeks, every three weeks or once a month) and repeats the same checklist each time, so your Dallas home stays clean without you having to book again.',
    lead: 'The easiest way to keep a home consistently clean: pick a schedule once and we take it from there.',
    cardSummary: 'The same checklist every week, 2 weeks, 3 weeks or month.',
    photo: 'living-room-hardwood',
    photoAlt: 'Clean living room with navy sectional and shining hardwood floors in a Dallas home',
    intro: {
      heading: 'How recurring cleaning works',
      paragraphs: [
        'Most of our long-term clients are on a schedule. As one of them wrote on Google, “Maria and her team have been cleaning our home for several months. They always arrive on time, communicate expectations clearly, and leave our home sparkling clean.”',
        'You choose weekly, biweekly, every 3 weeks or monthly. We repeat the same checklist each visit (kitchen, bathrooms, bedrooms, living areas and floors) and you can add extras like the inside of the fridge or oven when you need them.',
        'If travel, guests or a new baby change your routine, tell us and we adjust the schedule with you.',
      ],
    },
    goodFor: [
      { title: 'Weekly', text: 'Large homes, families with kids or pets, and people who host often.' },
      { title: 'Biweekly', text: 'The most popular choice: kitchens and baths never get out of hand.' },
      { title: 'Every 3 weeks', text: 'A middle ground for couples and small households who tidy up in between.' },
      { title: 'Monthly', text: 'Smaller apartments and condos, or a monthly reset on top of your own upkeep.' },
    ],
    checklistHeading: 'What every recurring visit covers',
    checklist: [
      { area: 'Kitchen', items: KITCHEN },
      { area: 'Bathrooms', items: BATHS },
      { area: 'Bedrooms & living areas', items: LIVING },
    ],
    extras: { heading: 'Rotate these extras between visits', text: 'Many clients add one extra per visit so the whole home stays on track.', items: ADD_ONS },
    secondaryPhoto: { slug: 'sunroom-sofa-rug', alt: 'Sunroom with tall windows and a velvet sofa after a recurring cleaning' },
    faqs: [
      { q: 'Which schedule should I choose?', a: 'Biweekly works for most Dallas households. Weekly suits large homes, families with pets and frequent hosts; every 3 weeks or monthly suits smaller apartments or people who keep up with daily tidying.' },
      { q: 'Do I need a deep cleaning first?', a: 'If the home has not been professionally cleaned recently, we recommend one deep cleaning first so regular visits start from a clean baseline.' },
      { q: 'Can I skip or move a visit?', a: 'Yes. Let us know as early as you can and we will find another day that works.' },
    ],
    related: ['house-cleaning', 'deep-cleaning', 'office-cleaning'],
    cta: { heading: 'Set up your cleaning schedule', text: 'Tell us your home size and preferred frequency. We will reply with a free quote.' },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    status: 'confirmed',
    track: 'home',
    seo: {
      title: 'Move Out Cleaning in Dallas, TX | Move-In Cleaning | Chavez',
      description:
        'Move-out and move-in cleaning for Dallas apartments, condos and homes: inside cabinets, appliances, baseboards and floors. Get your deposit back. Free quote.',
    },
    eyebrow: 'Empty-home cleaning',
    h1: 'Move-out and move-in cleaning in Dallas',
    answer:
      'A move-out or move-in cleaning is a deep cleaning of an empty home: inside cabinets and drawers, inside appliances, baseboards, fixtures and floors, so a landlord, buyer or new tenant finds it ready.',
    lead: 'For renters who want their full deposit back, sellers getting ready to list and families moving into a new Dallas home.',
    cardSummary: 'Empty-home deep cleaning, inside cabinets and appliances, for renters, buyers and sellers.',
    photo: 'empty-apartment',
    photoAlt: 'Empty apartment with light wood floors and white walls ready for move-in',
    intro: {
      heading: 'Why a move cleaning is different',
      paragraphs: [
        'Once the furniture is gone, every scuff, crumb line and dusty baseboard shows. A move-out cleaning targets those areas that go unnoticed while a home is lived in, so you can hand back the keys with confidence.',
        'Move-in cleaning is the same deep clean before your family and belongings arrive: cabinets and drawers wiped inside before you unpack, bathrooms disinfected and floors cleaned while the rooms are still empty.',
        'Uptown, Oak Lawn and Deep Ellum have a lot of apartments and lofts, so we schedule many of these around lease end dates and building move-out rules.',
      ],
    },
    goodFor: [
      { title: 'Renters', text: 'Leave the unit the way your lease expects at walkthrough.' },
      { title: 'Sellers', text: 'A clean, empty home photographs and shows better.' },
      { title: 'Buyers & new tenants', text: 'Start fresh before you unpack anything.' },
      { title: 'Property managers', text: 'Turnovers between tenants, scheduled around your dates.' },
    ],
    checklistHeading: 'Move-in / move-out cleaning checklist',
    checklist: [
      { area: 'Kitchen', items: ['Inside and outside of cabinets and drawers', 'Inside the refrigerator and freezer', 'Inside the oven and microwave', 'Range hood, stovetop and backsplash', 'Sinks, faucets and counters', 'Floor swept and mopped, including edges'] },
      { area: 'Bathrooms', items: ['Inside vanities and medicine cabinets', 'Showers, tubs, glass and tile scrubbed', 'Toilets cleaned and disinfected', 'Mirrors, fixtures and floors'] },
      { area: 'Every room', items: ['Baseboards, trim and door frames', 'Inside closets and shelves', 'Light switches, outlets covers and door knobs', 'Window sills and blinds', 'Ceiling fans and light fixtures', 'Floors vacuumed, swept and mopped'] },
    ],
    secondaryPhoto: { slug: 'open-living-kitchen', alt: 'Open living room and kitchen with light floors, ready for new residents' },
    faqs: [
      { q: 'Will a move-out cleaning get my deposit back?', a: 'A professional move-out cleaning removes the most common cleaning deductions, but the final decision belongs to your landlord, and damage beyond normal wear is not a cleaning issue. In Texas, landlords generally have 30 days after you move out (and give a forwarding address) to refund the deposit or itemize deductions. See our Texas move-out checklist.' },
      { q: 'Does the home need to be empty?', a: 'Yes, ideally. Cleaning works best once furniture and boxes are out, so we can reach inside cabinets, closets and along every baseboard.' },
      { q: 'Do you clean apartments in Uptown and Deep Ellum?', a: 'Yes. Tell us the building and any move-out rules (elevator reservations, loading zones, hours) and we plan around them.' },
    ],
    related: ['deep-cleaning', 'post-construction-cleaning', 'house-cleaning'],
    cta: { heading: 'Schedule your move cleaning', text: 'Share the move date, the size of the home and whether it will be empty. We reply with a free quote.' },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    status: 'confirmed',
    track: 'business',
    seo: {
      title: 'Office Cleaning Services in Dallas, TX | Chavez Cleaning',
      description:
        'Office cleaning for dental offices, law firms and small businesses in Dallas. After-hours schedules, custom checklist. Call (972) 330-0164 for a quote.',
    },
    eyebrow: 'Dental offices · law firms · small businesses',
    h1: 'Office cleaning services in Dallas, TX',
    answer:
      'Chavez House Cleaning cleans offices, studios and small commercial spaces in Uptown, Downtown, Deep Ellum and East Dallas on a schedule built around your hours: after closing, early morning or on weekends, weekly or several times a week.',
    lead:
      'A clean workspace tells clients and employees how you run your business. We build a custom cleaning plan around your hours and your workflow, so your team can focus on the work that moves the business forward.',
    cardSummary: 'Custom cleaning plans for offices, studios and small commercial spaces, after hours.',
    photo: 'office-open-plan',
    photoAlt: 'Open-plan office with desks, monitors and large windows, cleaned and ready for the workday',
    intro: {
      heading: 'Office cleaning that fits around your business',
      paragraphs: [
        'Your business has a mission and clients to keep happy. The state of your office or store speaks for you before anyone says a word, and a clean workspace also helps keep sick days down. That is why we do not sell a one-size package: we walk through your space, agree on a checklist and a schedule, and repeat it consistently.',
        'Most of the offices we clean are small and mid-size: dental offices, law firms, professional suites in Uptown and on McKinney Avenue, downtown offices in converted buildings, creative studios in Deep Ellum, and storefronts in East Dallas. We usually work after hours or early in the morning so nobody has to work around us.',
        'The same things clients praise us for at home matter even more in an office: showing up when we said we would, clear communication, and the same quality every visit. Maria Chavez sets up each new office personally and stays your direct contact.',
      ],
    },
    goodFor: [
      { title: 'Dental offices', text: 'Waiting rooms, front desk, restrooms and break rooms kept spotless for patients, after hours.' },
      { title: 'Law firms & professional offices', text: 'Law, real estate, insurance and financial offices in Uptown and Downtown.' },
      { title: 'Creative studios', text: 'Agencies, salons and studios in Deep Ellum and Lower Greenville.' },
      { title: 'Small retail & showrooms', text: 'Storefronts that need to look sharp before opening.' },
      { title: 'Shared suites & coworking', text: 'Common areas, kitchens and restrooms kept consistent between tenants.' },
    ],
    checklistHeading: 'Office cleaning checklist (customized for each space)',
    checklistNote: 'We confirm the final checklist with you during the walkthrough.',
    checklist: [
      { area: 'Workstations & common areas', items: ['Dust and wipe desks, tables and shelves (without moving papers)', 'Disinfect high-touch points: door handles, switches, railings, phones', 'Clean glass doors, partitions and entry glass', 'Empty trash and recycling; replace liners', 'Vacuum carpets; sweep and mop hard floors'] },
      { area: 'Restrooms', items: ['Clean and disinfect toilets, urinals, sinks and counters', 'Polish mirrors and fixtures', 'Refill soap, paper towels and toilet paper (client-supplied)', 'Mop floors'] },
      { area: 'Break room & kitchen', items: ['Clean counters, sinks and tables', 'Wipe appliance exteriors and the microwave inside and out', 'Load the dishwasher when requested', 'Sweep and mop'] },
      { area: 'Reception & conference rooms', items: ['Reception desk and seating wiped and dusted', 'Conference tables and chairs cleaned', 'Whiteboards wiped on request', 'Entryway and mats cleaned'] },
    ],
    extras: { heading: 'Periodic office tasks', text: 'Scheduled monthly or quarterly as part of your plan.', items: ['Baseboards and vents', 'Interior windows and partitions', 'Inside the office refrigerator', 'Blinds and window sills', 'Light fixtures', 'Deep cleaning of restrooms'] },
    secondaryPhoto: { slug: 'kitchen-quartz-counter', alt: 'Clean quartz counter and cabinets in a break room after an office cleaning' },
    faqs: [
      { q: 'How much does office cleaning cost in Dallas?', a: 'It depends on the square footage, how many restrooms and kitchens the space has, how many times a week you need us and what is on the checklist. After a short walkthrough we give you a fixed quote per visit or per month. Our office cleaning cost guide explains the factors.' },
      { q: 'Do you clean dental offices and law firms?', a: 'Yes. Dental offices and law firms are a big part of our office work: waiting rooms, front desks, private offices, restrooms and break rooms, cleaned after hours so patients and clients always walk into a clean space. Clinical sterilization of dental instruments and treatment equipment stays with your staff.' },
      { q: 'Do you clean after business hours?', a: 'Yes. Most offices we clean are done after closing, early in the morning or on weekends, so your team never has to work around us.' },
      { q: 'How often should an office be cleaned?', a: 'Most small offices do well with one to three visits per week. Offices with heavy foot traffic, a busy break room or client-facing areas usually need more frequent visits for restrooms and kitchens.' },
      { q: 'Which areas do you cover for office cleaning?', a: 'Uptown, Downtown Dallas, Deep Ellum, Knox-Henderson, Oak Lawn, Lower Greenville and East Dallas, plus Richardson, Plano, Allen, Carrollton, Addison, Garland, Irving and Mesquite.' },
      { q: 'Do you provide supplies?', a: 'We bring our own cleaning products and equipment. Consumables such as toilet paper, soap and paper towels are usually supplied by the office, and we restock them.' },
    ],
    related: ['post-construction-cleaning', 'deep-cleaning', 'move-in-move-out-cleaning'],
    cta: { heading: 'Request an office walkthrough', text: 'Tell us your square footage, how often you need us and your business hours. We reply with a free quote.' },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    status: 'confirmed',
    track: 'business',
    seo: {
      title: 'Post Construction Cleaning in Dallas, TX | Chavez Cleaning',
      description:
        'Post-construction and after-remodel cleaning in Dallas: fine dust, residue, windows, fixtures and floors, ready for move-in or handover. Contractors welcome.',
    },
    eyebrow: 'After building or remodeling',
    h1: 'Post-construction cleaning in Dallas',
    answer:
      'Post-construction cleaning removes the fine dust, paint specks, adhesive and residue left after building or remodeling, from vents and cabinets to windows and floors, so a home or commercial space is ready to hand over or move into.',
    lead: 'For homeowners finishing a remodel and contractors who need a space ready for their clients.',
    cardSummary: 'Dust and residue removal after a build or remodel, ready for handover.',
    photo: 'new-construction-drywall',
    photoAlt: 'New construction interior with fresh drywall and a wood staircase before final cleaning',
    intro: {
      heading: 'The last step of every project',
      paragraphs: [
        'Post-construction cleanup is an important part of any new construction or remodel. Construction dust settles everywhere (inside cabinets, on top of door frames, in vents and window tracks) and comes back for weeks if it is only wiped from the surfaces you can see.',
        'Contractors rely on us to make sure a new home or business space is ready to hand over to their clients, and homeowners call us after remodeling a kitchen or bathroom in older East Dallas homes. We leave no stone unturned.',
      ],
    },
    goodFor: [
      { title: 'General contractors & builders', text: 'Final clean before walkthrough and handover.' },
      { title: 'Kitchen & bath remodels', text: 'Dust removed from the whole house, not only the remodeled room.' },
      { title: 'Commercial build-outs', text: 'Office suites and storefronts ready for opening day.' },
    ],
    checklistHeading: 'Post-construction cleaning checklist',
    checklist: [
      { area: 'Dust removal', items: ['Vacuum and wipe walls, trim and baseboards', 'Inside cabinets, drawers and closets', 'Tops of door frames, ledges and shelves', 'Vent covers, ceiling fans and light fixtures', 'Window sills and tracks'] },
      { area: 'Surfaces & fixtures', items: ['Remove stickers, light paint specks and adhesive residue', 'Clean and polish counters, sinks and fixtures', 'Clean appliances inside and out', 'Wash interior glass and mirrors'] },
      { area: 'Floors', items: ['Vacuum all floors and edges', 'Mop hard floors with the right product for the surface'] },
    ],
    secondaryPhoto: { slug: 'loft-living-room', alt: 'Long renovated living room with beams and light floors after final cleaning' },
    faqs: [
      { q: 'What does post-construction cleaning include?', a: 'Dust removal from walls, trim, cabinets, vents, fixtures, windows and floors, plus residue like stickers, light paint specks and adhesive. Our guide explains each phase.' },
      { q: 'When should the cleaning be scheduled?', a: 'After the trades are finished and the large debris is gone. For big projects, many contractors book a rough clean and a final touch-up before handover.' },
      { q: 'Do you haul away construction debris?', a: 'No. Debris removal and hauling should be handled by the contractor. We focus on dust, residue and getting the space ready to use.' },
    ],
    related: ['office-cleaning', 'move-in-move-out-cleaning', 'deep-cleaning'],
    cta: { heading: 'Tell us about your project', text: 'Share what was built or renovated, the approximate size and the date the work will be finished.' },
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const serviceUrl = (slug: string) => `/services/${slug}/`;
