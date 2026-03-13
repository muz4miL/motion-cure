"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-amber-200/30 bg-black/90 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-amber-300/80 bg-black/70 shadow-[0_0_22px_rgba(251,191,36,0.24)]">
              <Image
                src="/logo.png"
                alt="The Motion Cure logo"
                width={48}
                height={48}
                sizes="48px"
                priority
                quality={100}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Motion Cure
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-300 ${
                  pathname === link.href ? "text-amber-400" : "text-amber-100/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923429255379"
              className="hidden rounded-full border border-amber-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 transition-colors hover:border-amber-300 hover:text-amber-200 md:block"
            >
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-black/80 backdrop-blur-2xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-3xl font-bold tracking-tight transition-colors ${
                      pathname === link.href ? "text-amber-400" : "text-white hover:text-amber-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://wa.me/923429255379"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-900"
              >
                WhatsApp Us
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
