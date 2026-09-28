# CLAUDE.md: Portfolio (efrinowep)

Personal portfolio of Efrino Wahyu Eko Pambudi. Astro static site, deployed on Vercel.

## Key facts
- **Content lives in `src/data/profile.ts`.** Edit that for intro, experience, education, skills, awards and the project list.
- **Case studies are the project READMEs.** `src/pages/projects/[slug].astro` fetches `README.md` from `github.com/efrino/<repo>` at build time via `src/lib/readme.ts`, with `content/readmes/<repo>.md` as the fallback. Improve a case study by editing the README in that repo, not here.
- Mermaid diagrams are bundled (`mermaid` npm package, dynamic import) and redraw on theme change. Don't load third-party CDNs; the site should have no runtime dependency on external services except Google Fonts.
- Theme tokens are CSS variables in `src/styles/global.css` (light default, dark via `prefers-color-scheme` or `data-theme`).
- `docs/PROFILE.md` is the raw profile source material.

## Commands
- `npm run dev`, `npm run build`, `npm run preview`
- `npm run snapshot`: refresh README fallbacks

## Conventions
- Keep the site static (no server runtime) and mobile-first; check pages at 390px for horizontal scroll.
- Don't publish the phone number on the site.
