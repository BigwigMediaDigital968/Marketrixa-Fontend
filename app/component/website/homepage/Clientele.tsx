"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, Globe, Users } from "lucide-react";

const clients = [
  {
    name: "Granth Dream homes",
    logo: "/granth-logo.png",
    industry: "Real Estate",
  },
  {
    name: "BigWig Media Digital",
    logo: "/bigwig-logo.webp",
    industry: "Digital Media",
  },
  {
    name: "Mondus Properties",
    logo: "https://www.mondusproperties.ae/assets/logo%20mondus%20new%20(4)-TMoOETTP.gif",
    industry: "Luxury Living",
  },
  {
    name: "Billion Dollar FX",
    logo: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1764826680/bdfx_zvjbi6.gif",
    industry: "FinTech",
  },
  {
    name: "Lalit Forex",
    logo: "/lalit-logo.jpeg",
    industry: "Treading",
  },
  {
    name: "KB Stocks Traders",
    logo: "/stock-logo.png",
    industry: "Trading",
  },
  {
    name: "Lion Insurance",
    logo: "/lion-logo.png",
    industry: "Fintech",
  },
  {
    name: "Integrated Logistics Network",
    logo: "/iln-logo.webp",
    industry: "Logostics",
  },
  {
    name: "Destiny By Numberrs",
    logo: "/dbn-logo.webp",
    industry: "Astrology",
  },
];

const stats = [
  { label: "Global Partners", value: "200+", icon: <Globe size={16} /> },
  { label: "Industry Awards", value: "14", icon: <Award size={16} /> },
  { label: "Retained Clients", value: "94%", icon: <Users size={16} /> },
];

export default function Clientele() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="py-14 px-6 relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Column: Context & Narrative */}
          <div className="lg:w-[40%] flex flex-col justify-between py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#F26522]" />
                  <span className="text-[#F26522] text-xs font-black tracking-[0.3em] uppercase">
                    Brands We Work With
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                  Built on partnerships, <br />
                  <span className="text-[#F26522] italic">
                    not projects.
                  </span>{" "}
                  <br />
                </h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
                We believe great results come from strong relationships. That’s
                why we listen, align, and grow together with every brand we work
                with.
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="text-[#F26522]">{stat.icon}</div>
                    <div>
                      <div className="text-white font-bold text-xl leading-none">
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div> */}

              <div className="pt-6">
                <button className="group relative inline-flex items-center gap-6 text-white overflow-hidden cursor-pointer">
                  <span className="text-sm font-bold tracking-widest uppercase group-hover:text-[#F26522] transition-colors">
                    View Case Studies
                  </span>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/70 group-hover:border-[#F26522] transition-colors duration-500">
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Grid */}
          <div
            className="lg:w-[60%] relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              {clients.map((client, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      relative flex flex-col items-center justify-center h-32 sm:h-48 p-12
                      transition-all duration-500 cursor-pointer overflow-hidden group
                      ${
                        isActive
                          ? "bg-transparent"
                          : "bg-[#0A0A0A] hover:bg-[#0F0F0F]"
                      }
                    `}
                  >
                    {/* Active Background Sweep */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 via-transparent to-transparent pointer-events-none"
                        />
                      )}
                    </AnimatePresence>

                    {/* Industrial Grid Corner Lines (Subtle) */}
                    <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10" />
                    <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10" />

                    {/* Logo Wrapper */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          y: isActive ? -10 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="relative"
                      >
                        <motion.img
                          src={client.logo}
                          alt={client.name}
                          animate={{
                            filter: isActive
                              ? "grayscale(0%) brightness(1.2) drop-shadow(0 0 15px rgba(242,101,34,0.3))"
                              : "grayscale(100%) brightness(0.7) opacity(0.4)",
                          }}
                          className="max-h-10 md:max-h-14 max-w-[120px] md:max-w-[160px] w-auto object-contain transition-all duration-700"
                        />
                      </motion.div>

                      {/* Brand Metadata (Reveals on active/hover) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="text-center"
                          >
                            <div className="text-white text-xs font-bold tracking-tight truncate max-w-full">
                              {client.name}
                            </div>
                            <div className="text-[#F26522] text-[9px] uppercase tracking-widest mt-1 font-black opacity-80">
                              {client.industry}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Progress Bar for Active Logo */}
                    {isActive && (
                      <motion.div
                        layoutId="progress"
                        className="absolute bottom-0 left-0 h-[2px] bg-[#F26522] z-20"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Ambient Lighting Overlay */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F26522]/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
