import type { Metadata } from 'next';

const title = 'Production AI Agent | Brain-First Architecture';
const description = 'Production AI agent with brain-first architecture: 21 tools, fine-tuned GPT-4.1 Mini, Langfuse observability, pgvector search. $0.015 per dialog, near-zero hallucinations.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Production AI Agent — Brain-First Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-image.jpg'],
  },
};

const AIAgentLayout = ({ children }: React.PropsWithChildren) => {
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
      'AI Agent Architecture',
      'Brain-First Architecture',
      'LLM Tool Orchestration',
      'Fine-Tuning GPT-4.1 Mini',
      'Vercel AI SDK',
      'Langfuse Observability',
      'pgvector Semantic Search',
      'Agentic Workflows',
    ],
    keywords: [
      'AI Agent',
      'Brain-First Architecture',
      'LLM Orchestration',
      'Tool Calling',
      'Fine-Tuned GPT',
      'Vercel AI SDK',
      'Langfuse',
      'pgvector',
      'Agentic Workflows',
      'Production AI',
      'Zero Hallucination',
      'Enterprise AI',
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

export default AIAgentLayout;
