import type {
  Decision,
  Flow,
  HeroStat,
  OutcomeGroup,
  ProblemPoint,
  Repository,
} from './types';

export const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_STATS: HeroStat[] = [
  { value: '18', numericValue: 18, label: 'Studios', sublabel: 'managed through one system' },
  { value: '5', numericValue: 5, label: 'Countries', sublabel: '6 languages, 4 currencies' },
  { value: '30k+', suffix: '+', label: 'MAU', sublabel: 'monthly active users' },
  { value: '1', numericValue: 1, label: 'Developer', sublabel: '7 services, sole ownership' },
];

// ─── Problem Context ─────────────────────────────────────────────────────────

export const PROBLEM_POINTS: ProblemPoint[] = [
  {
    title: 'Single-App Bottleneck',
    description: 'Everything lived in one repository - booking, content, admin, AI, analytics. Every deployment risked the entire system, and teams stepped on each other\'s changes.',
    icon: '⚠️',
  },
  {
    title: 'CRM Wasn\'t Enough',
    description: 'Altegio handled basic booking but had no support for multi-language content, loyalty programs, payment processing, or marketing attribution. The business was outgrowing its tools.',
    icon: '🔧',
  },
  {
    title: 'Multi-Country Complexity',
    description: 'Each new country needed its own domain, local SEO, currency, payment integration, and localized content. The architecture wasn\'t built for this kind of expansion.',
    icon: '🌍',
  },
  {
    title: 'No Data Visibility',
    description: 'There was no way to track a user from their first ad click through to a completed booking and beyond. Marketing spend decisions were based on gut feeling, not attribution data.',
    icon: '📊',
  },
];

// ─── Repositories ────────────────────────────────────────────────────────────

export const REPOSITORIES: Repository[] = [
  {
    id: 'frontend',
    name: 'Booking Application',
    label: 'Core Product',
    responsibility: 'The main user-facing application where everything conversion-critical happens - booking appointments, processing payments, managing profiles, and earning loyalty rewards.',
    scale: ['Booking · Payments · Loyalty', '6 languages', 'Multi-step wizard'],
    stack: ['Next.js 16', 'React 19', 'Prisma 7', 'Stripe', 'Zustand', 'TanStack Query'],
    keyFeatures: [
      'Multi-step booking wizard with real-time availability',
      'Comprehensive Personal Cabinet (visit history, active packages, profile)',
      'Stripe payments: Card, Express Checkout, Bank Transfer',
      'Loyalty system with subscription packages and visit tracking',
      'AI Consultant widget with message streaming',
      '6 languages with i18next (8 namespaces per locale)',
    ],
    whySeparated: 'This is the conversion-critical path - it needs its own deployment cycle so booking and payments are never disrupted by content or admin changes.',
    color: 'var(--accent)',
    links: [{ label: 'loveepil.com', href: 'https://loveepil.com' }],
  },
  {
    id: 'country',
    name: 'Regional Country Sites',
    label: 'Acquisition Layer',
    responsibility: 'Five regional domains (loveepil.pl, .ua, .de, .es, .uk) that serve as the top of the funnel - attracting visitors through SEO, educating them about services, and guiding them toward booking.',
    scale: ['5 country domains', 'Localized SEO suite', 'Multi-pixel tracking'],
    stack: ['Next.js 16', 'React 19', 'Prisma 6', 'Nuqs', 'Google Maps'],
    keyFeatures: [
      'Per-country domains with full SEO suite (JSON-LD, OG images)',
      'Studio finder with Google Maps integration',
      'Blog system powered by Strapi with 1-hour ISR',
      'Multi-pixel tracking: GTM, Facebook, TikTok, MS Clarity',
    ],
    whySeparated: 'Each country lives on its own domain with unique SEO requirements. Acquisition content changes frequently and independently from the core booking flow.',
    color: '#3b82f6',
    links: [
      { label: '.pl', href: 'https://loveepil.pl' },
      { label: '.ua', href: 'https://loveepil.ua' },
      { label: '.de', href: 'https://loveepil.de' },
      { label: '.es', href: 'https://loveepil.es' },
      { label: '.uk', href: 'https://loveepil.uk' },
    ],
  },
  {
    id: 'admin',
    name: 'Internal Admin Panel',
    label: 'Operations Control',
    responsibility: 'The internal operations hub where the team manages everything - bookings, payments, translations, content, feedback, and studio configurations.',
    scale: ['133 server actions', 'RBAC system', 'Stripe webhooks', '4 cron jobs'],
    stack: ['Next.js 16', 'MUI 7 + Toolpad', 'Prisma 7', 'Zod 4', 'AI SDK'],
    keyFeatures: [
      'RBAC with 3 permission categories and 4 action levels',
      'Stripe webhook pipeline handling full payment lifecycle',
      'DeepL API integration for AI-powered translations across 6 locales',
      '4 cron jobs automating feedback, reminders, and cleanup',
    ],
    whySeparated: 'Internal tools have different auth flows (RBAC), different deployment cadence, and different security requirements than the public-facing products.',
    color: '#f59e0b',
  },
  {
    id: 'ai',
    name: 'AI Agent Service',
    label: 'AI Consultant',
    responsibility: 'An intelligent assistant that helps users find studios, browse services, build carts, and book appointments - through natural conversation across four communication channels.',
    scale: ['21 LLM tools', 'Fine-tuned GPT', '4 channels', 'pgvector search'],
    stack: ['Next.js 16', 'OpenAI GPT-4.1-mini', 'Vercel AI SDK', 'pgvector', 'Langfuse'],
    keyFeatures: [
      'Brain-first architecture - LLM decides tool order, no rigid FSM',
      'Multi-channel: Website, Instagram, Facebook, Telegram',
      'pgvector knowledge base with semantic similarity search',
      'Full observability via Langfuse OpenTelemetry tracing',
    ],
    whySeparated: 'AI has its own lifecycle - fine-tuning, prompt iteration, and model deployment happen independently. It also needs its own database (pgvector) for embeddings.',
    color: '#8b5cf6',
  },
  {
    id: 'analytics',
    name: 'Analytics Engine',
    label: 'Analytics Platform',
    responsibility: 'An independent analytics system that tracks the full user journey - from the first ad click through booking completion - with custom attribution modeling and revenue tracking.',
    scale: ['19 dashboards', 'Own database', 'Attribution model', '6 cron jobs'],
    stack: ['Next.js 16', 'Prisma 6', 'MUI X Charts', 'MUI X DataGrid', 'Vitest'],
    keyFeatures: [
      'Multi-touch attribution: first-touch (immutable) + last-touch (non-direct-last-click)',
      'Lead lifecycle tracking: PENDING → SCHEDULED → COMPLETED → EXPIRED',
      'Revenue normalization via ECB exchange rates (daily sync)',
      'Real-time ingestion through Vercel Analytics Drain',
    ],
    whySeparated: 'Analytics queries are expensive and fundamentally different from product queries. Its own database prevents analytics from slowing down booking or admin operations.',
    color: '#ec4899',
  },
  {
    id: 'strapi',
    name: 'Headless CMS',
    label: 'Content Management',
    responsibility: 'A headless CMS where the content team manages blog posts, career listings, device descriptions, and promotional offers - without touching code.',
    scale: ['7 content types', '5 locales', 'DeepL auto-translate', 'Blog · Career · Offers'],
    stack: ['Strapi 4.25', 'TypeScript', 'PostgreSQL', 'DeepL', 'pdfkit'],
    keyFeatures: [
      'CKEditor WYSIWYG for rich content editing',
      'DeepL plugin for automatic translation across 5 locales',
      'Career CV pipeline: form → Strapi → Telegram HR-bot → PDF generation',
      'Lifecycle hooks for URL path uniqueness validation per locale',
    ],
    whySeparated: 'Content teams need CMS independence - they publish blog posts and career listings without engineering involvement or deployment risk.',
    color: '#06b6d4',
  },
  {
    id: 'emails',
    name: 'Email Render Engine',
    label: 'Email Platform',
    responsibility: 'A rendering engine for all transactional emails - booking confirmations, payment receipts, feedback requests, and treatment recommendations.',
    scale: ['7 templates', '6 languages', 'Edge Runtime', 'Context-aware content'],
    stack: ['Next.js 15', 'React Email', 'i18next', 'Prisma 6', 'Tailwind CSS 4'],
    keyFeatures: [
      'Context-aware treatment recommendations per gender, device, and locale',
      'Multi-currency price formatting per country',
      'React Server Components rendered to HTML strings via render()',
      'Pre/post-treatment images specific to device type (Onda/Endo)',
    ],
    whySeparated: 'Email templates change independently from the rest of the system. They run on Edge Runtime and are consumed by multiple services via Resend.',
    color: '#14b8a6',
  },
];

// ─── Cross-System Flows ──────────────────────────────────────────────────────

export const FLOWS: Flow[] = [
  {
    id: 'acquisition',
    title: 'Acquisition → Conversion',
    subtitle: 'From first visit to completed booking',
    steps: [
      { step: 1, text: 'User lands on a regional domain (loveepil.pl, .de, .es...) via organic search or paid ads' },
      { step: 2, text: 'Tracking pixels fire - GTM, Facebook, TikTok - events flow to Vercel Analytics Drain → Analytics platform' },
      { step: 3, text: 'User browses localized domains, finds a studio via Google Maps, reads blog content from Strapi' },
      { step: 4, text: 'Clicks "Book Now" → handed off to core frontend → multi-step booking wizard with Payments & profile' },
      { step: 5, text: 'Completes payment via Stripe → webhook → admin processes → confirmation email → feedback cron in 24h' },
    ],
    color: 'var(--accent)',
  },
  {
    id: 'ai-consultation',
    title: 'AI Consultation',
    subtitle: 'Multi-channel intelligent assistance',
    steps: [
      { step: 1, text: 'User writes in the website widget, Instagram DM, Facebook Messenger, or Telegram' },
      { step: 2, text: 'AI service loads conversation context and booking session from PostgreSQL' },
      { step: 3, text: 'Brain builds a dynamic system prompt with current studio, gender, cart state, and pending questions' },
      { step: 4, text: 'Fine-tuned GPT-4.1-mini decides which of the 21 tools to call - no rigid state machine' },
      { step: 5, text: 'Tool loop (max 5 steps): findStudios → browseServices → addToCart → checkAvailability → getBookingLink' },
      { step: 6, text: 'If the AI can\'t resolve the issue → requestHandoff → full context snapshot passed to a human operator' },
    ],
    color: '#8b5cf6',
  },
  {
    id: 'analytics-loop',
    title: 'Analytics Feedback Loop',
    subtitle: 'From web events to business decisions',
    steps: [
      { step: 1, text: 'Vercel Analytics Drain streams real-time pageviews and custom events to the analytics platform' },
      { step: 2, text: 'Admin API sends conversion events (bookings, purchases) via track-conversion endpoint (x-api-key)' },
      { step: 3, text: 'Attribution engine assigns first-touch (immutable) and last-touch (non-direct-last-click) sources' },
      { step: 4, text: 'Lead lifecycle sync: matching web leads to bookings by phone number every 6 hours' },
      { step: 5, text: 'Revenue normalized to EUR via ECB exchange rates → daily aggregation for fast dashboard loading' },
    ],
    color: '#ec4899',
  },
];

// ─── Architectural Decisions ─────────────────────────────────────────────────

export const DECISIONS: Decision[] = [
  {
    title: 'Brain-first AI architecture (not FSM)',
    context: 'The AI agent needs to guide users toward booking, but people ask questions in unpredictable order - price before studio, FAQ mid-booking, changing their mind halfway through.',
    solution: 'Implemented a tool-calling LLM architecture where the model dynamically orchestrates tools based on user intent, rather than following rigid conversational trees.',
    alternative: 'Deterministic FSM with fixed state transitions.',
    why: 'Users don\'t follow linear flows. A brain-first approach handles multi-intent messages naturally - "Wroclaw, women, laser hair removal" triggers 4 sequential tool calls in one request.',
    effect: 'Flexible conversations. The LLM was custom fine-tuned with iterative quality-first approach. Four response patterns (pass-through, merge, speaking, silent) cover every UX scenario.',
    link: { text: 'Read AI Agent Case Study →', href: '/projects/ai-agent' },
  },
  {
    title: 'Independent analytics with its own database',
    context: 'Needed marketing attribution and lifecycle tracking, but product database queries are optimized for transactional workloads, not analytical ones.',
    solution: 'Deployed a dedicated PostgreSQL database for analytics, ingesting real-time events via Vercel Analytics Drain and the Admin API.',
    alternative: 'Google Analytics 4, Mixpanel, or embedded analytics in the admin panel.',
    why: 'GA4 can\'t do cross-domain session stitching with booking lifecycle data. We needed full control over the attribution model and the ability to sync leads to bookings by phone number.',
    effect: '19 dashboard widgets. Multi-touch attribution with first-touch and non-direct-last-click. Lead lifecycle tracking from first web event to completed booking.',
  },
  {
    title: 'Per-studio Stripe integration',
    context: 'Each studio might operate under a different legal entity in a different country, each with its own currency and banking.',
    solution: 'Built a per-studio Stripe integration model where each studio provides its own API keys, allowing fully decentralized payment processing.',
    alternative: 'Single Stripe account with Connected Accounts.',
    why: 'Different jurisdictions, different currencies, different regulatory requirements. Per-studio keys give complete flexibility without Stripe Connect complexity.',
    effect: 'Multi-currency payments (EUR/PLN/GBP/UAH). Full lifecycle tracking (PENDING → SUCCEEDED → REFUNDED). Automated email chains triggered by payment state changes.',
  },
  {
    title: 'Cron-driven automation layer',
    context: 'Multiple business processes need scheduled execution: feedback collection, payment cleanup, analytics sync, exchange rate updates, stale lead expiration.',
    solution: 'Distributed 12 zero-infrastructure Vercel Cron jobs across the relevant services to handle all scheduled automation without maintaining a separate worker queue.',
    alternative: 'Event-driven queue (SQS, RabbitMQ).',
    why: 'Vercel Cron is zero-infrastructure - no queue to manage, no workers to scale. Each job is isolated in its own repository. Sufficient for current scale with room to grow.',
    effect: 'Automated feedback chains (visit → treatment), stale lead expiration, daily analytics aggregation, knowledge base sync - all running without any manual intervention.',
  },
];

// ─── Outcomes ────────────────────────────────────────────────────────────────

export const OUTCOME_GROUPS: OutcomeGroup[] = [
  {
    title: 'Scale',
    icon: '🚀',
    items: [
      '18 studios across 5 countries managed through one ecosystem',
      '30K+ monthly active users across 6 localized domains',
      'Multi-currency payments (EUR/PLN/GBP/UAH) via per-studio Stripe',
      'New country launch: config + translations + domain, no core changes',
    ],
    color: 'var(--accent)',
  },
  {
    title: 'Intelligence',
    icon: '🤖',
    items: [
      'AI consultant: 21 tools, 4 channels, custom fine-tuned model',
      'Custom attribution: first-touch + non-direct-last-click across 19 dashboards',
      'Lead lifecycle: web event → phone match → booking → revenue attribution',
      'Automated feedback chains: booking → 24h visit review → 18d treatment review',
    ],
    color: '#3b82f6',
  },
  {
    title: 'Automation',
    icon: '⚙️',
    items: [
      '12 cron jobs handle feedback, cleanup, analytics sync, and email triggers',
      'Stripe webhook pipeline: payment → purchase → loyalty → confirmation email',
      'DeepL bulk translation across 6 locales with human review workflow',
      'Full delivery: 7 services architected, built, and maintained by one developer',
    ],
    color: '#f59e0b',
  },
];
