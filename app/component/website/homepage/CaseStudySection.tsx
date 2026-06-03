'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    Compass,
    Award,
    ArrowRight,
    Sparkles,
    ArrowUpRight,
    ChevronRight
} from "lucide-react";

// --- Types ---
interface CaseStudyPillar {
    title: string;
    desc: string;
    imageUrl: string;
}

interface CaseStudy {
    id: string;
    tabLabel: string;
    projectTitle: string;
    category: string;
    highlights: string[];
    problem: CaseStudyPillar;
    strategy: CaseStudyPillar;
    results: CaseStudyPillar;
}

// --- Case Studies Configuration Data ---
const caseStudies: CaseStudy[] = [
    {
        id: "seo",
        tabLabel: "SEO Dominance",
        projectTitle: "Omnichannel Organic Engine",
        category: "Search Engine Optimization",
        highlights: ["Keyword Mapping", "Technical Redesign", "Backlink Accretion"],
        problem: {
            title: "Climbing Ad Costs & Stagnant Presence",
            desc: "The brand relied entirely on paid acquisition, yielding a dangerous $68 CAC.",
            imageUrl: "/2.png"
        },
        strategy: {
            title: "Content Restructuring & Web Vitals Fix",
            desc: "Engineered a headless Next.js frontend to instantly score 99/100 on PageSpeed.",
            imageUrl: "/1.png"
        },
        results: {
            title: "+320% Organic Traffic & Sustained Revenue",
            desc: "Secured over 45 Page-1 keywords in 90 days. Generated 14,000+ organic high-quality MQLs.",
            imageUrl: "/3.png"
        }
    },
    {
        id: "ugc",
        tabLabel: "Paid Ads & UGC",
        projectTitle: "TikTok & Meta Direct Response",
        category: "Direct-to-Consumer UGC",
        highlights: ["UGC Frameworks", "Creator Whitelisting", "Hook Optimization"],
        problem: {
            title: "Creative Fatigue & Shrinking Ad Margins",
            desc: "Ad accounts hit a hard performance ceiling.",
            imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"
        },
        strategy: {
            title: "High-Hook UGC Deployment & Creator Sync",
            desc: "Sourced 15 native creators to produce 45 direct-response variations.",
            imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop"
        },
        results: {
            title: "6.82% Average CVR & Scaled ROAS Peak",
            desc: "Total ad return spiked to 11.4x ROAS on top products.",
            imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop"
        }
    },
    {
        id: "funnel",
        tabLabel: "SaaS Funnel CRO",
        projectTitle: "Enterprise Conversion Funnel",
        category: "Conversion Rate Optimization",
        highlights: ["Interactive Demos", "Form Simplification", "Exit-Intent Logic"],
        problem: {
            title: "High Checkout Drop-Offs & Lost Traffic",
            desc: "Though getting high-quality traffic, the client faced a brutal 85% drop-off rate.",
            imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
        },
        strategy: {
            title: "On-Page Friction Cleanse & Live Demos",
            desc: "Redesigned checkout flows into modern, single-field dynamic forms.",
            imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
        },
        results: {
            title: "98% Onboarding Completion & Doubled ARR",
            desc: "Form conversions grew by 212% within weeks.",
            imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop"
        }
    },
    {
        id: "crm",
        tabLabel: "CRM Automation",
        projectTitle: "Database & Pipeline Sync",
        category: "Workflow Automation",
        highlights: ["HubSpot Webhooks", "Automated Hand-off", "Real-Time Tracking"],
        problem: {
            title: "Fragmented Operations & Lost Opportunities",
            desc: "Lead hand-offs between ad software and sales teams were entirely manual.",
            imageUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop"
        },
        strategy: {
            title: "Real-Time Webhook Pipeline Integration",
            desc: "Engineered custom webhook pipelines linking Meta APIs directly to HubSpot database instances.",
            imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop"
        },
        results: {
            title: "100% Autonomous Warm Lead Routing",
            desc: "Response latency dropped from days to seconds.",
            imageUrl: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?q=80&w=1170&auto=format&fit=crop"
        }
    }
];

// --- Animation Constants ---
const transitionBezier: any = [0.25, 1, 0.5, 1];

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
    <div
        className="absolute inset-0 pointer-events-none"
        style={{
            backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
        }}
    />
);

// --- Custom CSS Injector for Horizontal Scroll Snap on Touch Devices ---
const InjectScrollStyles: React.FC = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
    .custom-case-scroll::-webkit-scrollbar {
      height: 4px;
    }
    .custom-case-scroll::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
      border-radius: 99px;
    }
    .custom-case-scroll::-webkit-scrollbar-thumb {
      background: rgba(242, 101, 34, 0.35);
      border-radius: 99px;
    }
    .custom-case-scroll::-webkit-scrollbar-thumb:hover {
      background: rgba(242, 101, 34, 0.6);
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}} />
);

export default function CaseStudySection() {
    const [activeStudyIndex, setActiveStudyIndex] = useState(0);
    const activeStudy = caseStudies[activeStudyIndex];

    return (
        <div className=" text-white font-sans antialiased min-h-screen flex flex-col justify-center">
            <InjectScrollStyles />

            <section id="case-studies" className="relative py-12 md:py-20 overflow-hidden w-full">
                {/* Decorative Radial Lighting */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.04) 0%, transparent 60%)" }}
                />
                <GridPattern opacity={0.03} />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col justify-between h-full min-h-[500px]">

                    {/* Top Info Header */}
                    <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mb-12">
                        {/* Section Headers */}
                        <div className="flex justify-start w-full gap-6">
                            <div className="w-full flex justify-between">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <span className="h-[2px] w-10 bg-[#f26522]" />
                                        <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                                            Success Pipelines
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none">
                                        Deep-Dive <br />
                                        <span className="text-[#f26522] italic font-light">Case Protocols
                                        </span>
                                    </h2>
                                </div>
                                <div className="max-w-md flex items-end">
                                    <p className="mt-3 text-neutral-400 text-xs md:text-sm leading-relaxed">
                                    We orchestrate, edit, and scale creator-led campaigns. Swipe or hover over any card below to pause the marquee feed and check live content telemetry.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ACTIVE CASE STUDY: COHESIVE SYSTEM DASHBOARD CARD */}
                    <div className="relative w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStudy.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5, ease: transitionBezier }}
                                className="w-full rounded-[1rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#140a04] to-[#050201] border border-[#f26522]/25 p-2 sm:p-6 md:p-6 shadow-2xl relative overflow-hidden group hover:border-[#f26522]/45 transition-colors duration-500"
                            >
                                {/* Visual Ambient Light Leaks inside the master card */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-[#f26522]/5 blur-3xl rounded-full pointer-events-none" />

                                {/* Unified Horizontal Timeline Grid (3 Square Images with Graphic Connector Arrows) */}
                                <div className="flex lg:grid lg:grid-cols-3 items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full relative z-10">

                                    {/* CARD PILLAR 1: PROBLEM (SQUARE IMAGE) */}
                                    <div className="snap-center shrink-0 w-[70vw]  lg:w-auto lg:col-span-1 relative group/pillar aspect-square rounded-l-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-colors duration-500 shadow-xl">
                                        <img
                                            src={activeStudy.problem.imageUrl}
                                            alt="Problem Screenshot"
                                            className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover/pillar:scale-105 filter saturate-75"
                                        />
                                        {/* Shadow overlay block */}
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" /> */}

                                        {/* Absolute Tag Overlay Over the Image */}
                                        <div className="absolute top-3 left-3 bg-red-950 backdrop-blur-md border border-red-500/30 px-3 py-1.5 rounded-xl flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest font-mono text-white">PROBLEM</span>
                                        </div>

                                        {/* Quick hovering tooltip */}
                                        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300 text-[10px] text-neutral-300 bg-neutral-950/90 backdrop-blur-sm p-2 rounded-xl border border-white/5">
                                            {activeStudy.problem.title}
                                        </div>
                                    </div>

                                    {/* CARD PILLAR 2: STRATEGY (SQUARE IMAGE) */}
                                    <div className="snap-center shrink-0 w-[70vw] lg:w-auto lg:col-span-1 relative group/pillar aspect-square overflow-hidden border border-white/10 hover:border-[#f26522]/40 transition-colors duration-500 shadow-xl">
                                        <img
                                            src={activeStudy.strategy.imageUrl}
                                            alt="Strategy Screenshot"
                                            className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover/pillar:scale-105 filter saturate-75"
                                        />

                                        {/* Absolute Tag Overlay Over the Image */}
                                        <div className="absolute top-3 left-3 bg-[#f26522] backdrop-blur-md border border-[#f26522]/30 px-3 py-1.5 rounded-xl flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest font-mono text-white">STRATEGY</span>
                                        </div>

                                        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300 text-[10px] text-neutral-300 bg-neutral-950/90 backdrop-blur-sm p-2 rounded-xl border border-white/5">
                                            {activeStudy.strategy.title}
                                        </div>
                                    </div>

                                    {/* CARD PILLAR 3: RESULTS (SQUARE IMAGE) */}
                                    <div className="snap-center shrink-0 w-[70vw] lg:w-auto lg:col-span-1 relative group/pillar aspect-square rounded-r-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-colors duration-500 shadow-xl">
                                        <img
                                            src={activeStudy.results.imageUrl}
                                            alt="Results Screenshot"
                                            className="w-full h-full object-cover  transition-all duration-700 scale-100 group-hover/pillar:scale-105 filter saturate-75"
                                        />

                                        {/* Absolute Tag Overlay Over the Image */}
                                        <div className="absolute top-3 left-3 bg-emerald-950 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-xl flex items-center gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest font-mono text-white">OUTCOME</span>
                                        </div>

                                        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover/pillar:opacity-100 transition-opacity duration-300 text-[10px] text-neutral-300 bg-neutral-950/90 backdrop-blur-sm p-2 rounded-xl border border-white/5">
                                            {activeStudy.results.title}
                                        </div>
                                    </div>

                                </div>

                                {/* Glinting glass design outline overlay */}
                                <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/20 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* TAB SELECTOR CONTROL DOCK */}
                    <div className="mt-4 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Scrollable Tabs navigation */}
                        <div className="flex items-center lg:justify-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide snap-x">
                            {caseStudies.map((study, idx) => {
                                const isActive = idx === activeStudyIndex;

                                return (
                                    <button
                                        key={study.id}
                                        onClick={() => setActiveStudyIndex(idx)}
                                        className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 relative snap-center whitespace-nowrap cursor-pointer ${isActive ? "text-black animate-none" : "text-neutral-400 hover:text-white bg-neutral-900/60 border border-white/5"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCaseStudyTab"
                                                className="absolute inset-0 bg-[#f26522] rounded-xl z-0 shadow-lg shadow-[#f26522]/20"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{study.tabLabel}</span>
                                    </button>
                                );
                            })}
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}