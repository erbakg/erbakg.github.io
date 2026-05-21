import { useTranslations } from "next-intl";
import { Section } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  const t = useTranslations("experience");
  return (
    <Section id="experience">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-fg-muted">
        {t("heading")}
      </h2>
      <div className="space-y-4">
        {resume.experience.map((e, i) => (
          <ExperienceCard key={e.company} item={e} parallelLabel={t("parallel")} index={i} />
        ))}
      </div>
    </Section>
  );
};
