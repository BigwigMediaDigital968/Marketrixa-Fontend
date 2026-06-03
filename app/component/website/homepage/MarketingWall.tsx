'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Users,
    Sparkles,
    Award,
    Clapperboard,
    ArrowUpRight
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// --- Types ---
interface InfluencerItem {
    id: number;
    name: string;
    handle: string;
    niche: string;
    followers: string;
    imageUrl: string;
    campaignResults: {
        metric: string;
        subMetric: string;
        description: string;
    };
    channelIcon: React.ComponentType<any>;
}

// --- High Fidelity Mockup Data ---
const influencers: InfluencerItem[] = [
    {
        id: 1,
        name: "Natasha Trades",
        handle: "@natasha_trades",
        niche: "Finance & Crypto",
        followers: "380K Followers",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "6.4x ROI Lift",
            subMetric: "14k Accounts Opened",
            description: "Drove high-intent sign-ups through custom trading screen breakdown reels."
        },
        channelIcon: FaInstagram
    },
    {
        id: 2,
        name: "Josh Parker",
        handle: "@josh_estates",
        niche: "Luxury Real Estate",
        followers: "180K Followers",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "$1.2M Vol Sales",
            subMetric: "42 Warm Inquiries",
            description: "Captured qualified HNIs using cinematic structural walkthrough format clips."
        },
        channelIcon: Clapperboard
    },
    {
        id: 3,
        name: "Clara Beauty",
        handle: "@clara_beauty",
        niche: "E-Commerce / Skincare",
        followers: "520K Followers",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "11.4x ROAS",
            subMetric: "15k Direct Checkouts",
            description: "Engineered high-retention problem-solution skincare routine loops."
        },
        channelIcon: FaInstagram
    },
    {
        id: 4,
        name: "Dr. Ryan Vance",
        handle: "@dr_fitness_vlog",
        niche: "Healthcare & Clinics",
        followers: "250K Followers",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "-48% Booking CAC",
            subMetric: "850+ Consultations",
            description: "Promoted custom interactive calendar funnels on daily fitness logs."
        },
        channelIcon: Clapperboard
    },
    {
        id: 5,
        name: "Diane Peterson",
        handle: "@mindset_coach",
        niche: "Coaches & Masterminds",
        followers: "140K Followers",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "+320% ARR Lift",
            subMetric: "4.2k Active Registrations",
            description: "Ran whitelisted organic testimonial ads with authority triggers."
        },
        channelIcon: FaInstagram
    },
    {
        id: 6,
        name: "Chef Marco",
        handle: "@michelin_eats",
        niche: "Premium Restaurants",
        followers: "310K Followers",
        imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop",
        campaignResults: {
            metric: "5x Booking Vol",
            subMetric: "22k Local Footfalls",
            description: "Showcased seasonal kitchen prep routines targeting high-income zip codes."
        },
        channelIcon: Clapperboard
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

// --- Individual Influencer Card with bright background image & bottom highlight bar ---
const InfluencerCard: React.FC<{ item: InfluencerItem }> = ({ item }) => {
    return (
        <div className="relative w-[280px] h-[390px] rounded-lg bg-neutral-900 overflow-hidden shrink-0 shadow-2xl group cursor-pointer">

            {/* 1. Profile Image Backdrop (Always 100% Bright, Clear, and Unblurred) */}
            <div className="absolute inset-0 z-0">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-100 transition-transform duration-700 scale-100 group-hover:scale-105"
                />
                {/* Soft layout gradient to protect bottom text visibility on default view */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* 2. Top Bar (Tag, Channel Icon) */}
            <div className="relative z-10 p-5 flex justify-between items-center">
                <span className="px-3 py-1 rounded-md bg-neutral-950/90 border border-white/10 text-[#f26522] text-[8px] font-black uppercase tracking-wider backdrop-blur-sm">
                    {item.niche}
                </span>

                <div className="w-8 h-8 rounded-full bg-neutral-950/90 border border-white/10 flex items-center justify-center text-[#f26522] shadow-md backdrop-blur-sm">
                    <item.channelIcon className="w-4 h-4" />
                </div>
            </div>

            {/* 3. Static Bottom Details (Visually shifts upward on hover) */}
            {/* Bottom Sliding Glass Panel */}
            <div
                className="
                    absolute inset-x-0 bottom-0 z-20
                    h-[210px]
                    group-hover:bg-neutral-950/40
                    group-hover:backdrop-blur-sm
                    group-hover:border-t border-white/10
                    transition-transform duration-500 ease-out
                    translate-y-[125px]
                    group-hover:translate-y-0
                    p-5
                    flex flex-col
                "
            >
                {/* Always Visible Content */}
                <div className="mb-4">
                    <h4 className="text-lg font-black text-white tracking-tight leading-none pt-1 group-hover:text-[#f26522] transition-colors">
                        {item.name}
                    </h4>

                    <p className="text-[10px] text-neutral-300 font-mono tracking-wider pt-1 uppercase">
                        {item.handle}
                    </p>
                </div>

                {/* Hidden Content Revealed on Hover */}
                <div className="pt-4 border-t border-white/10">
                    <span className="text-[8px] font-mono tracking-widest text-emerald-400 font-black uppercase flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                        Verified Case Outcome
                    </span>

                    <h3 className="text-xl font-black text-white tracking-tight leading-none pt-2">
                        {item.campaignResults.metric}
                    </h3>

                    <span className="text-[9px] font-bold text-neutral-300 font-mono block pt-1">
                        {item.campaignResults.subMetric}
                    </span>
                </div>
            </div>

            {/* 5. Bright Orange Bottom Border & Hover Ambient Glow */}
            <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#f26522] z-30 shadow-[0_0_15px_#f26522]" />
            <div className="absolute inset-0 bg-[#f26522]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
        </div>
    );
};

export default function MarketingWall() {
    const [isMarqueePaused, setIsMarqueePaused] = useState(false);

    return (
        <div className="bg-neutral-950 text-white font-sans antialiased overflow-hidden py-16 md:py-24 relative w-full flex flex-col justify-center min-h-screen">

            {/* Horizontal infinite sliding marquee keyframe styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-paused-state {
          animation-play-state: paused !important;
        }
      `}} />

            {/* Background Ambience */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.04) 0%, transparent 70%)"
                }}
            />
            <GridPattern opacity={0.03} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Section Header Text */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="h-[2px] w-10 bg-[#f26522]" />
                            <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                                Influencer Hub
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
                            Creator Networks & <br />
                            <span className="text-[#f26522] italic font-light">Performance Audits</span>
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md">
                        We deploy verified whitelisted dark posts directly from custom creator channels. Hover over any influencer card to stop the slider and inspect verified ad returns.
                    </p>
                </div>

                {/* INFINITE LOOPING SLIDING PORTRAIT MARQUEE WALL */}
                <div
                    className="relative w-full overflow-hidden py-6 z-10"
                    onMouseEnter={() => setIsMarqueePaused(true)}
                    onMouseLeave={() => setIsMarqueePaused(false)}
                >
                    {/* Double mapped elements ensure seamless looping wraps */}
                    <div className={`animate-marquee-infinite ${isMarqueePaused ? "marquee-paused-state" : ""} flex gap-5`}>
                        {[...influencers, ...influencers].map((item, idx) => (
                            <motion.div
                                key={`influencer-${item.id}-${idx}`}
                                whileHover={{ scale: 1.04, y: -4 }}
                                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                className="shrink-0"
                            >
                                <InfluencerCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Under Banner Operational Stats */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 rounded-xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522]">
                            <Award className="w-4.5 h-4.5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Want verified creators advocating your product Swaps?</h4>
                            <p className="text-[10px] text-neutral-400">Schedule an onboarding strategy audit with our direct-response team.</p>
                        </div>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/strategy"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#f26522] hover:bg-[#ff7b3c] text-neutral-950 font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
                    >
                        <span>Request Creator Mapping</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                </div>

            </div>
        </div>
    );
}