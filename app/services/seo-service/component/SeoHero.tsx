"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight, Home, ArrowRight, Play } from "lucide-react";

const SeoHero: React.FC = () => {
  // Fixed variants with literal type assertions to prevent TS errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 25,
        delay: 0.4,
      },
    },
  };

  // Fixed the floating animation by using mutable arrays for keyframes
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const, // Critical fix for the "string is not assignable to Easing" error
    },
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-16 pb-12">
      {/* Brand Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F26522]/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM30 24c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM6 0c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM54 0c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 md:px-30 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={itemVariants}
              className="flex items-center space-x-2 text-sm"
            >
              <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Home size={14} className="mr-1" />
                <span>Home</span>
              </div>
              <ChevronRight size={14} className="text-gray-600" />
              <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <span>Services</span>
              </div>
              <ChevronRight size={14} className="text-gray-600" />
              <span className="text-[#F26522] font-medium">SEO Experts</span>
            </motion.nav>

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26522] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F26522]"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                Next-Gen Search Engine Optimization
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl xl:text-6xl font-black text-white leading-[0.95] tracking-tight"
            >
              Scale Your
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] via-orange-400 to-white">
                Visibility.
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
            >
              We leverage advanced analytics and data-driven insights to boost
              your search rankings. Transform your digital presence with SEO
              that actually converts.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 pt-4"
            >
              <button className="relative group overflow-hidden bg-[#F26522] text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-3 transition-all active:scale-95 shadow-[0_10px_30px_-10px_rgba(242,101,34,0.5)]">
                <span className="relative z-10">Start Growing</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="group flex items-center space-x-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white font-medium backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F26522] transition-colors">
                  <Play size={16} fill="white" />
                </div>
                <span>Strategy Call</span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div animate={floatingAnimation} className="relative z-10">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                <img
                  src="/img-4.png"
                  alt="Data Dashboard"
                  className="w-full h-auto opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Dynamic Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white/[0.08] backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F26522]/20 rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#F26522] rounded-lg animate-pulse" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">Top 1%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Industry Ranking
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-10 -right-4 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/10 p-5 rounded-2xl hidden xl:block"
              >
                <div className="space-y-3">
                  <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ delay: 1.5, duration: 1.5 }}
                      className="h-full bg-[#F26522]"
                    />
                  </div>
                  <div className="w-24 h-2 bg-white/10 rounded-full" />
                  <div className="w-28 h-2 bg-white/10 rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F26522]/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
