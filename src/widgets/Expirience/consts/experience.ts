export interface ExperienceItem {
  name: string;
  role?: string;
  companyLink?: string;
  time: string;
  stack?: string;
  testing?: string;
  responsibilities?: string;
  achievements?: string;
  projects?: { name: string; link?: string; description: string }[];
  security?: string[];
  open?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [{
  open: true,
  name: 'UAES',
  role: 'Full-Stack Engineer',
  time: 'February 2026 - Present',
  stack: 'Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, NextAuth v5, next-intl, Firebase, Vercel Blob, Google Maps, TanStack Query, Zustand, Shadcn/Radix UI, Tailwind CSS v4, Sentry, Resend, Playwright, Vitest, Stryker',
  responsibilities: 'End-to-end development of a community platform for Ukrainians in Spain. Covers business directory, events, jobs, housing, classifieds, and resources across Spanish cities. Multi-locale routing, verification flows, Google Maps integration, and full auth with NextAuth v5.',
  achievements: 'Mutation testing with Stryker, E2E coverage with Playwright. Sentry error tracking, Vercel Blob for media storage, Firebase for real-time features. Full i18n with next-intl.',
  projects: [{
    name: 'Community Platform',
    description: 'Public-facing platform: business listings, events, jobs board, housing ads, classifieds, and resource directory for Ukrainian community in Spain.',
  }, {
    name: 'Admin & Moderation',
    description: 'User management, content moderation, verification system for businesses and listings, role-based access.',
  }],
}, {
  open: true,
  name: 'Corva',
  role: 'Senior Frontend Developer',
  companyLink: 'https://www.corva.ai/',
  time: 'December 2025 - Present',
  stack: 'React, TypeScript, Redux, Highcharts, Styled Components, Jest, React Testing Library',
  responsibilities: 'Focusing on performance optimization and platform stability for mission-critical drilling analytics. Refactoring complex React components to improve rendering efficiency and maintainability. Delivering robust feature enhancements and ensuring long-term code health.',
  achievements: 'Optimized core visualization components, reducing render time for large datasets. Streamlined maintenance workflows for legacy modules.',
  projects: [],
}, {
  open: true,
  name: 'love💗epil',
  role: 'AI Architect | Senior Product Engineer',
  companyLink: 'https://www.loveepil.com',
  time: 'August 2024 - Present',
  stack: 'Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, OpenAI API, Vercel AI SDK, Langfuse, Stripe, MUI, DeepL, Vercel Drains',
  responsibilities: 'Solo end-to-end ownership of a distributed ecosystem serving 5 countries (6 domains, 6 languages, 4 currencies, 30K+ MAU). Built every layer from scratch: AI agent, analytics platform, admin panel, payments, CMS, and transactional emails.',
  achievements: 'Production AI agent at $0.015/dialog with near-zero hallucinations (21 tools, fine-tuned GPT-4.1 Mini). 96% Mobile Performance Score (LCP < 2.5s, INP < 200ms). Cross-domain analytics with phone-based attribution. Stripe billing, RBAC, DeepL auto-localization.',
  projects: [{
    name: 'AI Booking Agent (LoveGPT)',
    link: 'https://www.loveepil.com/consultation',
    description: 'Brain-First architecture: fine-tuned GPT-4.1 Mini orchestrates 20+ tools. Features Custom State Guard (Pending Question pattern) for context retention and "askUser" pattern for controlled flows. Fully observable via Langfuse + OpenTelemetry. Semantic search via pgvector.',
  }, {
    name: 'Analytics & Attribution Platform',
    description: 'Custom platform unifying user journeys across 6 TLDs via cross-domain session stitching. Engineered phone-based attribution matching CRM bookings to traffic sources (Google/Meta). Real-time event ingestion via Vercel Drains (1000+ events/batch) with AI-powered insights.',
  }, {
    name: 'Admin & Infrastructure',
    description: 'DeepL-powered 6-language auto-localization engine. Granular RBAC system, Stripe billing integration, and real-time CRM synchronization.',
  }],
}, {
  open: true,
  name: 'Blackbird Lab',
  role: 'Senior Fullstack Engineer',
  companyLink: 'https://jobs.dou.ua/companies/blackbird-lab/',
  time: 'March 2021 - Present',
  stack: 'TypeScript, React 19, Next.js 15, Zustand, Redux, Redux-Saga, REST, GraphQL, MUI, Ant Design, Tailwind CSS, Prisma, PostgreSQL, Jest, React Testing Library, Google Analytics, Vercel',
  responsibilities: 'Led the modernization of the company\'s frontend infrastructure, transitioning from legacy stacks to a unified Next.js architecture. Championed a "Security-First" engineering culture by integrating automated vulnerability constraints directly into the CI/CD pipeline and architectural patterns.',
  achievements: 'Secured sensitive data flows across 3 internal products by re-engineering the authentication and session management layer. Successfully migrated 50K+ lines of code to TypeScript/Next.js, reducing technical debt and improving developer velocity.',
  projects: [],
}, {
  open: true,
  name: 'S-PRO',
  role: 'Middle Frontend Developer',
  companyLink: 'https://jobs.dou.ua/companies/s-pro/',
  time: 'March 2020 - March 2021',
  stack: 'React, Redux, Redux-Saga, React Router v4, Formik, SCSS, Ant Design, Flexbox Grid, Lodash, Moment.js, Nivo Rocks, ESLint (Airbnb)',
  testing: 'Jest, Enzyme',
  responsibilities: 'Building robust frontend solutions and developing new features from requirements. ensuring best practices through code refactoring and unit testing. Collaborating on project estimation and workload assessment.',
  achievements: 'Delivered 2 greenfield projects from scratch, including a complex energy storage analytics platform.',
  projects: [{
    name: 'Modo Energy',
    link: 'https://platform.modo.energy/',
    description: 'Analytics platform for energy storage assets in the UK market.',
  }, {
    name: 'Zymergen',
    description: 'DNA science data visualization and management tool for a major US biotechnology company.',
  }],
}, {
  name: 'Noosyntech',
  companyLink: 'http://noosyntech.com/',
  time: 'November 2018 - March 2020',
  stack: 'React, Redux, Redux-Saga, Redux-Form, SASS, ANTD, FlexBox Grid, Lodash, Moment, ReactDnD',
  testing: 'Jest, Enzyme',
  responsibilities: 'Built dynamic UI components, optimized rendering performance, and implemented unit tests for critical flows.',
  projects: [{
    name: 'Frood',
    link: '',
    description: 'Large-scale marketplace platform connecting buyers and sellers in the Asian market.',
  }],
}, {
  name: '7eminar',
  companyLink: 'https://7eminar.ua/',
  time: 'November 2017 - November 2018',
  stack: 'JavaScript (jQuery), HTML/Pug, SASS, Laravel, JSON',
  responsibilities: 'Migrated the main platform to a responsive modular architecture (Bootstrap 3). Implemented dynamic UI interactions and complex email template systems.',
  achievements: 'Created and optimized over 80 high-conversion landing pages and responsive email templates.',
}];
