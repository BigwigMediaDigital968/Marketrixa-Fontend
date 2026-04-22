"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MousePointer2,
  BarChart3,
  PenTool,
} from "lucide-react";

// Fix for the Easing error: use 'as const' to define the tuple
const E = [0.22, 1, 0.36, 1] as const;

const ContentHero: React.FC = () => {
  return (
    <section className="relative py-24 w-full flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />
      <div className="bg-noise absolute inset-0 z-0" />

      {/* Brand Glow Orbs */}
      <div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "var(--brand-orange)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- Left Column: Text Content --- */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: E }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#f26522]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#f26522]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                Content Marketing Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-4 tracking-normal mb-8"
            >
              Turn Words into <br />
              <span className="text-[#f26522]">Growth Engine.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              We don't just write articles, we build authority. Our data-driven
              content strategies are engineered to capture attention and convert
              strangers into brand advocates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-between lg:justify-start gap-4"
            >
              <a
                href="#strategy"
                className="btn-primary w-full sm:w-auto group"
              >
                Build My Strategy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all w-full sm:w-auto font-semibold">
                View Case Studies
              </button> */}
            </motion.div>
          </div>

          {/* --- Right Column: Image & Floating Content --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: E }}
            className="relative"
          >
            {/* CRITICAL FIX: 
                - !overflow-visible: Overrides the premium-card default to show floating badges
                - relative z-10: Established stacking context
            */}
            <div className="premium-card !overflow-visible p-3 md:p-4 aspect-[4/3] flex flex-col relative z-10">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Gradient Overlay to blend with brand colors */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000]/60 via-transparent to-[#f26522]/10" />
              </div>

              {/* FLOATING BADGE: CTR Stat (Top Right) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 glass p-4 rounded-2xl border-[#f26522]/40 shadow-[0_20px_50px_rgba(242,101,34,0.3)] z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <MousePointer2 className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-[10px] uppercase text-white/40 font-bold tracking-widest">
                      CTR Growth
                    </p>
                    <p className="text-xl font-bold text-white">+148%</p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING BADGE: Published Assets (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-4 md:left-12 glass p-5 rounded-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#f26522] rounded-xl shadow-[0_0_15px_rgba(242,101,34,0.4)]">
                    <PenTool className="w-5 h-5 text-black" />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-[10px] uppercase text-white/40 font-bold tracking-widest">
                      Published Assets
                    </p>
                    <p className="text-2xl font-bold text-white">1.2k+</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Floating Icon: Analysis */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 right-6 glass w-12 h-12 rounded-full flex items-center justify-center border-[#f26522]/20 z-30"
              >
                <BarChart3 className="w-5 h-5 text-[#f26522]" />
              </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -inset-6 border border-[#f26522]/10 rounded-[3rem] z-0 rotate-3 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentHero;
