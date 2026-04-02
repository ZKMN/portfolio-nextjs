import type { Metadata } from 'next';

const title = 'Multi-Service Product Ecosystem | Case Study';
const description = 'One engineer, 8 production services, 3 AI systems: booking agent, content engine, semantic search. Serving 5 countries with 15 cron jobs and zero ops team.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
    images: [
      {
        url: '/images/ecosystem-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Multi-Service Product Ecosystem - Architecture Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/ecosystem-og.jpg'],
  },
};

const EcosystemLayout = ({ children }: React.PropsWithChildren) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: 'Denis Klymenko',
      jobTitle: 'Product Engineer & AI Architect',
      url: 'https://denovo.sh',
    },
    about: [
      'Multi-Service Architecture',
      'SaaS Ecosystem Design',
      'Product Engineer & AI Architecting',
      'AI Agent Integration',
      'AI Content Generation',
      'Autonomous Editorial Pipeline',
      'Multi-Domain Deployment',
      'Marketing Attribution',
      'Feature-Sliced Design',
    ],
    keywords: [
      'SaaS Ecosystem',
      'Multi-Service Architecture',
      'Product Engineering',
      'AI Agent',
      'AI Content Engine',
      'Tavily',
      'Multi-Domain',
      'Stripe Integration',
      'Analytics Platform',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Feature-Sliced Design',
      'Full-Stack Development',
    ],
    inLanguage: 'en',
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default EcosystemLayout;
