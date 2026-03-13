"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Users, Zap } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white selection:bg-amber-100"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-5%] top-[-15%] h-[600px] w-[600px] rounded-full bg-amber-100/30 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[450px] w-[450px] rounded-full bg-zinc-200/40 blur-[100px]" />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-zinc-950/6" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pt-20 pb-24 md:px-10 md:pt-24 md:pb-28 lg:px-16"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* ── LEFT: Text ── */}
          <div className="flex max-w-lg flex-col items-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 rounded-full border border-zinc-200/50 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="relative h-5 w-5 overflow-hidden rounded-full border border-amber-200/80">
                <Image src="/logo.png" alt="Motion Cure" fill sizes="20px" unoptimized className="object-cover" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                The Motion Cure · Peshawar
              </span>
            </motion.div>

            <div className="space-y-1.5">
              {["Expert Care.", "Pain-Free Life.", "No Surgery."].map((line, i) => (
                <div key={line} className="overflow-hidden pb-1">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 md:text-5xl lg:text-6xl"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-md text-base leading-relaxed text-zinc-500 md:text-[17px]"
            >
              Personalized, evidence-based physiotherapy with{" "}
              <span className="font-medium text-zinc-900">Dr. Sadeeq Ur Rehman</span>. Regain your
              mobility through compassionate, non-surgical care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="https://wa.me/923429255379"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-zinc-900 px-6 py-3.5 text-[13px] font-medium leading-[1.3] tracking-wide text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>

              <a
                href="https://wa.me/923429255379"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-6 py-3.5 text-[13px] font-medium leading-[1.3] tracking-wide text-zinc-900 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white"
              >
                <MessageCircle className="h-4 w-4 text-amber-500" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex w-full gap-8 border-t border-zinc-200/50 pt-5"
            >
              {[
                { num: "5-10", label: "Daily recoveries" },
                { num: "3", label: "Certifications" },
                { num: "100%", label: "Non-surgical" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-semibold text-zinc-900">{stat.num}</span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Premium Dark Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
          >
            {/* Ambient glow */}
            <div className="absolute -z-10 left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/25 blur-[90px]" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2.8rem] bg-zinc-950 shadow-[0_32px_80px_rgba(0,0,0,0.28)]">

              {/* ─── TOP SECTION: Clinic photo ─── */}
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src="/towerImage.png"
                  alt="The Motion Cure Clinic"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "center 30%" }}
                />
                {/* Gradient fade into dark */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-zinc-950" />

                {/* Floating badge top-right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-white/20 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-sm"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
                  <div>
                    <p className="text-[11px] font-bold text-zinc-800">100% Focus</p>
                    <p className="text-[10px] text-zinc-500">Non-surgical recovery</p>
                  </div>
                </motion.div>

                {/* Top-left corner accent */}
                <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-amber-400/50" />
              </div>

              {/* ─── BOTTOM SECTION: Orb + Stats ─── */}
              <div className="relative px-6 pb-7 pt-2">
                {/* Orb centered */}
                <div className="relative mb-5 flex h-[140px] items-center justify-center">
                  {/* Outer ambient glow */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-28 w-28 rounded-full bg-amber-400/20 blur-2xl"
                  />

                  {/* Rotating rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute h-24 w-24 rounded-full border border-amber-400/40"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute h-[4.5rem] w-[4.5rem] rounded-full border border-zinc-600/50"
                  />

                  {/* Core sphere */}
                  <motion.div
                    animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative h-11 w-11 rounded-full bg-[radial-gradient(circle_at_38%_32%,#fbbf24_0%,#f59e0b_30%,#d97706_60%,#92400e_100%)] shadow-[0_0_40px_rgba(251,191,36,0.75),0_0_70px_rgba(217,119,6,0.35)]"
                  >
                    <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.45),transparent_60%)]" />
                  </motion.div>

                  {/* Orbiting particles */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, Math.cos(i * 1.57) * 36, 0],
                        y: [0, Math.sin(i * 1.57) * 36, 0],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                      className="absolute h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,146,60,0.8)]"
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Zap, num: "5-10", label: "Recoveries/day", accent: "text-amber-400" },
                    { icon: ShieldCheck, num: "100%", label: "Non-surgical", accent: "text-amber-400" },
                    { icon: Users, num: "3+", label: "Certifications", accent: "text-zinc-300" },
                  ].map(({ icon: Icon, num, label, accent }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 rounded-2xl bg-white/[0.05] p-3 backdrop-blur-sm ring-1 ring-white/[0.07]"
                    >
                      <Icon className={`h-3.5 w-3.5 ${accent}`} />
                      <p className={`text-base font-bold ${accent}`}>{num}</p>
                      <p className="text-[9px] font-medium uppercase tracking-wide text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom corner accent */}
                <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-amber-400/30" />
              </div>
            </div>

            {/* Accepting patients badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -bottom-4 -right-3 flex items-center gap-2.5 rounded-2xl border border-zinc-100 bg-white px-4 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span className="text-xs font-semibold text-zinc-800">Accepting new patients</span>
            </motion.div>

            {/* Hands-on care badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -left-4 top-1/3 flex items-center gap-2.5 rounded-2xl border border-zinc-100 bg-white px-4 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
            >
              <Users className="h-3.5 w-3.5 text-amber-500" />
              <div>
                <p className="text-[11px] font-bold text-zinc-800">Hands-on Care</p>
                <p className="text-[10px] text-zinc-400">Personalized sessions</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}