"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/cn";

type Locale = "en" | "ru";
type Props = { currentLocale: Locale; className?: string };

const swap = (pathname: string, target: Locale): string => {
  const segments = pathname.split("/");
  if (segments[1] === "en" || segments[1] === "ru") {
    segments[1] = target;
    return segments.join("/") || "/";
  }
  return `/${target}${pathname}`;
};

export const LocaleSwitch = ({ currentLocale, className }: Props) => {
  const pathname = usePathname();
  const locales: Locale[] = ["en", "ru"];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/80 px-3 py-1 font-mono text-xs backdrop-blur",
        className,
      )}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          <Link
            href={swap(pathname, l)}
            className={cn(
              "transition-colors",
              l === currentLocale ? "text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            {l.toUpperCase()}
          </Link>
          {i === 0 && <span className="text-border">|</span>}
        </span>
      ))}
    </div>
  );
};
