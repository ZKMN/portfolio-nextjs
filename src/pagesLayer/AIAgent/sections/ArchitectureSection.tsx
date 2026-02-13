import React from 'react';
import { motion } from 'framer-motion';

import { ARCHITECTURE_STEPS, FADE_UP } from '../constants';

export const ArchitectureSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-title">The Solution: Brain-First Architecture</h2>
        <p className="section-subtitle">
          A single fine-tuned LLM reads a comprehensive system prompt and decides which tools to call —
          no hardcoded state machines, no rigid flows.
        </p>
      </motion.div>

      {/* Architecture Flow */}
      <div style={{ marginTop: 'var(--space-12)' }}>
        <div className="architecture-flow">
          {ARCHITECTURE_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}
            >
              <div style={{
                flexShrink: 0,
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 'var(--text-sm)',
                color: 'white',
                boxShadow: 'var(--shadow-glow)',
              }}
              >
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 'var(--space-8)' }}
        >
          <div
            className="glass-card"
            style={{
              padding: 'var(--space-6) var(--space-8)',
              borderLeft: '3px solid var(--accent)',
              background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)',
            }}
          >
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-2)' }}>
              Key Innovation: prepareStep
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Before each LLM step,
              <code style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-light)',
                background: 'rgba(99, 102, 241, 0.1)',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
              >prepareStep</code> rebuilds
              the system prompt with real-time state from tool executions. When the user says &quot;Wroclaw, women, laser&quot; — the LLM processes it in 4 sequential steps,
              with each step seeing the updated context from the previous tool call.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
