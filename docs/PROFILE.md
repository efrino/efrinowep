# Profile Data — Efrino Wahyu Eko Pambudi
> Raw profile content for filling `src/portfolio.js`.
> Update this file first, then sync to portfolio.js.

---

## Personal Info
```
Name:      Efrino Wahyu Eko Pambudi
Email:     efrinowep@gmail.com
Phone:     +62-85184084989
GitHub:    https://github.com/efrino
LinkedIn:  https://www.linkedin.com/in/efrinowep/
Instagram: https://www.instagram.com/efrinowep_
Resume:    /resume.pdf  ← file harus ada di public/resume.pdf
```

---

## Resume
File PDF → simpan di `public/resume.pdf`
Referensi di portfolio.js: `resumeLink: "/resume.pdf"`

---

## Identity / Tagline
**Primary:** Software Engineer / IT Programmer
**Current Domain:** PPIC (Production Planning & Inventory Control) digitalization

**subTitle (greeting section):**
```
A passionate Software Engineer focused on digitalizing industrial workflows —
turning complex Excel-based calculations into intuitive web applications.
Currently building PPIC Smart Planner tools that make production planning
fast, accurate, and accessible.
```

---

## Education
```
1. Politeknik Negeri Semarang
   Fakultas:  Teknik Elektro
   Prodi:     Teknik Informatika (D3)
   Duration:  September 2022 – 2025
   GPA:       3.95
   Logo:      simpan di src/assets/images/polines.png

2. SMA Negeri 1 Sragen
   Major:    MIPA / IPA
   Duration: July 2018 – May 2021
```

---

## Work Experience
```
1. IT Programmer
   Company:  PT. Mekar Armada Jaya
   Duration: 4 November 2025 – Present
   Description:
   - Developing PPIC Smart Planner: web-based digitalization of Excel-based
     production planning workflows using CI3, Vue 3, MySQL 5.7
   - Designed and implemented 16-step automated planning pipeline with real-time
     progress tracking via Server-Sent Events (EventStream)
   - Built CMS module in Vue 3 for adjusting planning parameters and formulas
     without code changes
   - Pipeline processes 6 data sources → 1 unified planning output (mutasi_weld)
     covering part scheduling, stock rolling, achievement analysis, and alert generation

2. External Auditor
   Company:  KAP Gatot Permadi, Azwir & Abimail
   Duration: 24 December 2023 – 7 January 2024
   Description:
   - Assisted audit team in financial statement verification
   - Performed document tracing and data reconciliation
   - Supported compliance review processes
```

---

## Projects

### PPIC Smart Planner — Welding Area (FLAGSHIP)
```
Type:     Big Project (internal — PT. Mekar Armada Jaya)
Status:   Active / In Development

TECH STACK:
  Backend:   CodeIgniter 3 (CI3)
  Frontend:  Vue 3 (CMS & parameter management)
  Database:  MySQL 5.7
  Realtime:  Server-Sent Events (EventStream) for pipeline progress

DESCRIPTION:
  Web application that replaces manual Excel-based PPIC calculations for the
  Welding production area. Automates production planning through a 16-step
  pipeline that reads 6 input sources and produces a complete daily
  production schedule per part per shift.

INPUT TABLES (6 sources):
  ms_welding        — Master part list + production line data
  mdfo              — Minimum Days For Order (lead time planning)
  mieruka_delivery  — Confirmed delivery schedule (fixed priority)
  ifpd_stock        — Current IFPD (Inventory Finished Parts Delivery) stock
  workdays_group    — Working calendar (non-holiday days only)
  welding_achievement — Historical production per shift (pcs/day, patterns, miss deteksi)

OUTPUT TABLE:
  mutasi_weld — Daily production schedule per part per shift
  Fields: tanggal, part_number, line, shift, qty_plan,
          stock_status, priority_rank, source_type

16-STEP PIPELINE:
  1.  Send Data Part             — load & validate part list
  2.  Tangkap Forecast MDFO      — capture MDFO forecast per part
  3.  Tangkap Jadwal DN          — capture confirmed delivery orders (Order Fix)
  4.  Deteksi Arrival DN         — detect incoming delivery schedule
  5.  Buat Jadwal DM             — generate DM (delivery map) schedule
  6.  Ambil Data Aktual          — fetch actual production data
  7.  Hitung Req/Hari            — calculate daily production requirement
  8.  Slotting Prioritas Part    — slot parts by priority
  9.  Proyeksi Kebutuhan Jangka Panjang — long-range demand projection
  10. Hitung Rolling Stok (Pertama)    — first-pass rolling stock calculation
  11. Smart Planning (COMP) v2         — smart planning algorithm
  12. Analisa Pola Achievement         — achievement pattern analysis
  13. Safety Net & Koreksi Akhir       — safety net + final correction
  14. Hitung Rolling Stok (Final)      — final rolling stock
  15. Deteksi Polo Miss Kirim          — detect chronic delivery miss patterns
  16. Generate Alert & Notifikasi      — generate alerts & notifications

IMAGES (simpan di src/assets/images/ppic/):
  pipeline-source.png   — diagram 6 input → pipeline → output (screenshot 1)
  pipeline-steps.png    — 16-step execution view with live counters (screenshot 2)

NOTE: No public GitHub repo (internal system). Showcase via:
      - Pipeline architecture diagram
      - Screenshot of running pipeline with real data
```

### Learning Management System
```
Type:    Project
Desc:    Moodle-based LMS customized for Problem-Based Learning (PBL)
         at Politeknik Negeri Semarang.
Stack:   Moodle, PHP, MySQL
GitHub:  [fill in if available]
```

---

## Skills

### Languages
JavaScript, PHP, SQL, HTML5, CSS3

### Frameworks & Libraries
Vue 3, CodeIgniter 3 (CI3), SCSS, Tailwind CSS

### Databases
MySQL 5.7, SQLite

### Tools & DevOps
Git, GitHub, VS Code, Postman, Figma

### Realtime / Protocol
Server-Sent Events (EventStream / SSE)

### Domain Knowledge
PPIC, MRP (Material Requirements Planning), BOM (Bill of Materials),
Production Scheduling, Stock Rolling, Excel (Advanced), Industrial Digitalization

---

## Proficiency Bars (0–100)
```
Frontend (Vue / HTML / CSS):    80
Backend (CI3 / PHP):            80
Database (MySQL):               75
PPIC / Digitalization:          85
Tools / DevOps:                 60
```

---

## Contact CTA
```
title:    "Contact Me"
subtitle: "Let's build something together — whether it's a smart planner,
           a web app, or a digitalization project. My inbox is always open."
```

---

## Sections Status
> Checklist untuk sync ke portfolio.js

- [ ] greeting — update subTitle, resumeLink → "/resume.pdf"
- [ ] socialMediaLinks — verify all URLs
- [ ] skillsSection — update skill list + icons (Vue, CI3, PHP focus)
- [ ] techStack — update proficiency bars
- [ ] educationInfo — Polines: Teknik Informatika D3, GPA 3.95
- [ ] workExperiences — PT. Mekar Armada Jaya (Nov 2025–now) + KAP
- [ ] bigProjects — PPIC Smart Planner (internal) + LMS
- [ ] achievementSection — kosongkan atau tambah sertifikasi kalau ada
- [ ] contactInfo — phone +62-85184084989, email efrinowep@gmail.com
- [ ] isHireable — decide: true or false?
- [ ] resume file → copy PDF ke public/resume.pdf
- [ ] images → copy 2 screenshot PPIC ke src/assets/images/ppic/
