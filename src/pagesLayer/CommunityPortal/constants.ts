import type {
  ContentFlow,
  Decision,
  HeroStat,
  OutcomeGroup,
  ProblemPoint,
  RoadmapItem,
  Vertical,
} from './types';

export const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_STATS: HeroStat[] = [
  { value: '200+', numericValue: 200, suffix: '+', label: 'Businesses', sublabel: 'discovered and enriched automatically' },
  { value: '8', numericValue: 8, label: 'Verticals', sublabel: 'each with its own data pipeline' },
  { value: '2', numericValue: 2, label: 'Production Apps', sublabel: 'portal + admin, zero sync' },
  { value: '1', numericValue: 1, label: 'Developer', sublabel: 'architecture to production' },
];

// ─── Problem Context ─────────────────────────────────────────────────────────

export const PROBLEM_POINTS: ProblemPoint[] = [
  {
    title: 'Scattered Information',
    description: 'Businesses, events, housing, and job listings were scattered across Facebook groups, Telegram chats, and word of mouth. Finding reliable, up-to-date information meant scrolling through endless feeds with no search, no filters, and no structure.',
    icon: '📱',
  },
  {
    title: 'No Quality Control',
    description: 'Without moderation, listings were full of spam, outdated content, and unverified businesses. There was no way to report bad actors, verify legitimacy, or ensure that posted information was still accurate.',
    icon: '🚫',
  },
  {
    title: 'Language Barrier',
    description: 'The community needed a platform that works natively in both Ukrainian and Spanish - not just translated labels, but fully localized UX including content, validation messages, date formats, and culturally appropriate flows.',
    icon: '🌐',
  },
  {
    title: 'Manual Data Decay',
    description: 'All information was entered manually and quickly became outdated. Business hours changed, events passed, housing got rented - but listings stayed up indefinitely. No automated enrichment, no expiration, no cleanup.',
    icon: '✏️',
  },
];

// ─── Content Engine ──────────────────────────────────────────────────────────

export const CONTENT_FLOWS: ContentFlow[] = [
  {
    id: 'discovery',
    title: 'Business Discovery',
    subtitle: 'Google Places API finds and enriches businesses automatically',
    steps: [
      { step: 1, text: 'Google Places Text Search runs queries across all Spanish cities, looking for Ukrainian-relevant businesses' },
      { step: 2, text: 'Three-layer relevance filtering: Cyrillic in name, .ua domains in website, Ukrainian-language Google reviews' },
      { step: 3, text: 'Matched businesses get auto-enriched: coordinates, working hours, photos, Google rating, and reviews' },
      { step: 4, text: 'Combined trust score merges portal reviews + Google reviews so users see one reliable rating' },
      { step: 5, text: 'Result: 200+ businesses on the platform from day one - no manual data entry, no empty directory' },
    ],
    color: 'var(--accent)',
  },
  {
    id: 'aggregation',
    title: 'Event Aggregation',
    subtitle: 'Community events collected from public sources and normalized',
    steps: [
      { step: 1, text: 'Aggregate event data from Ukrainian diaspora platforms, ticketing services, and community channels' },
      { step: 2, text: 'Normalize unstructured data into structured listings: title, date, venue, price, ticket URL' },
      { step: 3, text: 'Deduplicate by external URL to prevent the same concert from appearing twice' },
      { step: 4, text: 'Google Geocoding API resolves venue addresses to coordinates for interactive map placement' },
      { step: 5, text: 'Result: 80+ events covering concerts, stand-up, exhibitions, cultural festivals - no content team needed' },
    ],
    color: '#3b82f6',
  },
  {
    id: 'lifecycle',
    title: 'Automated Lifecycle',
    subtitle: 'Platform maintains data quality without manual intervention',
    steps: [
      { step: 1, text: 'User-submitted listings enter moderation: 8-point quality checklist with audit trail for every decision' },
      { step: 2, text: 'On approval: auto-trigger Google Places enrichment for businesses and shipping services' },
      { step: 3, text: 'Daily cron: archive expired events, stale housing, and one-time meetups past their date' },
      { step: 4, text: 'Weekly cron: detect and clean orphaned files in Vercel Blob storage' },
      { step: 5, text: 'Daily cron: compile unread notifications into digest emails and send via Resend' },
    ],
    color: '#f59e0b',
  },
];

// ─── Platform Verticals ──────────────────────────────────────────────────────

export const VERTICALS: Vertical[] = [
  { name: 'Business Directory', dataSource: 'Google Places API', description: 'Auto-discovered, enriched with hours/photos/ratings, owner verification with document upload', color: 'var(--accent)' },
  { name: 'Community Events', dataSource: 'Public aggregation', description: 'Sourced from ticketing platforms and community channels, geocoded for map view, auto-archived on expiry', color: '#3b82f6' },
  { name: 'Job Board', dataSource: 'Community channels', description: 'Curated from community sources, employer verified via Google Places, 90-day auto-expiration', color: '#f59e0b' },
  { name: 'Housing Board', dataSource: 'User submissions', description: 'Rent, share, short-term, sale - moderated listings with auto-expiration and map search', color: '#ec4899' },
  { name: 'Classifieds', dataSource: 'User submissions', description: '16 categories for buying, selling, and giving away items within the community', color: '#8b5cf6' },
  { name: 'Shipping Directory', dataSource: 'Pre-populated + enriched', description: '31 ES-UA delivery services with Google Places verification and four delivery modes', color: '#06b6d4' },
  { name: 'Community Meetups', dataSource: 'Seeded + user-driven', description: 'Recurring meetups with auto-approval for low friction, rrule-based scheduling', color: '#14b8a6' },
  { name: 'Resume Board', dataSource: 'User submissions', description: 'PDF upload to Vercel Blob, professional categories, cross-linked with job board', color: '#f97316' },
];

// ─── Architectural Decisions ─────────────────────────────────────────────────

export const DECISIONS: Decision[] = [
  {
    title: 'Self-populating content pipeline',
    context: 'A community platform is only useful when it has content. Waiting for users to manually submit and fill out every field means the platform launches empty and stays empty.',
    solution: 'Batch CLI pipeline: discover → import → enrich → validate. Google Places Text Search finds businesses by city, filters by relevance, and populates listings automatically.',
    alternative: 'Seed manually, rely on organic user submissions.',
    why: 'One pipeline run populates an entire city with verified data. The platform launched with 200+ enriched businesses on day one, not an empty directory waiting for submissions.',
    effect: 'Cold start problem solved. Every business gets coordinates, photos, hours, and ratings before a single user signs up.',
  },
  {
    title: 'Two apps, one database, zero sync',
    context: 'The platform needs a public portal optimized for end users and an internal admin panel optimized for data-heavy moderation workflows. Different audiences, different UX requirements.',
    solution: 'Two independent Next.js apps sharing PostgreSQL via identical Prisma schema. Portal uses shadcn/ui. Admin uses MUI + DataGrid. Separate auth, separate deployments.',
    alternative: 'Single app with role-based route protection and shared UI framework.',
    why: 'Admin deploys independently without risking the public site. UI framework matches the use case: shadcn for consumer UX, MUI for admin data tables. No bundle penalty for end users.',
    effect: 'Both apps operate on live data with zero sync. Each ships on its own cycle. Admin outages never affect the public portal.',
  },
  {
    title: 'Three-strategy Google Places matching',
    context: 'Matching user-submitted business data to Google Places is unreliable. Names are spelled differently, addresses are incomplete, phone formats vary between countries.',
    solution: 'Cascading search: phone number first (most unique), then name+address, then address-only. Results filtered by Haversine distance (2km radius) and Dice coefficient fuzzy name matching.',
    alternative: 'Single-strategy search with manual fallback for mismatches.',
    why: 'Phone-first catches most matches instantly. Fuzzy name matching handles transliteration differences (Cyrillic/Latin). The cascade maximizes match rate without false positives.',
    effect: 'Matched businesses get coordinates, photos, hours, and ratings automatically. Combined portal + Google review scores give users trustworthy signals from day one.',
  },
];

// ─── Outcomes ────────────────────────────────────────────────────────────────

export const OUTCOME_GROUPS: OutcomeGroup[] = [
  {
    title: 'Launched With Content, Not Empty',
    icon: '🔍',
    items: [
      '200+ businesses discovered and enriched via Google Places before the first user signed up',
      '80+ events aggregated from public community sources across Spain',
      '31 shipping services pre-populated and verified for the ES-UA corridor',
      'One CLI command populates a new city with enriched, verified data',
    ],
    color: 'var(--accent)',
  },
  {
    title: 'Runs Itself After Launch',
    icon: '⚙️',
    items: [
      'Cron-driven lifecycle: expired content auto-archives, orphaned files auto-clean, digests auto-send',
      '8-point moderation checklist with full audit trail for every decision',
      'E2E test coverage of full CRUD lifecycle for all 8 entity types',
      'Sentry monitoring + Vercel Analytics in production from day one',
    ],
    color: '#3b82f6',
  },
  {
    title: 'Built and Maintained Solo',
    icon: '🚀',
    items: [
      'Two independent apps (portal + admin) with separate deployments and UI frameworks',
      'Unified entity pattern: adding a new content vertical follows the same proven structure',
      'Polymorphic moderation system serves all 8 entity types from single tables',
      'Full delivery: architecture, data pipelines, moderation, testing, production - one developer',
    ],
    color: '#f59e0b',
  },
];

// ─── Roadmap ─────────────────────────────────────────────────────────────────

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    title: 'AI Content Moderation',
    description: 'LLM pre-screens every listing against the 8-point quality checklist before human review. Flags spam, low-quality descriptions, and miscategorized content automatically - reducing moderator workload to edge cases only.',
    icon: '🤖',
    color: 'var(--accent)',
  },
  {
    title: 'Auto-Publishing to Social Media',
    description: 'New approved listings, events, and community meetups automatically generate localized posts for Instagram and Telegram. AI adapts tone and format per channel - the platform markets itself without a social media manager.',
    icon: '📣',
    color: '#3b82f6',
  },
  {
    title: 'Semantic Search Across All Verticals',
    description: 'Natural language queries like "Ukrainian hairdresser near Valencia" search across businesses, events, jobs, and housing simultaneously. Powered by embeddings and vector similarity - not just keyword matching.',
    icon: '🔎',
    color: '#8b5cf6',
  },
];
