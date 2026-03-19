'use client';

import React from 'react';

import {
  ContentEngineSection,
  DecisionsSection,
  HeroSection,
  ProblemSection,
  ResultsSection,
  RoadmapSection,
  VerticalsSection,
} from './sections';

export const CommunityPortal = (): React.ReactElement => (
  <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
    <HeroSection />

    <main>
      <ProblemSection />
      <ContentEngineSection />
      <VerticalsSection />
      <DecisionsSection />
      <RoadmapSection />
      <ResultsSection />
    </main>

    <style jsx global>{`
      /* ── Hero ──────────────────────────────────── */
      .cp-hero-title {
        font-size: var(--text-5xl);
      }
      .cp-hero-subtitle {
        font-size: var(--text-2xl);
      }
      .cp-hero-description {
        font-size: var(--text-lg);
      }
      .cp-hero-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-4);
      }

      /* ── Problem ───────────────────────────────── */
      .cp-problem-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-6);
      }

      /* ── Content Engine ────────────────────────── */
      .cp-flow-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
      }
      .cp-flow-tab {
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
        cursor: pointer;
        transition: all var(--duration-normal) var(--ease-out);
      }
      .cp-flow-tab:hover {
        color: var(--text-primary);
        border-color: var(--border-hover);
      }
      .cp-flow-tab--active {
        color: var(--text-primary);
        background: rgba(255, 255, 255, 0.08);
        border-color: var(--tab-color, var(--accent));
        box-shadow: 0 0 12px color-mix(in srgb, var(--tab-color, var(--accent)) 30%, transparent);
      }
      .cp-flow-tab-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .cp-flow-tab-label {
        white-space: nowrap;
      }
      .cp-flow-steps {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
      }
      .cp-flow-step {
        display: flex;
        align-items: flex-start;
        gap: var(--space-4);
        position: relative;
      }
      .cp-flow-step-number {
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

      /* ── Verticals ─────────────────────────────── */
      .cp-verticals-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
      }

      /* ── Decisions ─────────────────────────────── */
      .cp-decision-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
      }
      .cp-decision-cell {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
      }
      .cp-decision-label {
        font-size: var(--text-xs);
        font-weight: 700;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      /* ── Roadmap ──────────────────────────────── */
      .cp-roadmap-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }

      /* ── Outcomes ──────────────────────────────── */
      .cp-outcomes-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }

      /* ── Responsive ────────────────────────────── */
      @media (max-width: 768px) {
        .cp-hero-title {
          font-size: var(--text-3xl);
        }
        .cp-hero-subtitle {
          font-size: var(--text-xl);
        }
        .cp-hero-description {
          font-size: var(--text-base);
        }
        .cp-hero-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }
        .cp-problem-grid {
          grid-template-columns: 1fr;
        }
        .cp-verticals-grid {
          grid-template-columns: 1fr;
        }
        .cp-flow-tabs {
          overflow-x: auto;
          flex-wrap: nowrap;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-bottom: var(--space-2);
        }
        .cp-flow-tabs::-webkit-scrollbar {
          display: none;
        }
        .cp-decision-grid {
          grid-template-columns: 1fr;
        }
        .cp-roadmap-grid {
          grid-template-columns: 1fr;
        }
        .cp-outcomes-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);
