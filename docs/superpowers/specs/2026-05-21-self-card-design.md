# Self-Card — Design Spec

**Date:** 2026-05-21
**Author:** Erbol Mederbekov
**Status:** Draft → awaiting user review

## Goal

Build a single-page personal landing site ("self-card") that presents Erbol
Mederbekov as a Senior Frontend / React Native engineer. Primary audience:
international HR recruiters and hiring managers (target: relocation roles).

Success criteria:

- HR can scan the page in under 30 seconds and understand seniority, impact,
  and stack.
- Lighthouse score 95+ in all four categories on mobile.
- Both EN and RU content versions available, switchable at runtime.
- Source content (resume PDF) is downloadable.
- Direct CTAs (Email / Telegram / GitHub) — no forms, low friction.

## Out of scope (YAGNI)

- Light theme / theme toggle — dark only.
- Backend API, contact forms, server actions.
- CMS / dynamic content fetching.
- GitHub Pinned Repos integration (cut after option review).
- Blog, case study sub-pages.
- Analytics, cookie banners.

## Tech stack

- **Framework:** Next.js 15 (App Router, React 19).
- **Language:** TypeScript (strict).
- **Styling:** TailwindCSS v4 (CSS-first config in `globals.css`).
- **i18n:** `next-intl` with `[locale]` segment (`en`, `ru`).
- **Animation:** `framer-motion` for scroll-reveal and hover effects.
- **Fonts:** `next/font` with Geist Sans + Geist Mono.
- **Linting / quality:** ESLint (Next preset) + Prettier.
- **Package manager:** `bun` (consistent with user's other projects).
- **Deploy target:** Vercel (free tier, single-region).

## Information architecture (B — stats-first)

Order of sections from top to bottom:

1. **Hero** — name, tagline, primary CTAs, animated stack-rotator on the right.
2. **Impact Stats** — 4 large metric tiles.
3. **Experience** — 3 company cards (Cointelegraph highlighted as top card).
4. **Skills** — categorized grid (Core / UI / Build / Testing / State /
   Monitoring / Data / Tooling / Routing / Mobile / Forms).
5. **Mobile & Android** — dedicated banner for React Native + Android cert.
6. **Contact** — large CTA section, no form.
7. **Footer** — minimal: locale switch, copyright, link to source code.

Rationale: HR-scan-friendly. Numbers and brand recognition (Cointelegraph)
appear within the first viewport-and-a-half. Story / details are visible
on scroll, not required for the first decision.

## Project structure

```
self-card/
├── messages/
│   ├── en.json                    # UI copy in English
│   └── ru.json                    # UI copy in Russian
├── public/
│   ├── resume/
│   │   └── Erbol_Mederbekov_CV_EN.pdf
│   └── og.png                     # OG share image
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx         # html, fonts, theme, NextIntlProvider
│   │   │   └── page.tsx           # section composition
│   │   ├── globals.css            # Tailwind v4 + design tokens
│   │   ├── not-found.tsx
│   │   └── api/                   # reserved, empty
│   ├── widgets/                   # composite UI blocks
│   │   ├── hero/
│   │   ├── impact-stats/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── mobile-android/
│   │   ├── contact/
│   │   └── footer/
│   ├── shared/
│   │   ├── ui/                    # Button, Section, Tag, Icon, LocaleSwitch
│   │   ├── lib/                   # cn, useScrollReveal, useMounted
│   │   └── config/                # resume.ts (typed source of truth)
│   └── i18n/
│       ├── routing.ts             # locale config
│       └── request.ts             # next-intl request config
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**FSD dependency flow:** `app → widgets → shared`. Widgets do not import each
other. Each widget exposes a single component via `index.ts`.

## Section details

### Hero
- Layout: 2-column on desktop (`lg:grid-cols-2`), stacked on mobile.
- Left column:
  - Monospace eyebrow: `> frontend.engineer`
  - H1: `Erbol Mederbekov` (Geist display, ~96px desktop, ~56px mobile)
  - Tagline: "Building high-performance React & React Native apps for
    100K+ users." (one line on desktop, wraps on mobile)
  - CTAs row: `[Download CV]` (primary, cyan) + `[Telegram]` + `[GitHub]` +
    `[Email]` (ghost buttons with icons)
- Right column (desktop only):
  - Animated `Geist Mono` block that cycles through tech labels every ~2.5s:
    `React 19` → `TypeScript` → `React Native` → `Next.js 15` → `Tailwind v4`
    → cycle. Typewriter-style.
  - Subtle cyan glow behind.
- Bottom: scroll indicator (chevron-down, slow bounce).

### Impact Stats
- 4-column grid on desktop (`md:grid-cols-2 lg:grid-cols-4`), 2-column on
  tablet, 1-column on mobile.
- Tiles (in order):
  - `−70%` Load time · `6s → 1.8s`
  - `−35%` Bundle size · `170MB → 110MB`
  - `100K+` Active users · `iOS + Android`
  - `50+` Production releases · `Aug 2022 – 2026`
- Each tile: huge mono number (cyan for positive deltas like `−70%`, plain
  white for counts), label below, hairline border, subtle hover lift.
- Framer Motion `whileInView` with `stagger: 0.08`.

### Experience
- Vertical stack of cards. Cointelegraph card has a thin cyan left border
  to indicate "featured / longest tenure".
- Card structure:
  - Header row: `Company` (large) · `Role` (mono, secondary) · optional
    location chip (e.g. `Tallinn, EE`, `Bishkek, KG`, `Remote`)
  - Period row: `Aug 2022 – 2026` (mono, secondary)
  - 2–3 bullets (impact-focused; pulled from CV bullets where applicable)
  - Tag chips: stack used (mono, small, hairline border)
- Order: newest first. Entries reflect actual LinkedIn experience plus the
  parallel freelance track from the CV.

Entries (verified against the user's LinkedIn profile + CV):

1. **Cointelegraph** · React Native Developer (Full-time) · Aug 2022 – 2026 ·
   Remote · **featured**
   - Mobile MVP for crypto-news platform, iOS + Android
   - Cut load time 6s → 1.8s (−70%), bundle 170 MB → 110 MB
   - Shipped 50+ production releases; reached 100K+ active users
   - Tags: React Native, React, TypeScript, Redux Toolkit, Apollo GraphQL,
     Firebase, Sentry, Android (Java, Kotlin), MVVM, Android SDK

2. **Yllo** · React Native Developer (Contract) · Jun 2022 – Aug 2022 ·
   Remote
   - Short-term contract, mobile feature delivery
   - Tags: React Native, React, Node.js, JavaScript, Android

3. **Zoftify** · React Native Developer (Full-time) · Dec 2021 – May 2022 ·
   Tallinn, EE
   - Mobile product development, cross-platform iOS/Android
   - Tags: React Native, Android, JavaScript

4. **Freelance — NDA Projects** · Frontend Engineer · 2021 – 2022 · Remote
   - **ERP System** — B2B platform: DnD layouts, virtualized lists
     (react-window), multi-step forms (RHF + Zod), Uppy + S3 uploads, i18n.
     Code reviews and architectural decisions.
   - **Customer CRM** — data dashboard with Leaflet maps, Framer Motion,
     TanStack Router, PWA.
   - **Banking Debt CRM** — enterprise debt-collection system: MobX, custom
     Webpack, Nivo charts, 2GIS MapGL, SCSS architecture. Sole frontend.

5. **Paradigma** · Front-End Developer (Full-time) · Jan 2021 – Dec 2021 ·
   Bishkek, KG
   - Hybrid mobile + responsive web apps with React, Redux
   - Tags: React, Redux, Android

6. **It-hub** · Front End Assistant (Part-time) · May 2020 – Dec 2020 ·
   8 mos
   - First role: hands-on frontend foundations — HTML/CSS/JS, React basics,
     working in a real codebase under senior guidance
   - Tags: JavaScript, React, HTML, CSS

> **Important:** Cointelegraph period reads `Aug 2022 – 2026` (not "Present"),
> per the user's clarification. Cointelegraph role is the only one carrying
> the cyan-border "featured" treatment.

> **Note on the Freelance card:** Dates overlap with Zoftify / Yllo /
> Cointelegraph because the freelance track ran alongside full-time work.
> Card label includes `(parallel to full-time)` micro-note for transparency.

### Skills
- Grid of categorized cards. Each card: mono category label + list of tags.
- Categories pulled directly from CV: Core, UI / Styling, Build, Testing,
  State, Monitoring, Data, Tooling, Routing, **Mobile**, **Android**, Forms.
- 2-column grid on tablet, 3 or 4 on desktop, 1 on mobile.
- **Mobile** card: React Native, React Navigation, Reanimated, iOS, cross-
  platform.
- **Android** card (new — explicit, per user emphasis): Java, Kotlin,
  Android SDK, Android Studio, MVVM, Android Professional Certification.

### Mobile & Android
- Wider, more visual block. Two-column on desktop:
  - Left: H2 "Mobile & Android" + 2-paragraph note describing React Native
    work at Cointelegraph (100K+ users, iOS + Android) and the Android
    Professional Certification.
  - Right: stylized iOS/Android icon pair + key tech tags
    (React Native, React Navigation, Android).

### Contact
- Centered full-width section, generous vertical padding.
- H2: "Open to relocation. Let's talk." (localized)
- Sub-line: location indicator — `Bishkek, Kyrgyzstan · GMT+6`
- Same 4 CTAs as Hero, but larger and stacked into a 2x2 grid on mobile.

### Locale switcher
- Floating element fixed to the top-right corner of the viewport (small
  `EN | RU` toggle with mono font).
- Visible from any scroll position. Mirrors current locale; click swaps
  segment in the URL (preserves scroll position).
- Also rendered inline in the Footer as a redundant control for users
  who reach the bottom without noticing the floating one.

### Footer
- Single row: locale switch (`EN / RU`) · `© 2026 Erbol Mederbekov` ·
  link to source repo on GitHub.

## Data flow

### Resume data — single source of truth

File: `src/shared/config/resume.ts`

```typescript
export type ResumeData = {
  name: string;
  title: string;
  email: string;
  telegram: string;
  github: string;
  cvPdfUrl: string;
  location: { city: string; country: string; tz: string };
  stats: Array<{ value: string; label: string; positive?: boolean }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    bullets: string[];
    stack: string[];
    featured?: boolean;
  }>;
  skills: Array<{ category: string; items: string[] }>;
};

export const resume: ResumeData = { /* hardcoded from CV */ };
```

All section widgets import `resume` from this single file. Language-neutral
fields (names, dates, company names, tech tags) stay in TS. Localized UI copy
(headings, taglines, button labels) lives in `messages/{en,ru}.json`.

### i18n strategy

- `next-intl` with route segment `[locale]`. Default locale: `en`. Supported:
  `en`, `ru`.
- Locale detection: URL segment is canonical. No cookie-based redirect on
  first visit (keeps SEO simple — root `/` redirects to `/en`).
- All UI copy goes through `useTranslations()`. Resume *data* (numbers,
  names, dates, tech tags) is NOT translated.
- Bullets in Experience are localized: each experience entry has `bulletKeys`
  pointing into the message catalog.

## Visual design tokens

CSS custom properties defined in `globals.css` and consumed by Tailwind v4:

```css
:root {
  --bg: oklch(14% 0.01 240);            /* near-black */
  --bg-elevated: oklch(18% 0.01 240);
  --border: oklch(28% 0.01 240);
  --fg: oklch(95% 0.01 240);             /* off-white */
  --fg-muted: oklch(70% 0.01 240);
  --accent: oklch(78% 0.16 200);         /* electric cyan */
  --positive: oklch(75% 0.18 155);       /* mint green for −% deltas */
}
```

Typography:
- Display: `Geist`, weight 600, tight tracking.
- Body: `Geist`, weight 400.
- Mono: `Geist Mono`, weight 400 — used for stats numbers, eyebrows, tags,
  dates, and the Hero typewriter.

Spacing scale uses Tailwind defaults. Section vertical rhythm: `py-24 lg:py-32`.

Breakpoints (matches user's existing preferences):
- mobile: <768px
- tablet: 768–1023
- desktop: 1024–1279
- desktop-lg: ≥1280

## Animation policy

- Use `framer-motion`'s `whileInView` with `viewport={{ once: true }}` for
  scroll-reveal — no re-trigger on scroll-up.
- Stagger children with `delay: index * 0.06–0.1`.
- All animations are skipped if user has `prefers-reduced-motion: reduce`.
- No background particle effects or canvas — they cost LCP / CLS.

## Quality targets

| Metric                  | Target               |
|-------------------------|----------------------|
| Lighthouse Performance  | 95+ (mobile)         |
| Lighthouse Accessibility| 100                  |
| Lighthouse Best Practices| 100                 |
| Lighthouse SEO          | 100                  |
| CLS                     | < 0.05               |
| LCP                     | < 1.8s (mobile 4G)   |

Specific tactics:
- `next/font` with `display: 'swap'` and preloaded subset.
- `next/image` for all raster images, including OG image (served as static).
- No client component above the fold except the hero typewriter (lazy).
- Framer Motion imported as `motion/react` lazy chunks via dynamic where
  possible.

## SEO

- Per-locale `<title>` and `<meta description>` via `generateMetadata`.
- Open Graph image at `/og.png` (1200x630, statically generated, dark
  background + name + tagline).
- `hreflang` tags for `en` / `ru` / `x-default`.
- Single sitemap.xml and robots.txt via Next 15 metadata file API.
- JSON-LD `Person` schema in the root layout.

## Deployment

- Repository: new GitHub repo (e.g. `erbakg/self-card`), public.
- Vercel auto-deploy from `main`.
- Custom domain — out of scope for v1; default `*.vercel.app` URL is fine.

## Open questions (resolved)

- ~~Stack?~~ Next.js 15 + React 19 + TS + Tailwind v4.
- ~~Scope?~~ Single-page long landing.
- ~~Style?~~ Dark tech-noir + monospace accents.
- ~~i18n?~~ EN + RU via next-intl.
- ~~Features?~~ Framer Motion + Resume PDF + CTA buttons (no form).
- ~~Architecture?~~ B — stats-first.
- ~~Cointelegraph period?~~ 2022 – 2026 (per user clarification).

## Risks / things to watch

- **Tailwind v4 still relatively new** — some plugins may lag. Mitigation:
  keep plugin list minimal; rely on core utilities.
- **Framer Motion bundle weight** — could push past Lighthouse perf target
  on slow devices. Mitigation: lazy-load, prefer CSS for trivial transitions.
- **next-intl + App Router** — middleware adds complexity. Mitigation:
  follow official Next 15 setup verbatim; do not customize.
