import { resume } from "@/shared/config/resume";
import { LocaleSwitch } from "@/shared/ui";

type Props = { locale: "en" | "ru" };

export const Footer = ({ locale }: Props) => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-fg-muted sm:flex-row sm:px-8">
      <span>© 2026 {resume.name}</span>
      <div className="flex items-center gap-5">
        <LocaleSwitch currentLocale={locale} />
        <a
          href={resume.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          GitHub
        </a>
        <a
          href={resume.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
