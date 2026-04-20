"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldAlert,
  Zap,
  Users2,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";
import Popup from "@/app/component/website/Popup";

const AffiliateGrow = () => {
  const [showPopup, setShowPopup] = useState(false);
  const steps = [
    {
      icon: <Users2 size={24} />,
      title: "Build High-Quality Partnerships",
      text: "We curate long-term affiliate ecosystems with trustworthy creators and industry leaders.",
      color: "bg-blue-500",
    },
    {
      icon: <MousePointerClick size={24} />,
      title: "Drive High-Intent Traffic",
      text: "Targeting users at the peak of their decision-making process for immediate impact.",
      color: "bg-orange-500",
    },
    {
      icon: <Zap size={24} />,
      title: "Optimize Conversions",
      text: "We refine the user experience within your funnel to turn visitors into loyal sales.",
      color: "bg-green-500",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Continuously Refine & Scale",
      text: "Data-led adjustments ensure your growth channel remains consistent and predictable.",
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side: Visual & Image Assets */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                  alt="Affiliate Marketing Strategy"
                  className="w-full h-[500px] object-cover"
                />

                {/* Floating Overlay: Fraud Prevention */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-red-100"
                >
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                      Security
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      Fraud Protection Active
                    </p>
                  </div>
                </motion.div>

                {/* Floating Overlay: Performance Tracking */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-10 left-6 bg-gray-900 text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[240px]"
                >
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Live ROI Tracking</p>
                    <p className="text-lg font-bold">+142% Scale</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decorative Element */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            {/* Right Side: Content & Roadmap */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
                  Scale Your Brand with a Leading{" "}
                  <span className="text-orange-500 decoration-orange-200">
                    Affiliate Marketing Partner
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Affiliate marketing is one of the most efficient growth
                  channels if it's properly structured with the right partners
                  and performance tracking. Marketrixa is primarily driving
                  efforts towards constructing affiliate ecosystems which are
                  trustworthy, scalable, and result-oriented.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Our strategy is not limited to partnerships only. We make sure
                  your whole funnel is geared up, right from pulling in
                  top-notch affiliates implementing a flawless user experience
                  that changes visitors into sales. We also focus deeply on
                  performance tracking and fraud prevention that enable you to
                  expand securely and transparently.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Execution Steps */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex gap-4 group"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="border border-amber-700 p-5 text-center text-black mb-5">
            With a structured and data-led approach, we help turn affiliate
            marketing into a consistent and predictable growth channel for your
            business.
          </p>

          {/* CTA Button (Centered) */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setShowPopup(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 shadow-[0_20px_40px_-15px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all cursor-pointer"
            >
              Start Growing Today
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default AffiliateGrow;
