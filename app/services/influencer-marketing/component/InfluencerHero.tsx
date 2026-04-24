"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles } from "lucide-react";

const InfluencerHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-[#f26522]/30">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
          alt="Influencer Marketing Background"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f26522]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass mb-8"
        >
          <Sparkles size={14} className="text-[#f26522]" />
          <h1 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Influencer Marketing Service by Marketrixa
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Connect With the <br />
          <span className="text-[#f26522] italic">Right & Real Voices.</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Grow your brand with authentic influence. Influencer marketing is fast
          becoming one of the most effective tools to connect with today's
          audiences. People believe in the words of those they follow partnering
          with influencers is the best way to get your brand known and engaged.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#f26522] text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10 active:scale-95"
          >
            <span className="relative z-10">Start Your Campaign</span>
            <ArrowRight
              className="relative z-10 transition-transform group-hover:translate-x-1"
              size={20}
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          <div className="flex items-center gap-3 text-white/40">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center overflow-hidden"
                >
                  <Users size={14} />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium tracking-tight">
              500+ Influencers Network
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/20">
          Explore Influence
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#f26522] to-transparent" />
      </motion.div>
    </section>
  );
};

export default InfluencerHero;
