"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSearch,
  Compass,
  Send,
  Eye,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
  img: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Deep-Dive Reputation Audit",
    desc: "We begin every engagement with a thorough audit of your digital footprint. We analyse the first three pages of Google results for your brand name and key executives, review all major review platforms, social channels, news mentions, and forum discussions. This gives us a precise map of your current reputation landscape strengths, vulnerabilities, and the specific threats that need to be addressed first.",
    icon: FileSearch,
    accentColor: "#f26522", // Brand Orange
    badge: "Discovery & Audit",
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Custom Strategy Development",
    desc: "Based on the audit findings, our team builds a tailored ORM strategy specific to your brand, industry, and goals. We identify which negative content to suppress, which channels to prioritise, what positive content needs to be created, and how to structure a review management programme. We present this strategy in full before any work begins you always know exactly what we're doing and why.",
    icon: Compass,
    accentColor: "#38bdf8", // Sky Blue
    badge: "Strategic Blueprint",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Active Campaign Deployment",
    desc: "With strategy approved, our team gets to work. Content is created and optimised. Suppression campaigns are launched. Review management processes are activated. Monitoring systems are configured. We work across SEO, content, PR, and social simultaneously because reputation management is a multi-channel discipline that requires coordinated execution, not siloed tactics.",
    icon: Send,
    accentColor: "#a78bfa", // Lavender Violet
    badge: "Launch & Suppress",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Real-Time Monitoring & Response",
    desc: "Our team monitors your brand around the clock. Every new review is responded to within 24 hours. Every emerging mention — positive or negative is flagged and acted upon. If a new reputation threat appears, we respond immediately, adjusting the strategy before a small issue becomes a large crisis. You receive weekly updates and monthly comprehensive reports throughout the engagement.",
    icon: Eye,
    accentColor: "#34d399", // Emerald Green
    badge: "24/7 Mitigation",
    img: "/img-5.png",
  },
  {
    number: "05",
    title: "Measure, Report & Continuously Improve",
    desc: "Every month, we provide detailed reporting that tracks suppression progress, review score improvements, sentiment trends, and share-of-voice metrics. We don't just tell you what we did, we show you the measurable impact on your brand's standing. Based on results, we continuously refine the strategy to compound gains and ensure your online reputation keeps improving, never stagnating.",
    icon: BarChart3,
    accentColor: "#fbbf24", // Golden Amber
    badge: "Analytics & Scaling",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
  },
];

const OrmProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-play interval triggers step rotation every 6 seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      className="relative min-h-screen text-white py-14 px-6 md:px-12 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Ambient background accent glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Intro Section */}
        <div className="max-w-4xl mb-16 md:mb-24 mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#f26522] font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-poppins"
          >
            How We Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Our 5-Step ORM Process <br />
            <span className="text-[#f26522] relative inline-block">
              Transparent From Day One
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed font-poppins"
          >
            We believe in complete transparency. Here's exactly how Marketrixa
            approaches every online reputation management engagement from the
            first call to long-term protection.
          </motion.p>
        </div>

        {/* Dynamic Stepper Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Right Column: Interactive Accordion Stack */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`premium-card p-6 md:p-8 cursor-pointer border transition-all duration-500 overflow-hidden relative ${
                    isActive
                      ? "bg-white/[0.04] border-[#f26522]/30 shadow-[0_15px_40px_rgba(242,101,34,0.06)] scale-[1.01]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false); // Stop autoplay on click
                  }}
                >
                  {/* Progressive Horizontal Line on Top of Active Step */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ backgroundColor: step.accentColor }}
                    />
                  )}

                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Step Number Badge */}
                      <span
                        className="text-xs font-bold uppercase tracking-widest font-poppins"
                        style={{
                          color: isActive
                            ? step.accentColor
                            : "rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        Step {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold tracking-tight font-outfit text-white group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Icon Container */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "bg-[#0b0f1a] text-white"
                          : "bg-white/5 border-transparent text-gray-500"
                      }`}
                      style={{
                        borderColor: isActive
                          ? `${step.accentColor}44`
                          : "transparent",
                        color: isActive ? step.accentColor : undefined,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Accordion Content (Desc) */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-poppins pt-2 text-justify md:text-left">
                      {step.desc}
                    </p>

                    {/* Tiny Mobile Custom Image inside Mobile card to make it look premium */}
                    <div className="lg:hidden mt-6 h-48 w-full rounded-2xl overflow-hidden relative border border-white/5">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-poppins">
                        {step.badge}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrmProcess;
