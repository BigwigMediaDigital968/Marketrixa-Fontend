"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  BarChart3,
  Rocket,
  Search,
  Zap,
} from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepProps[] = [
  {
    number: "01",
    title: "Market Research",
    description:
      "We deep dive into your industry, competitors, and audience behavior to gather actionable data points.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Strategy Planning",
    description:
      "Creating a roadmap focused on your specific KPIs and business goals for sustainable growth.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Creative Concept",
    description:
      "Developing disruptive visual and narrative concepts that capture attention and build brand equity.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Deploying high-impact campaigns across relevant digital channels with precision and speed.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "Continuous A/B testing and data analysis to refine performance and maximize your marketing ROI.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    number: "06",
    title: "Scale Up",
    description:
      "Expanding successful strategies to reach wider audiences and dominate your market niche.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Strategy() {
  return (
    <section className="glass py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F26522]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F26522] uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Our Strategic <span className="text-[#F26522]">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't believe in guesswork. Our methodology is built on data,
            driven by creativity, and refined by constant optimization.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#F26522]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute top-8 right-8 text-5xl font-black text-white/5 group-hover:text-[#F26522]/10 transition-colors">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#F26522]/10 flex items-center justify-center text-[#F26522] mb-8 group-hover:bg-[#F26522] group-hover:text-black transition-all duration-500">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F26522] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#F26522] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#F26522]/20 to-transparent border border-[#F26522]/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to grow your brand?
            </h3>
            <p className="text-gray-400">
              Let's build a custom strategy for your business.
            </p>
          </div>
          <button className="whitespace-nowrap bg-[#F26522] hover:bg-white text-black font-bold px-10 py-5 rounded-full transition-all transform active:scale-95 shadow-[0_10px_30px_rgba(242,101,34,0.3)] cursor-pointer">
            Schedule a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
