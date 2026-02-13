import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { MagneticWrap } from '@/shared/components/MagneticWrap';
import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, RESULTS } from '../constants';

export const ResultsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="The Outcome" />
      </motion.div>

      <div className="results-grid" style={{ marginTop: 'var(--space-12)' }}>
        {RESULTS.map((result, index) => (
          <motion.div
            key={result.metric}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] } }}
            whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            viewport={{ once: true }}
          >
            <div style={{
              padding: 'var(--space-5)',
              background: 'var(--success-subtle)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              height: '100%',
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>&#10003;</span>
                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--success)' }}>
                  {result.metric}
                </h4>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {result.description}
              </p>
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
          <MagneticWrap>
            <Link href="/#contact" className="btn btn--primary" style={{ textDecoration: 'none' }}>
              Get in Touch
            </Link>
          </MagneticWrap>
          <MagneticWrap>
            <a
              href="https://www.loveepil.com/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              style={{ textDecoration: 'none' }}
            >
              Try the Agent Live
            </a>
          </MagneticWrap>
        </div>
      </motion.div>
    </div>
  </section>
);
