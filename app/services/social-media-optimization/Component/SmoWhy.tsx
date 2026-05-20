"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Palette,
  Users,
  LineChart,
  Check,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

interface BenefitCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bullets: string[];
}

const cardsData: BenefitCard[] = [
  {
    title: "Content Strategy",
    desc: "We create engaging content strategies designed for audience growth, consistency, visibility, and stronger social media performance.",
    icon: Palette,
    accentColor: "#f26522", // Brand Orange
    bullets: [
      "Platform-focused content planning",
      "Audience engagement improvement strategies",
      "Creative visual content development",
      "Consistent brand communication approach",
      "Performance-based content optimization",
    ],
  },
  {
    title: "Audience Management",
    desc: "Our SMO Consultant team helps businesses improve audience interaction, profile activity, and social media credibility through strategic management.",
    icon: Users,
    accentColor: "#38bdf8", // Sky Blue
    bullets: [
      "Daily audience engagement support",
      "Comment and message monitoring",
      "Brand reputation management techniques",
      "Organic follower growth strategies",
      "Social profile consistency maintenance",
    ],
  },
  {
    title: "Performance Tracking",
    desc: "Marketrixa provides performance monitoring solutions helping businesses measure engagement, audience behavior, and content effectiveness efficiently.",
    icon: LineChart,
    accentColor: "#a78bfa", // Lavender Violet
    bullets: [
      "Monthly growth performance analysis",
      "Engagement tracking and reporting",
      "Audience behavior monitoring process",
      "Reach and visibility improvement",
      "Optimization based strategic decisions",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const SmoWhy: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden text-white">
      {/* Premium Backlit Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-bold tracking-widest uppercase font-poppins"
            >
              <Award className="w-4 h-4" />
              Why Marketrixa
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl text-white"
            >
              MINIMISE Brand <br className="hidden md:block" />
              <span className="text-[#f26522] relative inline-block">
                Growth Risks
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed font-poppins text-justify lg:text-left"
            >
              As an experienced SMO Company in Ahmedabad, Marketrixa creates
              audience-focused strategies that strengthen brand visibility,
              improve communication, and generate meaningful engagement across
              major social media platforms while maintaining consistency,
              transparency, and measurable performance for businesses.
            </motion.p>
          </div>

          {/* Quick Stat / Brand Threat Callout Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 p-8 rounded-[2.5rem] border border-[#f26522]/80 bg-gradient-to-br from-[#f26522]/5 to-transparent backdrop-blur-md relative overflow-hidden self-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f26522]/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="flex gap-4 items-start mb-6">
              <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 shrink-0">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-white leading-tight">
                What We Help Your Business Eliminate:
              </h3>
            </div>

            <ul className="space-y-3 font-poppins text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Inconsistent and weak branding
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Low reach and static audience engagement
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Poor organic profile visibility
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Ineffective social media communication
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 3-Column Pillars Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {cardsData.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-md p-8 md:p-10 transition-all duration-500 hover:border-[#f26522]/30 hover:bg-[#f26522]/[0.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] h-full"
                style={{
                  borderColor: `${card.accentColor}33`,
                  boxShadow: `0 8px 24px -6px ${card.accentColor}44`,
                  color: card.accentColor,
                }}
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 bg-[#0b0f1a] text-white shadow-lg"
                      style={{
                        borderColor: `${card.accentColor}33`,
                        boxShadow: `0 8px 24px -6px ${card.accentColor}44`,
                        color: card.accentColor,
                      }}
                    >
                      <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                    </div>

                    <span className="text-xs font-black tracking-widest text-gray-600 font-poppins group-hover:text-white/40 transition-colors">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight font-outfit group-hover:text-[#f26522] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-poppins font-light">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bullet Benefits List */}
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {card.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5 transition-colors group-hover/item:bg-emerald-500/20">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 group-hover/item:text-white transition-colors font-poppins leading-snug">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="p-3 rounded-2xl bg-[#f26522]/10 text-[#f26522] shrink-0 mt-1">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 font-outfit">
                Boost Your Online Authority & Engagement Today
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins">
                We combine creative content strategies with technical audience
                management frameworks. Ready to construct a custom SMO blueprint
                built around your specific business objectives?
              </p>
            </div>
          </div>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#f26522] hover:bg-[#d94e1a] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-[#f26522]/30 transition-all flex items-center gap-2 whitespace-nowrap font-poppins text-sm border-none cursor-pointer"
          >
            Request Custom SMO Audit
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SmoWhy;
