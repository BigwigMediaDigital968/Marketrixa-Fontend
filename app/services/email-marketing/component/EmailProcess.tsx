"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Settings2,
  LayoutTemplate,
  Send,
  LineChart,
  RotateCcw,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface ProcessPhase {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  kpi: string;
  result: string;
}

const phases: ProcessPhase[] = [
  {
    title: "Intelligence",
    subtitle: "Phase 01",
    desc: "We clean your existing list and segment audiences based on deep behavioral data points.",
    icon: Database,
    color: "#3b82f6", // Blue
    kpi: "List Health",
    result: "< 0.5% Bounce",
  },
  {
    title: "Warmup",
    subtitle: "Phase 02",
    desc: "Technical infrastructure setup and IP warming to ensure 100% inbox placement.",
    icon: Settings2,
    color: "#a855f7", // Purple
    kpi: "Sender Score",
    result: "99+ Rating",
  },
  {
    title: "Creative",
    subtitle: "Phase 03",
    desc: "Psychology-backed copywriting and bespoke template design optimized for dark mode.",
    icon: LayoutTemplate,
    color: "#f26522", // Brand Orange
    kpi: "Open Rate",
    result: "35% - 45%",
  },
  {
    title: "Execution",
    subtitle: "Phase 04",
    desc: "Automated flow triggers and manual blast deployment at peak engagement hours.",
    icon: Send,
    color: "#ec4899", // Pink
    kpi: "CTR",
    result: "5x Increase",
  },
  {
    title: "Scaling",
    subtitle: "Phase 05",
    desc: "Deep-dive analysis of heatmaps and conversion data to double down on winning hooks.",
    icon: LineChart,
    color: "#10b981", // Emerald
    kpi: "ROI",
    result: "20:1 Return",
  },
];

const EmailProcess: React.FC = () => {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-wide"
          >
            A Scientific <span className="text-white/60">Lifecycle.</span>
          </motion.h2>
          <p className="text-white/70 max-w-xl mx-auto font-light">
            How Marketrixa transforms dormant email lists into consistent
            revenue generators.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: E }}
              className="relative group"
            >
              {/* Connector Dot (Desktop) */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/20 group-hover:bg-[#f26522] transition-colors duration-500" />
              </div>

              {/* Card Container */}
              <div className="premium-card h-full p-8 flex flex-col items-start transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]">
                {/* Phase Number & Icon */}
                <div className="flex justify-between items-center w-full mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                    {phase.subtitle}
                  </span>
                  <div
                    className="p-3 rounded-xl transition-all duration-500 group-hover:scale-110 shadow-lg"
                    style={{
                      backgroundColor: `${phase.color}15`,
                      color: phase.color,
                    }}
                  >
                    <phase.icon size={20} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {phase.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-8 flex-grow">
                  {phase.desc}
                </p>

                {/* KPI Result Box */}
                <div
                  className="w-full p-4 rounded-2xl border border-white/15 flex flex-col gap-1 transition-all duration-500 group-hover:border-[#f26522]/30"
                  style={{
                    background: `linear-gradient(135deg, ${phase.color}05, transparent)`,
                  }}
                >
                  <span className="text-[9px] uppercase font-bold text-white/70 tracking-widest">
                    KPI: {phase.kpi}
                  </span>
                  <span
                    className="text-lg font-black"
                    style={{ color: phase.color }}
                  >
                    {phase.result}
                  </span>
                </div>

                {/* Bottom Glow Line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                  style={{ backgroundColor: phase.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Loop Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 text-white/70">
            <div className="h-[1px] w-12 bg-white" />
            {/* <RotateCcw className="animate-spin-slow w-5 h-5" /> */}
            <span className="text-[10px] uppercase text-[#f26522] font-bold tracking-widest">
              Iterative Optimization Loop
            </span>
            <div className="h-[1px] w-12 bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailProcess;
