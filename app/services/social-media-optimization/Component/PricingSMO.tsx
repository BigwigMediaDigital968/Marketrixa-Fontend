"use client";

import React, { useState } from "react";
import {
  Check,
  Zap,
  Rocket,
  Globe,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Star,
} from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
}

const PricingSMO: React.FC = () => {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const tiers: PricingTier[] = [
    {
      name: "Starter Growth",
      price: "₹14,999",
      description:
        "Perfect for startups looking to establish a professional social presence.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "3 Social Media Platforms",
        "12 High-Quality Posts/mo",
        "Basic Profile Optimization",
        "Hashtag Strategy",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Business Pro",
      price: "₹29,999",
      description:
        "Comprehensive management for established brands scaling for ROI.",
      isPopular: true,
      icon: <Rocket className="w-6 h-6" />,
      features: [
        "5 Social Media Platforms",
        "20 Custom Posts/mo",
        "Reels & Short Video Editing",
        "Active Community Management",
        "Competitor Analysis",
        "Advanced Analytics Dashboard",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Full-scale digital dominance for global eCommerce and large enterprises.",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "Unlimited Platforms",
        "Daily Custom Content",
        "Influencer Outreach",
        "Paid Ad Management Integration",
        "Dedicated Account Manager",
        "24/7 Monitoring & Response",
        "Weekly Strategy Syncs",
      ],
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Brand Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#f26522]/10 border border-[#f26522]/20">
            <TrendingUp className="w-4 h-4 text-[#f26522]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f26522]">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            Invest in Your{" "}
            <span className="text-[#f26522]">Digital Growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-light leading-relaxed text-lg">
            Transparent pricing with no hidden fees. Choose the plan that
            matches your current scale and future ambitions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredTier(idx)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`relative p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full border overflow-hidden ${
                tier.isPopular
                  ? "bg-gradient-to-b from-white/10 to-transparent border-[#f26522]/30"
                  : "bg-white/[0.03] border-white/10"
              } ${hoveredTier === idx ? "scale-[1.02] -translate-y-2" : ""}`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 bg-[#f26522] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  <Star size={10} fill="currentColor" /> Recommended
                </div>
              )}

              {/* Icon & Title */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  tier.isPopular
                    ? "bg-[#f26522] text-white"
                    : "bg-white/5 text-[#f26522]"
                }`}
              >
                {tier.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
                {tier.description}
              </p>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-gray-500 text-sm font-medium">
                    /month
                  </span>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 transition-colors group-hover:bg-green-500/20">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-sm text-gray-400 font-light leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link
                href="/contact"
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group ${
                  tier.isPopular
                    ? "bg-[#f26522] text-white hover:shadow-[0_15px_30px_rgba(242,101,34,0.3)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Conversion Section */}
        <div className="relative p-10 md:p-20 mt-20 rounded-[3rem] bg-gradient-to-br from-[#0b0f1a] to-[#1a1f2e] border border-white/10 shadow-2xl overflow-hidden group">
          {/* Decorative background glow */}
          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#f26522]/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-8">
                Ready to Transform Your <br />
                <span className="text-[#f26522]">Social Media?</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                Join 100+ businesses across India and globally who trust{" "}
                <span className="text-white font-bold">Marketrixa</span> to grow
                their brand, engage their audience, and generate real revenue.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-black rounded-2xl hover:shadow-[0_20px_40px_rgba(34,211,238,0.3)] transition-all border active:scale-95 flex items-center justify-center gap-2"
                >
                  Get Free Strategy Call <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Steps Content */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Book a Free Call",
                  desc: "Schedule a no-obligation 30-minute strategy session with our SMO specialists.",
                },
                {
                  step: "02",
                  title: "Get Your Custom Plan",
                  desc: "Receive a tailored SMO strategy built specifically for your industry and goals.",
                },
                {
                  step: "03",
                  title: "Watch Your Brand Grow",
                  desc: "We execute and optimize while you focus on running your business.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="text-3xl font-black text-white/10 group-hover:text-[#f26522]/40 transition-colors duration-500 italic shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#f26522] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Footer Marker */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 border-t border-white/5 pt-10">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-cyan-400" />
            <span className="text-xs text-white font-black tracking-widest uppercase italic">
              Marketrixa Agency
            </span>
          </div>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold text-center md:text-right">
            📍 India's results-driven digital marketing agency. Serving SMBs &
            eCommerce globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSMO;
