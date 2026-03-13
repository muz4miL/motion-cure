"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

// --- Sub-Component: Custom Video Player ---
// Handles the overlay logic and responsive styling
const VideoPlayer = ({
  src,
  aspectRatio,
  roundedClass,
  title,
  description,
  maxWClass = "max-w-full",
}: {
  src: string;
  aspectRatio: string;
  roundedClass: string;
  title: string;
  description: string;
  maxWClass?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      // Hide overlay slightly after playing, show immediately on pause
      setShowOverlay(!isPlaying ? false : true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling play when clicking volume
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle overlay visibility on video end
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlay(true);
    };
    
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex w-full flex-col ${maxWClass}`}
    >
      <div
        onClick={togglePlay}
        className={`group relative w-full cursor-pointer overflow-hidden ${aspectRatio} ${roundedClass} border border-white/60 bg-zinc-900 shadow-[0_18px_44px_rgba(15,23,42,0.24)]`}
      >
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          muted={isMuted}
          playsInline
          loop
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.22),transparent_55%)]" />

        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-500 ${
            showOverlay ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
            {isPlaying ? (
              <Pause className="h-7 w-7 text-slate-800" />
            ) : (
              <Play className="ml-1 h-7 w-7 text-slate-800" />
            )}
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 rounded-full bg-white/85 p-2 text-slate-800 opacity-0 transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 md:p-5">
        <h3 className="text-sm font-semibold tracking-tight text-white md:text-base">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default function InsideTheClinic() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-zinc-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            Real Treatments. Proven Results.
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Inside the Clinic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            An exclusive look at our therapy techniques and patient consultations.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-white/[0.07] bg-white/[0.03] p-5 shadow-[0_14px_44px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-7 lg:p-9">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="w-full flex-shrink-0 lg:w-auto">
            <VideoPlayer
              src="/video1.mp4"
              aspectRatio="aspect-[9/16]"
              roundedClass="rounded-[2rem]"
              maxWClass="mx-auto max-w-[220px] md:max-w-[250px] lg:max-w-[240px]"
              title="Mobile Assessment"
              description="A close-up look at our range-of-motion assessment techniques performed by our senior physiotherapist."
            />
            </div>

            <div className="w-full flex-grow lg:max-w-[660px]">
            <VideoPlayer
              src="/video2.mp4"
              aspectRatio="aspect-video"
              roundedClass="rounded-[1.8rem]"
              title="Consultation Room"
              description="Experience the patient journey from initial consultation to diagnosis in our state-of-the-art facility."
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
