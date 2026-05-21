import { useTranslations, useLocale } from "next-intl";
import { Section, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Hero = () => {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <Section className="grid min-h-[calc(100vh-65px)] items-center gap-16 lg:grid-cols-[3fr_1fr]">
      <div className="space-y-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {resume.name}
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-fg-muted lg:text-2xl">
          {t("tagline")}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button href={`/${locale}/cv`} variant="primary">
            <Icon name="download" />
            {t("cta.downloadCv")}
          </Button>
          <Button href={`mailto:${resume.email}`}>
            <Icon name="email" />
            {t("cta.email")}
          </Button>
          <Button href={resume.telegramUrl} external>
            <Icon name="telegram" />
            {t("cta.telegram")}
          </Button>
          <Button href={resume.githubUrl} external>
            <Icon name="github" />
            {t("cta.github")}
          </Button>
        </div>
      </div>
      <aside className="hidden border-l border-border pl-8 font-mono text-xs leading-relaxed text-fg-muted lg:block">
        <dl className="space-y-5">
          <div>
            <dt className="text-fg-muted/60">LOC</dt>
            <dd className="text-fg">
              {resume.location.city}, {resume.location.country}
            </dd>
          </div>
          <div>
            <dt className="text-fg-muted/60">TZ</dt>
            <dd className="text-fg">{resume.location.tz}</dd>
          </div>
          <div>
            <dt className="text-fg-muted/60">EXP</dt>
            <dd className="text-fg">5+ years</dd>
          </div>
          <div>
            <dt className="text-fg-muted/60">STATUS</dt>
            <dd className="text-positive">Open to relocation</dd>
          </div>
        </dl>
      </aside>
    </Section>
  );
};
