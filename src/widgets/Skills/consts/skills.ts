export interface Skill {
  title: string;
  src: string;
  category: 'ai' | 'frontend' | 'backend' | 'ui' | 'cloud' | 'analytics' | 'testing';
}

export const SKILLS: Skill[] = [
  // AI & LLM
  { title: 'OpenAI', src: 'si-openai.svg', category: 'ai' },
  { title: 'Vercel AI SDK', src: 'si-vercel.svg', category: 'ai' },
  { title: 'Langfuse', src: 'si-langfuse.svg', category: 'ai' },
  { title: 'LangChain', src: 'si-langchain.svg', category: 'ai' },
  { title: 'n8n', src: 'si-n8n.svg', category: 'ai' },
  { title: 'Anthropic', src: 'si-anthropic.svg', category: 'ai' },
  { title: 'OpenTelemetry', src: 'si-opentelemetry.svg', category: 'ai' },
  { title: 'pgvector', src: 'si-postgresql.svg', category: 'ai' },

  // Frontend
  { title: 'TypeScript', src: 'si-typescript.svg', category: 'frontend' },
  { title: 'React 19', src: 'si-react.svg', category: 'frontend' },
  { title: 'Next.js 16', src: 'si-nextdotjs.svg', category: 'frontend' },
  { title: 'Zustand', src: 'si-zustand.svg', category: 'frontend' },
  { title: 'React Hook Form', src: 'si-reacthookform.svg', category: 'frontend' },
  { title: 'Framer Motion', src: 'si-framer.svg', category: 'frontend' },
  { title: 'next-intl', src: 'si-nextdotjs.svg', category: 'frontend' },
  { title: 'i18next', src: 'si-i18next.svg', category: 'frontend' },
  { title: 'TanStack Query', src: 'si-reactquery.svg', category: 'frontend' },

  // Backend & Data
  { title: 'Node.js', src: 'si-nodedotjs.svg', category: 'backend' },
  { title: 'PostgreSQL', src: 'si-postgresql.svg', category: 'backend' },
  { title: 'Prisma', src: 'si-prisma.svg', category: 'backend' },
  { title: 'Stripe', src: 'si-stripe.svg', category: 'backend' },
  { title: 'Resend', src: 'si-resend.svg', category: 'backend' },
  { title: 'NextAuth', src: 'si-nextdotjs.svg', category: 'backend' },
  { title: 'Strapi CMS', src: 'si-strapi.svg', category: 'backend' },
  { title: 'Zod', src: 'si-zod.svg', category: 'backend' },

  // UI & Design
  { title: 'Material UI', src: 'si-mui.svg', category: 'ui' },
  { title: 'shadcn/ui', src: 'si-shadcnui.svg', category: 'ui' },
  { title: 'Radix UI', src: 'si-radixui.svg', category: 'ui' },
  { title: 'Tailwind CSS', src: 'si-tailwindcss.svg', category: 'ui' },
  { title: 'SASS', src: 'si-sass.svg', category: 'ui' },
  { title: 'React Email', src: 'si-react.svg', category: 'ui' },

  // Cloud & DevOps
  { title: 'Vercel', src: 'si-vercel.svg', category: 'cloud' },
  { title: 'AWS', src: 'si-aws.svg', category: 'cloud' },
  { title: 'Git', src: 'si-git.svg', category: 'cloud' },
  { title: 'Firebase', src: 'si-firebase.svg', category: 'cloud' },
  { title: 'Telegram Bot API', src: 'si-telegram.svg', category: 'cloud' },

  // Analytics & SEO
  { title: 'Vercel Analytics', src: 'si-vercel.svg', category: 'analytics' },
  { title: 'Google Analytics', src: 'si-google-analytics.svg', category: 'analytics' },
  { title: 'Google Search Console', src: 'si-google-search-console.svg', category: 'analytics' },
  { title: 'Microsoft Clarity', src: 'si-clarity.svg', category: 'analytics' },
  { title: 'Google Maps API', src: 'si-google-maps.svg', category: 'analytics' },
  { title: 'Sentry', src: 'si-sentry.svg', category: 'analytics' },

  // Testing & Quality
  { title: 'Vitest', src: 'si-vitest.svg', category: 'testing' },
  { title: 'Playwright', src: 'si-playwright.svg', category: 'testing' },
  { title: 'Stryker', src: 'si-stryker.svg', category: 'testing' },
  { title: 'ESLint', src: 'si-eslint.svg', category: 'testing' },
];
