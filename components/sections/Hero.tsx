"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Users, Zap, Star, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const cardRotateX = useTransform(springY, [-300, 300], [4, -4]);
  const cardRotateY = useTransform(springX, [-300, 300], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#FAFAF8] selection:bg-amber-100"
    >
      {/* ── Layered background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
        {/* Warm amber glow right */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-[-20%] h-[700px] w-[700px] rounded-full bg-amber-300/20 blur-[140px]"
        />
        {/* Cool blue-grey glow left */}
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-zinc-300/30 blur-[110px]" />
        {/* Subtle golden diagonal stripe */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(251,191,36,0.03)_50%,transparent_55%)]" />
      </div>

      {/* Grid lines decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-zinc-950/5" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-20 pb-24 md:px-10 md:pt-24 md:pb-28 lg:px-16"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT: Text ── */}
          <div className="flex max-w-xl flex-col items-start space-y-7">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="relative h-5 w-5 overflow-hidden rounded-full border border-amber-200/80">
                <Image src="/logo.png" alt="Motion Cure" fill sizes="20px" unoptimized className="object-cover" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                The Motion Cure · Peshawar
              </span>
              <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 ring-1 ring-amber-200/60">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                Open Today
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-0">
              {["Expert Care.", "Pain‑Free Life.", "No Surgery."].map((line, i) => (
                <div key={line} className="overflow-hidden pb-1">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[2.6rem] font-bold leading-[1.07] tracking-tight text-zinc-900 md:text-5xl lg:text-[3.6rem]"
                  >
                    {i === 1 ? (
                      <span className="relative">
                        {line}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                        />
                      </span>
                    ) : line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="max-w-md text-[15px] leading-relaxed text-zinc-500 md:text-base"
            >
              Personalized, evidence-based physiotherapy with{" "}
              <span className="font-semibold text-zinc-800">Dr. Sadeeq Ur Rehman</span>. Regain your
              mobility through compassionate, non-surgical care.
            </motion.p>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {["/towerImage.png", "/logo.png", "/towerImage.png", "/logo.png"].map((src, i) => (
                  <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <Image src={src} alt="Patient" width={32} height={32} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-500 font-medium">200+ happy patients this year</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="https://wa.me/923429255379"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-zinc-900 px-7 py-3.5 text-[13px] font-semibold leading-[1.3] tracking-wide text-white transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-zinc-900/25"
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
                className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 py-3.5 text-[13px] font-semibold leading-[1.3] tracking-wide text-zinc-900 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-amber-300 hover:bg-white hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4 text-amber-500" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="flex w-full gap-6 border-t border-zinc-200/60 pt-6"
            >
              {[
                { num: 500, suffix: "+", label: "Patients Treated" },
                { num: 3, suffix: "", label: "Certifications" },
                { num: 100, suffix: "%", label: "Non-Surgical" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-zinc-900">
                    <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                  </span>
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 3D Tilt Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformPerspective: 1200 }}
            className="relative mx-auto w-full max-w-[480px] lg:ml-auto"
          >
            {/* Ambient glow */}
            <div className="absolute -z-10 left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-[100px]" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[2.8rem] bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">

              {/* ─── Clinic photo ─── */}
              <div className="relative h-[270px] w-full overflow-hidden">
                <Image
                  src="/towerImage.png"
                  alt="The Motion Cure Clinic"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-zinc-950" />

                {/* Top-right badge */}
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

                {/* Play button overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl bg-black/60 px-3.5 py-2 backdrop-blur-sm cursor-pointer hover:bg-black/80 transition-colors"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]">
                    <Play className="h-3 w-3 fill-white text-white ml-0.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-white">Watch clinic tour</span>
                </motion.div>

                <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-amber-400/50" />
              </div>

              {/* ─── Orb + Stats ─── */}
              <div className="relative px-6 pb-7 pt-2">
                {/* Orb */}
                <div className="relative mb-5 flex h-[140px] items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.55, 0.25] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-28 w-28 rounded-full bg-amber-400/20 blur-2xl"
                  />
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
                  <motion.div
                    animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative h-11 w-11 rounded-full bg-[radial-gradient(circle_at_38%_32%,#fbbf24_0%,#f59e0b_30%,#d97706_60%,#92400e_100%)] shadow-[0_0_40px_rgba(251,191,36,0.75),0_0_70px_rgba(217,119,6,0.35)]"
                  >
                    <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.45),transparent_60%)]" />
                  </motion.div>
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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Zap, num: "5–10", label: "Recoveries/day", accent: "text-amber-400" },
                    { icon: ShieldCheck, num: "100%", label: "Non-surgical", accent: "text-amber-400" },
                    { icon: Users, num: "3+", label: "Certifications", accent: "text-zinc-300" },
                  ].map(({ icon: Icon, num, label, accent }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 rounded-2xl bg-white/[0.05] p-3 backdrop-blur-sm ring-1 ring-white/[0.07] transition-colors hover:bg-white/[0.09]"
                    >
                      <Icon className={`h-3.5 w-3.5 ${accent}`} />
                      <p className={`text-base font-bold ${accent}`}>{num}</p>
                      <p className="text-[9px] font-medium uppercase tracking-wide text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

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
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
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

            {/* Rating badge top */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl border border-zinc-100 bg-white px-4 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-zinc-800">5.0 Rating</span>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}