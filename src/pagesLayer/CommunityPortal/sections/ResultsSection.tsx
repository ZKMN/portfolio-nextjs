import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, OUTCOME_GROUPS } from '../constants';

export const ResultsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      {/* Outcomes */}
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="What AI-Driven Delivery Looks Like" />
        <p className="section-subtitle">
          AI operates at every level: discovering content, building features, testing quality, and maintaining the platform.
          Here is what one developer with AI delivers compared to a traditional team setup.
        </p>
      </motion.div>

      <div className="cp-outcomes-grid" style={{ marginTop: 'var(--space-12)' }}>
        {OUTCOME_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card"
              style={{
                padding: 'var(--space-6)',
                height: '100%',
                borderTop: `3px solid ${group.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <span style={{ fontSize: 'var(--text-2xl)' }}>{group.icon}</span>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {group.title}
                </h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {group.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: group.color, fontWeight: 700, lineHeight: 1.7, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
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
          <button
            className="btn btn--primary btn--lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk About Architecture
          </button>
          <a
            href="https://uaes.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--lg"
            style={{ textDecoration: 'none' }}
          >
            Visit UAES
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
