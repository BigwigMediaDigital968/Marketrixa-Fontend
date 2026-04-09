"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video } from "lucide-react";

/**
 * HERO COMPONENT
 * Features a background video, cycling typewriter animation, and premium CTA buttons.
 */
export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Array of phrases to cycle through
  const phrases = [
    "Metrics That Move Markets",
    "Strategies That Drive Growth",
    "Design That Captivates Souls",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopIndex % phrases.length;
      const fullText = phrases[currentIndex];

      if (isDeleting) {
        // Removing characters
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster deletion
      } else {
        // Adding characters
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100); // Normal typing speed
      }

      // Logic for switching states
      if (!isDeleting && displayText === fullText) {
        // Finished typing: pause before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Finished deleting: move to next phrase
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(500); // Small pause before next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, typingSpeed, phrases]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="./marketing-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-6 max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 text-[10px] rounded-full border border-[#F26522]/30 bg-[#F26522]/10 text-[#F26522] font-semibold mb-6 uppercase tracking-[0.3em]">
            Digital Marketing Excellence
          </span>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            The Future of <br />
            <span className="text-[#F26522] min-h-[1.2em] inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 w-[3px] md:w-[6px] h-[0.9em] bg-[#F26522] align-middle"
              />
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Marketrixa combines data-driven strategy with disruptive creativity
            to transform your digital presence into a market-leading powerhouse.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary group cursor-pointer">
              Start Your Project
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
            <button className="text-white font-semibold hover:text-[#F26522] transition-all flex items-center gap-3 group cursor-pointer">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F26522] transition-colors">
                <Video className="text-[#F26522] hover:text-white" />
              </span>
              Watch Stories
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-[#F26522] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
