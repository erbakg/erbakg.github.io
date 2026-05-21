import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  const t = useTranslations("experience");
  return (
    <Section id="experience">
      <SectionHeading index="02" label={t("heading")} />
      <div>
        {resume.experience.map((e, i) => (
          <ExperienceCard
            key={e.company}
            item={e}
            parallelLabel={t("parallel")}
            currentLabel={t("current")}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
};
