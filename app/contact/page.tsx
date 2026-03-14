"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { useState, FormEvent } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const conditionOptions = [
  "Low Back Pain & Sciatica",
  "Neck & Shoulder Pain",
  "Sports Injuries",
  "Stroke & Neurological Rehab",
  "Post-Surgical Rehab",
  "Joint Pain & Arthritis",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", condition: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main
      className={`${jakarta.variable} ${jakarta.className} min-h-screen bg-zinc-950 text-white antialiased`}
    >
      <Navbar />

      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[150px]" />
          <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-400/4 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          {/* Back link */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </motion.a>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Left: Info + Logo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Logo block */}
              <div className="mb-10 flex items-center gap-4">
                <span className="relative h-16 w-16 overflow-hidden rounded-2xl border border-amber-400/30 bg-zinc-900 shadow-[0_0_30px_rgba(251,191,36,0.15)]">
                  <Image
                    src="/logo.png"
                    alt="The Motion Cure"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain p-1"
                  />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-wide text-white">
                    The Motion Cure
                  </h3>
                  <p className="text-xs text-zinc-500">Physiotherapy Clinic · Peshawar</p>
                </div>
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Get in Touch
                <br />
                <span className="text-amber-400">with Us.</span>
              </h1>

              <p className="mb-10 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                Have a question or want to book a session? Fill out the form and
                our team will respond within 24 hours.
              </p>

              {/* Contact info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <Phone className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">0342-9255379</p>
                    <p className="text-xs text-zinc-500">Call or WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <MapPin className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Sami Tower Block A, 4th Floor, Clinic #411</p>
                    <p className="text-xs text-zinc-500">Near Hayatabad PDA Toll Plaza, Ring Road, Peshawar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <Clock className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Mon - Sat: 9 AM – 9 PM</p>
                    <p className="text-xs text-zinc-500">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <Mail className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">themotioncure@gmail.com</p>
                    <p className="text-xs text-zinc-500">Email us anytime</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                      <CheckCircle2 className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="mb-6 max-w-sm text-sm text-zinc-400">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-white md:text-2xl">
                        Send us a Message
                      </h2>
                      <p className="mt-1 text-xs text-zinc-500">
                        All fields marked with * are required
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="03XX-XXXXXXX"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          Condition / Service
                        </label>
                        <select
                          name="condition"
                          value={formData.condition}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20"
                        >
                          <option value="" className="bg-zinc-900">
                            Select a condition
                          </option>
                          {conditionOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-zinc-900">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your condition or any questions you have..."
                        className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-400">
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </p>
                    )}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-300 disabled:opacity-60"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <motion.a
                        href="https://wa.me/923429255379"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                      >
                        <MessageCircle className="h-4 w-4 text-amber-400" />
                        WhatsApp
                      </motion.a>
                    </div>

                    <p className="pt-1 text-center text-[10px] text-zinc-600">
                      Your information is secure and will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
