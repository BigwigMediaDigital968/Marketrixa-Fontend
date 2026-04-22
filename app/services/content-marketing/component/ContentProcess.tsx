"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  FileCheck,
  Rocket,
  BarChart,
  MessagesSquare,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

const steps: ProcessStep[] = [
  {
    title: "Research & Audit",
    desc: "We analyze competitors, keyword gaps, and your current assets to find high-impact opportunities.",
    icon: Search,
    color: "#3b82f6", // Blue
  },
  {
    title: "Strategy & Ideation",
    desc: "Developing a content calendar aligned with your business goals and audience pain points.",
    icon: MessagesSquare,
    color: "#a855f7", // Purple
  },
  {
    title: "Expert Drafting",
    desc: "Our subject-matter experts craft high-quality copy that speaks directly to your customers.",
    icon: PenTool,
    color: "#f26522", // Brand Orange
  },
  {
    title: "Editing & Quality",
    desc: "A rigorous 3-step review process ensuring factual accuracy, SEO compliance, and brand voice.",
    icon: FileCheck,
    color: "#10b981", // Emerald
  },
  {
    title: "Distribution",
    desc: "Pushing content across the right channels to maximize reach, from social to newsletters.",
    icon: Rocket,
    color: "#f59e0b", // Amber
  },
  {
    title: "Analyze & Optimize",
    desc: "Tracking performance metrics and adjusting the strategy for continuous growth.",
    icon: BarChart,
    color: "#ec4899", // Pink
  },
];

const ContentProcess: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f26522] text-sm uppercase tracking-widest font-bold"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: E }}
            className="text-2xl md:text-4xl font-bold mt-4 mb-6"
          >
            Our Industry-Standard <br />
            <span className="text-white/60">Creation Process</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#f26522] mx-auto rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: E }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Colorful Gradient Border Effect */}
              <div
                className="absolute -inset-[1px] rounded-[2rem] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"
                style={{
                  background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                }}
              />

              {/* Main Card Content */}
              <div className="relative h-full premium-card !bg-neutral-900/80 p-8 lg:p-10 flex flex-col items-start overflow-visible">
                {/* Step Number Badge */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-black border border-white/10 glass"
                  style={{ color: step.color }}
                >
                  0{idx + 1}
                </div>

                {/* Icon Circle */}
                <div
                  className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl"
                  style={{
                    backgroundColor: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <step.icon
                    size={28}
                    style={{ color: step.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-white/50 leading-relaxed font-light text-sm">
                  {step.desc}
                </p>

                {/* Decorative Bottom Line */}
                <div
                  className="mt-8 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
