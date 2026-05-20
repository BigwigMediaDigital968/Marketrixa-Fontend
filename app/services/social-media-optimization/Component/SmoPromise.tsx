"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Palette,
  Users,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Activity,
  Award,
} from "lucide-react";
import Image from "next/image";

interface PromiseCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  metric: string;
}

const promises: PromiseCard[] = [
  {
    title: "Consistent Brand Identity Creation",
    desc: "Strong branding consistency helps businesses maintain professional communication and recognizable visual presence across multiple social media platforms.",
    icon: Palette,
    accentColor: "#f26522", // Brand Orange
    metric: "Visual Cohesion",
  },
  {
    title: "Audience Focused Content Strategy",
    desc: "Our Social Media Optimization Service in Ahmedabad improves audience engagement using valuable, creative, and strategically planned content approaches.",
    icon: Users,
    accentColor: "#38bdf8", // Sky Blue
    metric: "Dynamic Reach",
  },
  {
    title: "Organic Social Media Growth",
    desc: "Marketrixa develops growth-focused strategies helping businesses improve visibility, audience trust, engagement quality, and long-term social media performance.",
    icon: TrendingUp,
    accentColor: "#10b981", // Emerald Green
    metric: "Performance Curve",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const SmoPromise: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden text-white">
      {/* Decorative Blur Spheres for Depth */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- PART 1: Build Strong Social Presence --- */}
        <div className="mb-24">
          <div className="max-w-4xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-bold tracking-widest uppercase font-poppins mb-6"
            >
              <Award className="w-4 h-4" />
              Brand Authority
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-outfit mb-6"
            >
              Build Strong <br className="hidden md:block" />
              <span className="text-[#f26522] relative inline-block">
                Social Presence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-400 text-base md:text-xl leading-relaxed font-poppins max-w-4xl text-justify md:text-left"
            >
              Marketrixa is a reliable social media optimization company in
              Ahmedabad helping businesses improve visibility, engagement,
              credibility, and audience relationships effectively.
            </motion.p>
          </div>

          {/* 3-Column Promises Pillars Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {promises.map((promise, index) => {
              const IconComponent = promise.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-md p-8 md:p-10 h-full"
                  style={{
                    borderColor: `${promise.accentColor}33`,
                    boxShadow: `0 8px 24px -6px ${promise.accentColor}44`,
                    color: promise.accentColor,
                  }}
                >
                  <div>
                    {/* Circle Node Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 bg-[#0b0f1a] text-white shadow-lg"
                        style={{
                          borderColor: `${promise.accentColor}33`,
                          boxShadow: `0 8px 24px -6px ${promise.accentColor}44`,
                          color: promise.accentColor,
                        }}
                      >
                        <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-poppins group-hover:text-white/40 transition-colors">
                        {promise.metric}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight font-outfit group-hover:text-[#f26522] transition-colors duration-300">
                        {promise.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins font-light">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* --- PART 2: Trusted SMO Services For Businesses --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-white/5 pt-24">
          {/* Visual Dashboard Side (Left Column on Desktop) */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Image Container */}
            <div className="rounded-3xl p-4 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#f26522]/10 blur-3xl pointer-events-none" />

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <Image
                  src="/service/smo/smo-service.png"
                  alt="Social Media Optimization Dashboard"
                  width={1200}
                  height={900}
                  className="w-full h-[450px] object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Optional Floating Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold">
                  Live Campaign Performance
                </span>
              </div>

              {/* Optional Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Reach
                  </p>
                  <h4 className="text-white font-bold text-lg">+145%</h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Engagement
                  </p>
                  <h4 className="text-white font-bold text-lg">4.8%</h4>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Audience
                  </p>
                  <h4 className="text-white font-bold text-lg">Active</h4>
                </div>
              </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#f26522]/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 border border-white/5 rounded-full pointer-events-none" />
          </motion.div>

          {/* Copy Side (Right Column on Desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider font-poppins"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified SMO Framework
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black font-outfit text-white tracking-tight leading-snug"
            >
              Trusted SMO Services <br />
              <span className="text-[#f26522]">For Businesses</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins text-justify lg:text-left"
            >
              Marketrixa is a professional SMO Company in Ahmedabad helping
              startups, local businesses, and growing brands strengthen social
              media presence through strategic optimization, creative content
              planning, audience engagement, and performance-focused solutions.
              Our experienced SMO Consultant team creates customized strategies
              that support long-term visibility, credibility, and business
              growth across multiple social media platforms.
            </motion.p>

            <div className="pt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-[#f26522] hover:bg-[#d94e1a] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(242,101,34,0.3)] transition-all font-poppins text-sm border-none cursor-pointer"
              >
                Connect With SMO Experts
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmoPromise;
