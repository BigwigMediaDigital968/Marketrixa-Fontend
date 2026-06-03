'use client';
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Compass, Target, Sparkles, CheckCircle2 } from "lucide-react";

// --- Custom Animated Handwritten Signature SVG ---
const SignatureSVG = () => (
  <svg 
    className="w-40 h-16 text-[#f26522] opacity-90 filter drop-shadow-[0_0_8px_rgba(242,101,34,0.3)]" 
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
      d="M30 48 L 180 48"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
    />
  </svg>
);

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }}
  />
);

export default function FounderStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom Timeline Scroll Tracker (triggers line scale-up on scroll)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-neutral-950 text-white font-sans antialiased overflow-hidden py-20 md:py-28 relative w-full min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(242,101,34,0.03) 0%, transparent 60%)"
        }}
      />
      <GridPattern opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Core Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Immersive Portrait, Signature, & Personal Biography Intro */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-start w-full space-y-8 lg:sticky lg:top-8">
            
            {/* The Picture Frame Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden shadow-2xl group rounded-2xl border border-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                alt="Founder of Marketrixa"
                className="w-full h-full object-cover transition-transform duration-750 scale-100 group-hover:scale-102 filter contrast-110 brightness-95 saturate-75 group-hover:saturate-100"
              />

              {/* Shading Vignette Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent opacity-90 pointer-events-none" />

              {/* Absolute Glassmorphic Nameplate */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 backdrop-blur-md border border-white/10 p-5 rounded-xl flex items-center justify-between shadow-2xl">
                <div>
                  <h4 className="text-md font-black text-white tracking-tight">Karan K. Dave</h4>
                  <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-0.5">FOUNDER & CHIEF ARCHITECT</p>
                </div>
                
                {/* Handwritten Signature Link */}
                <div className="hidden sm:block shrink-0">
                  <SignatureSVG />
                </div>
              </div>
            </motion.div>

            {/* Founder Biography Content Block (Matches sleek modern sans/mono branding) */}
            <div className="max-w-[420px] text-left space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-[#f26522] uppercase font-black">
                BIOGRAPHY & INTRO //
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                As a performance marketer and developer, I founded Marketrixa to eliminate the friction holding modern customer acquisition back. I observed businesses bleeding capital on expensive traffic only to lose prospects to slow checkout latency and poor lead routing.
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed italic border-l border-[#f26522]/40 pl-4 font-sans">
                "Our core mission is straightforward: build autonomous growth architecture that treats performance marketing as a strict engineering science, not a guessing game."
              </p>
            </div>

            {/* Glowing Backdrop Circle behind Portrait */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#f26522]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none" />
          </div>

          {/* RIGHT SIDE: Dynamic Timeline Tracking Journey & Mission/Vision Manifestos */}
          <div ref={containerRef} className="lg:col-span-7 space-y-16 text-left">
            
            {/* Section Tag & Editorial Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-white/5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Operations Log</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white font-sans">
                The Founder Journey <br />
                <span className="text-white/60 italic font-light">& Brand Timeline</span>
              </h2>
            </div>

            {/* HIGH-FIDELITY SCROLL-TRACKING JOURNEY TIMELINE */}
            <div className="relative pl-8 md:pl-10 space-y-12">
              
              {/* Backing Grey Timeline Trace Track */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-neutral-900 rounded-full" />
              
              {/* Animated Progress Foreground Line (Draws down dynamically as you scroll) */}
              <motion.div 
                style={{ scaleY }}
                className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-red-500 to-[#f26522] rounded-full origin-top"
              />

              {[
                {
                  year: "2018",
                  title: "Early System Optimization Research",
                  action: "Audited ad performance loops for high-ticket platforms, revealing massive conversions drops inside checkout funnels.",
                  impact: "Developed preliminary high-speed programmatic landing architectures to bypass standard hosting latencies."
                },
                {
                  year: "2020",
                  title: "Resolving Direct CRM Latency",
                  action: "Identified severe lead hand-off latency bottlenecks in high-ticket financial and real estate pipelines.",
                  impact: "Engineered custom direct API webhook sync loops, dropping routing delays from 48 hours to 0.1 seconds."
                },
                {
                  year: "2023",
                  title: "Scaling Verified Media Spend",
                  action: "Scaled over ₹4.7Cr+ of managed client ad capital across Meta & Google search/direct-response networks.",
                  impact: "Achieved record lowest cost-per-lead (CPL) benchmarks dropping down to ₹20."
                },
                {
                  year: "2026",
                  title: "Marketrixa Autonomous Launch",
                  action: "Consolidated all routing, chatbot, and acquisition mechanics into an independent AI Operations framework.",
                  impact: "Currently handling 3.5L+ verified prospects with absolute pipeline telemetry sync."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative group/timeline"
                >
                  {/* Glowing Node Dot (Becomes bright as we hover or timeline scale line reaches it) */}
                  <div className="absolute -left-[35px] md:-left-[37px] top-1.5 w-6 h-6 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center transition-colors group-hover/timeline:border-[#f26522]">
                    <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover/timeline:bg-[#f26522] transition-colors shadow-[0_0_8px_rgba(242,101,34,0)] group-hover/timeline:shadow-[0_0_8px_rgba(242,101,34,0.8)]" />
                  </div>

                  <div className="space-y-1.5 font-sans">
                    <span className="text-xs font-black text-[#f26522] font-mono tracking-wider block">
                      {item.year} &bull; {item.title}
                    </span>
                    <p className="text-sm text-neutral-300 leading-relaxed font-semibold">
                      {item.action}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed pt-0.5 font-sans">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider font-mono mr-1.5">// AUDITED OUTCOME:</span>
                      {item.impact}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* CONCISE MISSION & VISION SEGMENT (CLEAN EDITORIAL SANS/MONO STYLING) */}
            <div className="border-t border-white/5 pt-12 space-y-8">
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-black block">
                MISSION & VISION MANDATE //
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                
                {/* Our Mission */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-[#f26522]">
                    <Target className="w-4 h-4" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">The Mission</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    To completely automate client customer acquisition pipelines, replacing slow manual transfers with programmatic webhook bridges and deploying trained, cognitive AI agents to capture, nurture, and log every lead instantly.
                  </p>
                </div>

                {/* Our Vision */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-[#f26522]">
                    <Compass className="w-4 h-4" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">The Vision</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    A world where businesses scale with pure mathematical predictability. We envision autonomous direct-response campaigns running 24/7, auto-tuning creative assets, and updating CRM frameworks with absolute zero waste.
                  </p>
                </div>

              </div>
            </div>

            {/* Why Businesses Trust Marketrixa */}
            <div className="space-y-4 pt-10 border-t border-white/5">
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-black block font-mono">
                WHY LEADING BRANDS PARTNER WITH US
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Direct Founder Auditing",
                    desc: "You never get passed off to junior account managers. Every strategic routing system is mapped, tested, and audited directly by Karan Dave."
                  },
                  {
                    title: "Complete Transparency Logs",
                    desc: "Zero estimates. We construct real-time live performance dashboards integrated directly with your HubSpot, Salesforce, or custom databases."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-[#f26522]/20 transition-all duration-300">
                    <h5 className="text-xs font-black tracking-wider text-[#f26522] uppercase font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f26522]" />
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Audit CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 gap-4 font-sans">
              <span className="text-[10px] text-neutral-500 font-mono">Verified Operational Telemetry</span>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/audit"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#f26522] hover:text-[#ff7b3c] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Schedule an audit session with the founder</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}