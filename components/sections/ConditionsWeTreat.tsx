"use client";

import { motion } from "framer-motion";
import { Accessibility, Activity, Brain, Dumbbell, Waves } from "lucide-react";
import { conditions } from "@/lib/data";

const iconMap = {
  waves: Waves,
  activity: Activity,
  dumbbell: Dumbbell,
  brain: Brain,
  accessibility: Accessibility,
};

const iconStyleMap = {
  waves: {
    chip: "from-cyan-300 via-sky-300 to-blue-400",
    glow: "shadow-[0_10px_26px_rgba(56,189,248,0.35)]",
  },
  activity: {
    chip: "from-amber-300 via-orange-300 to-rose-300",
    glow: "shadow-[0_10px_26px_rgba(251,191,36,0.32)]",
  },
  dumbbell: {
    chip: "from-violet-300 via-fuchsia-300 to-pink-300",
    glow: "shadow-[0_10px_26px_rgba(192,132,252,0.34)]",
  },
  brain: {
    chip: "from-emerald-300 via-teal-300 to-cyan-300",
    glow: "shadow-[0_10px_26px_rgba(16,185,129,0.32)]",
  },
  accessibility: {
    chip: "from-lime-300 via-emerald-300 to-green-300",
    glow: "shadow-[0_10px_26px_rgba(132,204,22,0.3)]",
  },
};

export function ConditionsWeTreat() {
  return (
    <section
      id="conditions"
      className="relative rounded-[2.5rem] border border-zinc-800/60 bg-zinc-950 px-4 py-12 md:px-8 md:py-16 lg:px-10"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-amber-300/4 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/70">
          Specialized Recovery
        </p>
        <h2 className="max-w-xl text-4xl font-extrabold leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl">
          Conditions We Treat.
          <br />
          <span className="text-zinc-400">Expert care for a pain-free life.</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center lg:justify-start"
        >
          <div className="w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/8 bg-white/4 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-zinc-900">
              <video
                src="/129734-745175075_small.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-4 md:space-y-5">
        {conditions.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-5 backdrop-blur-xl hover:bg-white/[0.07] hover:border-amber-400/20 transition-all duration-300 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${iconStyleMap[item.icon].chip} ${iconStyleMap[item.icon].glow}`}
                >
                  <Icon className="h-5 w-5 text-zinc-900" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
