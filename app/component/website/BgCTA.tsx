import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BgCTA() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 relative rounded-[3rem] overflow-hidden border border-white/10"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg" // 👈 replace with your image path
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Gradient + Blur Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md" />

        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F26522] blur-[100px] rounded-full opacity-20 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] rounded-full opacity-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-16">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Let’s Take Your Business to the{" "}
              <span className="text-[#F26522]">Next Level</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Work with our experts to build strategies that deliver impact.
            </p>
          </div>

          {/* Right Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F26522] text-white font-black px-10 py-5 rounded-full shadow-xl hover:shadow-[#F26522]/40 transition-all flex items-center gap-3 whitespace-nowrap"
          >
            CONNECT WITH US
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
