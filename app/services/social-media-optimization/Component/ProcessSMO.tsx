"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  ClipboardList,
  Palette,
  MessageCircle,
  LineChart,
  Settings2,
} from "lucide-react";

interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ProcessSMO: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      title: "Research",
      desc: "We analyze your brand, audience behavior, competitors, and market trends to build a strong strategic foundation for your social media growth.",
      icon: <Search className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Planning",
      desc: "A customized social media strategy is created with clear goals, platform selection, content direction, and performance-focused planning.",
      icon: <ClipboardList className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Branding",
      desc: "Our creative team designs visually engaging graphics, brand-focused messaging, and scroll-stopping content tailored to your identity.",
      icon: <Palette className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Engagement",
      desc: "We publish content consistently, interact with your audience, and build meaningful engagement that strengthens your online presence.",
      icon: <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Analytics",
      desc: "Detailed performance tracking and audience insights help us measure growth, engagement, and campaign effectiveness accurately.",
      icon: <LineChart className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Optimization",
      desc: "We continuously refine content strategies, posting schedules, and campaigns using real-time data to maximize results and ROI.",
      icon: <Settings2 className="w-6 h-6 md:w-7 md:h-7" />,
    },
  ];

  // Carousel slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Dynamically calculate visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3); // Small Laptop
      } else {
        setVisibleCards(4); // Desktop Widescreen
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, steps.length - visibleCards);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  // Handle slide translation on drag release
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section
      className="relative w-full py-20 overflow-hidden text-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Brand Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl text-center justify-center items-center flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#f26522]/10 border border-[#f26522]/20">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f26522]">
                Workflow Strategy
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl text-white leading-tight">
              Strategic Social Media Optimization For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] via-purple-400 to-cyan-400">
                Business Growth
              </span>
            </h2>

            <p className="max-w-2xl text-gray-400 font-light leading-relaxed text-base md:text-lg">
              We follow a structured, proven methodology that removes guesswork
              and replaces it with data-backed strategy and continuous
              optimisation.
            </p>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div className="relative overflow-visible">
          <div className="overflow-hidden py-6 -my-6 px-2 -mx-2">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              onDragStart={() => setIsAutoPlaying(false)}
              animate={{ x: `-${currentIndex * (100 / steps.length)}%` }}
              transition={{ type: "spring", stiffness: 180, damping: 25 }}
              style={{ width: `${(steps.length / visibleCards) * 100}%` }}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{ width: `${100 / steps.length}%` }}
                  className="px-1 select-none"
                >
                  <motion.div
                    className="premium-card group p-8 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden relative flex flex-col justify-between h-[380px] border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-3xl"
                    whileHover={{ y: -8 }}
                  >
                    {/* Active Accent Color line on top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[#f26522]" />

                    <div>
                      {/* Step Circle Header Block */}
                      <div className="flex justify-between items-start mb-8">
                        {/* Styled Icon */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white/5 text-gray-400 border border-white/10 group-hover:bg-[#f26522] group-hover:text-white group-hover:scale-110 shadow-lg">
                          {step.icon}
                        </div>

                        {/* Floating step number badge */}
                        <div className="text-xs font-black tracking-widest font-poppins px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 group-hover:bg-[#f26522] group-hover:border-[#f26522] group-hover:text-white transition-all duration-500">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* Heading */}
                      <h3 className="text-xl md:text-2xl font-bold font-outfit text-white group-hover:text-[#f26522] transition-colors duration-300 mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light font-poppins group-hover:text-gray-300 transition-colors duration-300">
                        {step.desc}
                      </p>
                    </div>

                    {/* Backlit Corner Glow on Hover */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[#f26522]" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Pagination Indicator track */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  setCurrentIndex(dotIndex);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIndex
                    ? "w-8 bg-[#f26522]"
                    : "w-2 bg-white/10"
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Unified Team Execution Card */}
        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#f26522]/10 rounded-full blur-[80px] group-hover:bg-[#f26522]/20 transition-all duration-1000 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#f26522] rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(242,101,34,0.3)] shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Sparkles size={40} />
            </div>

            <div className="text-center md:text-left">
              <h5 className="text-2xl font-bold text-white font-outfit mb-4">
                Unified Team Execution
              </h5>
              <p className="text-gray-400 font-poppins font-light leading-relaxed text-base md:text-lg max-w-5xl">
                Each step is carried out by dedicated specialists{" "}
                <span className="text-white font-medium">
                  strategists, designers, copywriters, and analysts
                </span>{" "}
                working as a unified team focused entirely on your brand&apos;s
                growth. You receive transparent monthly reports at every stage
                so you always know what&apos;s happening and why.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSMO;
