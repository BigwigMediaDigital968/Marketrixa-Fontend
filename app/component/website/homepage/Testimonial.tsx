"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Harshjyot",
    role: "CEO, Bigwig Media Digital",
    content:
      "What stood out was the strategy. MarketRixa created a full digital ecosystem that delivered real results. We saw 3x growth in conversions in just a few months.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: 2,
    name: "Mansha Kapoor",
    role: "Marketing Director, Lion Forex",
    content:
      "MarketRixa went beyond execution. They built a scalable system for our brand. Within three months, our conversion rate saw a significant jump.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohit",
    role: "Founder, Granth Dream Home",
    content:
      "This was more than marketing. MarketRixa built a system that worked. Conversions tripled in just three months.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 4,
  },
  // {
  //   id: 4,
  //   name: "Elena Rodriguez",
  //   role: "Operations, Global Logistics",
  //   content:
  //     "Their SEO strategy is pure magic. We went from page 10 to the top 3 spots for our most competitive keywords in record time.",
  //   image:
  //     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  //   rating: 5,
  // },
  // {
  //   id: 5,
  //   name: "David Smith",
  //   role: "Product Lead, Innovate",
  //   content:
  //     "Building a website is easy, but building a brand identity is hard. Marketrixa mastered both for our latest product launch.",
  //   image:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  //   rating: 5,
  // },
  // {
  //   id: 6,
  //   name: "Jessica Wu",
  //   role: "CMO, Nexus",
  //   content:
  //     "I've worked with dozens of agencies, but none have the 'Marketrixa' touch. They find the gap in the market and fill it beautifully.",
  //   image:
  //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  //   rating: 5,
  // },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 130 : 180);
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="glass py-24 px-6 relative overflow-hidden min-h-[800px] flex items-center">
      {/* Background Typography Decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-none absolute inset-0 z-5 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

        <h2
          className="text-[20vw] font-black leading-none text-center bg-clip-text text-transparent opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.2) brightness(1.1)",
          }}
        >
          REVIEWS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Dynamic Info Stage */}
          <div className="lg:col-span-7 z-30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#F26522]" />
                <span className="text-[#F26522] uppercase tracking-[0.3em] text-xs font-bold">
                  Client Success Stories
                </span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-10 -left-10 w-24 h-24 text-white/[0.05] -z-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#F26522] text-[#F26522]"
                        />
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                      "{active.content}"
                    </h3>

                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full border-2 border-[#F26522] p-1">
                        <img
                          src={active.image}
                          className="w-full h-full rounded-full object-cover"
                          alt={active.name}
                        />
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold">
                          {active.name}
                        </p>
                        <p className="text-gray-500 text-sm">{active.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-8">
                <button
                  onClick={prev}
                  className="w-14 h-14 rounded-full border border-[#F26522] flex items-center justify-center text-white hover:bg-[#F26522] hover:text-black hover:border-[#F26522] transition-all duration-300 cursor-pointer"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={next}
                  className="w-14 h-14 rounded-full border border-[#F26522] flex items-center justify-center text-white hover:bg-[#F26522] hover:text-black hover:border-[#F26522] transition-all duration-300 cursor-pointer"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Creative Visual Grid/Orbit */}
          <div className="lg:col-span-5 relative flex items-center justify-center hidden md:block">
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Central Glowing Orb */}
              <div className="absolute inset-0 m-auto w-32 h-32 md:w-48 md:h-48 bg-[#F26522]/20 rounded-full blur-[80px] animate-pulse" />

              {/* Circular Client Selectors */}
              {TESTIMONIALS.map((item, i) => {
                const angle = (i / TESTIMONIALS.length) * (2 * Math.PI);
                const radius = 160;

                // ✅ Calculate positions
                const xPos = Math.round(Math.cos(angle) * radius);
                const yPos = Math.round(Math.sin(angle) * radius);

                const isActive = index === i;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setIndex(i)}
                    className="absolute z-20 cursor-pointer"
                    initial={false}
                    animate={{
                      x: xPos,
                      y: yPos,
                      scale: isActive ? 1.3 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    // style={{
                    //   top: "50%",
                    //   left: "50%",
                    //   transform: "translate(-50%, -50%)",
                    // }}
                    whileHover={{ scale: 1.4 }}
                  >
                    <div
                      className={`
          relative rounded-full p-1 transition-all duration-500
          ${
            isActive
              ? "bg-[#F26522] shadow-[0_0_30px_rgba(242,101,34,0.5)]"
              : "bg-white/10 grayscale hover:grayscale-0"
          }
        `}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                      />
                    </div>
                  </motion.button>
                );
              })}

              {/* Decorative Orbits */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-white/[0.03] rounded-full scale-[0.85]" />
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-white/[0.05] rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 border border-[#F26522]/10 rounded-full scale-[1.15] border-dashed animate-[spin_60s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
