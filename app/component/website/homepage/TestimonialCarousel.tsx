'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Volume2,
    VolumeX,
    Sparkles,
    Quote,
    Star,
    ChevronRight,
    Play,
    Pause
} from "lucide-react";

// --- Types ---
interface TestimonialItem {
    id: number;
    type: "video" | "text";
    tag: string;
    authorName: string;
    authorRole: string;
    authorCompany: string;
    quote: string;
    avatarUrl: string;
    videoUrl?: string;
    rating?: number;
    outcomeMetric?: string;
}

// --- High Fidelity Hybrid Dataset ---
const testimonials: TestimonialItem[] = [
    {
        id: 1,
        type: "video",
        tag: "UGC VIDEO REVIEW",
        authorName: "Marcus Thorne",
        authorRole: "Director of Scaling",
        authorCompany: "Apex Group",
        quote: "Working with this system changed our timeline completely. We unlocked a stable 11.4x ROAS on Meta and scale budget daily with absolute confidence.",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        videoUrl: "/video2.mp4",
        outcomeMetric: "11.4x ROAS"
    },
    {
        id: 2,
        type: "text",
        tag: "WRITTEN AUDIT LOG",
        authorName: "Sarah Jenkins",
        authorRole: "VP of E-Commerce",
        authorCompany: "Kora Labs",
        quote: "The programmatic landing page architectures are a total cheat code. Our conversion rate spiked to 6.82% in weeks, while lowering CAC to record lows.",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        rating: 5,
        outcomeMetric: "6.82% CVR Spike"
    },
    {
        id: 3,
        type: "video",
        tag: "TIKTOK REEL FEED",
        authorName: "Alex Mercer",
        authorRole: "Head of Growth",
        authorCompany: "Unbox Inc",
        quote: "The lead routing latency is practically non-existent. We push hot profiles directly to CRM in under 0.1 seconds, boosting conversions by over 62%.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        videoUrl: "/video1.mp4",
        outcomeMetric: "0.1s Lead Sync"
    },
    {
        id: 4,
        type: "text",
        tag: "DTC CLIENT REWRITE",
        authorName: "Allison Vance",
        authorRole: "Founder & Creative Lead",
        authorCompany: "Vance Agency",
        quote: "Our organic real estate lead loops went from cold to hot within weeks. Generated 12,600+ validated profiles with absolute cost efficiency.",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        rating: 5,
        outcomeMetric: "12.6K Real Estate Leads"
    },
    {
        id: 5,
        type: "video",
        tag: "TIKTOK REEL FEED",
        authorName: "Alex Mercer",
        authorRole: "Head of Growth",
        authorCompany: "Unbox Inc",
        quote: "The lead routing latency is practically non-existent. We push hot profiles directly to CRM in under 0.1 seconds, boosting conversions by over 62%.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        videoUrl: "/video3.mp4",
        outcomeMetric: "0.1s Lead Sync"
    },
    {
        id: 6,
        type: "video",
        tag: "TIKTOK REEL FEED",
        authorName: "Alex Mercer",
        authorRole: "Head of Growth",
        authorCompany: "Unbox Inc",
        quote: "The lead routing latency is practically non-existent. We push hot profiles directly to CRM in under 0.1 seconds, boosting conversions by over 62%.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        videoUrl: "/video4.mp4",
        outcomeMetric: "0.1s Lead Sync"
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

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(320); // fallback width
    const [isPaused, setIsPaused] = useState(true);

    // Per-card audio mute state tracker (default to muted)
    const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({
        1: true,
        3: true
    });

    const cardRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    // Recalculate widths using Card Body boundary directly (prevents parent drift)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const activeCard = cardRefs.current[currentIndex];

        if (activeCard) {
            setTranslateX(activeCard.offsetLeft);
        }
    }, [currentIndex]);

    // Autoplay Slider Cycle (Pauses when mouse is hovered)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex(testimonials.length - 1);
        }
    };

    // Toggle Mute channels on specific cards
    const handleToggleMute = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        e.preventDefault();

        const isCurrentlyMuted = mutedStates[id] !== false; // defaults to true
        const newMuteState = !isCurrentlyMuted;

        setMutedStates((prev) => ({
            ...prev,
            [id]: newMuteState
        }));

        const videoEl = videoRefs.current[id];
        if (videoEl) {
            videoEl.muted = newMuteState;
        }
    };

    return (
        <div className="text-white font-sans antialiased min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-20">
            {/* Ambient Lighting Orbs */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.05) 0%, transparent 60%)" }}
            />
            <GridPattern opacity={0.03} />

            <div className="relative max-w-7xl lg:flex mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">

                {/* Top Info Header Section */}
                <div className="w-full lg:w-2/6 flex flex-col lg:flex-row justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-[#f26522] rounded-full animate-ping" />
                            <span className="text-[10px] font-mono text-[#f26522] uppercase tracking-[0.3em] font-black">Success Pipelines</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                            Client Logs <br />
                            <span className="text-[#f26522] italic font-light">That Converted Millions</span>
                        </h2>
                        <p className="mt-3 text-neutral-400 text-xs md:text-sm leading-relaxed">
                            We compile exact screenshots and record performance metrics from audited portfolios. Swipe or hover over any card to inspect active accounts.
                        </p>
                    </div>
                </div>

                <div className="relative w-full lg:w-4/6 lg:pl-12">
                    {/* INTERACTIVE SLIDER VIEWPORT CONTAINER */}
                    <div
                        className="relative w-full overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <motion.div
                            animate={{ x: -translateX }}
                            // Offsets precisely by measured card element width + standard layout gap
                            transition={{ type: "spring", stiffness: 280, damping: 28 }}
                            className="flex gap-5 w-max"
                        >
                            {testimonials.map((item, idx) => {
                                const isCardMuted = mutedStates[item.id] !== false; // defaults to true

                                return (
                                    <div
                                        key={item.id}
                                        ref={(el) => {
                                            cardRefs.current[idx] = el;
                                        }}// attaches dimension ref directly to the card container body
                                        className="w-[280px] sm:w-[320px] rounded-[2.5rem] bg-neutral-900 border border-white/5 p-5 flex flex-col justify-between h-[425px] relative overflow-hidden group hover:border-[#f26522]/35 hover:shadow-[0_20px_50px_rgba(242,101,34,0.06)] transition-all duration-500 shrink-0"
                                    >

                                        {/* A. UPPER METRICS BAR (Tag and Icon Link) */}
                                        <div className="relative z-10 flex justify-between items-center w-full">
                                            <span className="px-3 py-1 rounded-full bg-neutral-950/90 border border-white/10 text-neutral-300 text-[8px] font-black uppercase tracking-wider backdrop-blur-sm">
                                                {item.tag}
                                            </span>

                                            <div className="w-8 h-8 rounded-full bg-neutral-950/80 border border-white/10 flex items-center justify-center text-[#f26522] group-hover:bg-[#f26522] group-hover:text-black transition-all duration-300 cursor-pointer backdrop-blur-sm">
                                                <Quote className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* B. CORE CARDS PILOT CONTENT */}
                                        {item.type === "video" ? (

                                            /* VIDEO REEL CARD SCHEME (Optimized for Downloaded Reels) */
                                            <div className="absolute inset-0 z-0 overflow-hidden">
                                                <video
                                                    ref={(el) => { videoRefs.current[item.id] = el; }}
                                                    src={item.videoUrl}
                                                    muted={isCardMuted}
                                                    loop
                                                    playsInline
                                                    autoPlay
                                                    className="w-full h-full object-cover transition-opacity duration-700"
                                                />

                                                {/* Dark glass cover masks to isolate overlay texts */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-neutral-950/10 to-transparent" />

                                                {/* Active Playback HUD Overlay buttons */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button
                                                        onClick={(e) => handleToggleMute(e, item.id)}
                                                        className="w-10 h-10 rounded-full bg-[#f26522] text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
                                                    >
                                                        {isCardMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
                                                    </button>
                                                </div>

                                                {/* Static indicators inside video */}
                                                <div className="absolute bottom-16 left-5 flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                    <span className="text-[8px] font-mono tracking-widest text-emerald-400 font-bold uppercase">SECURED VIDEO LOG</span>
                                                </div>
                                            </div>
                                        ) : (

                                            /* PREMIUM WRITTEN TEXT CARD SCHEME */
                                            <div className="relative z-10 flex flex-col items-start justify-center my-auto space-y-4">
                                                {/* Star Rating HUD */}
                                                {item.rating && (
                                                    <div className="flex gap-1">
                                                        {Array.from({ length: item.rating }).map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-[#f26522] text-[#f26522]" />
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Review Quote Body */}
                                                <p className="text-xs md:text-[13px] text-neutral-200 font-medium leading-relaxed italic">
                                                    "{item.quote}"
                                                </p>
                                            </div>
                                        )}

                                        {/* C. LOWER FOOTER BAR: User Credentials & Outcomes */}
                                        <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-3 mt-auto bg-gradient-to-t from-neutral-950/40 to-transparent">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    src={item.avatarUrl}
                                                    alt={item.authorName}
                                                    className="w-7 h-7 rounded-full border border-white/10 object-cover shrink-0"
                                                />
                                                <div className="text-left min-w-0">
                                                    <h5 className="text-[11px] font-black text-white truncate leading-none mb-1">{item.authorName}</h5>
                                                    <p className="text-[8px] text-neutral-500 font-mono tracking-wider truncate uppercase">
                                                        {item.authorRole} &bull; {item.authorCompany}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Active Outcome Tag */}
                                            {item.outcomeMetric && (
                                                <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                                                    {item.outcomeMetric.split(" ")[0]}
                                                </span>
                                            )}
                                        </div>

                                        {/* Glowing perimeter border ring */}
                                        <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/35 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* LOWER CONTROLLER DOCK: Navigation Arrows (Left) & Pagination Dots (Right) */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-10 relative z-20">

                        {/* Direct Slide Navigation Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-xl border border-white/10 bg-neutral-900 text-white hover:border-[#f26522]/40 hover:bg-[#f26522]/5 flex items-center justify-center transition-all cursor-pointer"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-xl border border-white/10 bg-neutral-900 text-white hover:border-[#f26522]/40 hover:bg-[#f26522]/5 flex items-center justify-center transition-all cursor-pointer"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Step Dots Indicators */}
                        <div className="flex gap-1.5">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                                        ? "w-6 bg-[#f26522]"
                                        : "w-1.5 bg-neutral-800 hover:bg-neutral-600"
                                        }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}