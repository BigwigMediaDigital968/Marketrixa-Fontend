'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Share2,
  FileText,
  Award,
  Sparkles,
  ArrowRight,
  Cpu,
  Layers
} from "lucide-react";

// --- TypeScript Interfaces ---
interface ServiceItem {
  title: string;
  badge: string;
  icon: React.ComponentType<any>;
  desc: string;
  repurposeTactic?: string;
  accentHex: string;
  gradient: string;
  hoverBorder: string;
  iconColor: string;
  glowColor: string;
}

// --- High Fidelity Service Dataset with Unique Color Themes ---
const connectedServices: ServiceItem[] = [
  {
    title: "Graphic Designing",
    badge: "VISUAL INTERACTIVE",
    icon: Palette,
    desc: "Give your UGC content polished thumbnails, branded overlays, and campaign creatives that command attention before a single second of video plays.",
    accentHex: "#ec4899", // Pink Theme
    gradient: "from-pink-500/15 via-pink-500/5 to-transparent",
    hoverBorder: "hover:border-pink-500/30",
    iconColor: "text-pink-500",
    glowColor: "rgba(236, 72, 153, 0.25)"
  },
  {
    title: "Social Media Marketing",
    badge: "FEED OPTIMIZATION",
    icon: Share2,
    desc: "Our social media team schedules, monitors, and engages around your UGC posts to maximise organic reach and community response.",
    accentHex: "#06b6d4", // Cyan Theme
    gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    hoverBorder: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.25)"
  },
  {
    title: "Content Marketing",
    badge: "OMNICHANNEL SYNDICATION",
    icon: FileText,
    desc: "We repurpose your strongest UGC video moments into blog content, email campaigns, and website testimonials that work long after the reel stops trending.",
    accentHex: "#a855f7", // Purple Theme
    gradient: "from-purple-500/15 via-purple-500/5 to-transparent",
    hoverBorder: "hover:border-purple-500/30",
    iconColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.25)"
  },
  {
    title: "Influencer Marketing",
    badge: "MACRO DISTRIBUTION",
    icon: Award,
    desc: "When you need scale, we bring in influencer partnerships that sit above your UGC base layer — giving your campaign both authenticity and reach.",
    accentHex: "#f26522", // Brand Orange Theme
    gradient: "from-[#f26522]/15 via-[#f26522]/5 to-transparent",
    hoverBorder: "hover:border-[#f26522]/30",
    iconColor: "text-[#f26522]",
    glowColor: "rgba(242, 101, 34, 0.25)"
  }
];

// --- Spotlight Card Component with dynamic coordinate listeners ---
const ConnectedCard: React.FC<{ srv: ServiceItem; idx: number }> = ({ srv, idx }) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`group relative p-6 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-white/5 ${srv.hoverBorder} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl h-[350px] cursor-pointer`}
      style={{
        boxShadow: isHovered ? `0 25px 50px -12px ${srv.glowColor}` : 'none'
      }}
    >
      {/* Spotlight Ambient Aura */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${srv.gradient} opacity-40 group-hover:opacity-100 transition-all duration-700`} />
        {isHovered && (
          <div 
            className="absolute rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              width: "250px",
              height: "250px",
              background: `radial-gradient(circle, ${srv.glowColor} 0%, transparent 70%)`,
              left: `${coords.x - 125}px`,
              top: `${coords.y - 125}px`,
            }}
          />
        )}
      </div>

      {/* Card Content Header Layout */}
      <div className="relative z-10 space-y-5 text-left flex-grow">
        <div className="flex justify-between items-center w-full">
          {/* Accent Colored Icon frame */}
          <div 
            className="w-11 h-11 rounded-2xl bg-neutral-950/80 border border-white/10 flex items-center justify-center transition-all duration-500"
            style={{
              borderColor: isHovered ? `${srv.accentHex}40` : 'rgba(255,255,255,0.05)',
              boxShadow: isHovered ? `0 0 15px ${srv.glowColor}` : 'none'
            }}
          >
            <srv.icon className={`w-5 h-5 ${srv.iconColor} transition-transform duration-500 group-hover:scale-110`} />
          </div>

          <span className="text-[8px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
            // {srv.badge}
          </span>
        </div>

        <div className="space-y-2">
          <h4 className="text-md sm:text-lg font-black text-white group-hover:text-white transition-colors">
            {srv.title}
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-4">
            {srv.desc}
          </p>
        </div>
      </div>

      {/* Decorative colored glow line at the base of the card */}
      <div 
        className="absolute bottom-0 left-8 right-8 h-[2px] opacity-40 blur-[1px] transition-opacity duration-500"
        style={{ 
          background: srv.accentHex,
          opacity: isHovered ? 1 : 0.4
        }}
      />
    </motion.div>
  );
};

// --- Main Section Layout ---
export default function ConnectedServices() {
  const brandOrange = "#f26522";

  return (
    <div className=" text-white font-sans antialiased overflow-hidden py-20 relative w-full flex flex-col justify-center">
      
      {/* Subtle Background Ambience & Radial Glow Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.02) 0%, transparent 60%)"
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(${brandOrange} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/5">
              <Layers className="w-3.5 h-3.5 text-[#f26522]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Ecosystem Integration</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              UGC Works Best as <br />
              <span className="text-[#f26522] italic font-light">Part of a Bigger Picture</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed">
            Our UGC video services integrate seamlessly with the rest of our digital marketing ecosystem. Because a great video with no strategy behind it is just a video.
          </p>
        </div>

        {/* Responsive 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {connectedServices.map((srv, idx) => (
            <ConnectedCard key={idx} srv={srv} idx={idx} />
          ))}
        </div>

        {/* Quick Audit call-out footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-3xl bg-neutral-900/20 border border-white/5 backdrop-blur-md text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">Verified Full-Funnel Repurposing</h4>
              <p className="text-[11px] text-neutral-400">Maximize the long-term yields of your creative campaigns across search channels.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("/contact", "_self")}
            className="px-5 py-3 rounded-full bg-[#f26522] hover:bg-neutral-850 text-xs font-bold text-neutral-200 border border-white/10 hover:border-[#f26522]/30 inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Discuss Funnel Repurposing</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </motion.button>
        </div>

      </div>
    </div>
  );
}