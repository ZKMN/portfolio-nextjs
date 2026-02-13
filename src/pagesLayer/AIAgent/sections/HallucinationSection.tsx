import React from 'react';
import { motion } from 'framer-motion';

import { FADE_UP, HALLUCINATION_GUARDS } from '../constants';

const GUARD_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  search: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  bolt: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  warning: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.96l-6.93-12a2 2 0 00-3.5 0l-6.93 12A2 2 0 005.07 19z" />
    </svg>
  ),
  clipboard: (
    <svg width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
};

export const HallucinationSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
              }}
              >
                {GUARD_ICONS[guard.iconName]}
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
);
