"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Zap,
  BarChart3,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  MousePointer2,
  Rocket,
} from "lucide-react";

// Brand Color Palette based on provided references
const colors = {
  primary: "#F26522", // MarketRixa Orange
  secondary: "#1D4533", // Deep Forest Green (Oracle/Success Reference)
  accent: "#FFB800", // Yellow accent for highlights
  dark: "#111111",
  light: "#F8F9FA",
};

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Optimize Your Online Performance",
    desc: "We analyze every touchpoint to ensure your conversion path is frictionless and highly profitable.",
    borderColor: "hover:border-[#F26522]",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Boost Your Online Visibility",
    desc: "Appearing at the top isn't enough; we ensure you dominate the digital shelf across all search engines.",
    borderColor: "hover:border-[#1D4533]",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Elevate Your Rankings",
    desc: "Moving beyond keywords to topic authority, driving sustainable organic and paid growth.",
    borderColor: "hover:border-[#FFB800]",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Unleash Website Potential",
    desc: "Combining AI-driven insights with human creativity to turn visitors into brand advocates.",
    borderColor: "hover:border-[#F26522]",
  },
];

const PerformanceAbout = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content: Narrative & Features */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[3px] bg-[#F26522]"></span>
                <span className="text-[#F26522] font-extrabold uppercase tracking-widest text-sm">
                  Search Engine Marketing
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] mb-8">
                It all starts with a <br />
                <span className="text-[#F26522]">single search.</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                In a world where consumers have access to their phones at all
                times, they often turn to search engines for answers. At{" "}
                <span className="font-bold text-[#1D4533]">MarketRixa</span>, we
                specialize in elevating your brand's visibility and driving
                results through strategic, data-backed Search Engine Marketing
                (SEM) tactics.
              </p>

              {/* Feature Grid - Adaptive to the provided reference style */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    className={`p-6 border-2 border-gray-100 rounded-2xl bg-white shadow-sm transition-all duration-300 group ${feature.borderColor}`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 mb-5 group-hover:bg-[#F26522] group-hover:text-white transition-all duration-300 shadow-inner">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-[#111111] text-lg mb-3 group-hover:text-[#F26522] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <button className="px-10 py-5 bg-[#1D4533] text-white font-black rounded-xl hover:bg-[#F26522] transition-all transform hover:scale-105 flex items-center gap-3 group shadow-xl shadow-green-900/10">
                  GET STARTED NOW
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="user"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    <span className="text-[#1D4533]">500+</span> Brands
                    Optimized
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Visual Showcase (The Laptop & Success Visual) */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="MarketRixa Strategy"
                  className="w-full h-[650px] object-cover"
                />

                {/* Floating Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1D4533]/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stat Card 1: Circular Progress (Inspired by Success Story reference) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center gap-2"
              >
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="#f3f4f6"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="#F26522"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="220"
                      strokeDashoffset="44"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-black text-[#111111]">
                    80%
                  </span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">
                  Organic <br /> Traffic Inc.
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Interactive CTA (Inspired by DigiStreet reference) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-12 -left-10 bg-[#F26522] p-8 rounded-[2rem] shadow-2xl text-white max-w-[240px]"
              >
                <Rocket className="mb-4 text-white/50" size={32} />
                <h3 className="text-2xl font-black mb-2 leading-tight">
                  Built to Outlast.
                </h3>
                <p className="text-white/80 text-xs font-medium leading-relaxed">
                  Our ROI-driven campaigns ensure your brand stays at the top of
                  the psychological ladder.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4">
                  <MousePointer2 size={14} />
                  Live Performance Tracking
                </div>
              </motion.div>

              {/* Glassmorphism Background Accent */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#F26522]/10 to-[#1D4533]/10 rounded-full blur-[100px] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20rem] font-black leading-none -mr-20">
          MARKETRIXA
        </h1>
      </div>
    </section>
  );
};

export default PerformanceAbout;
