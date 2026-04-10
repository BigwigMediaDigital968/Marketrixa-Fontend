"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "About Our Agency",
    title: (
      <>
        Rank Your Website <br />
        <span className="text-[#F26522]">1st Page</span> of <br />
        Google Search
      </>
    ),
    description:
      "If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. Marketrixa is a leading digital marketing agency rendering success-proven business solutions worldwide.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    stats: { value: "#1", label: "Google Rank" },
  },
  {
    id: 2,
    badge: "Market Leaders",
    title: (
      <>
        Rated As <span className="text-[#F26522]">Number #1</span> <br />
        Digital Marketing <br />
        Agency
      </>
    ),
    description:
      "Did you try every potential aspect but couldn't make it for your business? It's high time you think of the one-time investment with Marketrixa. We're exceedingly experienced in serving real success.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    stats: { value: "10x", label: "Growth Factor" },
  },
  {
    id: 3,
    badge: "Our Expertise",
    title: (
      <>
        Driving <span className="text-[#F26522]">Significant Boost</span> <br />
        To Your Online <br />
        Business
      </>
    ),
    description:
      "We empower your digital marketing website to get desired engagement, sales, and overall revenue across different platforms. From lead generation to brand awareness, we do it all for you.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    stats: { value: "99%", label: "Client Success" },
  },
];

// Separate animation configs for text vs image so they move independently
const textVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 32 : -32,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -24 : 24,
    filter: "blur(4px)",
  }),
};

const imageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    scale: 0.97,
  }),
};

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);

  const goTo = useCallback((nextIndex: number, dir: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(dir);
    setCurrentIndex(nextIndex);
    // unlock after transition completes
    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  }, []);

  const nextSlide = useCallback(() => {
    goTo((currentIndex + 1) % slides.length, 1);
  }, [currentIndex, goTo]);

  const prevSlide = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length, -1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentIndex];

  return (
    <section className="relative glass py-20 lg:pt-30 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F26522]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* ── Main layout: text left, image right ── */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* ── TEXT COLUMN — crossfades in place, no layout shift ── */}
          <div
            className="w-full lg:w-1/2 relative"
            style={{ minHeight: "420px" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`text-${currentIndex}`}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 flex flex-col justify-center space-y-8"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 px-4 py-2 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
                  <span className="text-[#F26522] text-xs font-bold uppercase tracking-widest">
                    {slide.badge}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <button className="group relative px-8 py-4 bg-[#F26522] text-black font-black uppercase tracking-tighter text-sm rounded-full overflow-hidden transition-all hover:pr-12">
                    <span className="relative z-10">Learn More</span>
                    <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── IMAGE COLUMN — slides in from side ── */}
          <div
            className="w-full lg:w-1/2 relative"
            style={{ minHeight: "380px" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`img-${currentIndex}`}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 z-10"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10 h-full">
                  <div className="aspect-[4/3] bg-[#111] relative overflow-hidden h-full">
                    <img
                      src={slide.image}
                      alt={slide.badge}
                      className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Stats badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-2xl"
                    >
                      <div className="text-[#F26522] text-3xl font-black">
                        {slide.stats.value}
                      </div>
                      <div className="text-white text-[10px] uppercase font-bold tracking-[0.2em]">
                        {slide.stats.label}
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Decorative corner frame */}
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#F26522]/20 rounded-[2.5rem] -z-0" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Prev / Next arrows ── */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-2 lg:-mx-20 z-20">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 text-white bg-black/20 backdrop-blur-sm hover:bg-[#F26522] hover:text-black transition-all group active:scale-90"
            aria-label="Previous slide"
          >
            <ArrowLeft
              size={28}
              className="group-hover:-translate-x-1 transition-transform stroke-1"
            />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 text-white bg-black/20 backdrop-blur-sm hover:bg-[#F26522] hover:text-black transition-all group active:scale-90"
            aria-label="Next slide"
          >
            <ArrowRight
              size={28}
              className="group-hover:translate-x-1 transition-transform stroke-1"
            />
          </button>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
              className="group py-4 px-1"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? "w-12 bg-[#F26522]"
                    : "w-4 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
