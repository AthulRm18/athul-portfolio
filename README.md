# Athul R Mohan — Portfolio

High-end minimalist portfolio for a **B.Tech student** showcasing AI/ML projects — built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

| What | Where |
|------|--------|
| Projects & case studies | `src/lib/data/projects.ts` |
| Hero audience copy | `src/lib/data/audience.ts` + `src/components/hero/AudienceBar.tsx` |
| Email & social links | `src/lib/data/site.ts` (used in Header + Contact) |
| Resume | Add `public/resume.pdf` |

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy.

No extra config required.

## Design notes

- True black background, warm amber accent (no purple/blue AI tropes)
- 8-point spacing via Tailwind and `grid-8` utility
- Skeleton loaders, empty states, and route-level `loading.tsx`
- Audience switcher (Engineers view uses code-infused typography)
- macOS-style window frames for hero and contact sections
