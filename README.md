## Streaming Dashboard

A modern streaming dashboard inspired by Netflix/Hulu, built with Next.js 16, TypeScript, Tailwind CSS, and the TMDB API.
This project displays trending movies, popular categories, a hero banner, and detailed movie pages with full metadata.

* Live Demo: https://streaming-dashboard-xi.vercel.app/
* GitHub Repo: [GitHub Repo](https://github.com/imthiyagu07/streaming-dashboard)

## Tech Stack
* Next.js 16 (App Router)

* TypeScript

* Tailwind CSS

* TMDB API (v4 Auth)

* Server Components + Client Components

* Image Optimization (Next/Image)

* Deployed on Vercel

## Features
* Fully functional streaming-style dashboard

* Hero Banner

* Dynamic Movie Details Page

* API Integration

* Responsive UI

## Folder Structure

```bash
app/
  layout.tsx
  page.tsx
  globals.css
  movie/
    [id]/
      page.tsx

components/
    Header.tsx
    HeroBanner.tsx
    MovieRow.tsx

lib/
  tmdb.ts

types/
  movie.ts

public/
  favicon.ico

next.config.js
README.md
AI_Report.md
```

## Environment Variables

Create a .env.local file in the project root:

```bash
TMDB_ACCESS_TOKEN=your_tmdb_v4_bearer_token
NEXT_PUBLIC_IMAGE_BASE=https://image.tmdb.org/t/p
```

## Running the Project Locally

* Install dependencies

```bash
npm install
# or
pnpm install
```

* Run development server

```bash
npm run dev
```

Open your browser:

```bash
http://localhost:3000
```

## Build for production

```bash
npm run build 
npm start
```

## Deploying to vercel

1. Push your project to GitHub

2. Go to: https://vercel.com

3. Click New Project → Import GitHub Repo

4. Add Environment Variables:

```bash
TMDB_ACCESS_TOKEN=your_token
NEXT_PUBLIC_IMAGE_BASE=https://image.tmdb.org/t/p
```

5. Deploy

## What I learn

* Using Next.js Server Components for data fetching

* Working with async params in dynamic routes (Next.js 15+)

* Authenticating with TMDB using Bearer Token (v4)

* Handling missing data & fallbacks

* Responsive layout using Tailwind

* Hiding scrollbars with custom utilities

* Using next/image for optimized images