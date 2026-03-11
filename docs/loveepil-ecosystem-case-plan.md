# План Страницы Кейса: `Loveepil Ecosystem` (`/projects/loveepil`)

**Целевая позиция для этой страницы:** `Lead AI Architect | Product Builder`

## 1. Назначение страницы

Собрать `loveepil-*` в один цельный продуктовый кейс и показать:

- как система устроена целиком;
- почему она разделена на несколько репозиториев;
- как эти репозитории связаны между собой как единый организм;
- какую архитектурную и delivery-роль выполняли вы лично.

Это не замена AI-case, а надстройка над ним:

- `/projects/ai-agent` = deep technical case AI-слоя;
- `/projects/loveepil` = full product ecosystem case.

---

## 2. Ключевой narrative страницы

Формула narrative:

`Loveepil — это не один сайт, а операционная продуктовая экосистема из 7 репозиториев и 4 баз данных, где acquisition (5 стран), core journey (booking + payments + loyalty), admin operations (133 server actions), AI-support (21 LLM-инструмент, 4 канала) и analytics (19 дашбордов, multi-touch attribution) замкнуты в единый контур.`

Главный акцент: **архитектурная связность + ownership в роли Lead AI Architect | Product Builder**.

### 2.1 Narrative hooks (усиление для рынка)

Для рекрутера/нанимающего менеджера — ключевые сигналы экспертизы:

1. **System design на практике** — не теоретический, а работающий multi-service architecture с реальными пользователями в 5+ странах.
2. **Full-stack ownership** — от Prisma schema (40+ моделей) до AI fine-tuning (664 диалога) до analytics pipelines (Vercel Drain → attribution → lifecycle).
3. **AI beyond chatbot** — brain-first architecture с tool use, pgvector knowledge base, multi-channel (Web/Instagram/Facebook/Telegram), Langfuse observability.
4. **Revenue-critical integrations** — Stripe per-studio с webhook lifecycle (383 строки), Altegio CRM sync, payment → email → feedback automation.
5. **Data-informed product** — собственная analytics platform с multi-touch attribution, lead lifecycle tracking, ECB exchange rates, 6 cron jobs.

---

## 3. Loveepil как единый организм (репозитории и роли)

## 3.1 Состав экосистемы (с конкретикой из кода)

### 1. `loveepil-frontend` — ядро продукта

- **Stack:** Next.js 16, React 19, TypeScript 5, MUI 7, Prisma 7, Zustand 5, TanStack Query 5
- **Масштаб:** 1306 TS/TSX файлов, 40+ Prisma моделей (1175 строк schema), 18 page-модулей
- **Архитектура:** Feature-Sliced Design (appLayer → pagesLayer → widgets → features → entities → shared)
- **Ключевые фичи:**
  - Booking wizard (50+ компонентов): Location → Service → Date → Time → Confirm
  - Stripe payments: Card, Express Checkout, Bank Transfer; per-studio ключи, multi-currency (EUR/UAH/PLN/GBP)
  - Loyalty: абонементы (пакеты визитов с discount), purchase tracking
  - Auth: NextAuth v5 (Google OAuth + Resend email magic link) + Prisma adapter
  - AI Consultant widget: кастомный чат с message streaming и human handoff
  - 6 языков (ua/pl/ru/es/de/en), i18next с 8 namespace per locale
  - Telegram Bot: lead notifications, feedback alerts
  - Analytics: GTM, MS Clarity, Facebook Pixel, Vercel Analytics
- **Основной conversion surface:** записи, покупки абонементов, профиль пользователя.

### 2. `loveepil-frontend-country` — региональные домены (acquisition layer)

- **Stack:** Next.js 16, React 19, Prisma 6, MUI 7, Nuqs (URL state)
- **Масштаб:** 762 TS/TSX файлов, 42 маршрута × 6 локалей = 252 SSG-страницы
- **Multi-domain:** loveepil.pl / .ua / .de / .es / .uk — каждая страна на своем домене
- **Ключевые фичи:**
  - 29 сервисных страниц (laser hair removal per body part × gender, body sculpting, laser cosmetology)
  - SEO-first: JSON-LD (Organization, LocalBusiness, Website), OG image generation, per-locale meta
  - Studio finder с Google Maps
  - Blog system (Strapi integration, ISR 1 hour)
  - Пиксели: GTM, Facebook, TikTok, MS Clarity, Google Ads
  - Kommo CRM lead sync
- **Роль в экосистеме:** привлечение трафика → образование → discovery → handoff в core frontend для booking.

### 3. `loveepil-admin` — операционный control plane

- **Stack:** Next.js 16, React 19, MUI 7 + Toolpad, Prisma 7, Zod 4, AI SDK (OpenAI)
- **Масштаб:** 894 TS/TSX файлов, 43 Prisma модели, 133 server action файлов, 14 admin-секций
- **RBAC:** 3 категории permissions (module/integration/feature), 4 действия (CRUD), super-admin bypass
- **Ключевые фичи:**
  - Booking management: status tracking, Altegio webhook sync (booking + financial events)
  - Stripe integration: webhook handler (383 строки) с payment lifecycle (PENDING → SUCCEEDED → REFUNDED)
  - Translation management: DeepL API integration для AI-перевода на 6 локалей
  - Loyalty: абонементы CRUD, баннеры, offers, purchase tracking
  - Device taxonomy: laser types, skin phototypes, cooling systems, pain levels
  - Feedback moderation: visit + treatment, display status (NEW/SHOW/HIDE)
  - Email automation: purchase confirmation, feedback requests, AI-generated treatment recommendations
  - 4 cron jobs: treatment feedback (daily), visit remind (hourly), cancel pending payments (daily)
  - Media library: Vercel Blob storage с upload attribution
- **Роль в экосистеме:** расширяет Altegio CRM кастомной бизнес-логикой (payments, loyalty, translations, feedback, analytics tracking).

### 4. `loveepil-ai-service` — AI-консультант (brain-first agent)

- **Stack:** Next.js 16, OpenAI GPT-4.1-mini (fine-tuned), Vercel AI SDK, Prisma 7, pgvector, Langfuse
- **Архитектура:** Stateless brain-first — LLM решает порядок инструментов, нет rigid FSM
- **21 LLM-инструмент:** findStudios, askGender, selectDevice, browseServices, addToCart, checkAvailability, getBookingLink, searchKnowledge, requestHandoff и др.
- **Multi-channel:** Website widget, Instagram (Meta Graph API), Facebook, Telegram
- **Knowledge base:** pgvector embeddings (text-embedding-3-small), 8 document types × 6 локалей, similarity search с threshold 0.3
- **Fine-tuning:** 664 диалога (626 base + 38 targeted), iterative quality-first approach
- **Session management:** Conversation (persistent preferences) + BookingSession (24h transient state, detailsFSM в JSON)
- **Security:** injection detector (regex), rate limiting (DB-based), CORS
- **Observability:** Langfuse OpenTelemetry — token usage, costs, tool calls, latency
- **Sync:** admin DB every 6 hours → vectorize → pgvector
- **Роль в экосистеме:** AI-консультант, который знает продукт, ведет к записи, отвечает на вопросы из knowledge base.

### 5. `loveepil-analytics` — независимая аналитическая платформа

- **Stack:** Next.js 16, Prisma 6, PostgreSQL (own DB), MUI X Charts/DataGrid, Vitest
- **Собственная БД:** отдельная от продуктовой — event_log, tracking_events, client_sessions, customers, ad_spend, daily_stats, exchange_rates
- **19 dashboard widgets:** ROI, Attribution, Revenue Attribution, Channels, Sites, UTM Traffic, Lead Conversion, Lead Cohort, Cohort, Customer LTV, Journeys, Time, Organic, Devices, Events, Funnel, Exchange Rates, Users, Dashboard
- **Attribution model:**
  - First-touch (immutable): запоминает первый источник трафика навсегда
  - Last-touch (mutable): non-direct-last-click logic — если last touch = direct, сохраняет предыдущий non-direct
  - Traffic channels: Paid Search (gclid), Paid Social (fbclid/ttclid), Organic Search, Organic Social, Referral, Direct, Internal, Email, SMS
- **Ingestion:** Vercel Analytics Drain (real-time pageviews + events) + Admin API (conversion events)
- **Lifecycle tracking:** PENDING → SCHEDULED → COMPLETED → CANCELLED → EXPIRED
- **Lead-to-booking sync:** match по phone number каждые 6 часов
- **Multi-currency:** ECB exchange rates sync (daily 17:00 UTC), revenue нормализация в EUR
- **6 cron jobs:** health (5 min), sync-event-status (hourly), sync-missed-conversations (6h), aggregate-daily-stats (daily), expire-stale-leads (daily), sync-exchange-rates (daily)
- **Роль в экосистеме:** single source of truth для marketing attribution и operational analytics; склеивает web-события с booking lifecycle.

### 6. `loveepil-strapi` — headless content management

- **Stack:** Strapi 4.25, TypeScript, SQLite (dev) / PostgreSQL (prod)
- **7 content types:** Blog, Career, Device, Country Offer, Review, Google Rating, Career CV
- **11 плагинов:** i18n, CKEditor, DeepL translate, REST cache (1h TTL), drag-drop, import/export
- **5 локалей:** PL, UA, ES, DE, UK
- **Кастомная логика:**
  - Career CV → PDF generation (pdfkit) + Telegram HR-бот notification
  - Blog/Device/Country-Offer → server-side фильтрация по странам
  - Lifecycle hooks: urlPath uniqueness validation per locale
- **Роль в экосистеме:** контентный слой для blog, career, devices, offers; consumed by frontend и frontend-country через REST API.

### 7. `loveepil-emails` — транзакционные коммуникации

- **Stack:** Next.js 15, React Email, i18next, Prisma 6 (Edge Runtime), Tailwind CSS 4
- **7 email шаблонов:** Booking Create/Update/Remind, Booking Cancel, Sign-In, Purchase Success, Visit Feedback, Treatment Feedback
- **6 языков** с context-aware контентом
- **Smart recommendations:** gender-specific (men/women) + device-specific (Onda/Endo) + locale-specific pre/post-treatment images
- **Multi-currency:** форматирование цен per country (EUR/GBP/UAH/PLN)
- **Rendering:** React Server Components → HTML string via `render()` → consumed by external services (Resend)
- **Роль в экосистеме:** rendering layer для всех transactional emails; триггерится из admin (webhooks, cron jobs) и auth (magic link sign-in).

---

## 3.2 Почему это разделено именно так

Разделение по границам ответственности:

- **Acquisition** (frontend-country, 5 доменов) отдельно от **Core Conversion** (frontend, booking/payments/profile);
- **Operations/Admin** (133 server actions, RBAC, 43 модели) отдельно от клиентского интерфейса;
- **AI execution layer** (21 tool, pgvector, fine-tuned LLM) отдельно от UI;
- **Analytics truth layer** (собственная БД, 19 дашбордов) отдельно от продуктовой БД;
- **Content management** (Strapi, 7 content types) отдельно от frontend rendering;
- **Email rendering** (React Email, 7 шаблонов) отдельно от email triggering.

Результат:

- каждый репозиторий деплоится независимо (все на Vercel, свои env);
- изменение в analytics не ломает booking flow;
- AI-сервис можно fine-tune и деплоить без downtime продукта;
- новая страна добавляется через config + translations, не трогая core logic.

---

## 3.3 Shared contracts между репозиториями

| Contract | Между кем | Механизм |
|---|---|---|
| **Prisma schema** | frontend, frontend-country, admin, emails | Shared schema (40+ моделей), одна PostgreSQL |
| **Altegio API types** | frontend, admin, ai-service | Shared TypeScript types для booking/staff/services |
| **Strapi REST API** | strapi → frontend, frontend-country | REST endpoints с locale/country filtering |
| **Stripe webhooks** | Stripe → admin → emails | Payment lifecycle events, metadata conventions |
| **Analytics events** | frontend, frontend-country, admin → analytics | Vercel Drain + track-conversion API (x-api-key) |
| **AI knowledge sync** | admin DB → ai-service | Cron sync every 6h → vectorize → pgvector |
| **Email rendering** | admin (trigger) → emails (render) → Resend (send) | React Email render() → HTML string |
| **Telegram notifications** | admin, strapi → Telegram Bot API | Lead alerts, feedback alerts, HR CV notifications |

---

## 4. Сквозные потоки (как система реально работает)

## 4.1 Поток A: Acquisition → Core Conversion

1. Пользователь заходит на региональный домен (loveepil.pl/loveepil.de/...).
2. Видит 252 SSG-страницы с локализованным контентом, SEO-оптимизацией, JSON-LD.
3. Пиксели (GTM, FB, TikTok) фиксируют визит → данные попадают в Vercel Analytics Drain → analytics.
4. Пользователь находит ближайшую студию (Google Maps), читает blog (Strapi), смотрит FAQ.
5. При клике "Записаться" → переход в `loveepil-frontend` → booking wizard (50+ компонентов).
6. Оплата через Stripe → webhook → admin обрабатывает → email confirmation → feedback cron через 24h.

## 4.2 Поток B: Core Product → Admin Operations

1. Booking создается через Altegio API → webhook приходит в admin.
2. Admin обогащает данные: привязывает Stripe PaymentIntent, создает Purchase, трекает UserAbonnement.
3. Stripe webhook (383 строки): upsert user → upsert payment → create purchase → create abonnement grants → track CRM event → send email.
4. Операторы управляют через admin: переводы (DeepL), контент, FAQ, staff, devices, loyalty programs.
5. RBAC контролирует доступ: 9 модулей × 4 действия × роли.

## 4.3 Поток C: AI-assisted consultation (multi-channel)

1. Пользователь пишет в виджет на сайте / Instagram DM / Facebook Messenger.
2. ai-service загружает Conversation + BookingSession из PostgreSQL.
3. Brain строит system prompt (static English core + dynamic context: studio, gender, cart).
4. LLM (fine-tuned GPT-4.1-mini) решает какой из 21 инструментов вызвать.
5. Tool loop (max 5 шагов): findStudios → askGender → selectDevice → browseServices → addToCart → checkAvailability → getBookingLink.
6. Knowledge search: user question → embedding → pgvector similarity → top-3 results → LLM пишет ответ из reference data.
7. Результат сохраняется в БД, Langfuse логирует tokens/cost/latency.
8. Если AI не справляется → requestHandoff → передача человеку.

## 4.4 Поток D: Analytics feedback loop

1. Vercel Analytics Drain: real-time pageviews + custom events (form submissions, button clicks) → analytics ingestion.
2. Admin API: conversion events (booking, purchase) → track-conversion endpoint.
3. Attribution engine: first-touch (immutable) + last-touch (non-direct-last-click) + UTM parsing + click ID extraction (gclid/fbclid/msclkid/ttclid).
4. Lead lifecycle: PENDING → sync-missed-conversations (match by phone every 6h) → SCHEDULED → sync-event-status (hourly) → COMPLETED/CANCELLED.
5. Revenue normalization: original currency → EUR via ECB rates (daily sync).
6. Daily aggregation: pre-computed stats для fast dashboard loading.
7. 19 дашбордов: ROI, Attribution, LTV, Cohort, Funnel, Journey analysis → management decisions.

## 4.5 Поток E: Content lifecycle

1. Контент-менеджер создает Blog/Career/Device/Offer в Strapi (CKEditor WYSIWYG).
2. DeepL plugin автоматически переводит на 5 локалей.
3. REST cache (1h TTL) снижает нагрузку на Strapi.
4. Frontend-country и frontend получают контент через REST API с ISR (1 hour revalidate).
5. Career CV заявки: пользователь заполняет форму → Strapi сохраняет → Telegram HR-бот уведомляет → PDF генерируется по запросу.

## 4.6 Поток F: Email automation

1. **Booking created** → admin webhook → emails render BookingNotifyEmail (staff, services, studio, recommendations) → Resend отправляет.
2. **Payment succeeded** → Stripe webhook → admin → emails render PurchaseSuccessEmail (itemized receipt, abonnement details) → send.
3. **Visit completed** → hourly cron (visit-remind) → emails render VisitFeedbackEmail (post-treatment recommendations by gender/device) → send.
4. **18 days post-treatment** → daily cron (treatment-result-feedback) → emails render TreatmentFeedbackEmail → send.
5. **All emails:** 6 языков, multi-currency pricing, context-aware recommendations (gender + device + locale).

---

## 5. Структура новой страницы (`/projects/loveepil`)

## 5.1 Hero

Содержит:

- Что это за продукт: "7-repository ecosystem serving 20+ studios across 5 countries"
- Ваша роль: `Lead AI Architect | Product Builder`
- Value statement: "Designed and built the full product stack — from multi-domain acquisition to AI consultation to independent analytics"
- Краткие цифры: 7 repos, 4 databases, 5 countries, 6 languages, 3000+ source files

## 5.2 Problem Context

- Beauty/epilation network росла из одного города в международную сеть.
- Single-app не масштабировался: booking + content + admin + AI + analytics в одном репозитории = deployment bottleneck.
- Altegio CRM покрывал только базовую запись — не было loyalty, multi-language, AI-support, attribution analytics.
- Каждая новая страна требовала: локализованный домен, local SEO, currency, payment integration, content.
- Нужна была система, где каждый контур может развиваться независимо, но данные текут сквозь всю цепочку.

## 5.3 Ecosystem Architecture Map

Визуально показать:

```
                    ┌─────────────────┐
                    │   User Traffic   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
     ┌────────────┐  ┌────────────┐  ┌────────────┐
     │ loveepil.pl│  │ loveepil.de│  │ loveepil.es│  ... (5 domains)
     │  country   │  │  country   │  │  country   │
     └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
           │               │               │
           └───────────┬───┘───────────────┘
                       ▼
              ┌────────────────┐        ┌──────────────┐
              │    frontend    │◄──────►│  ai-service  │
              │  (core app)   │        │ (21 tools,   │
              │ booking/pay/  │        │  4 channels) │
              │ profile/loyal │        └──────┬───────┘
              └───────┬───────┘               │
                      │                       │ knowledge sync (6h)
                      ▼                       │
              ┌────────────────┐        ┌─────┴────────┐
              │     admin      │◄───────│   analytics  │
              │ (133 actions,  │        │ (19 dashboards│
              │  RBAC, Stripe, │────────│  attribution, │
              │  DeepL, crons) │ events │  lifecycle)   │
              └───┬───────┬───┘        └──────────────┘
                  │       │
          ┌───────┘       └────────┐
          ▼                        ▼
   ┌────────────┐          ┌────────────┐
   │   strapi   │          │   emails   │
   │ (7 types,  │          │ (7 templates│
   │  5 locales,│          │  6 languages│
   │  DeepL)    │          │  React Email│
   └────────────┘          └────────────┘
```

**Shared infrastructure:**
- PostgreSQL (shared by frontend, frontend-country, admin, emails)
- AI Service PostgreSQL + pgvector (own DB)
- Analytics PostgreSQL (own DB)
- Strapi SQLite/PostgreSQL (own DB)

## 5.4 Repository Responsibilities

| Repo | Responsibility | Scale | Why Separated | Your Ownership |
|---|---|---|---|---|
| **frontend** | Core user journey: booking, payments, loyalty, profile | 1306 files, 40+ models | Conversion-critical path; own deployment cycle | Architecture, FSD structure, Stripe integration, booking wizard |
| **frontend-country** | Multi-domain acquisition, SEO, local content | 762 files, 252 SSG pages | Per-country domains; SEO requires own meta/JSON-LD | Multi-domain architecture, SSG strategy, pixel integrations |
| **admin** | Operations: CRM extension, translations, payments, feedback | 894 files, 133 actions | Internal tool; different auth/RBAC; different deployment cadence | RBAC system, Stripe webhook pipeline, DeepL integration, cron automation |
| **ai-service** | AI consultation across 4 channels | 21 tools, 664 fine-tuning dialogs | Own LLM lifecycle (fine-tune, deploy, observe); own DB (pgvector) | Brain-first architecture, tool design, fine-tuning pipeline, Langfuse setup |
| **analytics** | Independent attribution & lifecycle analytics | 19 dashboards, 6 crons | Own truth layer; isolated from product DB; different query patterns | Full system design: ingestion, attribution model, lifecycle sync, dashboards |
| **strapi** | Headless CMS for editorial content | 7 content types, 5 locales | Content team independence; CMS-specific deployment | Content model design, DeepL integration, Telegram HR-bot |
| **emails** | Transactional email rendering | 7 templates, 6 languages | Email templates change independently; Edge Runtime | Template system, context-aware recommendations, multi-currency |

## 5.5 Key Architectural Decisions

### Decision 1: Feature-Sliced Design across all frontends

- **Контекст:** 3 frontend-приложения (frontend, frontend-country, admin) растут параллельно, каждое 700-1300 файлов.
- **Выбор:** FSD с кастомным naming (appLayer/pagesLayer вместо app/pages из-за конфликта с Next.js App Router).
- **Альтернатива:** Flat structure или atomic design.
- **Почему:** FSD дает единую ментальную модель для всех трёх приложений. Разработчик, знающий структуру одного, сразу ориентируется в другом.
- **Эффект:** Консистентная архитектура на 3000+ файлов; четкие import boundaries (shared → entities → features → widgets → pagesLayer → appLayer).

### Decision 2: Shared Prisma schema (modular, 40+ models)

- **Контекст:** frontend, frontend-country, admin и emails работают с одной PostgreSQL, но каждому нужны разные модели.
- **Выбор:** Модульная Prisma schema (12 файлов: auth, booking, studio, services, loyalty, purchases, feedbacks, translations, notifications, media, faq, admin). 1175 строк total.
- **Альтернатива:** Отдельные схемы per repo или единый monolith файл.
- **Почему:** Модульность дает domain separation внутри одной БД. 11 translation tables обеспечивают multi-language на уровне данных.
- **Эффект:** Type-safe database access из любого репозитория; изменение в одной domain-области не трогает другие; Prisma автогенерирует types.

### Decision 3: Brain-first AI architecture (не FSM)

- **Контекст:** AI-агент должен вести пользователя к записи, но пользователи задают вопросы в произвольном порядке.
- **Выбор:** LLM решает какой из 21 инструментов вызвать (brain-first), без rigid state machine. Multi-step execution (max 5 шагов per request).
- **Альтернатива:** Deterministic FSM с фиксированными переходами.
- **Почему:** Пользователи не следуют linear flow — они спрашивают о цене до выбора студии, меняют решение, задают FAQ посередине booking.
- **Эффект:** Гибкий диалог; LLM обучен через 664 fine-tuning диалога; 4 response patterns (pass-through, merge, speaking, silent) покрывают все UX-сценарии.

### Decision 4: Независимая analytics с собственной БД

- **Контекст:** Нужна marketing attribution и lifecycle tracking, но продуктовая БД не подходит для analytics queries.
- **Выбор:** Отдельная PostgreSQL с event_log, tracking_events, client_sessions, customers, ad_spend, daily_stats. Ingestion через Vercel Analytics Drain + Admin API.
- **Альтернатива:** Google Analytics 4 / Mixpanel / embedded analytics в admin.
- **Почему:** GA4 не дает cross-domain session stitching с booking lifecycle. Нужен контроль над attribution model (first-touch + non-direct-last-click). Нужна lead-to-booking sync по phone number.
- **Эффект:** 19 dashboard widgets; multi-touch attribution; lead lifecycle tracking (PENDING → SCHEDULED → COMPLETED → EXPIRED); revenue normalization через ECB rates.

### Decision 5: Per-studio Stripe integration через admin

- **Контекст:** Каждая студия может иметь свой Stripe account (разные юр. лица в разных странах).
- **Выбор:** StripeIntegration модель в Prisma с publicKey/secretKey/webhookSecret per studio. Admin управляет привязкой. Webhook handler (383 строки) обрабатывает payment lifecycle.
- **Альтернатива:** Один Stripe account с Connected Accounts.
- **Почему:** Разные юрисдикции, разные валюты, разные правила. Per-studio ключи дают полную гибкость.
- **Эффект:** Multi-currency payments (EUR/PLN/GBP/UAH); полный lifecycle tracking; автоматическая email-цепочка после оплаты.

### Decision 6: DeepL-powered translation pipeline

- **Контекст:** 6 языков × десятки сущностей (services, categories, staff, FAQ, devices, banners, studios, cities, countries) = тысячи строк перевода.
- **Выбор:** DeepL API integration в admin для bulk translation + manual review с isCorrectTranslation flag. Strapi тоже использует DeepL plugin для content.
- **Альтернатива:** Manual translation only или Google Translate.
- **Почему:** DeepL дает лучшее качество для европейских языков. isCorrectTranslation flag позволяет отслеживать ревью.
- **Эффект:** Масштабирование на новую страну: config + DeepL translate + review, не неделя ручного перевода.

### Decision 7: Cron-driven automation layer

- **Контекст:** Множество бизнес-процессов требуют scheduled execution: feedback requests, payment cleanup, analytics sync, exchange rates.
- **Выбор:** Vercel Cron across repos: admin (4 crons), analytics (6 crons), ai-service (2 crons). Total: 12 scheduled jobs.
- **Альтернатива:** Event-driven queue (SQS/RabbitMQ).
- **Почему:** Vercel Cron — zero-infrastructure; достаточно для текущего масштаба; каждый job изолирован в своем repo.
- **Эффект:** Automated email chains (visit feedback → treatment feedback), stale lead expiration, analytics aggregation, knowledge base sync — всё работает без ручного вмешательства.

## 5.6 Operational and Product Outcomes

**Architectural outcomes (публично безопасные):**

- 7 repositories, каждый деплоится независимо на Vercel
- 4 PostgreSQL databases (product, analytics, AI+pgvector, CMS)
- 3000+ TypeScript source files с единой FSD архитектурой
- 40+ Prisma models с 11 translation tables → 6 languages
- Zero shared runtime dependencies между repos (только shared contracts)

**Product outcomes:**

- 5 country domains с 252 SSG pages и full SEO suite
- 20+ studios managed через единый admin panel
- AI consultant: 21 tool, 4 channels, 664 fine-tuning диалога
- 19 analytics dashboards с multi-touch attribution
- 12 automated cron jobs across ecosystem
- 7 transactional email templates с context-aware recommendations

**Operational outcomes:**

- Новая страна: config + translations + domain → без изменений в core logic
- Admin RBAC: operator → editor → admin → super_admin levels
- Automated feedback loop: booking → 24h visit feedback → 18d treatment feedback
- Real-time Altegio sync + Stripe webhook processing
- Lead lifecycle tracking: web event → phone match → booking status → revenue attribution

## 5.7 My Role and Execution Model

**Архитектурные решения (лично):**

- Разделение монолита на 7 репозиториев по domain boundaries
- Feature-Sliced Design с кастомным naming для Next.js App Router compatibility
- Brain-first AI architecture вместо deterministic FSM
- Независимая analytics platform с собственной attribution model
- Modular Prisma schema (12 files) с translation layer
- Per-studio Stripe integration model
- Cron-driven automation layer (12 jobs across 3 repos)

**Delivery (лично):**

- Full-stack implementation всех 7 репозиториев
- Stripe webhook pipeline (payment → purchase → email → CRM tracking)
- AI fine-tuning pipeline (dialogue collection → JSONL → OpenAI → deploy → observe)
- Analytics ingestion engine (Vercel Drain → normalization → attribution → lifecycle sync)
- RBAC system design and implementation (3 permission categories)
- Multi-domain deployment architecture (5 countries × Vercel)
- Cross-repo integration contracts (shared types, webhook formats, API conventions)

**Boundaries held:**

- Product DB schema → sole owner
- AI agent behavior (prompts, tools, fine-tuning) → sole owner
- Analytics attribution model → sole owner
- Stripe integration (webhook handler, per-studio keys) → sole owner
- Email template rendering → sole owner
- Content model (Strapi schema) → sole owner
- Cron automation across all repos → sole owner

## 5.8 CTA

- `Talk about architecture` → Contact form
- `View AI Agent deep dive` → `/projects/ai-agent`

---

## 6. Контент, который будет добавлен (обновленный список блоков)

1. Hero с ecosystem overview (7 repos, 5 countries, key numbers).
2. Problem Context (growth → architectural need).
3. Interactive ecosystem architecture map (nodes + data flows).
4. Repository responsibility cards (7 карточек с scale indicators).
5. Cross-system flow diagrams (6 потоков: acquisition, operations, AI, analytics, content, email).
6. 7 architectural decisions (context → choice → alternative → why → effect).
7. Shared contracts table (8 integration points).
8. Outcomes section (architectural / product / operational).
9. Ownership section (decisions + delivery + boundaries).
10. CTA: Talk about architecture + AI Agent deep dive.

---

## 7. Что важно подчеркнуть про ваш опыт

1. **System-level thinking:** вы строили не features, а целостную систему из 7 сервисов с 4 базами данных и 8 integration contracts.
2. **Full ownership:** от database schema до AI fine-tuning до analytics attribution model — sole owner всех ключевых решений.
3. **Multi-domain scale:** 5 стран, 6 языков, 20+ студий, multi-currency — не pet project, а production SaaS.
4. **AI-first product thinking:** AI не приклеен сбоку, а интегрирован в продуктовый контур (knowledge sync, booking flow, multi-channel).
5. **Data-informed operations:** собственная analytics platform заменяет GA4, дает attribution + lifecycle + revenue tracking.
6. **Revenue-critical integrations:** Stripe per-studio, Altegio CRM, payment automation — деньги проходят через ваш код.
7. **Automation mindset:** 12 cron jobs автоматизируют feedback, cleanup, sync, aggregation — система работает без ручного вмешательства.

Позиционирование: `Lead AI Architect | Product Builder` — не просто "wrote code", а "designed, built, and operate a 7-service product ecosystem".

---

## 8. Тон и гуманизация текста

Принципы:

- простые формулировки, без перегруза терминами;
- минимум «громких» слов, максимум причинно-следственных связей;
- каждое сильное утверждение объясняется конкретным решением;
- числа из реального кода (1306 файлов, 40+ моделей, 133 actions) — не "many", а точные цифры.

Шаблон абзацев:

`Было ограничение -> приняли решение -> реализовали так -> получили эффект`.

Пример:
> "Altegio covered basic booking but had no support for multi-language, loyalty programs, or payment processing. I built an admin layer (894 files, 133 server actions) that extends Altegio with Stripe payments, DeepL translations, and automated feedback collection — turning a booking tool into a full operations platform."

---

## 9. План реализации в коде (после утверждения контента)

1. Создать `src/app/projects/loveepil/page.tsx`.
2. Создать `src/app/projects/loveepil/layout.tsx` (metadata + JSON-LD).
3. Создать новый page-layer (по аналогии с `AIAgent`) с секциями:
   - Hero
   - Context
   - EcosystemMap (interactive architecture diagram)
   - RepositoryCards (7 карточек)
   - CrossSystemFlows (6 потоков)
   - ArchitecturalDecisions (7 decisions)
   - SharedContracts (table)
   - Outcomes
   - Ownership
   - CTA
4. Обновить `FeaturedProjects`:
   - добавить `caseStudy: '/projects/loveepil'` для `love💗epil Multi-domain SaaS Ecosystem`.
5. Опционально добавить пункт в `NavFloat`.

---

## 10. Критерии готовности страницы

- Читатель понимает, что `loveepil-*` — единая экосистема из 7 сервисов, а не набор разрозненных реп.
- Видно конкретный масштаб: цифры файлов, моделей, actions, tools, dashboards.
- Видно 6 сквозных потоков данных между сервисами.
- Ясно, где был ваш личный архитектурный и delivery-вклад (sole ownership).
- 7 architectural decisions объяснены в формате context → choice → why → effect.
- Страница не дублирует AI-case, а показывает AI-сервис как часть большей системы.
- Рекрутер/hiring manager видит: "этот человек проектирует и строит production systems, а не пишет отдельные фичи".

---

## 11. Данные, которые можно добавить позже без блокировки

- Публично безопасные KPI с периодом (`as of <month year>`).
- Interactive ecosystem diagram (React Flow / D3).
- Screenshots интерфейсов без чувствительных данных (admin dashboard, analytics, AI chat).
- Code snippets ключевых архитектурных решений (brain executor, attribution engine, webhook handler).
- Testimonial от product owner (если доступен).
