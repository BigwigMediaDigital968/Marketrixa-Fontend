'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  TrendingUp,
  Home,
  ShoppingBag,
  HeartPulse,
  Award,
  UtensilsCrossed,
  ArrowRight,
  ShieldCheck,
  X,
  Target,
  BarChart3,
  Calendar,
  Layers,
  Sparkles,
  DollarSign,
  Activity,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

// --- Types & Interfaces ---
interface Blueprint {
  problem: string;
  solution: string;
  timeline: string[];
  channels: string[];
}

interface IndustryItem {
  id: number;
  title: string;
  tag: string;
  desc: string;
  metric: string;
  metricLabel: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  sparklinePoints: string;
  blueprint: Blueprint;
}

// --- High Fidelity Industry Data & Custom Blueprints ---
const industries: IndustryItem[] = [
  {
    id: 1,
    title: "Finance & Trading",
    tag: "CAPITAL SCALE",
    desc: "Maximize acquisition for trading desks, brokerage accounts, and investment firms using high-intent organic funnels.",
    metric: "350K+",
    metricLabel: "Audited Trading Leads",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    icon: TrendingUp,
    accentColor: "#3b82f6", // Neon Blue
    sparklinePoints: "M 0 50 Q 30 30 60 45 T 120 15 T 180 35 T 240 5 T 300 10",
    blueprint: {
      problem: "Traditional paid ads suffer from extreme CPC inflation ($15+/click) and high compliance dropoffs.",
      solution: "Deploy programmatic SEO hubs targeting middle-of-funnel search terms combined with interactive financial calculators.",
      timeline: ["Week 1-2: Compliance Audit & Tech Setup", "Week 3-6: Launch Calculator Engines", "Week 7-12: Scale Programmatic Pages"],
      channels: ["Google Search", "Financial News Outlets", "Whitelisted Newsletter Placements"]
    }
  },
  {
    id: 2,
    title: "Real Estate",
    tag: "HIGH-VALUATION ACQUISITION",
    desc: "Route high-ticket buyers and commercial real estate investors directly to broker CRM pipelines in real-time.",
    metric: "12.6K+",
    metricLabel: "Verified Investors",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    icon: Home,
    accentColor: "#a855f7", // Purple
    sparklinePoints: "M 0 50 Q 35 45 70 30 T 140 25 T 210 10 T 280 5 T 300 0",
    blueprint: {
      problem: "Generic lead forms attract low-intent 'looky-loos' that exhaust broker sales resources.",
      solution: "Implement strict verification funnels requiring proof of funds/intent before scheduling automated property tours.",
      timeline: ["Week 1: Pipeline mapping & CRM sync", "Week 2-4: Interactive property portal live", "Week 5-8: Multi-channel investor targeting"],
      channels: ["LinkedIn Corporate Ads", "Private Equity Networks", "Sleek Custom Landing Pages"]
    }
  },
  {
    id: 3,
    title: "E-commerce Stores",
    tag: "D2C PERFORMANCE",
    desc: "Scale global checkouts using optimized whitelisted creator UGC hooks, payment prompts, and checkout sequences.",
    metric: "11.4x",
    metricLabel: "Peak ROAS Achieved",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    icon: ShoppingBag,
    accentColor: "#ec4899", // Pink
    sparklinePoints: "M 0 50 Q 25 55 50 30 T 100 40 T 150 15 T 200 20 T 300 -10",
    blueprint: {
      problem: "Skyrocketing ad costs and creative fatigue trigger steady conversion dropoffs.",
      solution: "Launch an automated Creator-Whitelisting engine that constantly matches and tests fresh consumer hook variations.",
      timeline: ["Week 1: Creator onboarding & contracts", "Week 2-3: Creative matrix generation", "Week 4-8: Dynamic scaling & micro-optimization"],
      channels: ["TikTok Spark Ads", "Meta Whitelisted Handles", "YouTube Shorts Engine"]
    }
  },
  {
    id: 4,
    title: "Medical Clinics",
    tag: "LOCAL HEALTHCARE",
    desc: "Deploy automated support bots and high-converting regional funnels to keep patient appointment calendars fully booked.",
    metric: "-48%",
    metricLabel: "Patient CAC Drop",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    icon: HeartPulse,
    accentColor: "#10b981", // Emerald Green
    sparklinePoints: "M 0 50 Q 30 40 60 45 T 120 30 T 180 35 T 240 10 T 300 5",
    blueprint: {
      problem: "High staff phone-time overhead, no-shows, and erratic local map listing placement.",
      solution: "Deploy localized SEO structures matched with AI-driven booking agents operating 24/7 on WhatsApp/Web.",
      timeline: ["Week 1: HIPAA compliant API stack setup", "Week 2-3: Local map dominance framework", "Week 4-6: AI booking bot launch"],
      channels: ["Google Maps Local SEO", "Local Facebook Community Ads", "SMS Recall Automations"]
    }
  },
  {
    id: 5,
    title: "Coaches & Masterminds",
    tag: "EDUCATION SCALE",
    desc: "Build highly authoritative personal brand ecosystems, programmatic landing pages, and interactive calendar funnels.",
    metric: "+320%",
    metricLabel: "Member ARR Uplift",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    icon: Award,
    accentColor: "#f59e0b", // Amber
    sparklinePoints: "M 0 50 Q 20 45 40 30 T 80 25 T 120 10 T 200 -5 T 300 -15",
    blueprint: {
      problem: "Lack of brand differentiation and manually intensive high-ticket closing structures.",
      solution: "Construct a VSL (Video Sales Letter) asset engine backed by programmatic calendar distribution and qualification gates.",
      timeline: ["Week 1-2: Positioning & VSL Scripting", "Week 3-4: Calendar & Funnel Assembly", "Week 5+: Paid/Organic scale launch"],
      channels: ["YouTube Ads", "Twitter/X Authority Building", "Sleek Custom Portal Assets"]
    }
  },
  {
    id: 6,
    title: "Premium Restaurants",
    tag: "HOSPITALITY LEADERSHIP",
    desc: "Capture local high-value reservations, automate dinner inquiries, and drive targeted local customer awareness.",
    metric: "4.8x",
    metricLabel: "Booking Volume Peak",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    icon: UtensilsCrossed,
    accentColor: "#ef4444", // Crimson Red
    sparklinePoints: "M 0 50 Q 30 45 60 40 T 120 30 T 180 25 T 240 10 T 300 5",
    blueprint: {
      problem: "Inability to predict demand drop-offs and high commission cuts from aggregators.",
      solution: "Launch an exclusive loyalty club utilizing visual storytelling campaigns and direct-channel reservations.",
      timeline: ["Week 1: Direct VIP engine configuration", "Week 2-4: Visual asset library launch", "Week 5-8: Geo-fenced social campaigns"],
      channels: ["Instagram Geo-targeted Ads", "VIP Club Email Matrix", "Influencer Media Syndication"]
    }
  }
];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
);

// --- Individual Clean Image-First Hover Card Component ---
const IndustryCard: React.FC<{
  srv: IndustryItem;
  isActive: boolean;
  onSelect: () => void;
}> = ({ srv, isActive, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className="relative flex flex-col justify-end rounded-[2.5rem] bg-neutral-900 overflow-hidden w-[300px] sm:w-[340px] md:w-[380px] h-[480px] shrink-0 cursor-pointer select-none border border-white/5 transition-all duration-500 hover:scale-105 "
      animate={{
        scale: isActive ? 1.03 : 0.97,
        borderColor: isActive ? `${srv.accentColor}40` : "rgba(255,255,255,0.05)",
      }}
      style={{
        boxShadow: isActive 
          ? `0 20px 45px -10px ${srv.accentColor}20` 
          : "0 10px 30px rgba(0,0,0,0.5)",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
    >
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img 
          src={srv.imageUrl} 
          alt={srv.title} 
          className="w-full h-full object-cover "
          animate={{
            scale: isHovered ? 1.08 : 1,
            opacity: isHovered ? 0.35 : 0.85,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Dark dynamic vignette gradient to keep text completely readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/60 to-transparent" />
      </div>

      {/* Static Initial Card View (Bottom Left Title, Tag) */}
      <div className="relative z-10 p-8 w-full flex flex-col justify-between h-full pointer-events-none">
        
        {/* Floating Accent Icon */}
        <div className="flex justify-between items-center w-full">
          <div 
            className="w-10 h-10 rounded-xl bg-neutral-950/80 border border-white/10 flex items-center justify-center shadow-lg"
            style={{ color: srv.accentColor }}
          >
            <srv.icon className="w-5 h-5" />
          </div>
          
          {isActive && (
            <span 
              className="text-[8px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-neutral-950/80 border border-white/10"
              style={{ color: srv.accentColor }}
            >
              ACTIVE TARGET
            </span>
          )}
        </div>

        {/* Bottom Section containing dynamic transitions */}
        <div className="space-y-3 w-full">
          
          {/* Subtitle Tag */}
          <span 
            className="text-[10px] font-mono tracking-widest font-black uppercase"
            style={{ color: srv.accentColor }}
          >
            {srv.tag}
          </span>

          {/* Primary Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
            {srv.title}
          </h3>

          {/* Expanded Metadata (Fades & Slides Up on Hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 15 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 15 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-4 pt-2 border-t border-white/5 overflow-hidden pointer-events-auto"
              >
                <p className="text-[12px] text-neutral-300 leading-relaxed">
                  {srv.desc}
                </p>

                {/* Analytical Sparks & Metrics */}
                <div className="flex items-center justify-between bg-neutral-950/60 p-3 rounded-2xl border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-neutral-500 font-mono font-bold">Metrics Peak</span>
                    <span className="text-lg font-black font-mono text-white flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      {srv.metric}
                    </span>
                  </div>

                  <div className="w-24 h-8 relative">
                    <svg className="w-full h-full" viewBox="0 0 300 60" fill="none">
                      <motion.path
                        d={srv.sparklinePoints}
                        stroke={srv.accentColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Action CTA Trigger */}
                <Link 
                href={"/contact"}
                  className="flex items-center justify-between w-full py-2 px-4 rounded-xl border border-white/10 bg-neutral-950/80 hover:bg-white hover:text-[#f26522]! transition-all text-xs font-black tracking-tight shadow-md"
                  style={{ color: srv.accentColor }}
                >
                  <span>Let's Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Static Neon Rail at the base */}
      <div 
        className="absolute bottom-0 left-12 right-12 h-[2px] opacity-40 blur-[1px]"
        style={{ background: srv.accentColor }}
      />
    </motion.div>
  );
};

export default function Inndustries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedBlueprint, setSelectedBlueprint] = useState<IndustryItem | null>(null);

  // Vertical scroll progress triggers horizontal carousel offset mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 18,
    mass: 0.5,
  });

  // Calculate strict pixel boundary rules for the carousel
  useEffect(() => {
    const calculateTranslation = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const computedDiff = trackWidth - viewportWidth;
        // Keep padded room at the end of scroll
        setMaxTranslate(computedDiff > 0 ? -computedDiff - 50 : 0);
      }
    };

    calculateTranslation();
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, []);

  // Update active card index based on dynamic scroll position
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const computedIndex = Math.min(Math.floor(latest * 6.1), 5);
      setActiveIndex(computedIndex);
    });
  }, [scrollYProgress]);

  // Translate scrollYProgress directly to horizontal translate pixels
  const xTranslation = useTransform(smoothProgress, [0, 1], [0, maxTranslate]);

  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  // Scroll smoothly to target index cards
  const jumpToCard = (index: number) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const totalHeight = element.scrollHeight - window.innerHeight;
    const targetScroll = element.offsetTop + (totalHeight * (index / 5));
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative pb-16 md:pb-24 text-white font-sans antialiased selection:bg-[#f26522] selection:text-black">
      {/* Scroll track container mapping vertical depth to horizontal carousel animation */}
      <div ref={containerRef} className="relative h-[450vh] w-full">
        
        {/* Sticky core viewport frame */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-8 md:py-12">
          
          {/* Subtle Grid & Dark Backdrop */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.01) 0%, transparent 80%)"
              }}
            />
            <GridPattern opacity={0.03} />
          </div>

          {/* Centered Premium Header */}
          <div className="relative w-full max-w-4xl mx-auto px-6 text-center z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/5 shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Dynamic Carousel Engine</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
              Industries <span className="text-[#f26522] italic font-light">We Scale</span>
            </h2>
            
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
              Scroll downwards to slide the deck and experience real growth systems mapped directly to industry frameworks.
            </p>
          </div>

          {/* Centered Horizontal Scrolling Track */}
          <div className="relative w-full z-10 py-6 my-auto overflow-visible flex items-center ">
            <motion.div
              ref={trackRef}
              style={{ x: xTranslation }}
              className="flex gap-8 px-6 sm:px-16 lg:px-24 w-max items-center md:px-24"
            >
              {industries.map((item, idx) => (
                <IndustryCard 
                  key={item.id} 
                  srv={item} 
                  isActive={idx === activeIndex}
                  onSelect={() => setSelectedBlueprint(item)}
                />
              ))}
            </motion.div>
          </div>

          {/* Centered Bottom Status Strip & Navigation Dots */}
          <div className="relative w-full max-w-4xl mx-auto px-6 z-10 flex flex-col items-center gap-4 pt-4 border-t border-white/5 text-center">
            
            {/* Active Card Title Display */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[8px] font-mono text-neutral-500 uppercase font-bold tracking-widest">Active Framework</span>
              <span className="text-sm font-black text-[#f26522] tracking-wide">
                {industries[activeIndex].title}
              </span>
            </div>

            {/* Clickable Multi-Segment Dots */}
            <div className="flex items-center gap-3 ">
              {industries.map((item, i) => (
                <button
                  key={i}
                  onClick={() => jumpToCard(i)}
                  className="group flex items-center justify-center p-1 relative"
                  title={item.title}
                >
                  <div 
                    className={`h-2.5 rounded-full transition-all duration-300 relative z-10 ${
                      i === activeIndex ? "w-8" : "w-2.5 hover:bg-neutral-600"
                    }`}
                    style={{ backgroundColor: i === activeIndex ? item.accentColor : "rgba(255, 255, 255, 0.15)" }}
                  />
                  
                  {/* Subtle outer indicator light */}
                  {i === activeIndex && (
                    <motion.div 
                      layoutId="activeDotShadow"
                      className="absolute inset-0 rounded-full blur-[4px] -z-10"
                      style={{ backgroundColor: item.accentColor, opacity: 0.5 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Scroll Assist Prompt */}
            <div className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              <span className="animate-pulse">Scroll down to slide stack</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#f26522] animate-bounce horizontal-bounce" />
            </div>

          </div>

        </div>
      </div>

      {/* Slide-out Operational Blueprint Panel */}
      <AnimatePresence>
        {selectedBlueprint && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlueprint(null)}
              className="fixed inset-0 bg-neutral-950/80 z-50 backdrop-blur-md"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] lg:w-[560px] bg-neutral-900 border-l border-white/10 z-50 overflow-y-auto p-8 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-white/5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedBlueprint.accentColor }} />
                    <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase font-black">
                      {selectedBlueprint.tag} Blueprint
                    </span>
                  </div>

                  <button 
                    onClick={() => setSelectedBlueprint(null)}
                    className="w-10 h-10 rounded-full border border-white/5 bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all shadow-md"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black text-white leading-tight flex items-center gap-3">
                      <selectedBlueprint.icon className="w-8 h-8" style={{ color: selectedBlueprint.accentColor }} />
                      {selectedBlueprint.title}
                    </h2>
                    <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                      Detailed scale blueprints built by analyzing multi-million dollar capital runs.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-neutral-950/50 border border-white/5 flex flex-col gap-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 font-bold">Projected Yield</span>
                      <span className="text-2xl font-black font-mono text-white flex items-center gap-1">
                        <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                        {selectedBlueprint.metric}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-950/50 border border-white/5 flex flex-col gap-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 font-bold">Priority Status</span>
                      <span className="text-xs font-black font-mono text-emerald-500 flex items-center gap-1">
                        <Target className="w-4 h-4 animate-spin" /> Live & Scalable
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-black flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Core Bottleneck
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/30 p-4 rounded-xl border border-white/5">
                      {selectedBlueprint.blueprint.problem}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-black flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" /> Recommended Pipeline
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/30 p-4 rounded-xl border border-white/5">
                      {selectedBlueprint.blueprint.solution}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-black flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Implementation Phases
                    </h4>
                    <div className="space-y-3 pl-2 border-l-2 border-white/5">
                      {selectedBlueprint.blueprint.timeline.map((step, index) => (
                        <div key={index} className="relative flex items-start gap-3">
                          <div 
                            className="w-2.5 h-2.5 rounded-full border-2 border-neutral-900 shrink-0 mt-1" 
                            style={{ backgroundColor: selectedBlueprint.accentColor }} 
                          />
                          <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-500">
                  <span>Source Code ID: FS-{selectedBlueprint.id}03</span>
                  <span>Est. Setup: 14 Days</span>
                </div>
                
                <button 
                  className="w-full py-4 px-6 rounded-2xl font-black text-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 hover:brightness-110 shadow-lg"
                  style={{ backgroundColor: selectedBlueprint.accentColor }}
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Configure Growth Strategy</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Industries2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedBlueprint, setSelectedBlueprint] = useState<IndustryItem | null>(null);

  // Monitor center element as user scrolls natively
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 340; // Approx card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    if (index >= 0 && index < industries.length) {
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <div className="relative pb-16 md:pb-24 text-white font-sans antialiased selection:bg-[#f26522] selection:text-black min-h-screen flex flex-col justify-center">
      {/* Injecting scroll styling strictly to keep custom premium aesthetics */}
      <style >
        {`
        .industry-scroll-track2::-webkit-scrollbar {
          height: 10px;
        }
        .industry-scroll-track2::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 99px;
        }
        .industry-scroll-track2::-webkit-scrollbar-thumb {
          background: rgba(242, 101, 34, 0.3);
          border-radius: 99px;
        }
        .industry-scroll-track2::-webkit-scrollbar-thumb:hover {
          background: rgba(242, 101, 34, 0.6);
        }`}
        </style>

      <div className="relative w-full">
        {/* Subtle Grid & Dark Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.01) 0%, transparent 80%)"
            }}
          />
          <GridPattern opacity={0.03} />
        </div>

        {/* Centered Premium Header */}
        <div className="relative w-full max-w-4xl mx-auto px-6 text-center z-10 space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/5 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Dynamic Industry Deck</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
            Industries <span className="text-[#f26522] italic font-light">We Scale</span>
          </h2>
          
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
            Swipe or scroll horizontally through the cards below to check real growth systems mapped directly to industry frameworks.
          </p>
        </div>

        {/* Horizontal Dragging Scroll Track container (NATIVE SWIPER) */}
        <div className="relative w-full z-10 py-6 my-auto overflow-visible flex flex-col items-center">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="industry-scroll-track2 scrollbar-none flex py-10 gap-6 px-6 sm:px-16 lg:px-24 w-full overflow-x-auto snap-x snap-mandatory pb-6"
          >
            {industries.map((item, idx) => (
              <div key={item.id} className="snap-center shrink-0">
                <IndustryCard 
                  srv={item} 
                  isActive={idx === activeIndex}
                  onSelect={() => setSelectedBlueprint(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Centered Bottom Status Strip & Navigation controls */}
        <div className="relative w-full max-w-4xl mx-auto px-6 z-10 flex flex-col items-center gap-4 pt-4 border-t border-white/5 text-center">

          {/* Navigation Controls: Buttons & Indicators */}
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-[#f26522]/30 flex items-center justify-center transition-colors cursor-pointer text-neutral-400 hover:text-white shadow-md"
            >
              &larr;
            </button>

            {/* Clickable Multi-Segment Dots */}
            <div className="flex items-center gap-2.5">
              {industries.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ left: i * 340, behavior: "smooth" });
                    }
                  }}
                  className="group flex items-center justify-center p-1 relative"
                  title={item.title}
                >
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 relative z-10 ${
                      i === activeIndex ? "w-6" : "w-2 hover:bg-neutral-600"
                    }`}
                    style={{ backgroundColor: i === activeIndex ? "#f26522" : "rgba(255, 255, 255, 0.15)" }}
                  />
                </button>
              ))}
            </div>

            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-[#f26522]/30 flex items-center justify-center transition-colors cursor-pointer text-neutral-400 hover:text-white shadow-md"
            >
              &rarr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}