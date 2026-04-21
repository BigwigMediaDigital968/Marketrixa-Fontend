"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  UserPlus,
  HeartHandshake,
  ShieldCheck,
  Coins,
  ArrowRight,
} from "lucide-react";

const AffiliateServices = () => {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: 0,
      title: "Planning & Strategy",
      content:
        "We create personalized affiliate plans that perfectly fit your company objectives, target audience, and competition environment to attract quality visitors.",
      icon: <Compass className="w-6 h-6" />,
      tag: "PHASE 01",
    },
    {
      id: 1,
      title: "Partner Selection & Recruitment",
      content:
        "We associate your company with the most appropriate affiliates who represent your target market and give measurable results.",
      icon: <UserPlus className="w-6 h-6" />,
      tag: "PHASE 02",
    },
    {
      id: 2,
      title: "Motivation & Assistance",
      content:
        "We provide partners with necessary promotional materials, instructions, and continuous help to ensure marketing efforts are stable and effective.",
      icon: <HeartHandshake className="w-6 h-6" />,
      tag: "PHASE 03",
    },
    {
      id: 3,
      title: "Monitoring & Adherence",
      content:
        "Using sophisticated tracking tools, we keep an eye on performance while enforcing quality standards and anti-fraud measures.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "PHASE 04",
    },
    {
      id: 4,
      title: "Rewards & Payments",
      content:
        "We design attractive commission schemes and facilitate payments to maintain the enthusiasm and commitment of your affiliates.",
      icon: <Coins className="w-6 h-6" />,
      tag: "PHASE 05",
    },
  ];

  return (
    <section className="relative py-14 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
              <span className="text-[#f26522] text-xs font-bold tracking-widest uppercase">
                Our Service Roadmap
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1]"
            >
              Comprehensive <span className="text-[#f26522]">Affiliate</span>{" "}
              <br />
              Marketing Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 lg:max-w-md text-lg leading-relaxed"
            >
              We provide comprehensive services that aim at producing regular
              conversions and establishing great partnerships with accuracy and
              efficiency.
            </motion.p>
          </div>
        </div>

        {/* Main Interactive Service Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Navigation Steps */}
          <div className="lg:col-span-5 space-y-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`group relative cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                  activeStep === idx
                    ? "bg-[#f26522]/10 border border-[#f26522]/30"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === idx
                        ? "bg-[#f26522] text-black shadow-[0_0_20px_rgba(242,101,34,0.4)]"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] mb-1 block ${
                        activeStep === idx ? "text-[#f26522]" : "text-gray-500"
                      }`}
                    >
                      {service.tag}
                    </span>
                    <h3
                      className={`text-lg font-bold transition-colors ${
                        activeStep === idx ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-500 ${
                      activeStep === idx
                        ? "translate-x-0 opacity-100 text-[#f26522]"
                        : "-translate-x-4 opacity-0"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Detailed View (Glass Card) */}
          <div className="lg:col-span-7 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass relative min-h-[450px] rounded-[2rem] p-10 flex flex-col justify-center overflow-hidden"
              >
                {/* Big Background Icon Watermark */}
                <div className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 scale-[2]">
                  {services[activeStep].icon}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#f26522] rounded-2xl flex items-center justify-center text-black mb-8 shadow-2xl shadow-[#f26522]/20">
                    {services[activeStep].icon}
                  </div>

                  <h4 className="text-sm font-black text-[#f26522] tracking-[0.3em] uppercase mb-4">
                    Detailed Focus
                  </h4>

                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    {services[activeStep].title}
                  </h3>

                  <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                    {services[activeStep].content}
                  </p>

                  <div className="mt-12 flex gap-4">
                    <button className="px-8 py-4 bg-[#f26522] text-black font-bold rounded-full hover:scale-105 transition-transform">
                      Learn More
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                      Case Studies
                    </button>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-8 right-10 flex gap-2">
                  {services.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeStep === i
                          ? "w-8 bg-[#f26522]"
                          : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default AffiliateServices;
