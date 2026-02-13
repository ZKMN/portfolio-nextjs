export interface Skill {
  title: string;
  src: string;
  category: 'ai' | 'frontend' | 'backend' | 'ui' | 'cloud' | 'analytics' | 'testing';
}

export const SKILLS: Skill[] = [
  // AI & LLM
  { title: 'OpenAI', src: 'icons8-openai-100-v2.svg', category: 'ai' },
  { title: 'Vercel AI SDK', src: 'icons8-nextjs-100.svg', category: 'ai' },
  { title: 'Langfuse', src: 'icons8-langchain-100.svg', category: 'ai' },
  { title: 'pgvector', src: 'icons8-postgresql-100.svg', category: 'ai' },
  { title: 'Anthropic', src: 'icons8-anthropic-100-v2.svg', category: 'ai' },
  { title: 'LangChain', src: 'icons8-langchain-100.svg', category: 'ai' },

  // Frontend
  { title: 'TypeScript', src: 'icons8-typescript-100.svg', category: 'frontend' },
  { title: 'React 19', src: 'icons8-react-100.svg', category: 'frontend' },
  { title: 'Next.js 16', src: 'icons8-nextjs-100.svg', category: 'frontend' },
  { title: 'Zustand', src: 'icons8-zustand-100.svg', category: 'frontend' },
  { title: 'React Hook Form', src: 'icons8-react-100.svg', category: 'frontend' },
  { title: 'Framer Motion', src: 'icons8-react-100.svg', category: 'frontend' },
  { title: 'i18next', src: 'icons8-rest-api-100.png', category: 'frontend' },
  { title: 'TanStack Query', src: 'icons8-react-100.svg', category: 'frontend' },

  // Backend & Data
  { title: 'Node.js', src: 'icons8-nodejs-100.svg', category: 'backend' },
  { title: 'PostgreSQL', src: 'icons8-postgresql-100.svg', category: 'backend' },
  { title: 'Prisma', src: 'icons8-postgresql-100.svg', category: 'backend' },
  { title: 'Stripe', src: 'icons8-stripe-100.svg', category: 'backend' },
  { title: 'Resend', src: 'icons8-rest-api-100.png', category: 'backend' },
  { title: 'NextAuth', src: 'icons8-nextjs-100.svg', category: 'backend' },
  { title: 'Strapi CMS', src: 'icons8-rest-api-100.png', category: 'backend' },
  { title: 'Zod', src: 'icons8-typescript-100.svg', category: 'backend' },

  // UI & Design
  { title: 'Material UI', src: 'icons8-material-ui-100.svg', category: 'ui' },
  { title: 'Tailwind CSS', src: 'icons8-tailwind-100.svg', category: 'ui' },
  { title: 'SASS', src: 'icons8-sass-100.svg', category: 'ui' },
  { title: 'React Email', src: 'icons8-react-100.svg', category: 'ui' },

  // Cloud & DevOps
  { title: 'Vercel', src: 'icons8-nextjs-100.svg', category: 'cloud' },
  { title: 'AWS', src: 'icons8-aws-100.svg', category: 'cloud' },
  { title: 'Git', src: 'icons8-git-100.svg', category: 'cloud' },
  { title: 'Firebase', src: 'icons8-firebase-100.svg', category: 'cloud' },
  { title: 'Telegram Bot API', src: 'icons8-rest-api-100.png', category: 'cloud' },

  // Analytics & SEO
  { title: 'Vercel Analytics', src: 'icons8-nextjs-100.svg', category: 'analytics' },
  { title: 'Google Analytics', src: 'icons8-rest-api-100.png', category: 'analytics' },
  { title: 'Microsoft Clarity', src: 'icons8-rest-api-100.png', category: 'analytics' },
  { title: 'Google Maps API', src: 'icons8-rest-api-100.png', category: 'analytics' },

  // Testing & Quality
  { title: 'Vitest', src: 'icons8-jest-100.png', category: 'testing' },
  { title: 'ESLint', src: 'icons8-typescript-100.svg', category: 'testing' },
  { title: 'Husky', src: 'icons8-git-100.svg', category: 'testing' },
];

export const SKILL_CATEGORIES = {
  ai: 'AI & LLM',
  frontend: 'Frontend',
  backend: 'Backend & Data',
  ui: 'UI & Design',
  cloud: 'Cloud & DevOps',
  analytics: 'Analytics & SEO',
  testing: 'Testing & Quality',
} as const;
