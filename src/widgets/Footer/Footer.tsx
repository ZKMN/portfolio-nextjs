'use client';

import React from 'react';
import { Section, Title, Button } from '@/shared/UI';
import { Form } from '@/shared/UI/Form';
import { FIELDS } from './consts';
import { validationSchema } from './lib';

export const Footer = () => {
  const handleDownloadCV = () => {
    window.open('/api/download-cv', '_blank');
  };

  return (
    <footer id="contact" className="bg-primary text-white">
      <Section className="py-16">
        <div className="mb-12">
          <Title title="Get in Touch" variant="h3" className="text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Form
              fields={FIELDS}
              validationSchema={validationSchema}
              initialValues={{
                subject: '',
                message: '',
              }}
              onSubmit={({ subject, message }) => {
                window.location.href = `mailto:klymdenis@gmail.com?subject=${subject}&body=${message}`;
              }}
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white/80 mb-4">Fastest answer:</p>
              <div className="space-y-4">
                <a
                  href="mailto:klymdenis@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-accent transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>klymdenis@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/denis-klymenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-accent transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <Button
                  variant="secondary"
                  onClick={handleDownloadCV}
                  className="mt-6"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-black/50 py-6 text-center">
        <p className="text-white/60">
          © Copyright {new Date().getFullYear()} Denis Klymenko
        </p>
      </div>
    </footer>
  );
};
