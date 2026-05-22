"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  SlidersHorizontal,
  Award,
  BarChart3,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: <Users className="w-4 h-4 text-[#f26522]" />,
    title: "Experienced content strategists and creative specialists",
  },
  {
    icon: <Search className="w-4 h-4 text-[#f26522]" />,
    title: "SEO-focused communication planning",
  },
  {
    icon: <SlidersHorizontal className="w-4 h-4 text-[#f26522]" />,
    title: "Customized campaigns for every business type",
  },
  {
    icon: <Award className="w-4 h-4 text-[#f26522]" />,
    title: "Consistent quality and brand-focused messaging",
  },
  {
    icon: <BarChart3 className="w-4 h-4 text-[#f26522]" />,
    title: "Transparent reporting and measurable growth tracking",
  },
  {
    icon: <Building2 className="w-4 h-4 text-[#f26522]" />,
    title: "Multi-industry expertise with scalable solutions",
  },
];

const stats = [
  { value: "1.2k+", label: "Assets Published" },
  { value: "+148%", label: "Avg CTR Growth" },
  { value: "8+", label: "Industries Served" },
];

const WhyChooseMarketrixa: React.FC = () => {
  return (
    <section className="relative py-24 w-full flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />
      <div className="bg-noise absolute inset-0 z-0" />

      {/* Brand Glow Orbs */}
      <div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "var(--brand-orange)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-10"
        style={{ background: "var(--brand-orange)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* --- Left Column --- */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: E }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#f26522]/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                Content Marketing · Ahmedabad
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Why Choose
              <br />
              <span className="block text-[#f26522] mt-2">Marketrixa?</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              Businesses seeking a growth-oriented "Content Marketing Company in
              Ahmedabad" can depend on Marketrixa for strategic execution and
              reliable support.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary w-full sm:w-auto group">
                Get Your Strategy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Row */}
          </div>

          {/* --- Right Column: Feature Cards --- */}
          <div className="flex flex-col gap-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: E }}
                className="flex items-start gap-4 p-4 rounded-2xl glass border-white/8 hover:border-[#f26522]/30 hover:bg-[#f26522]/5 transition-all duration-300 group cursor-default"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#f26522]/15 border border-[#f26522]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#f26522]/25 transition-colors">
                  {feature.icon}
                </div>
                {/* Text */}
                <p className="text-sm font-medium text-white/85 leading-snug pt-1.5">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMarketrixa;