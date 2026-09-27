"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/shared/ui";

export const MobileAndroid = () => {
  const t = useTranslations("mobile");
  return (
    <Section id="mobile">
      <SectionHeading index="04" label={t("eyebrow")} />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-2xl border border-border bg-bg-elevated p-7 text-fg sm:p-10 lg:p-12">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t("heading")}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">{t("body")}</p>
          <p className="mt-8 max-w-xl border-t border-fg/15 pt-5 text-sm leading-relaxed text-fg-muted">
            {t("cert")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex min-h-48 flex-col justify-between rounded-2xl border border-border bg-bg-elevated p-7">
            <span className="text-sm text-fg-muted">01</span>
            <div>
              <p className="font-display text-5xl font-semibold tracking-[-0.05em]">{t("ios")}</p>
              <p className="mt-2 text-sm text-fg-muted">{t("iosDetail")}</p>
            </div>
          </div>
          <div className="flex min-h-48 flex-col justify-between rounded-2xl border border-border bg-accent-soft p-7 text-fg">
            <span className="text-sm text-fg-muted">02</span>
            <div>
              <p className="font-display text-5xl font-semibold tracking-[-0.05em]">{t("android")}</p>
              <p className="mt-2 text-sm text-fg-muted">{t("androidDetail")}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
