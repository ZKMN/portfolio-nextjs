import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Denis Klymenko | AI Agent Architect',
    short_name: 'Denis Klymenko',
    description: 'AI Agent Architect & Full-Stack Product Engineer. Brain-first AI Agents with 21 orchestrated tools.',
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
