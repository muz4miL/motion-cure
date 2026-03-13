"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Medal, ShieldCheck } from "lucide-react";
import { trustBadges, trustStats } from "@/lib/data";

const iconMap = {
  PPTA: ShieldCheck,
  AHPC: Medal,
  "KP Health Care Commission": BadgeCheck,
};

export function TrustBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55 }}
      className="mb-24 rounded-[2rem] border border-zinc-200/70 bg-zinc-50/80 px-6 py-6 backdrop-blur sm:px-8 md:px-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-600 md:gap-6">
          {trustBadges.map((badge) => {
            const Icon = iconMap[badge as keyof typeof iconMap];
            return (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <Icon className="h-4 w-4 text-indigo-500" />
                {badge}
              </span>
            );
          })}
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
          Average <span className="font-semibold text-zinc-900">{trustStats.patientsRecoveredDaily} patients recover daily</span>
          without surgery.
        </p>
      </div>
    </motion.section>
  );
}
