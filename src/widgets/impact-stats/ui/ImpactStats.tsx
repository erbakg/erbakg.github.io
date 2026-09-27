import { useLocale, useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { StatTile } from "./StatTile";

export const ImpactStats = () => {
  const t = useTranslations("stats");
  const locale = useLocale();
  return (
    <Section id="impact">
      <SectionHeading index="01" label={t("heading")} />
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-fg-muted">{t("subheading")}</p>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {resume.stats.map((s, i) => (
          <StatTile
            key={s.label}
            {...s}
            label={locale === "ru" ? (s.labelRu ?? s.label) : s.label}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
};
