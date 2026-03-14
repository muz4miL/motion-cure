"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle,
  Navigation,
  Calendar,
  CheckCircle2,
  Stethoscope
} from "lucide-react";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    },
  },
};

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 overflow-hidden bg-white"
      id="contact"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-zinc-100/60 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Stethoscope className="w-3.5 h-3.5" />
            Begin Your Recovery Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-5 leading-[1.05]">
            Ready for a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">pain-free life?</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="absolute -bottom-1 left-0 w-full h-4 bg-amber-200/50 -skew-x-3 origin-left -z-0 rounded"
              />
            </span>
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Book your personalized physiotherapy session with Dr. Sadeeq Ur Rehman. 
            Expert care in a comfortable, professional environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-1">10+</div>
                <div className="text-sm text-zinc-400 font-medium">Years Experience</div>
              </div>
              <div className="p-6 bg-zinc-900 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-1">5000+</div>
                <div className="text-sm text-zinc-400 font-medium">Patients Treated</div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="group">
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-amber-200/60 transition-all duration-300 cursor-pointer">
                <div className="w-13 h-13 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-zinc-900 mb-1.5 flex items-center gap-2">
                    Clinic Location
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/50 rounded-full">Open Now</span>
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Sami Tower Block A, 4th Floor, Clinic #411,<br />
                    Near Hayatabad PDA Toll Plaza,<br />
                    Opposite Al-Haram Model Town, Ring Road, Peshawar
                  </p>
                  <button className="mt-3 text-sm font-semibold text-zinc-700 hover:text-zinc-900 flex items-center gap-1 group/btn">
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group">
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-amber-200/60 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-zinc-900 mb-1.5">Contact Us</h4>
                  <p className="text-zinc-800 text-lg font-semibold">0342-9255379</p>
                  <p className="text-sm text-zinc-400 mt-0.5">Available on Call or WhatsApp</p>
                  <div className="flex gap-4 mt-3">
                    <a 
                      href="tel:03429255379" 
                      className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                    <span className="text-zinc-200">|</span>
                    <a 
                      href="https://wa.me/923429255379" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group">
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-zinc-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-amber-200/60 transition-all duration-300">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-200/60 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-zinc-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-zinc-900 mb-2">Working Hours</h4>
                  <div className="space-y-2 text-zinc-500 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Monday – Saturday</span>
                      <span className="font-semibold text-zinc-900">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Privacy highlight */}
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-zinc-50 border border-zinc-200/60 rounded-2xl flex items-start gap-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300"
            >
              <div className="w-11 h-11 bg-amber-50 border border-amber-200/50 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1.5 flex items-center gap-2">
                  Privacy & Comfort Ensured
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Dedicated female staff available for female patients. Your privacy and comfort are our top priorities.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Map & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-full min-h-[600px] bg-zinc-50 rounded-[2rem] border border-zinc-200/60 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0385729557766!2d71.4674!3d34.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911f3c0d6a6f9%3A0x8f8f8f8f8f8f8f8f!2sHayatabad%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(15%) contrast(1.05) saturate(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating CTA Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-6 left-6 right-6 z-10"
              >
                <div className="bg-white/97 backdrop-blur-2xl p-7 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.2)] border border-white/60">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-0.5">Book Your Appointment</h3>
                      <p className="text-zinc-400 text-sm">Fastest response via WhatsApp</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <motion.a 
                      href="https://wa.me/923429255379"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="w-full flex items-center justify-center gap-3 bg-zinc-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-zinc-800 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 group"
                    >
                      <MessageCircle className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                      Message on WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    
                    <motion.a 
                      href="tel:03429255379"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="w-full flex items-center justify-center gap-3 bg-zinc-50 border border-zinc-200 text-zinc-900 px-6 py-4 rounded-xl font-semibold hover:bg-zinc-100 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </motion.a>
                  </div>

                  <div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-center gap-6 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                      Instant Reply
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                      Same Day Booking
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Map Pin */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 10 }}
                className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-full z-10"
              >
                <div className="relative">
                  <div className="w-11 h-11 bg-zinc-900 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-bounce border-2 border-amber-400/60">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 rotate-45 -z-10" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;