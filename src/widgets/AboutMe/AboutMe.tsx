'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

const achievements = [
  'Enterprise AI Agent for love💗epil (18 studios, 5 countries). Brain-First architecture with 21 orchestrated tools, fine-tuned GPT-4.1 Mini, LLM observability via Langfuse OpenTelemetry, multi-channel deployment (Web, Telegram, Instagram, Facebook). Solo-delivered.',
  '20 projects delivered (14 from scratch). Engineered a scalable distributed SaaS ecosystem serving 5 countries with Domain-Driven Design, Stripe payments, and GDPR compliance.',
  'Full-Cycle Development: E2E ownership — architecture, AI agent design, FE/BE integration, testing (Vitest), CI/CD, deployment to Vercel.',
];

const valuePoints = [
  'Brain-first AI systems — rigid business logic governs LLM reasoning, not prompt tricks',
  'Tool Orchestration (21 tools), Fine-Tuning pipelines, Prompt Engineering for production AI agents',
  'LLM observability: Langfuse + OpenTelemetry traces every tool call, token usage, cost per conversation',
  'Architecting for scale: multi-domain, multi-currency, i18n-ready systems with unified data modeling',
];

const recentHighlights = [
  'Enterprise AI Agent with 21 orchestrated tools, FSM booking sessions, and support incident tracking',
  'Fine-tuned GPT-4.1 Mini with custom data pipeline (merge, validate, audit, quality-check)',
  'pgvector semantic search with OpenAI text-embedding-3-small (FAQ, services, studios, cities, abonnements)',
  'Distributed service architecture: AI Orchestrator, Analytics Engine, Core API, Headless CMS, and Admin Dashboard',
];

const competencies = [
  'AI Agent Architecture (Brain-First, 21 tools, FSM)',
  'OpenAI API, Vercel AI SDK, Langfuse, pgvector',
  'Fine-Tuning, Prompt Engineering, Tool Orchestration',
  'Full-Stack: Next.js 16, React 19, TypeScript, Node.js',
  'Prisma (Complex Data Modeling), PostgreSQL, Stripe, NextAuth',
  'Multi-domain i18n (6 lang, 4 currencies, GDPR)',
  'Strapi CMS, Resend, React Email, DeepL',
  'Vitest, ESLint, Husky, TypeScript strict',
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
            Lead AI Architect & Senior Product Engineer. I don&apos;t just &ldquo;plug in&rdquo; OpenAI APIs — I build predictable AI systems where LLM reasoning is governed by rigid business logic.
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
            {/* Key Achievements */}
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                Key Achievements
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {achievements.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--accent-light)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>◆</span>
                    <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value I Bring */}
            <div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Value I bring:
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {valuePoints.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Highlights */}
            <div>
              <span className="badge badge--accent" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                Recent Highlights
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {recentHighlights.map((item, i) => (
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
