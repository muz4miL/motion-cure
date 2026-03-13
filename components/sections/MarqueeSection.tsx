"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "PPTA", logo: "/ppta2.png" },
  { name: "Allied Health", logo: "/alliedHealth.png" },
  { name: "Khyber Health", logo: "/KhyberHealth.png" },
];

const ClientLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="mx-16 flex shrink-0 select-none items-center justify-center">
    <img
      src={logo}
      alt={name}
      className="h-12 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 brightness-0 invert md:h-14"
      draggable={false}
    />
  </div>
);

export default function MarqueeSection() {
  const items = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden py-14 bg-zinc-950"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      ref={ref}
    >
      <h3
        className="mb-10 text-center font-sans text-[10px] uppercase tracking-[0.5em] text-zinc-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        Trusted by Industry Leaders
      </h3>

      <div
        className="relative"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      >
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32"
          style={{ background: "linear-gradient(to right, #09090b, transparent)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32"
          style={{ background: "linear-gradient(to left, #09090b, transparent)" }}
        />

        <div className="animate-marquee flex items-center whitespace-nowrap">
          {items.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
