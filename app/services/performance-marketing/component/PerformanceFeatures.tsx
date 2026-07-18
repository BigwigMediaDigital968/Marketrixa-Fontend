"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Target,
  ArrowUpRight,
  Search,
  Share2,
  RefreshCw,
  ShoppingBag,
  BarChart3,
  Check,
  Building2,
  Sparkles,
  Zap,
  Play,
  Globe,
  Database,
  Store,
  Cpu,
  ShoppingCart,
  TrendingUp,
  LayoutGrid,
  Factory,
  Plane,
  Briefcase,
  GraduationCap,
  Landmark,
  HeartPulse,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const features = [
  {
    title: "Your cost per lead drops within 30 days",
    desc: "We run a full campaign audit on day one, identify budget drains, and restructure your campaigns so you're getting more from the same spend immediately.",
  },
  {
    title: "You know exactly what's working and why",
    desc: "A live dashboard, full conversion tracking, and monthly plain-language reports no vanity metrics, no black boxes. Just a clear picture of where your revenue is coming from.",
  },
  {
    title: "Your pipeline fills with higher-intent prospects",
    desc: "Precise audience segmentation and continuous creative testing means your ads reach people who are closer to buying  cutting your sales cycle and improving close rates.",
  },
  {
    title: "You scale without your CPA scaling with you",
    desc: "When it's time to grow, our bid optimisation ensures efficiency doesn't erode as budgets increase. More volume, same cost per acquisition.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Research & Strategy",
    desc: "We begin by understanding your business goals, target audience, competition, and customer journey to build a data-backed campaign blueprint.",
  },
  {
    number: "02",
    title: "Campaign Setup",
    desc: "Our team builds high-converting campaigns with precise targeting, compelling creatives, and fully optimized tracking systems from day one.",
  },
  {
    number: "03",
    title: "Testing & Optimization",
    desc: "Continuous A/B testing, audience analysis, and performance reviews improve campaign efficiency every week not just monthly.",
  },
  {
    number: "04",
    title: "Reporting & Scaling",
    desc: "Clear performance reports every week. When campaigns prove themselves, we scale budgets aggressively to maximize growth.",
  },
];

const platforms = [
  { name: "Google Search Ads", icon: Search },
  { name: "Google Display Network", icon: LayoutGrid },
  { name: "YouTube Ads", icon: Play },
  { name: "Performance Max", icon: TrendingUp },
  { name: "Facebook Ads", icon: Share2 },
  { name: "Instagram Ads", icon: Zap },
  { name: "LinkedIn Ads", icon: FaLinkedin },
  { name: "Programmatic / DSP", icon: Globe },
  { name: "Google Shopping", icon: ShoppingCart },
  { name: "E-commerce Marketplaces", icon: Store },
];

const benefits = [
  "ROI-focused campaign management, every rupee accountable",
  "Weekly transparent reporting",
  "Dedicated performance specialist assigned to your account",
  "Data-driven creative testing and audience optimization",
  "Full-funnel strategy from awareness to conversion",
  "Multi-platform expertise across Google, Meta, and LinkedIn",
  "Proactive campaign improvements, not reactive fixes",
  "Flexible campaign budgets tailored to your business goals  ",
];

const industries = [
  { name: "E-commerce & D2C", icon: Store },
  { name: "SaaS & Technology", icon: Cpu },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Building2 },
  { name: "Finance & BFSI", icon: Landmark },
  { name: "Education & EdTech", icon: GraduationCap },
  { name: "Retail & FMCG", icon: ShoppingBag },
  { name: "Professional Services", icon: Briefcase },
  { name: "Hospitality & Travel", icon: Plane },
  { name: "Manufacturing & B2B", icon: Factory },
];

const PerformanceFeatures: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number>(0);

  return (
    <section className="relative min-h-screen text-white py-14 px-6 overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] left-[-100px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-bold tracking-widest uppercase mb-6 font-poppins"
          >
            <Target className="w-4 h-4 animate-pulse" />
            Sound Familiar?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1] font-outfit"
          >
            Your competitors are scaling on Meta and Google.{" "}
            <span className="text-[#f26522] relative inline-block">
              Are you?
              <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#f26522]/20 rounded" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-400 text-base md:text-md leading-relaxed font-poppins text-justify md:text-center max-w-5xl mx-auto"
          >
            When you work with Marketrixa, here's what changes specifically,
            measurably, and from the first month:
          </motion.p>
        </div>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center text-green-400">
                      <Check size={24} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_70%)]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Interlinking Interactive Segment */}
        <div className="my-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[#f26522] uppercase font-bold tracking-wider text-sm font-poppins block mb-1">
                How We Work
              </span>
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-white">
                Our 4-step process
              </h3>
            </div>
            <p className="text-gray-400 max-w-md font-poppins text-sm md:text-base">
              A repeatable system that turns ad budgets into predictable revenue
              refined across 50+ campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const isSelected = activeProcess === index;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveProcess(index)}
                  className={`relative p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.04] border-[#f26522]/40 shadow-[0_15px_30px_rgba(242,101,34,0.1)] translate-y-[-4px]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-5xl font-black font-outfit transition-colors duration-500 ${
                        isSelected ? "text-[#f26522]/50" : "text-white/10"
                      }`}
                    >
                      {step.number}
                    </span>
                    {isSelected && (
                      <motion.div
                        layoutId="activeSparkle"
                        className="text-[#f26522]"
                      >
                        <Sparkles className="w-5 h-5 animate-pulse" />
                      </motion.div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold font-outfit mb-3 text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platforms and Benefits Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-20 items-stretch">
          {/* Platforms We Work With Container */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#f26522]/10 rounded-full blur-[60px]" />
            <div>
              <span className="text-[#f26522] font-bold tracking-wider text-xs uppercase mb-2 block font-poppins">
                Platforms
              </span>
              <h4 className="text-3xl font-bold font-outfit text-white mb-6">
                Where we run your campaigns
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-poppins">
                We manage performance frameworks across top tier platforms to
                find and capture customers wherever they buy.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => {
                const PlatIcon = platform.icon;
                return (
                  <div
                    key={platform.name}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#f26522]/30 hover:bg-[#f26522]/5 transition-all duration-300 text-xs font-semibold font-poppins flex items-center gap-2 text-white/90 group"
                  >
                    <PlatIcon className="w-4 h-4 text-[#f26522] group-hover:scale-110 transition-transform duration-300" />
                    {platform.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits of Choosing Us Panel */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] border border-[#f26522]/15 bg-gradient-to-br from-[#f26522]/5 to-transparent backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-[#f26522] font-bold tracking-wider text-xs uppercase mb-2 block font-poppins">
                Why Marketrixa
              </span>
              <h4 className="text-3xl font-bold font-outfit text-white mb-8">
                What you get when you partner with us
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#f26522]/20 hover:bg-white/[0.01] transition-all group"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors font-poppins">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve Section with Icon Blocks */}
        <section className="w-full py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="p-8 md:p-16 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden">
              {/* Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
              </div>

              {/* Heading */}
              <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
                <span className="text-[#f26522] uppercase font-bold tracking-wider text-xs font-poppins block mb-2">
                  Industries We Serve
                </span>

                <h4 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-4 leading-tight">
                  Built for businesses across every{" "}
                  <span className="text-[#f26522]">sector</span>
                </h4>

                <p className="text-gray-400 text-sm md:text-base font-poppins leading-relaxed">
                  From Ahmedabad startups to national brands, we've driven
                  growth across these industries.
                </p>
              </div>

              {/* Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {industries.map((ind) => {
                  const IndIcon = ind.icon;

                  return (
                    <div
                      key={ind.name}
                      className="group p-5 rounded-2xl bg-[#0b0f1a]/60 border border-white/5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/30 hover:bg-white/[0.02] hover:shadow-[0_0_25px_rgba(242,101,34,0.15)]"
                    >
                      {/* Icon */}
                      <div className="mx-auto w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f26522]/10 group-hover:text-[#f26522]">
                        <IndIcon className="w-5 h-5" />
                      </div>

                      {/* Text */}
                      <span className="text-xs md:text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors font-poppins block">
                        {ind.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PerformanceFeatures;
