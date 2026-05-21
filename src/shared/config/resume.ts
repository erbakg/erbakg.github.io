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
      company: "Freelance · NDA Projects",
      role: "Frontend / React Native Engineer",
      period: "2019 – 2022",
      location: "Remote",
      bullets: [
        "B2B ERP — virtualized tables for 10K+ rows (react-window), multi-step forms with strict Zod validation (90+ fields), S3 direct-upload pipeline via Uppy for multi-GB files, 4-language i18n.",
        "Customer CRM — interactive Leaflet maps with 500+ clustered markers, type-safe routing (TanStack Router), installable PWA with offline cache, Framer Motion micro-interactions at 60fps.",
        "Banking debt-collection CRM — MobX store across 50+ entities, custom Webpack config cut bundle by 40%, real-time Nivo dashboards, 2GIS MapGL for KZ/RU geo coverage.",
        "Cross-platform mobile work — React Native screens shared between iOS and Android for selected client projects.",
      ],
      stack: [
        "React",
        "React Native",
        "TypeScript",
        "MobX",
        "TanStack Router",
        "Webpack",
        "react-window",
        "Framer Motion",
        "Leaflet",
        "Nivo",
        "Uppy",
        "Zod",
        "PWA",
      ],
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
