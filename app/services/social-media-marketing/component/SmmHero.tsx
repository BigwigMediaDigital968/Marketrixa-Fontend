"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ChevronRight,
  Home,
  ArrowRight,
  Play,
  Share2,
  Sparkles,
  Heart,
} from "lucide-react";
import Link from "next/link";

const SmmHero: React.FC = () => {
  // Container variants for staggered entrance
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

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-16 pb-12">
      {/* Brand Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F26522]/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />

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
            {/* <motion.nav
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
              <span className="text-[#F26522] font-medium">
                Social Media Experts
              </span>
            </motion.nav> */}

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
              <Sparkles size={14} className="text-[#F26522]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                Data-Driven Social Dominance
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black text-white"
            >
              Own the Social Conversation in
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] via-orange-400 to-white pe-5">
                {" "}
                Ahmedabad
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
            >
              Marketrixa is the social media marketing agency in Ahmedabad that
              businesses trust to build powerful brand presences, attract the
              right audience, and turn engagement into consistent, measurable
              revenue.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 pt-4"
            >
              <Link
                href="/contact"
                className="relative group overflow-hidden bg-[#F26522] text-white px-8 py-3 rounded-xl font-bold flex items-center cursor-pointer space-x-3 transition-all active:scale-95 shadow-[0_10px_30px_-10px_rgba(242,101,34,0.5)]"
              >
                <span className="relative z-10">Go Viral Now</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
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
                  src="/service/social-media-hero.png"
                  alt="Social Media Engagement"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dynamic Badge - Engagement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white/[0.08] backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F26522]/20 rounded-2xl flex items-center justify-center">
                    <Heart
                      className="text-[#F26522] fill-[#F26522] animate-pulse"
                      size={24}
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">+240%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Avg. Engagement
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card Overlay - Growth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -top-10 -right-4 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/10 p-5 rounded-2xl hidden xl:block"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] font-bold text-white/60 uppercase">
                      Reach
                    </span>
                    <Share2 size={12} className="text-[#F26522]" />
                  </div>
                  <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
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

export default SmmHero;
