"use client";

import React, { useState } from "react";
import {
  Search,
  Flag,
  Paintbrush,
  Calendar,
  UserPlus,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ProcessSMO: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      title: "Research",
      desc: "In-depth audit of your brand's current social footprint and competitor landscape.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Strategy",
      desc: "Custom roadmap focused on platform selection, tone of voice, and KPI setting.",
      icon: <Flag className="w-8 h-8" />,
    },
    {
      title: "Content",
      desc: "High-impact visual and copy creation tailored for maximum scroll-stop effect.",
      icon: <Paintbrush className="w-8 h-8" />,
    },
    {
      title: "Scheduling",
      desc: "Data-backed posting times to ensure your content reaches the widest possible audience.",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: "Engagement",
      desc: "Active community management to foster genuine connections with your followers.",
      icon: <UserPlus className="w-8 h-8" />,
    },
    {
      title: "Optimisation",
      desc: "Continuous refinement based on real-time analytics and performance reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0b0f1a] overflow-hidden">
      {/* Brand Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#f26522]/10 border border-[#f26522]/20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f26522]">
              Workflow Strategy
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Our 6-Step Process That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] via-purple-400 to-cyan-400">
              Delivers Results
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-light leading-relaxed text-base md:text-lg">
            We follow a structured, proven methodology that removes guesswork
            and replaces it with data-backed strategy and continuous
            optimisation.
          </p>
        </div>

        {/* Process Steps Visual - Optimized Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-4 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden xl:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center group transition-all duration-500 p-5"
            >
              {/* Step Circle Container */}
              <div className="relative mb-8 z-10">
                <div
                  className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center relative bg-[#0b0f1a] transition-all duration-700 ${
                    hoveredIndex === idx
                      ? "scale-110 shadow-[0_0_60px_rgba(242,101,34,0.25)]"
                      : "scale-100"
                  }`}
                >
                  {/* ICON BACKGROUND CIRCLE (NEW) */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-500 ${
                      hoveredIndex === idx
                        ? "bg-[#f26522] text-white scale-110 shadow-lg"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div
                  className={`absolute -top-1 -right-1 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-500 border ${
                    hoveredIndex === idx
                      ? "bg-[#f26522] border-[#f26522] text-white rotate-6 shadow-lg"
                      : "bg-[#1a1f2e] border-white/10 text-gray-400"
                  }`}
                >
                  0{idx + 1}
                </div>
              </div>

              {/* Text Content with responsive alignment */}
              <div className="text-center px-2">
                <h4
                  className={`text-lg md:text-xl font-bold mb-3 tracking-tight transition-colors duration-500 ${
                    hoveredIndex === idx ? "text-[#f26522]" : "text-white"
                  }`}
                >
                  {step.title}
                </h4>

                {/* Description - Always visible on mobile, hover-interactive on desktop */}
                <p className="text-sm font-light leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Team Dashboard Card */}
        <div className="mt-24 md:mt-32 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden group">
          {/* Subtle animated background glow for the card */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#f26522]/10 rounded-full blur-[80px] group-hover:bg-[#f26522]/20 transition-all duration-1000" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f26522] rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(242,101,34,0.3)] shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Sparkles size={40} />
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-2xl font-bold text-white mb-4">
                Unified Team Execution
              </h5>
              <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg max-w-4xl">
                Each step is carried out by dedicated specialists{" "}
                <span className="text-white font-medium">
                  strategists, designers, copywriters, and analysts
                </span>{" "}
                working as a unified team focused entirely on your brand's
                growth. You receive transparent monthly reports at every stage
                so you always know what's happening and why.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSMO;
