"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface Tool {
  id: string;
  name: string;
  category: string;
  effectiveness: number; // 0-100
  description: string;
  features: string[];
  color: string;
}

const tools: Tool[] = [
  {
    id: "klaviyo",
    name: "Klaviyo",
    category: "Automation & CRM",
    effectiveness: 98,
    description:
      "The gold standard for E-commerce automation and deep data segmentation.",
    features: [
      "Dynamic Product Feeds",
      "Predictive Analytics",
      "SMS Integration",
    ],
    color: "#00E2B1",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Campaign Design",
    effectiveness: 85,
    description:
      "Reliable, user-friendly platform for small to medium scale visual storytelling.",
    features: ["Drag-and-Drop Editor", "A/B Testing", "Behavioral Targeting"],
    color: "#FFE01B",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    category: "Deliverability",
    effectiveness: 95,
    description:
      "Enterprise-level API solution focused on massive deliverability and scale.",
    features: ["Dedicated IP addresses", "Email Validation", "SMTP Service"],
    color: "#00B3E3",
  },
  {
    id: "beehiiv",
    name: "Beehiiv",
    category: "Newsletters",
    effectiveness: 92,
    description:
      "The fastest-growing platform built specifically for high-conversion newsletters.",
    features: ["Advanced Attribution", "Referral Programs", "Ad Network"],
    color: "#f26522",
  },
];

const EmailTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass mb-6"
          >
            <Cpu className="w-3 h-3 text-[#f26522]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26522]">
              Technical Stack
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mastering the <span className="text-[#f26522]">Ecosystem.</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light">
            We leverage industry-leading platforms to ensure your messages land
            in the inbox, not the spam folder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center">
          {/* Interactive Stack Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                onClick={() => setActiveTool(tool)}
                whileHover={{ y: -5 }}
                className={`cursor-pointer p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${
                  activeTool.id === tool.id
                    ? "bg-white/5 border-[#f26522] shadow-[0_20px_50px_rgba(242,101,34,0.1)]"
                    : "bg-transparent border-white/70 grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
                }`}
              >
                {/* Background Glow */}
                {activeTool.id === tool.id && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 bg-gradient-to-br from-[#f26522]/10 to-transparent pointer-events-none"
                  />
                )}

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl"
                      style={{
                        backgroundColor: `${tool.color}20`,
                        color: tool.color,
                      }}
                    >
                      {tool.name[0]}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">
                        Effectiveness
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: tool.color }}
                      >
                        {tool.effectiveness}%
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    {tool.category}
                  </p>

                  {/* Effectiveness Bar */}
                  <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.effectiveness}%` }}
                      transition={{ duration: 1, ease: E }}
                      className="h-full"
                      style={{ backgroundColor: tool.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: E }}
              className="premium-card !bg-neutral-900/50 p-8 lg:p-12 relative h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers size={80} style={{ color: activeTool.color }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Zap size={20} className="text-[#f26522]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Tool Intelligence
                  </span>
                </div>

                <h3 className="text-4xl font-bold mb-6">{activeTool.name}</h3>
                <p className="text-white/60 leading-relaxed mb-10 font-light italic">
                  "{activeTool.description}"
                </p>

                <div className="space-y-4 mb-12">
                  {activeTool.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#f26522]/50 transition-colors">
                        <CheckCircle2 size={14} className="text-[#f26522]" />
                      </div>
                      <span className="text-sm font-medium text-white/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">
                      Verified Stack
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-[#f26522] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                    Integration Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EmailTools;
