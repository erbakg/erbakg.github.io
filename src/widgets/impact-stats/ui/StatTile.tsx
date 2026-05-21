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
    className="px-0 py-8 md:px-6 md:first:pl-0 md:last:pr-0 lg:py-2"
  >
    <div
      className={cn(
        "font-mono text-5xl font-semibold leading-none tracking-tight lg:text-6xl",
        positive ? "text-positive" : "text-fg",
      )}
    >
      {value}
    </div>
    <p className="mt-4 font-mono text-xs leading-snug text-fg-muted">{label}</p>
  </motion.div>
);
