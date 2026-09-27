import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type Variant = "primary" | "ghost";
type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  children: React.ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors";
const styles: Record<Variant, string> = {
  primary: "bg-accent text-bg-elevated hover:bg-accent/90",
  ghost: "border border-border bg-bg-elevated/40 text-fg hover:border-fg-muted",
};

export const Button = ({
  href,
  variant = "ghost",
  external,
  download,
  children,
  className,
}: Props) => {
  const cls = cn(base, styles[variant], className);
  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
};
