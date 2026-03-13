"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col items-center"
    >
      {/* Frosted pill container for always-visible sidebar */}
      <div className="flex flex-col items-center rounded-full border border-zinc-200/80 bg-white/80 px-2.5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        {/* Top line */}
        <div className="mb-3 h-6 w-px bg-gradient-to-b from-transparent to-zinc-300/70" />

        <div className="flex flex-col items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative flex items-center"
              >
                {/* Tooltip label */}
                <AnimatePresence>
                  {hoveredItem === item.href && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-6 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-700 shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.div
                  animate={
                    isActive
                      ? { scale: 1.35, backgroundColor: "#f59e0b" }
                      : { scale: 1, backgroundColor: "transparent" }
                  }
                  transition={{ duration: 0.3 }}
                  className={`relative h-2.5 w-2.5 rounded-full border-2 transition-colors duration-300 ${
                    isActive
                      ? "border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.55)]"
                      : "border-zinc-400 group-hover:border-amber-400"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-amber-400/40" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom line */}
        <div className="mt-3 h-6 w-px bg-gradient-to-b from-zinc-300/70 to-transparent" />
      </div>

      {/* WhatsApp quick-action */}
      <motion.a
        href="https://wa.me/923429255379"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onMouseEnter={() => setHoveredItem("wa")}
        onMouseLeave={() => setHoveredItem(null)}
        className="group relative mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all hover:border-amber-300 hover:shadow-[0_4px_20px_rgba(245,158,11,0.18)]"
      >
        <AnimatePresence>
          {hoveredItem === "wa" && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-11 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-700 shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
            >
              WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
        <svg
          className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-amber-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
