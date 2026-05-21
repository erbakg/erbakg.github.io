"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Skills = () => {
  const t = useTranslations("skills");
  return (
    <Section id="skills">
      <SectionHeading index="03" label={t("heading")} />
      <dl className="divide-y divide-border">
        {resume.skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="grid gap-3 py-4 lg:grid-cols-[200px_1fr] lg:gap-8 lg:py-5"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {cat.category}
            </dt>
            <dd className="text-base text-fg">
              {cat.items.map((it, j) => (
                <span key={it}>
                  {it}
                  {j < cat.items.length - 1 && <span className="text-fg-muted">, </span>}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
};
