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
  "inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-sm transition-colors";
const styles: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-accent/90",
  ghost: "border border-border text-fg hover:border-fg-muted",
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
  if (external || download) {
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
