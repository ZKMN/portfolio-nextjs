'use client';

import React from 'react';
import { EXPERIENCE } from '@/widgets/Expirience/consts/experience';

const RESUME_SKILLS = [
  {
    category: 'AI & LLM',
    items: 'OpenAI API, Vercel AI SDK, Langfuse, pgvector, Fine-Tuning, Prompt Engineering, Tool Orchestration',
  },
  {
    category: 'Frontend',
    items: 'TypeScript, React 19, Next.js 16, Zustand, TanStack Query, Framer Motion, i18next',
  },
  {
    category: 'Backend & Data',
    items: 'Node.js, PostgreSQL, Prisma, Stripe, NextAuth, Zod, REST, GraphQL',
  },
  {
    category: 'Infrastructure',
    items: 'Vercel, AWS, Firebase, Telegram Bot API, Strapi CMS, Resend, React Email, DeepL',
  },
  {
    category: 'Quality & DevOps',
    items: 'Vitest, Jest, ESLint, Husky, Git, CI/CD, Core Web Vitals, SEO (hreflang, JSON-LD, sitemaps)',
  },
];

export default function ResumePage(): React.ReactElement {
  const handlePrint = (): void => {
    window.print();
  };

  return (
    <div className="resume-page" style={{
      background: 'var(--bg-primary)',
      minHeight: '100vh',
      color: 'var(--text-primary)',
      padding: '40px',
      maxWidth: '210mm',
      margin: '0 auto',
    }}>
      {/* Print Control */}
      <div className="no-print" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <button onClick={handlePrint} className="btn btn--primary" style={{ padding: '12px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          Print / Save as PDF
        </button>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>Denis Klymenko</h1>
        <h2 style={{ fontSize: '1.15rem', color: 'var(--accent-light)', marginBottom: '12px' }}>AI Agent Architect & Full-Stack Product Engineer</h2>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
          <a href="mailto:klymdenis@gmail.com">klymdenis@gmail.com</a>
          <span>•</span>
          <a href="https://denovo.sh">denovo.sh</a>
          <span>•</span>
          <a href="https://linkedin.com/in/denis-klymenko">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/ZKMN">GitHub</a>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: '24px' }}>
        <h3 className="resume-section-title">Summary</h3>
        <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          I build production AI agents and the full infrastructure behind them — solo, from scratch.
          Most recently: a 21-tool booking agent for a European beauty chain (5 countries, 6 languages, $0.015/dialog)
          plus the entire ecosystem around it — analytics with cross-domain attribution, admin panel with RBAC and Stripe,
          CMS, transactional emails. 8+ years in software engineering, 20 projects delivered (14 from scratch).
        </p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '24px' }}>
        <h3 className="resume-section-title">Experience</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {EXPERIENCE.filter(e => e.open).map((exp) => (
            <div key={exp.name} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {exp.role} <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>at</span> <span style={{ color: 'var(--accent-light)' }}>{exp.name}</span>
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', flexShrink: 0 }}>{exp.time}</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '6px' }}>
                {exp.responsibilities}
              </p>

              {exp.achievements && (
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '6px' }}>
                  <span style={{ color: 'var(--success)', fontWeight: 600 }}>Impact: </span>
                  <span style={{ color: 'var(--text-secondary)' }}>{exp.achievements}</span>
                </p>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div style={{ marginTop: '6px' }}>
                  {exp.projects.map((project) => (
                    <div key={project.name} style={{ marginBottom: '4px', paddingLeft: '12px', borderLeft: '2px solid var(--border)' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{project.name}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginLeft: '6px' }}>— {project.description}</span>
                    </div>
                  ))}
                </div>
              )}

              {exp.stack && (
                <div style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                  {exp.stack}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '24px', breakInside: 'avoid' }}>
        <h3 className="resume-section-title">Technical Skills</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {RESUME_SKILLS.map((group) => (
            <div key={group.category} style={{ display: 'flex', gap: '8px', fontSize: '0.88rem', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700, color: 'var(--accent-light)', minWidth: '130px', flexShrink: 0 }}>{group.category}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{group.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ breakInside: 'avoid' }}>
        <h3 className="resume-section-title">Education</h3>
        <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '14px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>National Academy of SBU</h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)' }}>Cybersecurity & Information Protection</p>
        </div>
      </section>

      <style jsx global>{`
        .resume-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 6px;
          margin-bottom: 12px;
        }

        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: #0a0a0f !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .resume-page {
            width: 100%;
            max-width: none;
            padding: 20px 40px;
            margin: 0;
            background: #0a0a0f !important;
            color: #f0f0f5 !important;
            min-height: 0 !important;
            height: auto !important;
            display: block !important;
          }
          section {
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .no-print {
            display: none !important;
          }
          a {
            color: inherit !important;
            text-decoration: none !important;
          }
          p, span, h1, h2, h3, h4, h5, h6 {
            color: #f0f0f5 !important;
            text-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
