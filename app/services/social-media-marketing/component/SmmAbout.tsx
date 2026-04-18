"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Zap,
  MessageSquare,
  Target,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const SmmAbout: React.FC = () => {
  const features = [
    {
      icon: <Users className="text-blue-400" />,
      title: "Community Growth",
      desc: "We don't just find followers; we build loyal communities around your brand mission.",
    },
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Viral Engineering",
      desc: "Strategic content designed to trigger algorithms and maximize organic reach.",
    },
    {
      icon: <MessageSquare className="text-green-400" />,
      title: "Active Engagement",
      desc: "Real-time interaction management that humanizes your brand and builds trust.",
    },
    {
      icon: <Target className="text-[#F26522]" />,
      title: "Precision Targeting",
      desc: "Reaching the exact demographic that aligns with your conversion goals.",
    },
  ];

  return (
    <section className="relative py-14 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#F26522]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT: VISUAL COMPOSITION */}
          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Main Dashboard Mockup */}
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    MarketRixa Social Lab
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Analytics Dashboard"
                  className="rounded-xl opacity-80 mix-blend-lighten"
                />

                {/* Floating Stat Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-12 right-2 bg-[#111] border border-white/20 p-4 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <TrendingUp className="text-green-500" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">
                        ROI Increase
                      </p>
                      <p className="text-xl font-black text-white">+114%</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Circular Metrics (Success Stories Inspired) */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { val: "92%", label: "Retention", color: "border-blue-500" },
                  {
                    val: "85%",
                    label: "Engagement",
                    color: "border-[#F26522]",
                  },
                  { val: "40k+", label: "Leads", color: "border-purple-500" },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-md"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-2 rounded-full border-2 flex items-center justify-center ${metric.color}`}
                    >
                      <span className="text-[10px] font-black text-white">
                        {metric.val}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CONTENT & FEATURES */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#F26522] font-black uppercase tracking-[0.3em] text-sm mb-4">
                Social Authority
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
                Turning Social Noise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic font-light">
                  Into Scalable Revenue.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                At <span className="text-white font-bold">MarketRixa</span>, we
                believe social media is more than just a digital business card.
                It's a high-performance engine for growth. We draw traffic and
                attention across Facebook, Instagram, LinkedIn, and TikTok,
                ensuring your brand isn't just seen - it's remembered.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-[#F26522]/30 transition-all cursor-default"
                >
                  <div className="mb-3 w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-xl font-bold group"
            >
              <span>Explore Strategy</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmAbout;
