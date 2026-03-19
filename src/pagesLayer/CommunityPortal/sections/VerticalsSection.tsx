import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, VERTICALS } from '../constants';

export const VerticalsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="Eight Verticals, Each With Its Own Data Strategy" />
        <p className="section-subtitle">
          Some verticals are auto-discovered via APIs, some are aggregated from public sources,
          some grow organically through user submissions. One architecture serves all of them.
        </p>
      </motion.div>

      <div className="cp-verticals-grid" style={{ marginTop: 'var(--space-12)' }}>
        {VERTICALS.map((vertical, index) => (
          <motion.div
            key={vertical.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="glass-card"
              style={{
                padding: 'var(--space-5)',
                height: '100%',
                borderLeft: `3px solid ${vertical.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {vertical.name}
                </h3>
                <span
                  className="badge badge--ghost"
                  style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', flexShrink: 0 }}
                >
                  {vertical.dataSource}
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                {vertical.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
