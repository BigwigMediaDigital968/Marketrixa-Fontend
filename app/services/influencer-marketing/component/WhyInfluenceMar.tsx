"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  BarChart3,
  Settings,
  MessageSquare,
  CheckCircle2,
  Shirt,
  Utensils,
  Stethoscope,
  Home,
  GraduationCap,
  Cpu,
  Search,
  LayoutList,
  PlayCircle,
  Eye,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Heart,
  Share2,
  MousePointer2,
  LucideProps,
  FileText,
  Globe,
} from "lucide-react";
import Link from "next/link";

// Interfaces for TypeScript safety
interface Industry {
  name: string;
  desc: string;
  icon: React.ReactElement<LucideProps>;
}

interface Feature {
  title: string;
  text: string;
  icon: React.ReactElement<LucideProps>;
}

interface ProcessStep {
  title: string;
  desc: string | React.ReactNode;
  icon: React.ReactElement<LucideProps>;
}

const WhyInfluenceMar: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-cycle effect for the workflow steps
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000); // 2.5s for a slightly more relaxed pace than 2s

    return () => clearInterval(interval);
  }, [isPaused]);

  const industries: Industry[] = [
  {
    name: "Fashion & Lifestyle",
    desc: "Style, beauty, fashion trends and lifestyle audiences were the focus of influencer campaigns.",
    icon: <Shirt className="w-6 h-6" />,
  },
  {
    name: "Food & Beverage",
    desc: "Influencer collaborations crafted to promote food brands, restaurants, beverages, and culinary experiences while increasing audience engagement and brand awareness.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    name: "Healthcare & Wellness",
    desc: "Healthcare awareness, wellness brands and medical services strategic influencer outreach.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    name: "Education & Training",
    desc: "Promotions of educational establishments, courses and professional training programs.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    name: "Technology & Startups",
    desc: "Tech brand and digital product creator-driven campaigns designed to help startups grow.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    name: "Real Estate",
    desc: "Influencer partnerships to boost property visibility and engagement with the local audience.",
    icon: <Home className="w-6 h-6" />,
  },
];

  const whyChoose: Feature[]  = [
  {
    title: "Customized Influencer Strategies",
    text: "Optimized creator campaigns designed around your target audience, brand positioning, and business goals.",
    icon: <Settings />,
  },
  {
    title: "Access to Niche-Specific Creators",
    text: "Strong relationships with influencers, creators, and digital personalities across a wide range of industries and niches.",
    icon: <Users />,
  },
  {
    title: "Audience-Focused Campaign Planning",
    text: "Campaigns built to strengthen audience engagement, trust, communication, and overall brand impact.",
    icon: <Target />,
  },
  {
    title: "Transparent Campaign Reporting",
    text: "Detailed performance reports with engagement insights, reach analysis, campaign tracking, and measurable outcomes.",
    icon: <FileText />,
  },
  {
    title: "Data-Driven Optimization",
    text: "Continuous monitoring, analysis, and refinement of campaigns to maximize performance and return on investment.",
    icon: <BarChart3 />,
  },
  {
    title: "Multi-Platform Expertise",
    text: "Strategic influencer campaigns across Instagram, YouTube, LinkedIn, and other leading digital platforms.",
    icon: <Globe />,
  },
];

  const processSteps: ProcessStep[] = [
  {
    title: "Brand & Audience Research",
    desc: "Before planning campaigns, we analyze your business goals, audience interests, and industry trends.",
    icon: <Target />,
  },
  {
    title: "Influencer Selection",
    desc: "We find creators who align with your audience, brand identity, and products or services.",
    icon: <Search />,
  },
  {
    title: "Campaign Planning",
    desc: "We develop campaign themes, communication guidelines, and content objectives to ensure effective execution.",
    icon: <LayoutList />,
  },
  {
    title: "Collaboration Execution",
    desc: "Creators publish campaign content while we manage consistency, engagement, and coordination throughout the campaign.",
    icon: <PlayCircle />,
  },
  {
    title: "Campaign Monitoring",
    desc: "Content performance is tracked continuously to evaluate audience feedback, engagement, and overall campaign success.",
    icon: <Eye />,
  },
  {
    title: "Optimization & Reporting",
    desc: (
      <>
        Strategic improvements and detailed analytics help maximize{" "}
        <Link
          href="/services/campaign-performance"
          className="font-medium text-primary hover:underline"
        >
          campaign performance
        </Link>{" "}
        and audience engagement.
      </>
    ),
    icon: <BarChart3 />,
  },
];

  const benefits: string[] = [
    "Increased brand awareness",
    "Higher audience engagement",
    "Stronger customer trust",
    "Targeted marketing reach",
    "Improved brand recognition",
    "Better customer relationships",
  ];

  return (
    <section
      className={`relative w-full py-24 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #0b0f1a 0%, #1a1410 35%, #0f172a 65%, #1a1410 100%)",
      }}
    >
      {/* Background Noise & Grid Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]"></div>
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Floating "Stickers" / Decorative Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-700 opacity-20 hidden lg:block">
        <div className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-md rotate-12">
          <Heart className="w-8 h-8 text-[#f26522] fill-[#f26522]" />
        </div>
      </div>
      <div className="absolute bottom-40 right-20 animate-pulse opacity-20 hidden lg:block">
        <div className="bg-white/10 p-4 rounded-full border border-white/20 backdrop-blur-md -rotate-6">
          <Share2 className="w-8 h-8 text-[#f26522]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f26522]/30 bg-[#f26522]/5 text-[#f26522] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <Sparkles className="w-3 h-3" /> Full-Suite Influence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter text-white">
            Industries We Serve With{" "}
            <span className="text-[#f26522]">Influencer Marketing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
           Marketrixa creates bespoke creator campaigns for companies of all industries. 
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#f26522]/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                {React.cloneElement(item.icon, { className: "w-32 h-32" })}
              </div>
              <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#f26522] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#f26522] group-hover:text-white transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f26522] transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us & Benefits Combined Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-20">
          <div className="lg:col-span-8 p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent">
            <div className="bg-[#0b0f1a]/80 backdrop-blur-xl p-8 md:p-12 rounded-[1.9rem] h-full">
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                Why Choose <span className="text-[#f26522]">Marketrixa</span>?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-[#f26522]/10 text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white transition-all">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#f26522] rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sparkles size={120} />
            </div>
            <h3 className="text-2xl font-black text-black mb-8 leading-tight">
              Noticeable Business <br />
              Improvements
            </h3>
            <div className="space-y-3 relative z-10">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-black/10 backdrop-blur-sm p-4 rounded-xl border border-black/5 hover:translate-x-2 transition-transform"
                >
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="text-black font-bold text-sm tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Workflow Process */}
        <div className="relative mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Our <span className="text-[#f26522]">Execution Workflow</span>
            </h3>
            <p className="text-gray-400 font-light">
              Precision planning from day one to reporting.
            </p>
          </div>

          <div
            className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Connector Line with animated glow (Desktop Only) */}
            <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-white/5 hidden lg:block z-0">
              <div
                className="h-full bg-gradient-to-r from-transparent via-[#f26522] to-transparent transition-all duration-700 ease-in-out"
                style={{
                  width: "20%",
                  marginLeft: `${activeStep * 20}%`,
                  opacity: 0.6,
                }}
              />
            </div>

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center text-center p-8 px-4 rounded-[2rem] transition-all duration-700 cursor-pointer w-full lg:w-1/5 border group overflow-hidden ${
                  activeStep === idx
                    ? "bg-white/[0.07] backdrop-blur-2xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/10"
                    : "bg-transparent border-transparent opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                }`}
              >
                {/* Background active glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-[#f26522]/10 to-transparent opacity-0 transition-opacity duration-700 ${
                    activeStep === idx ? "opacity-100" : ""
                  }`}
                />

                {/* Step Number Badge */}
                <div
                  className={`absolute top-4 right-4 text-[10px] font-black tracking-widest px-2 py-1 rounded-md border transition-all duration-500 ${
                    activeStep === idx
                      ? "text-[#f26522] border-[#f26522]/30 bg-[#f26522]/5"
                      : "text-gray-300 border-white/15"
                  }`}
                >
                  0{idx + 1}
                </div>

                <div
                  className={`relative w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-700 ${
                    activeStep === idx
                      ? "bg-[#f26522] text-white shadow-[0_15px_35px_rgba(242,101,34,0.4)] scale-110 rotate-3"
                      : "bg-white/5 text-gray-400 group-hover:scale-105"
                  }`}
                >
                  {React.cloneElement(step.icon, { size: 32 })}
                  {/* Outer spinning ring for active state */}
                  {activeStep === idx && (
                    <div className="absolute inset-0 border-2 border-white/20 rounded-3xl animate-[spin_8s_linear_infinite]" />
                  )}
                </div>

                <div className="relative">
                  <h5
                    className={`text-lg font-bold mb-3 leading-tight transition-colors duration-500 ${
                      activeStep === idx ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h5>

                  {/* Expandable description with smooth height transition */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeStep === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[11px] text-gray-400 font-light leading-relaxed pb-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom line indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-[#f26522] transition-all duration-700 ${
                    activeStep === idx ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Sticker Component */}
        <div className="mt-20 p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#f26522]/20 rounded-full flex items-center justify-center text-[#f26522] animate-pulse">
              <MousePointer2 size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Ready to scale your brand?</h4>
              <p className="text-gray-500 font-light text-sm">
                Join 500+ successful brands in our network.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-10 py-5 bg-[#f26522] text-white font-bold rounded-full hover:bg-[#d94e1a] transition-all hover:shadow-[0_0_35px_rgba(242,101,34,0.4)] active:scale-95 flex items-center gap-3 group"
          >
            Launch Your Campaign{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyInfluenceMar;
