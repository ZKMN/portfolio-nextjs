'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { CONTENT_FLOWS, FADE_UP } from '../constants';

export const ContentEngineSection = (): React.ReactElement => {
  const [activeFlow, setActiveFlow] = useState<string>('discovery');
  const flow = CONTENT_FLOWS.find((f) => f.id === activeFlow) ?? CONTENT_FLOWS[0];

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrambleTitle text="How Data Gets In Without a Content Team" />
          <p className="section-subtitle">
            The platform launched with 200+ businesses and 80+ events on day one. No content team, no manual
            data entry. Here is how each data pipeline works and how the platform maintains quality over time.
          </p>
        </motion.div>

        <div style={{ marginTop: 'var(--space-12)' }}>
          {/* Flow selector tabs */}
          <div className="cp-flow-tabs">
            {CONTENT_FLOWS.map((f) => (
              <button
                key={f.id}
                className={`cp-flow-tab ${activeFlow === f.id ? 'cp-flow-tab--active' : ''}`}
                onClick={() => setActiveFlow(f.id)}
                style={{
                  '--tab-color': f.color,
                } as React.CSSProperties}
              >
                <span className="cp-flow-tab-dot" style={{ background: f.color }} />
                <span className="cp-flow-tab-label">{f.title}</span>
              </button>
            ))}
          </div>

          {/* Flow detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={flow.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: 'var(--space-8)' }}
            >
              <div className="glass-card" style={{ padding: 'var(--space-8)', borderTop: `3px solid ${flow.color}` }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    {flow.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    {flow.subtitle}
                  </p>
                </div>

                <div className="cp-flow-steps">
                  {flow.steps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="cp-flow-step"
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div
                          className="cp-flow-step-number"
                          style={{
                            background: flow.color,
                            boxShadow: `0 0 12px ${flow.color}40`,
                          }}
                        >
                          {step.step}
                        </div>
                        {index !== flow.steps.length - 1 && (
                          <div style={{ background: `linear-gradient(to bottom, ${flow.color}, transparent)`, flex: 1, width: 2, minHeight: 'var(--space-6)', opacity: 0.2 }} />
                        )}
                      </div>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, paddingTop: '4px' }}>
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
