'use client';
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Volume2,
  VolumeX,
  Users,
  Sparkles,
  Heart,
  MessageCircle,
  Eye,
  TrendingUp,
  Share2,
  Clapperboard,
  BadgeAlert
} from "lucide-react";
import Image from "next/image";

// --- Types ---
interface CarouselItem {
  id: number;
  type: "video" | "creator" | "stat";
  tag: string;
  creatorHandle?: string;
  creatorAvatar?: string;
  followers?: string;
  engagement?: string;
  metric?: string;
  subMetric?: string;
  videoUrl?: string;
  imageUrl?: string;
  posterUrl?: string;
  quote?: string;
  niche?: string;
  aspectClass?: string;
  title: string;
}

// --- High Quality Vertical UGC and Collaboration Data ---
const showcaseItems: CarouselItem[] = [
  {
    id: 1,
    type: "video",
    tag: "UGC Reel",
    creatorHandle: "@carter.growth",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    engagement: "9.2% ER",
    videoUrl: "/video1.mp4",
    title: "E-comm Swapping Hook",
    niche: "Fashion & Lifestyle"
  },
  {
    id: 2,
    type: "creator",
    tag: "Creator Profile",
    creatorHandle: "@sarah_designs",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    followers: "142K Reach",
    engagement: "7.8% ER",
    quote: "Creating organic-feeling ad assets that actually keep users scrolling past the 3-second mark.",
    title: "Sarah Jenkins",
    niche: "Aesthetic Tech",
    imageUrl: "https://images.unsplash.com/photo-1644868734189-09a492e1032a?q=80&w=764&auto=format"
  },
  {
    id: 3,
    type: "video",
    tag: "TikTok Ad",
    creatorHandle: "@alex_unboxes",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    engagement: "11.4% ER",
    videoUrl: "/video2.mp4",
    title: "Direct Response Unboxing",
    niche: "Consumer Electronics",
    imageUrl: "https://images.unsplash.com/photo-1644868734189-09a492e1032a?q=80&w=764&auto=format"

  },
  {
    id: 4,
    type: "stat",
    tag: "Campaign Stat",
    metric: "4.8M+",
    subMetric: "Organic UGC Views",
    quote: "Deploying 15+ creator hooks across Meta & TikTok to construct a highly optimized, high-converting creative library.",
    title: "Viral Lift Performance",
    imageUrl: "https://images.unsplash.com/photo-1625169815831-3a532272a7fa?q=80&w=983&auto=format&fit=crop"

  },
  {
    id: 5,
    type: "video",
    tag: "Short Form",
    creatorHandle: "@beautylab_ugc",
    creatorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    engagement: "8.1% ER",
    videoUrl: "video3.mp4",
    title: "Problem-Solution Skincare Reel",
    niche: "Beauty & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1644868734189-09a492e1032a?q=80&w=764&auto=format"

  },
  {
    id: 6,
    type: "creator",
    tag: "Macro Influencer",
    creatorHandle: "@marcus_creative",
    creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    followers: "420K Reach",
    engagement: "6.5% ER",
    quote: "Authentic integration is key. We build product stories that seamlessly fit within daily vlogging formats.",
    title: "Marcus Thorne",
    niche: "High-End Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1625169815831-3a532272a7fa?q=80&w=983&auto=format&fit=crop"

  }
];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }}
  />
);

// --- Individual Interactive Video Card Component ---
const VerticalVideoCard: React.FC<{ item: CarouselItem }> = ({ item }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => { });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-[250px] h-[450px] sm:w-[280px] sm:h-[480px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 group/card flex flex-col justify-between shrink-0 shadow-2xl">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={item.videoUrl}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          className="w-full h-full object-cover opacity-100 group-hover/card:opacity-100 transition-opacity duration-500"
        />
        {/* Soft atmospheric radial gradient mask */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/10" /> */}
      </div>

      {/* Top Overlay Actions & Badges */}
      <div className="relative p-5 z-10 flex justify-between items-center">
        <span className="px-3 py-1 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-[9px] font-black uppercase tracking-wider backdrop-blur-md">
          {item.tag}
        </span>

        {/* Native Social Media Mimic Icon */}
        <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 border border-white/10">
          {item.tag.includes("TikTok") ? (
            <Clapperboard className="w-3.5 h-3.5 text-[#f26522]" />
          ) : (
            <Share2 className="w-3.5 h-3.5 text-[#f26522]" />
          )}
        </div>
      </div>

      {/* Center Interactive Play State Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#f26522] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" onClick={togglePlay}>
          {isPlaying ? (
            <div className="flex gap-1 items-center justify-center">
              <span className="w-1 h-3.5 bg-[#f26522] rounded-full animate-pulse" />
              <span className="w-1 h-3.5 bg-[#f26522] rounded-full animate-pulse delay-75" />
            </div>
          ) : (
            <Play className="w-5 h-5 fill-[#f26522] ml-1" />
          )}
        </div>
      </div>

      {/* Bottom Information Overlays */}
      <div className="relative p-5 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pt-10">

        {/* Creator Info Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <img
            src={item.creatorAvatar}
            alt={item.creatorHandle}
            className="w-8 h-8 rounded-full border border-[#f26522]/40 object-cover"
          />
          <div>
            <h5 className="text-xs font-bold text-white tracking-tight">{item.creatorHandle}</h5>
            <span className="text-[9px] text-neutral-400 font-mono tracking-wider">{item.niche}</span>
          </div>
        </div>

        {/* Caption */}
        <h4 className="text-xs font-semibold text-neutral-200 tracking-tight leading-snug line-clamp-2 mb-4">
          "{item.title}"
        </h4>

        {/* Live Interaction HUD Bar */}
        <div className="flex items-center justify-between border-t border-white/5 pt-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{item.engagement}</span>
            </div>
          </div>

          {/* Interactive Mute Trigger */}
          <button
            onClick={toggleMute}
            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#f26522]/20 hover:border-[#f26522]/30 transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Glassmorphic Orange Highlight Card Ring */}
      <div className="absolute inset-0 border border-white/5 group-hover/card:border-[#f26522]/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default function UgcVideoSection() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  return (
    <div className="min-h-screen text-white font-sans antialiased">

      {/* Injecting smooth CSS marquee frames to drive high frame rate carousel loops */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
      `}} />

      <section id="ugc-showcase" className="relative py-20 overflow-hidden">

        {/* Premium Atmospheric Ambient Lights */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(242,101,34,0.05) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(242,101,34,0.03) 0%, transparent 45%)",
          }}
        />
        <GridPattern opacity={0.06} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-12">
          {/* Section Headers */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-[2px] w-10 bg-[#f26522]" />
                <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                  UGC & Influencer Hub
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                Organic Content <br />
                <span className="text-[#f26522] italic font-light">That Converted Millions</span>
              </h2>
              <p className="mt-3 text-neutral-400 text-xs md:text-sm leading-relaxed">
                We orchestrate, edit, and scale creator-led campaigns. Swipe or hover over any card below to pause the marquee feed and check live content telemetry.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-neutral-900/60 backdrop-blur-md border border-white/5 p-3 rounded-2xl">
              <div className="flex -space-x-2">
                {showcaseItems.filter(i => i.creatorAvatar).map((c) => (
                  <img
                    key={c.id}
                    src={c.creatorAvatar}
                    alt="UGC Creator"
                    className="w-8 h-8 rounded-full border-2 border-neutral-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <h4 className="text-xs font-black tracking-tight text-white">85+ Active Creators</h4>
                <p className="text-[10px] text-[#f26522] font-mono uppercase tracking-wider">Ready to deploy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Sliding Marquee Carousel wrapper */}
        <div
          className="relative w-full overflow-hidden py-4 z-10"
        >
          {/* Double-layered items representation ensures smooth seamless end-to-end loop */}
          <div className={`animate-marquee-loop ${isMarqueePaused ? "marquee-paused" : ""} flex gap-6 px-4`}>

            {/* First Segment */}
            {[...showcaseItems, ...showcaseItems].map((item, index) => {
              const uniqueKey = `marquee-item-${item.id}-${index}`;

              return (
                <motion.div
                  key={uniqueKey}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="shrink-0 cursor-pointer"
                  onMouseEnter={() => setIsMarqueePaused(true)}
                  onMouseLeave={() => setIsMarqueePaused(false)}
                >

                  {/* Item Switch Renderer */}
                  {item.type === "video" ? (
                    <VerticalVideoCard item={item} />
                  ) : item.type === "creator" ? (
                    /* High-fidelity Creator Bio Card */
                    <div className="relative w-[250px] h-[450px] sm:w-[280px] sm:h-[480px] rounded-[2rem] bg-neutral-900/90 border border-white/5 p-6 flex flex-col justify-between hover:border-[#f26522]/30 transition-all duration-500 shadow-2xl overflow-hidden group/card">

                      {/* Interactive background blur dynamic effect */}
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                          src={item.imageUrl}
                          className="w-full h-full object-cover opacity-30 group-hover/card:opacity-75 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20" />

                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f26522]/5 blur-3xl group-hover/card:bg-[#f26522]/10 transition-all duration-500" />
                        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#f26522] text-[8px] font-black uppercase tracking-wider">
                            {item.tag}
                          </span>

                          {/* <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950/80 border border-emerald-500/10">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                            <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Active</span>
                          </div> */}
                        </div>

                        {/* Middle Focus Profile */}
                        <div className="flex flex-col items-center text-center mt-6">
                          <img
                            src={item.creatorAvatar}
                            alt={item.title}
                            className="w-20 h-20 rounded-full border-2 border-[#f26522] object-cover p-1 mb-3.5 shadow-xl shadow-black/40 group-hover/card:scale-105 transition-transform duration-500"
                          />
                          <h4 className="text-md font-bold text-white tracking-tight">{item.title}</h4>
                          <span className="text-xs text-[#f26522] font-mono tracking-widest uppercase mt-0.5">{item.creatorHandle}</span>

                          <div className="flex items-center gap-3 mt-3 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                            <div className="flex items-center gap-1 text-[9px] font-bold tracking-wider uppercase text-neutral-300">
                              <Users className="w-3 h-3 text-[#f26522]" />
                              <span>{item.followers}</span>
                            </div>
                            <div className="w-[1px] h-3 bg-white/10" />
                            <div className="flex items-center gap-1 text-[9px] font-bold tracking-wider uppercase text-neutral-300">
                              <Sparkles className="w-3 h-3 text-emerald-400" />
                              <span>{item.engagement}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quoted Strategy Details */}
                      <div className="relative z-10 mt-6 pt-5 border-t border-white/5">
                        <p className="text-xs text-neutral-400 italic leading-relaxed text-center">
                          "{item.quote}"
                        </p>

                        <div className="flex items-center justify-center gap-1.5 mt-5 text-[10px] text-[#f26522] font-bold uppercase tracking-widest">
                          <span>View Creator Card</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Glassmorphic border ring */}
                      <div className="absolute inset-0 border border-white/5 group-hover/card:border-[#f26522]/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
                    </div>
                  ) : (
                    /* Large Analytic Stat Highlights Card */
                    <div className="relative w-[250px] h-[450px] sm:w-[280px] sm:h-[480px] rounded-[2rem] bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between hover:border-[#f26522]/30 transition-all duration-500 shadow-2xl overflow-hidden group/card">

                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                          src={item.imageUrl}
                          className="w-full h-full object-cover opacity-30 group-hover/card:opacity-75 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20" />

                        {/* Custom background pattern design */}
                        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-[#f26522]/5 blur-3xl group-hover/card:bg-[#f26522]/10 transition-all duration-500" />
                      </div>

                      <div className="relative z-10">
                        <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#f26522] text-[8px] font-black uppercase tracking-wider">
                          {item.tag}
                        </span>

                        <div className="mt-14 space-y-1">
                          <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                            Aggregated Campaigns
                          </span>
                          <h3 className="text-5xl font-black text-white tracking-tighter leading-none group-hover/card:text-[#f26522] transition-colors duration-300">
                            {item.metric}
                          </h3>
                          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-wider uppercase block">
                            {item.subMetric}
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h4 className="text-sm font-bold text-neutral-200 tracking-tight leading-snug mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {item.quote}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
                          <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider">verified ad audit</span>
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#f26522]">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                      {/* Glassmorphic border ring */}
                      <div className="absolute inset-0 border border-white/5 group-hover/card:border-[#f26522]/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Campaign Strategy Highlights */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Hook Optimization",
                desc: "We analyze the first 3 seconds of UGC footage to optimize thumbnail retention rate and direct scrolls."
              },
              {
                title: "Whitelisted Creator Ad Spend",
                desc: "Run high-intensity dark posts directly using custom verified creator profiles to skyrocket trust signals."
              },
              {
                title: "Multi-Platform Adaptation",
                desc: "Tailored native formats optimized for high-yield returns across Instagram Reels, TikTok Sparks, and YT Shorts."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm hover:border-[#f26522]/20 transition-all duration-300">
                <h4 className="text-xs font-black tracking-widest text-[#f26522] uppercase mb-1.5">{feature.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}