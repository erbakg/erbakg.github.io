import { useLocale, useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "ru";
  return (
    <Section id="experience">
      <SectionHeading index="02" label={t("heading")} />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-fg-muted">{t("subheading")}</p>
      <div>
        {resume.experience.map((e, i) => (
          <ExperienceCard
            key={e.company}
            item={e}
            parallelLabel={t("parallel")}
            featuredLabel={t("featured")}
            locale={locale}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
};
