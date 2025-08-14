# User Directory Viewer

A small React + TypeScript app using React Router v7 and PrimeReact to browse a user directory. Includes a mock Express API and Storybook.

## Tech
- React + TypeScript + Vite
- React Router v7
- PrimeReact + PrimeFlex + PrimeIcons
- Storybook (Vite builder)
- Mock API: Express (via `tsx`)

## Getting started
1) Install dependencies
```bash
npm install
```

2) Start the mock API (Terminal A)
```bash
npm run mock:dev
```
The app expects the API on `http://localhost:4000` and calls it through Vite proxy at `/api/*`.

3) Start the frontend (Terminal B)
```bash
npm run dev
```
Open `http://localhost:5173` and go to `/users`.

## Storybook
- Dev mode
```bash
npm run storybook
```
Opens `http://localhost:6006`.

- Static build
```bash
npm run build-storybook
```
Outputs to `storybook-static/`.

## Time spent
- Initial scaffold, deps, router, PrimeReact wiring: ~45 min
- Users list/detail, API layer, loading/error states: ~60 min
- Mock Express API + Vite proxy + personas: ~35 min
- Storybook setup + `UserCard` story: ~30 min
- Styling refresh, reusable top nav, readability tweaks: ~50 min
- Cleanup and README: ~20 min

Total: ~4 hours

## Decisions & trade-offs
- Mock API over live JSONPlaceholder: Enables consistent local data while keeping the app offline-capable.
- Minimal state management: Simple `useState`/`useEffect` for clarity. Could adopt React Query for caching/retries in a larger app.
- PrimeReact DataTable: Chosen for quick, accessible table with sorting/pagination and responsive scroll. Custom column renderers used for readability.
- Storybook minimal config: Removed unused MDX/addons to avoid build issues with Vite 7; focused on an example `UserCard` story.
- Styling: Light dark-themed surface design using CSS variables for quick tuning. PrimeReact theme remains Lara Light Blue to keep component coverage; could switch to a dark theme for full parity.

## Routes
- `/` — Home
- `/users` — User list
- `/users/:id` — User detail

## Scripts
- `npm run dev` — Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview build
- `npm run storybook` — Storybook dev
- `npm run build-storybook` — Storybook static export
- `npm run mock:dev` — Start mock API (Express + tsx)
