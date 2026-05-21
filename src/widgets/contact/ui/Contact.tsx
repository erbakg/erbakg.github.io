import { useTranslations } from "next-intl";
import { Section, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Contact = () => {
  const t = useTranslations("contact");
  const tHero = useTranslations("hero.cta");
  return (
    <Section id="contact" className="text-center">
      <h2 className="mx-auto max-w-3xl text-4xl font-semibold lg:text-5xl">{t("heading")}</h2>
      <p className="mt-4 font-mono text-sm text-fg-muted">{t("subheading")}</p>
      <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-4">
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
        <Button href={resume.cvPdfUrl} download>
          <Icon name="download" />
          {tHero("downloadCv")}
        </Button>
      </div>
    </Section>
  );
};
