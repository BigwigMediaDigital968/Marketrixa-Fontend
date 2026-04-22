"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, BarChart3, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

// Standard Easing from previous components
const E = [0.22, 1, 0.36, 1] as const;

const EmailHero: React.FC = () => {
  return (
    <section className="relative py-14 w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- Left Content: Text --- */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: E }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#f26522]/20 mb-6"
            >
              <Zap className="w-4 h-4 text-[#f26522]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                Automated Revenue Engines
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Ownership of your <br />
              <span className="text-[#f26522]">Audience.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              Stop renting space on social media. Build a direct line to your
              customers with data-backed email strategies that drive consistent
              **20x higher ROI** than any other channel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto group whitespace-nowrap"
              >
                Build My Strategy
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Social Proof / Trust Marks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex items-center gap-6 text-white/30 hidden md:flex"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  99.9% Deliverability
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-xs uppercase font-bold tracking-widest">
                  ESP Agnostic
                </span>
              </div>
            </motion.div>
          </div>

          {/* --- Right Visual: Image + Floating Content --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: E }}
            className="relative"
          >
            <div className="premium-card !overflow-visible aspect-[5/4] p-3 md:p-4 relative z-10 flex items-center justify-center">
              {/* Main Image Layer */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-white/5 shadow-inner">
                {/* Relatable image - e.g., a dashboard or campaign analytics screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Email Marketing Analytics Dashboard"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Subtle Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000]/60 via-transparent to-[#f26522]/10" />
              </div>
            </div>

            {/* Badge 1: Open Rate Stat (Top Right) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-4 md:-right-12 glass p-6 rounded-[2rem] border-[#f26522] border shadow-2xl z-30 whitespace-nowrap"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl border border-white/55">
                  <BarChart3 className="w-5 h-5 text-[#f26522]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/60 font-bold tracking-widest">
                    Avg. Open Rate
                  </p>
                  <p className="text-4xl font-black text-white tracking-tighter">
                    42.8%
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-[#f26522] font-medium tracking-wide">
                +11.2% versus industry standard
              </p>
            </motion.div>

            {/* Badge 2: Revenue Impact (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-4 md:-left-12 glass p-5 md:p-6 rounded-[2rem] border-white/10 shadow-2xl z-30 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f26522] text-black flex items-center justify-center shadow-lg shadow-[#f26522]/20">
                <TrendingUp size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Quarterly Growth
                </p>
                <p className="text-2xl font-bold text-white tracking-tight">
                  **$18,450.00**{" "}
                  <span className="font-light text-white/50 text-base">
                    Attributed
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Subtle Middle Icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -left-6 glass w-12 h-12 rounded-full flex items-center justify-center border-white/10 z-30 hidden md:flex"
            >
              <Zap className="w-5 h-5 text-[#f26522]" />
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute -inset-8 border border-white/5 rounded-full -z-10 animate-spin-slow opacity-20 pointer-events-none" />
            <div className="absolute -inset-16 border border-[#f26522]/5 rounded-full -z-20 -rotate-12 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailHero;
