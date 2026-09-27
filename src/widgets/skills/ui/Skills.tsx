"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";
import { resume } from "@/shared/config/resume";

export const Skills = () => {
  const t = useTranslations("skills");
  const locale = useLocale();
  return (
    <Section id="skills">
      <SectionHeading index="03" label={t("heading")} />
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-fg-muted">{t("subheading")}</p>
      <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="rounded-3xl border border-border bg-bg-elevated p-5 sm:p-6"
          >
            <dt className="text-sm font-semibold text-accent">
              {locale === "ru" ? (cat.categoryRu ?? cat.category) : cat.category}
            </dt>
            <dd className="mt-4 flex flex-wrap gap-1.5 text-base text-fg">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full bg-bg-soft px-2.5 py-1 text-xs text-fg-muted"
                >
                  {it}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
};
