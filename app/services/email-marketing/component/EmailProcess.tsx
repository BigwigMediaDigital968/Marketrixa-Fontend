"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Send,
  LineChart,
  Search,
  Users,
  Workflow,
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
    title: "Audience Research & Planning",
    subtitle: "Phase 01",
    desc: "Based on customer activity, interests, demographics and engagement levels, we create subscriber lists that make campaigns relevant.",
    icon: Search,
    color: "#3b82f6",
    kpi: "Subscriber Lists",
    result: "Relevant Campaigns",
  },
  {
    title: "Subscriber Segmentation",
    subtitle: "Phase 02",
    desc: "We target audience based on interaction data, demographics and customer's intent to enhance targeting.",
    icon: Users,
    color: "#a855f7",
    kpi: "Audience Targeting",
    result: "Better Relevance",
  },
  {
    title: "Campaign Development",
    subtitle: "Phase 03",
    desc: "Design eye-catching, compelling and conversion-focused email marketing campaigns.",
    icon: LayoutTemplate,
    color: "#f26522",
    kpi: "Campaign Design",
    result: "Higher Conversions",
  },
  {
    title: "Automation Setup",
    subtitle: "Phase 04",
    desc: "Our experts are able to create automated lead nurturing workflows, customer retention and personalized engagement.",
    icon: Workflow,
    color: "#ec4899",
    kpi: "Automation",
    result: "Personalized Engagement",
  },
  {
    title: "Campaign Deployment",
    subtitle: "Phase 05",
    desc: "We optimize campaigns for maximum inbox placement and engagement, by scheduling and distributing via optimized delivery methods.",
    icon: Send,
    color: "#10b981",
    kpi: "Inbox Placement",
    result: "Maximum Engagement",
  },
  {
    title: "Analytics & Improvements",
    subtitle: "Phase 06",
    desc: "The campaign's performance is continually tracked for opportunities to boost engagement and results.",
    icon: LineChart,
    color: "#06b6d4",
    kpi: "Performance Tracking",
    result: "Improved Results",
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
            Our Email Marketing <br />
 <span className="text-white/60">Process</span>
          </motion.h2>
          <p className="text-white/70 max-w-3xl mx-auto font-light">
            Marketrixa is the go-to choice for businesses seeking expert email marketing services in Ahmedabad, known for their strategic approach and track record of delivering campaigns that result in tangible outcomes. 
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
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
