"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Fingerprint,
  Users,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- Types ---
interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  imageUrl: string;
}

// --- Data ---
const features: FeatureItem[] = [
  {
    id: "mobile",
    title: "Mobile-Optimized Design",
    shortDesc: "Seamless across all devices.",
    fullDesc:
      "We create web pages that easily change according to the screen size of various devices. This ensures that customers get a good experience even if they are browsing via their mobile, tablet, or desktop.",
    icon: <Smartphone className="w-6 h-6" />,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "identity",
    title: "Unique Brand Identity",
    shortDesc: "Personality in every pixel.",
    fullDesc:
      "Every piece of work is personalized to express the character of your brand. It also offers a great way to separate yourself from the competition in the digital world.",
    icon: <Fingerprint className="w-6 h-6" />,
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "ux",
    title: "Better User Experience",
    shortDesc: "Intuitive and organized.",
    fullDesc:
      "Easy-to-use navigations, a well-organized structure, and user-friendly layouts give visitors the ease of exploring the site and taking actions.",
    icon: <Users className="w-6 h-6" />,
    imageUrl:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "credibility",
    title: "Stronger Credibility",
    shortDesc: "Build trust instantly.",
    fullDesc:
      "Consumers' trust is gained and their perception of a business is strengthened just through a website that looks contemporary and professional.",
    icon: <ShieldCheck className="w-6 h-6" />,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "engagement",
    title: "Higher Engagement",
    shortDesc: "Drive higher conversions.",
    fullDesc:
      "Strategic design elements guide users effortlessly across pages, increasing engagement and time spent on the website, which naturally drives higher conversions.",
    icon: <BarChart3 className="w-6 h-6" />,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1000",
  },
];

const WebsiteSection = () => {
  const [activeTab, setActiveTab] = useState<FeatureItem>(features[0]);

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F26522]/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Header Text */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#F26522] font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Website Designing Company in India
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Why Does Your Business Need a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F26522]">
              Custom Website Design?
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl text-lg leading-relaxed"
          >
            Your brand's website is likely the first point of contact between
            your business and a customer. And that one moment can decide
            everything. Our designers at Marketrixa work closely with you to
            understand the personality of your brand.
          </motion.p>
        </div>

        {/* 3D Glass Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Feature List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                onMouseEnter={() => setActiveTab(feature)}
                onClick={() => setActiveTab(feature)}
                className={`group relative cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                  activeTab.id === feature.id
                    ? "bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl"
                    : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-300 ${
                      activeTab.id === feature.id
                        ? "bg-[#F26522] text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        activeTab.id === feature.id
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 transition-colors duration-300 ${
                        activeTab.id === feature.id
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {feature.shortDesc}
                    </p>
                  </div>
                </div>
                {activeTab.id === feature.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-2xl border-2 border-[#F26522]/30 pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic 3D Display Box */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-[1.5rem] bg-linear-to-br from-white/10 to-transparent border border-[#F26522]/20 backdrop-blur-md p-6 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-gpu lg:rotate-y-[-5deg] lg:rotate-x-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col"
                >
                  {/* Mockup Preview Area */}
                  <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden group shadow-2xl border border-white/5">
                    <img
                      src={activeTab.imageUrl}
                      alt={activeTab.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">
                        Live Preview
                      </span>
                    </div>
                  </div>

                  {/* Feature Text Content */}
                  <div className="flex-1">
                    <p className="text-xl font-black text-white mb-4 flex items-center gap-3">
                      <span className="text-[#F26522]">{activeTab.icon}</span>
                      {activeTab.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {activeTab.fullDesc}
                    </p>
                  </div>

                  {/* Call to Action Button */}
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#F26522] text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95 shadow-[0_10px_30px_rgba(242,101,34,0.3)] cursor-pointer"
                    >
                      <span className="z-10 uppercase tracking-tighter">
                        Schedule a Strategy Session
                      </span>
                      <ArrowRight className="z-10 group-hover:translate-x-2 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Glossy Overlay Reflection */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
