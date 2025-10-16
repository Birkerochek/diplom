# Repository Guidelines
Этот проект - система учета волонёрских часов которая разрабатывается полностью на Nextjs (и фронтенд и бекенд).
Проект по архитектуре FSD.
Все переиспользуемые UI компоненты находятся в shared/ui (Button, Typography и.т.д)
Все основные используемые цвета описаны в shared/styles/variables.scss
Акцентный цвет подписан как color-brand-$primary
Весь дизайн должен быть адаптивным

Модель бд у меня записана в prisma/schema.prisma

## Project Structure & Module Organization
The Next.js entrypoints live under `app/`, using the App Router for pages and API routes. Shared feature layers follow a numbered convention inside `src/`: `1_app` for global providers and layouts, `2_pages` for feature pages, `3_widgets` for composite UI, and `6_shared` for reusable UI kits, utilities, schemas, and assets. Prisma models sit in `prisma/schema.prisma`, with the generated client cached under `app/generated/prisma/`. Static assets, fonts, and icons belong in `public/`. Keep new code aligned with this layering so imports continue to use aliases such as `@shared` and `@pages`.

## Build, Test, and Development Commands
- `npm run dev` – launch the Turbopack dev server at `http://localhost:3000` with hot reload.
- `npm run build` – create a production bundle; run this before opening PRs to surface compile issues.
- `npm run start` – serve the previously built bundle to spot runtime regressions.
- `npm run lint` – execute the project ESLint config; treat warnings as failures.
- `npx prisma generate` – refresh the client after editing `schema.prisma`.

## Coding Style & Naming Conventions
Write TypeScript with 2-space indentation and prefer named exports. React components, hooks, and widgets use PascalCase filenames, while helper modules stay in camelCase. Mirror the existing folder tiers (`6_shared/ui/Button`, `2_pages/LoginPage`) when introducing features. SCSS modules follow `Component.module.scss`, and global styles belong in `src/6_shared/styles/`. ESLint (Next.js preset) and TypeScript are the sources of truth; run linting before committing. Keep imports sorted logically (React, third-party, internal aliases) and avoid default exports unless matching surrounding patterns.



## Commit & Pull Request Guidelines
Git history favors short, lowercase summaries (often in Russian) that describe the change scope, e.g., `табы`. Follow the same style or use concise English imperatives. For every PR, include: a plain-language summary, linked issue or task ID, screenshots/gifs for UI tweaks, and notes on schema or ENV changes. Confirm that `npm run build` and `npm run lint` pass, call out any skipped checks, and request reviews from maintainers responsible for the touched layer.
