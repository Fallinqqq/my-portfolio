# Portfolio — Project Guidelines

## Build & Dev

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview build at http://localhost:3000
npm run lint       # ESLint
```

Deployed to **Netlify** via `netlify.toml` (publish dir: `dist`, Node 20, SPA redirect `/* → /index.html`).

## Tech Stack

- React 19 + React Router 7 + Vite 7
- Tailwind CSS 3 (dark-mode via `data-theme` selector) + PostCSS + Autoprefixer
- Framer Motion for page transitions
- EmailJS for contact form
- Fonts: Montserrat (body), Playfair Display (serif) — loaded async via Google Fonts + Adobe Typekit

## Architecture

```
src/
├─ pages/           # Route-level views (Home, About, Portfolio, Contact, Pricing, ProjectDetail)
│  └─ projects/     # One file per project page (15 files)
├─ components/      # Navbar, Footer, ProjectLayout, ProjectModal
├─ context/         # ThemeContext (light/dark, persisted in localStorage)
├─ data/projects.js # Project metadata array — source of truth for Portfolio grid
└─ App.jsx          # Router tree; each project page has its own <Route>
public/images/      # All project images AND PDFs (served at /images/…)
```

## Project Page Convention

Every file in `src/pages/projects/` follows this exact structure:

```jsx
// 1. Constants block at the top
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
  { title: '...', src: '/images/file.pdf', liveUrl?: '...' },
]

// 4. Component — wrap everything in <ProjectLayout>
const MyProject = () => (
  <ProjectLayout title={title} role={role} year={year} description={description}
    tools={tools} liveLink={liveLink || undefined} githubLink={githubLink || undefined}>
    {/* custom JSX children */}
  </ProjectLayout>
)
export default MyProject
```

- Pass `liveLink={liveLink || undefined}` so empty strings hide the button.
- PDF `src` values use `#toolbar=0` suffix to hide the browser PDF toolbar: `` `${doc.src}#toolbar=0` ``
- Add each new project as a `<Route>` in `App.jsx` **and** an entry in `src/data/projects.js`.

## Styling Conventions

- Use Tailwind utility classes; avoid inline styles.
- Custom component classes defined in `src/index.css` via `@layer components`: `.heading-xl`, `.heading-lg`, `.heading-md`, `.label-text`, `.btn-primary`, `.btn-outline`.
- CSS variables (defined in `:root` / `[data-theme="dark"]`): `--color-surface`, `--color-ink`, `--color-muted`, `--color-soft` — use these for brand colours instead of hardcoded hex.
- Dark mode: apply `dark:` variants or target `[data-theme="dark"]` in CSS.

## Assets

- All project images and PDFs → `public/images/` → referenced as `/images/filename.ext`
- Do **not** import project media into `src/assets/`; that folder is for logo/branding SVGs only.
