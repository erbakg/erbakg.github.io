import { cn } from "@/shared/lib/cn";

type Props = { children: React.ReactNode; className?: string };

export const Tag = ({ children, className }: Props) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-border bg-bg-elevated/60 px-2.5 py-1",
      "text-xs text-fg-muted",
      className,
    )}
  >
    {children}
  </span>
);
