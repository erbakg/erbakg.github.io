"use client";
import { motion } from "framer-motion";
import { Tag } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { ResumeExperience } from "@/shared/config/resume";

type Props = {
  item: ResumeExperience;
  parallelLabel: string;
  currentLabel: string;
  index: number;
};

export const ExperienceCard = ({ item, parallelLabel, currentLabel, index }: Props) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={cn(
      "grid gap-6 border-t border-border py-8 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:py-12",
      item.featured && "lg:py-16",
    )}
  >
    <div className="space-y-2">
      <h3
        className={cn(
          "font-semibold tracking-tight",
          item.featured ? "text-3xl lg:text-5xl" : "text-2xl lg:text-3xl",
        )}
      >
        {item.company}
      </h3>
      <div className="font-mono text-xs text-fg-muted">{item.period}</div>
      {item.featured && (
        <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent">
          ↳ {currentLabel}
        </span>
      )}
    </div>
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-fg-muted">
        <span>{item.role}</span>
        <span aria-hidden>·</span>
        <span>{item.location}</span>
        {item.parallel && (
          <>
            <span aria-hidden>·</span>
            <span className="italic">({parallelLabel})</span>
          </>
        )}
      </div>
      <ul className="space-y-2 text-fg">
        {item.bullets.map((b) => (
          <li key={b} className="text-base leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
      {item.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      )}
    </div>
  </motion.article>
);
