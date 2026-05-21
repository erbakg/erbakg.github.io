import { useTranslations } from "next-intl";
import { Section } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { StatTile } from "./StatTile";

export const ImpactStats = () => {
  const t = useTranslations("stats");
  return (
    <Section id="impact">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-fg-muted">
        {t("heading")}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {resume.stats.map((s, i) => (
          <StatTile key={s.label} {...s} index={i} />
        ))}
      </div>
    </Section>
  );
};
