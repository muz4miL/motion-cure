"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { motion, Variants, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MarqueeSection from "@/components/sections/MarqueeSection";
import {
  ShieldCheck,
  Heart,
  Languages,
  GraduationCap,
  Stethoscope,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const skills = [
  "Evidence-based physiotherapy",
  "Manual therapy",
  "Electrotherapy",
  "Orthotic management",
  "Neurological rehabilitation",
  "Sports injury recovery",
];

const coreValues = [
  {
    icon: Stethoscope,
    title: "Evidence-Based Care",
    description:
      "Every treatment plan is rooted in the latest medical research and proven protocols. No guesswork — only measurable, data-driven recovery.",
    stat: "5-10",
    statLabel: "Patients recover daily",
  },
  {
    icon: ShieldCheck,
    title: "Non-Surgical Focus",
    description:
      "We believe in restoring movement through hands-on therapy, not operating tables. 100% of our treatment plans are designed to avoid surgery.",
    stat: "100%",
    statLabel: "Non-surgical approach",
  },
  {
    icon: Users,
    title: "Privacy & Female Staff",
    description:
      "Dedicated female physiotherapy staff available for female patients. Your comfort, dignity, and privacy are always our top priority.",
    stat: "24/7",
    statLabel: "Privacy guaranteed",
  },
];

/* ── Animated counter ── */
function AnimatedNumber({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, count, to, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ── Scroll Parallax Portrait ── */
function ScrollParallaxPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const cardOpacity = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={cardOpacity ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative lg:sticky lg:top-28"
    >
      {/* Card frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-zinc-100 shadow-[0_28px_70px_rgba(0,0,0,0.18)]">
        {/* Parallax image — fills card, pinned to left so person always shows */}
        <motion.div
          style={{ y: imageY }}
          className="absolute left-0 top-[-8%] h-[116%] w-full"
        >
          <Image
            src="/sadiq.png"
            alt="Dr. Sadeeq Ur Rehman"
            fill
            className="object-cover object-left-top"
            style={{ objectPosition: "12% 8%" }}
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </motion.div>

        {/* Subtle vignette — darkens edges only, no right-side black strip */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.18)_100%)]" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Corner accents */}
        <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-amber-400/50" />
        <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-amber-400/30" />
      </div>

      {/* DPT badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="absolute -bottom-5 -right-4 rounded-2xl border border-zinc-100 bg-white px-5 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.10)]"
      >
        <p className="text-2xl font-bold text-amber-600">DPT</p>
        <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Certified</p>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute -z-10 left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/15 blur-[80px]" />
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main
      className={`${jakarta.variable} ${jakarta.className} min-h-screen bg-white text-zinc-900 antialiased`}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FAFAF9] py-14 md:py-18">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-100/35 blur-[140px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-zinc-200/25 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.022]" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">

            {/* ── Left: Text ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                About The Motion Cure
              </motion.span>

              <div className="mb-5 space-y-1 overflow-hidden">
                {[
                  { text: "Expertise you", amber: false },
                  { text: "can trust.", amber: false },
                  { text: "Care you deserve.", amber: true },
                ].map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem] ${
                        line.amber ? "text-amber-600" : "text-zinc-900"
                      }`}
                    >
                      {line.text}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mb-8 max-w-sm text-[15px] leading-relaxed text-zinc-500"
              >
                Peshawar&apos;s trusted physiotherapy clinic — delivering compassionate,
                evidence-based recovery led by{" "}
                <span className="font-semibold text-zinc-800">Dr. Sadeeq Ur Rehman, DPT.</span>
              </motion.p>

              {/* Stats row with animated counters */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-wrap gap-8 border-t border-zinc-200/70 pt-7"
              >
                <div>
                  <p className="text-3xl font-bold tabular-nums text-zinc-900">
                    <AnimatedNumber to={5000} suffix="+" duration={2} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Patients Treated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tabular-nums text-zinc-900">
                    <AnimatedNumber to={100} suffix="%" duration={1.4} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Non-Surgical</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tabular-nums text-amber-600">
                    <AnimatedNumber to={3} suffix="+" duration={0.9} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Certifications</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right: Image (smaller) ── */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.14)] ring-1 ring-zinc-200/60">
                <Image
                  src="/abouthero.png"
                  alt="Physiotherapy session at The Motion Cure"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/45 via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-amber-400/60" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-amber-400/60" />
              </div>

              {/* DPT badge */}
              <motion.div
                initial={{ opacity: 0, y: -10, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute -right-3 top-6 rounded-xl border border-zinc-100 bg-white px-4 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
              >
                <p className="text-sm font-bold text-amber-600">DPT</p>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">Certified</p>
              </motion.div>

              {/* Accepting badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-3 bottom-8 flex items-center gap-2.5 rounded-xl border border-zinc-100 bg-white px-3.5 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                <span className="text-[11px] font-semibold text-zinc-800">Accepting patients</span>
              </motion.div>

              {/* Glow */}
              <div className="absolute -z-10 left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-[70px]" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Profile Section ── */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left: Portrait with scroll parallax */}
            <ScrollParallaxPortrait />

            {/* Right: Bio & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                Meet Your Therapist
              </p>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Dr. Sadeeq Ur Rehman
              </h2>
              <p className="mb-6 text-sm font-medium text-amber-600">
                Doctor of Physical Therapy (DPT)
              </p>

              {/* Certifications */}
              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  "Certified Manual Physical Therapist",
                  "Certified Sports Specialist — FIFA",
                  "Certified Kinesiotaping Practitioner",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {cert}
                  </span>
                ))}
              </div>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-zinc-500">
                With extensive clinical experience, Dr. Sadeeq specializes in
                evidence-based physiotherapy — helping patients regain mobility,
                eliminate pain, and return to daily life without surgery. He is
                committed to personalized care and measurable outcomes.
              </p>

              {/* Languages */}
              <div className="mb-8 flex items-center gap-3">
                <Languages className="h-4 w-4 text-zinc-400" />
                <div className="flex gap-2">
                  {["Urdu", "English", "Pashto"].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-10">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/50 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800"
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated orb — same as hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-10 flex h-52 w-full items-center justify-center"
              >
                {/* Outer glow halo */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-300/35 to-amber-400/0 blur-2xl"
                />
                {/* Primary rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute h-36 w-36 rounded-full border-[2.5px] border-amber-400/70 shadow-[0_0_30px_rgba(251,146,60,0.5),inset_0_0_20px_rgba(251,146,60,0.15)]"
                />
                {/* Counter-rotating ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="absolute h-28 w-28 rounded-full border-[1.5px] border-zinc-300/60 shadow-[0_0_20px_rgba(212,212,216,0.3)]"
                />
                {/* Inner accent ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute h-20 w-20 rounded-full border border-amber-300/40 shadow-[0_0_15px_rgba(251,146,60,0.25)]"
                />
                {/* Core sphere */}
                <motion.div
                  animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-16 w-16 rounded-full bg-[radial-gradient(circle_at_40%_30%,#fbbf24_0%,#f59e0b_25%,#d4af37_50%,#92400e_100%)] shadow-[0_0_50px_rgba(251,191,36,0.7),0_0_80px_rgba(217,119,6,0.3),inset_0_10px_20px_rgba(255,255,255,0.2)]"
                >
                  <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.45),rgba(255,255,255,0.1)_20%,transparent_60%)]" />
                </motion.div>
                {/* Floating particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.cos(i * 1.57) * 20, 0],
                      y: [0, Math.sin(i * 1.57) * 20, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="absolute h-1 w-1 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(251,146,60,0.8)]"
                    style={{ left: "50%", top: "50%" }}
                  />
                ))}
                {/* Conic sweep */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute h-44 w-44 rounded-full opacity-30"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(251,146,60,0.3) 0deg, transparent 90deg, rgba(251,146,60,0.3) 180deg)",
                    filter: "blur(10px)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <MarqueeSection />

      {/* ── The Motion Cure Difference ── */}
      <section className="relative bg-[#FAFAF9] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-amber-100/25 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Heart className="h-3.5 w-3.5" />
              What Sets Us Apart
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              The Motion Cure Difference
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-zinc-500">
              Three pillars that make every recovery journey at our clinic
              uniquely effective and deeply personal.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgb(0,0,0,0.08)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/50 bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900">
                    {value.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-500">
                    {value.description}
                  </p>

                  <div className="border-t border-zinc-100 pt-5">
                    <p className="text-2xl font-bold text-amber-600">{value.stat}</p>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                      {value.statLabel}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ready to start your recovery?
            </h3>
            <p className="mx-auto mb-8 max-w-md text-sm text-zinc-400">
              Book a personalized consultation with Dr. Sadeeq Ur Rehman and take
              the first step towards a pain-free life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-300 hover:shadow-[0_8px_24px_rgba(251,191,36,0.3)]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/923429255379"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
