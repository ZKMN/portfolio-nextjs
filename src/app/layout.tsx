import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { NavFloat } from '@/widgets/NavFloat';

import { CursorGlow } from '@/shared/components/CursorGlow';
import { ScrollProgress } from '@/shared/components/ScrollProgress';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const siteUrl = 'https://denovo.sh';
const title = 'Denis Klymenko | AI Agent Architect & Full-Stack Product Engineer | Brain-first Agentic Systems';
const description = 'AI Agent Architect & Full-Stack Product Engineer. I build production AI agents and the full infrastructure behind them — solo, from scratch.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Denis Klymenko',
  },
  description,
  applicationName: 'AI Agent Architect',
  authors: [
    {
      name: 'Denis Klymenko',
      url: 'https://www.linkedin.com/in/denis-klymenko/',
    },
  ],
  creator: 'Denis Klymenko',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: 'AI Agent Architect',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Denis Klymenko - Lead AI Architect & Senior Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@denisklymenko',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  alternates: {
    canonical: siteUrl,
  },
};

const NAV_LINKS = [
  { label: 'About', href: '/#about-me' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'AI Agent', href: '/projects/ai-agent' },
  { label: 'Career', href: '/#career' },
  { label: 'Contact', href: '#contact' },
];

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Denis Klymenko',
    jobTitle: 'AI Agent Architect & Full-Stack Product Engineer',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/denis-klymenko/',
      'https://github.com/ZKMN',
    ],
    image: '/images/photo.jpg',
    description,
    knowsAbout: [
      'AI Agent Architecture',
      'Tool Orchestration',
      'LLM Fine-Tuning',
      'OpenAI',
      'Vercel AI SDK',
      'Langfuse',
      'pgvector',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'SaaS Development',
      'Multi-domain Architecture',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'National Academy of SBU',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Loveepil',
        url: 'https://www.loveepil.com',
      },
      {
        '@type': 'Organization',
        name: 'Corva',
        url: 'https://www.corva.ai',
      },
      {
        '@type': 'Organization',
        name: 'Blackbird Lab',
        url: 'https://jobs.dou.ua/companies/blackbird-lab/',
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', zIndex: 9999 }}>
          Skip to content
        </a>
        <CursorGlow />
        <ScrollProgress />
        <NavFloat links={NAV_LINKS} />

        <main id="main-content">
          {children}
        </main>

        <Footer />
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
