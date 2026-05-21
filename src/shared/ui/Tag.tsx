import { cn } from "@/shared/lib/cn";

type Props = { children: React.ReactNode; className?: string };

export const Tag = ({ children, className }: Props) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-border px-2.5 py-0.5",
      "font-mono text-xs text-fg-muted",
      className,
    )}
  >
    {children}
  </span>
);
