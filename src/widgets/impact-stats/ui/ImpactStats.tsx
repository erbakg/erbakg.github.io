import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { StatTile } from "./StatTile";

export const ImpactStats = () => {
  const t = useTranslations("stats");
  return (
    <Section id="impact">
      <SectionHeading index="01" label={t("heading")} />
      <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
        {resume.stats.map((s, i) => (
          <StatTile key={s.label} {...s} index={i} />
        ))}
      </div>
    </Section>
  );
};
