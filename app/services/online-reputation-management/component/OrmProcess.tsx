"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Zap,
  Activity,
  ShieldCheck,
  UserCheck,
  Eye,
  MessageSquare,
  Heart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const OrmProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Reputation Analysis",
      desc: "We analyze your current online presence, reviews, and search results to identify strengths and areas for improvement.",
      icon: Search,
      color: "#3b82f6",
    },
    {
      step: "02",
      title: "Strategy Development",
      desc: "Based on the analysis, we create a customized ORM plan aligned with your specific business objectives.",
      icon: Target,
      color: "#a855f7",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Our team executes the strategy by managing reviews, publishing positive content, and monitoring brand mentions.",
      icon: Zap,
      color: "#f26522",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      desc: "We continuously track performance and adjust strategies to maintain a positive and dominant reputation.",
      icon: Activity,
      color: "#10b981",
    },
  ];

  const benefits = [
    { title: "Stronger Brand Credibility", icon: ShieldCheck },
    { title: "Improved Customer Trust", icon: UserCheck },
    { title: "Better Search Visibility", icon: Eye },
    { title: "Higher Customer Engagement", icon: MessageSquare },
    { title: "Enhanced Brand Loyalty", icon: Heart },
    { title: "Faster Crisis Response", icon: TrendingUp },
  ];

  return (
    <div className="text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SECTION: Our ORM Process --- */}
        <div className="mb-24 md:mb-32 lg:mb-48 relative">
          <div className="text-center mb-16 md:mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#f26522] text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              The Blueprint
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
              Our ORM <span className="text-white/60 italic">Process.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 lg:gap-12 relative">
            {/* Desktop Connector Line - Carefully positioned to align with icon centers */}
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: E }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step Icon Node */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 md:mb-8 relative z-10 transition-all duration-500 group-hover:border-[#f26522]/50 group-hover:bg-[#f26522]/5 shrink-0">
                  <item.icon
                    size={28}
                    className="md:w-8 md:h-8"
                    style={{ color: item.color }}
                  />
                  <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-[10px] md:text-xs font-black text-white/40 group-hover:text-[#f26522] group-hover:border-[#f26522]/30 transition-colors shadow-xl">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-white/40 text-center text-sm md:text-base leading-relaxed font-light max-w-xs mx-auto lg:mx-0">
                  {item.desc}
                </p>

                {/* Mobile Connector Arrow */}
                {i < steps.length - 1 && (
                  <div className="mt-8 lg:hidden opacity-20">
                    <ArrowRight className="rotate-90" size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION: Benefits of Our ORM Service --- */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-wide"
              >
                Measurable <br className="hidden md:block" />
                <span className="text-[#f26522]">Benefits.</span>
              </motion.h2>
              <p className="text-white/40 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-md">
                Businesses that invest in Online Reputation Management
                experience direct, positive shifts in brand perception and
                digital performance.
              </p>
            </div>

            {/* Benefits Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-stretch">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, ease: E }}
                  className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#f26522]/20 hover:bg-white/[0.05] transition-all group h-full"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black border border-white/5 flex items-center justify-center group-hover:text-[#f26522] group-hover:border-[#f26522]/20 transition-all shrink-0">
                    <benefit.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-sm md:text-base font-bold tracking-tight text-white/70 group-hover:text-white transition-colors">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#f26522]/5 blur-[80px] md:blur-[120px] -z-10 rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default OrmProcess;
