export interface ExperienceItem {
  name: string;
  role?: string;
  companyLink?: string;
  time?: string;
  stack?: string;
  testing?: string;
  responsibilities?: string;
  achievements?: string;
  projects?: { name: string; link?: string; description: string }[];
  security?: string[];
  open?: boolean;
  isBuiltFromScratch?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [{
  open: true,
  name: 'Corva',
  role: 'Senior Frontend Engineer',
  companyLink: 'https://www.corva.ai/',
  stack: 'React, TypeScript, Zustand, TanStack Query, Highcharts, Styled Components, Jest, React Testing Library',
  responsibilities: 'Owned performance and architecture of drilling analytics dashboards used by enterprise oil & gas clients. Collaborated closely with QA, designers, and PM. Conducted code reviews and designed a 7-phase refactoring playbook for a complex charting codebase.',
  achievements: 'Cut page load from 5s to 1.5s (3x faster) by eliminating render cascades, fixing chart caching, and lazy-loading heavy modules. Restructured the codebase into a domain-driven architecture — zero regressions, no feature freeze.',
  projects: [],
}, {
  open: true,
  isBuiltFromScratch: true,
  name: 'love💗epil',
  role: 'Product Engineer & AI Architect',
  companyLink: 'https://www.loveepil.com',
  stack: 'Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, OpenAI API, Vercel AI SDK, Langfuse, Stripe, MUI, DeepL, Vercel Drains',
  responsibilities: 'Sole developer of an 8-service production ecosystem across 5 countries. Three AI systems live in prod: a 21-tool AI consultant handling bookings, FAQs, and service guidance across 4 channels, an autonomous content engine generating ~70 articles/week, and embedding-powered semantic search. Plus analytics, admin panel, payments, and transactional emails.',
  achievements: 'Deployed a production AI agent running at $0.015 per dialog with near-zero hallucinations. Achieved a 96% Mobile Performance Score. Built cross-domain analytics with phone-based attribution.',
  projects: [{
    name: 'AI Booking Agent (LoveGPT)',
    link: 'https://www.loveepil.com/consultation',
    description: 'A custom AI agent using fine-tuned GPT-4.1 Mini to orchestrate 21 tools. It handles bookings, answers FAQs, and seamlessly transfers to human operators when needed. Fully observable with Langfuse.',
  }, {
    name: 'Analytics & Attribution Platform',
    description: 'Custom platform that tracks user journeys across 5 country domains. Built a phone-based attribution system to tie CRM bookings back to Google/Meta ads.',
  }, {
    name: 'Multi-Service Ecosystem Architecture',
    link: '/projects/ecosystem',
    description: 'Designed and implemented the core SaaS platform: 8 services, 3 AI systems, 15 cron jobs. Booking frontend, localized domains, analytics, RBAC admin panel, and autonomous AI content engine.',
  }],
}, {
  open: true,
  name: 'Blackbird Lab',
  role: 'Senior Full-Stack Engineer',
  companyLink: 'https://jobs.dou.ua/companies/blackbird-lab/',
  stack: 'TypeScript, React 19, Next.js 15, Zustand, Redux, Redux-Saga, REST, GraphQL, MUI, Ant Design, Tailwind CSS, Prisma, PostgreSQL, Jest, React Testing Library, Google Analytics, Vercel',
  responsibilities: 'Led frontend modernization across 3 internal products, working with QA, backend engineers, and PM. Moved the stack from legacy setups to a unified Next.js architecture. Conducted PR reviews and improved security by integrating automated vulnerability checks into CI/CD pipelines.',
  achievements: 'Rewrote the authentication layer across 3 products, eliminating critical security vulnerabilities in session handling. Migrated 50K+ lines to TypeScript and Next.js — reduced onboarding time for new engineers and cut regression bugs through strict type safety.',
  projects: [],
}, {
  open: true,
  name: 'S-PRO',
  role: 'Middle Frontend Developer',
  companyLink: 'https://jobs.dou.ua/companies/s-pro/',
  stack: 'React, Redux, Redux-Saga, React Router v4, Formik, SCSS, Ant Design, Flexbox Grid, Lodash, Moment.js, Nivo Rocks, ESLint (Airbnb)',
  testing: 'Jest, Enzyme',
  responsibilities: 'Built 2 greenfield React applications from scratch for US and UK enterprise clients. Owned full frontend delivery — from architecture and component design to testing and production release.',
  achievements: 'Delivered Modo Energy analytics platform with 40+ interactive chart widgets for the UK energy storage market. Built Zymergen data visualization tool handling large biotech datasets with complex filtering and drill-down interactions.',
  projects: [{
    name: 'Modo Energy',
    link: 'https://platform.modo.energy/',
    description: 'Real-time analytics platform for energy storage assets in the UK market. 40+ chart widgets, live data streaming.',
  }, {
    name: 'Zymergen',
    description: 'Data visualization tool for a US biotechnology company. Complex filtering, multi-view analysis, large dataset rendering.',
  }],
}, {
  name: 'Noosyntech',
  companyLink: 'http://noosyntech.com/',
  stack: 'React, Redux, Redux-Saga, Redux-Form, SASS, ANTD, FlexBox Grid, Lodash, Moment, ReactDnD',
  testing: 'Jest, Enzyme',
  responsibilities: 'Built UI components, optimized rendering performance, and added unit tests for the main user flows.',
  projects: [{
    name: 'Frood',
    link: '',
    description: 'Large-scale marketplace platform connecting buyers and sellers in the Asian market.',
  }],
}, {
  name: '7eminar',
  companyLink: 'https://7eminar.ua/',
  stack: 'JavaScript (jQuery), HTML/Pug, SASS, Laravel, JSON',
  responsibilities: 'Moved the main platform to a responsive layout using Bootstrap 3. Built UI interactions and complex email templates.',
  achievements: 'Created and styled over 80 responsive landing pages and email templates.',
}];
