import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, OUTCOME_GROUPS, OWNERSHIP_AREAS } from '../constants';

export const OutcomesSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      {/* Outcomes */}
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="What the Ecosystem Delivers" />
        <p className="section-subtitle">
          The measurable results of building a connected system instead of a collection of separate apps.
        </p>
      </motion.div>

      <div className="eco-outcomes-grid" style={{ marginTop: 'var(--space-12)' }}>
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

      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginTop: 'var(--space-20)' }}
      >
        <h2 className="section-title" style={{ fontSize: 'var(--text-2xl)' }}>My Role Across the Ecosystem</h2>
        <p className="section-subtitle" style={{ marginBottom: 'var(--space-8)' }}>
          I didn&apos;t just write features - I designed the system architecture, implemented all seven services, and maintain sole ownership of every critical boundary.
        </p>
      </motion.div>

      <div className="eco-ownership-grid">
        {OWNERSHIP_AREAS.map((area, areaIndex) => (
          <motion.div
            key={area.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: areaIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card" style={{ padding: 'var(--space-6)', height: '100%' }}>
              <h3 style={{
                fontSize: 'var(--text-base)',
                fontWeight: 700,
                color: 'var(--accent-light)',
                marginBottom: 'var(--space-4)',
              }}
              >
                {area.category}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {area.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-light)', lineHeight: 1.7, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
