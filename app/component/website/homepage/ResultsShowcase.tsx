'use client';
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Percent,
  Coins,
  Zap,
  Globe,
  Award
} from "lucide-react";
import Link from "next/link";

// --- Types ---
interface ResultItem {
  id: number;
  label: string;
  metric: string;
  subMetric: string;
  tag: string;
  channels: string[]; // ['meta', 'google', 'tiktok']
  Icon: React.ComponentType<any>;
  gridClass: string;
  screenshotUrl: string;
  accentColor: string;
  description: string;
}

// --- Animation Constants ---
const transitionBezier = [0.25, 1, 0.5, 1];

const cardVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: transitionBezier }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2 }
  }
};

const resultsData: ResultItem[] = [
  {
    id: 1,
    label: "Scalable E-Commerce Growth",
    metric: "11.4x ROAS",
    subMetric: "+412% Revenue YoY",
    tag: "Scale & Revenue",
    channels: ["meta", "google"],
    Icon: TrendingUp,
    gridClass: "md:col-span-2",
    screenshotUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Multi-channel scaling campaign optimized via predictive lookalikes and customized landing pages."
  },
  {
    id: 2,
    label: "Lead Volume Surge",
    metric: "12,450+",
    subMetric: "MQLs Generated",
    tag: "Lead Generation",
    channels: ["meta", "tiktok"],
    Icon: Users,
    gridClass: "md:col-span-1",
    screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "High-intent lead generation capturing premium B2B decision makers."
  },
  {
    id: 3,
    label: "Efficiency Overhaul",
    metric: "-64% CPL",
    subMetric: "$42.50 to $15.30",
    tag: "Cost Optimization",
    channels: ["google"],
    Icon: Coins,
    gridClass: "md:col-span-1",
    screenshotUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Hyper-focused keyword restructuring and intelligent bidding rules optimization."
  },
  {
    id: 9,
    label: "Campaign Conversion Peak",
    metric: "6.82%",
    subMetric: "Conversion Rate",
    tag: "CRO & UI",
    channels: ["meta", "google", "tiktok"],
    Icon: Percent,
    gridClass: "md:col-span-1",
    screenshotUrl: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?q=80&w=1170&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Landing page layout tuning and psychological checkout triggers integration."
  },
  {
    id: 4,
    label: "Campaign Conversion Peak",
    metric: "6.82%",
    subMetric: "Conversion Rate",
    tag: "CRO & UI",
    channels: ["meta", "google", "tiktok"],
    Icon: Percent,
    gridClass: "md:col-span-1",
    screenshotUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Landing page layout tuning and psychological checkout triggers integration."
  },
  {
    id: 5,
    label: "High-Volume Brand Visibility",
    metric: "45.2M",
    subMetric: "Targeted Impressions",
    tag: "Awareness & Reach",
    channels: ["meta", "tiktok"],
    Icon: Zap,
    gridClass: "md:col-span-2",
    screenshotUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Omnichannel brand dominance targeting warm prospective custom segments."
  },
  {
    id: 6,
    label: "Global Market Penetration",
    metric: "18+",
    subMetric: "Countries Scaled",
    tag: "International Strategy",
    channels: ["google"],
    Icon: Globe,
    gridClass: "md:col-span-1",
    screenshotUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop",
    accentColor: "#f26522",
    description: "Localized translation and geo-targeted optimization models."
  }
];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }}
  />
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return resultsData;
    return resultsData.filter((item) => item.channels.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen text-white font-sans antialiased">
      <section id="results" className="relative py-16 overflow-hidden">

        {/* Background Radial Light Orbs */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(242,101,34,0.06) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(242,101,34,0.04) 0%, transparent 45%)",
          }}
        />
        <GridPattern opacity={0.08} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

          {/* Top Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 mb-3"
              >
                <span className="h-[2px] w-10 bg-[#f26522]" />
                <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                  Proven Impact
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none"
              >
                Performance <br />
                <span className="text-[#f26522] italic font-light">
                  By The Numbers
                </span>
              </motion.h2>
              <p className="mt-2 text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed">
                We design and scale high-intensity campaigns that maximize ROI and consistently crush client KPIs. Hover cards to reveal strategy logs.
              </p>
            </div>

            {/* Campaign Channel Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-1 bg-neutral-900/60 backdrop-blur-md border border-white/5 p-1 rounded-xl self-start lg:self-end"
            >
              {[
                { id: "all", label: "All Campaigns" },
                { id: "meta", label: "Meta Ads" },
                { id: "google", label: "Google" },
                { id: "tiktok", label: "TikTok Ads" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-lg cursor-pointer text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 relative ${activeFilter === filter.id
                    ? "text-black font-black"
                    : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {activeFilter === filter.id && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-[#f26522] rounded-lg z-0 shadow-md shadow-[#f26522]/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Quick High-Level Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-8 rounded-xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
            {[
              { label: "Total Managed Ad Spend", value: "$45M+" },
              { label: "Average Campaign ROAS", value: "6.4x" },
              { label: "Leads Generated", value: "1.2M+" },
              { label: "Cost Per Acquisition Drop", value: "-48%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</span>
                <span className="text-lg md:text-xl font-black text-white">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Bento Results Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 hover:border-[#f26522]/60 bg-neutral-950 transition-all duration-500 flex flex-col justify-between h-[320px] md:h-[360px] ${item.gridClass}`}
                >

                  {/* Background Dashboard Screenshot Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={item.screenshotUrl}
                      alt={item.label}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 scale-100 group-hover:scale-105 filter saturate-125"
                    />

                    {/* Dark gradient mapping to make sure white text pops completely */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/0" />

                    {/* Accent orange glowing circles on hover */}
                    <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#f26522]/5 blur-[80px] group-hover:bg-[#f26522]/15 transition-all duration-700" />
                  </div>

                  {/* Top Content Row: Tag & Live Campaign Label */}
                  <div className="relative p-5 z-10 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 border border-neutral-800 text-[#f26522] text-[8px] font-black uppercase tracking-wider backdrop-blur-sm">
                      {item.tag}
                    </span>

                    <div className="flex items-center gap-1.5 bg-neutral-900/90 border border-white/5 pl-2 pr-2.5 py-1 rounded-full backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-[8px] font-mono tracking-wider text-white/50 uppercase">AUDITED</span>
                    </div>
                  </div>

                  {/* Bottom Content Area: Custom Overlays & Dynamic Hover Height Reveal */}
                  <div className="relative p-5 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pt-8">

                    {/* Default Details Block */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded bg-white/5 text-[#f26522]">
                          <item.Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-neutral-500">
                          Primary KPI
                        </span>
                      </div>

                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none group-hover:text-[#f26522] transition-colors duration-300">
                          {item.metric}
                        </h3>
                        <span className="text-[10px] font-semibold text-emerald-400 font-mono">
                          {item.subMetric}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug">
                        {item.label}
                      </h4>
                    </div>

                    {/* Smooth Sliding Hover Details */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden mt-2">
                      <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Interactive Footer & Channel Chips */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
                        <div className="flex items-center gap-1.5">
                          {item.channels.map((chan) => (
                            <span
                              key={chan}
                              className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 uppercase text-neutral-300"
                            >
                              #{chan}
                            </span>
                          ))}
                        </div>

                        {/* <div className="flex items-center gap-1">
                          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
                            Explore Log
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-[#f26522]" />
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphic card border stroke */}
                  <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/30 rounded-[1.5rem] transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Interactive Call-To-Action (CTA) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 rounded-2xl bg-neutral-900/20 border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Ready to see these numbers on your campaigns?</h4>
                <p className="text-[11px] text-neutral-400">Book a strategy session with our lead growth advisors.</p>
              </div>
            </div>

            <motion.div

              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f26522] hover:bg-[#d65215] text-black font-bold text-[10px] uppercase tracking-widest transition-all duration-300 overflow-hidden shadow-lg shadow-[#f26522]/10"

              >
                <span>Get Free Strategy Call</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}