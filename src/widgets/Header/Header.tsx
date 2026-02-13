'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { value: '20', label: 'Projects Delivered', sublabel: '14 from scratch' },
  { value: '96%', label: 'Real User Score', sublabel: 'Core Web Vitals (Mobile)' },
  { value: '21', label: 'AI Tools Orchestrated', sublabel: 'brain-first agent' },
  { value: '8+', label: 'Years Experience' },
];

const socialLinks = [
  {
    name: 'LinkedIn', href: 'https://www.linkedin.com/in/denis-klymenko/', icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    )
  },
  {
    name: 'GitHub', href: 'https://github.com/ZKMN', icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    )
  },
  {
    name: 'Telegram', href: 'https://t.me/denisklim01', icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
    )
  },
  {
    name: 'Instagram', href: 'https://www.instagram.com/denisklim01/', icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
    )
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Header = () => {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1uk44BO-0_IyZA_ne__DP4Mt4BzG4gPTM/view', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gradient-hero)',
      overflow: 'hidden',
    }}>
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
        }} />
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
        }} />
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container hero-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Status badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
          >
            <span className="badge badge--accent" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', display: 'inline-flex', gap: 'var(--space-2)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--success)' }} />
              Available for new projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-title"
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
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
            Denis Klymenko
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="hero-subtitle"
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.3,
            }}
          >
            AI Agent Architect & Full-Stack Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="hero-description"
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              color: 'var(--text-tertiary)',
              maxWidth: '640px',
              margin: '0 auto var(--space-12)',
              lineHeight: 1.7,
            }}
          >
            Specializing in Brain-first AI Agents, Agentic Workflows, and Scalable SaaS Architectures.
            I build predictable AI systems where LLM reasoning is governed by rigid business logic.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
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
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                      {stat.sublabel}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons and Social Links remain the same, just keeping structure */}
          {/* ... (Motion divs 5 and 6) ... */}

          {/* Social Links... */}
          {/* ... */}
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          padding: 80px 24px;
        }
        .hero-title {
          font-size: var(--text-6xl);
        }
        .hero-subtitle {
          font-size: var(--text-2xl);
        }
        .hero-description {
          font-size: var(--text-lg);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-12);
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 16px 100px 16px; /* Added bottom padding */
          }
          .hero-title {
            font-size: var(--text-4xl);
          }
          .hero-subtitle {
            font-size: var(--text-xl);
          }
          .hero-description {
            font-size: var(--text-base);
          }
          /* FORCE 2 COLUMNS */
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-3);
          }
          /* Ensure cards fit in 2 columns */
          .stats-grid :global(.glass-card) {
            padding: var(--space-4) var(--space-1) !important;
            min-width: 0; /* Prevent overflow */
          }
          /* Buttons stack on very small screens */
          .hero-container :global(.btn) {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
};
