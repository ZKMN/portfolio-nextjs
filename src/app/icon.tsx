import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const Icon = (): ImageResponse => new ImageResponse(
  (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -0.5,
          }}
        >
          DK
        </span>
      </div>
  ),
  { ...size },
);

export default Icon;
