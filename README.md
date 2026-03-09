# my-portfolio

A minimal, fast personal portfolio, my own space on the web to showcase what I've built.

---

## What is this?

This is my personal portfolio site: It's a minimal, fast space inspired by notion UI to showcase my projects without the overhead of a backend or CMS. It's a work in progress, with the longer-term goal of making it fully configurable from a single file without touching any component logic. Developed and designed by myself.

---

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS + shadcn-inspired components
- **Routing**: `react-router`

---

## Architecture

### Frontend-only, on purpose

This is a fully static React app. All project data lives on the client with no backend, no CMS and no database. Deployment is straightforward on any static host (Vercel, Netlify, GitHub Pages, etc.).

I evaluated the alternatives:

- **Custom backend/API**: adds authentication, hosting, and infrastructure overhead for something that barely changes.
- **Headless CMS**: it was the same story with more config, more moving parts, more things that can break.

Neither made sense for a personal portfolio. Keeping it static means less to maintain and faster to iterate on.

### Single source of truth

All project data lives in one file: `src/data/projects.js`. Adding or updating a project is as simple as editing that file and redeploying. Components like `ProjectCard`, `ProjectTags`, and `ProjectsCarousel` all read from it.

Aside from project data, some user data comes from different places. The plan is to improve this over time, see below for more information on this.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
---

## Roadmap

Things I'm planning to work on:

- **JSON-based project config**: move project data into `projects.json` to decouple it from the React code and make it easier to manage.

- **Light theme + theme switcher**:  add a light mode alongside the existing dark look, with a toggle that remembers your preference via `localStorage`.

- **Expanded customization**: centralize config options for colors, typography, layout density, and visible sections so nothing requires touching component logic.

- **Modular section system**: make it easier to add, remove, or reorder sections (blog, work experience, etc.) as the portfolio grows.

---

## Status

- **Live**: Frontend-only React/Vite app, projects configured in `src/data/projects.js`
- **Short-term**: JSON config support + light theme
- **Longer-term**: Full configurability from a single file, modular sections
