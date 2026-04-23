"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Search,
  ShieldCheck,
  MessageSquare,
  Star,
  ArrowUpRight,
  MonitorCheck,
  Users,
  SearchCheck,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const AboutORM: React.FC = () => {
  return (
    <div className="text-white overflow-hidden">
      {/* SECTION 1: Marketrixa ORM Service Overview */}
      <section className="relative py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-[1px] bg-[#f26522]" />
                <span className="text-[#f26522] text-xs font-bold uppercase tracking-widest">
                  The Marketrixa Advantage
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8"
              >
                Enhance Exposure & <br />
                <span className="text-white/60 italic text-3xl md:text-4xl">
                  Establish Unshakable Trust.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white/60 text-lg leading-relaxed mb-10 font-light"
              >
                Marketrixa provides a complete ORM Service aimed at monitoring,
                managing, and enhancing how your brand is seen online. Our team
                works tirelessly to increase positive exposure across search
                engines, review sites, and social media platforms.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Search,
                    title: "Search Engine Control",
                    text: "Promote positive content.",
                  },
                  {
                    icon: Star,
                    title: "Review Management",
                    text: "Curate authentic feedback.",
                  },
                  {
                    icon: Users,
                    title: "Social Authority",
                    text: "Build community confidence.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Crisis Prevention",
                    text: "Stay ahead of challenges.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#f26522]/30 transition-all group"
                  >
                    <feature.icon className="w-5 h-5 text-[#f26522] mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-white/40">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 relative"
            >
              <div className="premium-card p-2 aspect-video lg:aspect-square relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Marketrixa Strategy"
                  className="w-full h-full object-cover rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Floating Stat */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass p-6 rounded-3xl border-[#f26522]/20 z-20"
              >
                <div className="text-3xl font-black text-[#f26522]">94%</div>
                <div className="text-[10px] uppercase font-bold text-white/40">
                  Trust Factor Increase
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What is ORM Definition */}
      <section className="relative py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Definition Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-card !bg-neutral-900 p-8 flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                    Platform Sync: Active
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: SearchCheck,
                      label: "Google SERP Optimization",
                      status: "Positive",
                    },
                    {
                      icon: MessageSquare,
                      label: "Review Sentiment Analysis",
                      status: "Healthy",
                    },
                    {
                      icon: MonitorCheck,
                      label: "Digital Footprint Scan",
                      status: "Clean",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <row.icon size={18} className="text-[#f26522]" />
                        <span className="text-xs font-medium">{row.label}</span>
                      </div>
                      <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded uppercase">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-6 rounded-2xl bg-[#f26522] text-black">
                  <p className="text-[10px] font-black uppercase mb-1 opacity-60">
                    Reputation Health
                  </p>
                  <p className="text-4xl font-black">Robust</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass mb-6"
              >
                <Eye size={14} className="text-[#f26522]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f26522]">
                  Industry Definition
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8"
              >
                What Is Online <br />
                <span className="text-[#f26522]">Reputation Management?</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white/50 text-lg leading-relaxed mb-8 font-light"
              >
                Online reputation management (ORM) is the process of monitoring
                and influencing the image of a brand on the internet. It
                includes dealing with customer reviews, responding to comments,
                optimizing search results, and promoting positive aspects of the
                business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={100} />
                </div>
                <p className="text-white/80 leading-relaxed italic relative z-10">
                  "At Marketrixa, our ORM Service focuses on{" "}
                  <span className="text-[#f26522] font-bold">
                    proactive reputation building
                  </span>{" "}
                  rather than just damage control. We ensure your brand
                  maintains credibility across all online platforms."
                </p>
              </motion.div>

              {/* <button className="mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[#f26522] transition-colors group">
                Download ORM Guide{" "}
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutORM;
