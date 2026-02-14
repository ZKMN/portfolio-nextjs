# denovo.sh — Personal Portfolio

AI Agent Architect & Full-Stack Product Engineer portfolio built with Next.js 16, TypeScript, and Framer Motion.

**Live:** [denovo.sh](https://denovo.sh)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict mode)
- **Animation:** Framer Motion, Canvas API
- **Styling:** CSS Variables, styled-jsx, glass morphism
- **Architecture:** Feature-Sliced Design (`pagesLayer/`, `widgets/`, `shared/`)
- **Quality:** ESLint (flat config), Husky pre-commit hooks
- **Deploy:** Vercel, SSG

## Features

- Interactive particle network (NodeGraph) with cursor repulsion
- Cursor glow effect, magnetic buttons, scramble titles
- Smooth page transitions and scroll progress indicator
- Responsive design with mobile bottom navigation
- SEO-optimized (structured data, Open Graph, sitemap)
- Accessible (skip-to-content, aria attributes, semantic HTML)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript check |

## Project Structure

```
src/
├── app/              # Next.js App Router (pages, layout, API routes)
├── pagesLayer/       # Page-specific components (AI Agent page)
├── widgets/          # Feature blocks (Header, Footer, NavFloat, Skills, etc.)
└── shared/           # Reusable code
    ├── components/   # UI components (HeroShell, NodeGraph, ScrollProgress, etc.)
    ├── hooks/        # Custom hooks (useCountUp)
    └── icons/        # SVG icon components
```
