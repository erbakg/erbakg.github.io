import { useTranslations } from "next-intl";
import { Section, Button, Icon } from "@/shared/ui";
import { resume } from "@/shared/config/resume";
import { Typewriter } from "./Typewriter";

export const Hero = () => {
  const t = useTranslations("hero");
  const stack = ["React 19", "TypeScript", "React Native", "Next.js 15", "Tailwind v4"];

  return (
    <Section className="grid min-h-[88vh] items-center gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="font-mono text-sm text-fg-muted">{t("eyebrow")}</p>
        <h1 className="text-5xl font-semibold tracking-tight lg:text-7xl">{resume.name}</h1>
        <p className="max-w-xl text-lg text-fg-muted">{t("tagline")}</p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Button href={resume.cvPdfUrl} variant="primary" download>
            <Icon name="download" />
            {t("cta.downloadCv")}
          </Button>
          <Button href={resume.telegramUrl} external>
            <Icon name="telegram" />
            {t("cta.telegram")}
          </Button>
          <Button href={resume.githubUrl} external>
            <Icon name="github" />
            {t("cta.github")}
          </Button>
          <Button href={`mailto:${resume.email}`}>
            <Icon name="email" />
            {t("cta.email")}
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <div className="rounded-lg border border-border bg-bg-elevated p-8 font-mono text-2xl">
          <span className="text-fg-muted">{`> `}</span>
          <Typewriter words={stack} />
        </div>
      </div>
    </Section>
  );
};
