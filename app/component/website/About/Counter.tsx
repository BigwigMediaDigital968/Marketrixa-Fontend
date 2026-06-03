'use client';
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import {
    TrendingUp,
    Users,
    Home,
    Briefcase,
    Target,
    ShieldCheck
} from "lucide-react";

// --- Types ---
interface TrustMetric {
    id: number;
    target: number;
    prefix: string;
    suffix: string;
    decimals: number;
    label: string;
    Icon: React.ComponentType<any>;
}

// --- Configuration Data (All 5 metrics consolidated) ---
const trustMetrics: TrustMetric[] = [
  {
    id: 1,
    target: 5,
    prefix: "₹",
    suffix: "Cr+",
    decimals: 0,
    label: "Managed",
    Icon: TrendingUp
  },
  {
    id: 2,
    target: 50,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Brands",
    Icon: Briefcase
  },
  {
    id: 3,
    target: 1000,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Leads Generated",
    Icon: Users
  },
  {
    id: 4,
    target: 4,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Industries",
    Icon: Target
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

// --- High-Performance Smooth Counter Component ---
const Counter: React.FC<{ target: number; decimals: number; prefix: string; suffix: string }> = ({
    target,
    decimals,
    prefix,
    suffix
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        const formatted = decimals > 0
            ? latest.toFixed(decimals)
            : Math.floor(latest).toLocaleString();
        return `${prefix}${formatted}${suffix}`;
    });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, target]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function TrustMetricsShowcase() {
    return (
        <div className=" text-white font-sans antialiased overflow-hidden py-10 mt-10 relative w-full">
            {/* Background Lighting Aura */}
            <GridPattern opacity={0.04} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
{/* Section Header */}
                <div className="mb-12 w-full mx-auto flex justify-between">
                    <div className="max-w-xl ">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2.5 mb-3"
                        >
                            <span className="h-[2px] w-10 bg-[#f26522]" />
                            <span className="uppercase tracking-[0.4em] text-[#f26522] text-[10px] font-black">
                                Verified Operations
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none"
                        >
                            Performance <br />
                            <span className="text-white/60 italic font-light">
                                By Verified Metrics
                            </span>
                        </motion.h2>
                    </div>
                    <div className="max-w-xl flex items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2.5 mb-3"
                        >
                        <p className="mt-2 text-neutral-400 text-xs md:text-sm max-w-md leading-relaxed">
                            We scale data-driven campaigns that maximize ROI and outperform KPIs. Hover to explore verified metrics and strategy insights.
                        </p>
                        </motion.div>
                    </div>
                </div>

                {/* SINGLE ROW UNIFIED PIPELINE STRIP */}
                <div className="w-full p-6 md:p-8 relative">

                    {/* Subtle light leaks inside container */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" />

                    <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between gap-8 lg:gap-0 relative z-10">
                        {trustMetrics.map((metric, idx) => (
                            <div
                                key={metric.id}
                                className={`flex-1 min-w-[160px] flex flex-col items-center lg:items-center text-center lg:text-left justify-between px-2 py-4 lg:py-2 relative ${idx !== trustMetrics.length - 1
                                        ? "lg:border-r lg:border-white/10"
                                        : ""
                                    }`}
                            >
                                {/* Meta Indicator & Icon */}
                                <div className="flex items-center gap-2 mb-3 text-[#f26522]">
                                    <metric.Icon className="w-4 h-4" />
                                    <span className="text-[8px] font-mono tracking-widest text-neutral-500 font-bold uppercase">METRIC 0{idx + 1}</span>
                                </div>

                                {/* Counter & Label */}
                                <div className="space-y-1">
                                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none font-mono">
                                        <Counter
                                            target={metric.target}
                                            decimals={metric.decimals}
                                            prefix={metric.prefix}
                                            suffix={metric.suffix}
                                        />
                                    </h3>
                                    <span className="text-[10px] font-bold text-center uppercase tracking-wider text-neutral-400 block pt-1">
                                        {metric.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Glinting glass design outline overlay */}
                    {/* <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" /> */}
                </div>

            </div>
        </div>
    );
}