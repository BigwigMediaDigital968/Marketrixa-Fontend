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

const HeroSMO: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Brand Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')`,
            filter: "brightness(0.3) saturate(0.5)",
          }}
        />

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
            Turn Followers <br />
            into <span className="text-[#f26522]">Customers</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
            We help brands grow, engage, and convert through strategic social
            media management.{" "}
            <span className="text-white font-medium">Marketrixa</span> crafts
            data-driven SMO strategies tailored for your business success.
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
          <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-[#f26522]/20">
            <div className="bg-[#0b0f1a]/90 backdrop-blur-3xl rounded-[2.8rem] border border-white/10 p-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              {/* Header UI */}
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f26522]/40" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="px-3 py-1 rounded-md bg-[#f26522]/5 border border-[#f26522]/20 text-[10px] text-[#f26522] font-black tracking-widest uppercase">
                  Analytics Hub
                </div>
              </div>

              {/* Data Visuals */}
              <div className="space-y-8">
                {/* Bar Chart Section */}
                <div className="h-32 flex items-end justify-between gap-2 px-2 relative">
                  <div className="absolute -top-4 left-0 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={12} className="text-[#f26522]" />{" "}
                    Engagement Volume
                  </div>
                  {[60, 40, 85, 55, 95, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 group relative">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-1000 ease-out ${
                          i === 6
                            ? "bg-[#f26522]"
                            : "bg-white/10 group-hover:bg-white/20"
                        }`}
                        style={{ height: isVisible ? `${h}%` : "0%" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f26522]/30 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <Share2 size={16} className="text-[#f26522]" />
                      <span className="text-[10px] text-green-400 font-bold">
                        +18%
                      </span>
                    </div>
                    <div className="text-xl font-bold text-white">42.8K</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black mt-1">
                      Social Shares
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <MousePointer2 size={16} className="text-cyan-400" />
                      <span className="text-[10px] text-green-400 font-bold">
                        +24%
                      </span>
                    </div>
                    <div className="text-xl font-bold text-white">12.5%</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black mt-1">
                      Click Through
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Profile Widget */}
              <div className="absolute top-0 -right-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] flex items-center gap-4 animate-float shadow-2xl">
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
            </div>
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
