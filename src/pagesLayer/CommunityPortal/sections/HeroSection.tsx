import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { HeroShell } from '@/shared/components/HeroShell';
import { useCountUp } from '@/shared/hooks/useCountUp';

import { HERO_STATS } from '../constants';
import type { HeroStat } from '../types';

const EASE = [0.16, 1, 0.3, 1];

const CountUpStat = ({ stat }: { stat: HeroStat }): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp({ target: stat.numericValue ?? 0, isInView });

  const hasNumeric = stat.numericValue !== undefined;
  const displayValue = hasNumeric
    ? `${stat.prefix ?? ''}${count}${stat.suffix ?? ''}`
    : stat.value;

  return (
    <motion.div
      ref={ref}
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
        fontFamily: 'var(--font-mono)',
      }}
      >
        {displayValue}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
        {stat.label}
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
        {stat.sublabel}
      </div>
    </motion.div>
  );
};

export const HeroSection = (): React.ReactElement => (
  <HeroShell>
    <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="badge badge--accent" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', display: 'inline-flex', gap: 'var(--space-2)' }}>
            <span style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--success)' }} />
            Community Platform Case Study
          </span>
        </motion.div>

        <motion.h1
          className="cp-hero-title"
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
          200+ Listings on Day One. Zero Content Team.
        </motion.h1>

        <motion.h2
          className="cp-hero-subtitle"
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
          A Community Platform That Populates, Enriches, and Maintains Itself
        </motion.h2>

        <motion.p
          className="cp-hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          style={{
            color: 'var(--text-tertiary)',
            maxWidth: '750px',
            margin: '0 auto var(--space-12)',
            lineHeight: 1.7,
          }}
        >
          A community platform for Ukrainians in Spain with 8 content verticals. Businesses discovered
          via Google Places API, events aggregated from public sources, data enriched automatically.
          Built solo - from architecture and data pipelines to moderation system and production monitoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          style={{ marginBottom: 'var(--space-8)' }}
        >
          <span className="badge badge--ghost" style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-2) var(--space-4)' }}>
            Product Engineer & AI Architect
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
        >
          <div className="cp-hero-stats-grid">
            {HERO_STATS.map((stat) => (
              <CountUpStat key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </HeroShell>
);
