"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  MessageCircle,
  ShieldCheck,
  Users,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

const WhyInfluence: React.FC = () => {
  const benefits = [
    {
      id: "a",
      title: "Builds Brand Awareness",
      desc: "Influencers introduce your brand to new audiences who may not have discovered your business through traditional channels.",
      icon: Eye,
      color: "#3b82f6",
    },
    {
      id: "b",
      title: "Increases Audience Engagement",
      desc: "Content shared by influencers often generates higher interaction compared to standard advertisements.",
      icon: MessageCircle,
      color: "#a855f7",
    },
    {
      id: "c",
      title: "Enhances Brand Credibility",
      desc: "Recommendations from trusted creators strengthen confidence in your products or services.",
      icon: ShieldCheck,
      color: "#f26522",
    },
    {
      id: "d",
      title: "Reaches Targeted Audiences",
      icon: Users,
      desc: "Influencers attract followers with specific interests, making it easier to connect with the right audience.",
      color: "#10b981",
    },
    {
      id: "e",
      title: "Supports Product Launches",
      icon: Rocket,
      desc: "Influencer campaigns create excitement and visibility during important brand announcements and promotions.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="bg-black text-white py-24 md:py-32 overflow-hidden selection:bg-[#f26522]/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: E }}
          >
            <span className="text-[#f26522] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Strategic Value
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Why Influencer <br />
              <span className="text-white/60 italic">Marketing Matters.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-white/60 text-md font-light max-w-2xl"
          >
            Nowadays, the digital landscape is reshaping how people find out
            about brands. Online platforms, especially social media, are the
            first places people turn to for information, getting ideas, and even
            making buying decisions. Through influencer marketing, companies can
            keep up with the changes and continue to connect with their
            audience. This post highlights some the most important benefits of
            using influencer marketing:
          </motion.p>
        </div>

        {/* --- BENEFITS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: E }}
              className="group relative p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/15 hover:border-[#f26522]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Accent */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={28} />
                  </div>
                  <span className="text-[10px] font-black text-white/40 group-hover:text-[#f26522]/40 transition-colors uppercase tracking-widest">
                    Benefit {item.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light mb-8 group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-[#f26522] transition-colors">
                  <span>Growth Metric</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-10 rounded-[32px] bg-[#f26522] flex flex-col justify-center items-center text-center text-black overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <h4 className="text-3xl font-black tracking-tighter mb-4 italic">
              Ready to Scale?
            </h4>
            <p className="text-black/70 text-sm font-medium mb-8 max-w-[200px]">
              Leverage the power of influence to dominate your market.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 z-5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-2xl"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* --- BOTTOM SUMMARY --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
            <p className="text-sm font-medium tracking-tight text-white/70 italic">
              "Influencer marketing transforms followers into loyal customers."
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="text-2xl font-bold tracking-tighter">88%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                Trust Creators
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tighter">11x</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                Higher ROI
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyInfluence;
