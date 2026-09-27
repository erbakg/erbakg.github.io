"use client";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/cn";

type Props = { value: string; label: string; positive?: boolean; index: number };

export const StatTile = ({ value, label, positive, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className="rounded-3xl border border-border bg-bg-elevated p-6 sm:p-7"
  >
    <div
      className={cn(
        "font-display text-5xl leading-none tracking-[-0.045em] lg:text-6xl",
        positive ? "text-positive" : "text-fg",
      )}
    >
      {value}
    </div>
    <p className="mt-4 font-mono text-xs leading-snug text-fg-muted">{label}</p>
  </motion.div>
);
