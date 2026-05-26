# CLAUDE.md — Portfolio Efrino Wahyu Eko Pambudi

## Project Context

Personal portfolio website. React 16 + SCSS + Create React App.
Deployed at: https://efrino.netlify.app
Repo: https://github.com/efrino/efrinowep

## Owner

- **Name:** Efrino Wahyu Eko Pambudi
- **Email:** efrinowep@gmail.com
- **Phone:** +62-85184084989
- **Identity:** Software Engineer / Programmer — currently working on PPIC (Production Planning & Inventory Control) digitalization projects

## Architecture in One Paragraph

All visible content is defined in **`src/portfolio.js`** — this is the single source of truth. React components in `src/containers/` render each page section; `src/components/` holds reusable UI parts. `fetch.js` runs before build/dev to pull GitHub pinned repos and Medium posts into `public/profile.json` and `public/blogs.json`. Theme (dark/light) is stored in localStorage via `src/hooks/useLocalStorage/`.

## Critical Files

| File                     | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `src/portfolio.js`       | ALL content — edit this to update portfolio |
| `src/_globalColor.scss`  | Color theme variables                       |
| `src/containers/Main.js` | Section visibility & order                  |
| `fetch.js`               | GitHub/Medium data fetcher (runs pre-build) |
| `env.example`            | Required env vars                           |
| `docs/SRS.md`            | Full requirements specification             |
| `docs/PROFILE.md`        | Raw profile data & content decisions        |

## Section Toggle Map (in portfolio.js)

Each section has a `display: true/false` flag:

- `greeting` — hero/splash
- `skillsSection` — tech skills
- `skillProgress` (techStack) — proficiency bars
- `educationInfo`
- `workExperiences`
- `bigProjects` — project showcases
- `achievementSection`
- `blogSection`
- `talkSection`
- `twitterDetails`
- `isHireable` — "Available for hire" badge

## PPIC Projects (Main Work)

User's primary current work: **PPIC Smart Planner** at PT. Mekar Armada Jaya.

- **Stack:** CodeIgniter 3 (CI3) + Vue 3 (CMS) + MySQL 5.7 + Server-Sent Events
- **Architecture:** 16-step automated pipeline, 6 input tables → 1 output (`mutasi_weld`)
- **Internal system** — no public GitHub repo. Showcased via pipeline diagram screenshots
- Screenshots at: `src/assets/images/ppic/pipeline-source.png` & `pipeline-steps.png`
- Full pipeline breakdown in `docs/PROFILE.md`

## Design Decisions (already confirmed)

- Dark mode enabled by default
- Lottie animations on splash + greeting sections
- GitHub pinned repos shown in profile section
- Medium blog feed optional (configure via env)

## Workflow

```bash
npm start    # fetches GitHub data, then starts dev server
npm run build && npm run deploy  # build + deploy to gh-pages
```

Env: copy `env.example` → `.env`, add `REACT_APP_GITHUB_TOKEN`

## What NOT to Touch Without User Confirmation

- `src/assets/lottie/` — large JSON animation files
- `package.json` dependencies — old React 16, avoid upgrades unless asked
- `fetch.js` — GitHub API logic
- Deployment config (`homepage` in package.json, Netlify settings)

## Task Shortcuts

- **Update personal info** → edit `src/portfolio.js` top section
- **Add a project** → add to `bigProjects.projects[]` in portfolio.js
- **Add a skill** → add to `skillsSection.softwareSkills[]`
- **Change colors** → edit `src/_globalColor.scss`
- **Toggle a section** → set `display: true/false` in portfolio.js
- **Add achievement** → add to `achievementSection.achievementsCards[]`
