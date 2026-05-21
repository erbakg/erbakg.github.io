export type ResumeStat = {
  value: string;
  label: string;
  positive?: boolean;
};

export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  featured?: boolean;
  parallel?: boolean;
};

export type ResumeSkillCategory = {
  category: string;
  items: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  email: string;
  telegram: string;
  telegramUrl: string;
  github: string;
  githubUrl: string;
  cvPdfUrl: string;
  location: { city: string; country: string; tz: string };
  stats: ResumeStat[];
  experience: ResumeExperience[];
  skills: ResumeSkillCategory[];
};

export const resume: ResumeData = {
  name: "Erbol Mederbekov",
  title: "Frontend Engineer · React Native",
  email: "erba522442@gmail.com",
  telegram: "@erbakg",
  telegramUrl: "https://t.me/erbakg",
  github: "erbakg",
  githubUrl: "https://github.com/erbakg",
  cvPdfUrl: "/resume/Erbol_Mederbekov_CV_EN.pdf",
  location: { city: "Bishkek", country: "Kyrgyzstan", tz: "GMT+6" },
  stats: [
    { value: "−70%", label: "Load time · 6s → 1.8s", positive: true },
    { value: "−35%", label: "Bundle size · 170MB → 110MB", positive: true },
    { value: "100K+", label: "Active users · iOS + Android" },
    { value: "50+", label: "Production releases · Aug 2022 – 2026" },
  ],
  experience: [
    {
      company: "Cointelegraph",
      role: "React Native Developer · Full-time",
      period: "Aug 2022 – 2026",
      location: "Remote",
      featured: true,
      bullets: [
        "Mobile MVP for crypto-news platform, iOS + Android.",
        "Cut load time 6s → 1.8s (−70%), bundle 170 MB → 110 MB.",
        "Shipped 50+ production releases; reached 100K+ active users.",
      ],
      stack: [
        "React Native",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Apollo GraphQL",
        "Firebase",
        "Sentry",
        "Java",
        "Kotlin",
        "MVVM",
        "Android SDK",
      ],
    },
    {
      company: "Yllo",
      role: "React Native Developer · Contract",
      period: "Jun 2022 – Aug 2022",
      location: "Remote",
      bullets: ["Short-term contract; mobile feature delivery."],
      stack: ["React Native", "React", "Node.js", "JavaScript", "Android"],
    },
    {
      company: "Zoftify",
      role: "React Native Developer · Full-time",
      period: "Dec 2021 – May 2022",
      location: "Tallinn, EE",
      bullets: ["Cross-platform iOS/Android mobile product development."],
      stack: ["React Native", "Android", "JavaScript"],
    },
    {
      company: "Freelance · NDA Projects",
      role: "Frontend Engineer",
      period: "2021 – 2022",
      location: "Remote",
      parallel: true,
      bullets: [
        "ERP — DnD layouts, react-window, RHF + Zod, Uppy + S3, i18n.",
        "Customer CRM — Leaflet, Framer Motion, TanStack Router, PWA.",
        "Banking Debt CRM — MobX, custom Webpack, Nivo charts, 2GIS MapGL.",
      ],
      stack: ["React", "TypeScript", "MobX", "TanStack Router", "Webpack"],
    },
    {
      company: "Paradigma",
      role: "Front-End Developer · Full-time",
      period: "Jan 2021 – Dec 2021",
      location: "Bishkek, KG",
      bullets: ["Hybrid mobile + responsive web apps with React, Redux."],
      stack: ["React", "Redux", "Android"],
    },
    {
      company: "It-hub",
      role: "Front End Assistant · Part-time",
      period: "May 2020 – Dec 2020",
      location: "Bishkek, KG",
      bullets: [
        "First role: HTML/CSS/JS, React basics in a real codebase under senior guidance.",
      ],
      stack: ["JavaScript", "React", "HTML", "CSS"],
    },
  ],
  skills: [
    { category: "Core", items: ["React 18/19", "TypeScript", "JavaScript ES2024"] },
    { category: "UI / Styling", items: ["TailwindCSS v4", "Ant Design", "Framer Motion", "SCSS"] },
    { category: "Build", items: ["Vite", "Webpack (custom)", "Rollup"] },
    { category: "Testing", items: ["Vitest", "Jest", "Testing Library", "Storybook"] },
    { category: "State", items: ["Redux Toolkit", "MobX", "Zustand"] },
    { category: "Data", items: ["TanStack Query", "Apollo GraphQL", "Axios"] },
    { category: "Routing", items: ["React Router v6/v7", "TanStack Router"] },
    { category: "Forms", items: ["React Hook Form", "Zod"] },
    { category: "Monitoring", items: ["Sentry", "Firebase Analytics", "Firebase Performance"] },
    { category: "Tooling", items: ["Biome", "ESLint", "Prettier", "Husky", "CI/CD", "Git"] },
    { category: "Mobile", items: ["React Native", "React Navigation", "iOS", "Android"] },
    {
      category: "Android",
      items: [
        "Java",
        "Kotlin",
        "Android SDK",
        "Android Studio",
        "MVVM",
        "Android Pro Certification",
      ],
    },
  ],
};
