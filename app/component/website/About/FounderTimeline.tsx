"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const SignatureSVG = () => (
  <svg
    className="w-36 h-14 text-[#f26522] opacity-90"
    style={{ filter: "drop-shadow(0 0 8px rgba(242,101,34,0.4))" }}
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M15 45 C 35 15, 45 65, 55 35 C 65 15, 75 70, 85 40 C 95 10, 110 50, 125 35 C 135 25, 145 30, 155 35 C 165 40, 175 25, 190 30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
    />
    <motion.path
      d="M30 52 L 180 52"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.5 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
    />
  </svg>
);

const timelineItems = [
  {
    year: "2018",
    title: "Early System Optimization Research",
    action:
      "Audited ad performance loops for high-ticket platforms, revealing massive conversion drops inside checkout funnels.",
    impact:
      "Developed preliminary high-speed programmatic landing architectures to bypass standard hosting latencies.",
    color: "#f26522",
  },
  {
    year: "2020",
    title: "Resolving Direct CRM Latency",
    action:
      "Identified severe lead hand-off latency bottlenecks in high-ticket financial and real estate pipelines.",
    impact:
      "Engineered custom direct API webhook sync loops, dropping routing delays from 48 hours to 0.1 seconds.",
    color: "#f26522",
  },
  {
    year: "2023",
    title: "Scaling Verified Media Spend",
    action:
      "Scaled over ₹4.7Cr+ of managed client ad capital across Meta & Google search/direct-response networks.",
    impact:
      "Achieved record lowest cost-per-lead (CPL) benchmarks dropping down to ₹20.",
    color: "#f26522",
  },
  {
    year: "2026",
    title: "Marketrixa Autonomous Launch",
    action:
      "Consolidated all routing, chatbot, and acquisition mechanics into an independent AI Operations framework.",
    impact:
      "Currently handling 3.5L+ verified prospects with absolute pipeline telemetry sync.",
    color: "#f26522",
  },
];

const trustItems = [
  {
    title: "Direct Founder Auditing",
    desc: "You never get passed off to junior account managers. Every strategic routing system is mapped, tested, and audited directly by Karan Dave.",
  },
  {
    title: "Complete Transparency Logs",
    desc: "Zero estimates. We construct real-time live performance dashboards integrated directly with your HubSpot, Salesforce, or custom databases.",
  },
];

export default function FounderTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 40%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative text-white py-24 md:py-32"
    >
      {/* ── Ambient background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 30%, rgba(242,101,34,0.05) 0%, transparent 70%)",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(242,101,34,1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: E }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">
              Operations Log
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        {/* ── 2-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT — Portrait */}
          <div className="lg:col-span-4 self-start flex flex-col items-center lg:items-start gap-8 lg:sticky lg:top-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: E }}
              className="relative w-full max-w-[380px] aspect-[3/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group"
            >
              {/* corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#f26522]/40 rounded-tr-2xl z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#f26522]/20 rounded-bl-2xl z-20 pointer-events-none" />

              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                alt="Founder Karan K. Dave"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-110 brightness-90 saturate-75 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/10 to-transparent pointer-events-none" />

              {/* Nameplate */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-white tracking-tight leading-tight">
                    Karan K. Dave
                  </h4>
                  <p className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase mt-0.5">
                    Founder & Chief Architect
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="max-w-[380px] space-y-3"
            >
              <span className="text-[9px] font-mono tracking-widest text-[#f26522] uppercase font-black block">
                Biography & Intro //
              </span>
              <p className="text-neutral-300 text-sm leading-relaxed">
                As a performance marketer and developer, I founded Marketrixa to
                eliminate the friction holding modern customer acquisition back.
                I observed businesses bleeding capital on expensive traffic only
                to lose prospects to slow checkout latency and poor lead routing.
              </p>
              <blockquote className="text-neutral-400 text-xs leading-relaxed italic border-l-2 border-[#f26522]/50 pl-4">
                "Our core mission is straightforward: build autonomous growth
                architecture that treats performance marketing as a strict
                engineering science, not a guessing game."
              </blockquote>
            </motion.div>
          </div>

          {/* RIGHT — Timeline */}
          <div className="lg:col-span-8 space-y-20">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: E }}
              className="space-y-3"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
                The Founder Journey
                <br />
                <span className="text-[#f26522] italic font-light">
                  & Brand Timeline
                </span>
              </h2>
              <p className="text-neutral-500 text-sm max-w-md leading-relaxed">
                From diagnosing latency failures to building fully autonomous
                growth pipelines — every milestone engineered with precision.
              </p>
            </motion.div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative pl-10 md:pl-12 space-y-14">
              {/* track */}
              <div className="absolute left-[18px] top-1 bottom-1 w-[2px] bg-neutral-800 rounded-full" />
              {/* progress line */}
              <motion.div
                className="absolute left-[18px] top-1 bottom-1 w-[2px] rounded-full origin-top"
                style={{
                  scaleY,
                  background:
                    "linear-gradient(to bottom, #ef4444, #f26522, #f59e0b)",
                  transformOrigin: "top",
                }}
              />

              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: E }}
                  className="relative group/node"
                >
                  {/* node dot */}
                  <div className="absolute -left-[38px] md:-left-[40px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center transition-all duration-300 group-hover/node:border-[#f26522]">
                    <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover/node:bg-[#f26522] transition-all duration-300 group-hover/node:shadow-[0_0_10px_rgba(242,101,34,1)]" />
                  </div>

                  {/* card */}
                  <div className="rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#f26522]/25 p-5 md:p-6 transition-all duration-400 group-hover/node:bg-neutral-900/70 group-hover/node:shadow-[0_0_40px_rgba(242,101,34,0.05)]">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[10px] font-black text-[#f26522] font-mono tracking-widest block mb-1">
                          {item.year}
                        </span>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      {/* year tag */}
                      <div className="shrink-0 px-3 py-1 rounded-full bg-[#f26522]/10 border border-[#f26522]/20">
                        <span className="text-[10px] font-mono font-black text-[#f26522]">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                      {item.action}
                    </p>
                    <div className="flex items-start gap-2 pt-3 border-t border-white/5">
                      <span className="text-[9px] font-black font-mono text-emerald-400 uppercase tracking-wider shrink-0 pt-0.5">
                        // Outcome:
                      </span>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust cards */}
            <div className="space-y-5 pt-4 border-t border-white/5">
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-black block">
                Why Leading Brands Partner With Us
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trustItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: E }}
                    className="p-5 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-[#f26522]/20 transition-all duration-300 space-y-2"
                  >
                    <h5 className="text-xs font-black uppercase tracking-wider text-[#f26522] font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.title}
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 gap-4">
              <span className="text-[10px] text-neutral-600 font-mono">
                Verified Operational Telemetry
              </span>
              <motion.a
                whileHover={{ x: 4 }}
                href="/audit"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-[#f26522] hover:text-orange-400 uppercase tracking-wider transition-colors"
              >
                Schedule an audit session with the founder
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}