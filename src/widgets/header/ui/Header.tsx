import { useTranslations } from "next-intl";
import Link from "next/link";
import { LocaleSwitch } from "@/shared/ui";

type Props = { locale: "en" | "ru" };

export const Header = ({ locale }: Props) => {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          Erbol Mederbekov
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm text-fg-muted md:flex"
          aria-label="Main navigation"
        >
          <a href="#experience" className="transition-colors hover:text-fg">
            {t("work")}
          </a>
          <a href="#skills" className="transition-colors hover:text-fg">
            {t("toolkit")}
          </a>
          <a href="#contact" className="transition-colors hover:text-fg">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-bg-soft px-4 py-2 text-xs font-medium text-fg transition-colors hover:bg-bg-elevated sm:inline-flex"
          >
            {t("talk")}
          </a>
          <LocaleSwitch currentLocale={locale} />
        </div>
      </div>
    </header>
  );
};
