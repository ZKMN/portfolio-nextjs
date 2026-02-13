import type {
  ArchitectureStep,
  HallucinationGuard,
  HeroStat,
  KeyDecision,
  ProblemPoint,
  Result,
  TechCategory,
  ToolCategory,
} from './types';

export const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const HERO_STATS: HeroStat[] = [
  { value: '21', label: 'Orchestrated Tools', sublabel: 'booking, cart, knowledge, support' },
  { value: '5', label: 'Countries', sublabel: '18 studios, 6 languages' },
  { value: '4', label: 'Channels', sublabel: 'Web, Telegram, Instagram, FB' },
  { value: '~0', label: 'Hallucinations', sublabel: 'brain-first control flow' },
];

export const PROBLEM_POINTS: ProblemPoint[] = [
  {
    title: 'Rigid State Machines',
    description: 'Traditional chatbots use hardcoded FSMs that break on multi-intent messages. User says "Wroclaw, women, laser hair removal" — FSM handles one step at a time.',
  },
  {
    title: 'RAG Hallucinations',
    description: 'Standard Retrieval-Augmented Generation retrieves context but still lets the LLM fabricate prices, services, and availability that don\'t exist in the database.',
  },
  {
    title: 'Context Loss',
    description: 'Stateless chatbots forget user preferences between messages. A returning customer has to re-specify their studio, gender, and preferred device every session.',
  },
  {
    title: 'No Observability',
    description: 'When something goes wrong, there\'s no trace of which tool was called, what the LLM decided, or why the user got a wrong answer. Debugging is guesswork.',
  },
];

export const ARCHITECTURE_STEPS: ArchitectureStep[] = [
  { step: '01', title: 'User Message', description: 'Incoming message from any channel (Web, Telegram, Instagram, Facebook)' },
  { step: '02', title: 'Load Session', description: 'Restore conversation context, preferences, cart, booking history from PostgreSQL' },
  { step: '03', title: 'Build Context', description: 'Construct dynamic system prompt with current studio, gender, cart, pending questions' },
  { step: '04', title: 'Brain LLM', description: 'Fine-tuned GPT-4.1 Mini decides which tools to call based on user intent' },
  { step: '05', title: 'Tool Execution', description: 'Up to 5 sequential tool calls with context sync between each step via prepareStep' },
  { step: '06', title: 'Response', description: 'Natural language answer grounded in database facts, with UI selectors when needed' },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    name: 'Studio & Location',
    color: 'var(--accent)',
    tools: [
      { name: 'findStudios', description: '7-priority fuzzy search chain (handles misspellings, districts, cross-locale)' },
      { name: 'getStudioDetails', description: 'Address, hours, phone, Google Maps link, video directions' },
      { name: 'getCountryList', description: 'Countries with active studios' },
    ],
  },
  {
    name: 'Services & Products',
    color: 'var(--accent-2)',
    tools: [
      { name: 'browseServices', description: 'Zones (legs, face, bikini) or procedures (cosmetology)' },
      { name: 'getPrices', description: 'Structured price overview with device comparison support' },
      { name: 'browseAbonnements', description: 'Subscription packages with calculated savings' },
      { name: 'getDeviceInfo', description: 'Full device specs, comparisons, contraindications' },
      { name: 'askMoreServices', description: '"Want to add more zones?" with yes/no selector' },
    ],
  },
  {
    name: 'Cart & Booking',
    color: 'var(--success)',
    tools: [
      { name: 'addToCart', description: 'Validates serviceId against lastShownServices' },
      { name: 'removeFromCart', description: 'Clear specific item from cart' },
      { name: 'checkAvailability', description: 'Available time slots for a specific date' },
      { name: 'getBookingLink', description: 'Generates booking URL, validates time against availability' },
      { name: 'repeatBooking', description: 'Re-book from permanent booking history' },
    ],
  },
  {
    name: 'Knowledge & Support',
    color: '#f59e0b',
    tools: [
      { name: 'searchKnowledge', description: 'Two-stage semantic search: context-first, then global fallback' },
      { name: 'requestHandoff', description: 'Escalates to human support, creates incident snapshot' },
      { name: 'askConsultation', description: 'Proactive consultation offer before/after procedure selection' },
    ],
  },
  {
    name: 'Flow Control',
    color: '#ec4899',
    tools: [
      { name: 'askGender', description: 'Gender selection with UI selector when unset' },
      { name: 'getCategoryTypes', description: 'Category selection with automatic device inference' },
      { name: 'selectDevice', description: 'Device inference from category via DEVICE_TO_CATEGORY mapping' },
      { name: 'getCart', description: 'Display current cart with totals' },
      { name: 'restartBooking', description: 'Clear session after completing booking' },
    ],
  },
];

export const HALLUCINATION_GUARDS: HallucinationGuard[] = [
  {
    title: 'Database-Only Policy',
    description: 'System prompt explicitly forbids inventing prices, services, studios, or availability. All factual queries must go through tools.',
    iconName: 'shield',
  },
  {
    title: 'Tool-Level Validation',
    description: 'Each tool validates required context. addToCart checks serviceId against lastShownServices. getBookingLink validates time slots against lastAvailabilityTimes.',
    iconName: 'check',
  },
  {
    title: 'Two-Stage Vector Search',
    description: 'Context-aware search with studio/gender/country filters first. Global fallback with lower threshold (0.25) only if contextual search returns nothing.',
    iconName: 'search',
  },
  {
    title: 'FAQ Direct Answer',
    description: 'High-similarity FAQ matches (>= 0.85) return the stored answer directly without LLM rewriting, eliminating any chance of distortion.',
    iconName: 'bolt',
  },
  {
    title: 'Injection Detection',
    description: 'Pre-LLM guard layer with pattern matching for prompt injection attempts, 500-char message limit, and DB-based rate limiting for serverless.',
    iconName: 'warning',
  },
  {
    title: 'Incident Snapshots',
    description: 'On 3+ consecutive failures, user dislikes, or complaints — a SupportIncident is created with full conversation snapshot, independent from conversation lifecycle.',
    iconName: 'clipboard',
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: 'AI / LLM',
    items: [
      { name: 'GPT-4.1 Mini', detail: 'Fine-tuned' },
      { name: 'Vercel AI SDK', detail: 'Native multi-step with generateText' },
      { name: 'Langfuse', detail: 'LLM observability & tracing' },
      { name: 'OpenAI Embeddings', detail: 'text-embedding-3-small' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Next.js 16', detail: 'App Router, serverless on Vercel' },
      { name: 'PostgreSQL', detail: 'With pgvector extension' },
      { name: 'Prisma 7', detail: 'Multi-schema + Accelerate edge' },
      { name: 'OpenTelemetry', detail: 'Distributed tracing' },
    ],
  },
  {
    category: 'Channels',
    items: [
      { name: 'Website Widget', detail: 'CORS-protected API' },
      { name: 'Telegram Bot API', detail: 'Webhook handler' },
      { name: 'Instagram / Facebook', detail: 'Meta webhooks' },
      { name: 'Admin Panel', detail: 'User management, debug UI' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Vercel', detail: 'Serverless deployment + Cron' },
      { name: 'Resend', detail: 'Transactional email delivery' },
      { name: 'React 19', detail: 'Admin panel & widget UI' },
      { name: 'Vitest', detail: 'Tool & integration testing' },
    ],
  },
];

export const KEY_DECISIONS: KeyDecision[] = [
  {
    decision: 'Brain-First over FSM',
    reasoning: 'Single LLM agent decides all flows, enabling flexibility for multi-intent requests and natural conversations instead of rigid state transitions.',
  },
  {
    decision: 'Native Multi-Step (Vercel AI SDK)',
    reasoning: 'Uses generateText with stopWhen + prepareStep instead of custom loop. prepareStep rebuilds the system prompt before each LLM step with real-time state changes.',
  },
  {
    decision: 'Session vs Conversation split',
    reasoning: 'Session is temporary (24h TTL) for cart/booking state. Conversation is permanent for preferences, studio, gender, and booking history that persists across sessions.',
  },
  {
    decision: 'No Langchain / LlamaIndex',
    reasoning: 'Direct Vercel AI SDK + Prisma for simpler, more transparent architecture. Full control over prompt construction, tool execution, and state management.',
  },
  {
    decision: 'Fine-tuned model over prompting',
    reasoning: 'Custom training data pipeline (merge, validate, audit, quality-check scripts) for consistent tool calling behavior and tone across 6 languages.',
  },
  {
    decision: 'Permanent booking history',
    reasoning: 'Never reset, even after handoff or session restart. Enables repeat booking, personalization, and analytics across the entire customer lifecycle.',
  },
];

export const RESULTS: Result[] = [
  { metric: '$0.015 per Conversation', description: 'Fine-tuned GPT-4.1 Mini keeps cost ~100x cheaper than a human operator per dialog' },
  { metric: '~4s Average Response', description: 'Multi-step tool execution (2-5 calls) with prompt caching delivers near-instant replies' },
  { metric: 'Near-Zero Hallucinations', description: 'Brain-first architecture with tool-level validation ensures every fact comes from the database' },
  { metric: '18 Studios, 5 Countries', description: 'Live in production across the entire European chain with full localization in 6 languages' },
  { metric: '4 Channels, 1 Context', description: 'Website, Telegram, Instagram, Facebook — unified conversation and booking history' },
  { metric: 'Complete Observability', description: 'Langfuse traces every tool call, token usage, and cost per conversation in real-time' },
];
