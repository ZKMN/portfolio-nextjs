import React from 'react';
import { motion } from 'framer-motion';

import { FADE_UP, TECH_STACK } from '../constants';

export const TechStackSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
              }}
              >
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
                    }}
                    >
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
);
