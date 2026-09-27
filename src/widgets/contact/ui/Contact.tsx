import { useTranslations, useLocale } from "next-intl";
import { Section, SectionHeading, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Contact = () => {
  const t = useTranslations("contact");
  const tHero = useTranslations("hero.cta");
  const locale = useLocale();
  return (
    <Section id="contact">
      <div className="rounded-2xl border border-border bg-bg-elevated px-6 py-10 text-fg sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <SectionHeading index="05" label={t("eyebrow")} className="text-fg-muted" />
        <div className="max-w-4xl">
          <h2 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {t("heading")}
          </h2>
          <p className="mt-6 text-sm text-fg-muted">{t("subheading")}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{t("body")}</p>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
            <Button href={`mailto:${resume.email}`} variant="primary" className="w-full">
              <Icon name="email" />
              {tHero("email")}
            </Button>
            <Button href={resume.telegramUrl} external className="w-full">
              <Icon name="telegram" />
              {tHero("telegram")}
            </Button>
            <Button href={resume.githubUrl} external className="w-full">
              <Icon name="github" />
              {tHero("github")}
            </Button>
            <Button href={`/${locale}/cv`} className="w-full">
              <Icon name="download" />
              {tHero("downloadCv")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
