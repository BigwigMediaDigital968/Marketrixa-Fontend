"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const IndustryHero = () => {
  const brandOrange = "#F26522";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden pt-20">
      {/* Left Content Side */}
      <div className="relative flex-1 flex items-center px-6 md:px-12 lg:px-24 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-12 h-[2px]`}
              style={{ backgroundColor: brandOrange }}
            />
            <span className="text-white font-bold tracking-[0.4em] uppercase text-xs">
              Specialized Expertise
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1] mb-8">
            INDUSTRIES WE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-orange-400">
              REVOLUTIONIZE
            </span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            We don't just build websites; we engineer industry-specific digital
            ecosystems that drive tangible growth and dominate market shares
            across diverse sectors.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs flex items-center gap-3"
            >
              Explore Sectors
              <ChevronRight size={16} />
            </motion.button>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-neutral-950 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="pl-6 flex flex-col justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-tighter">
                  Trusted by
                </span>
                <span className="text-neutral-500 text-[10px] uppercase">
                  500+ Market Leaders
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Visual Side */}
      <div className="relative flex-1 min-h-[400px] lg:min-h-full overflow-hidden">
        {/* Abstract Geometry Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#F26522]/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-600/5 blur-[100px] rounded-full" />
        </div>

        {/* Main Image with Parallax-style motion */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Skyscraper Architecture"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          {/* Brand Tint Overlay */}
          <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/20 to-transparent lg:from-neutral-950 lg:via-transparent" />
        </motion.div>

        {/* Floating Data Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 right-12 z-30 p-8 bg-neutral-900/80 backdrop-blur-xl border border-white/10 hidden md:block max-w-[280px]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400 text-[10px] uppercase font-bold tracking-widest">
                Efficiency Rate
              </span>
              <span className="text-[#F26522] text-xs font-bold">+94%</span>
            </div>
            <div className="h-[2px] w-full bg-neutral-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-full bg-[#F26522]"
              />
            </div>
            <p className="text-white text-sm font-medium leading-snug">
              Average performance increase observed across our Fintech and Real
              Estate portfolios.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Text Branding */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black text-white leading-none -mb-10">
          ESCALATE ESCALATE ESCALATE
        </h2>
      </div>
    </section>
  );
};

export default IndustryHero;
