import { cn } from "@/shared/lib/cn";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "footer" | "header";
};

export const Section = ({ id, className, children, as: Tag = "section" }: Props) => (
  <Tag id={id} className={cn("mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28", className)}>
    {children}
  </Tag>
);
