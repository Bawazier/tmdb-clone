# TMDB Clone

A movie and TV show browser built with Next.js, backed by [The Movie Database (TMDB) API](https://developers.themoviedb.org/3). It replicates the core TMDB browsing experience: category listings, title detail pages, trailers, cast/crew, streaming providers, and recommendations.

## What the app does

- **Movies**
  - Browse lists: Popular, Now Playing, Upcoming, Top Rated (`/en-US/movies/[browse]`)
  - Title detail (`/en-US/movies/title/[id]`): overview, genres, status, release date, cast & crew, watch providers (US), recommendations, and a trailer modal
- **TV shows**
  - Browse lists: Popular, Airing Today, On TV, Top Rated (`/en-US/tv/[browse]`)
  - Title detail (`/en-US/tv/title/[id]`): overview, cast/crew, season episodes, watch providers, recommendations, and a trailer modal
- **People** — TMDB person API helpers exist (`libs/api/people.ts`); the People page currently returns `notFound` and is a placeholder
- **Sign-up flow** (`/en-US/join`) — a multi-step form (Formik) for name, job, email, laptop, address and mobile. Data is kept in `localStorage` only; there is no backend.

The root `/` redirects to `/en-US/movies/popular`.

## Tech stack

- **Next.js 13** (Pages Router) + **React 18** + **TypeScript**
- **Chakra UI** for styling and theming (`styles/theme`)
- **TanStack Query v4** for data fetching, with SSR/SSG prefetching and `Hydrate`
- **Axios** for HTTP, **Formik** for forms, **react-player** for trailers
- SSG for browse pages (`getStaticProps`/`getStaticPaths`), SSR for detail pages (`getServerSideProps`)
- Production build uses Next.js `output: "standalone"` and the `imgix` image loader

## Project structure

```
components/     UI components (Header, Footer, lists, detail, modal, signup steps)
helpers/        http client and TMDB URL builder
libs/api/       TMDB API wrappers (movies, tv-shows, people)
libs/interfaces Typed response models for TMDB payloads
pages/          Next.js routes ([language]/movies, /tv, /person, /join)
styles/         Global CSS and Chakra theme
Dockerfile      Multi-stage build: development, builder, runner
docker-compose.yml  dev server + optional prod profile
.devcontainer/  VS Code dev container (complete dev environment)
```

## Environment variables

Create `.env.development` in the project root (Next.js loads it in development):

```
NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_KEY=your_tmdb_api_key
NEXT_PUBLIC_API_URL_IMAGE=https://image.tmdb.org/t/p
```

Get a key from your [TMDB account settings](https://www.themoviedb.org/settings/api).

## Run with Dev Container (recommended)

Everything you need for development is preinstalled: Node 18, npm, git, git-lfs, GitHub CLI (`gh`), ripgrep, and common CLI tools. Dependencies are installed automatically on create.

1. Install the **Dev Containers** extension in VS Code (or Cursor).
2. Open the project folder.
3. Run **Dev Containers: Reopen in Container** from the Command Palette (`F1`), or click the status-bar prompt.
4. Wait for the container to build and `npm ci` to finish.
5. In the container terminal:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 (port is forwarded automatically; the app redirects to `/en-US/movies/popular`).

The workspace is mounted at `/app` and `node_modules`/`.next` live in named volumes so host and container never fight over them. Hot reload works as usual.

## Run with Docker Compose

Development with hot reload:

```bash
docker compose up
```

Open http://localhost:3000. Source is bind-mounted; `node_modules` and `.next` use anonymous volumes.

Production build (standalone server) on http://localhost:3001:

```bash
docker compose --profile prod up --build
```

The prod build reads `NEXT_PUBLIC_*` values from your shell environment (or a root `.env`) as build args.

## Run locally (without containers)

```bash
npm ci
npm run dev
```

## Scripts

| Script          | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Production build          |
| `npm start`     | Serve the production build |

> Note: `*.spec.ts` test files are present, but no test runner is configured on this branch, so there is no `test` script yet.
