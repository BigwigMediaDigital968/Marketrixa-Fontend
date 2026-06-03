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
  ShieldCheck,
  Sparkles
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

// --- High Fidelity Operational Data (4-Service Setup) ---
const services: ServiceItem[] = [
  {
    title: "AI Chatbots",
    tag: "Conversational AI",
    desc: "Deploy custom-trained, context-aware AI models that resolve up to 80% of inbound support tickets and capture active leads 24/7.",
    metric: "94% Precision Match",
    icon: Bot,
    status: "COGNITIVE RUNTIME: ACTIVE",
    bgImage: "https://images.unsplash.com/photo-1633311905139-7b6088a69e33?q=80&w=1332&auto=format&fit=crop",
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
    bgImage: "https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop",
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    highlights: ["API-Verified Messaging", "Automated Sequence Logic", "Interactive Action Chips"]
  },
  {
    title: "CRM Automation",
    tag: "Orchestration",
    desc: "Connect your entire sales tech stack. Instantly synchronize lead data, update opportunity values, and trigger smart actions without delay.",
    metric: "0.1s Data Latency",
    icon: Database,
    status: "INTEGRATION LINK: SECURED",
    bgImage: "https://images.unsplash.com/photo-1678227547316-fb79e35b085d?q=80&w=1169&auto=format&fit=crop",
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    highlights: ["HubSpot & Salesforce APIs", "Automated Attribution Logs", "Behavioral Scoring Triggers"]
  },
  {
    title: "AI Lead Qualification",
    tag: "Predictive Filtering",
    desc: "Filter out cold traffic automatically. Score intent signals, social profiles, and validation metrics before routing leads to human desks.",
    metric: "4.5x Call CVR Lift",
    icon: Cpu,
    status: "QUALIFIER ENGINE: OPERATIONAL",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    highlights: ["Intent Behavioral Tracking", "Social Profile Enrichment", "Proof-of-Funds Validation"]
  }
];

// --- Animation Constants ---
const cardFadeInVariants : any = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
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

// --- Local Interactive Card Component for optimized cursor tracking & hover expansions ---
const ServiceCard: React.FC<{ srv: ServiceItem; idx: number }> = ({ srv, idx }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      custom={idx}
      variants={cardFadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-7 rounded-[2rem] bg-neutral-950 border border-white/5 hover:border-[#f26522]/40 transition-all duration-500 overflow-hidden shadow-2xl h-auto lg:h-[360px] cursor-pointer"
    >
      
      {/* Background Graphic Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={srv.bgImage} 
          alt={srv.title} 
          className="w-full h-full object-cover opacity-[0.25] group-hover:opacity-[0.15] transition-all duration-750 scale-100 group-hover:scale-105 filter saturate-50"
        />
        
        {/* Core color filters & darkening layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/55 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-b ${srv.color} opacity-50 group-hover:opacity-100 transition-all duration-700`} />
        
        {/* Dynamic Mouse-Following Radial Spot Glow (Desktop Only) */}
        {isHovered && (
          <div 
            className="absolute hidden lg:block rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              width: "350px",
              height: "350px",
              background: `radial-gradient(circle, rgba(242,101,34,0.18) 0%, transparent 70%)`,
              left: `${coords.x - 175}px`,
              top: `${coords.y - 175}px`,
            }}
          />
        )}
      </div>

      {/* 1. Anchored Top Bar (Always static at the top) */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#f26522] group-hover:bg-[#f26522] group-hover:text-black group-hover:shadow-lg group-hover:shadow-[#f26522]/20 transition-all duration-500">
          <srv.icon className="w-5 h-5" />
        </div>
        
        {/* Technical Status Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/90 border border-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-mono tracking-wider text-white/50 uppercase">{srv.status}</span>
        </div>
      </div>

      {/* 2. Interactive Bottom Section (Tag, Title, and Description aligned bottom) */}
      <div className="relative z-10 mt-8 lg:mt-auto flex flex-col justify-end w-full">
        
        {/* Title, Tag and Description Content Block */}
        <div className="space-y-1.5 transition-transform duration-500 ease-in-out lg:group-hover:-translate-y-1">
          <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-bold block">
            {srv.tag}
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-[#f26522] transition-colors duration-300 leading-none pb-0.5">
            {srv.title}
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {srv.desc}
          </p>
        </div>

        {/* Collapsible Content Area (Highlights + Outcome metrics) */}
        <div className="border-t border-white/5 mt-4 pt-4 space-y-4 lg:h-0 group-hover:h-36 transition-all duration-500 ease-in-out">
          
          {/* Bullets List: Hidden on desktop until hover, fully expanded on mobile */}
          <div className="overflow-hidden transition-all duration-500 ease-in-out lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-[120px] lg:group-hover:opacity-100">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-1 text-left">
              {srv.highlights.map((hl, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] text-neutral-300 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-[#f26522] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                  <span className="tracking-tight">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action / KPI Metrics Block: Hidden on desktop until hover, fully expanded on mobile */}
          <div className="transition-all duration-500 ease-in-out lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <div className="flex justify-between items-center bg-neutral-950/95 rounded-2xl px-4 py-2 border border-white/5 group-hover:border-[#f26522]/20 transition-all duration-500 shadow-xl">
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase tracking-widest text-neutral-500 font-bold font-mono">Audited Outcome</span>
                <span className="text-xs font-black text-white font-mono">{srv.metric}</span>
              </div>
              
              {/* Sliding CTA Arrow */}
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#f26522] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                <span>Explore Tech</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Ambient Outer Glowing Border Ring on Hover */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function AIGrowthSection() {
  return (
    <div className="bg-neutral-950 text-white font-sans antialiased overflow-hidden py-16 md:py-24 relative w-full flex flex-col justify-center min-h-screen">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.04) 0%, transparent 70%)"
        }}
      />
      <GridPattern opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/5 mb-5 shadow-lg"
          >
            <Cpu className="w-3.5 h-3.5 text-[#f26522]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Autonomous Growth Ecosystem</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none mb-5"
          >
            AI Operations & <br />
            <span className="text-[#f26522] italic font-light">Growth Infrastructure</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto"
          >
            Deploy fully integrated customer engagement cycles. Our models autonomously manage dialogue, orchestrate direct-chat workflows, and sync databases around the clock.
          </motion.p>
        </div>

        {/* 2-Column Bento-style Services Grid with dynamic mouse interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-stretch">
          {services.map((srv, idx) => (
            <ServiceCard key={idx} srv={srv} idx={idx} />
          ))}
        </div>

      </div>
    </div>
  );
}