// Single source of truth for everything on the site that isn't a project README.
// Project pages themselves are rendered from each repository's README at build time
// (see src/lib/readme.ts), so update the README in that repo to change a case study.

export const profile = {
  name: "Efrino Wahyu Eko Pambudi",
  shortName: "Efrino",
  role: "Software Engineer",
  headline: "Full-Stack · Mobile · Industrial Digitalization",
  location: "Bekasi, Indonesia",
  email: "efrinowep@gmail.com",
  github: "https://github.com/efrino",
  linkedin: "https://www.linkedin.com/in/efrinowep/",
  resume: "/resume.pdf",
  intro:
    "I build software that runs inside real operations: production planning, warehouses, shop-floor handhelds and online stores. I turn complex, Excel-driven processes into reliable backends, clean dashboards and mobile apps that people use every day.",
  highlights: [
    { value: "3.95", label: "GPA, D3 Informatics Engineering" },
    { value: "6", label: "Apps built for real operations" },
    { value: "250", label: "Automated tests in STO Prep" },
    { value: "16-step", label: "Planning pipeline with live SSE" }
  ],
  strengths: [
    {
      title: "Industry-grade delivery",
      text: "PPIC planning, stock-taking, inventory and Andon systems used daily by plant teams."
    },
    {
      title: "Real-time systems",
      text: "A 16-step planning pipeline with live progress streamed over Server-Sent Events."
    },
    {
      title: "End-to-end ownership",
      text: "From database schema and REST API to Flutter apps on Android handhelds and iOS."
    },
    {
      title: "Integration mindset",
      text: "SAP endpoints, thermal printers, barcode/QR scanners, Google Drive and Supabase."
    }
  ]
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "PT Mekar Armada Jaya",
    role: "Program Specialist",
    period: "Nov 2025 – Present",
    location: "Tambun, Bekasi",
    points: [
      "Building PPIC Smart Planner, which moves Excel-based production planning for the Welding area onto the web (CodeIgniter 3, Vue 3, MySQL 5.7).",
      "Designed a 16-step automated planning pipeline that merges 6 data sources into one daily plan per part per shift, with live progress over Server-Sent Events.",
      "Added a Vue 3 CMS so planners can tune parameters and formulas without code changes.",
      "Shipped shop-floor apps for stock-taking, goods receiving and warehouse scanning on Android handhelds with built-in thermal printers."
    ]
  },
  {
    company: "Magang Jogja",
    role: "Programmer (Internship)",
    period: "Sep 2024 – Jan 2025",
    location: "Yogyakarta",
    points: [
      "Worked on a real logistics (expedition) project with multiple roles and features using Laravel 10, Tailwind CSS, Vite, Flowbite and Alpine.js."
    ]
  },
  {
    company: "KAP Gatot Permadi, Azwir & Abimail",
    role: "External Auditor (Internship)",
    period: "Dec 2023 – Jan 2024",
    location: "Indonesia",
    points: [
      "Financial statement verification, document tracing and data reconciliation."
    ]
  }
];

export const education = [
  {
    school: "Politeknik Negeri Semarang",
    degree: "D3 Informatics Engineering",
    period: "2022 – 2025",
    detail: "GPA 3.95 / 4.00"
  },
  {
    school: "SMA Negeri 1 Sragen",
    degree: "Science (MIPA)",
    period: "2018 – 2021",
    detail: ""
  }
];

export const awards = [
  "Silver Medal, Mandalika Essay Competition 2024 (Political category)"
];

// Order here is the order on the home page. `repo` must match the GitHub repo name;
// its README becomes the case-study page at /projects/<slug>.
export type Project = {
  slug: string;
  repo: string;
  title: string;
  emoji: string;
  summary: string;
  stack: string[];
  category: "Mobile" | "Web" | "Backend";
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "sto-prep",
    repo: "sto",
    title: "STO Prep",
    emoji: "🏷️",
    summary:
      "Stock-taking tag system for a manufacturing plant: QR tags printed on handheld thermal printers, double counting by team, audited cancellations and offline-first sync. 250 tests.",
    stack: ["Flutter", "SQLite", "Kotlin channel", "ESC/POS"],
    category: "Mobile"
  },
  {
    slug: "nayea",
    repo: "nayea",
    title: "Nayea",
    emoji: "🛍️",
    summary:
      "Modest-fashion e-commerce with a full admin dashboard: checkout with live shipping costs, payment verification, vouchers, realtime chat and transactional email.",
    stack: ["React", "Tailwind v4", "Supabase", "Vercel"],
    category: "Web",
    live: "https://nayea.id"
  },
  {
    slug: "meca-learning",
    repo: "meca_learning_app",
    title: "Meca Learning",
    emoji: "📱",
    summary:
      "Training app for mechanics: modules, quizzes, error codes and animations served from Google Drive, cached for offline use, with activity tracking and push notifications.",
    stack: ["Flutter", "Riverpod", "Supabase", "Firebase"],
    category: "Mobile"
  },
  {
    slug: "meca-admin",
    repo: "admin-asto",
    title: "Meca Admin Console",
    emoji: "🧑‍💼",
    summary:
      "Web console for the Meca Learning content team: users, modules, quizzes and error codes, with Excel bulk import and a Supabase Edge Function proxy to Google Drive.",
    stack: ["React", "Supabase", "Edge Functions", "SheetJS"],
    category: "Web"
  },
  {
    slug: "my-armada",
    repo: "my_armada",
    title: "My Armada",
    emoji: "🚚",
    summary:
      "Warehouse operations app: barcode scan-in and scan-out per area, stock-taking, history and a permission-driven UI managed by admins.",
    stack: ["Flutter", "mobile_scanner", "REST API"],
    category: "Mobile"
  },
  {
    slug: "gr-scanner",
    repo: "scan_gr",
    title: "GR Scanner",
    emoji: "📥",
    summary:
      "Goods-receipt scanner built so no scan is ever lost: an offline pending queue with partial and full offline modes, deduplication and one-tap sync.",
    stack: ["Flutter", "Offline queue", "REST API"],
    category: "Mobile"
  }
];

export const privateWork = [
  {
    title: "AI WhatsApp Commerce Bot",
    text: "Customer-service and ordering bot with fuzzy product matching, Midtrans payments and a multi-provider AI fallback (Groq → Gemini → OpenRouter).",
    stack: ["Node.js", "Baileys", "Supabase", "Midtrans"]
  },
  {
    title: "YouTube Shorts Automation",
    text: "AI script → TTS voice-over → FFmpeg video assembly → automatic YouTube upload, with Telegram notifications at every stage.",
    stack: ["Python", "FFmpeg", "Groq", "YouTube API"]
  }
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Vue 3", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: ["PHP", "CodeIgniter", "Laravel", "Node.js", "Express", "Python", "FastAPI", "Flask"] },
  { group: "Mobile", items: ["Flutter", "Dart", "Riverpod", "BLoC", "Kotlin platform channels"] },
  { group: "Data & Cloud", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "Firebase", "Vercel", "Docker"] },
  { group: "Domain", items: ["PPIC", "MRP", "BOM", "Production scheduling", "Inventory & stock-taking", "SAP integration"] }
];
