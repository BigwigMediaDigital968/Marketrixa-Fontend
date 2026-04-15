"use client";

import React from "react";
import { motion } from "framer-motion";
import Popup from "./Popup";

export default function CTA2() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      {/* Bottom CTA Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="
          w-full
          px-4 sm:px-6 md:px-10 lg:px-16
          my-10 md:my-16
        "
      >
        <div
          className="
            max-w-6xl mx-auto
            p-6 sm:p-8 md:p-10 lg:p-12
            rounded-3xl md:rounded-[2.5rem]
            bg-gradient-to-r from-[#F26522]/20 to-transparent
            border border-[#F26522]/20
            flex flex-col md:flex-row
            items-center md:items-center
            justify-center md:justify-between
            gap-6 md:gap-8
            text-center md:text-left
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Let’s Build Your Growth Plan
            </h3>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Build a tailor-made plan to increase your visibility, drive more
              leads, and attain better results over time.
            </p>
          </div>

          {/* BUTTON */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={() => setShowPopup(true)}
              className="
                w-full sm:w-auto
                bg-[#F26522] hover:bg-white
                text-black font-bold
                px-6 sm:px-8 md:px-10
                py-3 sm:py-4 md:py-5
                rounded-full
                transition-all
                transform active:scale-95
                shadow-[0_10px_30px_rgba(242,101,34,0.3)]
                text-sm sm:text-base md:text-lg
                whitespace-nowrap cursor-pointer
              "
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </motion.div>

      {/* POPUP (Keep here only if NOT using portal globally) */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
