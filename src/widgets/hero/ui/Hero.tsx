import { useTranslations, useLocale } from "next-intl";
import { Section, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Hero = () => {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <Section className="grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
      <div>
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-fg-muted">
          <span className="h-2 w-2 rounded-full bg-positive" aria-hidden="true" />
          <span>{t("eyebrow")}</span>
          <span className="text-border">/</span>
          <span>{t("availability")}</span>
        </div>
        <p className="mb-4 font-display text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
          {resume.name}
        </p>
        <h1 className="max-w-3xl font-display text-[clamp(3.25rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          {t("title")}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted lg:text-xl">
          {t("tagline")}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button
            href={locale === "ru" ? resume.cvPdfUrlRu : resume.cvPdfUrl}
            download
            variant="primary"
          >
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
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-fg-muted">
          <span>{t("location")}</span>
          <span>{resume.title}</span>
        </div>
      </div>

      <aside className="relative min-h-[430px] overflow-hidden rounded-2xl border border-border bg-bg-elevated p-7 text-fg shadow-[0_20px_60px_-30px_rgb(0_0_0_/_0.45)] sm:p-10 lg:min-h-[540px]">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent_49.5%,rgb(255_255_255_/_0.08)_50%,transparent_50.5%),linear-gradient(to_bottom,transparent_49.5%,rgb(255_255_255_/_0.08)_50%,transparent_50.5%)] bg-[size:88px_88px]" />
        </div>
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-fg-muted">
            <span>{t("card.label")}</span>
            <span className="font-mono text-sm text-accent">01</span>
          </div>
          <div className="py-14">
            <p className="max-w-sm font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              {t("card.line1")}
              <br />
              <span className="text-accent">{t("card.line2")}</span>
            </p>
          </div>
          <div className="border-t border-fg/15 pt-5">
            <p className="text-xs uppercase tracking-[0.16em] text-fg-muted">
              {t("card.currently")}
            </p>
            <p className="mt-2 text-sm text-fg/85">{t("card.stack")}</p>
          </div>
        </div>
      </aside>
    </Section>
  );
};
