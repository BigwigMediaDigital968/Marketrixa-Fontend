import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Phone,
  ArrowUpRight,
  Sparkles,
  Activity,
  Shield,
  Globe
} from "lucide-react";
import WhatsappFloat from "./website/WhatsappFloat";

// --- Configuration ---
const contactConfig = {
  phoneNumber: "+917201907236",
  whatsappNumber: "917201907236",
  defaultMessage: "Hi! I'm interested in your services. Can we discuss further?"
};

// --- Animation Keyframes ---
const rippleVariants:any = {
  ripple: {
    scale: [1, 1.3, 1.6],
    opacity: [0.5, 0.2, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeOut"
    }
  }
};

// A highly organic shaky/jittery ring animation specifically for the call button
const shakyRingVariants:any = {
  ripple: {
    scale: [1, 1.25, 1.5, 1.3, 1],
    opacity: [0.6, 0.3, 0.1, 0.4, 0.6],
    x: [0, -3, 3, -2, 2, 0],
    y: [0, 2, -2, 1, -1, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ctaButtonVariants:any = {
  idle: { scale: 1 },
  hover: { scale: 1.1, rotate: 2 },
  tap: { scale: 0.92 },
  shiver: {
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 1, -1, 1, -1, 0],
    rotate: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function ContactCTAGroup () {
  const [shouldShiver, setShouldShiver] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Trigger attention-grabbing effects
  useEffect(() => {
    // Show a subtle tooltip indicator after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Synchronized shiver/wiggle every 6 seconds to capture gaze
    const shiverInterval = setInterval(() => {
      setShouldShiver(true);
      setTimeout(() => setShouldShiver(false), 500);
    }, 6000);

    return () => {
      clearTimeout(tooltipTimer);
      clearInterval(shiverInterval);
    };
  }, []);

  const handleCall = () => {
    window.open(`tel:${contactConfig.phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
      contactConfig.defaultMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3.5 font-sans">
      
      {/* Dynamic Hover / Attention Tooltip */}
      <AnimatePresence>
        {/* {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15 }}
            className="absolute right-16 bottom-[110px] bg-neutral-900 text-white px-3 py-1.5 rounded-xl shadow-2xl border border-white/10 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Consult Online Now</span>
            <button 
              onClick={() => setShowTooltip(false)} 
              className="text-white/40 hover:text-white ml-1 text-xs"
            >
              ×
            </button>
            <div className="absolute bottom-[-5px] right-4 w-2.5 h-2.5 bg-neutral-900 rotate-45 border-r border-b border-white/10" />
          </motion.div>
        )} */}
      </AnimatePresence>

      

      {/* 2. Direct Call Sticky Button with Shaky Ring */}
      <div className="relative group">
        {/* Special Shaky vibrating attention rings behind the Call Button */}
        <motion.div
          variants={shakyRingVariants}
          animate="ripple"
          className="absolute inset-0 rounded-full bg-[#f26522]/20 pointer-events-none z-0 border border-[#f26522]/30"
        />
        <motion.div
          variants={shakyRingVariants}
          animate="ripple"
          className="absolute -inset-1.5 rounded-full bg-[#f26522]/10 pointer-events-none z-0 border border-[#f26522]/10"
          style={{ animationDelay: "0.4s" }}
        />
        
        <motion.button
          variants={ctaButtonVariants}
          animate={shouldShiver ? "shiver" : "idle"}
          whileHover="hover"
          whileTap="tap"
          onClick={handleCall}
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-13 rounded-full bg-[#f26522] text-neutral-950 flex items-center justify-center shadow-xl hover:shadow-[#f26522]/20 hover:bg-[#ff7b3c] border border-[#f26522]/20 transition-all duration-300 cursor-pointer"
          title="Call Direct Line"
        >
          <Phone className="w-5.5 h-5.5 fill-neutral-950" />
          
          {/* Label Tooltip on Hover */}
          <span className="absolute right-14 bg-neutral-900 text-white border border-white/5 px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Call Now
          </span>
        </motion.button>
      </div>

      {/* 1. WhatsApp Sticky Button */}
      <div className="relative group h-15">
        {/* Pulsing attention aura behind WhatsApp */}
        <WhatsappFloat/>
      </div>

    </div>
  );
};