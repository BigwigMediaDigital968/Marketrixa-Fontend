"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Berger",
    logo: "https://images.bergerpaints.com/2026-04/navbigimg.png?VersionId=b80.eXgvjci3eKfun6EYkAaScxmG9uNl&format=webp&width=640&quality=75",
  },
  {
    name: "BigWig Media Digital",
    logo: "/bigwig-logo.webp",
  },
  {
    name: "Omaxe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Omaxe_Logo.png",
  },
  {
    name: "JBM Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/JBM_Group_logo.svg/1200px-JBM_Group_logo.svg.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Metso",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Metso_Outotec_logo.svg/2560px-Metso_Outotec_logo.svg.png",
  },
  {
    name: "Dunkin Donuts",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dunkin%27_Donuts_logo.svg/1200px-Dunkin%27_Donuts_logo.svg.png",
  },
  {
    name: "Adani",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Adani_Group_logo.svg/1200px-Adani_Group_logo.svg.png",
  },
  {
    name: "Dalmia",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Dalmia_Bharat_Group_logo.svg/1200px-Dalmia_Bharat_Group_logo.svg.png",
  },
];

export default function Clientele() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Continuous loop to highlight logos one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 2500); // Changes every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side Content */}
          <div className="lg:col-span-5 space-y-8 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#F26522] text-sm font-bold tracking-widest uppercase border-b border-[#F26522] pb-1">
                Clientele List
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-8 leading-tight">
                Not just clients, they <br />
                are <span className="text-[#F26522]">more like partners</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-md mt-8">
                For us, every client relationship is a partnership. We listen,
                understand, and work closely to create outcomes that matter.
                It’s this shared commitment that turns simple interactions into
                long-term collaborations.
              </p>

              <div className="pt-10">
                <button className="group flex items-center gap-4 text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                  News & Awards
                  <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side Grid */}
          <div className="lg:col-span-7 relative lg:order-1">
            {/* Grid background lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-10">
              <div className="border-r border-b border-dashed border-white"></div>
              <div className="border-r border-b border-dashed border-white"></div>
              <div className="border-b border-dashed border-white"></div>
              <div className="border-r border-b border-dashed border-white"></div>
              <div className="border-r border-b border-dashed border-white"></div>
              <div className="border-b border-dashed border-white"></div>
              <div className="border-r border-dashed border-white"></div>
              <div className="border-r border-dashed border-white"></div>
              <div></div>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 relative z-10">
              {clients.map((client, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`
                      relative flex items-center justify-center p-8 md:p-12 
                      border-white/5 group transition-all duration-700
                      ${index % 3 !== 2 ? "md:border-r" : ""} 
                      ${index < 6 ? "md:border-b" : ""}
                      border-b md:border-b-0
                      ${isActive ? "bg-[#F26522]/5" : "bg-transparent"}
                    `}
                  >
                    {/* Active Highlight Ring (Visible only when isActive) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 border border-[#F26522]/30 z-0"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    <motion.img
                      src={client.logo}
                      alt={client.name}
                      animate={{
                        scale: isActive ? 1.5 : 1,
                        filter:
                          isActive || activeIndex === -1
                            ? "brightness(1) grayscale(0%) opacity(1)"
                            : "brightness(0) invert(1) opacity(0.3) grayscale(100%)",
                      }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="max-h-12 w-auto object-contain relative z-10"
                    />

                    {/* Subtle glow behind active logo */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.5 }}
                        className="absolute w-12 h-12 bg-[#F26522]/20 blur-2xl rounded-full z-0"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
