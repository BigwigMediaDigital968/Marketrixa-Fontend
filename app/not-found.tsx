"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "./component/website/Navbar";
import Footer from "./component/website/Footer";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Interactive Background Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(242, 101, 34, 0.08), transparent)`,
          }}
        />

        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 text-center">
          {/* Animated 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="-mt-12 md:-mt-20"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Lost in the <span className="text-[#F26522]">Digital Space?</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
              The page you are looking for has been moved, deleted, or never
              existed in our agency's ecosystem. Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold transition-all cursor-pointer"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Go Back
              </button>

              <a
                href="/"
                className="flex items-center gap-2 px-8 py-4 bg-[#F26522] hover:bg-[#d8561d] rounded-full text-white font-bold transition-all shadow-[0_0_20px_rgba(242,101,34,0.3)] hover:shadow-[0_0_30px_rgba(242,101,34,0.5)] cursor-pointer"
              >
                <Home size={18} />
                Return Home
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex items-center gap-3 text-white/20 uppercase tracking-widest text-[10px] font-bold">
            <div className="w-10 h-[1px] bg-white/10" />
            Error Code: 0x404_NOT_FOUND
          </div>
        </div>

        <div className="absolute top-10 right-10 flex items-center gap-4 text-gray-600">
          <div className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
          <span className="text-[10px] font-mono">SYSTEM_ONLINE</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
