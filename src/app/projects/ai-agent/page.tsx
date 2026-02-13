'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const HERO_STATS = [
  { value: '21', label: 'Orchestrated Tools', sublabel: 'booking, cart, knowledge, support' },
  { value: '5', label: 'Countries', sublabel: '18 studios, 6 languages' },
  { value: '4', label: 'Channels', sublabel: 'Web, Telegram, Instagram, FB' },
  { value: '~0', label: 'Hallucinations', sublabel: 'brain-first control flow' },
];

const PROBLEM_POINTS = [
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

const ARCHITECTURE_STEPS = [
  { step: '01', title: 'User Message', description: 'Incoming message from any channel (Web, Telegram, Instagram, Facebook)' },
  { step: '02', title: 'Load Session', description: 'Restore conversation context, preferences, cart, booking history from PostgreSQL' },
  { step: '03', title: 'Build Context', description: 'Construct dynamic system prompt with current studio, gender, cart, pending questions' },
  { step: '04', title: 'Brain LLM', description: 'Fine-tuned GPT-4.1 Mini decides which tools to call based on user intent' },
  { step: '05', title: 'Tool Execution', description: 'Up to 5 sequential tool calls with context sync between each step via prepareStep' },
  { step: '06', title: 'Response', description: 'Natural language answer grounded in database facts, with UI selectors when needed' },
];

const TOOL_CATEGORIES = [
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

const HALLUCINATION_GUARDS = [
  {
    title: 'Database-Only Policy',
    description: 'System prompt explicitly forbids inventing prices, services, studios, or availability. All factual queries must go through tools.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Tool-Level Validation',
    description: 'Each tool validates required context. addToCart checks serviceId against lastShownServices. getBookingLink validates time slots against lastAvailabilityTimes.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Two-Stage Vector Search',
    description: 'Context-aware search with studio/gender/country filters first. Global fallback with lower threshold (0.25) only if contextual search returns nothing.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'FAQ Direct Answer',
    description: 'High-similarity FAQ matches (>= 0.85) return the stored answer directly without LLM rewriting, eliminating any chance of distortion.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Injection Detection',
    description: 'Pre-LLM guard layer with pattern matching for prompt injection attempts, 500-char message limit, and DB-based rate limiting for serverless.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.96l-6.93-12a2 2 0 00-3.5 0l-6.93 12A2 2 0 005.07 19z" />
      </svg>
    ),
  },
  {
    title: 'Incident Snapshots',
    description: 'On 3+ consecutive failures, user dislikes, or complaints — a SupportIncident is created with full conversation snapshot, independent from conversation lifecycle.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

const TECH_STACK = [
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

const KEY_DECISIONS = [
  { decision: 'Brain-First over FSM', reasoning: 'Single LLM agent decides all flows, enabling flexibility for multi-intent requests and natural conversations instead of rigid state transitions.' },
  { decision: 'Native Multi-Step (Vercel AI SDK)', reasoning: 'Uses generateText with stopWhen + prepareStep instead of custom loop. prepareStep rebuilds the system prompt before each LLM step with real-time state changes.' },
  { decision: 'Session vs Conversation split', reasoning: 'Session is temporary (24h TTL) for cart/booking state. Conversation is permanent for preferences, studio, gender, and booking history that persists across sessions.' },
  { decision: 'No Langchain / LlamaIndex', reasoning: 'Direct Vercel AI SDK + Prisma for simpler, more transparent architecture. Full control over prompt construction, tool execution, and state management.' },
  { decision: 'Fine-tuned model over prompting', reasoning: 'Custom training data pipeline (merge, validate, audit, quality-check scripts) for consistent tool calling behavior and tone across 6 languages.' },
  { decision: 'Permanent booking history', reasoning: 'Never reset, even after handoff or session restart. Enables repeat booking, personalization, and analytics across the entire customer lifecycle.' },
];

const RESULTS = [
  { metric: '$0.015 per Conversation', description: 'Fine-tuned GPT-4.1 Mini keeps cost ~100x cheaper than a human operator per dialog' },
  { metric: '~4s Average Response', description: 'Multi-step tool execution (2-5 calls) with prompt caching delivers near-instant replies' },
  { metric: 'Near-Zero Hallucinations', description: 'Brain-first architecture with tool-level validation ensures every fact comes from the database' },
  { metric: '18 Studios, 5 Countries', description: 'Live in production across the entire European chain with full localization in 6 languages' },
  { metric: '4 Channels, 1 Context', description: 'Website, Telegram, Instagram, Facebook — unified conversation and booking history' },
  { metric: 'Complete Observability', description: 'Langfuse traces every tool call, token usage, and cost per conversation in real-time' },
];

export default function AIAgentPage(): React.ReactElement {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div style={{
        position: 'fixed',
        top: 'var(--space-4)',
        left: 'var(--space-4)',
        zIndex: 100,
      }}>
        <Link
          href="/"
          className="glass-card"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-2) var(--space-4)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            transition: 'all var(--duration-normal) var(--ease-out)',
          }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* ===== HERO SECTION ===== */}
      <header style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
      }}>
        {/* Ambient glow orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent-2-glow) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite reverse',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <span className="badge badge--accent" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', display: 'inline-flex', gap: 'var(--space-2)' }}>
                <span style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--success)' }} />
                Case Study
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginTop: 'var(--space-6)',
                marginBottom: 'var(--space-4)',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Building a Production AI Agent
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.3,
              }}
            >
              Brain-First Architecture with 21 Orchestrated Tools
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: 'var(--text-tertiary)',
                maxWidth: '700px',
                margin: '0 auto var(--space-12)',
                lineHeight: 1.7,
              }}
            >
              How I built an enterprise AI agent for a European beauty chain that handles booking,
              knowledge search, cart management, and customer support across 18 studios in 5 countries —
              with near-zero hallucinations.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-stats-grid">
                {HERO_STATS.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card glass-card--glow"
                    style={{ padding: 'var(--space-6) var(--space-4)', textAlign: 'center' }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div style={{
                      fontSize: 'var(--text-4xl)',
                      fontWeight: 700,
                      background: 'var(--gradient-accent)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      marginBottom: 'var(--space-2)',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                      {stat.sublabel}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
      {/* ===== THE PROBLEM ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">The Problem</h2>
            <p className="section-subtitle">
              Why standard chatbots and RAG pipelines fail for complex business workflows.
            </p>
          </motion.div>

          <div className="problem-grid" style={{ marginTop: 'var(--space-12)' }}>
            {PROBLEM_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card" style={{
                  padding: 'var(--space-6)',
                  height: '100%',
                  borderLeft: '3px solid rgba(239, 68, 68, 0.5)',
                }}>
                  <div style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: '#ef4444',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Problem {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                    {point.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE SOLUTION: BRAIN-FIRST ARCHITECTURE ===== */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">The Solution: Brain-First Architecture</h2>
            <p className="section-subtitle">
              A single fine-tuned LLM reads a comprehensive system prompt and decides which tools to call —
              no hardcoded state machines, no rigid flows.
            </p>
          </motion.div>

          {/* Architecture Flow */}
          <div style={{ marginTop: 'var(--space-12)' }}>
            <div className="architecture-flow">
              {ARCHITECTURE_STEPS.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 'var(--text-sm)',
                    color: 'white',
                    boxShadow: 'var(--shadow-glow)',
                  }}>
                    {item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key insight callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: 'var(--space-8)' }}
            >
              <div className="glass-card" style={{
                padding: 'var(--space-6) var(--space-8)',
                borderLeft: '3px solid var(--accent)',
                background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)',
              }}>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-2)' }}>
                  Key Innovation: prepareStep
                </h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Before each LLM step, <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', background: 'rgba(99, 102, 241, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>prepareStep</code> rebuilds
                  the system prompt with real-time state from tool executions. When the user says &quot;Wroclaw, women, laser&quot; — the LLM processes it in 4 sequential steps,
                  with each step seeing the updated context from the previous tool call.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">The Tech Stack</h2>
            <p className="section-subtitle">
              Production-grade infrastructure for a serverless AI agent at scale.
            </p>
          </motion.div>

          <div className="stack-grid" style={{ marginTop: 'var(--space-12)' }}>
            {TECH_STACK.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card" style={{ padding: 'var(--space-6)', height: '100%' }}>
                  <h3 style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--accent-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 'var(--space-4)',
                  }}>
                    {category.category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {category.items.map((item) => (
                      <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.name}
                        </span>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                          textAlign: 'right',
                          flexShrink: 0,
                        }}>
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 21 TOOLS ===== */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">21 Orchestrated Tools</h2>
            <p className="section-subtitle">
              The Brain LLM has access to 21 specialized tools organized into 5 categories.
              Each tool validates its own context and returns typed results.
            </p>
          </motion.div>

          <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {TOOL_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card" style={{ padding: 'var(--space-6) var(--space-8)', overflow: 'hidden', position: 'relative' }}>
                  {/* Accent line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: category.color,
                    opacity: 0.8,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {category.name}
                    </h3>
                    <span className="badge badge--ghost">{category.tools.length} tools</span>
                  </div>

                  <div className="tools-grid">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        style={{
                          padding: 'var(--space-3) var(--space-4)',
                          background: 'rgba(255, 255, 255, 0.02)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <code style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-sm)',
                          color: category.color,
                          fontWeight: 600,
                        }}>
                          {tool.name}
                        </code>
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)', lineHeight: 1.5 }}>
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HALLUCINATION PREVENTION ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Near-Zero Hallucination Strategy</h2>
            <p className="section-subtitle">
              Six layers of protection ensure the agent never fabricates information.
            </p>
          </motion.div>

          <div className="guards-grid" style={{ marginTop: 'var(--space-12)' }}>
            {HALLUCINATION_GUARDS.map((guard, index) => (
              <motion.div
                key={guard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card glass-card--glow" style={{ padding: 'var(--space-6)', height: '100%' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-light)',
                    marginBottom: 'var(--space-4)',
                  }}>
                    {guard.icon}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {guard.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {guard.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY ARCHITECTURAL DECISIONS ===== */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Key Architectural Decisions</h2>
            <p className="section-subtitle">
              The reasoning behind critical design choices.
            </p>
          </motion.div>

          <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {KEY_DECISIONS.map((item, index) => (
              <motion.div
                key={item.decision}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  padding: 'var(--space-5) var(--space-6)',
                  borderLeft: '3px solid var(--accent)',
                  background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.03) 0%, transparent 100%)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                }}>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {item.decision}
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {item.reasoning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">The Outcome</h2>
          </motion.div>

          <div className="results-grid" style={{ marginTop: 'var(--space-12)' }}>
            {RESULTS.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  padding: 'var(--space-5)',
                  background: 'var(--success-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  height: '100%',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>&#10003;</span>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--success)' }}>
                      {result.metric}
                    </h4>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {result.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}
          >
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              Interested in building something similar?
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn--primary" style={{ textDecoration: 'none' }}>
                Get in Touch
              </a>
              <a href="https://www.loveepil.com/consultation" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ textDecoration: 'none' }}>
                Try the Agent Live
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .hero-title {
          font-size: var(--text-5xl);
        }
        .hero-subtitle {
          font-size: var(--text-2xl);
        }
        .hero-description {
          font-size: var(--text-lg);
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
        }
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .architecture-flow {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          max-width: 700px;
        }
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: var(--space-3);
        }
        .guards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--text-3xl);
          }
          .hero-subtitle {
            font-size: var(--text-xl);
          }
          .hero-description {
            font-size: var(--text-base);
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-3);
          }
          .problem-grid {
            grid-template-columns: 1fr;
          }
          .stack-grid {
            grid-template-columns: 1fr;
          }
          .guards-grid {
            grid-template-columns: 1fr;
          }
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
