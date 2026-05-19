"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import {
  Stethoscope,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  MapPin,
  Award,
  Settings2,
  BarChart3,
  HeadphonesIcon,
  HardHat,
  User,
  Car,
  Cpu,
  Landmark,
  Hotel,
  Scale,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface IndustryItem {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  desc: string;
  accent: string;
}

const WhyIndusMarket: React.FC = () => {
  const industries: IndustryItem[] = [
    {
      title: "Healthcare & Hospitals",
      icon: Stethoscope,
      desc: "Build trust and protect reputation for hospitals, clinics, and healthcare providers.",
      accent: "#ef4444",
    },
    {
      title: "Real Estate",
      icon: Building2,
      desc: "Drive buyer confidence and manage brand perception for developers and agents.",
      accent: "#3b82f6",
    },
    {
      title: "Education & Ed-Tech",
      icon: GraduationCap,
      desc: "Engage students and parents with transparent and impactful communication.",
      accent: "#a855f7",
    },
    {
      title: "Hospitality & Hotels",
      icon: Hotel,
      desc: "Enhance guest experience and maintain strong online reputation across platforms.",
      accent: "#f59e0b",
    },
    {
      title: "Legal & Professional Services",
      icon: Scale,
      desc: "Build authority and trust for legal firms and professional service providers.",
      accent: "#6366f1",
    },
    {
      title: "E-Commerce & Retail",
      icon: ShoppingBag,
      desc: "Manage reviews and brand perception to directly influence purchase decisions.",
      accent: "#10b981",
    },
    {
      title: "Finance & Fintech",
      icon: Landmark,
      desc: "Establish credibility and trust in financial services and fintech platforms.",
      accent: "#22c55e",
    },
    {
      title: "SaaS & Technology",
      icon: Cpu,
      desc: "Position your tech brand with strong authority and consistent messaging.",
      accent: "#06b6d4",
    },
    {
      title: "Construction & Infrastructure",
      icon: HardHat,
      desc: "Strengthen brand trust for large-scale infrastructure and construction projects.",
      accent: "#f97316",
    },
    {
      title: "Personal Brand / Executives",
      icon: User,
      desc: "Build a powerful personal brand and maintain a strong professional presence.",
      accent: "#ec4899",
    },
    {
      title: "Food & Restaurant Chains",
      icon: UtensilsCrossed,
      desc: "Drive footfall and loyalty through strong online reviews and brand presence.",
      accent: "#eab308",
    },
    {
      title: "Automotive Dealerships",
      icon: Car,
      desc: "Boost showroom visits and customer trust with strong digital reputation.",
      accent: "#0ea5e9",
    },
  ];

  const valueProps = [
    {
      title: "Local Expertise",
      icon: MapPin,
      desc: "Based in Gujarat, we understand regional business dynamics and local customer behavior.",
    },
    {
      title: "Experienced Team",
      icon: Award,
      desc: "Skilled professionals in digital marketing, communication, and strategic brand management.",
    },
    {
      title: "Customized Strategies",
      icon: Settings2,
      desc: "Every business is unique. We design solutions based on your specific industry and goals.",
    },
    {
      title: "Transparent Reporting",
      icon: BarChart3,
      desc: "Regular progress reports showing performance metrics and reputation improvements.",
    },
    {
      title: "Continuous Support",
      icon: HeadphonesIcon,
      desc: "Ongoing monitoring and active support to ensure long-term reputation success.",
    },
  ];

  // Carousel slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically calculate visible cards depending on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3); // Small Desktop
      } else {
        setVisibleCards(4); // Large Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, industries.length - visibleCards);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay function
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500); // Transitions slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  // Handle touch/mouse swipe gestures and trigger snapping
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // Minimum drag px distance to register a slide swap
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="text-white selection:bg-[#f26522]/30 bg-[#0b0f1a]">
      {/* --- SECTION: Industries We Serve --- */}
      <section
        className="py-20 relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Ambient background accent glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-[#f26522] text-xs font-bold uppercase tracking-[0.3em] mb-4 block font-poppins">
                Who We Serve
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                We've Managed Reputations Across Every Major <br />
                <span className="text-white/30 italic">Industry.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/80 font-light max-w-2xl text-base leading-relaxed"
              >
                Online reputation challenges are universal but the tactics that
                work in healthcare look very different from those needed in real
                estate or hospitality. Our team has deep experience across
                industries, which means faster results and strategies built for
                your specific competitive landscape.
              </motion.p>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <div className="hidden md:flex gap-3">
                  <button
                    onClick={() => {
                      handlePrev();
                      setIsAutoPlaying(false);
                    }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 hover:bg-[#f26522] hover:border-[#f26522] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => {
                      handleNext();
                      setIsAutoPlaying(false);
                    }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 hover:bg-[#f26522] hover:border-[#f26522] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Animated Autoplay indicator */}
                <div className="hidden sm:flex items-center gap-2 ml-4 text-xs text-white/30 font-poppins">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isAutoPlaying
                        ? "bg-[#f26522] animate-pulse"
                        : "bg-white/10"
                    }`}
                  />
                  <span>{isAutoPlaying ? "Auto-Scroll Active" : "Paused"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Slider Window */}
          <div ref={containerRef} className="relative overflow-visible">
            <div className="overflow-hidden py-4 -my-4 px-2 -mx-2">
              <motion.div
                className="flex gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                onDragStart={() => setIsAutoPlaying(false)}
                animate={{ x: `-${currentIndex * (100 / industries.length)}%` }}
                transition={{ type: "spring", stiffness: 180, damping: 25 }}
                style={{
                  width: `${(industries.length / visibleCards) * 100}%`,
                }}
              >
                {industries.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={i}
                      style={{ width: `${100 / industries.length}%` }}
                      className="px-1 select-none"
                    >
                      <motion.div
                        className="premium-card group p-8 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden relative flex flex-col justify-between h-[360px] border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-3xl"
                        whileHover={{ y: -6 }}
                      >
                        {/* Interactive Top Progressive bar */}
                        <div
                          className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                          style={{ backgroundColor: item.accent }}
                        />

                        <div>
                          {/* Accent Circle Icon block */}
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                            style={{
                              backgroundColor: `${item.accent}15`,
                              color: item.accent,
                              boxShadow: `0 8px 24px -6px ${item.accent}33`,
                            }}
                          >
                            <IconComponent size={26} />
                          </div>

                          <h3 className="text-md md:text-lg font-bold mb-4 text-white group-hover:text-white transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>

                        {/* Visual Accent Glow */}
                        <div
                          className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                          style={{ backgroundColor: item.accent }}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Custom Interactive Scroll Pagination Indicator bar */}
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
        </div>
      </section>

      {/* --- SECTION: Why Choose Marketrixa (Gujarat Focus) --- */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass mb-6 bg-white/5"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 font-poppins">
                The Marketrixa Edge
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white">
              Why Choose Marketrixa for <br />
              <span className="text-[#f26522]">ORM Service in Gujarat?</span>
            </h2>

            <p className="mt-8 mx-auto max-w-2xl text-gray-400 font-poppins text-base md:text-lg leading-relaxed">
              Choosing the right reputation management partner can make a
              significant difference in your brand image. Marketrixa combines
              local market understanding with modern digital strategies to
              deliver reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-card aspect-square max-w-md mx-auto relative z-10 p-0 overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Gujarat Business Hub"
                  className="w-full h-full object-cover opacity-50 grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <p className="text-[#f26522] font-black text-6xl opacity-20 mb-2 font-outfit">
                    079
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 font-poppins">
                    Rooted in Local Innovation
                  </p>
                </div>
              </div>
              {/* Background Geometric Decor */}
              <div className="absolute -top-12 -left-12 w-48 h-48 border border-[#f26522]/20 rounded-full animate-pulse pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-white/5 rounded-full pointer-events-none" />
            </motion.div>

            {/* Value Props Side */}
            <div className="space-y-4">
              {valueProps.map((prop, i) => {
                const PropIcon = prop.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, ease: E }}
                    className="group flex gap-6 p-6 rounded-2xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f26522]/50 group-hover:text-[#f26522] transition-all text-white/80">
                      <PropIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-[#f26522] transition-colors font-outfit text-white">
                        {prop.title}
                      </h4>
                      <p className="text-white/40 text-sm leading-relaxed font-light font-poppins">
                        {prop.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Section */}
      <section className="pb-20 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border border-white/5 p-12 md:p-20 rounded-[3rem] relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#f26522] blur-[100px] rounded-full opacity-10 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] rounded-full opacity-10 pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f26522] to-transparent" />

            <h3 className="text-2xl md:text-4xl mb-5 text-white">
              Your Reputation Is Being Shaped Right Now.{" "}
              <br className="hidden md:block " />{" "}
              <span className="text-[#f26522]">Take Control.</span>
            </h3>
            <p className="text-gray-400 text-md mb-5">
              Every day without an active online reputation management strategy
              is a day your brand's story is being written by others. Let
              Marketrixa's experts build, protect, and grow the reputation your
              business deserves.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#d94e1a] text-white font-bold px-10 py-5 rounded-full shadow-[0_0_30px_rgba(242,101,34,0.3)] transition-all font-poppins text-base border-none cursor-pointer"
            >
              Get Your Free ORM Audit
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyIndusMarket;
