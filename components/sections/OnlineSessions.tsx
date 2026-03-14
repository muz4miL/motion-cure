"use client";

import { motion } from "framer-motion";
import { Video, MonitorSmartphone, Globe, CalendarCheck, ArrowRight, MessageCircle, Wifi } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 1-on-1 Video Sessions",
    desc: "Real-time consultation with Dr. Sadeeq — diagnosis, guided exercises, and progress reviews from wherever you are.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works on Any Device",
    desc: "Join from your phone, tablet, or laptop. No special software needed — just a stable internet connection.",
  },
  {
    icon: Globe,
    title: "Available Worldwide",
    desc: "Overseas Pakistanis, international patients — get expert physiotherapy care without borders.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    desc: "Book sessions around your time zone and daily routine. Morning, evening — we accommodate your schedule.",
  },
];

export default function OnlineSessions() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-28">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-[100px]" />
      </div>

      {/* Grid decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Wifi className="h-3.5 w-3.5" />
            Can&apos;t Visit in Person?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Online Sessions &amp; Classes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
            Physical sessions not possible? No problem. Get the same expert physiotherapy care
            from the comfort of your home — anywhere in the world.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                <Icon className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-lg font-bold text-white">Ready to start your online session?</p>
            <p className="mt-1 text-sm text-zinc-400">Book via WhatsApp — we&apos;ll schedule a time that works for you.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="https://wa.me/923429255379?text=I%20would%20like%20to%20book%20an%20online%20physiotherapy%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-300 hover:shadow-[0_8px_24px_rgba(251,191,36,0.3)]"
            >
              <MessageCircle className="h-4 w-4" />
              Book Online Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
