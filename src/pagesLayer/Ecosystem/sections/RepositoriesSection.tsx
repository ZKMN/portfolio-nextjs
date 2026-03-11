'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, REPOSITORIES } from '../constants';

export const RepositoriesSection = (): React.ReactElement => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrambleTitle text="Seven Services, One System" />
          <p className="section-subtitle">
            Each repository has a clear responsibility, its own deployment cycle, and specific reasons for being separate. Together, they form a complete product platform.
          </p>
        </motion.div>

        <div className="eco-repos-grid" style={{ marginTop: 'var(--space-12)' }}>
          {REPOSITORIES.map((repo, index) => {
            const isExpanded = expanded === repo.id;

            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                  <div
                  className="glass-card"
                  style={{
                    padding: 'var(--space-6)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onClick={() => setExpanded(isExpanded ? null : repo.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpanded(isExpanded ? null : repo.id);
                    }
                  }}
                  >
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: repo.color,
                  }}
                  />

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: repo.color,
                          boxShadow: `0 0 8px ${repo.color}`,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                          {repo.name}
                        </h3>
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{repo.label}</span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}
                    >
                      ▼
                    </motion.span>
                  </div>

                  {/* Responsibility */}
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                    {repo.responsibility}
                  </p>

                  {/* Scale badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)', marginBottom: 0 }}>
                    {repo.scale.map((s) => (
                      <span
                        key={s}
                        className="badge badge--ghost"
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border)', marginTop: 'var(--space-4)' }}>
                          {/* Key features */}
                          <h4 style={{
                            fontSize: 'var(--text-xs)',
                            fontWeight: 700,
                            color: 'var(--text-tertiary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginBottom: 'var(--space-3)',
                          }}
                          >
                            Key Features
                          </h4>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                            {repo.keyFeatures.map((f) => (
                              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                <span style={{ color: repo.color, lineHeight: 1.7, flexShrink: 0 }}>•</span>
                                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Why separated */}
                          <div style={{
                            padding: 'var(--space-3) var(--space-4)',
                            background: `linear-gradient(90deg, ${repo.color}10 0%, transparent 100%)`,
                            borderLeft: `2px solid ${repo.color}`,
                            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                            marginBottom: 'var(--space-4)',
                          }}
                          >
                            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: repo.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                              Why Separated
                            </span>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-1)' }}>
                              {repo.whySeparated}
                            </p>
                          </div>

                          {/* Stack */}
                          <div
                            className="eco-repos-stack"
                            style={{
                              display: 'flex',
                              flexWrap: 'nowrap',
                              gap: 'var(--space-2)',
                              overflowX: 'auto',
                              paddingBottom: 'var(--space-1)',
                              msOverflowStyle: 'none',
                              scrollbarWidth: 'none',
                            }}
                          >
                            {repo.stack.map((t) => (
                              <span key={t} className="chip" style={{ fontSize: '10px', whiteSpace: 'nowrap' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
