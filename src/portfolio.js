/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Efrino Wahyu Eko Pambudi",
  title: "Efrino Wahyu Eko Pambudi",
  subTitle: emoji(
    "A Software Engineer who turns complex Excel-based industrial workflows into smart, scalable web applications. Currently building PPIC Smart Planner — a 16-step automated production planning system at PT. Mekar Armada Jaya."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/efrino",
  linkedin: "https://www.linkedin.com/in/efrinowep/",
  gmail: "efrinowep@gmail.com",
  gitlab: "https://gitlab.com/efrino",
  instagram: "https://www.instagram.com/efrinowep_",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE ENGINEER SPECIALIZING IN INDUSTRIAL DIGITALIZATION & WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build web-based systems that replace complex Excel workflows — from PPIC planning to inventory management"
    ),
    emoji(
      "⚡ Design multi-step automated pipelines with real-time progress tracking using Server-Sent Events (SSE)"
    ),
    emoji(
      "⚡ Develop CMS interfaces in Vue 3 that allow non-technical users to adjust parameters and formulas without touching code"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Vue 3",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Politeknik Negeri Semarang",
      logo: require("./assets/images/logopolines.png"),
      subHeader: "D3 Teknik Informatika — Teknik Elektro · GPA 3.95",
      duration: "September 2022 – 2025",
      desc: "Focused on software engineering, web development, and database systems.",
      descBullets: [
        "Courses: Software Engineering, Web Development, Database Systems, Operating Systems, IoT, Mobile Development, Web Security",
        "Thesis / Final Project: PPIC Smart Planner — web-based production planning digitalization system"
      ]
    },
    {
      schoolName: "SMA Negeri 1 Sragen",
      logo: require("./assets/images/logosmansa.png"),
      subHeader: "Mathematics and Science (MIPA)",
      duration: "July 2018 – May 2021",
      desc: "Leader of Web Team #9",
      descBullets: [
        "Managed official school social media accounts and maintained the school's online presence.",
        "Coordinated web team duties and upheld journalistic principles in all published content."
      ]
    }
  ]
};

// Proficiency Bars

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (Vue 3 / HTML / CSS / Flutter)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend (CI3 / PHP)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database (MySQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "PPIC / Digitalization",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "IT Programmer",
      company: "PT. Mekar Armada Jaya",
      // TODO: ganti dengan logo MAJ — simpan di src/assets/images/logomaj.png
      companylogo: require("./assets/images/logomaj.png"),
      date: "4 November 2025 – Present",
      desc: "Building PPIC Smart Planner — a web system that digitalizes production planning workflows for the Welding area.",
      descBullets: [
        "Designed and implemented a 16-step automated planning pipeline: reads 6 data sources (delivery schedule, stock, achievement history, working calendar) and outputs a complete daily production schedule per part per shift.",
        "Built real-time pipeline execution progress tracking using Server-Sent Events (EventStream) — users can monitor each of the 16 steps live as they run.",
        "Developed a CMS module in Vue 3 allowing planners to adjust planning parameters and formulas (MDFO, safety stock rules, priority weights) without any code changes.",
        "Stack: CodeIgniter 3 (CI3) · Vue 3 · MySQL 5.7 · Server-Sent Events (SSE)"
      ]
    },
    {
      role: "External Auditor",
      company: "KAP Gatot Permadi, Azwir & Abimail",
      companylogo: require("./assets/images/logogpa.png"),
      date: "24 Desember 2023 – 7 Januari 2024",
      desc: "Assisted in external audit of Kimia Farma Jawa Tengah.",
      descBullets: [
        "Drafted collaboration agreements with pharmacy staff for sample counting and inventory validation.",
        "Sampled inventory items across shelves to validate headquarters data against on-site physical data.",
        "Prepared discrepancy reports and conducted staff interviews to identify root causes of data gaps."
      ]
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle:
    "SYSTEMS I HAVE BUILT — FROM INDUSTRIAL PLANNING TO LEARNING PLATFORMS",
  projects: [
    {
      image: require("./assets/images/ppic/pipeline-source.png"),
      projectName: "PPIC Smart Planner — Welding Area",
      projectDesc:
        "Internal web system at PT. Mekar Armada Jaya that replaces Excel-based PPIC calculations. A 16-step automated pipeline reads 6 data sources (delivery schedule, stock, achievement history, working calendar) and generates a complete production schedule per part per shift. Built with CI3 + Vue 3 + MySQL 5.7 + Server-Sent Events.",
      footerLink: [
        {
          name: "Lihat Pipeline →",
          url: require("./assets/images/ppic/pipeline-steps.png")
        },
        {
          name: "Lihat Diagram Sumber →",
          url: require("./assets/images/ppic/pipeline-source.png")
        }
      ]
    },
    {
      image: require("./assets/images/edura/logo2.png"),
      projectName: "Edura — Learning Management System (Tugas Akhir)",
      projectDesc:
        "Edura is a Learning Management System (LMS) customized for my Final Project (Tugas Akhir). It adapts course structure, grading flow, and module layout to support active learning for students.",
      footerLink: [
        {
          name: "Lihat Maskot 1",
          url: require("./assets/images/edura/maskot1.png")
        },
        {
          name: "Lihat Maskot 2",
          url: require("./assets/images/edura/maskot2.png")
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Awards and recognitions I've received along the way.",
  achievementsCards: [
    {
      title: "Silver Medal — NusantaraMuda Mandalika",
      subtitle:
        "Project DIKTE: Web-based platform for social & political issue awareness. Awarded Silver Medal in the Web Development category at the NusantaraMuda Mandalika national competition.",
      image: require("./assets/images/logosilver.png"),
      imageAlt: "Silver Medal NusantaraMuda Mandalika",
      footerLink: [
        {
          name: "Sertifikat",
          url: "https://drive.google.com/file/d/1Mxe-TdhFu5caIq1Kq-CAS4xAfYCJRo4R/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Writing about software engineering, digitalization, and PPIC systems.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "Sharing knowledge about web development and industrial digitalization."
  ),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations about tech and engineering.",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resume: ["/resume.pdf"],
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind — a smart planner, a web app, or a digitalization tool? My inbox is open.",
  number: "+62-85184084989",
  email_address: "efrinowep@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "efrinowep_",
  display: false
};

const isHireable = true;

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
