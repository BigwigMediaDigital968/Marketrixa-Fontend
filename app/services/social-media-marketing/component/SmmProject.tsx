"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/app/component/website/Popup";

const projects = [
  {
    id: 1,
    category: "Instagram Growth",
    title: "Revolutionizing Fashion Brand Engagement",
    description:
      "Through strategic influencer partnerships and high-quality reel content, we boosted their community interaction by over 200%.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    stats: [
      { label: "Engagement Rate", value: 85, color: "#f26522" },
      { label: "Follower Growth", value: 70, color: "#10b981" },
      { label: "Story Views", value: 92, color: "#8b5cf6" },
    ],
  },
  {
    id: 2,
    category: "Paid Ads (Meta/TikTok)",
    title: "Scaling D2C Revenue with Meta Ads",
    description:
      "We implemented a full-funnel social advertising strategy that optimized their ad spend and achieved a record-breaking ROAS.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    stats: [
      { label: "ROAS Increase", value: 110, color: "#f26522" },
      { label: "CPA Reduction", value: 55, color: "#10b981" },
      { label: "Conversion Rate", value: 88, color: "#8b5cf6" },
    ],
  },
  {
    id: 3,
    category: "Community Management",
    title: "Building a Tech Titan's LinkedIn Presence",
    description:
      "Establishing thought leadership through consistent executive branding and high-value industry insights.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    stats: [
      { label: "Brand Mentions", value: 95, color: "#f26522" },
      { label: "Inbound Leads", value: 65, color: "#10b981" },
      { label: "Network Growth", value: 78, color: "#8b5cf6" },
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
            animate={{ strokeDashoffset: strokeDashoffset }}
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

const SmmProjects = () => {
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
      <section id="projects" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 text-sm font-bold mb-6"
            >
              <TrendingUp size={16} />
              <span>Social Media Portfolio</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Mastering <span className="text-orange-500">Social Reach</span> &
              Community
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how we transform brands into social icons. From viral
              campaigns to sustainable organic growth, we deliver results that
              trend.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row min-h-[550px] shadow-2xl"
              >
                {/* Left: Campaign Visual */}
                <div className="lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
                  <motion.img
                    key={projects[index].image}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001c1c] via-transparent to-transparent lg:bg-gradient-to-r" />

                  {/* Floating Social Icons */}
                  <div className="absolute bottom-6 left-6 flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                      <FaInstagram size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                      <MessageCircle size={20} />
                    </div>
                  </div>
                </div>

                {/* Right: Portfolio Details */}
                <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white/[0.01]">
                  <div className="mb-10">
                    <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
                      {projects[index].category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-[1.1]">
                      {projects[index].title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-orange-500/30 pl-6">
                      {projects[index].description}
                    </p>
                  </div>

                  {/* SMM KPIs Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-12">
                    {projects[index].stats.map((stat, i) => (
                      <CircularProgress key={i} {...stat} />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
                    >
                      Discuss Campaign
                    </button>
                    <Link
                      href="/contact"
                      className="bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/10 flex items-center gap-2 group cursor-pointer"
                    >
                      Full Case Study
                      <ExternalLink
                        size={18}
                        className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#002a2a] border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all z-20 shadow-xl hidden xl:flex cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#002a2a] border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all z-20 shadow-xl hidden xl:flex cursor-pointer"
            >
              <ArrowRight size={24} />
            </button>

            {/* Dash Indicators */}
            <div className="flex justify-center gap-4 mt-12">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group py-2"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-700 ${
                      index === i
                        ? "w-16 bg-orange-500"
                        : "w-6 bg-white/10 group-hover:bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default SmmProjects;
