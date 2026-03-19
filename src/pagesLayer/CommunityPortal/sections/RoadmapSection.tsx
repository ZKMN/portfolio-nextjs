import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, ROADMAP_ITEMS } from '../constants';

export const RoadmapSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="What's Next" />
        <p className="section-subtitle">
          The platform runs itself today. These features will push automation further -
          from AI-powered moderation to self-marketing and intelligent search.
        </p>
      </motion.div>

      <div className="cp-roadmap-grid" style={{ marginTop: 'var(--space-12)' }}>
        {ROADMAP_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card"
              style={{
                padding: 'var(--space-6)',
                height: '100%',
                borderTop: `3px solid ${item.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <span style={{ fontSize: 'var(--text-2xl)' }}>{item.icon}</span>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
