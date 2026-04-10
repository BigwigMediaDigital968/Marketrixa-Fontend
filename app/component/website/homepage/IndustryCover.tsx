"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface IndustryCardProps {
  title: string;
  image: string;
  category: string;
}

const industries: IndustryCardProps[] = [
  {
    title: "Banking & Finance",
    category: "Banking",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Food & Beverages",
    category: "F&B",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Healthcare & Medtech",
    category: "Healthcare",
    image:
      "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=1170",
  },
  {
    title: "Smart Manufacturing",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Real Estate & Housing",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Industry() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="glass py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#F26522] font-bold tracking-widest uppercase text-sm mb-4"
            >
              Industries We Cater
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            >
              Driving Innovation Across{" "}
              <span className="text-[#F26522]">Diverse Sectors</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Our digital marketing solutions meet the needs of various
              industries. With advanced techniques, our agency helps in
              Healthcare, Finance, Education, Retail, and more to enhance
              engagement and drive growth.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#F26522] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all hover:bg-white cursor-pointer"
            >
              View All Industries <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-[#F26522] hover:text-black hover:border-[#F26522] transition-all cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-[#F26522] hover:text-black hover:border-[#F26522] transition-all cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] aspect-[3/4] relative rounded-3xl overflow-hidden snap-start group"
            >
              {/* Image with Zoom Effect */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#F26522] text-xs font-bold uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
