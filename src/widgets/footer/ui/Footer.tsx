import { LocaleSwitch } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

type Props = { locale: "en" | "ru" };

export const Footer = ({ locale }: Props) => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-fg-muted sm:flex-row">
      <LocaleSwitch currentLocale={locale} />
      <span>© 2026 {resume.name}</span>
      <a
        href={resume.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-fg"
      >
        source on github
      </a>
    </div>
  </footer>
);
