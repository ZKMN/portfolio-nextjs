import React from 'react';
import { motion } from 'framer-motion';

import { HERO_STATS } from '../constants';

const EASE = [0.16, 1, 0.3, 1];

export const HeroSection = (): React.ReactElement => (
  <header style={{
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gradient-hero)',
    overflow: 'hidden',
  }}
  >
    {/* Ambient glow orbs */}
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite',
      }}
      />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--accent-2-glow) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite reverse',
      }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      />
    </div>

    <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="badge badge--accent" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', display: 'inline-flex', gap: 'var(--space-2)' }}>
            <span style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--success)' }} />
            Case Study
          </span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          style={{
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginTop: 'var(--space-6)',
            marginBottom: 'var(--space-4)',
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Building a Production AI Agent
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          style={{
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.3,
          }}
        >
          Brain-First Architecture with 21 Orchestrated Tools
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          style={{
            color: 'var(--text-tertiary)',
            maxWidth: '700px',
            margin: '0 auto var(--space-12)',
            lineHeight: 1.7,
          }}
        >
          How I built an enterprise AI agent for a European beauty chain that handles booking,
          knowledge search, cart management, and customer support across 18 studios in 5 countries —
          with near-zero hallucinations.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          <div className="hero-stats-grid">
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass-card glass-card--glow"
                style={{ padding: 'var(--space-6) var(--space-4)', textAlign: 'center' }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  marginBottom: 'var(--space-2)',
                }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);
