'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Users,
    Target,
    ChevronDown,
    Volume2,
    VolumeX,
    Play,
    Pause,
    Clapperboard,
    ShieldCheck,
    TrendingUp,
    Award,
    Terminal,
    Zap,
    CheckCircle2,
    MapPin,
    Settings,
    Flame,
    ArrowRight,
    Eye,
    Percent,
    MapPinned,
    Network,
    BarChart3
} from "lucide-react";
import ServiceSuite from "./ServiceSuite";
import Workflow from "./Workflow";
import ConnectedServices from "./ConnectedServices";


// --- TypeScript Interfaces ---
interface Statistic {
    metric: string;
    subMetric: string;
    desc: string;
    icon: React.ComponentType<any>;
}

interface ExpertiseItem {
    id: string;
    title: string;
    tag: string;
    desc: string;
    icon: React.ComponentType<any>;
}

interface ServiceScope {
    title: string;
    tag: string;
    desc: string;
    features: string[];
    videoUrl: string;
}


interface ConnectedService {
    title: string;
    icon: React.ComponentType<any>;
    desc: string;
    repurposeTactic: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

// --- Data Aggregated directly from PDF Content ---
const trustMetrics: Statistic[] = [
    {
        metric: "79%",
        subMetric: "Consumer Influence",
        desc: "Of consumers say UGC heavily influences final purchase decisions.",
        icon: Users
    },
    {
        metric: "4x",
        subMetric: "Higher Click-Through",
        desc: "Click-through rate spike compared to traditional brand advertising campaigns.",
        icon: Target
    },
    {
        metric: "-50%",
        subMetric: "Lower Acquisition Costs",
        desc: "Drop in Customer Acquisition Cost (CAC) when leveraging UGC-led ad assets.",
        icon: Percent
    },
    {
        metric: "6.9x",
        subMetric: "More Engagement",
        desc: "Audited social engagement compared to standard polished brand-produced videos.",
        icon: TrendingUp
    }
];

const expertisePillars: ExpertiseItem[] = [
    {
        id: "01",
        title: "Authentic UGC Campaigns",
        tag: "SCROLL-STOPPING NATIVE CONTENT",
        desc: "We build campaigns that feel native to the feed - honest, scroll-stopping, and conversion-ready. From concept and creator briefing to final approval, we ensure every piece of content sounds like a real person, not a brand script. This is what drives trust, and trust is what drives sales.",
        icon: Flame
    },
    {
        id: "02",
        title: " Influencer & Creator Video Production",
        tag: "AHMEDABAD & NATIONAL NETWORK",
        desc: "We match your brand with the right micro and nano creators to produce video content that resonates with your exact audience. Whether it is unboxing videos, product reviews, testimonials, or day-in-the-life reels - we manage end-to-end video production with creators based in Ahmedabad and across India.",
        icon: Clapperboard
    },
    {
        id: "03",
        title: "Content Curation & Amplification",
        tag: "CHANNEL SYNDICATION",
        desc: "Great UGC deserves distribution. We curate the best-performing creator content, repurpose it across formats, and amplify it across the channels where your buyers actually spend time - Instagram, YouTube, Meta Ads, and more.",
        icon: Zap
    },
    {
        id: "04",
        title: "Analytics & Performance Tracking",
        tag: "KPI PERFORMANCE METRICS",
        desc: "Every UGC video we run is tied to KPIs - views, engagement rate, click-through rate, and conversion lift. So you always know exactly what your content is doing for your business, not just how many people liked it.",
        icon: Settings
    }
];

const serviceSuite: ServiceScope[] = [
    {
        title: "UGC Campaign Management",
        tag: "END-TO-END ORCHESTRATION",
        desc: "We handle the entire creative lifecycle so you can focus on scale. Includes sourcing, brief development, contract management, content approvals, and compliance verification.",
        features: ["Creator Outreach & Onboarding", "Custom Brand Guideline Briefs", "Sleek Approval Workflows", "Platform Scheduling Sync"],
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-taking-selfie-in-front-of-a-mirror-41712-large.mp4"
    },
    {
        title: "UGC Video Production",
        tag: "HIGH-HOOK SHORT FORMAT CREATIVES",
        desc: "Raw, highly relatable video assets styled specifically for short-form platforms. Managed with talented local creators in Ahmedabad and across India.",
        features: ["Cinematic Unboxing Videos", "Social Proof Video Testimonials", "Day-in-the-life Vlog Reels", "Product Reviews & Demos"],
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-filming-herself-with-a-smartphone-43015-large.mp4"
    },
    {
        title: "Content Amplification",
        tag: "HIGH-YIELD ACQUISITION BOOST",
        desc: "We turn casual creator uploads into raw marketing machines using whitelisted dark-post configurations to improve ad relevancy scores.",
        features: ["Meta Whitelisted Dark Ads", "TikTok Sparks & Reels Boosting", "SMM Cross-Platform Repurposing", "Interactive Social Retargeting"],
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-holding-and-looking-at-her-smartphone-40316-large.mp4"
    },
    {
        title: "Analytics & Data Insights",
        tag: "PERFORMANCE AUDIT CHANNELS",
        desc: "Clear, zero-jargon performance tracking maps sent to your desk every 30 days. We measure direct return on investment, not impressions.",
        features: ["Creator Retention Telemetry", "Audience Sentiment Matrices", "Direct ROAS Attribution Logs", "Monthly Downstream Strategy Tuning"],
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-a-laptop-in-a-office-42409-large.mp4"
    }
];



const valuePillars = [
    {
        title: "Local Market Intelligence",
        desc: "We understand Gujarati consumer behaviour, regional content trends, and local creator ecosystems. Our roots in Ahmedabad help us identify winning strategies locally before scaling them nationally.",
        icon: MapPinned,
        color: "#F59E0B" // Amber
    },
    {
        title: "Full-Funnel Integration",
        desc: "UGC works best when connected to your wider marketing ecosystem. We integrate creator content with SEO, social media, performance ads, and influencer campaigns for compounding growth.",
        icon: Network,
        color: "#3B82F6" // Blue
    },
    {
        title: "Brand Safety First",
        desc: "Every creator is carefully vetted and every asset is reviewed before publication. We balance authentic creator expression with the standards required to protect your brand reputation.",
        icon: ShieldCheck,
        color: "#10B981" // Emerald
    },
    {
        title: "Data-Led, Always",
        desc: "Every content format, creator selection, and distribution decision is backed by performance insights. We rely on data, not assumptions, to guide campaign growth.",
        icon: BarChart3,
        color: "#8B5CF6" // Purple
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

export default function UgcServicePage() {
    const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const videoRef = useRef<HTMLVideoElement>(null);

    // Sync video audio/play state cleanly when toggling services
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.play().catch(() => { });
            setIsPlaying(true);
        }
    }, [activeServiceIdx, isMuted]);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
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
        <div className=" text-white font-sans antialiased min-h-screen relative overflow-hidden selection:bg-[#f26522] selection:text-black">

            {/* Dynamic Grid Overlay Background */}


            { }
            {/* ── 2. CORE UGC EXPERTISE (CREATIVITY & DATA) ── */}
            <section className="relative py-20 border-b border-white/5 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                        <div className="max-w-xl text-left">
                            <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-black">// CREATIVE FRAMEWORK</span>

                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
                                 Where Raw Creativity <br />
                                <span className="text-[#f26522] italic font-light"> Meets Measurable Results</span>
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed text-left">
                            Our UGC expertise is not siloed. Every pillar below connects to a larger strategy designed to grow your brand organically - and predictably.            </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        {expertisePillars.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden text-left flex flex-col justify-between h-auto transition-all duration-500 hover:-translate-y-2 hover:bg-[#f26522] hover:scale-105 hover:-rotate-2 hover:border-[#f26522]/40"
                            >
                                {/* Background Fill Animation */}
                                {/* <div className="absolute inset-0 bg-[#f26522] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" /> */}

                                {/* Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#f26522]/20 blur-3xl transition-opacity duration-500" />

                                <div className=" flex justify-between">
                                    <div className="relative z-10 flex gap-4 items-center w-full">
                                        <div className="p-3 rounded-2xl bg-neutral-900 border border-white/10 text-[#f26522] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#f26522]">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[8px] font-mono tracking-widest text-[#f26522] group-hover:text-white/80 transition-colors uppercase">
                                                {item.tag}
                                            </span>

                                            <h3 className="text-lg font-black text-white leading-none pb-1 pt-0.5">
                                                {item.title}
                                            </h3>
                                        </div>

                                    </div>
                                    <span className="text-3xl font-black font-mono text-white/10 group-hover:text-white/20 transition-colors">
                                        {item.id}
                                    </span>
                                </div>

                                <div className="relative z-10 mt-6 md:mt-6 space-y-1">


                                    <p className="text-sm text-neutral-400 group-hover:text-white/80 transition-colors leading-relaxed font-sans pt-1">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-white/20 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── 3. DETAILED SERVICES SUITE (WITH VIDEO MOCKUPS) ── */}

            <ServiceSuite />

            {/* ── 4. TRUST STATISTICS BANNER (THE NUMBERS DON'T LIE) ── */}
            <section className="relative py-16 border-b border-white/5 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-neutral-900 border border-white/5 mb-5 shadow-lg">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Why UGC</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3">
                                Why UGC Works
                                <br />
                                <span className="text-[#f26522] italic font-light"> The Numbers Don't Lie</span>
                            </h2>
                        </div>
                        <div className="pb-6">

                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {trustMetrics.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="p-5 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col justify-between items-start text-left hover:border-[#f26522]/20 transition-colors"
                            >
                                <div className="p-2.5 rounded-xl bg-white/5 text-[#f26522]">
                                    <item.icon className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none font-mono">
                                        {item.metric}
                                    </h3>
                                    <p className="text-xs text-neutral-400 leading-normal pt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="pt-10">
                        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                            These are not vanity metrics — they are the reason brands worldwide are shifting their content budgets toward UGC video. At Marketrixa, we give Ahmedabad-based businesses access to this exact advantage, built locally and scaled smartly.
                        </p>
                    </div>

                </div>
            </section>
            { }
            {/* ── 5. BRAND WORKFLOW (PROCESS FROM BRIEF TO RESULTS) ── */}
            <Workflow />
            { }
            {/* ── 6. WHY MARKETRIXA (THE COMPETITIVE EDGE) ── */}
            <section className="relative py-20 border-b border-white/5 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 text-left">
                        <div className="max-w-xl">
                            <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-black">// THE MARKETRIXA ADVANTAGE</span>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none pt-2 uppercase">
                                Not Just Another Agency. <br />
                                <span className="text-[#f26522] font-light italic text-2xl md:text-3xl">Your UGC Growth Partner in Ahmedabad</span>
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed">
                            There are agencies that produce content. And then there are partners who own the outcome. Here is why brands across Ahmedabad, Deesa, and Gujarat keep choosing Marketrixa for their UGC video strategy:                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {valuePillars.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                {/* Colorful Gradient Border Effect */}
                                <div
                                    className="absolute -inset-[1px] rounded-[2rem] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                                    }}
                                />

                                {/* Main Card Content */}
                                <div className="relative h-full premium-card !bg-neutral-900/80 p-8 lg:p-10 flex flex-col items-start overflow-visible">
                                    {/* Step Number Badge */}
                                    <div
                                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-black border border-white/10 glass"
                                        style={{ color: step.color }}
                                    >
                                        0{idx + 1}
                                    </div>

                                    {/* Icon Circle */}
                                    <div
                                        className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl"
                                        style={{
                                            backgroundColor: `${step.color}15`,
                                            border: `1px solid ${step.color}30`,
                                        }}
                                    >
                                        <step.icon
                                            size={28}
                                            style={{ color: step.color }}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-white/50 leading-relaxed font-light text-sm">
                                        {step.desc}
                                    </p>

                                    {/* Decorative Bottom Line */}
                                    <div
                                        className="mt-8 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
                                        style={{ backgroundColor: step.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            { }
            {/* ── 7. INTEGRATED SYSTEM ECOSYSTEM (CONNECTED SERVICES) ── */}
            <ConnectedServices />

        </div>
    );
}