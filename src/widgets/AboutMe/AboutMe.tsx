'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

const experienceSnapshot = [
  'Built and scaled the Loveepil platform across web, admin, analytics, and AI services.',
  'Delivered 20+ projects (14 from scratch), handling everything from architecture to production release.',
  'Led end-to-end product engineering, including localization, payments, and system reliability.',
];

const howIWork = [
  {
    title: 'Architecture first',
    description: 'I define clear boundaries, data flows, and contracts before writing code.',
  },
  {
    title: 'Product-minded',
    description: 'I focus on connecting business goals with the technical reality of the platform.',
  },
  {
    title: 'Full ownership',
    description: 'I build, ship, and operate systems, making sure they actually work in production.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const AboutMe = () => (
  <section id="about-me" className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      {/* Section Header */}
      <motion.div variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScrambleTitle text="About Me" />
        <p className="section-subtitle">
          Product Engineer & AI Architect. I design, build, and ship entire systems — from architecture and AI to frontend and operations.
        </p>
      </motion.div>

      <div className="about-grid">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-2xl)',
            overflow: 'hidden',
            background: 'var(--gradient-accent)',
            padding: '3px',
          }}
          >
            <div style={{ borderRadius: 'calc(var(--radius-2xl) - 3px)', overflow: 'hidden' }}>
              <Image
                width={400}
                height={500}
                alt="Denis Klymenko"
                src="/images/photo.jpg"
                style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            {/* Photo glow */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '10%',
              right: '10%',
              height: '40px',
              background: 'var(--accent-glow)',
              filter: 'blur(30px)',
              borderRadius: '50%',
            }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}
        >
          {/* Experience Snapshot */}
          <div>
            <span className="badge badge--accent" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
              Experience Snapshot
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {experienceSnapshot.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--accent-light)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>◆</span>
                  <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How I Work */}
          <div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
              How I Work
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {howIWork.map(({ title, description }, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: 'var(--text-lg)', lineHeight: 1.7, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{title}:</strong> {description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </div>

    <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-12);
          margin-top: var(--space-12);
          align-items: start;
        }

        @media (max-width: 900px) {
          .about-grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-8);
          }
          /* Limit image width on mobile and center it */
          .about-grid > div:first-child {
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
            order: -1; /* Force image to top */
          }
        }
      `}</style>
  </section>
);
