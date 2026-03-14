"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const treatments = [
  "Low Back Pain & Sciatica",
  "Neck & Shoulder Pain",
  "Knee & Hip Pain",
  "Sports Injuries",
  "Stroke & Spinal Rehab",
  "Post-Surgical Rehab",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950">

      {/* ── Watermark text — behind everything ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-[0.18em] text-white/[0.035]"
        style={{ letterSpacing: "0.22em" }}
      >
        Motion Cure
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-amber-400/40 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Image src="/logo.png" alt="Motion Cure" width={44} height={44} className="object-contain" />
              </span>
              <span className="text-xl font-bold uppercase tracking-widest text-white">
                Motion Cure
              </span>
            </div>

            <p className="mb-7 max-w-xs text-[13px] leading-relaxed text-zinc-400">
              Peshawar&apos;s leading physiotherapy clinic. Expert, evidence-based care led by{" "}
              <span className="text-zinc-200">Dr. Sadeeq Ur Rehman, DPT</span> — restoring movement
              without surgery.
            </p>

            <div className="space-y-3">
              <a href="tel:03429255379" className="group flex items-center gap-3 text-[13px] text-zinc-400 transition-colors hover:text-amber-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-amber-500/10 group-hover:ring-amber-400/30">
                  <Phone className="h-3.5 w-3.5 text-amber-500" />
                </span>
                0342-9255379
              </a>
              <a href="mailto:themotioncure@gmail.com" className="group flex items-center gap-3 text-[13px] text-zinc-400 transition-colors hover:text-amber-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-amber-500/10 group-hover:ring-amber-400/30">
                  <Mail className="h-3.5 w-3.5 text-amber-500" />
                </span>
                themotioncure@gmail.com
              </a>
              <div className="flex items-start gap-3 text-[13px] text-zinc-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                </span>
                <span>Hayatabad Toll Plaza, Sami Tower,<br />4th Floor, Peshawar</span>
              </div>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Treatments
            </h4>
            <ul className="space-y-3.5">
              {treatments.map((t) => (
                <li key={t}>
                  <Link
                    href="/treatments"
                    className="group flex items-center gap-2 text-[13px] text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-zinc-700 transition-all group-hover:w-6 group-hover:bg-amber-500" />
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13px] text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 bg-zinc-700 transition-all group-hover:w-6 group-hover:bg-amber-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Hours */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Working Hours
            </h4>
            <div className="space-y-3">
              <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/[0.07]">
                <div className="mb-1 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Mon – Sat</span>
                </div>
                <p className="text-sm font-semibold text-white">9:00 AM – 9:00 PM</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/[0.07]">
                <div className="mb-1 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-zinc-600" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Sunday</span>
                </div>
                <p className="text-sm font-semibold text-amber-500">Closed</p>
              </div>

              <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-emerald-500/10 px-4 py-3 ring-1 ring-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[12px] font-semibold text-emerald-400">Clinic Currently Open</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-[12px] text-zinc-500 md:flex-row md:px-12 lg:px-24">
          <p>© {new Date().getFullYear()} The Motion Cure Physiotherapy Clinic. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/6 blur-[100px]" />
    </footer>
  );
}
