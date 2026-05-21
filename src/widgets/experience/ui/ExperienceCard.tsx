"use client";
import { motion } from "framer-motion";
import { Tag } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { ResumeExperience } from "@/shared/config/resume";

type Props = { item: ResumeExperience; parallelLabel: string; index: number };

export const ExperienceCard = ({ item, parallelLabel, index }: Props) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={cn(
      "rounded-lg border border-border bg-bg-elevated/40 p-6 lg:p-8",
      item.featured && "border-l-2 border-l-accent",
    )}
  >
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-2xl font-semibold">{item.company}</h3>
      <span className="font-mono text-xs text-fg-muted">{item.period}</span>
    </div>
    <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-sm text-fg-muted">
      <span>{item.role}</span>
      <span>·</span>
      <span>{item.location}</span>
      {item.parallel && (
        <>
          <span>·</span>
          <span className="italic">({parallelLabel})</span>
        </>
      )}
    </div>
    <ul className="mt-4 space-y-1.5 text-fg">
      {item.bullets.map((b) => (
        <li key={b} className="text-sm leading-relaxed">
          – {b}
        </li>
      ))}
    </ul>
    {item.stack.length > 0 && (
      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    )}
  </motion.article>
);
