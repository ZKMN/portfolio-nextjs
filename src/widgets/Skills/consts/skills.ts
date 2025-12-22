export interface Skill {
  title: string;
  src: string;
  category: 'ai' | 'frontend' | 'backend' | 'ui' | 'cloud' | 'analytics';
}

export const SKILLS: Skill[] = [
  // AI & LLM
  { title: 'OpenAI', src: 'icons8-openai-100-v2.svg', category: 'ai' },
  { title: 'Anthropic', src: 'icons8-anthropic-100-v2.svg', category: 'ai' },
  { title: 'LangChain', src: 'icons8-langchain-100.svg', category: 'ai' },

  // Frontend
  { title: 'TypeScript', src: 'icons8-typescript-100.svg', category: 'frontend' },
  { title: 'React', src: 'icons8-react-100.svg', category: 'frontend' },
  { title: 'Next.js', src: 'icons8-nextjs-100.svg', category: 'frontend' },
  { title: 'Zustand', src: 'zustand.svg', category: 'frontend' },
  { title: 'Redux', src: 'icons8-redux-100.svg', category: 'frontend' },
  { title: 'Redux Saga', src: 'redux-saga.svg', category: 'frontend' },

  // Backend & Data
  { title: 'Node.js', src: 'icons8-nodejs-100.svg', category: 'backend' },
  { title: 'PostgreSQL', src: 'icons8-postgresql-100.svg', category: 'backend' },
  { title: 'Prisma', src: 'icons8-prisma-100.svg', category: 'backend' },
  { title: 'GraphQL', src: 'icons8-graphql-100.svg', category: 'backend' },
  { title: 'REST', src: 'icons8-rest-api-100.png', category: 'backend' },

  // UI & Design
  { title: 'Tailwind CSS', src: 'icons8-tailwind-100.svg', category: 'ui' },
  { title: 'Material UI', src: 'icons8-material-ui-100.svg', category: 'ui' },
  { title: 'ANT Design', src: 'ant-256.png', category: 'ui' },
  { title: 'SASS', src: 'icons8-sass-100.svg', category: 'ui' },

  // Cloud & DevOps
  { title: 'AWS', src: 'icons8-aws-100.svg', category: 'cloud' },
  { title: 'Vercel', src: 'icons8-vercel-100.svg', category: 'cloud' },
  { title: 'Git', src: 'icons8-git-100.svg', category: 'cloud' },

  // Analytics & SEO
  { title: 'Google Analytics', src: 'icons8-google-analytics-100.svg', category: 'analytics' },
  { title: 'Vercel Analytics', src: 'icons8-vercel-analytics-100.svg', category: 'analytics' },
];

export const SKILL_CATEGORIES = {
  ai: 'AI & LLM',
  frontend: 'Frontend',
  backend: 'Backend & Data',
  ui: 'UI & Design',
  cloud: 'Cloud & DevOps',
  analytics: 'Analytics & SEO',
} as const;
