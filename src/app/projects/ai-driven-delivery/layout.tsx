import type { Metadata } from 'next';

const title = 'AI-Driven Delivery | Community Platform Case Study';
const description = 'How AI enables one developer to build and maintain a full-stack community platform: 200+ auto-discovered businesses, 8 content verticals, automated content pipeline.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const CommunityPortalLayout = ({ children }: React.PropsWithChildren) => {
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
      'Community Platform Architecture',
      'AI-Driven Development',
      'Google Places Enrichment',
      'Content Moderation Systems',
      'Feature-Sliced Design',
      'Product Engineer & AI Architecting',
    ],
    keywords: [
      'Community Portal',
      'AI-Driven Development',
      'Solo Developer',
      'Google Places API',
      'Content Moderation',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Feature-Sliced Design',
      'Full-Stack Development',
      'TypeScript',
      'React',
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

export default CommunityPortalLayout;
