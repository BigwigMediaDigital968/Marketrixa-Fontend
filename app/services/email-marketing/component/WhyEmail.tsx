"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Target,
  MousePointerClick,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Users,
  Workflow,
  BarChart3,
  Building2,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const WhyEmail: React.FC = () => {

  const highlightPoints2 = [
    {
      icon: Briefcase,
      label: "Custom Strategies",
      value: "100%",
      desc: "Customized campaign strategies for every business.",
    },
    {
      icon: Users,
      label: "Audience Focus",
      value: "360°",
      desc: "Audience-focused communication planning.",
    },
    {
      icon: Workflow,
      label: "Automation",
      value: "24/7",
      desc: "Automation workflows for better engagement.",
    },
    {
      icon: MousePointerClick,
      label: "Conversions",
      value: "High",
      desc: "Conversion-driven messaging and design.",
    },
    {
      icon: BarChart3,
      label: "Reporting",
      value: "100%",
      desc: "Transparent reporting and analytics.",
    },
    {
      icon: Building2,
      label: "Experience",
      value: "Multi",
      desc: "Multi-industry campaign experience.",
    },
  ];

  return (
    <section className="relative py-14 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Column: Impactful Image --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: E }}
            className="relative"
          >
            <div className="premium-card !overflow-visible p-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/email-marketing.png"
                  alt="Marketrixa Strategy Session"
                  className="w-full h-full object-contain transition-all duration-700"
                />
              </div>
            </div>
            {/* Floating "Live" Indicator Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 glass px-6 py-4 rounded-2xl border-[#f26522]/30 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Marketrixa Logic
                </span>
              </div>
            </motion.div>

            {/* Floating Deliverability Shield */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl border-white/10 z-20"
            >
              <ShieldCheck className="text-[#f26522] w-10 h-10" />
            </motion.div>
          </motion.div>

          {/* --- Right Column: Content & Features --- */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Zap className="w-4 h-4 text-[#f26522]" />
              <span className="text-[#f26522] text-xs uppercase tracking-[0.3em]">
                The Competitive Edge
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-3xl md:text-5xl font-bold leading-[1.1] mb-8"
            >
              Why Businesses <br />
              <span className="text-white/70 italic">Choose Marketrixa</span>
            </motion.h2>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg leading-relaxed font-light mb-12 max-w-xl"
            >
              Generic blasts are dead. At Marketrixa, we build hyper-segmented
              automation flows that respect your audience's time while
              aggressively scaling your revenue through behavioral psychology.
            </motion.p> */}

            {/* Feature List with Data Points */}
            <div className="space-y-2">
              {highlightPoints2.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + idx * 0.1,
                    ease: E,
                  }}
                  className="group flex items-start gap-6 py-3 p-6 rounded-2xl border border-white/30 hover:border-[#f26522]/20 hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-[#f26522]" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-[#f26522] transition-colors">
                        {item.desc}
                      </h4>
                      {/* <span className="text-2xl font-black text-white/60 group-hover:text-[#f26522]/40 transition-colors">
                        {item.value}
                      </span> */}
                    </div>
                    {/* <p className="text-sm text-white/40 font-light leading-relaxed">
                      {item.desc}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/80 text-base leading-relaxed mt-6"
            >
              Companies searching for a dependable <strong>email marketing company in Ahmedabad</strong> can rely on Marketrixa for scalable communication solutions and measurable results.

            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEmail;
