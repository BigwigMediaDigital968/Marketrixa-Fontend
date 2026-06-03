'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Compass,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Activity
} from "lucide-react";

// --- Types ---
interface StepItem {
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  gridClass: string; // Dynamic bento sizing
}

// --- Dynamic 5-Step Operational Scaling Data ---
const steps: StepItem[] = [
  {
    number: "01",
    tag: "AUDIENCE DIAGNOSTICS",
    title: "Deep-Dive Research",
    desc: "We perform a thorough analysis of target audience behaviors, competitor market holdings, and historical performance benchmarks to locate immediate growth arbitrage opportunities.",
    icon: Search,
    gridClass: "md:col-span-3" // Balanced 2-card row on top
  },
  {
    number: "02",
    tag: "SYSTEM BLUEPRINTING",
    title: "Strategic Planning",
    desc: "We engineer a rigorous, direct-response pipeline blueprint. This maps out custom API CRM routing paths, automated support bot triggers, and exact target media budgets.",
    icon: Compass,
    gridClass: "md:col-span-3" // Balanced 2-card row on top
  },
  {
    number: "03",
    tag: "CREATIVE PRODUCTION",
    title: "Creative UGC",
    desc: "We source native creators to construct highly engaging UGC hooks and run whitelisted dark posts directly from verified creator handles to skyrocket brand trust signals.",
    icon: Sparkles,
    gridClass: "md:col-span-2" // 3-card row on bottom
  },
  {
    number: "04",
    tag: "MEDIA ACQUISITION",
    title: "Predictive Ad Scaling",
    desc: "Deploy programmatic keyword bidding and whitelisted ad sets to scale direct spend smoothly while maintaining record-low client acquisition metrics.",
    icon: Zap,
    gridClass: "md:col-span-2" // 3-card row on bottom
  },
  {
    number: "05",
    tag: "AUDITED RE-TUNING",
    title: "Continuous Optimization",
    desc: "Perform constant server-side telemetry audits, real-time webhook sync updates, and negative matchmaking adjustments to ensure absolute pipeline capital yield.",
    icon: TrendingUp,
    gridClass: "md:col-span-2" // 3-card row on bottom
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
const StepCard: React.FC<{ item: StepItem; idx: number }> = ({ item, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay:  0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Scales and rotates dynamically based on hover and card position for an organic layout feel

      className={`group relative flex flex-col justify-between p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden h-auto cursor-pointer shadow-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:scale-105 hover:bg-[#f26522] hover:border-[#f26522] hover:shadow-[0_20px_50px_rgba(242,101,34,0.22)] ${item.gridClass}`}
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

      {/* A. UPPER BAR: Custom Top-Left aligned icon, number, and tag layout */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {/* Rounded Icon block matching the reference card design style - Inverts on hover */}
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

        {/* Large back-end index numbering indicator */}
        <span className="text-4xl font-black font-mono tracking-tighter text-[#f26522]/40 group-hover:text-neutral-950/10 transition-colors duration-500">
          {item.number}
        </span>
      </div>

      {/* B. LOWER CONTENT: Clean, non-generic typography & CTA action link */}
      <div className="relative z-10 space-y-3.5 mt-4 text-left">
        <div className="space-y-1">

          <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-950/85 transition-colors duration-500 line-clamp-3">
            {item.desc}
          </p>
        </div>

        {/* Clean Link Anchor (Inverts color smoothly on card hover) */}
      </div>
    </motion.div>
  );
};

export default function App() {
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
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Our Architecture</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
              How We Scale <br />
              <span className="text-[#f26522] italic font-light"> Brands</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md text-left lg:text-right">
            We operate at the intersection of performance marketing and automated systems engineering. Hover over any phase card to review system diagnostics.
          </p>
        </div>

        {/* 2-Column Asymmetric Bento Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full items-stretch">
          {steps.map((item, idx) => (
            <StepCard key={item.number} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </div>
  );
}