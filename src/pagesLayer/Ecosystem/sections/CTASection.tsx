import React from 'react';
import { motion } from 'framer-motion';

export const CTASection = (): React.ReactElement => (
  <section
    className="section"
    style={{
      background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 50%, var(--bg-secondary) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background glow */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
      opacity: 0.15,
      pointerEvents: 'none',
    }}
    />

    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 700,
          background: 'var(--gradient-text)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 'var(--space-4)',
          letterSpacing: '-0.02em',
        }}
        >
          Interested in the Architecture?
        </h2>
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto var(--space-10)',
          lineHeight: 1.7,
        }}
        >
          Whether you&apos;re building a multi-service SaaS, integrating AI into a product, or scaling across markets - I&apos;d love to talk about system design.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <button
            className="btn btn--primary btn--lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk About Architecture
          </button>
          <a
            href="/projects/ai-agent"
            className="btn btn--outline btn--lg"
            style={{ textDecoration: 'none' }}
          >
            View AI Agent Deep Dive →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
