# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview build at http://localhost:3000
npm run lint       # ESLint
```

No test suite — verify UI changes by running `npm run dev` and checking the browser.

## Deployment

Deployed to **Netlify** (publish dir: `dist`, Node 20). SPA redirect `/* → /index.html` is handled by netlify.toml. The contact form uses Netlify Forms (`data-netlify="true"`) — no backend required.

## Tech Stack

- React 19 + React Router 7 + Vite 7
- Tailwind CSS 3 + PostCSS + Autoprefixer
- Framer Motion for page/entry animations
- Fonts: Montserrat (body, `--font-body`), Work Sans / Poppins (headings, `--font-heading`) — loaded async via Google Fonts

## Architecture

```
src/
├─ App.jsx              # Router tree; each project page has its own <Route>
├─ pages/               # Route-level views: Home, About, Contact, Pricing, ProjectDetail
│  └─ projects/         # One file per project (15 files); all use ProjectLayout
├─ components/          # Navbar, Footer, ProjectLayout, ProjectModal
├─ context/             # ThemeContext (light/dark, persisted in localStorage)
└─ data/projects.js     # Project metadata array — source of truth for the portfolio grid
public/
└─ images/              # All project images AND PDFs (referenced as /images/filename)
   PDF/                 # Resume PDF
```

`src/assets/` is for logo/branding only — do not put project media there.

## Adding a New Project

Every file in `src/pages/projects/` follows this exact structure:

```jsx
// 1. Constants at top
const title       = '...'
const role        = '...'
const year        = '...'
const description = '...'
const tools       = ['...']
const liveLink    = '...'   // empty string → button hidden
const githubLink  = ''

// 2. images array
const images = [
  { src: '/images/file.png', alt: '...', caption: '...', liveUrl?: '...' },
]

// 3. documents array (PDFs)
const documents = [
  { title: '...', src: '/images/file.pdf' },
]

// 4. Component — wrap in ProjectLayout
const MyProject = () => (
  <ProjectLayout title={title} role={role} year={year} description={description}
    tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}>
    {/* image gallery / custom sections */}
  </ProjectLayout>
)
export default MyProject
```

- Pass `liveLink={liveLink || undefined}` — empty strings must be coerced to `undefined` so the button is hidden.
- Append `#toolbar=0` to PDF `src` values to hide the browser toolbar: `` `${doc.src}#toolbar=0` ``
- After creating the file, add a `<Route>` in [App.jsx](src/App.jsx) **and** an entry in [src/data/projects.js](src/data/projects.js).

## Styling Conventions

- Use Tailwind utility classes; avoid inline styles for layout. Inline styles are acceptable for font-family overrides referencing CSS variables.
- Component classes defined in [src/index.css](src/index.css) via `@layer components`: `.heading-xl`, `.heading-lg`, `.heading-md`, `.label-text`, `.btn-primary`, `.btn-outline`, `.form-field`.
- Brand colour CSS variables (set in `:root`): `--color-surface`, `--color-ink`, `--color-muted`, `--color-soft`, `--color-card`, `--color-accent`, `--color-accent-dark`. Tailwind is configured to expose these as `bg-surface`, `text-ink`, `text-muted`, `border-soft`, etc.
- Dark mode is configured via `[data-theme="dark"]` selector (not `prefers-color-scheme`). ThemeContext toggles this attribute on `<html>`.
- Max content width is `max-w-6xl` with `px-4 sm:px-6 md:px-10` padding — use this on all full-width sections.
- The Navbar is `fixed` with height `h-[130px] sm:h-[150px]`; `main` has `pt-[130px] sm:pt-[150px]` to compensate.

## Git Workflow

- **Correct remote/branch**: `origin` → `https://github.com/Fallinqqq/my-portfolio.git`, deployed branch is **`master`**. A separate repo, `my-portfolio-development`, exists on the same GitHub account and is **not** the live one — don't push there by default.
- **Repo root = project root.** The working copy should sit directly at the repo root (`src/`, `index.html`, `package.json` at the top level) with no extra nesting folder. A prior session's GitHub Desktop setup created a duplicated `my-portfolio-development/my-portfolio-development/` nested layout that briefly caused commits to land in the wrong repo with the wrong folder structure — if you ever see doubled folder names in paths, stop and check `pwd`/`git rev-parse --show-toplevel` before committing.
- **Commit once real progress is made** — don't let a long session of edits sit uncommitted. After a meaningful chunk of changes (a feature, a set of related fixes, end of a work session), stage and commit.
- **Always remind the user before committing/pushing** rather than doing it silently — confirm scope, then commit with a clear message and push to `origin/master`.
