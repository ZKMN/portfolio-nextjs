'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { MagneticWrap } from '@/shared/components/MagneticWrap';
import { ScrambleTitle } from '@/shared/components/ScrambleTitle';
import { DownloadIcon, LinkedInIcon, MailIcon, SendIcon, TelegramIcon } from '@/shared/icons';

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
      }}
      />

      <section className="section footer-section">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ScrambleTitle text="Get in Touch" />
            <p className="section-subtitle" style={{ marginBottom: 'var(--space-12)' }}>
              Have a project in mind or just want to chat? Reach out &mdash; I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'var(--space-12)',
          }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <label
                    htmlFor="subject"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="form-input form-textarea"
                  />
                </div>

                <MagneticWrap>
                  <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                    <SendIcon />
                    Send Message
                  </button>
                </MagneticWrap>
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
                <h3 className="contact-heading">
                  Fastest Answer
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <a href="mailto:klymdenis@gmail.com" className="contact-link">
                    <MailIcon />
                    klymdenis@gmail.com
                  </a>

                  <a
                    href="https://www.linkedin.com/in/denis-klymenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>

                  <a
                    href="https://t.me/denisklim01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <TelegramIcon />
                    Telegram
                  </a>
                </div>
              </div>

              <MagneticWrap>
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                  style={{ alignSelf: 'flex-start', textDecoration: 'none' }}
                >
                  <DownloadIcon />
                  Download CV
                </a>
              </MagneticWrap>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .form-label {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          margin-bottom: var(--space-2);
        }
        .form-input {
          width: 100%;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-glass);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          color: var(--text-primary);
          font-size: var(--text-sm);
          font-family: var(--font-sans);
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form-input:focus {
          border-color: var(--accent);
        }
        .form-textarea {
          resize: vertical;
        }
        .contact-heading {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: var(--space-4);
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--text-secondary);
          font-size: var(--text-base);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .contact-link:hover {
          color: var(--accent-light);
        }

        .footer-section {
          padding-bottom: var(--space-12);
        }
        @media (max-width: 768px) {
          .footer-section {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </footer>
  );
};
