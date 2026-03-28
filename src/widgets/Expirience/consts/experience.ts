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
}

export const EXPERIENCE: ExperienceItem[] = [{
  open: true,
  name: 'Corva',
  role: 'Senior Frontend Developer',
  companyLink: 'https://www.corva.ai/',
  stack: 'React, TypeScript, Zustand, TanStack Query, Highcharts, Styled Components, Jest, React Testing Library',
  responsibilities: 'Owned performance and architecture of drilling analytics dashboards used by enterprise oil & gas clients. Designed and executed a 7-phase refactoring playbook for a complex charting codebase.',
  achievements: 'Cut page load from 5s to 1.5s (3x faster) by eliminating render cascades, fixing chart caching, and lazy-loading heavy modules. Restructured the codebase into a domain-driven architecture — zero regressions.',
  projects: [],
}, {
  open: true,
  name: 'love💗epil',
  role: 'Lead AI Architect | Product Builder',
  companyLink: 'https://www.loveepil.com',
  stack: 'Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, OpenAI API, Vercel AI SDK, Langfuse, Stripe, MUI, DeepL, Vercel Drains',
  responsibilities: 'Solo end-to-end ownership of a distributed system serving 5 countries. Built everything from scratch: the AI agent, analytics platform, admin panel, payments, CMS, and transactional emails.',
  achievements: 'Deployed a production AI agent running at $0.015 per dialog with near-zero hallucinations. Achieved a 96% Mobile Performance Score. Built cross-domain analytics with phone-based attribution.',
  projects: [{
    name: 'AI Booking Agent (LoveGPT)',
    link: 'https://www.loveepil.com/consultation',
    description: 'A custom AI agent using fine-tuned GPT-4.1 Mini to orchestrate 20+ tools. It handles bookings, answers FAQs, and seamlessly transfers to human operators when needed. Fully observable with Langfuse.',
  }, {
    name: 'Analytics & Attribution Platform',
    description: 'Custom platform that tracks user journeys across 6 different country domains. Built a phone-based attribution system to tie CRM bookings back to Google/Meta ads.',
  }, {
    name: 'Multi-Service Ecosystem Architecture',
    link: '/projects/ecosystem',
    description: 'Designed and implemented the core SaaS platform combining the booking frontend, localized domains, independent analytics, and a granular RBAC admin panel.',
  }],
}, {
  open: true,
  name: 'Blackbird Lab',
  role: 'Senior Full-Stack Engineer',
  companyLink: 'https://jobs.dou.ua/companies/blackbird-lab/',
  stack: 'TypeScript, React 19, Next.js 15, Zustand, Redux, Redux-Saga, REST, GraphQL, MUI, Ant Design, Tailwind CSS, Prisma, PostgreSQL, Jest, React Testing Library, Google Analytics, Vercel',
  responsibilities: 'Led the modernization of the company\'s frontend stack, moving from legacy setups to a unified Next.js architecture. Improved security by integrating automated vulnerability checks into our CI/CD pipelines.',
  achievements: 'Secured sensitive data flows across 3 internal products by rewriting the authentication layer. Migrated 50K+ lines of code to TypeScript and Next.js, making the codebase much easier to work with.',
  projects: [],
}, {
  open: true,
  name: 'S-PRO',
  role: 'Middle Frontend Developer',
  companyLink: 'https://jobs.dou.ua/companies/s-pro/',
  stack: 'React, Redux, Redux-Saga, React Router v4, Formik, SCSS, Ant Design, Flexbox Grid, Lodash, Moment.js, Nivo Rocks, ESLint (Airbnb)',
  testing: 'Jest, Enzyme',
  responsibilities: 'Built frontend applications from scratch and maintained existing products. Focused on clean code, performance, and solid test coverage.',
  achievements: 'Delivered 2 complex greenfield projects, including a heavy data visualization platform for energy storage.',
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
