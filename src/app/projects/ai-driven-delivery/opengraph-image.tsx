import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AI-Driven Delivery - Community Platform Case Study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Floating nodes */}
        {[
          { x: 150, y: 120, size: 8, color: '#10b981' },
          { x: 350, y: 200, size: 6, color: '#06b6d4' },
          { x: 900, y: 150, size: 10, color: '#10b981' },
          { x: 1050, y: 280, size: 7, color: '#8b5cf6' },
          { x: 200, y: 450, size: 9, color: '#06b6d4' },
          { x: 750, y: 500, size: 6, color: '#10b981' },
          { x: 1000, y: 480, size: 8, color: '#f59e0b' },
          { x: 500, y: 130, size: 5, color: '#ec4899' },
          { x: 100, y: 300, size: 7, color: '#10b981' },
          { x: 1100, y: 100, size: 6, color: '#06b6d4' },
        ].map((node, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${node.x}px`,
              top: `${node.y}px`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              borderRadius: '50%',
              background: node.color,
              boxShadow: `0 0 ${node.size * 3}px ${node.color}60`,
              display: 'flex',
            }}
          />
        ))}

        {/* Connecting lines between some nodes */}
        <svg
          width="1200"
          height="630"
          style={{ position: 'absolute', inset: 0 }}
        >
          {[
            { x1: 150, y1: 120, x2: 350, y2: 200 },
            { x1: 350, y1: 200, x2: 500, y2: 130 },
            { x1: 900, y1: 150, x2: 1050, y2: 280 },
            { x1: 200, y1: 450, x2: 750, y2: 500 },
            { x1: 750, y1: 500, x2: 1000, y2: 480 },
            { x1: 100, y1: 300, x2: 200, y2: 450 },
            { x1: 1050, y1: 280, x2: 1000, y2: 480 },
          ].map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(16, 185, 129, 0.1)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(16, 185, 129, 0.08)',
              marginBottom: '32px',
              fontSize: '14px',
              color: '#10b981',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                display: 'flex',
              }}
            />
            CASE STUDY
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #10b981, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
            }}
          >
            AI-DRIVEN DELIVERY
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: 400,
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            Community Platform - 8 Verticals - Built Solo
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '48px',
            }}
          >
            {[
              { value: '200+', label: 'Businesses' },
              { value: '8', label: 'Verticals' },
              { value: '2', label: 'Apps' },
              { value: '1', label: 'Developer' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#10b981',
                    fontFamily: 'monospace',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.4)',
                    marginTop: '6px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Author */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          denovo.sh
        </div>
      </div>
    ),
    { ...size },
  );
}
