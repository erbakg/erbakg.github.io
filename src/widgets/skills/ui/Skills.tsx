"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section, Tag } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Skills = () => {
  const t = useTranslations("skills");
  return (
    <Section id="skills">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-fg-muted">
        {t("heading")}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-lg border border-border bg-bg-elevated/40 p-5"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((it) => (
                <Tag key={it}>{it}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
