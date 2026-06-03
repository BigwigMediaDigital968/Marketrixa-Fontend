'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    Compass,
    Sparkles,
    Zap,
    TrendingUp,
    ArrowRight,
    ShieldCheck,
    Terminal,
    Activity,
    Users,
    Video,
    Megaphone
} from "lucide-react";

// --- Types ---
interface StepItem {
    number: string;
    tag: string;
    title: string;
    desc: string;
    icon: React.ComponentType<any>;
    gridClass: string; // Dynamic bento sizing
}

// --- Dynamic 5-Step Operational Scaling Data ---
const steps: StepItem[] = [
    {
        number: "01",
        tag: "DISCOVERY & STRATEGY",
        title: "Audience & Content Research",
        desc: "We deep-dive into your brand, audience, and business goals to identify which UGC formats—testimonials, tutorials, reactions, reviews, or lifestyle content—will drive the strongest results.",
        icon: Search,
        gridClass: "md:col-span-3"
    },
    {
        number: "02",
        tag: "CREATOR MATCHING",
        title: "Creator Sourcing & Briefing",
        desc: "We identify and onboard creators who align with your brand voice, then provide a strategic content framework that keeps every video authentic, relatable, and conversion-focused.",
        icon: Users,
        gridClass: "md:col-span-3"
    },
    {
        number: "03",
        tag: "CONTENT PRODUCTION",
        title: "Production & Quality Review",
        desc: "Creators produce the content while our team reviews each asset for brand safety, messaging clarity, content quality, and platform-specific optimization before approval.",
        icon: Video,
        gridClass: "md:col-span-2"
    },
    {
        number: "04",
        tag: "PUBLISH & AMPLIFY",
        title: "Distribution & Promotion",
        desc: "Content is published organically and amplified through paid campaigns when needed. We manage posting schedules, hashtags, placements, and platform-specific formatting.",
        icon: Megaphone,
        gridClass: "md:col-span-2"
    },
    {
        number: "05",
        tag: "ANALYTICS & OPTIMISATION",
        title: "Track, Report & Scale",
        desc: "We continuously monitor content performance, engagement, and conversions, scaling winning creatives and refining strategy based on real audience data and results.",
        icon: TrendingUp,
        gridClass: "md:col-span-2"
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

// --- Individual Premium Card component with Cursor Coordinate Glow and spring scaling ---
const StepCard: React.FC<{ item: StepItem; idx: number }> = ({ item, idx }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // Scales and rotates dynamically based on hover and card position for an organic layout feel

            className={`group relative flex flex-col justify-between p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden h-auto cursor-pointer shadow-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:scale-105 hover:bg-[#f26522] hover:border-[#f26522] hover:shadow-[0_20px_50px_rgba(242,101,34,0.22)] ${item.gridClass}`}
        >

            {/* Dynamic Mouse-Following Glow (Visible on Desktop Only when not hovered to prevent interference with bright background change) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isHovered && (
                    <div
                        className="absolute hidden lg:block rounded-full pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
                        style={{
                            width: "240px",
                            height: "240px",
                            background: `radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)`,
                        }}
                    />
                )}
            </div>

            {/* A. UPPER BAR: Custom Top-Left aligned icon, number, and tag layout */}
            <div className="relative z-10 flex justify-between items-center w-full">
                {/* Rounded Icon block matching the reference card design style - Inverts on hover */}
                <div className="flex gap-4 items-center">
                    <div className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 shadow-md bg-white/5 text-neutral-400 border-white/10 group-hover:bg-neutral-950 group-hover:text-[#f26522] group-hover:border-neutral-950">
                        <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase font-black text-[#f26522] group-hover:text-neutral-900 transition-colors duration-500 block">
                            {item.tag}
                        </span>
                        <h4 className="text-md md:text-lg font-black text-white tracking-tight leading-none group-hover:text-neutral-950 transition-colors duration-500">
                            {item.title}
                        </h4>
                    </div>
                </div>

                {/* Large back-end index numbering indicator */}
                <span className="text-4xl font-black font-mono tracking-tighter text-[#f26522]/40 group-hover:text-neutral-950/10 transition-colors duration-500">
                    {item.number}
                </span>
            </div>

            {/* B. LOWER CONTENT: Clean, non-generic typography & CTA action link */}
            <div className="relative z-10 space-y-3.5 mt-4 text-left">
                <div className="space-y-1">

                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-950/85 transition-colors duration-500 line-clamp-3">
                        {item.desc}
                    </p>
                </div>

                {/* Clean Link Anchor (Inverts color smoothly on card hover) */}
            </div>
        </motion.div>
    );
};

export default function Workflow() {
    return (
        <div className=" text-white font-sans antialiased overflow-hidden py-16 md:py-24 relative w-full flex flex-col justify-center min-h-screen">

            {/* Background Ambience */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.03) 0%, transparent 70%)"
                }}
            />
            <GridPattern opacity={0.03} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Section Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neutral-900 border border-white/5 mb-5 shadow-lg">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">How We Work</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
                            Our UGC Video Process
                            <br />
                            <span className="text-[#f26522] italic font-light"> From Brief to Business Results</span>
                        </h2>
                    </div>
                    <div className="pb-6">
                        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-md text-left lg:text-right">
                        Transparency is built into how we work. Here is exactly what happens after you reach out to Marketrixa:          
                        </p>
                    </div>
                </div>

                {/* 2-Column Asymmetric Bento Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full items-stretch">
                    {steps.map((item, idx) => (
                        <StepCard key={item.number} item={item} idx={idx} />
                    ))}
                </div>

            </div>
        </div>
    );
}