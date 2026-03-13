"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[86vh] w-full items-center justify-center overflow-hidden bg-[#fafafa] selection:bg-emerald-200 md:min-h-[88vh]"
    >
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-zinc-200/45 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-amber-100/40 blur-[100px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-14 md:px-10 md:py-16 lg:px-16"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="flex max-w-lg flex-col items-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-3 rounded-full border border-zinc-200/50 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="relative h-5 w-5 overflow-hidden rounded-full border border-amber-200/80">
                <Image
                  src="/logo.png"
                  alt="Motion Cure"
                  fill
                  sizes="20px"
                  unoptimized
                  className="object-cover"
                />
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
              <span className="font-medium text-zinc-900">Dr. Sadeeq Ur Rehman</span>. Regain your mobility
              through compassionate, non-surgical care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <button className="group relative overflow-hidden rounded-full bg-zinc-900 px-6 py-3.5 text-[13px] font-medium leading-[1.3] tracking-wide text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/20">
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              <button className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-6 py-3.5 text-[13px] font-medium leading-[1.3] tracking-wide text-zinc-900 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white">
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                WhatsApp Us
              </button>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[440px] aspect-square lg:ml-auto lg:aspect-[4/5]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-gradient-to-br from-white/70 to-zinc-100/85 shadow-[0_20px_52px_rgba(15,23,42,0.15)] backdrop-blur-xl">
              <div className="absolute inset-[2px] overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-zinc-50 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(245,158,11,0.16),transparent_55%)]" />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(15,23,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.4) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />


                {/* Outer glow halo */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-[56%] h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-300/35 to-amber-400/0 blur-2xl"
                />
                
                {/* Primary rotating ring with glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-[56%] h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-amber-400/70 shadow-[0_0_30px_rgba(251,146,60,0.6),inset_0_0_20px_rgba(251,146,60,0.2)]"
                />
                
                {/* Secondary ring with counter-rotation */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-[56%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-zinc-300/60 shadow-[0_0_20px_rgba(212,212,216,0.4)]"
                />
                
                {/* Inner accent ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-[56%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-amber-300/40 shadow-[0_0_15px_rgba(251,146,60,0.3)]"
                />

                {/* Luminous core sphere */}
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-[56%] h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_30%,#fbbf24_0%,#f59e0b_25%,#d4af37_50%,#92400e_100%)] shadow-[0_0_60px_rgba(251,191,36,0.8),0_0_100px_rgba(217,119,6,0.4),inset_0_20px_40px_rgba(255,255,255,0.2)]"
                >
                  {/* Inner reflex */}
                  <div className="absolute inset-[8px] rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.45),rgba(255,255,255,0.15)_20%,transparent_60%)]" />
                </motion.div>

                {/* Deep core glow layer */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
                  transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-[56%] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-amber-300/60 to-transparent blur-3xl"
                />

                {/* Dynamic light streaks */}
                <motion.div
                  animate={{ x: [0, 12, 0], opacity: [0.3, 0.65, 0.3] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-6 top-[28%] h-[3px] w-32 bg-gradient-to-r from-transparent via-amber-200/90 to-transparent blur-sm"
                />
                <motion.div
                  animate={{ x: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute left-6 top-[68%] h-[2.5px] w-28 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent blur-sm"
                />
                
                {/* Secondary light accent */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(251,146,60,0.3) 0deg, transparent 90deg, rgba(251,146,60,0.3) 180deg)",
                    borderRadius: "50%",
                    filter: "blur(12px)",
                    opacity: 0.4,
                  }}
                />
                
                {/* Floating particle spec effects */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    animate={{
                      x: [0, Math.cos(i * 1.57) * 25, 0],
                      y: [0, Math.sin(i * 1.57) * 25, 0],
                      opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                      duration: 5 + i * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                    className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                  />
                ))}

                <motion.figure
                  initial={{ opacity: 0, y: 12, x: -8 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.62 }}
                  className="absolute left-5 top-5 hidden w-[56%] overflow-hidden rounded-2xl border border-white/90 bg-white shadow-[0_20px_38px_rgba(15,23,42,0.16)] md:block"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/towerImage.png"
                      alt="Clinic treatment session"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 28%" }}
                    />
                  </div>
                </motion.figure>

                <motion.figure
                  initial={{ opacity: 0, y: 12, x: 10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.82 }}
                  className="absolute bottom-8 right-5 hidden w-[36%] overflow-hidden rounded-2xl border border-white/90 bg-white shadow-[0_20px_38px_rgba(15,23,42,0.16)] md:block"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/geneImage.png"
                      alt="Patient progress highlight"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "74% 52%" }}
                    />
                  </div>
                </motion.figure>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.02, duration: 0.6 }}
                  className="absolute right-4 top-[41%] hidden rounded-2xl border border-amber-200/90 bg-white/95 px-4 py-2 shadow-[0_14px_28px_rgba(120,53,15,0.14)] md:block"
                >
                  <p className="text-xs font-semibold text-zinc-800">100% Focus</p>
                  <p className="text-[11px] text-zinc-600">Non-surgical recovery</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute bottom-6 left-4 hidden rounded-2xl border border-amber-200/90 bg-white/95 px-4 py-2 shadow-[0_14px_28px_rgba(120,53,15,0.14)] md:block"
                >
                  <p className="text-xs font-semibold text-zinc-800">Hands-on Care</p>
                  <p className="text-[11px] text-zinc-600">Personalized sessions</p>
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              </div>

              <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 rounded-tl-3xl border-l-2 border-t-2 border-emerald-500/20" />
              <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 border-amber-400/30" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white px-5 py-3 shadow-lg"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span className="text-xs font-semibold text-zinc-800">Accepting new patients</span>
            </motion.div>

            <div className="absolute -z-10 left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-[80px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
