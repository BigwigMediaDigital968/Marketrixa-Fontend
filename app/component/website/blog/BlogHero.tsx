"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * BLOG HERO COMPONENT
 * Features:
 * - 70vh Fixed Height
 * - Brand Theme Overlay (#F26522)
 * - Centered Typography with staggered animations
 * - Responsive layout for all devices
 */

const BlogHero = () => {
  const brandOrange = "#F26522";

  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000"
          alt="Blog Background"
          className="w-full h-full object-cover opacity-50 grayscale"
        />

        {/* Dynamic Overlays */}
        {/* 1. Dark base overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 2. Brand Color Tint Overlay (Subtle Gradient) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${brandOrange} 0%, transparent 70%)`,
          }}
        />

        {/* 3. Bottom Fade to match page content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Top Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#F26522]" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#F26522]">
              Marketrixa Insights
            </span>
            <div className="w-8 h-[1px] bg-[#F26522]" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Thoughts{" "}
            <span
              className="italic"
              style={{ WebkitTextStroke: "1px white", color: "transparent" }}
            >
              &
            </span>{" "}
            <span style={{ color: brandOrange }}> Perspective</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Dive into our collection of expert analysis, digital trends, and
            strategic advice designed to give your business the competitive
            edge.
          </motion.p>
        </motion.div>

        {/* Decorative Scroll Indicator Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#F26522] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
