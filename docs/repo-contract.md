# Astonishing Tales of the Sea Repo Contract

## Repo purpose

A content-first Next.js App Router site for `astonishingtalesofthesea.com`.

## Routes

- `/` — homepage
- `/articles` — all articles
- `/articles/<slug>` — article detail
- `/categories` — category landing page
- `/categories/<category-id>` — category detail
- `/about` — editorial standards
- `/robots.txt`
- `/sitemap.xml`

## Article source of truth

- Path: `content/articles/<slug>.mdx`
- Route: `/articles/<slug>`

## Required frontmatter

```yaml
title: string
slug: lowercase-kebab-case-string
description: string
excerpt: string
category: disasters | voyages | ship-construction | your-life-as-the-captain
tags: string[]
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
draft: boolean
featured: boolean
articleType: string
primaryKeyword: string
sensitivityLevel: low | medium | high
sourceConfidence: seed | draft | verified
```

Rules:
- Filename slug must match frontmatter `slug`.
- Use one of the category IDs in `src/lib/categories.ts`.
- Keep fatal-disaster language restrained and source-honest.
- `sourceConfidence: verified` should only be used after source review.

## Validation commands

```bash
npm run lint
npm run build
```

## Deployment

Vercel project should build from GitHub `main`.
Custom domain target: `astonishingtalesofthesea.com` once Adam owns the domain.

## Article Ops notes

The writing framework lives at:
`/Users/stanger/.openclaw/workspace/shared-brain/article-ops/frameworks/astonishing-tales-of-the-sea`

For now, Article Ops should create or update MDX files in `content/articles/` and preserve this repo contract. A dedicated Hermes auto-publisher can be added later.
