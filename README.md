# Paul Imaz Nin | Freelance Motorsport Presentation

This repository contains a static frontend app built to present Paul Imaz Nin as a freelance motorsport engineer with a strong mix of software, vehicle dynamics, simulation and race-support experience.

The goal is not to behave like a normal CV site. It is meant to feel closer to a technical presentation for race teams that may want flexible engineering support.

## What is in the project

- `index.html`
  Main application shell.
- `styles.css`
  Visual system, layout, responsive behaviour and interaction styling.
- `src/main.js`
  App bootstrap.
- `src/core`
  Shared app primitives such as state and DOM access.
- `src/components`
  Small rendering helpers.
- `src/features`
  Feature-level UI logic such as language switching, mode switching, animations and case filters.
- `src/data`
  Bilingual content and structured mode data.
- `references`
  Source CVs in English and Spanish.

## Run locally

Open a terminal in `C:\Users\Master2025\Desktop\CV` and run:

```powershell
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

If `python` is not available on your PATH, use:

```powershell
& 'C:\Users\Master2025\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4173
```

Stop the local server with `Ctrl + C`.

## Publish to GitHub Pages

This project is a plain static site, so the simplest and most reliable option is to publish it directly from the repository branch instead of using GitHub Actions.

### Recommended GitHub setup

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. Open the repository on GitHub.
4. Go to `Settings > Pages`.
5. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
6. Select branch `main`.
7. Select folder `/(root)`.
8. Click `Save`.

GitHub will then publish the site directly from the repository contents.

### Expected public URL

Your site will normally be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

### Important note

If the repository is private, GitHub Pages availability depends on your GitHub plan. GitHub documents that public repositories work on GitHub Free, while private repository Pages needs eligible paid plans.

## Suggested Git commands

If the repo is not created yet:

```powershell
git init
git add .
git commit -m "Initial freelance motorsport presentation app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

If the repo already exists and only needs an update:

```powershell
git add .
git commit -m "Simplify GitHub Pages setup"
git push
```

## If GitHub Pages fails again

Check these points first:

1. The default branch is `main`.
2. In `Settings > Pages`, the source is `Deploy from a branch`.
3. The selected branch is `main`.
4. The selected folder is `/(root)`.
5. The repository contains `index.html` in the root.
6. The repository visibility and your GitHub plan allow Pages for that repo.

If it still fails after that, the problem is no longer the workflow, because there will be no workflow involved. In that case the next place to inspect is the repository Pages settings and any build error GitHub shows there.

## Why the app is structured this way

The current site is intentionally simple in runtime, but the codebase is organized like a small scalable frontend application:

- feature-based UI logic
- separated content data
- small shared core utilities
- room for more sections, case studies and interactive demos

That makes it more useful as a portfolio piece, because it demonstrates not only visual taste but also frontend architecture and maintainability.
