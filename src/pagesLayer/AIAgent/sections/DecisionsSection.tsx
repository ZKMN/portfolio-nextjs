import React from 'react';
import { motion } from 'framer-motion';

import { FADE_UP, KEY_DECISIONS } from '../constants';

export const DecisionsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
            }}
            >
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
);
