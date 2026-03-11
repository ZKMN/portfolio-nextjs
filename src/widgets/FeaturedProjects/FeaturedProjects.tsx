'use client';

import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

const featuredProjects = [
  {
    name: 'Enterprise AI Agent for love💗epil',
    role: 'Lead AI Architect',
    period: '2025 - Present',
    description: 'A production AI consultant for a European beauty chain. Built with strict business control and full observability.',
    myContributions: [
      'Built a custom AI orchestration engine with 21 tools covering bookings, FAQs, and support handoffs',
      'Set up a fine-tuned GPT-4.1 Mini pipeline with automated validation, auditing, and quality checks',
      'Integrated Langfuse + OpenTelemetry tracing so we can track every tool call and token cost',
      'Added semantic search using pgvector for FAQs, locations, and service details',
      'Deployed the agent across the website and messengers with shared memory and seamless operator handoff',
    ],
    clientResults: [
      'Live in production across 18 studios in 5 countries',
      'Stable production behavior through tool-level validation and controlled flows',
      '4 delivery channels: Website, Telegram, Instagram, Facebook',
    ],
    tech: ['OpenAI GPT-4.1 Mini', 'Vercel AI SDK', 'Langfuse', 'pgvector', 'Next.js 16', 'Prisma', 'PostgreSQL', 'Telegram Bot API', 'Vitest'],
    link: 'https://www.loveepil.com/consultation',
    caseStudy: '/projects/ai-agent',
  },
  {
    name: 'UAES - Ukrainian Community Spain',
    role: 'Full-Stack Product Engineer',
    period: '2026 - Present',
    description: 'A community platform for Ukrainians in Spain, connecting listings, events, and resources with a built-in moderation system.',
    myContributions: [
      'Built the entire platform from scratch, including the public site, user dashboards, and admin operations',
      'Set up full multilingual support for Ukrainian and Spanish locales',
      'Developed the core listings architecture for businesses, events, housing, and classifieds',
      'Added automated verification and moderation workflows with role-based access',
      'Set up quality pipelines with Playwright E2E and Sentry monitoring',
    ],
    clientResults: [
      'Full community platform live across core listing verticals',
      'Multi-locale support: Ukrainian and Spanish',
      'Operational moderation and verification flows integrated into delivery',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'next-intl', 'Firebase', 'Vercel Blob', 'Google Maps', 'TanStack Query', 'Zustand', 'Shadcn/Radix UI', 'Tailwind CSS v4', 'Sentry', 'Resend', 'Playwright', 'Vitest', 'Stryker'],
    link: 'https://uaes.app',
    caseStudy: null,
  },
  {
    name: 'love💗epil Multi-domain SaaS Ecosystem',
    role: 'Lead AI Architect | Product Builder',
    period: '2024 - Present',
    description: 'A complete product ecosystem spanning the main website, regional domains, admin panel, analytics, CMS, and transactional tools.',
    myContributions: [
      'Defined the architecture and boundaries across five interconnected repositories',
      'Set up multi-domain localization supporting 5 countries, 6 languages, and 4 currencies',
      'Built admin workflows to handle RBAC, payments, translations, and bookings',
      'Integrated full-funnel analytics to track users across domains and tie behavior to lifecycle events',
      'Designed the data architecture using Prisma and PostgreSQL to serve product, operations, and AI',
    ],
    clientResults: [
      '30K+ monthly active users across 6 European domains',
      '96% Real User Experience Score (mobile)',
      'Single ecosystem strategy connecting acquisition, conversion, operations, and analytics',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth', 'Strapi', 'Resend', 'React Email', 'Vercel', 'Google Maps API', 'Firebase', 'Microsoft Clarity', 'Zustand', 'TanStack Query', 'Zod', 'i18next', 'DeepL'],
    link: null,
    caseStudy: '/projects/loveepil',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const FeaturedProjects = () => (
  <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="Featured Projects" />
        <p className="section-subtitle">
          Real products and AI systems built to scale, operate reliably, and actually solve business problems.
        </p>
      </motion.div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card project-card"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent line at top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient-accent)',
                borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
              }}
              />

              {/* Header */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <h3 className="project-title" style={{ fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {project.name}
                  </h3>
                  {project.link && (
                    <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-light)', display: 'flex', alignItems: 'center', flexShrink: 0, marginLeft: 'var(--space-2)' }}
                    >
                      <svg width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.description}
                </p>
              </div>

              {/* Contributions */}
              <div style={{ marginBottom: 'var(--space-6)', flex: 1 }}>
                <h4 style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
                >
                  Ownership & Delivery
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {project.myContributions.map((c, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                      <span style={{ color: 'var(--accent-light)', lineHeight: 1.7, flexShrink: 0 }}>•</span>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Results */}
              {project.clientResults.length > 0 && (
                <div style={{
                  marginBottom: 'var(--space-6)',
                  padding: 'var(--space-4)',
                  background: 'var(--success-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                }}
                >
                  <h4 style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--success)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 'var(--space-2)',
                  }}
                  >
                    Client Results
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                    {project.clientResults.map((r, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <span style={{ color: 'var(--success)', fontWeight: 700 }}>✓</span>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--success)', fontWeight: 500 }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                }}
                >
                  Technologies
                </h4>
                <div className="tech-stack-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', paddingBottom: 'var(--space-2)' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="badge badge--ghost" style={{ whiteSpace: 'nowrap' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Case Study Link */}
              {project.caseStudy && (
                <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border)' }}>
                  <a
                    href={project.caseStudy}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--accent-light)',
                      textDecoration: 'none',
                      transition: 'all var(--duration-normal) var(--ease-out)',
                    }}
                  >
                    Read Case Study
                    <svg width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
            gap: var(--space-6);
            margin-top: var(--space-12);
          }
          .project-card {
            padding: var(--space-8);
          }
          .project-title {
            font-size: var(--text-xl);
          }

          @media (max-width: 768px) {
            .project-card {
              padding: var(--space-5);
            }
            .project-title {
              font-size: var(--text-lg);
            }
            .tech-stack-scroll {
              flex-wrap: nowrap !important;
              overflow-x: auto;
              scrollbar-width: none;
              margin-right: -20px; /* Bleed to edge (padding is 20px) */
              padding-right: 20px;
              mask-image: linear-gradient(to right, black 90%, transparent 100%);
            }
            .tech-stack-scroll::-webkit-scrollbar {
              display: none;
            }
          }
        `}</style>
    </div>
  </section>
);
