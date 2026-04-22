"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  Layout,
  Smartphone,
  Megaphone,
  Box,
  Globe,
  LucideIcon,
} from "lucide-react";

// --- Types ---
interface PortfolioItem {
  id: number;
  label: string;
  tag: string;
  Icon: LucideIcon;
  bgImage: string;
  gridClass: string;
}

// --- Animation Constants ---
const E: Easing = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number): Variants => ({
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: E,
    },
  },
});

const viewportSettings = { once: true, margin: "-10% 0px" };

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    label: "Lumina Brand Identity",
    tag: "Branding",
    Icon: Palette,
    bgImage: "/brand-identity.png",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    label: "Zenith App UI",
    tag: "UI/UX",
    Icon: Smartphone,
    bgImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    label: "Eco Packaging",
    tag: "Packaging",
    Icon: Box,
    bgImage:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    label: "Digital Strategy",
    tag: "Marketing",
    Icon: Megaphone,
    bgImage:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    label: "Modern Web",
    tag: "Web Design",
    Icon: Globe,
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    label: "Abstract Art",
    tag: "Graphics",
    Icon: Layout,
    bgImage: "/abstract-art.png",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }}
  />
);

const GraphicPortfolio: React.FC = () => {
  return (
    // Added bg-neutral-950 to ensure visibility of white text
    <div className="min-h-screen text-white">
      <section id="portfolio" className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(242,101,34,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(242,101,34,0.05) 0%, transparent 50%)",
          }}
        />
        <GridPattern opacity={0.15} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeUp(0)}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-[2px] w-12 bg-[#f26522]" />
                <span className="uppercase tracking-[0.4em] text-[#f26522] text-xs font-black">
                  Our Work
                </span>
              </motion.div>
              <motion.h2
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeUp(0.1)}
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]"
              >
                Creative <br />
                <span className="text-white/60 italic font-light">
                  Showcase
                </span>
              </motion.h2>
            </div>

            <motion.a
              initial="initial"
              whileInView="whileInView"
              viewport={viewportSettings}
              variants={fadeUp(0.2)}
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f26522]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#f26522] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-sm font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
                Start a Project
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
            </motion.a>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.8, ease: E, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-[#f26522] ${item.gridClass}`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={item.bgImage}
                    alt={item.label}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2, ease: E }}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f26522]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Layer */}
                <div className="relative h-full p-8 z-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#f26522] text-[#f26522] text-[10px] font-black uppercase tracking-widest">
                      {item.tag}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-[#f26522] flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg shadow-[#f26522]/20">
                      <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#f26522]/40 mb-4 transition-all duration-700 group-hover:text-[#f26522] group-hover:translate-x-2">
                      <item.Icon size={40} strokeWidth={1.5} />
                    </div>

                    <h4 className="text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                      {item.label}
                    </h4>

                    <div className="flex items-center gap-3">
                      <div className="h-[2px] w-0 group-hover:w-10 bg-[#f26522] transition-all duration-500 ease-out" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/0 group-hover:text-white/60 transition-all duration-500">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Border Shine */}
                <div className="absolute inset-0 border border-[#f26522] group-hover:border-white/10 rounded-[2.5rem] transition-colors duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicPortfolio;
