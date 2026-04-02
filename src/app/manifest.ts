import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Denis Klymenko | Product Engineer & AI Architect',
    short_name: 'Denis Klymenko',
    description: 'Product Engineer & AI Architect. Production AI systems, scalable architectures, 20+ projects delivered.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
