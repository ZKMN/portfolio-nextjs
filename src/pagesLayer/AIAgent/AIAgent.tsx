'use client';

import React from 'react';

import { BackNavigation } from './components';
import {
  ArchitectureSection,
  DecisionsSection,
  HallucinationSection,
  HeroSection,
  ProblemSection,
  ResultsSection,
  TechStackSection,
  ToolsSection,
} from './sections';

export const AIAgent = (): React.ReactElement => (
  <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
    <BackNavigation />
    <HeroSection />

    <main>
      <ProblemSection />
      <ArchitectureSection />
      <TechStackSection />
      <ToolsSection />
      <HallucinationSection />
      <DecisionsSection />
      <ResultsSection />
    </main>

    <style jsx>{`
      .hero-title {
        font-size: var(--text-5xl);
      }
      .hero-subtitle {
        font-size: var(--text-2xl);
      }
      .hero-description {
        font-size: var(--text-lg);
      }
      .hero-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
      }
      .problem-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
      }
      .architecture-flow {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        max-width: 700px;
      }
      .stack-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
      }
      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
        gap: var(--space-3);
      }
      .guards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }
      .results-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: var(--text-3xl);
        }
        .hero-subtitle {
          font-size: var(--text-xl);
        }
        .hero-description {
          font-size: var(--text-base);
        }
        .hero-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }
        .problem-grid {
          grid-template-columns: 1fr;
        }
        .stack-grid {
          grid-template-columns: 1fr;
        }
        .guards-grid {
          grid-template-columns: 1fr;
        }
        .results-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);
