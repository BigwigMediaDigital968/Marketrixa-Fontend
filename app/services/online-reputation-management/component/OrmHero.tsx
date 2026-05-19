"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  ThumbsUp,
  ShieldAlert,
  ArrowRight,
  Activity,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

const OrmHero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- Left Content: Messaging --- */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: E }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#f26522]/20 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-[#f26522]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                Online Reputation Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Your Brand's Reputation Is Your Most Valuable Asset.
              <br />
              <span className="text-[#f26522]">Protect It.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-md md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              <span className="text-white font-semibold">One bad review.</span>{" "}
              One negative article. One damaging social post. That's all it
              takes to derail years of trust-building. At Marketrixa, we don't
              just manage your online reputation. we engineer it, protect it,
              and make it work as a competitive advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: E }}
            >
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto group"
              >
                Get a Free ORM Audit
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* --- Right Visual: Reputation Monitoring Image --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: E }}
            className="relative"
          >
            {/* The Image Container - Using a professional "Monitoring/Security" themed image */}
            <div className="premium-card !overflow-visible aspect-square p-4 relative z-10">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Brand Reputation Monitoring"
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#f26522]/10" />
              </div>
            </div>

            {/* FLOATING REPUTATION BADGES */}

            {/* Badge 1: Review Score (Top Left) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 -left-8 glass p-5 rounded-3xl border-green-500/30 shadow-2xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <Star className="text-green-500 fill-green-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Sentiment Score
                </p>
                <p className="text-2xl font-black text-white">4.9 / 5.0</p>
              </div>
            </motion.div>

            {/* Badge 2: Crisis Alert (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-8 -right-8 glass p-5 rounded-3xl border-[#f26522]/30 shadow-2xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f26522]/10 flex items-center justify-center">
                <ShieldAlert className="text-[#f26522] w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Risk Monitoring
                </p>
                <p className="text-sm font-bold text-white">
                  Active Protection
                </p>
              </div>
            </motion.div>

            {/* Badge 3: Engagement Stats (Top Right) */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/4 -right-12 glass p-4 rounded-2xl border-white/10 z-30 hidden md:flex items-center gap-3"
            >
              <ThumbsUp className="text-blue-500 w-4 h-4" />
              <span className="text-xs font-bold">92% Positive Feedback</span>
            </motion.div>

            {/* Decorative Pulse Background */}
            <div className="absolute -inset-10 border border-[#f26522]/5 rounded-full -z-10 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Activity size={400} className="text-[#f26522]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrmHero;
