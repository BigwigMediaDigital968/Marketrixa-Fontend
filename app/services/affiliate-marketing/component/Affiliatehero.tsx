"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck } from "lucide-react";

const AffiliateHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-14">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
            >
              <Zap size={16} className="text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Performance-Based Partners
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              AFFILIATE <br />
              <span className="text-[#f26522]">MARKETING SERVICES</span> <br />
              IN INDIA
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Scale Smarter with Performance-Based Partnerships. We connect your
              brand with high-intent audiences through a curated network of
              elite affiliates, ensuring you only pay for results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
              >
                START SCALING NOW
                <ArrowRight size={20} />
              </motion.a>

              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-300">
                  Joined by 200+ Brands
                </span>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <ShieldCheck size={18} className="text-orange-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  Fraud-Free
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <BarChart3 size={18} className="text-orange-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  Real-time Data
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Performance Analytics"
                className="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating UI Elements for Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 z-20 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase">
                    Growth Rate
                  </div>
                  <div className="text-lg font-black text-white">+340%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -right-6 z-20 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase">
                    Active Affiliates
                  </div>
                  <div className="text-lg font-black text-white">12.5k+</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHero;
