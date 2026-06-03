'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Database,
  Cpu,
  ArrowRight,
  Terminal,
  TrendingUp,
  Users,
  Coins,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

// --- Types ---
interface ServiceItem {
  title: string;
  tag: string;
  desc: string;
  metric: string;
  icon: React.ComponentType<any>;
  status: string;
  bgImage: string;
  color: string;
  highlights: string[];
}

interface CampaignResult {
  id: number;
  label: string;
  metric: string;
  subMetric: string;
  tag: string;
  channels: string[];
  description: string;
  screenshotUrl: string;
  icon: React.ComponentType<any>;
}

// --- Configuration Data ---
const services: ServiceItem[] = [
  {
    title: "AI Chatbot Agents",
    tag: "Conversational AI",
    desc: "Deploy custom-trained, context-aware AI models that resolve up to 80% of inbound support tickets and capture active leads.",
    metric: "94% Precision Match",
    icon: Bot,
    status: "COGNITIVE RUNTIME: ACTIVE",
    bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    color: "from-[#f26522]/20 via-[#f26522]/5 to-transparent",
    highlights: ["OpenAI & Anthropic Engines", "Context Knowledge Base", "Dynamic Live Handoff"]
  },
  {
    title: "WhatsApp Automation",
    tag: "Direct messaging",
    desc: "Supercharge your outbound sales flow with automatic trigger actions, customized drip broadcasts, and abandoned cart recoveries.",
    metric: "98% Open Rate Standard",
    icon: MessageSquare,
    status: "SYSTEM GATEWAY: STABLE",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    highlights: ["API-Verified Messaging", "Automated Sequence Logic", "Interactive Action Chips"]
  },
  {
    title: "CRM Integration Sync",
    tag: "Orchestration",
    desc: "Connect your entire sales tech stack. Instantly synchronize lead data, update opportunity values, and trigger smart actions.",
    metric: "0.1s Data Latency",
    icon: Database,
    status: "INTEGRATION LINK: SECURED",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    highlights: ["HubSpot, Salesforce & Webhooks", "Automated Attribution Logs", "Behavioral Scoring Triggers"]
  }
];

const campaignResults: CampaignResult[] = [
  {
    id: 1,
    label: "Scalable E-Commerce Store Overhaul",
    metric: "11.4x ROAS",
    subMetric: "+412% Revenue YoY",
    tag: "Scale & Revenue",
    channels: ["Meta Ads", "Google Shopping"],
    icon: TrendingUp,
    description: "Multichannel ad spend optimization scaling budget seamlessly while lowering acquisition friction using high-intent retargeting systems.",
    screenshotUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    label: "High-Volume Lead Capture Funnel",
    metric: "12,450+ Leads",
    subMetric: "MQL Conversions",
    tag: "Lead Generation",
    channels: ["TikTok Sparks", "Meta Leads"],
    icon: Users,
    description: "Deployed organic-feel creator-whitelisted UGC hooks to hyper-target specific decision-makers and skyrocket standard registration metrics.",
    screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    label: "B2B Cost Optimization Overhaul",
    metric: "$15.30 CPL",
    subMetric: "Reduced from $42.50 CPL",
    tag: "Cost Efficiency",
    channels: ["Google Search", "LinkedIn Dynamic"],
    icon: Coins,
    description: "Restructured programmatic keyword bidding targets and deployed automated negative matchmaking algorithms to fully clear ad budget waste.",
    screenshotUrl: "https://images.unsplash.com/photo-1543286386-713bcd2629ee?q=80&w=1200&auto=format&fit=crop"
  }
];

// --- Animation Constants ---
const cardFadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  })
};

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
);


// --- Main Application Viewport Containing Both Services & Unified Results Showcase ---
export default function ResultSection() {
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const activeResult = campaignResults[activeResultIndex];

  return (
    <div className=" text-white font-sans antialiased min-h-screen">

      {/* SECTION 2: PREMIUM SLIDEOVER CAMPAIGN RESULTS CAROUSEL */}
      <section id="results-carousel" className="relative py-20 md:py-28 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: "radial-gradient(circle at 10% 80%, rgba(242,101,34,0.05) 0%, transparent 60%)" }} />
        <GridPattern opacity={0.03} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-10 bg-[#f26522]" />
                <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                  Audited Performance Logs
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                Results <br />
                <span className="text-white/60 italic font-light">By Active Campaigns</span>
              </h2>
            </div>
            <p className="text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed">
              We capture exact system screenshots from verified accounts showing real ROAS trends, volume metrics, and cost optimization milestones. Click the previews inside the dashboard block to inspect results.
            </p>
          </div>

          {/* Core Slidover Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: Tilted Dashboard Visualization & Glass Filter Overlays */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[340px] md:min-h-[440px] px-2">
              
              {/* Dynamic cross-fading screenshots container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeResult.id}
                  initial={{ opacity: 0, rotate: -6, scale: 0.94 }}
                  animate={{ opacity: 1, rotate: -3, scale: 0.98 }}
                  exit={{ opacity: 0, rotate: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl group/tilt hover:rotate-0 hover:scale-100 hover:border-[#f26522]/40 transition-all duration-700 pointer-events-auto"
                >
                  {/* Mock OS Browser Header */}
                  <div className="h-6 w-full bg-neutral-950/95 border-b border-white/5 flex items-center justify-between px-3.5 z-10 relative">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[7px] font-mono text-white/30 uppercase tracking-widest">audited_campaign_telemetry.png</span>
                    <div className="w-8" />
                  </div>

                  {/* Screenshot Image Frame */}
                  <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-neutral-950">
                    <img
                      src={activeResult.screenshotUrl}
                      alt={activeResult.label}
                      className="w-full h-full object-cover opacity-35 group-hover/tilt:opacity-65 transition-opacity duration-700 filter contrast-125 saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Live Indicator Badge overlapping image */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-neutral-950/90 border border-[#f26522]/30 px-3 py-1 rounded-full z-20 backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[8px] font-mono text-white/70 uppercase tracking-widest">LIVE HUD FEED</span>
              </div>

            </div>

            {/* RIGHT COLUMN: SINGLE DYNAMIC DARK-ORANGE CONTAINER FOR CONTENT & PREVIEWS */}
            <div className="lg:col-span-7 flex">
              
              {/* Unified container block styled with dark orange gradients and neon borders */}
              <div className="w-full rounded-[2.5rem] bg-gradient-to-b from-[#1c0c05] via-[#0f0703] to-[#0a0502] border border-[#f26522]/30 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#f26522]/50 transition-colors duration-500">
                
                {/* Tech light leaks */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f26522]/5 blur-3xl rounded-full pointer-events-none" />
                
                {/* A. ACTIVE CAMPAIGN INFO (TOP HALF) */}
                <div className="space-y-5 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${activeResult.id}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      {/* Active Result Tag & Main KPI Callout */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-[9px] font-black uppercase tracking-wider">
                          {activeResult.tag}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <activeResult.icon className="w-5 h-5 text-[#f26522]" />
                          <span className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
                            {activeResult.metric}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-semibold text-emerald-400 font-mono tracking-wide uppercase flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" />
                          {activeResult.subMetric}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug">
                          {activeResult.label}
                        </h3>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                          {activeResult.description}
                        </p>
                      </div>

                      {/* Active Channels Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {activeResult.channels.map((ch, i) => (
                          <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300">
                            #{ch}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* B. PREVIEW SYSTEM & TABBED CONTROLS (BOTTOM HALF) */}
                <div className="mt-8 pt-6 border-t border-white/5 relative z-10 space-y-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-bold block">
                      Select Campaign Preview
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">
                      Audit Ref: 2026.04
                    </span>
                  </div>

                  {/* Horizontal responsive preview carousel grid */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 overflow-x-auto pb-1 scrollbar-hide">
                    {campaignResults.map((item, idx) => {
                      const isActive = idx === activeResultIndex;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveResultIndex(idx)}
                          className={`group/preview relative flex flex-col items-stretch text-left rounded-xl overflow-hidden border transition-all duration-300 min-w-[90px] md:min-w-0 ${
                            isActive
                              ? "border-[#f26522] bg-[#f26522]/5 shadow-xl scale-[1.02]"
                              : "border-white/5 bg-neutral-950 hover:border-white/20 hover:bg-white/5"
                          }`}
                        >
                          {/* Screenshot Mini-Thumbnail preview */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/5">
                            <img
                              src={item.screenshotUrl}
                              alt={item.label}
                              className={`w-full h-full object-cover transition-all duration-500 ${
                                isActive ? "opacity-75 scale-105" : "opacity-30 group-hover/preview:opacity-50"
                              }`}
                            />
                            {/* Linear dark mask overlay */}
                            <div className="absolute inset-0 bg-neutral-950/20" />
                          </div>

                          {/* Detail summary under preview image */}
                          <div className="p-2 space-y-0.5">
                            <span className={`text-[7px] font-mono block uppercase ${isActive ? "text-[#f26522] font-black" : "text-neutral-500"}`}>
                              0{idx + 1} &bull; {item.metric.split(" ")[0]}
                            </span>
                            <span className="text-[9px] font-bold text-white block line-clamp-1">
                              {item.tag}
                            </span>
                          </div>

                          {/* Floating active neon-glow bar overlay */}
                          {isActive && (
                            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#f26522]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Action Trigger Link */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] text-neutral-500 font-mono">Verified system analytics</span>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="/audit"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#f26522] hover:text-[#ff7b3c] uppercase tracking-wider transition-colors"
                    >
                      <span>Deploy Similar System</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </div>

                {/* Glinting glass design stroke */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/30 rounded-[2.5rem] pointer-events-none transition-colors" />
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}