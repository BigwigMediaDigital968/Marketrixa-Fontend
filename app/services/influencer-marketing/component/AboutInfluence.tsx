"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Target,
  BarChart4,
  Quote,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const AboutInfluence: React.FC = () => {
  const highlights = [
    {
      title: "Authentic Storytelling",
      icon: Quote,
      desc: "Real-world interactions that feel more organic than traditional sales messages.",
    },
    {
      title: "Deep Insights",
      icon: Target,
      desc: "Leveraging audience data to ensure every partnership hits the right demographic.",
    },
    {
      title: "Performance Tracking",
      icon: BarChart4,
      desc: "Measuring results effectively to drive impactful business growth.",
    },
  ];

  return (
    <div className="text-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SECTION: The Marketrixa Approach --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: E }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f26522]/20 bg-[#f26522]/5 mb-6">
              <Sparkles size={12} className="text-[#f26522]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26522]">
                Methodology
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.95]">
              The Power of <br />
              <span className="text-white/60 italic">Authentic Voice.</span>
            </h2>

            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Influencer marketing is fast becoming one of the most effective
                tools for brands to connect with present-day audiences. People
                tend to believe in the words of those they follow and share,
                making these partnerships essential for brand awareness.
              </p>
              <p className="border-l-2 border-[#f26522] pl-6 italic text-white/80 bg-gradient-to-r from-[#f26522]/5 to-transparent py-4 rounded-r-2xl">
                Marketrixa provides step-by-step Influencer Marketing Services
                that help your business find the right creators and convey
                powerful brand messages.
              </p>
              <p>
                Our experts locate influencers who are a close fit to your brand
                image and targeted audience, resulting in campaigns that are
                both authentic and effective.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: E }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 glass relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Creative Collaboration"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 p-6 glass border-white/5 rounded-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#f26522] flex items-center justify-center">
                    <Users2 size={20} className="text-black" />
                  </div>
                  <span className="font-bold tracking-tight">
                    Creators Network
                  </span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Connecting brands with high-engagement social media stars
                  globally.
                </p>
              </div>
            </div>

            {/* Decorative BG element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f26522]/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>

        {/* --- SECTION: Definition & Details --- */}
        <div className="relative pt-10 mt-5 border-t border-white/5">
          <div className="max-w-3xl mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
            >
              What Is Influencer Marketing?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-xl font-light leading-relaxed"
            >
              A strategic collaboration where brands work with social media
              stars to raise visibility. It emphasizes real-world interactions
              that feel more authentic than traditional advertising, focusing on
              storytelling and performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#f26522]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-[#f26522]/10 to-transparent border border-[#f26522]/20 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#f26522] flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(242,101,34,0.4)]">
                <CheckCircle2 size={32} className="text-black" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold tracking-tight">
                Driving Impactful <br />
                <span className="text-[#f26522]">
                  Results-Driven Campaigns.
                </span>
              </h4>
            </div>
            <p className="text-white/50 text-sm md:text-base max-w-sm font-light">
              We support business growth by delivering impactful strategies that
              transform followers into loyal customers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfluence;
