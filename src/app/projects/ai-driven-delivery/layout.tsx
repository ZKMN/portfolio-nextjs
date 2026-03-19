import type { Metadata } from 'next';

const title = 'Community Portal — AI-Driven Solo Delivery | Case Study';
const description = 'Full-stack community platform: 857 TS files, 8 entity types, Google Places enrichment, checklist moderation — built solo with AI assistance.';

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
      jobTitle: 'Full-Stack Product Engineer',
      url: 'https://denovo.sh',
    },
    about: [
      'Community Platform Architecture',
      'AI-Driven Development',
      'Google Places Enrichment',
      'Content Moderation Systems',
      'Feature-Sliced Design',
      'Full-Stack Product Engineering',
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
