"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  MousePointer2,
  BarChart,
  Zap,
  Globe,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Activity,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSMO: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Brand Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0b0f1a]/95 to-[#f26522]/" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Activity className="w-4 h-4 animate-pulse" /> Social Media
            Optimization
          </div>

          <h1 className="text-4xl md:text-6xl text-white mb-8">
            Social Media
            <span className="text-[#f26522]"> Growth</span>
          </h1>

          <p className="text-md md:text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
            <span className="text-white font-medium">Marketrixa</span> is a
            trusted social media optimization company in Ahmedabad helping
            brands improve engagement, visibility, audience trust, and online
            growth through strategic content and platform optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-[#f26522] text-white font-black rounded-2xl hover:shadow-[0_0_40px_rgba(242,101,34,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3 group"
            >
              Start Strategy Call{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="#package"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center"
            >
              Our Packages
            </Link>
          </div>

          {/* Metrics / Trust Signals */}
          <div className="mt-16 border-t border-white/5 grid grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">
                95%
              </div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                Client ROI
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">
                2.4M
              </div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                Monthly Reach
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">
                10+
              </div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                Industry Awards
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Command Center Dashboard Mockup */}
        <div
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            {/* Main Container */}
            <div className="relative bg-[#0b0f1a]/90 backdrop-blur-3xl rounded-[2.8rem] border border-white/10 p-5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-[#f26522]/10 blur-3xl pointer-events-none" />

              {/* Top UI Bar */}
              <div className="relative z-10 flex items-center justify-between mb-5 px-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f26522]/50" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/service/smo/smo-hero-image.png"
                  alt="Social Media Optimization"
                  width={1400}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover rounded-[2rem] hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Bottom Floating Stats */}
              <div className="absolute bottom-10 left-10 right-10 z-20 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <Share2 size={16} className="text-[#f26522]" />
                    <span className="text-[10px] text-green-400 font-bold">
                      +18%
                    </span>
                  </div>

                  <div className="text-xl font-bold text-white">42.8K</div>

                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    Social Shares
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <MousePointer2 size={16} className="text-cyan-400" />
                    <span className="text-[10px] text-green-400 font-bold">
                      +24%
                    </span>
                  </div>

                  <div className="text-xl font-bold text-white">12.5%</div>

                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    Click Through
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Widget */}
            <div className="absolute top-6 -right-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] flex items-center gap-4 animate-float shadow-2xl z-30">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f26522] to-orange-400 flex items-center justify-center shadow-lg">
                <Rocket size={24} className="text-white" />
              </div>

              <div>
                <div className="text-xs font-black text-white uppercase tracking-wider">
                  Growth Locked
                </div>

                <div className="text-[10px] text-[#f26522] font-bold">
                  Optimization Active
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#f26522]/10 rounded-full pointer-events-none" />

            <div className="absolute -bottom-10 -right-10 w-52 h-52 border border-white/5 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSMO;
