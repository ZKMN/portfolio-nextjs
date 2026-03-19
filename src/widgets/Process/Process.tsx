'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

const STEPS = [
  { number: '01', title: 'Discovery', description: 'Understand your business, users, and constraints' },
  { number: '02', title: 'Architecture', description: 'Design services, data model, integrations' },
  { number: '03', title: 'Build', description: 'Iterative delivery, working product from week 1' },
  { number: '04', title: 'Launch', description: 'Deployment, monitoring, zero-downtime rollout' },
  { number: '05', title: 'Support', description: 'Maintenance, new features, scaling' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const Process = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="How I Work" />
      </motion.div>

      <div className="process-grid">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="process-step">
              <span className="process-number">{step.number}</span>
              <div>
                <span className="process-title">{step.title}</span>
                <span className="process-desc"> — {step.description}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .process-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-10);
          max-width: 700px;
        }
        .process-step {
          display: flex;
          align-items: baseline;
          gap: var(--space-4);
          padding: var(--space-4) 0;
          border-bottom: 1px solid var(--border);
        }
        .process-number {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--accent-light);
          font-weight: 600;
          flex-shrink: 0;
        }
        .process-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
        }
        .process-desc {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        @media (max-width: 768px) {
          .process-step {
            gap: var(--space-3);
            padding: var(--space-3) 0;
          }
        }
      `}</style>
    </div>
  </section>
);
