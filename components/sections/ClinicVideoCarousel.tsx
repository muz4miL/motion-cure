"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, ArrowLeft, ArrowRight } from "lucide-react";

const MagicalVideoCard = ({
  src,
  title,
  description,
  aspectClass,
}: {
  src: string;
  title: string;
  description: string;
  aspectClass: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowOverlay(isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlay(true);
    };
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div
        onClick={togglePlay}
        className={`group relative w-full ${aspectClass} max-w-[320px] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-slate-800 shadow-2xl cursor-pointer md:max-w-[400px] md:rounded-[3rem]`}
      >
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            showOverlay ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/90 shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            {isPlaying ? (
              <Pause className="h-8 w-8 text-slate-800" />
            ) : (
              <Play className="ml-1 h-8 w-8 text-slate-800" />
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold tracking-tight md:text-2xl">{title}</h3>
          <p className="mt-1 text-sm opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ClinicVideoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);

  const slides = [
    {
      src: "/video1.mp4",
      title: "Recovery in Motion",
      description: "Daily treatment success stories",
      aspectClass: "aspect-[9/16]",
    },
    {
      src: "/video2.mp4",
      title: "Expert Consultation",
      description: "One-on-one patient care",
      aspectClass: "aspect-video",
    },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.scrollWidth - container.clientWidth;
    const progress = width > 0 ? scrollLeft / width : 0;

    animate(x, progress);

    const newIndex = Math.round(progress * (slides.length - 1));
    setActiveIndex(newIndex);
  };

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl transition-all duration-1000"
          style={{
            background: "radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-20"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-900 shadow-sm">
            Real Treatments. Proven Results.
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Inside the Clinic
          </h2>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 hidden justify-between px-4 md:flex">
            <button
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              className="pointer-events-auto rounded-full bg-white/80 p-3 text-slate-800 shadow-lg transition hover:bg-white disabled:opacity-30"
              disabled={activeIndex === 0}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scrollTo(Math.min(slides.length - 1, activeIndex + 1))}
              className="pointer-events-auto rounded-full bg-white/80 p-3 text-slate-800 shadow-lg transition hover:bg-white disabled:opacity-30"
              disabled={activeIndex === slides.length - 1}
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth pb-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex w-full flex-shrink-0 snap-center items-center justify-center p-2">
                <MagicalVideoCard
                  src={slide.src}
                  title={slide.title}
                  description={slide.description}
                  aspectClass={slide.aspectClass}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index ? "h-2 w-8 bg-blue-600" : "h-2 w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
