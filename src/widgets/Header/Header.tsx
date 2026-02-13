'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { HeroShell } from '@/shared/components/HeroShell';
import { MagneticWrap } from '@/shared/components/MagneticWrap';
import { useCountUp } from '@/shared/hooks/useCountUp';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TelegramIcon } from '@/shared/icons';

// =============================================================================
// Constants
// =============================================================================

const TYPING_LINES = [
  '> building production AI agents...',
  '> orchestrating 21 tools...',
  '> fine-tuning language models...',
  '> from scratch. always.',
];

const TYPING_SPEED_MS = 35;
const LINE_PAUSE_MS = 400;

const stats = [
  { value: 20, suffix: '', label: 'Projects Delivered', sublabel: '14 from scratch' },
  { value: 96, suffix: '%', label: 'Real User Score', sublabel: 'Core Web Vitals (Mobile)' },
  { value: 21, suffix: '', label: 'AI Tools Orchestrated', sublabel: 'brain-first agent' },
  { value: 8, suffix: '+', label: 'Years Experience', sublabel: '' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/denis-klymenko/', icon: <LinkedInIcon /> },
  { name: 'GitHub', href: 'https://github.com/ZKMN', icon: <GitHubIcon /> },
  { name: 'Telegram', href: 'https://t.me/denisklim01', icon: <TelegramIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/denisklim01/', icon: <InstagramIcon /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

// =============================================================================
// Hooks
// =============================================================================

const useTypingEffect = (): string[] => {
  const [lines, setLines] = useState<string[]>([]);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    const currentLines: string[] = [];

    const type = (): void => {
      if (lineIndex >= TYPING_LINES.length) return;

      const line = TYPING_LINES[lineIndex];

      if (charIndex > line.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(type, LINE_PAUSE_MS);
        return;
      }

      currentLines[lineIndex] = line.slice(0, charIndex);
      setLines([...currentLines]);
      charIndex++;
      setTimeout(type, TYPING_SPEED_MS);
    };

    setTimeout(type, 800);
  }, []);

  return lines;
};

// =============================================================================
// Sub-components
// =============================================================================

const CountUpStat = ({ value, suffix, label, sublabel }: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp({ target: value, isInView });

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
        {count}{suffix}
      </div>
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          {sublabel}
        </div>
      )}
    </motion.div>
  );
};

// =============================================================================
// Header
// =============================================================================

export const Header = (): React.ReactElement => {
  const typedLines = useTypingEffect();

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroShell>
      <div className="container hero-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Status badge */}
          <motion.div custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="badge badge--accent" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', display: 'inline-flex', gap: 'var(--space-2)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--success)' }} />
              Available for new projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-title"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
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
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.3,
            }}
          >
            AI Agent Architect & Full-Stack Product Engineer
          </motion.h2>

          {/* Terminal typing effect */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '480px',
              margin: '0 auto var(--space-12)',
              textAlign: 'left',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              lineHeight: 1.8,
              color: 'var(--text-tertiary)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-4) var(--space-5)',
            }}
          >
            {typedLines.map((line, i) => (
              <div key={i}
                style={{
                  color: i === TYPING_LINES.length - 1 ? 'var(--accent-light)' : 'var(--text-tertiary)',
                  fontWeight: i === TYPING_LINES.length - 1 ? 600 : 400,
                }}
              >
                {line}
                {i === typedLines.length - 1 && (
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: 'var(--accent-light)',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s step-end infinite',
                  }}
                  />
                )}
              </div>
            ))}
            {typedLines.length === 0 && (
              <span style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                background: 'var(--accent-light)',
                animation: 'blink 1s step-end infinite',
              }}
              />
            )}
          </motion.div>

          {/* Stats Grid */}
          <motion.div custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="stats-grid">
              {stats.map((stat) => (
                <CountUpStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  sublabel={stat.sublabel}
                />
              ))}
            </div>
          </motion.div>

          <motion.div custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginBottom: 'var(--space-12)', flexWrap: 'wrap' }}>
              <MagneticWrap>
                <button onClick={() => scrollToSection('projects')} className="btn btn--primary">
                  View Work
                </button>
              </MagneticWrap>
              <MagneticWrap>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ textDecoration: 'none' }}
                >
                  Download CV
                </a>
              </MagneticWrap>
            </div>
          </motion.div>

          <motion.div custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', alignItems: 'center' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-container {
          padding: 80px 24px;
        }
        .hero-title {
          font-size: var(--text-6xl);
        }
        .hero-subtitle {
          font-size: var(--text-2xl);
        }
        .social-link {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          padding: var(--space-2);
        }
        .social-link:hover {
          color: var(--accent);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-12);
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 16px 100px 16px;
          }
          .hero-title {
            font-size: var(--text-4xl);
          }
          .hero-subtitle {
            font-size: var(--text-xl);
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-3);
          }
          .stats-grid :global(.glass-card) {
            padding: var(--space-4) var(--space-1) !important;
            min-width: 0;
          }
          .hero-container :global(.btn) {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </HeroShell>
  );
};
