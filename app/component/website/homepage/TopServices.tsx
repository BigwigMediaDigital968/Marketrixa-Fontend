"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Bot,
  MessageSquare,
  Database,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  AlertTriangle,
  Play,
  Pause,
} from "lucide-react";

// --- Types ---
interface CaseStudyMini {
  problem: string;
  strategy: string;
  result: string;
  statCallout: string;
}

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ComponentType<any>;
  videoUrl: string;
  status: string;
  color: string;
  caseStudy: CaseStudyMini;
  fallbackImage?: string;
}

// --- High Fidelity Services & Performance Data ---
const services: ServiceItem[] = [
  {
    id: "meta-ads",
    title: "Meta Ads Scaling",
    tag: "PAID SOCIAL PERFORMANCE",
    shortDesc: "High-converting Meta ad funnels.",
    fullDesc:
      "We build and scale conversion-focused Meta ad campaigns with data-backed creatives, audience testing, retargeting systems, and aggressive ROAS optimization strategies.",
    icon: Smartphone,
    videoUrl:
      "https://cdn.pixabay.com/video/2020/05/23/39892-423345743_large.mp4",
    fallbackImage: "/home/MetaAds.png",
    status: "META CAMPAIGNS: SCALING",
    color: "from-[#1877F2]/20 via-[#1877F2]/5 to-transparent",
    caseStudy: {
      problem:
        "Client acquisition costs increased due to poor audience targeting.",
      strategy:
        "Launched multi-angle creative testing with advanced retargeting flows.",
      result: "Generated consistent 8.7x ROAS with scalable daily conversions.",
      statCallout: "8.7x ROAS",
    },
  },
  {
    id: "google-ads",
    title: "Google Ads",
    tag: "SEARCH & DISPLAY",
    shortDesc: "Intent-driven lead acquisition.",
    fullDesc:
      "Capture high-intent buyers through optimized Google Search, Display, YouTube, and Performance Max campaigns engineered for scalable growth.",
    icon: Bot,
    fallbackImage: "/home/GoogleAds.png",
    videoUrl: "https://cdn.pixabay.com/video/2026/04/26/349093_large.mp4",
    status: "GOOGLE ADS: ACTIVE",
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    caseStudy: {
      problem: "Low-quality inbound leads were hurting conversion rates.",
      strategy:
        "Rebuilt keyword targeting, landing pages, and conversion tracking.",
      result: "Reduced CPL by 63% while doubling qualified lead volume.",
      statCallout: "-63% CPL",
    },
  },
  {
    id: "ugc-videos",
    title: "UGC Video Production",
    tag: "CREATIVE CONTENT",
    shortDesc: "Authentic creator-driven creatives.",
    fullDesc:
      "Produce scroll-stopping UGC videos designed for paid ads, social proof, and conversion performance across Meta, TikTok, and Reels ecosystems.",
    icon: MessageSquare,
    fallbackImage: "/home/ugcvideo.png",
    videoUrl:
      "https://cdn.pixabay.com/video/2020/02/16/32454-392669561_large.mp4",
    status: "UGC CONTENT: LIVE",
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    caseStudy: {
      problem:
        "Traditional ad creatives suffered from banner blindness and fatigue.",
      strategy:
        "Produced creator-led native style UGC hooks with rapid testing cycles.",
      result: "CTR improved by 4.3x with significantly lower CPMs.",
      statCallout: "4.3x CTR",
    },
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    tag: "CREATOR PARTNERSHIPS",
    shortDesc: "Strategic creator collaborations.",
    fullDesc:
      "Scale brand awareness and trust through influencer campaigns, creator partnerships, whitelisting collaborations, and performance-driven social activations.",
    icon: Database,
    fallbackImage: "/home/video.png",
    videoUrl:
      "https://cdn.pixabay.com/video/2019/04/05/22599-328624855_large.mp4",
    status: "CREATOR NETWORK: ACTIVE",
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    caseStudy: {
      problem: "Brand struggled to build social trust and organic reach.",
      strategy:
        "Activated niche creators with performance-based influencer campaigns.",
      result:
        "Reached 12M+ targeted users and increased branded search by 210%.",
      statCallout: "+210% Brand Search",
    },
  },
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

export default function TopServices() {
  const [activeTab, setActiveTab] = useState<ServiceItem>(services[0]);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronize playback states cleanly whenever service tabs change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeTab, isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (videoRef.current) {
      videoRef.current.muted = nextMute;
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" text-white font-sans antialiased min-h-screen flex flex-col justify-center relative overflow-hidden py-10 -mt-10">
      <GridPattern opacity={0.03} />

      {/* Background Lighting Aura */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(242,101,34,0.05) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(242,101,34,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Section Header Text */}

        {/* Core Double-Column Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT SIDE COLUMN: Service selection item list with responsive glow hooks */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-start">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="w-1.5 h-1.5 bg-[#f26522] rounded-full" />
                <span className="text-[10px] font-mono text-[#f26522] uppercase tracking-[0.3em] font-black">
                  Core Capabilities
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter"
              >
                Why Brands Choose Our <br />
                <span className="text-[#f26522] italic font-light">
                  Top Services?
                </span>
              </motion.h2>
            </div>
            {services.map((srv) => {
              const isActive = activeTab.id === srv.id;

              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setActiveTab(srv)}
                  onClick={() => setActiveTab(srv)}
                  className={`group relative cursor-pointer p-5 rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-neutral-900 border-[#f26522]/30 shadow-2xl"
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  {/* Subtle active laser left side indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSideBar"
                      className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-[#f26522] rounded-r-md"
                    />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Active Icon container */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 shrink-0 ${
                        isActive
                          ? "bg-[#f26522] text-black border-[#f26522]/50 shadow-md shadow-[#f26522]/10"
                          : "bg-white/5 text-neutral-400 border-white/10 group-hover:text-white"
                      }`}
                    >
                      <srv.icon className="w-5 h-5" />
                    </div>

                    <div className="text-left min-w-0">
                      <h3
                        className={`text-lg font-black tracking-tight pt-0.5 leading-none ${
                          isActive ? "text-[#f26522]" : "text-white"
                        }`}
                      >
                        {srv.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 leading-relaxed truncate mt-1">
                        {srv.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Absolute Glowing Perimeter Outline */}
                  {isActive && (
                    <motion.div
                      layoutId="serviceGlow"
                      className="absolute inset-0 rounded-2xl border border-[#f26522]/30 pointer-events-none"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE COLUMN: Consolidated Video Mockup & Mini Case Study card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[2.5rem] bg-gradient-to-b from-[#140a04] via-[#050201] to-[#000] border border-[#f26522]/20 p-5 md:p-6 shadow-2xl relative overflow-hidden group hover:border-[#f26522]/40 transition-colors duration-500">
            {/* Ambient tech glow leaking */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#f26522]/5 blur-3xl rounded-full pointer-events-none z-0 animate-pulse" />

            <div className="relative z-10 space-y-5 h-full flex flex-col justify-between">
              {/* 1. MOCKUP VIDEO PANEL */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group/player">
                {/* Mock OS Browser header details */}
                <div className="h-6 w-full bg-neutral-900 border-b border-white/5 flex items-center justify-between px-3 z-10 relative">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[7.5px] font-mono tracking-widest text-white/30 uppercase">
                    audited_telemetry_loop.mp4
                  </span>
                  <div className="w-10" />
                </div>

                {/* Video Render viewport */}
                <div className="relative w-full h-[calc(100%-24px)] overflow-hidden">
                  <img
                    src={activeTab.fallbackImage}
                    alt={activeTab.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                  />
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={activeTab.id}
                      ref={videoRef}
                      src={activeTab.videoUrl}
                      loop
                      muted={isMuted}
                      playsInline
                      autoPlay
                      transition={{ duration: 0.4 }}
                      className="absolute z-10 inset-0 w-full h-full object-cover opacity-100 group-hover/player:opacity-100 transition-opacity"
                    />
                  </AnimatePresence>

                  {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 pointer-events-none" /> */}

                  {/* Active Playback Indicator badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 border border-[#f26522]/20 px-2.5 py-1 rounded-lg backdrop-blur-sm shadow-xl pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[7.5px] font-mono text-white/70 uppercase tracking-widest font-black">
                      {activeTab.status}
                    </span>
                  </div>

                  {/* Integrated Audio Trigger overlays */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white hover:text-[#f26522] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                      title={isPlaying ? "Pause Screen" : "Play Screen"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white hover:text-[#f26522] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                      title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. DYNAMICS & DETAILED DESCRIPTION PANEL */}
              <div className="space-y-2">
                <h4 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f26522] animate-pulse" />
                  {activeTab.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {activeTab.fullDesc}
                </p>
              </div>

              {/* 3. INTEGRATED MINI CASE STUDY PROTOCOL (PROBLEM → STRATEGY → OUTCOME) */}
              <div className="border-t border-white/5 pt-4 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Problem Pillar */}
                  <div className="p-3 rounded-xl bg-neutral-950 border border-white/5 space-y-1 hover:border-red-500/10 transition-colors">
                    <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      PROBLEM
                    </span>
                    <p className="text-[10px] text-neutral-400 leading-snug line-clamp-2">
                      {activeTab.caseStudy.problem}
                    </p>
                  </div>

                  {/* Strategy Pillar */}
                  <div className="p-3 rounded-xl bg-neutral-950 border border-white/5 space-y-1 hover:border-[#f26522]/20 transition-colors">
                    <span className="text-[10px] font-mono text-[#f26522] font-bold uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      STRATEGY
                    </span>
                    <p className="text-[10px] text-neutral-400 leading-snug line-clamp-2">
                      {activeTab.caseStudy.strategy}
                    </p>
                  </div>

                  {/* Outcome Pillar */}
                  <div className="p-3 rounded-xl bg-neutral-900 border border-[#f26522]/20 space-y-1 hover:border-emerald-500/30 transition-colors">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {activeTab.caseStudy.statCallout}
                    </span>
                    <p className="text-[10px] text-neutral-300 leading-snug line-clamp-2">
                      {activeTab.caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Operational Audit CTA Row */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1 text-[10px] text-neutral-500 font-mono">
                {/* <span>Verified System Outcome</span> */}
                <span></span>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact?source=service-showcase"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#f26522] hover:text-[#ff7b3c] uppercase tracking-wider transition-colors"
                >
                  <span>Request Custom Strategy Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>

            {/* Glinting glass design outline overlay */}
            <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/20 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
