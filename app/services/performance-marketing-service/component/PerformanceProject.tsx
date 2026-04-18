"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MousePointer2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Popup from "@/app/component/website/Popup";

const projects = [
  {
    id: 1,
    title: "Building a robust online presence for Local SaaS",
    description:
      "We transformed their organic reach by implementing a cluster-topic strategy and technical SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    stats: [
      { label: "Organic Visitors", value: 80, color: "#f26522" },
      { label: "Website Authority", value: 60, color: "#10b981" },
      { label: "Keyword Rankings", value: 95, color: "#8b5cf6" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Revenue Acceleration",
    description:
      "For this global retailer, we focused on conversion-centric SEO and high-intent keyword targeting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: [
      { label: "Sales Growth", value: 120, color: "#f26522" },
      { label: "CPA Reduction", value: 45, color: "#10b981" },
      { label: "Traffic Quality", value: 88, color: "#8b5cf6" },
    ],
  },
  {
    id: 3,
    title: "Global Tech Enterprise Expansion",
    description:
      "Managing international SEO across 12 countries to ensure consistent visibility and brand authority.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    stats: [
      { label: "Global Reach", value: 92, color: "#f26522" },
      { label: "Domain Rating", value: 75, color: "#10b981" },
      { label: "Backlink Profile", value: 82, color: "#8b5cf6" },
    ],
  },
];

const CircularProgress = ({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xl font-black text-white">{value}%</span>
      </div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold text-center leading-tight">
        {label}
      </p>
    </div>
  );
};

const PerformanceProjects = () => {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <>
      <section id="project" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Take a Glimpse into{" "}
              <span className="text-orange-500">Our Success</span> Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Are You Ready to Be a Part of Our Success Story? Partner with us
              today and Position Your Website right at the Top.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="glass rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row min-h-[500px]"
              >
                {/* Left: Project Image */}
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                </div>

                {/* Right: Content & Stats */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white/[0.02]">
                  <div className="mb-8">
                    <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                      Case Study #{projects[index].id}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                      {projects[index].title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {projects[index].description}
                    </p>
                  </div>

                  {/* Circular Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {projects[index].stats.map((stat, i) => (
                      <CircularProgress key={i} {...stat} />
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 group/btn cursor-pointer"
                    >
                      Let's Talk
                      <MousePointer2
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                    <Link
                      href="/contact"
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/10 flex items-center gap-2 cursor-pointer"
                    >
                      Get A Free Quotation
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
            >
              <ArrowRight size={24} />
            </button>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === i ? "w-12 bg-orange-500" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default PerformanceProjects;
