"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import Popup from "@/app/component/website/Popup";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision Targeting",
    desc: "We don't just find an audience; we find your future high-LTV customers using predictive modeling.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Analytics",
    desc: "Live dashboards that track every dollar from click to conversion with zero lag time.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Aggressive Scaling",
    desc: "Proprietary bidding algorithms that identify growth pockets before the competition does.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-Powered Creative",
    desc: "Dynamic creative optimization (DCO) to ensure the right message hits at the right moment.",
  },
];

const PerformanceAbout = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content: Narrative & Features */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-12 h-[2px] bg-[#F26522]"></span>
                  <span className="text-[#F26522] font-bold uppercase tracking-widest text-xs">
                    Why Performance Matters
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                  It all starts with a single <br />
                  <span className="text-[#F26522]">High-Intent Search.</span>
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed mb-10">
                  In a world where attention is the new currency, "visibility"
                  isn't enough. At{" "}
                  <span className="font-bold text-[#F26522]">MarketRixa</span>,
                  we specialize in the psychological science of conversion. We
                  don't just buy traffic; we engineer growth environments where
                  your brand's visibility and bottom-line results are
                  mathematically linked through strategic Search & Performance
                  tactics.
                </p>

                {/* Feature Grid - Inspired by the provided card layout */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, borderColor: "#F26522" }}
                      className="p-6 border border-gray-100 rounded-2xl bg-gray-100 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#F26522] mb-4 group-hover:bg-[#F26522] group-hover:text-white transition-colors">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-black mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-snug">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-[#F26522] transition-all flex items-center gap-2 group cursor-pointer cursor-pointer"
                  >
                    Start Your Growth Audit
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                  <div className="hidden md:flex items-center gap-2 text-gray-400">
                    <ShieldCheck size={20} className="text-green-500" />
                    <span className="text-xs font-medium uppercase tracking-tighter">
                      Verified Meta & Google Partner
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Visual Showcase */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                {/* Main Thematic Image */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Performance Dashboard"
                  className="w-full h-[600px] object-cover grayscale-[0.2] brightness-90 hover:scale-105 transition-transform duration-1000"
                />

                {/* Floating Performance Badge */}
                <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-white max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-[#F26522] fill-[#F26522]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      Efficiency
                    </span>
                  </div>
                  <div className="text-3xl font-black mb-1">-35%</div>
                  <div className="text-[10px] text-gray-400 leading-tight">
                    Reduction in Average Customer Acquisition Cost
                  </div>
                </div>

                {/* Success Overlay - Inspired by the Success Stories slide */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-10">
                  <div className="bg-[#F26522] w-fit px-4 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest mb-4">
                    Live Success Metric
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-white text-3xl font-black tracking-tighter">
                        410%
                      </div>
                      <div className="text-gray-400 text-[10px] uppercase font-bold">
                        ROAS Scale
                      </div>
                    </div>
                    <div className="w-[1px] h-10 bg-white/20"></div>
                    <div>
                      <div className="text-white text-3xl font-black tracking-tighter">
                        12.5k
                      </div>
                      <div className="text-gray-400 text-[10px] uppercase font-bold">
                        Leads Generated
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Tech Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                  <Search className="w-96 h-96 text-white" />
                </div>
              </motion.div>

              {/* Accent Elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default PerformanceAbout;
