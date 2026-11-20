# Job Copilot — Roadmap

Each milestone ends with something working, deployed, and committed through a pull request.

## Milestone 0 — Foundations (in progress)
- [x] Next.js (App Router) + TypeScript + Tailwind scaffold
- [ ] App shell: layout, navigation, landing page
- [x] GitHub repo + first CI workflow (lint, typecheck, build)
- [ ] First deploy on Vercel (live URL from week one)

## Milestone 1 — Data layer
- [ ] PostgreSQL with Drizzle ORM (PGlite locally, Neon in production)
- [ ] Schema: `users`, `jobs`, `applications`, `application_events`
- [ ] Migrations and seed script
- [ ] Input validation with Zod

## Milestone 2 — Auth
- [ ] Sign up / sign in (email + password, GitHub OAuth)
- [ ] Every query scoped to the signed-in user (authorization on the server)

## Milestone 3 — Applications pipeline
- [ ] Add a job manually (title, company, link, salary, location, remote)
- [ ] Kanban board: Saved → Applied → Interview → Offer / Rejected
- [ ] Drag & drop with optimistic updates (Server Actions)
- [ ] Timeline of events per application (notes, interview dates)

## Milestone 4 — AI parsing
- [ ] Paste a job posting → Claude extracts structured fields (structured output + Zod)
- [ ] User reviews/edits before saving
- [ ] Cost & abuse controls: rate limit, input size limit, feature flag

## Milestone 5 — CV matching
- [ ] Upload CV (PDF → text)
- [ ] Match score + missing skills per job
- [ ] Embeddings with pgvector for "similar jobs"

## Milestone 6 — Market insights dashboard
- [ ] Most requested skills across saved jobs
- [ ] Salary ranges, remote vs on-site, seniority split
- [ ] Funnel: applied → interview → offer conversion

## Milestone 7 — Production quality
- [ ] Unit tests (Vitest) + E2E tests (Playwright) in CI
- [ ] Error tracking & logging
- [ ] Accessibility pass, Lighthouse score
- [ ] README with screenshots, architecture diagram, demo account
