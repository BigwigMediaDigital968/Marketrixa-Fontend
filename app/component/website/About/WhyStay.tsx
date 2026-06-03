'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Terminal
} from "lucide-react";

// --- Types ---
interface ReasonItem {
  id: number;
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

// --- High Fidelity Partnership Retention Data ---
const reasons: ReasonItem[] = [
  {
    id: 1,
    number: "01",
    tag: "IMMEDIATE RESOLUTION",
    title: "Fast Communication",
    desc: "We eliminate standard agency bureaucracy. You receive direct access to our core engineers and founders via dedicated operational channels with immediate response latencies.",
    icon: Zap
  },
  {
    id: 2,
    number: "02",
    tag: "CAPITAL HYGIENE",
    title: "Performance Focused",
    desc: "We don't optimize for vanity impressions or aesthetic fluff. Every workflow, direct-chat sequence, and ad budget we scale is continuously audited for strict capital yield.",
    icon: TrendingUp
  },
  {
    id: 3,
    number: "03",
    tag: "FATIGUE PROOFING",
    title: "Creative UGC Strategy",
    desc: "Deploy native creators running high-retention 3-second hook variations. We whitelink dark posts directly from custom creator channels to bypass standard ad wear floors.",
    icon: Sparkles
  },
  {
    id: 4,
    number: "04",
    tag: "LIVE PIPELINE TELEMETRY",
    title: "Transparent Reporting",
    desc: "Zero estimates. We construct real-time live performance dashboards integrated directly with your HubSpot, Salesforce, or custom databases for absolute monitoring.",
    icon: ShieldCheck
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

// --- Partnership Card Component with Cursor Spotlight, Organic Rotation, & Orange Hover Inversion ---
const ReasonCard: React.FC<{ item: ReasonItem; idx: number }> = ({ item, idx }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Scales and rotates dynamically on hover for a tactile bento feel
      className="group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 overflow-hidden h-auto cursor-pointer shadow-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-[#f26522] hover:border-[#f26522] hover:scale-105 hover:shadow-[0_20px_50px_rgba(242,101,34,0.25)]"
    >
      
      {/* Dynamic Mouse-Following Glow (Visible on Desktop only when not hovered to protect the orange transition state) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isHovered && (
          <div 
            className="absolute hidden lg:block rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
            style={{
              width: "240px",
              height: "240px",
              background: `radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)`,
              left: `${coords.x - 120}px`,
              top: `${coords.y - 120}px`,
            }}
          />
        )}
      </div>

      {/* A. UPPER BAR: Tag, Icon, and Indexing Number */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {/* Rounded Icon wrapper - Inverts from custom border to deep obsidian on orange hover */}
        <div className="flex gap-4 items-center">
            <div className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 shadow-md bg-white/5 text-neutral-400 border-white/10 group-hover:bg-neutral-950 group-hover:text-[#f26522] group-hover:border-neutral-950">
          <item.icon className="w-5 h-5" />
        </div>

        <div>
            <span className="text-[8px] font-mono tracking-widest uppercase font-black text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500 block">
            {item.tag}
          </span>
          <h4 className="text-md md:text-lg font-black text-white tracking-tight leading-none group-hover:text-neutral-950 transition-colors duration-500">
            {item.title}
          </h4>
        </div>
        </div>

        {/* Dynamic numerical indicator */}
        <span className="text-4xl font-black font-mono tracking-tighter text-[#f26522]/30 group-hover:text-neutral-950/10 transition-colors duration-500">
          {item.number}
        </span>
      </div>

      {/* B. LOWER CONTENT: Clean, non-generic typography & CTA action link */}
      <div className="relative z-10 space-y-3.5 mt-8 text-left">
        <div className="space-y-1">
          
          <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-950/90 transition-colors duration-500 line-clamp-3">
            {item.desc}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default function WhyStay() {
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neutral-900 border border-white/5 mb-5 shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Partnership Core</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
              Why Our Clients <br />
              <span className="text-white/60 italic font-light">Stay With Us</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md text-left lg:text-right">
            We operate at the intersection of performance marketing and automated systems engineering. Review our partnership metrics and workflow highlights.
          </p>
        </div>

        {/* 2-Column Bento-Inspired Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          {reasons.map((item, idx) => (
            <ReasonCard key={item.number} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </div>
  );
}