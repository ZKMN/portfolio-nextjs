import React from 'react';
import { motion } from 'framer-motion';

import { FADE_UP, TOOL_CATEGORIES } from '../constants';

export const ToolsSection = (): React.ReactElement => (
  <section className="section" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-title">21 Orchestrated Tools</h2>
        <p className="section-subtitle">
          The Brain LLM has access to 21 specialized tools organized into 5 categories.
          Each tool validates its own context and returns typed results.
        </p>
      </motion.div>

      <div style={{ marginTop: 'var(--space-12)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        {TOOL_CATEGORIES.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card" style={{ padding: 'var(--space-6) var(--space-8)', overflow: 'hidden', position: 'relative' }}>
              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: category.color,
                opacity: 0.8,
              }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {category.name}
                </h3>
                <span className="badge badge--ghost">{category.tools.length} tools</span>
              </div>

              <div className="tools-grid">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <code style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-sm)',
                      color: category.color,
                      fontWeight: 600,
                    }}
                    >
                      {tool.name}
                    </code>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)', lineHeight: 1.5 }}>
                      {tool.description}
                    </p>
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
