import Image from "next/image";
import { navigationLinks } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-amber-200/30 bg-black/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a href="#" className="inline-flex items-center gap-3 text-white">
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
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-amber-100/90 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/923001234567"
          className="rounded-full border border-amber-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 transition-colors hover:border-amber-300 hover:text-amber-200"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
