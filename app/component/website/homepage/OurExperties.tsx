"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EXPERTISE_DATA = [
  {
    id: "web-mobile",
    title: "Web & Mobile Development",
    description:
      "From eCommerce to B2B — we design custom websites in Figma or XD that turn ideas into high-converting realities.",
    image:
      "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#F26522",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description:
      "Driving engagement where your audience lives. Our strategies maximize ROI through targeted ads and viral content cycles.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    color: "#F26522",
  },
  {
    id: "video",
    title: "Video Content Production",
    description:
      "High-impact storytelling through cinematography. We handle everything from scripts to final edits for social reels and TVCs.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
    color: "#F26522",
  },
  {
    id: "branding",
    title: "Branding & Design",
    description:
      "Crafting visual identities that resonate. We build brand guidelines, logos, and visual assets that stay in your customers' minds.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000",
    color: "#F26522",
  },
];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState(EXPERTISE_DATA[0]);

  return (
    <section className="bg-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#F26522] uppercase tracking-[0.3em] text-xs font-bold border-l-2 border-[#F26522] pl-4 mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Assuring seamless Digital <br />
              Marketing/Brand Building solutions
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-400 text-sm leading-relaxed">
              With over a decade of experience, we have served over 250+ brands
              across 10+ countries and delivered over 350+ projects for
              successfully achieving our clients' brand marketing goals.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Accordion/Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {EXPERTISE_DATA.map((item) => {
              const isActive = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`relative flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left group cursor-pointer ${
                    isActive
                      ? "bg-[#F26522] text-black"
                      : "bg-[#111] text-white border border-white/5 hover:border-[#F26522]/30"
                  }`}
                >
                  <span
                    className={`text-lg font-bold tracking-tight ${isActive ? "text-black" : "group-hover:text-[#F26522] transition-colors"}`}
                  >
                    {item.title}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white/5 text-white/50 group-hover:bg-[#F26522]/20 group-hover:text-[#F26522]"
                    }`}
                  >
                    <ArrowRight
                      size={20}
                      className={`${isActive ? "" : "-rotate-45 group-hover:rotate-0 transition-transform"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visual Preview */}
          <div className="lg:col-span-7 relative h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Image Container with Floating Card */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F26522]/20 to-transparent z-10" />

                  {/* Main Image */}
                  <img
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="w-full h-full object-cover grayscale-[20%]"
                  />

                  {/* Floating Description Box (Glassmorphism) */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-8 left-8 right-8 p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 z-20"
                  >
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {activeTab.description}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#F26522]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F26522]/5 rounded-full blur-3xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
