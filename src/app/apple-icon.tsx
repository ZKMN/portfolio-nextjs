import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const AppleIcon = (): ImageResponse => {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -3,
          }}
        >
          DK
        </span>
      </div>
    ),
    { ...size }
  );
};

export default AppleIcon;
