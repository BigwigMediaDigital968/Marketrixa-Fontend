"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  MousePointerClick,
  TrendingUp,
  Zap,
  Target,
  Activity,
} from "lucide-react";
import Link from "next/link";

const PerformanceHero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 415 ? prev + 1 : 415));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#1D4533 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Radial Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F26522]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1D4533]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 bg-[#F26522] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Precision Marketing Engine
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              UNLEASH <br />
              <span className="text-[#F26522]">HYPER-GROWTH.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed border-l-2 border-[#1D4533] pl-6">
              Forget vanity metrics. We deploy the{" "}
              <span className="text-white font-semibold">Oracle Strategy</span>{" "}
              to intercept high-intent customers and force-multiply your ROAS.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-[#F26522] text-white font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(242,101,34,0.3)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  BOOK FREE AUDIT
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>

              <Link
                href="#project"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                OUR CASE STUDIES
              </Link>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-8 p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-2 text-[#F26522] mb-1">
                  <Activity size={16} />
                  <span className="text-3xl font-black">{count}%</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  Avg. ROAS Increase
                </p>
              </div>
              <div className="border-x border-white/10 px-4">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Target size={16} className="text-[#1D4533]" />
                  <span className="text-3xl font-black">98.2%</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  Accuracy Rate
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white mb-1">
                  <Globe size={16} className="text-[#1D4533]" />
                  <span className="text-3xl font-black">24/7</span>
                </div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                  Optimization
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Imagery & Visuals */}
          <div className="relative h-full flex items-center justify-center">
            {/* Main Image Holder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="/performance-image.png"
                alt="Growth Data Visual"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent"></div>

              {/* Data Overlay Elements */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 inline-block w-fit mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1D4533] flex items-center justify-center text-white">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">
                        Conversion Momentum
                      </p>
                      <p className="text-xl font-black text-green-400">
                        +12.4% Today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Strategy Widget */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-12 bg-[#F26522] p-6 rounded-3xl shadow-[0_20px_40px_rgba(242,101,34,0.4)] z-20 max-w-[200px]"
            >
              <BarChart3 className="text-white mb-3" size={28} />
              <h3 className="text-white font-black text-sm uppercase tracking-tighter mb-1">
                Oracle Algorithm
              </h3>
              <p className="text-white/80 text-xs font-medium leading-snug">
                Scaling reach while slashing cost-per-acquisition.
              </p>
            </motion.div>

            {/* Circuit Line Accents */}
            <svg
              className="absolute -z-10 w-[120%] h-[120%] opacity-30"
              viewBox="0 0 100 100"
            >
              <path
                d="M 0 50 Q 25 25 50 50 T 100 50"
                fill="none"
                stroke="#1D4533"
                strokeWidth="0.1"
              />
              <path
                d="M 0 60 Q 25 35 50 60 T 100 60"
                fill="none"
                stroke="#F26522"
                strokeWidth="0.1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="mt-auto border-t border-white/5 bg-white/[0.01] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-30 text-xs font-bold tracking-[0.3em]">
          <span className="hover:opacity-100 transition-opacity cursor-default">
            GOOGLE PREMIER
          </span>
          <span className="hover:opacity-100 transition-opacity cursor-default text-[#F26522]">
            META AD PARTNER
          </span>
          <span className="hover:opacity-100 transition-opacity cursor-default">
            TIKTOK FOR BUSINESS
          </span>
          <span className="hover:opacity-100 transition-opacity cursor-default">
            LINKEDIN ADS
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceHero;
