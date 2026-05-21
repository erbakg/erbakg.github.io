"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section, SectionHeading, Tag } from "@/shared/ui";

const tags = ["React Native", "React Navigation", "Java", "Kotlin", "Android SDK", "MVVM"];

export const MobileAndroid = () => {
  const t = useTranslations("mobile");
  return (
    <Section id="mobile">
      <SectionHeading index="04" label="Focus" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16"
      >
        <div className="space-y-6">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight lg:text-6xl">
            {t("heading")}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-fg-muted">{t("body")}</p>
          <p className="max-w-xl font-mono text-sm leading-relaxed text-fg-muted">{t("cert")}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 self-end lg:justify-end">
          {tags.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
