'use client';

import React from 'react';
import { EXPERIENCE } from '@/widgets/Expirience/consts/experience';
import { SKILLS, SKILL_CATEGORIES } from '@/widgets/Skills/consts';
import Image from 'next/image';

/* Reusing skill logic from Skills.tsx but simplified for print */
const skillsByCategory = (Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>).reduce((acc, category) => {
  acc[category] = SKILLS.filter(skill => skill.category === category);
  return acc;
}, {} as Record<keyof typeof SKILL_CATEGORIES, typeof SKILLS>);

export default function ResumePage() {
  React.useEffect(() => {
    // Optional: Auto-print or just let user click button
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page" style={{
      background: 'var(--bg-primary)',
      minHeight: '100vh',
      color: 'var(--text-primary)',
      padding: '40px',
      maxWidth: '210mm', /* A4 width */
      margin: '0 auto'
    }}>

      {/* Print Control (Hidden on Print) */}
      <div className="no-print" style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button onClick={handlePrint} className="btn btn--primary" style={{ padding: '12px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          🖨️ Print / Save as PDF
        </button>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>Denis Klymenko</h1>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--accent-light)', marginBottom: '16px' }}>AI Agent Architect & Full-Stack Product Engineer</h2>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <a href="mailto:klymdenis@gmail.com">klymdenis@gmail.com</a> {/* Placeholder if not provided */}
          <span>•</span>
          <a href="https://denovo.sh">denisklymenko-soft.com</a>
          <span>•</span>
          <a href="https://linkedin.com/in/denis-klymenko">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/ZKMN">GitHub</a>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: '30px' }}>
        <h3 className="resume-section-title">Professional Summary</h3>
        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          Lead AI Architect specializing in Brain-first AI Agents and Scalable SaaS Architectures.
          Expert in orchestrating complex tool chains (21+ tools), fine-tuning LLMs, and building high-performance Next.js ecosystems.
          Proven track record of delivering 20+ projects (14 from scratch) with a focus on stability, observability, and business logic governance.
        </p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '30px' }}>
        <h3 className="resume-section-title">Experience</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {EXPERIENCE.filter(e => e.open !== false).map((exp) => (
            <div key={exp.name} className="resume-item" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{exp.role} at <span style={{ color: 'var(--accent-light)' }}>{exp.name}</span></h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{exp.time}</span>
              </div>
              <p style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>{exp.responsibilities}</p>

              {exp.achievements && (
                <div style={{ marginTop: '8px' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--success)', textTransform: 'uppercase' }}>Key Achievement:</strong>
                  <span style={{ fontSize: '0.9rem', marginLeft: '6px', color: 'var(--text-secondary)' }}>{exp.achievements}</span>
                </div>
              )}

              {exp.stack && (
                <div style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                  <strong>Tech:</strong> {exp.stack}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '30px', breakInside: 'avoid' }}>
        <h3 className="resume-section-title">Technical Skills</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {(Object.entries(SKILL_CATEGORIES) as Array<[keyof typeof SKILL_CATEGORIES, string]>).map(([category, categoryName]) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills || categorySkills.length === 0) return null;
            return (
              <div key={category} style={{ breakInside: 'avoid' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-light)', marginBottom: '8px', textTransform: 'uppercase' }}>{categoryName}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {categorySkills.map(skill => (
                    <span key={skill.title} style={{
                      fontSize: '0.8rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)'
                    }}>
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        .resume-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 8px;
          margin-bottom: 16px;
        }

        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: #0a0a0f !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .resume-page {
            width: 100%;
            max-width: none;
            padding: 20px 40px;
            margin: 0;
            background: #0a0a0f !important;
            color: #f0f0f5 !important;
            min-height: 0 !important;
            height: auto !important;
            display: block !important;
          }
          section {
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .no-print {
            display: none !important;
          }
          a {
            color: inherit !important;
            text-decoration: none !important;
          }
          /* Ensure text is visible */
          p, span, h1, h2, h3, h4, h5, h6 {
            color: #f0f0f5 !important; 
            text-shadow: none !important;
          }
          /* Specific overrides for readability if needed */
        }
      `}</style>
    </div>
  );
}
