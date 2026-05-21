"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section, Tag } from "@/shared/ui";

const tags = ["React Native", "React Navigation", "Java", "Kotlin", "Android SDK", "MVVM"];

export const MobileAndroid = () => {
  const t = useTranslations("mobile");
  return (
    <Section id="mobile">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-bg-elevated/60 to-bg p-8 lg:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              focus
            </p>
            <h2 className="mb-5 text-3xl font-semibold lg:text-4xl">{t("heading")}</h2>
            <p className="mb-3 text-fg-muted">{t("body")}</p>
            <p className="text-fg-muted">{t("cert")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((s) => (
              <Tag key={s} className="text-sm">
                {s}
              </Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
