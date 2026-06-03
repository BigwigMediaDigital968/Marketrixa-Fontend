"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Compass, Zap, TrendingUp, Users2, Globe2 } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

/* ── Animated counter ── */
function Counter({
    to,
    suffix = "",
    prefix = "",
    duration = 2000,
}: {
    to: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(to / (duration / 16));
        const timer = setInterval(() => {
            start = Math.min(start + step, to);
            setValue(start);
            if (start >= to) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {value.toLocaleString()}
            {suffix}
        </span>
    );
}
const stats = [
    {
        icon: TrendingUp,
        value: 5,
        prefix: "₹",
        suffix: "Cr+",
        label: "Managed"
    },
    {
        icon: Users2,
        value: 50,
        prefix: "",
        suffix: "+",
        label: "Brands"
    },
    {
        icon: Zap,
        value: 1000,
        prefix: "",
        suffix: "+",
        label: "Leads Generated"
    },
    {
        icon: Globe2,
        value: 4,
        prefix: "",
        suffix: "+",
        label: "Industries"
    },
];

const pillars = [
    {
        icon: Target,
        label: "The Mission",
        heading: "Automate acquisition, eliminate waste.",
        body: "To completely automate client customer acquisition pipelines, replacing slow manual transfers with programmatic webhook bridges and deploying trained, cognitive AI agents to capture, nurture, and log every lead instantly.",
        accent: "#f26522",
    },
    {
        icon: Compass,
        label: "The Vision",
        heading: "Predictable growth, mathematical precision.",
        body: "A world where businesses scale with pure mathematical predictability. We envision autonomous direct-response campaigns running 24/7, auto-tuning creative assets, and updating CRM frameworks with absolute zero waste.",
        accent: "#f26522",
    },
];

export default function ValueSection() {
    return (
        <section className="relative text-white overflow-hidden">

            {/* ── Separator ── */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f26522]/30 to-transparent" />

            {/* ── Stats band ── */}
            <div className="relative py-16 md:py-20 overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(242,101,34,0.04) 0%, transparent 70%)",
                    }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: E }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/5"
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: E }}
                                className="flex flex-col items-center md:items-start gap-2 px-6 py-4 group"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <s.icon className="w-4 h-4 text-[#f26522] opacity-70" />
                                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-600">
                                        {s.label}
                                    </span>
                                </div>
                                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                                    <Counter
                                        to={s.value}
                                        suffix={s.suffix}
                                        prefix={s.prefix}
                                        duration={1800}
                                    />
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── Separator ── */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* ── Mission & Vision ── */}
            <div className="relative py-24 md:py-32">
                {/* dot grid */}
                <div
                    className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(242,101,34,1) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                    }}
                />
                {/* large glow */}
                <div
                    className="pointer-events-none absolute right-0 top-0 w-[600px] h-[600px] rounded-full blur-[160px] z-0 opacity-10"
                    style={{ background: "#f26522" }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: E }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-white/5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] shadow-[0_0_6px_rgba(242,101,34,0.9)]" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">
                                Mission & Vision Mandate //
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.92] text-white">
                            Built to grow.
                            <br />
                            <span className="text-[#f26522] italic font-light">Engineered to last.</span>
                        </h2>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: E }}
                                className="relative group rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/30 hover:border-[#f26522]/25 hover:bg-neutral-900/60 transition-all duration-500 p-8 md:p-10"
                            >
                                {/* inner glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
                                    style={{
                                        background: `radial-gradient(ellipse 80% 60% at 20% 20%, rgba(242,101,34,0.06) 0%, transparent 70%)`,
                                    }}
                                />
                                {/* corner line accent */}
                                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f26522]/30 rounded-tl-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    {/* icon + label */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#f26522]/15 border border-[#f26522]/25 flex items-center justify-center">
                                            <p.icon className="w-5 h-5 text-[#f26522]" />
                                        </div>
                                        <span className="text-base font-black uppercase tracking-widest text-[#f26522] font-mono">
                                            {p.label}
                                        </span>
                                    </div>

                                    {/* heading */}
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                                        {p.heading}
                                    </h3>

                                    {/* divider */}
                                    <div className="w-12 h-[2px] bg-[#f26522]/50 rounded-full" />

                                    {/* body */}
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {p.body}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom quote strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: E }}
                        className="relative rounded-2xl border border-[#f26522]/15 bg-[#f26522]/5 p-8 md:p-10 overflow-hidden"
                    >
                        <div
                            className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[160px] font-black text-[#f26522] opacity-[0.04] leading-none select-none"
                            aria-hidden
                        >
                            "
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <p className="text-lg md:text-xl font-light text-white/75 leading-relaxed max-w-2xl italic">
                                "Our core mission is straightforward: build autonomous growth
                                architecture that treats performance marketing as a strict
                                engineering science, not a guessing game."
                            </p>
                            <div className="shrink-0 text-right">
                                <p className="text-sm font-black text-white">Karan K. Dave</p>
                                <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mt-0.5">
                                    Founder, Marketrixa
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ── Separator ── */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f26522]/20 to-transparent" />
        </section>
    );
}