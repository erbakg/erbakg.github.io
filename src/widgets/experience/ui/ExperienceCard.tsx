"use client";
import { motion } from "framer-motion";
import { Tag } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { ResumeExperience } from "@/shared/config/resume";

type Props = {
  item: ResumeExperience;
  parallelLabel: string;
  featuredLabel: string;
  locale: "en" | "ru";
  index: number;
};

export const ExperienceCard = ({ item, parallelLabel, featuredLabel, locale, index }: Props) => {
  const role = locale === "ru" ? (item.roleRu ?? item.role) : item.role;
  const location = locale === "ru" ? (item.locationRu ?? item.location) : item.location;
  const bullets = locale === "ru" ? (item.bulletsRu ?? item.bullets) : item.bullets;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "grid gap-7 border-t border-border py-8 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.8fr)] lg:gap-12 lg:py-10",
        item.featured &&
          "rounded-3xl border-x border-b border-accent/35 bg-bg-elevated px-6 py-8 lg:px-8 lg:py-10",
      )}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-start gap-3">
          <h3
            className={cn(
              "font-display tracking-[-0.035em]",
              item.featured ? "text-4xl lg:text-5xl" : "text-3xl lg:text-4xl",
            )}
          >
            {item.company}
          </h3>
          {item.featured && (
            <span className="mt-2 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              {featuredLabel}
            </span>
          )}
        </div>
        <div className="text-sm text-fg-muted">{item.period}</div>
        <div className="text-sm text-fg-muted">{location}</div>
      </div>
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium">
          <span>{role}</span>
          {item.parallel && (
            <>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span className="text-sm font-normal italic text-fg-muted">({parallelLabel})</span>
            </>
          )}
        </div>
        <ul className="space-y-3 text-fg">
          {bullets.map((b) => (
            <li
              key={b}
              className="pl-5 text-base leading-relaxed before:mr-3 before:-ml-5 before:text-accent before:content-['↳']"
            >
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
};
