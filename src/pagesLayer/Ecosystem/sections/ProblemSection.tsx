import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, PROBLEM_POINTS } from '../constants';

export const ProblemSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="Why One App Wasn't Enough" />
        <p className="section-subtitle">
          The business started as a single-city beauty studio. As it expanded into an international network, the architecture had to evolve - or become the bottleneck.
        </p>
      </motion.div>

      <div className="eco-problem-grid" style={{ marginTop: 'var(--space-12)' }}>
        {PROBLEM_POINTS.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card glass-card--glow"
              style={{
                padding: 'var(--space-6) var(--space-8)',
                height: '100%',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '0 var(--radius-xl) var(--radius-xl) 0',
              }}
            >
              <div style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>
                {point.icon}
              </div>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)',
              }}
              >
                {point.title}
              </h3>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
              >
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
