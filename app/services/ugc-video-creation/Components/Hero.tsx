'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:py-32 flex flex-col justify-center min-h-[90vh] border-b border-white/5 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-white"
              >
                Your Audience <br />
                Trusts Real People. <br />
                <span className="text-[#f26522] italic font-light">We Make That Work.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <p
                  className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed"
                >
                At Marketrixa, we produce and manage authentic user-generated content (UGC) video campaigns. We turn genuine creator voices into your most powerful, data-backed conversion driver across Gujarat & nationwide.
              </p>
              <p className="ml-4 pl-4 border-l-2 border-[#f26522] text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
                Ads are skipped. Polished brand content is ignored. But a real person talking about a product they actually use? That gets watched — and it gets shared. UGC video is not a trend. It is the new trust currency.

              </p>

              </motion.div>

              {/* Action Rows */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              >
                <button
                  onClick={() => window.open("/contact", "_self")}
                  className="px-6 py-4 rounded-xl bg-[#f26522] hover:bg-[#ff7b3c] text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-[#f26522]/25 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Request Free UGC Strategy Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">50+ Ahmedabad Brands Scaled</span>
                </div>
              </motion.div>

            </div>

            {/* Right Media Display Screen Column */}
            <div className="lg:col-span-5 relative group">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] max-w-[360px] mx-auto rounded-[2.5rem] bg-neutral-950 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-[#f26522]/30 transition-all duration-500 cursor-pointer pointer-events-auto"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                {/* Simulated native video display */}
                <video
                  src="https://cdn.pixabay.com/video/2019/09/04/26537-357886155_large.mp4"
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Shading overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:from-neutral-950/80" />

                {/* Live telemetry tags overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-neutral-950/90 border border-white/10 group-hover:border-[#f26522]/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-[#f26522] rounded-full animate-ping" />
                  <span className="text-[8px] font-mono font-bold tracking-widest text-white uppercase">NATIVE CAMPAIGN TEST</span>
                </div>

                {/* Visual quote overlays */}
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-2 transform group-hover:translate-y-[-4px] transition-transform duration-500 ease-out">
                  <span className="text-[10px] font-mono tracking-widest text-[#f26522] uppercase font-bold block drop-shadow-md">TRUST CURRENCY</span>
                  <p className="text-sm font-semibold text-neutral-200 italic leading-snug drop-shadow-md group-hover:text-white transition-colors duration-300">
                    "Consumers scroll past glossy ads in seconds, but pause for relatable videos from everyday creators who feel like them."
                  </p>
                </div>

                {/* Premium Inner Bevel Border */}
                <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none group-hover:border-white/20 transition-all duration-500" />
              </motion.div>

              {/* Dynamic lighting behind the element on hover */}
              <div className="absolute -inset-10 bg-[#f26522]/5 group-hover:bg-[#f26522]/15 blur-[100px] rounded-full -z-10 pointer-events-none transition-all duration-700 ease-out transform group-hover:scale-110" />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}