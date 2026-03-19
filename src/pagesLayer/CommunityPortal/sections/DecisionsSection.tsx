import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { DECISIONS, FADE_UP } from '../constants';

export const DecisionsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="Key Architectural Decisions" />
        <p className="section-subtitle">
          Every major design choice had a context, alternatives, and specific reasoning. Here&apos;s what was chosen and why.
        </p>
      </motion.div>

      <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        {DECISIONS.map((decision, index) => (
          <motion.div
            key={decision.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: 'var(--space-6) var(--space-8)',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              {/* Decision header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--accent-light)',
                  fontWeight: 700,
                  padding: 'var(--space-1) var(--space-2)',
                  background: 'var(--accent-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  flexShrink: 0,
                }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {decision.title}
                </h3>
              </div>

              {/* Decision grid */}
              <div className="cp-decision-grid">
                <div className="cp-decision-cell">
                  <span className="cp-decision-label">Context</span>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {decision.context}
                  </p>
                </div>
                <div className="cp-decision-cell">
                  <span className="cp-decision-label">Solution</span>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {decision.solution}
                  </p>
                </div>
                <div className="cp-decision-cell">
                  <span className="cp-decision-label" style={{ color: 'var(--text-tertiary)' }}>
                    Alternative considered
                  </span>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {decision.alternative}
                  </p>
                </div>
                <div className="cp-decision-cell">
                  <span className="cp-decision-label" style={{ color: 'var(--accent-light)' }}>Why</span>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {decision.why}
                  </p>
                </div>
              </div>

              {/* Effect callout */}
              <div style={{
                marginTop: 'var(--space-4)',
                padding: 'var(--space-3) var(--space-4)',
                background: 'linear-gradient(90deg, var(--success-subtle) 0%, transparent 100%)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '2px solid var(--success)',
              }}
              >
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Effect
                </span>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-1)' }}>
                  {decision.effect}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
