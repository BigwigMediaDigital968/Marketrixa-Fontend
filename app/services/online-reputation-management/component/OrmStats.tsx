"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Award,
  Activity,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

interface StatItem {
  stat: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const statsData: StatItem[] = [
  {
    stat: "97%",
    label: "Negative Content Suppressed",
    desc: "Average percentage of negative search results pushed beyond Page 1 within 90 days of launch.",
    icon: CheckCircle2,
    accentColor: "#f26522", // Brand Orange
  },
  {
    stat: "4.7★",
    label: "Average Review Rating Improvement",
    desc: "Average Google review score achieved by clients after 6 months of ORM management.",
    icon: Star,
    accentColor: "#fbbf24", // Gold Amber
  },
  {
    stat: "500+",
    label: "Brands Protected",
    desc: "Businesses, professionals, and organizations whose reputations we actively manage and protect.",
    icon: Award,
    accentColor: "#38bdf8", // Sky Blue
  },
  {
    stat: "48hr",
    label: "Crisis Response Time",
    desc: "Our average response time from brief to active campaign deployment for urgent reputation threats.",
    icon: ShieldAlert,
    accentColor: "#f43f5e", // Rose Red
  },
];

const trustTokens = [
  "Google Partner Agency",
  "Meta Business Partner",
  "3+ Years in ORM",
  "500+ Brands Managed",
  "97% Client Retention Rate",
  "Real-Time Monitoring 24/7",
];

// Double the tokens list to make the marquee loop infinitely without visual jumps
const duplicatedTrustTokens = [...trustTokens, ...trustTokens, ...trustTokens];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const OrmStats: React.FC = () => {
  return (
    <section className="relative py-14 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Alignment Grid for stats table copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {statsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="premium-card p-8 flex flex-col justify-between group h-full relative overflow-hidden transition-all duration-500 hover:border-[#f26522]/30 hover:bg-[#f26522]/[0.02]"
              >
                {/* Visual Accent Layer */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f26522]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Floating Icon Box */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 transition-all duration-500 bg-white/5 text-white group-hover:bg-[#f26522]/10 group-hover:scale-110"
                    style={{ color: item.accentColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* High Impact Stat Number */}
                  <h3
                    className="text-3xl tracking-tighter mb-4 transition-colors duration-300"
                    style={{ color: item.accentColor }}
                  >
                    {item.stat}
                  </h3>

                  {/* Label */}
                  <h4 className="text-md font-bold text-white mb-3 group-hover:text-[#f26522] transition-colors duration-300">
                    {item.label}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mt-4 font-poppins">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* TRUST BAR Banner & Marquee Ticker */}
        <div className="border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
          {/* Subtle backdrop mesh glow */}

          {/* Infinite Scroll Marquee Track */}
          <div className="relative w-full overflow-hidden py-2 select-none masked-marquee">
            {/* Left and Right Fade Overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0b0f1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex whitespace-nowrap gap-12 text-sm md:text-base font-bold font-poppins text-gray-300"
              animate={{ x: [0, "-33.333%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 22,
              }}
            >
              {duplicatedTrustTokens.map((token, index) => (
                <div key={index} className="flex items-center gap-3 shrink-0">
                  <span className="text-[#f26522] text-xs">✦</span>
                  <span className="hover:text-[#f26522] transition-colors duration-300 cursor-default">
                    {token}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrmStats;
