"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Target,
  TrendingUp,
  MousePointerClick,
  PieChart,
  Search,
  Globe,
  ShoppingCart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jonathan Reeves",
    role: "Growth Head, Financy App",
    content:
      "MarketRixa didn't just run ads; they built a conversion engine. We scaled our monthly spend from $5k to $100k while actually decreasing our CAC by 22%. Their attribution modeling is the best we've seen.",
    stats: "7.2x Blended ROAS",
    platform: <Search size={18} />,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "CEO, Aura Skincare",
    content:
      "We were struggling with plateaued Meta results until we switched. Their creative-first approach to performance marketing completely revitalized our funnel. Our Year-over-Year revenue is up 310%.",
    stats: "310% YoY Revenue",
    platform: <Target size={18} />,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Kenji Sato",
    role: "Operations Director, SwiftLogix",
    content:
      "Their Google Search strategy captured high-intent B2B leads that our competitors were missing. MarketRixa's transparency in reporting and focus on bottom-line profit over vanity metrics is refreshing.",
    stats: "-40% Lower CPA",
    platform: <Globe size={18} />,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
  },
];

const performanceStats = [
  {
    icon: <Target className="text-[#F26522]" />,
    label: "Ad Spend Managed",
    value: "$25M+",
    desc: "Cumulative budget optimized across Google, Meta, and TikTok.",
  },
  {
    icon: <TrendingUp className="text-[#F26522]" />,
    label: "Avg. ROAS",
    value: "5.4x",
    desc: "Across our entire portfolio of performance marketing clients.",
  },
  {
    icon: <MousePointerClick className="text-[#F26522]" />,
    label: "Conv. Rate",
    value: "+45%",
    desc: "Average improvement after our landing page optimization.",
  },
  {
    icon: <PieChart className="text-[#F26522]" />,
    label: "Scale Factor",
    value: "10x",
    desc: "Successfully scaled 15+ brands into 7 and 8-figure revenue.",
  },
];

const PerformanceClients = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#050505]">
      {/* Precision Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F26522 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F26522]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#F26522] font-black tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              The Performance Ledger
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Turning Ad Spend into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Scalable Profit.
              </span>
            </motion.h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#F26522] hover:border-[#F26522] hover:text-white transition-all group cursor-pointer"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Case Study Card */}
          <div className="lg:col-span-8">
            <div className="relative h-full bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
              <ShoppingCart className="absolute -top-4 -right-4 text-white/[0.02] w-64 h-64" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="px-3 py-1 rounded-full bg-[#F26522]/20 border border-[#F26522]/30 text-[#F26522] text-[10px] font-black uppercase tracking-widest">
                      Direct Attribution
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#F26522] text-[#F26522]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xl md:text-3xl font-medium leading-relaxed text-white mb-12">
                    "{testimonials[index].content}"
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonials[index].image}
                          alt={testimonials[index].name}
                          className="w-16 h-16 rounded-full object-cover grayscale brightness-110"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#F26522] text-black p-1.5 rounded-full ring-4 ring-[#050505]">
                          {testimonials[index].platform}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight">
                          {testimonials[index].name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonials[index].role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">
                        Verified Result:
                      </span>
                      <span className="text-[#F26522] font-black text-2xl tracking-tighter">
                        {testimonials[index].stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Performance Data Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {performanceStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#F26522] opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-black text-white tracking-tighter">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h5 className="text-white font-bold text-[11px] uppercase tracking-[0.15em] mb-1">
                    {stat.label}
                  </h5>
                  <p className="text-gray-500 text-xs leading-tight">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Partners */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
          <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.5em] mb-8">
            Data & Performance Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-20 hover:opacity-50 transition-all">
            <span className="text-xl font-black italic">GOOGLE ADS</span>
            <span className="text-xl font-bold tracking-widest uppercase">
              Meta
            </span>
            <span className="text-xl font-sans font-black">Shopify</span>
            <span className="text-xl font-mono font-bold">TikTok:Business</span>
            <span className="text-xl font-black tracking-tighter">
              HUB SPOT
            </span>
            <span className="text-xl font-bold">Klaviyo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceClients;
