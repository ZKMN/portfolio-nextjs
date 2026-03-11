'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

const experienceSnapshot = [
  'Built and operated the Loveepil ecosystem across core web, regional domains, admin operations, analytics, and AI service.',
  'Delivered 20+ projects (14 from scratch) with full ownership from architecture and implementation to production hardening.',
  'Led end-to-end product engineering across localization, payments, attribution, support workflows, and system reliability.',
];

const howIWork = [
  {
    title: 'Architecture-first decisions',
    description: 'I define boundaries, contracts, and state flows before scaling delivery.',
  },
  {
    title: 'Product builder mindset',
    description: 'I connect product goals, technical architecture, and operational reality.',
  },
  {
    title: 'Ownership through production',
    description: 'I ship and operate systems with observability, reliability, and iteration loops.',
  },
];

const recentProductContributions = [
  'Designed and delivered a unified Loveepil product ecosystem across frontend, admin, analytics, and AI layers.',
  'Built a production AI consultant with brain-first tool orchestration and full Langfuse observability.',
  'Implemented multi-domain i18n architecture across six locales and four currencies with GDPR-aware flows.',
  'Built operational analytics and attribution pipelines that connect web behavior to booking lifecycle signals.',
];

const competencies = [
  'Lead AI Architecture (Brain-First, Tool-Orchestrated Systems)',
  'OpenAI API, Vercel AI SDK, Langfuse, pgvector',
  'Product Engineering: Next.js, React, TypeScript, Node.js',
  'Data and Domain Modeling: Prisma, PostgreSQL, RBAC, workflow design',
  'Payments and Identity: Stripe, NextAuth',
  'Localization at Scale: multi-domain, multi-locale, multi-currency',
  'Quality and Delivery: Vitest, Playwright, ESLint, CI/CD',
  'Vercel, AWS, Firebase, Telegram Bot API',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const AboutMe = () => (
    <section id="about-me" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
        >
          <ScrambleTitle text="About Me" />
          <p className="section-subtitle">
            Lead AI Architect | Product Builder. I design and ship production systems where product, AI, analytics, and operations work as one architecture.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              background: 'var(--gradient-accent)',
              padding: '3px',
            }}
            >
              <div style={{ borderRadius: 'calc(var(--radius-2xl) - 3px)', overflow: 'hidden' }}>
                <Image
                  width={400}
                  height={500}
                  alt="Denis Klymenko"
                  src="/images/photo.jpg"
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              {/* Photo glow */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '10%',
                right: '10%',
                height: '40px',
                background: 'var(--accent-glow)',
                filter: 'blur(30px)',
                borderRadius: '50%',
              }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
          >
            {/* Experience Snapshot */}
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                Experience Snapshot
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {experienceSnapshot.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--accent-light)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>◆</span>
                    <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How I Work */}
            <div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                How I Work
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {howIWork.map(({ title, description }, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{title}:</strong> {description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Product Contributions */}
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                Recent Product Contributions
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {recentProductContributions.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--success)', fontSize: '14px', lineHeight: 1.8, flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Competencies */}
            <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Core Competencies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {competencies.map((comp) => (
                  <span key={comp} className="chip">{comp}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-12);
          margin-top: var(--space-12);
          align-items: start;
        }

        @media (max-width: 900px) {
          .about-grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-8);
          }
          /* Limit image width on mobile and center it */
          .about-grid > div:first-child {
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
            order: -1; /* Force image to top */
          }
        }
      `}</style>
    </section>
);
