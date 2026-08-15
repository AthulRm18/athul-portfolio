# Athul R Mohan — Portfolio

A modern personal portfolio website built to showcase my projects, technical skills, and professional profile.

## Overview

This portfolio is designed to give a clear view of who I am, what I build, and the kind of work I am interested in. It features selected projects, case studies, contact links, and resume access in a clean and minimal interface.

## What this website includes

- Featured projects and case studies
- AI/ML and software development focus areas
- Personal profile and introduction
- Contact and social links
- Resume download

## Tech Stack

- Next.js 15
- Tailwind CSS v4
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` after starting the development server.

## Content Management

| Section | File |
|------|------|
| Projects and case studies | `src/lib/data/projects.ts` |
| Hero and audience content | `src/lib/data/audience.ts` + `src/components/hero/AudienceBar.tsx` |
| Contact and social links | `src/lib/data/site.ts` |
| Resume file | `public/resume.pdf` |

## Deployment

This website can be deployed directly on Vercel with no extra configuration.

## Purpose

This repository contains the source code for my portfolio website and acts as the central place for maintaining my public developer presence online.
