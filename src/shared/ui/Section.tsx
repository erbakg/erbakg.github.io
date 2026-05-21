import { cn } from "@/shared/lib/cn";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "footer" | "header";
};

export const Section = ({ id, className, children, as: Tag = "section" }: Props) => (
  <Tag
    id={id}
    className={cn(
      "mx-auto w-full max-w-6xl px-6 py-24 lg:py-32",
      className,
    )}
  >
    {children}
  </Tag>
);
