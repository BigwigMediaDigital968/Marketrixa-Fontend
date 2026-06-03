'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Video,
  Users,
  TrendingUp,
  Map,
  Sparkles,
  Layers,
  HelpCircle,
  Briefcase,
  Megaphone,
  BarChart3
} from "lucide-react";

const services = [
  {
    id: "01",
    tag: "CAMPAIGN MANAGEMENT",
    title: "UGC Campaign Management",
    desc: "We manage the entire UGC workflow — from creator outreach and creative briefs to approvals, brand communication, and content delivery. You focus on growth while we handle execution.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    icon: Briefcase,
  },
  {
    id: "02",
    tag: "VIDEO PRODUCTION",
    title: "UGC Video Production",
    desc: "Product reviews, unboxings, testimonials, and lifestyle content produced with creators across Ahmedabad and India. Built specifically for Reels, Shorts, and Meta Ads.",
    imageUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    icon: Video,
  },
  {
    id: "03",
    tag: "CONTENT AMPLIFICATION",
    title: "Content Amplification",
    desc: "We maximize the value of every UGC asset through paid social campaigns, dark-post advertising, audience targeting, boosting, and multi-platform content distribution.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: Megaphone,
  },
  {
    id: "04",
    tag: "ANALYTICS & INSIGHTS",
    title: "Performance Analytics",
    desc: "Track creator performance, engagement rates, audience sentiment, and conversions with clear monthly reporting focused on business impact—not vanity metrics.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    icon: BarChart3,
  },
];

export default function ServiceSuite() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = sliderRef.current.offsetWidth * 0.8;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < services.length) {
          setActiveSlide(newIndex);
        }
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (slider) slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slideTo = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.82;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setActiveSlide(index);
    }
  };

  return (
    <>
      {}
      <section className="relative py-20 md:py-28 text-white overflow-hidden select-none">
        
        {/* Warm ambient background details & subtle contour grid styling mimicking image_f514c3.jpg */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Beautiful vector waves reminiscent of the topographic lines in image_f514c3.jpg background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,300 500,150 T1100,250 T1700,100" fill="none" stroke="#262626" strokeWidth="1.5" />
          <path d="M-100,250 Q250,380 600,180 T1200,300 T1800,150" fill="none" stroke="#262626" strokeWidth="1" />
          <path d="M-50,600 Q300,750 700,500 T1300,650 T1900,450" fill="none" stroke="#262626" strokeWidth="1" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 backdrop-blur-md">
                <Layers className="w-3.5 h-3.5 text-[#f26522]" />
                <span className="text-[10px] font-mono tracking-widest text-white uppercase font-black">
                  Our UGC Video Services

                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none pt-2 uppercase text-white">
                UGC Services <br /> <span className="text-[#f26522] italic font-light">Under One Roof</span>
              </h2>
            </div>

            {/* Design reference badge pointing directly to the reference layout image_f514c3.jpg */}
            <div className="max-w-md">
                <p className="text-base text-white/60">
                    Most agencies stop at producing videos. We take it further. Here is the full scope of what working with Marketrixa's UGC team looks like:
                </p>
            </div>
          </div>

          {}
          <div className="hidden lg:grid grid-cols-4 gap-6 items-stretch">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative aspect-[3/4.8] rounded-[2rem] overflow-hidden shadow-xl border border-black/5 bg-neutral-900 flex flex-col justify-end p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
                >
                  {/* Full-bleed card background image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={srv.imageUrl}
                      alt={srv.title}
                      onError={(e:any) => {
                        e.target.src = `https://placehold.co/600x900/1e1e1e/ffffff?text=${srv.title}`;
                      }}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Radial/Vertical Shadow Vignette Overlay inspired by image_f514c3.jpg */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/50" />
                  </div>

                  {}

                  {}
                  <div className="relative z-10 text-left space-y-3">

                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-black block">
                        {srv.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        {srv.title}
                      </h3>
                    </div>

                    {/* Collapsible/Expandable Description Block */}
                    <div className="overflow-hidden transition-all duration-500  opacity-100 pt-0 group-hover:pt-2">
                      <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Highlighting border element */}
                  <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-all duration-500" />
                </div>
              );
            })}
          </div>

          {}
          <div className="lg:hidden relative">
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 px-2 cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: "none" }}
            >
              {services.map((srv, idx) => {
                const IconComponent = srv.icon;
                const isSelected = idx === activeSlide;

                return (
                  <div
                    key={srv.id}
                    onClick={() => slideTo(idx)}
                    className={`snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[3/4.8] rounded-[2rem] overflow-hidden relative flex flex-col justify-end p-6 border transition-all duration-500 ${
                      isSelected ? "border-white/20 shadow-2xl scale-[1.01]" : "border-black/5 opacity-80"
                    }`}
                  >
                    {/* Background visual */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={srv.imageUrl}
                        alt={srv.title}
                        onError={(e:any) => {
                          e.target.src = `https://placehold.co/600x900/1e1e1e/ffffff?text=${srv.title}`;
                        }}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    

                    {/* Overlay specs */}
                    <div className="relative z-10 text-left space-y-2">

                      <div className="space-y-1">
                        <span className="text-[8px] font-mono tracking-widest text-[#f26522] uppercase font-black block">
                          {srv.tag}
                        </span>
                        <h3 className="text-lg font-black text-white tracking-tight">
                          {srv.title}
                        </h3>
                      </div>

                      <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {}
            <div className="flex justify-between items-center mt-4 px-4">
              <div className="flex gap-2">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => slideTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? "w-8 bg-neutral-900" : "w-2 bg-neutral-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => slideTo(Math.max(0, activeSlide - 1))}
                  className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                  disabled={activeSlide === 0}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => slideTo(Math.min(services.length - 1, activeSlide + 1))}
                  className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                  disabled={activeSlide === services.length - 1}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}