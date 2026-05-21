import { useTranslations, useLocale } from "next-intl";
import { Section, SectionHeading, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Contact = () => {
  const t = useTranslations("contact");
  const tHero = useTranslations("hero.cta");
  const locale = useLocale();
  return (
    <Section id="contact">
      <SectionHeading index="05" label="Contact" />
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight lg:text-6xl">
          {t("heading")}
        </h2>
        <p className="mt-6 font-mono text-sm text-fg-muted">{t("subheading")}</p>
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
          <Button href={`mailto:${resume.email}`} variant="primary">
            <Icon name="email" />
            {tHero("email")}
          </Button>
          <Button href={resume.telegramUrl} external>
            <Icon name="telegram" />
            {tHero("telegram")}
          </Button>
          <Button href={resume.githubUrl} external>
            <Icon name="github" />
            {tHero("github")}
          </Button>
          <Button href={`/${locale}/cv`}>
            <Icon name="download" />
            {tHero("downloadCv")}
          </Button>
        </div>
      </div>
    </Section>
  );
};
