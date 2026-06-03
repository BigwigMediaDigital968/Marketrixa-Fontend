'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  Zap,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Terminal,
  ArrowUpRight
} from "lucide-react";

// --- Types ---
interface DifferenceItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

// --- High Fidelity Operational Data ---
const differences: DifferenceItem[] = [
  {
    id: 1,
    tag: "CAPITAL AUDITING",
    title: "ROI Focused Marketing",
    desc: "We analyze target margins and historical performance metrics first. No vanity impressions, no fluff—every campaign we scale is audited for absolute capital yield.",
    icon: TrendingUp
  },
  {
    id: 2,
    tag: "CREATIVE ENGINEERING",
    title: "Creative UGC Strategy",
    desc: "We source native creators to construct highly engaging UGC hooks. We whitelink dark posts directly from custom creator handles to maximize customer trust signals.",
    icon: Sparkles
  },
  {
    id: 3,
    tag: "CAPITAL MANAGEMENT",
    title: "Performance Driven Ads",
    desc: "Deploy programmatic keyword targets and negative matchmaking. We bypass standard creative fatigue to scale your direct ad spend with complete predictability.",
    icon: Zap
  },
  {
    id: 4,
    tag: "PIPELINE AUTOMATION",
    title: "AI Powered Automation",
    desc: "Eliminate response delays. Our custom webhooks route warm incoming profiles to your sales HubSpot/Salesforce CRM instances instantly, triggering instant sequences.",
    icon: Cpu
  }
];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
);

// --- Individual Premium Card component with Cursor Coordinate Glow and spring scaling ---
const DifferenceCard: React.FC<{ item: DifferenceItem; idx: number }> = ({ item, idx }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 overflow-hidden h-auto cursor-pointer shadow-2xl bg-neutral-950 border border-white/5 hover:bg-[#f26522] hover:-rotate-3 hover:border-[#f26522] hover:shadow-[0_20px_50px_rgba(242,101,34,0.25)]"
    >
      
      {/* Dynamic Mouse-Following Glow (Visible on Desktop Only when not hovered to prevent interference with bright background change) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isHovered && (
          <div 
            className="absolute hidden lg:block rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
            style={{
              width: "240px",
              height: "240px",
              background: `radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)`,
            }}
          />
        )}
      </div>

      {/* A. UPPER BAR: Custom Top-Left aligned icon & tag layout */}
      <div className="relative z-10 flex gap-4 items-baseline w-full">
        {/* Rounded Icon block matching the reference card design style - Inverts on hover */}
        <div className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 shadow-md bg-white/5 text-neutral-400 border-white/10 group-hover:bg-neutral-950 group-hover:text-[#f26522] group-hover:border-neutral-950">
          <item.icon className="w-5 h-5" />
        </div>
        <h4 className="text-md md:text-lg font-black text-white tracking-tight leading-none group-hover:text-neutral-950 transition-colors duration-500">
            {item.title}
          </h4>
      </div>

      {/* B. LOWER CONTENT: Clean, non-generic typography & CTA action link */}
      <div className="relative z-10 space-y-3.5 mt-4 text-left">
        <div className="space-y-1">
          
          <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-900/90 transition-colors duration-500">
            {item.desc}
          </p>
        </div>

        {/* Clean Link Anchor (Inverts color smoothly on card hover) */}
      </div>
    </motion.div>
  );
};

export default function WhySection() {
  return (
    <div className=" text-white font-sans antialiased overflow-hidden py-16 md:py-24 relative w-full flex flex-col justify-center min-h-screen">
      
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.03) 0%, transparent 70%)"
        }}
      />
      <GridPattern opacity={0.03} />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 w-full">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neutral-900 border border-white/5 mb-5 shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Differentiators</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
              What Makes Us <br />
              <span className="text-white/60 italic font-light">Completely Different</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md text-left lg:text-right">
            We operate at the intersection of performance marketing and automated systems engineering. We don't guess—we deploy audited, reproducible pipeline blueprints.
          </p>
        </div>

        {/* 2-Column Bento-Inspired Grid System */}
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch max-w-5xl mx-auto">
          {differences.map((item, idx) => (
            <DifferenceCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}