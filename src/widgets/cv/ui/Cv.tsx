"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { resume } from "@/shared/config/resume";

const HiddenInPrint = ({ children }: { children: React.ReactNode }) => (
  <div className="print:hidden">{children}</div>
);

type Locale = "en" | "ru";

const educationByLocale: Record<Locale, Array<{ title: string; institution: string }>> = {
  en: [
    { title: "Software Development", institution: "State Professional Courses, Kyrgyzstan" },
    { title: "Android Development", institution: "Professional Certification" },
  ],
  ru: [
    { title: "Разработка ПО", institution: "Государственные профессиональные курсы, Киргизия" },
    { title: "Android-разработка", institution: "Профессиональная сертификация" },
  ],
};

const languagesByLocale: Record<Locale, Array<{ name: string; level: string }>> = {
  en: [
    { name: "English", level: "Fluent" },
    { name: "Russian", level: "Fluent" },
    { name: "Kyrgyz", level: "Native" },
  ],
  ru: [
    { name: "Английский", level: "свободно" },
    { name: "Русский", level: "свободно" },
    { name: "Кыргызский", level: "родной" },
  ],
};

export const Cv = () => {
  const t = useTranslations("cv");
  const locale = useLocale() as Locale;
  const education = educationByLocale[locale];
  const languages = languagesByLocale[locale];

  return (
    <article className="mx-auto max-w-4xl px-6 py-12 print:max-w-none print:p-0 print:text-black">
      <HiddenInPrint>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em]">
          <Link href={`/${locale}`} className="text-fg-muted transition-colors hover:text-fg">
            ← {t("actions.back")}
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-md bg-accent px-4 py-2 text-bg transition-colors hover:bg-accent/90"
          >
            {t("actions.print")} ↓
          </button>
        </div>
      </HiddenInPrint>

      <header className="mb-10 border-b border-border pb-8 print:mb-6 print:border-black print:pb-4">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl print:text-3xl">
          {resume.name}
        </h1>
        <p className="mt-2 font-mono text-base text-fg-muted print:text-black">{t("title")}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-fg-muted print:text-black">
          <span>{resume.email}</span>
          <span>·</span>
          <span>{resume.telegramUrl.replace("https://", "")}</span>
          <span>·</span>
          <span>{resume.githubUrl.replace("https://", "")}</span>
          <span>·</span>
          <span>{resume.siteUrl.replace("https://", "")}</span>
          <span>·</span>
          <span>
            {resume.location.city}, {resume.location.country}
          </span>
          <span>·</span>
          <span className="text-positive print:text-black">{t("openToRelocation")}</span>
        </div>
      </header>

      <CvSection label={t("sections.profile")}>
        <p className="text-base leading-relaxed text-fg print:text-black">{t("profile")}</p>
      </CvSection>

      <CvSection label={t("sections.experience")}>
        <div className="space-y-8 print:space-y-5">
          {resume.experience.map((e) => (
            <div key={e.company} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight print:text-lg">
                  {e.company}
                </h3>
                <span className="font-mono text-xs text-fg-muted print:text-black">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-fg-muted print:text-black">
                {e.role} · {e.location}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-fg print:text-black">
                {e.bullets.map((b) => (
                  <li key={b} className="pl-4 -indent-4 before:mr-2 before:content-['–']">
                    {b}
                  </li>
                ))}
              </ul>
              {e.stack.length > 0 && (
                <p className="mt-3 font-mono text-xs leading-relaxed text-fg-muted print:text-black">
                  <span className="text-fg-muted/70 print:text-black">Stack: </span>
                  {e.stack.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection label={t("sections.skills")}>
        <dl className="grid gap-x-8 gap-y-2 md:grid-cols-2 print:grid-cols-2">
          {resume.skills.map((cat) => (
            <div
              key={cat.category}
              className="grid grid-cols-[120px_1fr] gap-3 break-inside-avoid print:grid-cols-[100px_1fr]"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-accent print:text-black">
                {cat.category}
              </dt>
              <dd className="text-sm text-fg print:text-black">{cat.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </CvSection>

      <div className="grid gap-12 md:grid-cols-2 print:grid-cols-2 print:gap-8">
        <CvSection label={t("sections.education")}>
          <ul className="space-y-2">
            {education.map((e) => (
              <li key={e.title} className="text-sm text-fg print:text-black">
                <div className="font-semibold">{e.title}</div>
                <div className="font-mono text-xs text-fg-muted print:text-black">
                  {e.institution}
                </div>
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection label={t("sections.languages")}>
          <ul className="space-y-2">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between font-mono text-sm text-fg print:text-black"
              >
                <span>{l.name}</span>
                <span className="text-fg-muted print:text-black">{l.level}</span>
              </li>
            ))}
          </ul>
        </CvSection>
      </div>
    </article>
  );
};

const CvSection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section className="mb-10 print:mb-6">
    <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted print:mb-3 print:text-black">
      {label}
    </h2>
    {children}
  </section>
);
