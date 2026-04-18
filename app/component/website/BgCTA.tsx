"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Popup from "./Popup";
import React from "react";

type BgCTAProps = {
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  bgImage?: string;
};

export default function BgCTA({
  title,
  description,
  ctaText = "CONNECT WITH US",
  bgImage = "/cta-bg.png",
}: BgCTAProps) {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mx-24 mx-5 relative rounded-[3rem] mb-10 overflow-hidden border border-white/10"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Gradient + Blur Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md" />

        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F26522] blur-[100px] rounded-full opacity-20 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] rounded-full opacity-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              {title}
            </h3>
            <p className="text-gray-300 text-lg">{description}</p>
          </div>

          {/* Right Button */}
          <motion.button
            onClick={() => setShowPopup(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F26522] text-white font-black px-10 py-5 rounded-full shadow-xl hover:shadow-[#F26522]/40 transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer"
          >
            {ctaText}
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
