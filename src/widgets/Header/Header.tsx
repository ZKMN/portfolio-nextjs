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
  '> building full-stack products...',
  '> developing production-ready AI agents...',
  '> connecting product goals with technical reality...',
  '> from concept to scale.',
];

const TYPING_SPEED_MS = 35;
const LINE_PAUSE_MS = 400;

const stats = [
  { value: 20, suffix: '+', label: 'Projects Delivered', sublabel: '14 built from scratch' },
  { value: 3, suffix: '', label: 'AI Systems in Prod', sublabel: 'agent, moderation, content pipeline' },
  { value: 5, suffix: '', label: 'Live Products', sublabel: 'maintained & scaled solo' },
  { value: 9, suffix: '+', label: 'Years of Experience', sublabel: 'full-stack, product & AI' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/denis-klymenko/', icon: <LinkedInIcon /> },
  { name: 'GitHub', href: 'https://github.com/ZKMN', icon: <GitHubIcon /> },
  { name: 'Telegram', href: 'https://t.me/denisklim01', icon: <TelegramIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/denisklim01/', icon: <InstagramIcon /> },
];

const clientLogos = [
  { name: 'Corva', href: 'https://www.corva.ai/' },
  { name: 'S-PRO', href: 'https://s-pro.io/' },
  { name: 'Modo Energy', href: 'https://modoenergy.com/' },
  { name: 'Blackbird Lab', href: 'https://blackbird-lab.com/' },
  { name: 'loveepil', href: 'https://www.loveepil.com/' },
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

const useTypingEffect = (): { lines: string[]; isAnimating: boolean } => {
  const [lines, setLines] = useState<string[]>(TYPING_LINES);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    setLines([]);
    setIsAnimating(true);

    let lineIndex = 0;
    let charIndex = 0;
    const currentLines: string[] = [];

    const type = (): void => {
      if (lineIndex >= TYPING_LINES.length) {
        setIsAnimating(false);
        return;
      }

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

  return { lines, isAnimating };
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
  const { lines: typedLines, isAnimating } = useTypingEffect();

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
              Open to new architecture & product roles
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
              lineHeight: 1.4,
            }}
          >
            I turn complex business problems into production platforms.
            <br />
            <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>
              Architecture, code, AI, delivery - one person.
            </span>
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
                {isAnimating && i === typedLines.length - 1 && (
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

          {/* Client Logos */}
          <motion.div custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--border)' }}
          >
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-6)' }}>
              Worked with
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-10)', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {clientLogos.map((client) => (
                <a
                  key={client.name}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-logo"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
                    textDecoration: 'none',
                  }}
                >
                  {client.name}
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
        .client-logo:hover {
          color: rgba(255,255,255,0.85) !important;
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
