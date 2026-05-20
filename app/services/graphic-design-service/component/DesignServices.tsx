"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Palette,
  Layout as LayoutIcon,
  Smartphone,
  Globe,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  desc: string;
  items: string[];
}

const E = [0.22, 1, 0.36, 1] as const;

const DiamondAccent = () => <div className="w-2 h-2 rotate-45 bg-[#f26522]" />;

const services: Service[] = [
  {
    id: "branding",
    title: "Brand Identity Design",
    subtitle: "Strategic Visuals",
    icon: <Palette size={24} />,
    desc: "Your logo is not just an image, it is the face of your business. We create complete brand identity packages that define how your company looks, feels, and is remembered. From logo design to brand guidelines, we make sure your brand speaks with confidence across every platform.",
    items: [
      "Logo design and brand mark creation",
      "Color palette and visual system",
      "Typography selection and hierarchy",
      "Brand guidelines for consistent usage",
    ],
  },
  {
    id: "smm",
    title: "Social Media Creatives",
    subtitle: "Bespoke Designs",
    icon: <Smartphone size={24} />,
    desc: "Social media is where your audience discovers you every day. Generic content gets scrolled past. Our social media designs are crafted to stop the scroll, tell your story, and drive engagement. whether it's a product post, a campaign creative, or a festival banner.",
    items: [
      "Custom post creatives and editable templates",
      "Campaign-specific visual content",
      "Promotional and offer banners",
      "Story frames and reel cover designs",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Advertising Design",
    subtitle: "Scale Your Reach",
    icon: <Globe size={24} />,
    desc: "From digital ads to printed flyers, your marketing materials need to be sharp, on-brand, and persuasive. We create advertising creatives that communicate your offer clearly and push your audience toward action.",
    items: [
      "Digital advertising banners and creatives",
      "Print advertisements and newspaper inserts",
      "Brochures and company flyers",
      "Posters and outdoor banners",
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Business Design",
    subtitle: "Professional Visuals",
    icon: <LayoutIcon size={24} />,
    desc: "In a boardroom or a pitch meeting, your materials represent your professionalism. We design business presentations, company profiles, and pitch decks that are polished, structured, and built to impress.",
    items: [
      "Business presentations and decks",
      "Company profile and capability documents",
      "Investor and sales pitch decks",
      "Internal communication designs",
    ],
  },
];

const DesignServices = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((s) => s.id === activeService) || services[0];

  return (
    <section className="relative py-14 text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(242,101,34,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="uppercase tracking-[0.32em] text-[#f26522] text-[0.68rem]">
              Our Graphic Design Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bold leading-[1.1] text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            What We Design <br />
            <span className="text-[#f26522]">for You</span>
          </motion.h2>
        </div>

        {/* Desktop: Sidebar + Content | Mobile: Top-bar + Content */}
        <div
          className="services-grid grid gap-8 items-start"
          style={{
            gridTemplateColumns: "420px minmax(0,1fr)",
          }}
        >
          {/* Sidebar / Tabs Container */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
            {services.map((s) => {
              const isActive = activeService === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(s.id)}
                  className={`group relative flex items-center gap-4 rounded-2xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink w-auto lg:w-full px-6 py-4 border cursor-pointer ${
                    isActive
                      ? "border-[#f26522]/30 text-white"
                      : "border-white/5 text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#f26522]/10 rounded-2xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-[#f26522]" : "text-white/30"
                    }`}
                  >
                    {s.icon}
                  </span>

                  <span className="relative z-10 font-semibold text-sm tracking-wide">
                    {s.title}
                  </span>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-auto hidden lg:block relative z-10"
                    >
                      <ChevronRight size={18} className="text-[#f26522]" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div
            className="min-h-[520px]"
            style={{
              width: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: E }}
                className="relative p-8 md:p-12 rounded-[2.5rem] border border-[#f26522]/20 bg-gradient-to-br from-[#f26522]/5 to-transparent backdrop-blur-xl"
              >
                {/* SVG Corner Detail */}
                <svg
                  className="absolute top-0 right-0 pointer-events-none opacity-20"
                  width="180"
                  height="180"
                  viewBox="0 0 160 160"
                >
                  <path d="M160,0 L160,160 L0,0 Z" fill="#f26522" />
                </svg>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#f26522] text-black flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(242,101,34,0.3)]">
                    {active.icon}
                  </div>

                  <p className="text-[#f26522] text-[0.7rem] uppercase tracking-[0.25em] mb-3">
                    {active.subtitle}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {active.title}
                  </h3>

                  <p className="text-white/50 text-lg leading-relaxed max-w-3xl mb-10 font-light">
                    {active.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {active.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#f26522]/30 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
                        <span className="text-sm font-medium text-white/80">
                          {item}
                        </span>
                      </motion.div>
                    ))}
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

export default DesignServices;
