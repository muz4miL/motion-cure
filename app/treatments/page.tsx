"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Activity,
  Brain,
  Dumbbell,
  Accessibility,
  Waves,
  Footprints,
  Bone,
  MonitorSmartphone,
  HandMetal,
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
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const treatments = [
  {
    icon: Waves,
    title: "Low Back Pain & Sciatica",
    description:
      "Targeted manual therapy and movement rehabilitation to relieve deep nerve pain, reduce inflammation, and restore full spinal mobility.",
    color: "from-cyan-100 to-sky-50",
    iconColor: "text-cyan-600",
    borderHover: "hover:border-cyan-200",
  },
  {
    icon: Activity,
    title: "Neck, Shoulder & Joint Pain",
    description:
      "Posture-focused treatment combining mobilization, stretching, and strengthening to eliminate chronic stiffness and recurring discomfort.",
    color: "from-amber-100 to-orange-50",
    iconColor: "text-amber-600",
    borderHover: "hover:border-amber-200",
  },
  {
    icon: Bone,
    title: "Knee & Hip Pain",
    description:
      "Comprehensive assessment and targeted therapy for osteoarthritis, ligament strains, and post-injury rehabilitation of weight-bearing joints.",
    color: "from-violet-100 to-purple-50",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-200",
  },
  {
    icon: Dumbbell,
    title: "Sports Injuries",
    description:
      "Performance-led recovery plans for sprains, strains, and muscle tears. From diagnosis to full return-to-play readiness with prevention strategies.",
    color: "from-rose-100 to-pink-50",
    iconColor: "text-rose-600",
    borderHover: "hover:border-rose-200",
  },
  {
    icon: Brain,
    title: "Stroke & Spinal Cord Rehab",
    description:
      "Evidence-based neuro-physiotherapy to rebuild strength, restore balance, and improve daily function after stroke or spinal cord injuries.",
    color: "from-emerald-100 to-teal-50",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-200",
  },
  {
    icon: Accessibility,
    title: "Post-Surgical Rehabilitation",
    description:
      "Structured recovery programs after orthopedic and neurological surgeries to accelerate healing, prevent complications, and regain confidence.",
    color: "from-blue-100 to-indigo-50",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    icon: Footprints,
    title: "Plantar Fasciitis",
    description:
      "Specialized foot therapy combining manual stretches, ultrasound, taping techniques, and orthotic guidance to eliminate chronic heel pain.",
    color: "from-lime-100 to-green-50",
    iconColor: "text-lime-600",
    borderHover: "hover:border-lime-200",
  },
  {
    icon: HandMetal,
    title: "Arthritis Management",
    description:
      "Gentle yet effective joint mobilization and therapeutic exercises designed to reduce inflammation, preserve mobility, and improve quality of life.",
    color: "from-orange-100 to-amber-50",
    iconColor: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
  {
    icon: MonitorSmartphone,
    title: "Postural & Ergonomic Issues",
    description:
      "Comprehensive posture analysis with corrective exercise programs for desk workers, students, and professionals suffering from modern lifestyle pain.",
    color: "from-slate-100 to-zinc-50",
    iconColor: "text-slate-600",
    borderHover: "hover:border-slate-200",
  },
];

export default function TreatmentsPage() {
  return (
    <main
      className={`${jakarta.variable} ${jakarta.className} min-h-screen bg-white text-zinc-900 antialiased`}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#FAFAF9] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-amber-100/40 blur-[150px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-zinc-200/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Activity className="h-3.5 w-3.5" />
              Our Treatments
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
              Specialized Recovery Plans.{" "}
              <span className="text-amber-600">Tailored to your pain.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
              From chronic back pain to post-surgical rehab — every treatment
              plan is personalized, evidence-based, and designed for lasting
              recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Treatments Grid ── */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex items-end justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
                Conditions We Treat
              </h2>
              <p className="mt-2 max-w-md text-sm text-zinc-500">
                Tap on any condition to learn more about our approach.
              </p>
            </div>
            <p className="hidden text-sm font-medium text-zinc-400 md:block">
              {treatments.length} specializations
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {treatments.map((treatment) => {
              const Icon = treatment.icon;
              return (
                <motion.article
                  key={treatment.title}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className={`group relative cursor-pointer rounded-[2rem] border border-zinc-100 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out hover:shadow-[0_16px_48px_rgb(0,0,0,0.08)] ${treatment.borderHover}`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${treatment.color} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-5 w-5 ${treatment.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-zinc-900">
                    {treatment.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-500">
                    {treatment.description}
                  </p>

                  {/* CTA on hover */}
                  <a
                    href="https://wa.me/923429255379?text=Hi%2C%20I%27d%20like%20to%20book%20treatment%20for%3A%20"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Book this treatment
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Subtle gradient on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-b from-transparent to-amber-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden bg-zinc-900 py-20">
        {/* Radial glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-amber-500/8 blur-[100px]" />
          <div className="absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-amber-400/5 blur-[120px]" />
          {/* Dot texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Free Assessment
            </span>
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Not sure which treatment<br className="hidden md:block" /> is right for you?
            </h3>
            <p className="mx-auto mb-8 max-w-md text-sm text-zinc-400 leading-relaxed">
              Dr. Sadeeq will personally assess your condition and design a
              recovery plan tailored to your needs. No obligation, just expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-300 hover:shadow-[0_8px_28px_rgba(251,191,36,0.35)]"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/923429255379"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
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
