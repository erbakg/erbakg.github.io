export type ResumeStat = {
  value: string;
  label: string;
  labelRu?: string;
  positive?: boolean;
};

export type ResumeExperience = {
  company: string;
  role: string;
  roleRu?: string;
  period: string;
  location: string;
  locationRu?: string;
  bullets: string[];
  bulletsRu?: string[];
  stack: string[];
  featured?: boolean;
  parallel?: boolean;
};

export type ResumeSkillCategory = {
  category: string;
  categoryRu?: string;
  items: string[];
};

export type ResumeEducation = {
  title: string;
  institution: string;
};

export type ResumeLanguage = {
  name: string;
  level: string;
};

export type ResumeData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  phoneUrl: string;
  telegram: string;
  telegramUrl: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  cvPdfUrl: string;
  cvPdfUrlRu: string;
  siteUrl: string;
  location: { city: string; country: string; tz: string };
  stats: ResumeStat[];
  experience: ResumeExperience[];
  skills: ResumeSkillCategory[];
  education: ResumeEducation[];
  languages: ResumeLanguage[];
};

export const resume: ResumeData = {
  name: "Erbol Mederbekov",
  title: "Senior Frontend Developer / Senior React Native Engineer",
  email: "erba522442@gmail.com",
  phone: "+996 705 522 442",
  phoneUrl: "tel:+996705522442",
  telegram: "@erbakg",
  telegramUrl: "https://t.me/erbakg",
  linkedin: "linkedin.com/in/erbol-mederbekov-122438202",
  linkedinUrl: "https://linkedin.com/in/erbol-mederbekov-122438202",
  github: "erbakg",
  githubUrl: "https://github.com/erbakg",
  cvPdfUrl: "/resume/Erbol_Mederbekov_CV_EN.pdf",
  cvPdfUrlRu: "/resume/Erbol_Mederbekov_CV_RU.pdf",
  siteUrl: "https://erbakg.github.io",
  location: { city: "Bishkek", country: "Kyrgyzstan", tz: "GMT+6" },
  stats: [
    {
      value: "−70%",
      label: "Load time · 6s → 1.8s",
      labelRu: "Время загрузки · 6с → 1.8с",
      positive: true,
    },
    {
      value: "−35%",
      label: "Bundle size · 170MB → 110MB",
      labelRu: "Размер bundle · 170MB → 110MB",
      positive: true,
    },
    {
      value: "100K+",
      label: "Active users · iOS + Android",
      labelRu: "Активные пользователи · iOS + Android",
    },
    {
      value: "50+",
      label: "Production releases · Aug 2022 – Aug 2025",
      labelRu: "Продакшен-релизы · Авг 2022 – Авг 2025",
    },
  ],
  experience: [
    {
      company: "MDigital",
      role: "Frontend Developer · Full-time, onsite",
      roleRu: "Frontend Developer · Полная занятость, офис",
      period: "Aug 2025 – Sep 2026",
      location: "Bishkek, Kyrgyzstan",
      locationRu: "Бишкек, Кыргызстан",
      featured: true,
      bullets: [
        "Worked on a modular ERP/CRM ecosystem for real estate and construction: projects, contractors, contracts, payments, materials, tenders, warehouse, documents, reports, and approval workflows.",
        "Built Gantt-based planning, GPR/UGPR/VDC scenarios, role-aware editing, baseline revisions, timeline navigation, and supplier proposals.",
        "Contributed to a mobile catalog for residential projects, apartments, parking, and commercial spaces, and adapted a corporate task-management frontend with SSO, ERP notifications, and protected WebView navigation.",
        "Developed Soft Collection CRM workflows for credit, payments, Legal, Fraud, field assignments on 2GIS maps, permissions, map caching, and relationship analysis.",
      ],
      bulletsRu: [
        "Участвовал в разработке модульной ERP/CRM-экосистемы для недвижимости и строительства: проекты, объекты, подрядчики, договоры, платежи, материалы, тендеры, склад, документы, отчёты и approval workflows.",
        "Реализовывал планирование на основе Gantt, GPR/UGPR/VDC-сценарии, редактуру с учётом ролей и прав доступа, baseline revisions, навигацию по таймлайну и коммерческие предложения поставщиков.",
        "Участвовал в разработке мобильного каталога жилой недвижимости, квартир, парковок и коммерческих помещений, а также адаптировал корпоративный task-management frontend с SSO, ERP-уведомлениями и защищённой навигацией в WebView.",
        "Развивал Soft Collection CRM: кредитные и клиентские сценарии, обещания платежа, Legal и Fraud, распределение выездов и звонков на карте 2GIS, permissions, кэширование карты и анализ связей.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Vue 3",
        "Vite",
        "Redux Toolkit",
        "Pinia",
        "TanStack Router",
        "Ant Design",
        "@mdigital/ui",
        "Tailwind CSS",
        "WebSockets",
        "2GIS MapGL",
        "Vitest",
        "Playwright",
        "Sentry",
      ],
    },
    {
      company: "Cointelegraph",
      role: "React Native Developer · Full-time",
      roleRu: "React Native Developer · Полная занятость",
      period: "Aug 2022 – Aug 2025",
      location: "Remote",
      locationRu: "Удалённо",
      bullets: [
        "Mobile MVP for crypto-news platform, iOS + Android.",
        "Cut load time 6s → 1.8s (−70%), bundle 170 MB → 110 MB.",
        "Shipped 50+ production releases; reached 100K+ active users.",
      ],
      bulletsRu: [
        "Мобильный MVP крипто-новостной платформы для iOS и Android.",
        "Снизил время загрузки с 6с до 1.8с (−70%), bundle — со 170 MB до 110 MB.",
        "Выпустил 50+ продакшен-релизов; продуктом пользуются 100K+ активных пользователей.",
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
      roleRu: "Frontend / React Native инженер",
      period: "Jan 2019 – Jul 2022",
      location: "Remote",
      locationRu: "Удалённо",
      parallel: true,
      bullets: [
        "B2B ERP — virtualized tables for 10K+ rows (react-window), multi-step forms with strict Zod validation (90+ fields), S3 direct-upload pipeline via Uppy for multi-GB files, 4-language i18n.",
        "Customer CRM — interactive Leaflet maps with 500+ clustered markers, type-safe routing (TanStack Router), installable PWA with offline cache, Framer Motion micro-interactions at 60fps.",
        "Banking debt-collection CRM — MobX store across 50+ entities, custom Webpack config cut bundle by 40%, real-time Nivo dashboards, 2GIS MapGL for KZ/RU geo coverage.",
        "Cross-platform mobile work — React Native screens shared between iOS and Android for selected client projects.",
      ],
      bulletsRu: [
        "B2B ERP — виртуализированные таблицы на 10K+ строк (react-window), многоэтапные формы со строгой Zod-валидацией (90+ полей), прямые загрузки multi-GB файлов в S3 через Uppy, локализация на 4 языка.",
        "Customer CRM — интерактивные Leaflet-карты с 500+ кластеризованными маркерами, типобезопасный роутинг (TanStack Router), устанавливаемое PWA с offline-кешем и микро-анимации Framer Motion в 60fps.",
        "Банковский CRM по сбору долгов — MobX store на 50+ сущностей, кастомный Webpack-конфиг снизил bundle на 40%, real-time Nivo-дашборды, 2GIS MapGL для гео-покрытия KZ/RU.",
        "Кросс-платформенная мобильная разработка — React Native-экраны, общие для iOS и Android в отдельных клиентских проектах.",
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
    {
      category: "Core",
      categoryRu: "Основы",
      items: ["React 18/19", "React Native", "Vue 3", "TypeScript", "JavaScript ES2024"],
    },
    {
      category: "UI / Styling",
      categoryRu: "UI / стили",
      items: ["TailwindCSS v4", "Ant Design", "@mdigital/ui", "Framer Motion", "SCSS"],
    },
    { category: "Build", categoryRu: "Сборка", items: ["Vite", "Webpack (custom)", "Rollup"] },
    {
      category: "Testing",
      categoryRu: "Тестирование",
      items: ["Vitest", "Jest", "Testing Library", "Playwright", "Storybook"],
    },
    {
      category: "State",
      categoryRu: "Состояние",
      items: ["Redux Toolkit", "Pinia", "MobX", "Zustand"],
    },
    {
      category: "Data",
      categoryRu: "Данные",
      items: ["TanStack Query", "Apollo GraphQL", "Axios", "REST API", "WebSockets"],
    },
    {
      category: "Routing",
      categoryRu: "Роутинг",
      items: ["React Router v6/v7", "TanStack Router"],
    },
    { category: "Forms", categoryRu: "Формы", items: ["React Hook Form", "Zod"] },
    {
      category: "Monitoring",
      categoryRu: "Мониторинг",
      items: ["Sentry", "Firebase Analytics", "Firebase Performance"],
    },
    {
      category: "Tooling",
      categoryRu: "Инструменты",
      items: ["Biome", "ESLint", "Prettier", "Husky", "CI/CD", "Git"],
    },
    {
      category: "Mobile",
      categoryRu: "Мобильная разработка",
      items: ["React Native", "React Navigation", "iOS", "Android", "Swift"],
    },
    {
      category: "Android",
      categoryRu: "Android",
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
  education: [
    {
      title: "Software Development",
      institution: "State Professional Courses, Kyrgyzstan",
    },
    {
      title: "Android Development",
      institution: "Professional Certification",
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Russian", level: "Fluent" },
    { name: "Kyrgyz", level: "Native" },
  ],
};
