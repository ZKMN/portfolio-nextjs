'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { EXPERIENCE } from '../Expirience/consts/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const CareerTimeline = () => (
    <section id="career" className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <motion.div variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
        >
          <ScrambleTitle text="Career Timeline" />
        </motion.div>

        <div style={{ position: 'relative', marginTop: 'var(--space-12)' }}>
          {/* Timeline line with gradient */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
            opacity: 0.4,
            display: 'none',
          }}
className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', paddingLeft: '0px' }}
                className="timeline-item"
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '28px',
                  width: '18px',
                  height: '18px',
                  background: 'var(--gradient-accent)',
                  borderRadius: '50%',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: 'var(--shadow-glow)',
                  display: 'none',
                  zIndex: 2,
                }}
className="timeline-dot"
                />

                <div className="glass-card" style={{ padding: 'var(--space-6) var(--space-8)' }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 'var(--space-4)',
                  }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                          {exp.name}
                        </h3>
                        {exp.companyLink && (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent-light)', display: 'flex', alignItems: 'center', padding: 'var(--space-1)' }}
                            title="Visit Company"
                          >
                            <svg width="18"
height="18"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
                            >
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {exp.role && (
                        <div style={{ fontSize: 'var(--text-md)', color: 'var(--accent-light)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                          {exp.role}
                        </div>
                      )}

                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                        <svg width="14"
height="14"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
                        ><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {exp.time}
                      </span>
                    </div>
                  </div>

                  {/* Stack */}
                  {exp.stack && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-2)',
                      }}
                      >
                        Stack
                      </h4>
                      <div className="tech-stack-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', paddingBottom: 'var(--space-2)' }}>
                        {exp.stack.split(', ').map((tech: string) => (
                          <span key={tech} className="badge badge--accent" style={{ whiteSpace: 'nowrap' }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {exp.responsibilities && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-2)',
                      }}
                      >
                        Responsibilities
                      </h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                        {exp.responsibilities}
                      </p>
                    </div>
                  )}

                  {/* Security Focus */}
                  {exp.security && exp.security.length > 0 && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                      }}
                      >
                        <span style={{ fontSize: '14px' }}>🛡</span>
                        Security Focus
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                        {exp.security.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '10px', marginTop: '6px' }}>•</span>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && (
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <h4 style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--success)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-2)',
                      }}
                      >
                        Achievements
                      </h4>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                        {exp.achievements}
                      </p>
                    </div>
                  )}

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: 'var(--space-3)',
                      }}
                      >
                        Projects
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                        {exp.projects.map((project: { name: string; link?: string; description: string }) => (
                          <div
                            key={project.name}
                            style={{
                              padding: 'var(--space-4) var(--space-5)',
                              borderLeft: '3px solid var(--accent)',
                              background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.03) 0%, transparent 100%)',
                              borderRadius: '0 8px 8px 0',
                              marginBottom: 'var(--space-3)',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                              <span style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--text-primary)' }}>
                                {project.name}
                              </span>
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: 'var(--accent-light)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center' }}
                                >
                                  <svg width="12"
height="12"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
                                  >
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                  </svg>
                                </a>
                              )}
                            </div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .timeline-line { display: block !important; }
          .timeline-dot { display: block !important; }
          .timeline-item { padding-left: 56px !important; }
        }

        @media (max-width: 768px) {
          .tech-stack-scroll {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            scrollbar-width: none;
            margin-right: -24px;
            padding-right: 24px;
            mask-image: linear-gradient(to right, black 90%, transparent 100%);
          }
          .tech-stack-scroll::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
);
