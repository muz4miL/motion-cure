"use client";

import { motion, useInView, Variants } from "framer-motion";
import { Star, Quote, Sparkles, Award, Heart, Shield } from "lucide-react";
import { useRef, useState } from "react";

interface Review {
  name: string;
  age: number;
  location: string;
  condition: string;
  review: string;
  rating: number;
  treatmentTime: string;
  imageInitials: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

const reviews: Review[] = [
  {
    name: "Tariq K.",
    age: 54,
    location: "Peshawar",
    condition: "Severe Sciatica & Lower Back Pain",
    review: "I was struggling to walk or sit for more than 10 minutes. Dr. Sadeeq's manual therapy worked wonders. Within a week of evidence-based treatment, my mobility is back, completely without surgery.",
    rating: 5,
    treatmentTime: "2 weeks",
    imageInitials: "TK"
  },
  {
    name: "Fatima R.",
    age: 42,
    location: "University Town",
    condition: "Post-Surgical Rehab (Knee)",
    review: "Finding a comfortable and professional environment was my top priority. The clinic is exceptional, and having dedicated female staff for my sessions ensured complete privacy and peace of mind. Truly a safe space for women.",
    rating: 5,
    treatmentTime: "6 weeks",
    imageInitials: "FR"
  },
  {
    name: "Usman A.",
    age: 29,
    location: "Cantt",
    condition: "Sports Injury (Side Strain)",
    review: "Picked up a bad side strain that kept me off the pitch. The targeted recovery plan and kinesio-taping got me back to playing condition much faster than I expected. Truly expert care.",
    rating: 5,
    treatmentTime: "3 weeks",
    imageInitials: "UA"
  }
];

const stats: Stat[] = [
  { value: "500+", label: "Happy Patients", icon: Heart },
  { value: "98%", label: "Recovery Rate", icon: Award },
  { value: "100%", label: "Privacy Focused", icon: Shield },
];

const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  }
};

const headerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const badgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1
    }
  }
};

const underlineVariants: Variants = {
  hidden: { 
    width: 0 
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.2,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-28 bg-zinc-950 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="reviews"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }} />
      </div>
      
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-400/6 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-zinc-400 uppercase">
              Patient Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight max-w-3xl leading-[1.1]">
            Real stories from{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-300">real patients</span>
              <motion.span 
                variants={underlineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute bottom-1 left-0 h-3 bg-amber-400/20 -z-0"
              />
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-500 text-base max-w-md mt-6 font-light tracking-wide"
          >
            Every journey is unique. Here&apos;s what our patients have to say about their recovery experience.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-12 md:gap-20 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-amber-400" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-light text-white">{stat.value}</div>
                <div className="text-[11px] font-medium text-zinc-500 tracking-wider mt-1.5 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`
                relative bg-zinc-900 p-7 rounded-[2rem] 
                border border-white/[0.07]
                transition-all duration-500 ease-out
                ${hoveredIndex === index ? 'shadow-[0_24px_50px_rgba(0,0,0,0.4)] border-amber-400/20' : 'shadow-[0_4px_20px_rgba(0,0,0,0.2)]'}
              `}>
                {/* Quote Icon */}
                <Quote 
                  className="absolute bottom-6 right-6 w-10 h-10 text-white/5 transition-all duration-500 group-hover:text-amber-400/10" 
                  strokeWidth={0.5}
                />

                {/* Patient Avatar */}
                <motion.div 
                  animate={{ 
                    scale: hoveredIndex === index ? 1.05 : 1,
                    backgroundColor: hoveredIndex === index ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5"
                >
                  <span className="text-base font-semibold text-zinc-300">{review.imageInitials}</span>
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.3 }}
                      animate={{ 
                        opacity: i < review.rating ? 1 : 0.15,
                        scale: hoveredIndex === index && i < review.rating ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Star 
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'
                        }`} 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="mb-7">
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </blockquote>

                {/* Patient Info */}
                <div className="border-t border-white/[0.06] pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-white text-sm">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        {review.age} yrs · {review.location}
                      </p>
                    </div>
                    <motion.div 
                      animate={{ 
                        backgroundColor: hoveredIndex === index ? 'rgb(251,191,36)' : 'rgb(63,63,70)'
                      }}
                      className="w-2 h-2 rounded-full"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                      {review.treatmentTime}
                    </span>
                    <span className="text-[10px] font-medium text-zinc-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                      {review.condition}
                    </span>
                  </div>
                </div>
              </div>

              {/* Glow on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-px bg-gradient-to-b from-amber-400/10 to-transparent rounded-[2rem] -z-10 blur-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-20 pt-8 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zinc-600" strokeWidth={1.5} />
            <span className="text-xs text-zinc-600 tracking-wide">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-zinc-600" strokeWidth={1.5} />
            <span className="text-xs text-zinc-600 tracking-wide">Female Staff Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-zinc-600" strokeWidth={1.5} />
            <span className="text-xs text-zinc-600 tracking-wide">Certified Therapists</span>
          </div>
        </motion.div>

        {/* CTA Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-zinc-600">
            Ready to start your recovery journey?{' '}
            <a 
              href="#contact" 
              className="text-amber-400 border-b border-amber-400/40 hover:border-amber-400 transition-colors duration-300 pb-0.5 font-medium"
            >
              Book your consultation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}