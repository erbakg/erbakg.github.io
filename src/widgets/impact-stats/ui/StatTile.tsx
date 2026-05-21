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
    className="rounded-lg border border-border bg-bg-elevated/40 p-6 transition-colors hover:border-fg-muted"
  >
    <div
      className={cn(
        "font-mono text-4xl font-semibold lg:text-5xl",
        positive ? "text-positive" : "text-fg",
      )}
    >
      {value}
    </div>
    <p className="mt-2 font-mono text-xs text-fg-muted">{label}</p>
  </motion.div>
);
