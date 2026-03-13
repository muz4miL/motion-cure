import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import ClinicVideo from "@/components/sections/ClinicVideo";
import { ConditionsWeTreat } from "@/components/sections/ConditionsWeTreat";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Contact from "@/components/sections/contact";
import Reviews from "@/components/sections/Reviews";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export default function Page() {
  return (
    <main className={`${jakarta.variable} ${jakarta.className} min-h-screen bg-white text-zinc-900 antialiased`}>
      <Navbar />
      <Hero />
      <MarqueeSection />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <ConditionsWeTreat />
      </div>
      <ClinicVideo />
      <Reviews />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}