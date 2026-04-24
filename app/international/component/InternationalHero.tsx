"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ArrowUpRight,
  Languages,
  BarChart3,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const InternationalHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden pt-20 pb-12 px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        {/* Animated Radial Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#f26522] opacity-[0.08] blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 opacity-[0.05] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content: The Value Proposition */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Globe2 className="text-[#f26522]" size={16} />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">
                Global Market Expansion Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white leading-[1.05] mb-8 tracking-tighter"
            >
              SCALE YOUR BRAND <br />
              <span className="text-[#f26522]">BEYOND BORDERS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Localized strategies, global results. We help enterprise brands
              navigate international SEO, cross-border performance marketing,
              and cultural nuance to capture market share in 50+ countries.
            </motion.p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f26522] hover:bg-[#d9541a] text-white font-black rounded-2xl transition-all gap-3 group shadow-[0_20px_40px_rgba(242,101,34,0.2)] w-fit"
            >
              START GLOBAL AUDIT
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>

            {/* Trusted By / Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-10 border-t border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-black text-white mb-2">
                    100+
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em]">
                    Campaigns Executed
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-black text-[#f26522] mb-2">
                    3X
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em]">
                    Avg Client Growth
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500">
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em]">
                    Global Clients Across
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white my-2">
                    10+
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em]">
                    Countries
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Visual Representation */}
          <div className="w-full lg:w-2/5 relative h-[400px] md:h-[500px]">
            {/* Main Decorative Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-[#1D4533] to-[#050505] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group"
            >
              {/* Spinning Globe Visualization */}
              <div className="relative">
                <Globe2
                  size={240}
                  className="text-white/10 animate-[spin_20s_linear_infinite]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-[#f26522] blur-[80px] rounded-full"
                />
              </div>

              {/* Data Overlay Cards */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-12 right-6 md:-right-8 bg-[#0a0a0a]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <TrendingUp className="text-green-500" size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-black uppercase">
                      EU Conversion
                    </div>
                    <div className="text-xl font-black text-white">+142%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-6 md:-left-8 bg-[#0a0a0a]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Languages className="text-[#f26522]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase">
                    Local Latency
                  </div>
                  <div className="text-xl font-black text-white">-45ms</div>
                </div>
              </div>
            </motion.div>

            {/* Background floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 left-10 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <ShieldCheck className="text-blue-500" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-5 right-10 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <BarChart3 className="text-[#f26522]" size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingUp = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default InternationalHero;
