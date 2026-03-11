'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { FADE_UP, REPOSITORIES } from '../constants';

type EcoNode = {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  color: string;
  size: number;
  href?: string;
};

type EcoEdge = {
  from: string;
  to: string;
  label: string;
  dashed?: boolean;
};

const NODES: EcoNode[] = [
  { id: 'traffic', label: 'User Traffic', sublabel: 'Organic, Paid, Direct', x: 50, y: 6, color: 'var(--text-secondary)', size: 42 },
  { id: 'country', label: 'Country Domains', sublabel: '5 domains · localized SEO', x: 50, y: 24, color: '#3b82f6', size: 48 },
  { id: 'frontend', label: 'Core Frontend', sublabel: 'Booking · Payments · Loyalty', x: 26, y: 44, color: 'var(--accent)', size: 52 },
  { id: 'ai', label: 'AI Service', sublabel: '21 tools · 4 channels', x: 74, y: 44, color: '#8b5cf6', size: 48 },
  { id: 'admin', label: 'Admin Panel', sublabel: '133 actions · RBAC', x: 26, y: 66, color: '#f59e0b', size: 48 },
  { id: 'analytics', label: 'Analytics', sublabel: '19 dashboards', x: 74, y: 66, color: '#ec4899', size: 46 },
  { id: 'strapi', label: 'Strapi CMS', sublabel: '7 content types', x: 20, y: 86, color: '#06b6d4', size: 42 },
  { id: 'emails', label: 'Email Engine', sublabel: '7 templates · 6 langs', x: 50, y: 86, color: '#14b8a6', size: 42 },
];

const EDGES: EcoEdge[] = [
  { from: 'traffic', to: 'country', label: 'SEO + Ads' },
  { from: 'country', to: 'frontend', label: '"Book Now" handoff' },
  { from: 'country', to: 'analytics', label: 'Vercel Drain events', dashed: true },
  { from: 'frontend', to: 'ai', label: 'Chat widget' },
  { from: 'frontend', to: 'admin', label: 'Booking webhooks' },
  { from: 'frontend', to: 'analytics', label: 'Tracking events', dashed: true },
  { from: 'ai', to: 'admin', label: 'Knowledge sync (6h)', dashed: true },
  { from: 'admin', to: 'analytics', label: 'Conversion events', dashed: true },
  { from: 'admin', to: 'emails', label: 'Trigger emails' },
  { from: 'admin', to: 'strapi', label: 'Content API' },
];

const getNodeById = (id: string): EcoNode | undefined => NODES.find((n) => n.id === id);

const SvgEdge = ({ edge, isHighlighted, onHover }: { edge: EcoEdge; isHighlighted: boolean; onHover: (label: string | null) => void }): React.ReactElement | null => {
  const fromNode = getNodeById(edge.from);
  const toNode = getNodeById(edge.to);

  if (!fromNode || !toNode) return null;

  const x1 = fromNode.x;
  const y1 = fromNode.y;
  const x2 = toNode.x;
  const y2 = toNode.y;

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const ctrlOffsetX = (y2 - y1) * 0.08;
  const ctrlOffsetY = (x1 - x2) * 0.08;
  const ctrlX = midX + ctrlOffsetX;
  const ctrlY = midY + ctrlOffsetY;

  return (
    <g
      onMouseEnter={() => onHover(edge.label)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      <path
        d={`M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`}
        fill="none"
        stroke={isHighlighted ? 'var(--accent-light)' : 'rgba(255,255,255,0.12)'}
        strokeWidth={isHighlighted ? 0.6 : 0.3}
        strokeDasharray={edge.dashed ? '2 2' : undefined}
        style={{ transition: 'all 0.3s ease' }}
      />
      {isHighlighted && (
        <text
          x={ctrlX}
          y={ctrlY - 1.5}
          fill="var(--accent-light)"
          fontSize="2.2"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontWeight={500}
        >
          {edge.label}
        </text>
      )}
    </g>
  );
};

const SvgNode = ({ node, isActive, onClick }: { node: EcoNode; isActive: boolean; onClick: (id: string) => void }): React.ReactElement => {
  const radius = node.size / 16;
  const labelY = node.y + radius + 3;

  return (
    <g
      onClick={() => onClick(node.id)}
      style={{ cursor: 'pointer' }}
    >
      {/* Glow ring */}
      {isActive && (
        <circle
          cx={node.x}
          cy={node.y}
          r={radius + 1.5}
          fill="none"
          stroke={node.color}
          strokeWidth={0.3}
          opacity={0.4}
        >
          <animate
            attributeName="r"
            values={`${radius + 1};${radius + 2.5};${radius + 1}`}
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;0.1;0.4"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Hover ring (always visible, subtle) */}
      <circle
        cx={node.x}
        cy={node.y}
        r={radius + 0.8}
        fill="none"
        stroke={node.color}
        strokeWidth={0.15}
        opacity={isActive ? 0.3 : 0.1}
        style={{ transition: 'opacity 0.3s ease' }}
      />

      {/* Node circle */}
      <circle
        cx={node.x}
        cy={node.y}
        r={radius}
        fill={isActive ? node.color : 'rgba(255,255,255,0.04)'}
        stroke={node.color}
        strokeWidth={isActive ? 0.5 : 0.25}
        style={{ transition: 'all 0.3s ease' }}
        fillOpacity={isActive ? 0.25 : 0.04}
      />

      {/* Inner dot */}
      <circle
        cx={node.x}
        cy={node.y}
        r={1}
        fill={node.color}
        opacity={isActive ? 0.8 : 0.3}
        style={{ transition: 'opacity 0.3s ease' }}
      />

      {/* Label - below circle */}
      <text
        x={node.x}
        y={labelY}
        fill={isActive ? 'var(--text-primary)' : 'var(--text-secondary)'}
        fontSize="2.5"
        textAnchor="middle"
        fontWeight={700}
        style={{ transition: 'fill 0.3s ease', pointerEvents: 'none' }}
      >
        {node.label}
      </text>
      <text
        x={node.x}
        y={labelY + 2.8}
        fill="var(--text-tertiary)"
        fontSize="1.7"
        textAnchor="middle"
        fontWeight={400}
        style={{ pointerEvents: 'none' }}
      >
        {node.sublabel}
      </text>
    </g>
  );
};

export const EcosystemMapSection = (): React.ReactElement => {
  const router = useRouter();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);

  const activeRepo = REPOSITORIES.find((r) => r.id === activeNode);

  const handleNodeClick = (id: string): void => {
    const node = NODES.find((n) => n.id === id);
    if (node?.href) {
      router.push(node.href);
      return;
    }
    setActiveNode(activeNode === id ? null : id);
  };

  const connectedEdges = activeNode
    ? EDGES.filter((e) => e.from === activeNode || e.to === activeNode)
    : [];

  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrambleTitle text="Ecosystem Architecture" />
          <p className="section-subtitle">
            Seven services, four databases, one connected system. Click any node to explore how it fits into the bigger picture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 'var(--space-12)' }}
        >
          <div className="eco-map-wrapper">
            {/* SVG Map */}
            <div className="eco-map-svg-container">
              {!activeNode && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  opacity: 0.6,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
                >
                  Click a node to explore →
                </div>
              )}
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                {/* Grid pattern */}
                <defs>
                  <pattern
                    id="eco-grid"
                    width="5"
                    height="5"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 5 0 L 0 0 0 5"
                      fill="none"
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="0.1"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#eco-grid)" />

                {/* Edges */}
                {EDGES.map((edge) => (
                  <SvgEdge
                    key={`${edge.from}-${edge.to}`}
                    edge={edge}
                    isHighlighted={
                      hoveredEdge === edge.label
                      || connectedEdges.some((e) => e.from === edge.from && e.to === edge.to)
                    }
                    onHover={setHoveredEdge}
                  />
                ))}

                {/* DB indicators */}
                <g opacity={0.4}>
                  <rect
                    x="2"
                    y="50"
                    width="12"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.2"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x="8"
                    y="53.5"
                    fill="var(--accent)"
                    fontSize="1.6"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                  >
                    Product DB
                  </text>

                  <rect
                    x="86"
                    y="50"
                    width="12"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="0.2"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x="92"
                    y="53.5"
                    fill="#8b5cf6"
                    fontSize="1.6"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                  >
                    AI + pgvector
                  </text>

                  <rect
                    x="86"
                    y="76"
                    width="12"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="0.2"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x="92"
                    y="79.5"
                    fill="#ec4899"
                    fontSize="1.6"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                  >
                    Analytics DB
                  </text>

                  <rect
                    x="2"
                    y="82"
                    width="12"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="0.2"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x="8"
                    y="85.5"
                    fill="#06b6d4"
                    fontSize="1.6"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                  >
                    CMS DB
                  </text>
                </g>

                {/* Nodes */}
                {NODES.map((node) => (
                  <SvgNode
                    key={node.id}
                    node={node}
                    isActive={activeNode === node.id || (!activeNode && node.id !== 'traffic')}
                    onClick={handleNodeClick}
                  />
                ))}
              </svg>
            </div>

            {/* Detail Panel */}
            <AnimatePresence mode="wait">
              {activeRepo && (
                <motion.div
                  key={activeRepo.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="eco-map-detail"
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: 'var(--space-6)',
                      borderLeft: `3px solid ${activeRepo.color}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: activeRepo.color,
                          boxShadow: `0 0 12px ${activeRepo.color}`,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {activeRepo.name}
                        </h4>
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                          {activeRepo.label}
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                      {activeRepo.responsibility}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                      {activeRepo.scale.map((s) => (
                        <span key={s} className="badge badge--ghost" style={{ fontSize: '10px' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shared Infrastructure callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 'var(--space-8)' }}
          >
            <div
              className="glass-card"
              style={{
                padding: 'var(--space-5) var(--space-8)',
                borderLeft: '3px solid var(--accent)',
                background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)',
              }}
            >
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-2)' }}>
                Shared Infrastructure
              </h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                All services deploy independently on Vercel. They share contracts (Prisma types, API conventions, webhook formats) but have zero shared runtime dependencies.
                Four PostgreSQL databases isolate workloads: product data, analytics events, AI embeddings (pgvector), and CMS content.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
