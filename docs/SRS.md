# Software Requirements Specification
## Portfolio Website — Efrino Wahyu Eko Pambudi
**Version:** 1.0 | **Date:** 2026-05-16 | **Status:** Active

---

## 1. Overview

### 1.1 Purpose
Personal portfolio website to showcase professional identity, technical skills, and projects — particularly PPIC digitalization/smart planner work — to potential employers, clients, and collaborators.

### 1.2 Target Audience
- Recruiters & hiring managers (software engineer roles)
- Industry contacts (manufacturing/PPIC/ERP domain)
- Collaborators & freelance clients

### 1.3 Scope
Single-page React app deployed on Netlify. Content managed via `src/portfolio.js`. No backend; GitHub API & Medium RSS used for dynamic data.

---

## 2. Owner Profile

| Field | Value |
|-------|-------|
| Name | Efrino Wahyu Eko Pambudi |
| Role Identity | Software Engineer / Programmer |
| Current Domain | PPIC (Production Planning & Inventory Control) |
| Education | Politeknik Negeri Semarang — Teknik Informatika D3, GPA 3.95 (2022–2025) |
| Location | Indonesia |
| Email | efrinowep@gmail.com |
| GitHub | github.com/efrino |
| LinkedIn | linkedin.com/in/efrinowep |

---

## 3. Functional Requirements

### FR-01: Hero Section (Greeting)
- **Must** display full name, tagline, and 1–2 sentence professional summary
- **Must** highlight dual identity: Software Engineer + PPIC/Smart Planner specialist
- **Must** include Resume download link (static file at `public/resume.pdf`, served as `/resume.pdf`)
- **Must** show social media links: GitHub, LinkedIn, Gmail, Instagram
- **Should** use Lottie coding animation
- Tagline example: *"A Software Engineer who turns Excel workflows into smart web applications"*

### FR-02: Skills Section
- **Must** list primary languages: JavaScript, PHP, SQL, HTML5, CSS3
- **Must** list frontend skills: Vue 3, HTML5, CSS3/SCSS, Tailwind
- **Must** list backend skills: CodeIgniter 3 (CI3), PHP
- **Must** list database skills: MySQL 5.7
- **Must** list realtime: Server-Sent Events (EventStream / SSE)
- **Must** list tools: Git, GitHub, VS Code, Postman, Figma
- **Should** include domain: PPIC, MRP, BOM, Industrial Digitalization
- Skill icons via Font Awesome + devicons classnames

### FR-03: Proficiency Bars (StackProgress)
- **Must** show proficiency levels (percentage) for key stacks
- Suggested categories: Frontend, Backend, Database, DevOps/Tools
- Keep to 4–6 items max for readability

### FR-04: Education Section
- **Must** show: Politeknik Negeri Semarang (current, 2022–present)
- **Should** show: SMA N 1 SRAGEN (2018–2021)
- Include major/program name and GPA if notable

### FR-05: Work Experience Section
- **Must** include IT Programmer at PT. Mekar Armada Jaya (4 Nov 2025–present, PPIC Smart Planner)
- **Must** include External Auditor at KAP Gatot Permadi (Dec 2023–Jan 2024)
- For each role: company, role title, duration, 2–3 bullet point responsibilities
- Highlight any PPIC-related internship or freelance work

### FR-06: Projects Section (Big Projects / Open Source)
- **Must** feature PPIC Smart Planner as flagship project (internal company project — showcase via system design/pipeline diagram, not GitHub link)
- **Must** feature DIKTE (Silver Award NusantaraMuda Mandalika)
- **Should** feature Learning Management System (Moodle-based PBL)
- **Should** feature any other notable web/app projects
- Each project card: name, description, tech stack tags, links (GitHub/live)

### FR-07: Achievements Section
- **Must** show: Silver Medal NusantaraMuda Mandalika (DIKTE project)
- **Should** include academic achievements, certifications (web dev, etc.)
- Each card: title, subtitle, description, image, link

### FR-08: GitHub Profile Section
- **Must** display GitHub stats via GitHub API (pinned repos, stars, forks)
- Requires `REACT_APP_GITHUB_TOKEN` env var
- Controlled by `USE_GITHUB_DATA=true` in env

### FR-09: Contact Section
- **Must** display email and phone
- **Should** include a call-to-action ("Let's build something together")

### FR-10: Blog Section (Optional)
- **Can** connect to Medium via RSS if user publishes there
- Currently set to hardcoded or disabled — OK to leave disabled

---

## 4. Non-Functional Requirements

### NFR-01: Performance
- Lighthouse score ≥ 85 (performance)
- Lottie animations lazy-loaded
- Images optimized (WebP preferred for logos)

### NFR-02: Responsiveness
- Mobile-first; breakpoints at 480px, 768px, 1024px
- Header collapses to hamburger menu on mobile

### NFR-03: Accessibility
- Alt text on all images
- Color contrast ≥ WCAG AA
- Keyboard navigable

### NFR-04: SEO
- `<title>` and `<meta description>` updated with real name
- Open Graph tags in `public/index.html`

### NFR-05: Branding
- Consistent color scheme (edit `src/_globalColor.scss`)
- Professional but personal — not generic template feel
- Dark mode default; light mode toggle available

---

## 5. Content Plan

### 5.1 Sections to ENABLE
- [x] greeting
- [x] skillsSection
- [x] skillProgress (techStack)
- [x] educationInfo
- [x] workExperiences
- [x] bigProjects
- [x] achievementSection
- [x] profile (GitHub)
- [x] contactInfo
- [ ] blogSection — enable when Medium is active
- [ ] talkSection — enable when speaking engagements exist
- [ ] twitterDetails — disable (not primary channel)

### 5.2 PPIC Smart Planner — Project Card Template
```
projectName: "PPIC Smart Planner — Welding Area"
projectDesc: "Internal web system at PT. Mekar Armada Jaya that digitalizes
              Excel-based production planning into an automated 16-step pipeline.
              Reads 6 data sources (delivery schedules, stock, achievement history,
              working calendar) and generates a complete daily production schedule
              per part per shift. Built with CI3 + Vue 3 + MySQL 5.7 + SSE."
image:       src/assets/images/ppic/pipeline-source.png
footerLink:  [{ name: "Lihat Pipeline", url: "#" }]  ← no public repo, internal
```

### 5.3 Asset Files to Add Manually
```
public/resume.pdf                         ← CV/resume PDF
src/assets/images/ppic/pipeline-source.png  ← screenshot 1 (data source diagram)
src/assets/images/ppic/pipeline-steps.png   ← screenshot 2 (16-step execution)
src/assets/images/polines.png               ← Politeknik Negeri Semarang logo
```

---

## 6. Change Log

| Date | Version | Change |
|------|---------|--------|
| 2026-05-16 | 1.0 | Initial SRS created |

---

## 7. Out of Scope
- Backend API development for the portfolio site itself
- User authentication / admin panel
- CMS integration
- Multi-language (i18n) support
