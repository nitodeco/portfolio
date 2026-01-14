# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Production build
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
pnpm check        # Run Biome check with --write and --unsafe flags
```

## Architecture

This is a Next.js 16 portfolio site with internationalization (en, hr, de) using next-intl.

### Tech Stack
- **Framework**: Next.js 16 with App Router and React 19
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **i18n**: next-intl with dynamic `[locale]` routing
- **Analytics**: PostHog (EU endpoint with API rewrites)
- **Code Quality**: Biome (linting + formatting), Husky, Commitlint

### Project Structure
```
src/
├── app/[locale]/          # Locale-based routing (layout.tsx, page.tsx)
├── components/
│   ├── ui/                # shadcn/ui base components (don't edit directly)
│   ├── atoms/             # Simple building blocks
│   ├── molecules/         # Combinations of atoms
│   ├── organisms/         # Complex components (Header, Footer)
│   └── pages/Portfolio/   # Page-level components with /partials
├── i18n/                  # next-intl routing, navigation, request config
├── messages/              # Translation JSON files (en.json, hr.json, de.json)
└── lib/utils.ts           # cn() utility for Tailwind class merging
```

### Component Pattern
- Atomic Design: atoms → molecules → organisms → pages
- Each component has an `index.ts` barrel export
- Server Components by default, `'use client'` only when needed

### Path Alias
`@/*` maps to `./src/*`

## Deployment

Deployed on VPS via Coolify at https://nicomoehn.codes
