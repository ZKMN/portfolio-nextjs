'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const Footer = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:klymdenis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1uk44BO-0_IyZA_ne__DP4Mt4BzG4gPTM/view', '_blank');
  };

  return (
    <footer id="contact" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      {/* Top gradient border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)',
      }} />

      <section className="section" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-12)' }}>
              Have a project in mind or just want to chat? Reach out — I'd love to hear from you.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'var(--space-12)',
          }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <label htmlFor="subject" style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                  }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
            >
              <div>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-4)' }}>
                  Fastest Answer
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <a
                    href="mailto:klymdenis@gmail.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-base)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    klymdenis@gmail.com
                  </a>

                  <a
                    href="https://www.linkedin.com/in/denis-klymenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-base)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://t.me/denisklim01"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-base)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>

              <button className="btn btn--outline" onClick={handleDownloadCV} style={{ alignSelf: 'flex-start' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: 'var(--space-6) 0',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Denis Klymenko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
