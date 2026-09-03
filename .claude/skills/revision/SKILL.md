---
name: revision
description: Verify the portfolio site actually works before calling a task done — installs deps if missing, lints, builds, runs it locally, and visually checks key pages. Use after making changes, before committing/pushing, or whenever asked to "do a revision pass," "review the work," or "make sure everything works."
---

# Revision pass

This project has no test suite (see CLAUDE.md). "It compiles" is not enough —
this skill is the substitute for tests: catch broken builds, broken routes,
and visually broken pages before calling work done.

Run every step below. Don't skip steps just because the last change "seems small."

## 1. Working tree sanity

- `git status` — note any uncommitted changes; don't silently discard anything.
- If `node_modules/` is missing or `npm run dev` fails with "command not found"
  style errors for `vite`/etc., run `npm install` first. On Windows, if `npm`/`node`
  aren't on PATH in the current shell, they're typically at
  `C:\Program Files\nodejs\` — prepend that to `$env:PATH` rather than giving up.

## 2. Static checks

```bash
npm run lint
npm run build
```

Both must succeed with no errors. A failed build is a hard blocker — fix it
before doing anything else. Lint warnings are worth a glance but not
automatically blocking; use judgment.

## 3. Run it locally

```bash
npm run dev
```

Start this in the background (it's long-running) and open
`http://localhost:5173` in a browser. Don't ask the user to verify a change
you haven't loaded yourself, if you're able to view a browser/screenshot it.

## 4. Visual / functional spot check

At minimum, check:

- The route(s) you actually touched.
- Home page (`/`) — this is what most visitors land on.
- Any project page linked from `src/data/projects.js` if project data or
  `ProjectLayout` changed.
- Light **and** dark mode (toggle via ThemeContext) if you touched styling —
  dark mode uses `[data-theme="dark"]`, not `prefers-color-scheme`, so it's
  easy to miss regressions there.
- Browser console for errors (missing images, broken imports, React warnings).
- Nav / footer links still resolve — these are shared across every page.

## 5. Report honestly

State plainly what you verified and what you didn't (e.g. "checked in
Chrome at desktop width, didn't check mobile breakpoints"). Don't claim a
feature "works" from a passing build alone if you haven't actually loaded it.
