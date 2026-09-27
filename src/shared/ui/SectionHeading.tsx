import { cn } from "@/shared/lib/cn";

type Props = {
  index: string;
  label: string;
  className?: string;
};

export const SectionHeading = ({ index, label, className }: Props) => (
  <div
    className={cn(
      "mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fg-muted",
      className,
    )}
  >
    <span className="font-mono text-accent">{index}</span>
    <span className="h-px w-8 bg-accent/50" />
    <span>{label}</span>
  </div>
);
