import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { MUIThemeProvider } from '@/shared/providers';

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

const siteUrl = 'https://denisklymenko-soft.com';
const title = 'Denis Klymenko | Senior Fullstack Product Engineer | AI & SaaS Expert';
const description = 'Senior Fullstack Product Engineer with 8+ years of experience. Specialized in AI integrations, multi-domain SaaS platforms, and high-performance web applications. Successfully delivered 17 projects (11 from scratch) serving 50K+ users across 6 European markets.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Denis Klymenko',
  },
  description,
  applicationName: 'Denis Klymenko Portfolio',
  authors: [
    { 
      name: 'Denis Klymenko', 
      url: 'https://www.linkedin.com/in/denis-klymenko/' 
    }
  ],
  keywords: [
    'Denis Klymenko',
    'Senior Fullstack Engineer',
    'Product Engineer',
    'AI Integration',
    'LLM Fine Tuning',
    'OpenAI',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'GraphQL',
    'SaaS Development',
    'Multi-domain Architecture',
    'SEO Optimization',
    'Web Performance',
    'Enterprise Applications',
    'B2B',
    'B2C',
  ],
  creator: 'Denis Klymenko',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: 'Denis Klymenko Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Denis Klymenko - Senior Fullstack Product Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@denisklymenko',
    images: ['/images/og-image.jpg'],
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
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Denis Klymenko',
    jobTitle: 'Senior Fullstack Product Engineer',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/denis-klymenko/',
      'https://github.com/denisklymenko',
    ],
    image: '/images/photo.jpg',
    description,
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'AI Integration',
      'LLM Fine Tuning',
      'OpenAI',
      'GraphQL',
      'Prisma',
      'SaaS Development',
      'Multi-domain Architecture',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'National Academy of SBU',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <MUIThemeProvider>
          <Header />
          
          <main className="min-h-screen">{children}</main>
          
          <Footer />
          
          <Analytics />
        </MUIThemeProvider>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
