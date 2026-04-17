"use client";
import Popup from "@/app/component/website/Popup";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Cpu,
  Layout,
  Smartphone,
} from "lucide-react";
import React from "react";

const WebHero = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  // Fixed animation variants with explicit types for TypeScript compatibility
  const floatVariants: Variants = {
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut", // Framer motion expects literal types here
      },
    },
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-20 lg:py-0">
        {/* Background Decorative Element */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-[#F26522] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-40" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:px-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-[#F26522]" />
              <span className="text-white text-[10px] md:text-xs font-medium uppercase tracking-widest">
                Web Development Excellence
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
              Top Website {""}
              <br />
              <span className="text-[#F26522]">Development Company</span> <br />
              in India.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Establish a solid digital base with websites that are made to
              deliver, grow, and change your site visitors into loyal customers.
            </p>

            <motion.button
              onClick={() => setShowPopup(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#F26522] hover:bg-[#f95002] text-[#051612] font-bold px-8 py-4 rounded-full transition-all group cursor-pointer"
            >
              Start your project
              <div className="bg-[#051612] p-1 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.button>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F26522]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              variants={floatVariants}
              animate="floating"
              className="absolute -left-6 top-1/4 bg-white p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100 z-20"
            >
              <div className="bg-blue-50 p-2 rounded-xl">
                <Layout className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                  Architecture
                </p>
                <p className="text-sm font-black text-gray-800">
                  Clean Codebase
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={floatVariants}
              animate="floating"
              className="absolute -right-4 bottom-20 bg-white p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-100 z-20"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <img
                  src="https://i.pravatar.cc/100?u=dev"
                  alt="Lead Developer"
                />
              </div>
              <div className="flex flex-col">
                <div className="h-2 w-20 bg-gray-200 rounded-full mb-1" />
                <div className="h-2 w-12 bg-[#00D084] rounded-full" />
              </div>
              <div className="bg-green-50 p-1.5 rounded-full">
                <Smartphone className="w-4 h-4 text-green-600" />
              </div>
            </motion.div>

            {/* Floating UI Nodes */}
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
              <Globe className="w-6 h-6 text-[#F26522]" />
            </div>

            <div className="absolute top-10 left-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <Cpu className="w-5 h-5 text-purple-600" />
            </div>
          </motion.div>
        </div>

        {/* Bottom masking for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#051612] to-transparent" />
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default WebHero;
