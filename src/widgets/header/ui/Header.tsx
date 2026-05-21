import { LocaleSwitch } from "@/shared/ui";

type Props = { locale: "en" | "ru" };

export const Header = ({ locale }: Props) => (
  <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
      <span className="font-mono text-xs uppercase tracking-widest text-fg-muted">
        Erbol Mederbekov
      </span>
      <LocaleSwitch currentLocale={locale} />
    </div>
  </header>
);
