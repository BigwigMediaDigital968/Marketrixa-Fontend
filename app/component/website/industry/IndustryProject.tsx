"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * INDUSTRY PROJECT COMPONENT
 * * Key Features:
 * - Center-focused 3D Carousel (Visual matching image_ec9345.jpg).
 * - Side items feature blur and scale-down effects.
 * - Auto-rotation logic (4-second interval).
 * - Brand-aligned typography (Marketrixa colors).
 * - Responsive breakpoints for mobile/tablet.
 */

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AGRIMATE",
    category: "Emerging Agri Trends",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "REAL ESTATE INSIGHTS",
    category: "Property Marketing",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "FINTECH SOLUTIONS",
    category: "Banking Systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "HOSPITALITY UX",
    category: "Guest Experience",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "SUPPLY CHAIN HUB",
    category: "Logistics Tech",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },
];

const IndustryProject: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Helper to get relative position for 3D effect
  const getPosition = (index: number) => {
    const diff = (index - currentIndex + PROJECTS.length) % PROJECTS.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(PROJECTS.length - 1)) return "right";
    if (diff === PROJECTS.length - 1 || diff === -1) return "left";
    return "hidden";
  };

  return (
    <section className="bg-gray-400 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-950">
            Recent Projects
          </span>
          <div className="w-10 h-[2px] bg-[#cc9c85]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter leading-[0.9]">
          Our Industry Related <span className="text-[#F26522]">Work</span>
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute left-2 md:left-45 z-30 p-3 rounded-full border border-gray-200 bg-white shadow-lg hover:bg-amber-600 hover:text-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute right-2 md:right-45 z-30 p-3 rounded-full border border-gray-200 bg-white shadow-lg hover:bg-amber-600 hover:text-white transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Slides */}
        <div className="relative w-full h-full flex items-center justify-center">
          {PROJECTS.map((project, index) => {
            const pos = getPosition(index);

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  scale: pos === "center" ? 1 : 0.8,
                  x:
                    pos === "center"
                      ? 0
                      : pos === "right"
                        ? "60%"
                        : pos === "left"
                          ? "-60%"
                          : 0,
                  opacity: pos === "center" ? 1 : 0.4,
                  filter: pos === "center" ? "blur(0px)" : "blur(4px)",
                  zIndex: pos === "center" ? 20 : 10,
                  display: pos === "hidden" ? "none" : "block",
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[90%] md:w-[60%] lg:w-[50%] h-full"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay matching the AGRIMATE design */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-12 transition-opacity duration-500 ${pos === "center" ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
                        {["Trends", "Insights", "Intelligence", "Hub"].map(
                          (tag, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <span className="text-[8px] md:text-[10px] uppercase text-gray-300 tracking-widest">
                                {tag}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setIsAutoPlaying(false);
            }}
            className={`h-1.5 transition-all rounded-full ${currentIndex === i ? "w-8 bg-[#F26522]" : "w-2 bg-gray-200"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustryProject;
