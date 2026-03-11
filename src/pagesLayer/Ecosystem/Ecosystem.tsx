'use client';

import React from 'react';

import {
  CTASection,
  DecisionsSection,
  EcosystemMapSection,
  FlowsSection,
  HeroSection,
  OutcomesSection,
  ProblemSection,
  RepositoriesSection,
} from './sections';

export const Ecosystem = (): React.ReactElement => (
  <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
    <HeroSection />

    <main>
      <ProblemSection />
      <EcosystemMapSection />
      <RepositoriesSection />
      <FlowsSection />
      <DecisionsSection />
      <OutcomesSection />
      <CTASection />
    </main>

    <style jsx global>{`
      /* ── Hero ──────────────────────────────────── */
      .eco-hero-title {
        font-size: var(--text-5xl);
      }
      .eco-hero-subtitle {
        font-size: var(--text-2xl);
      }
      .eco-hero-description {
        font-size: var(--text-lg);
      }
      .eco-hero-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
      }

      /* ── Problem ───────────────────────────────── */
      .eco-problem-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
      }

      /* ── Ecosystem Map ─────────────────────────── */
      .eco-map-wrapper {
        display: grid;
        grid-template-columns: 1fr 340px;
        gap: var(--space-6);
        align-items: start;
      }
      .eco-map-svg-container {
        position: relative;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border);
        border-radius: var(--radius-xl);
        padding: var(--space-4);
        aspect-ratio: 1;
        max-height: 520px;
      }
      .eco-map-detail {
        position: sticky;
        top: calc(var(--nav-height) + var(--space-4));
      }

      /* ── Repositories ──────────────────────────── */
      .eco-repos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
        gap: var(--space-6);
        align-items: flex-start;
      }
      .eco-repos-stack::-webkit-scrollbar {
        display: none;
      }

      /* ── Flows ─────────────────────────────────── */
      .eco-flow-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
      }
      .eco-flow-tab {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-full);
        font-size: var(--text-xs);
        font-weight: 600;
        color: var(--text-tertiary);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border);
        transition: all var(--duration-normal) var(--ease-out);
      }
      .eco-flow-tab:hover {
        color: var(--text-primary);
        border-color: var(--border-hover);
      }
      .eco-flow-tab--active {
        color: var(--text-primary);
        background: rgba(255, 255, 255, 0.08);
        border-color: var(--tab-color, var(--accent));
        box-shadow: 0 0 12px color-mix(in srgb, var(--tab-color, var(--accent)) 30%, transparent);
      }
      .eco-flow-tab-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .eco-flow-tab-label {
        white-space: nowrap;
      }
      .eco-flow-steps {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
      }
      .eco-flow-step {
        display: flex;
        align-items: flex-start;
        gap: var(--space-4);
        position: relative;
      }
      .eco-flow-step-number {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: var(--text-xs);
        color: white;
        position: relative;
        z-index: 1;
      }
      .eco-flow-step-line {
        /* Styled inline in component */
      }

      /* ── Decisions ─────────────────────────────── */
      .eco-decision-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
      }
      .eco-decision-cell {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
      .eco-decision-label {
        font-size: var(--text-xs);
        font-weight: 700;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      /* ── Outcomes ──────────────────────────────── */
      .eco-outcomes-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }
      .eco-contracts-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
      }
      .eco-ownership-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }

      /* ── Responsive ────────────────────────────── */
      @media (max-width: 1024px) {
        .eco-map-wrapper {
          grid-template-columns: 1fr;
        }
        .eco-map-svg-container {
          max-height: 400px;
        }
        .eco-map-detail {
          position: static;
        }
      }

      @media (max-width: 768px) {
        .eco-hero-title {
          font-size: var(--text-3xl);
        }
        .eco-hero-subtitle {
          font-size: var(--text-xl);
        }
        .eco-hero-description {
          font-size: var(--text-base);
        }
        .eco-hero-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }
        .eco-problem-grid {
          grid-template-columns: 1fr;
        }
        .eco-repos-grid {
          grid-template-columns: 1fr;
        }
        .eco-decision-grid {
          grid-template-columns: 1fr;
        }
        .eco-outcomes-grid {
          grid-template-columns: 1fr;
        }
        .eco-contracts-grid {
          grid-template-columns: 1fr;
        }
        .eco-ownership-grid {
          grid-template-columns: 1fr;
        }
        .eco-flow-tabs {
          overflow-x: auto;
          flex-wrap: nowrap;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-bottom: var(--space-2);
        }
        .eco-flow-tabs::-webkit-scrollbar {
          display: none;
        }
        .eco-map-svg-container {
          max-height: 320px;
          aspect-ratio: auto;
          min-height: 280px;
        }
      }
    `}</style>
  </div>
);
