"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    color: "#E4405F",
    bgLight: "rgba(228, 64, 95, 0.1)",
    tagline: "Visual Storytelling & Lifestyle Branding",
    stats: { growth: "85%", reach: "High", conversion: "4.2%" },
    features: ["Reels Dominance", "Influencer Partnerships", "Visual Branding"],
    strategy:
      "We leverage aesthetic consistency and short-form video trends to capture the Gen-Z and Millennial demographic effectively.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    color: "#0A66C2",
    bgLight: "rgba(10, 102, 194, 0.1)",
    tagline: "Professional Authority & B2B Growth",
    stats: { growth: "60%", reach: "Targeted", conversion: "6.1%" },
    features: ["Thought Leadership", "B2B Lead Gen", "Employee Advocacy"],
    strategy:
      "Focusing on high-value industry insights and professional networking to establish your brand as a market leader.",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <FaFacebook size={24} />,
    color: "#1877F2",
    bgLight: "rgba(24, 119, 242, 0.1)",
    tagline: "Community Building & Precise Targeting",
    stats: { growth: "45%", reach: "Massive", conversion: "3.8%" },
    features: ["Group Engagement", "Retargeting Ads", "Marketplace Ads"],
    strategy:
      "Utilizing Meta’s advanced pixel data to drive conversions through highly personalized and segmented ad campaigns.",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <FaYoutube size={24} />,
    color: "#FF0000",
    bgLight: "rgba(255, 0, 0, 0.1)",
    tagline: "Educational Content & Long-term SEO",
    stats: { growth: "92%", reach: "Global", conversion: "5.5%" },
    features: ["Video SEO", "In-stream Ads", "Shorts Strategy"],
    strategy:
      'Creating "Evergreen" video assets that continue to generate organic traffic and authority years after publication.',
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    icon: <MessageCircle size={24} />,
    color: "#25D366",
    bgLight: "rgba(37, 211, 102, 0.1)",
    tagline: "Direct Conversions & Customer Care",
    stats: { growth: "78%", reach: "Personal", conversion: "12.4%" },
    features: ["Automated Flows", "Broadcast Lists", "Direct Catalog"],
    strategy:
      "Bridge the gap between discovery and purchase with conversational marketing and instant customer support.",
  },
];

const SmmPlatform = () => {
  const [activeTab, setActiveTab] = useState(platforms[0]);

  return (
    <section className="py-14 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Omnichannel <span className="text-orange-500">Excellence</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              We don't just post content; we master the unique algorithms and
              user behaviors of every major social ecosystem to ensure your
              brand thrives where your audience lives.
            </p>
          </div>
          <div className="hidden lg:flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Sparkles size={14} className="text-orange-500" /> AI-Driven
              Insights
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Smartphone size={14} className="text-orange-500" /> Mobile-First
              Creative
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-hide">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal text-left cursor-pointer ${
                  activeTab.id === platform.id
                    ? "bg-orange-500 text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] scale-[1.02]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
                }`}
              >
                <div
                  className={`${
                    activeTab.id === platform.id ? "text-white" : ""
                  }`}
                  style={{
                    color:
                      activeTab.id === platform.id ? "white" : platform.color,
                  }}
                >
                  {platform.icon}
                </div>
                <span className="font-bold text-lg">{platform.name}</span>
                {activeTab.id === platform.id && (
                  <motion.div
                    layoutId="arrow"
                    className="ml-auto hidden lg:block"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
              >
                {/* Decoration Accent */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20"
                  style={{ backgroundColor: activeTab.color }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-orange-500 font-bold uppercase tracking-widest text-sm">
                    <Target size={18} /> Platform Strategy
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {activeTab.tagline}
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 max-w-2xl leading-relaxed">
                    {activeTab.strategy}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <TrendingUp className="text-orange-500 mb-3" size={24} />
                      <div className="text-2xl font-black text-white">
                        {activeTab.stats.growth}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">
                        Engagement Growth
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <Users className="text-orange-500 mb-3" size={24} />
                      <div className="text-2xl font-black text-white">
                        {activeTab.stats.reach}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">
                        Audience Reach
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <BarChart3 className="text-orange-500 mb-3" size={24} />
                      <div className="text-2xl font-black text-white">
                        {activeTab.stats.conversion}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">
                        Avg. Conversion Rate
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      Key Optimization Focus:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {activeTab.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmPlatform;
