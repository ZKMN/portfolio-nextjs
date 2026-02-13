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
        <ScrambleTitle text="The Problem" />
        <p className="section-subtitle">
          Why standard chatbots and RAG pipelines fail for complex business workflows.
        </p>
      </motion.div>

      <div className="problem-grid" style={{ marginTop: 'var(--space-12)' }}>
        {PROBLEM_POINTS.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] } }}
            whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            viewport={{ once: true }}
          >
            <div
              className="glass-card"
              style={{
                padding: 'var(--space-6)',
                height: '100%',
                borderLeft: '3px solid rgba(239, 68, 68, 0.5)',
              }}
            >
              <div style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: '#ef4444',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 'var(--space-2)',
              }}
              >
                Problem {String(index + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
                {point.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
