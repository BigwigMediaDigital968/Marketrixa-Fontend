"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Zap,
  Users,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Brand Director, Vogue Essence",
    content:
      "MarketRixa didn't just manage our Instagram; they transformed it into a revenue machine. Our engagement rate spiked by 400% in 3 months, and the viral reels they produced drove $50k in direct attribution.",
    stats: "400% Engagement Boost",
    platform: <FaInstagram size={18} />,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, NeoPulse Tech",
    content:
      "The LinkedIn strategy provided by MarketRixa established me as a thought leader in the AI space. We've secured more B2B partnerships through organic social in 4 months than we did in 2 years of cold outreach.",
    stats: "32 High-Value Leads",
    platform: <FaLinkedin size={18} />,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Marketing Head, Velocity Games",
    content:
      "Their ability to understand community sentiment on Twitter and Discord is unmatched. They turned a potential PR crisis into a viral brand-loyalty moment that trended nationally.",
    stats: "Trending #1 Topics",
    platform: <FaTwitter size={18} />,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const clientStats = [
  {
    icon: <Zap className="text-[#F26522]" />,
    label: "Viral Reach",
    value: "12M+",
    desc: "Monthly organic impressions generated for our retainer clients.",
  },
  {
    icon: <Users className="text-[#F26522]" />,
    label: "Community",
    value: "85%",
    desc: "Average audience sentiment score across all managed platforms.",
  },
  {
    icon: <MessageCircle className="text-[#F26522]" />,
    label: "Response Rate",
    value: "< 15m",
    desc: "Industry-leading engagement response time for brand accounts.",
  },
  {
    icon: <BarChart3 className="text-[#F26522]" />,
    label: "Ad Efficiency",
    value: "4.8x",
    desc: "Average ROAS achieved through integrated social funneling.",
  },
];

const SmmClients = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F26522]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#F26522] font-black tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              The Success Network
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Driving Real Impact for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Disruptors.
              </span>
            </motion.h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#F26522] hover:border-[#F26522] hover:text-white transition-all group cursor-pointer"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Testimonial Slider Area */}
          <div className="lg:col-span-8">
            <div className="relative h-full bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
              <Quote className="absolute -top-4 -right-4 text-white/[0.03] w-48 h-48" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="relative z-10 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#F26522] text-[#F26522]"
                        />
                      ))}
                    </div>
                    <span className="h-px w-8 bg-white/20 ml-2" />
                    <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                      Verified Result
                    </span>
                  </div>

                  <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-200 mb-12">
                    "{testimonials[index].content}"
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonials[index].image}
                          alt={testimonials[index].name}
                          className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-black border border-white/20 p-1.5 rounded-lg text-[#F26522]">
                          {testimonials[index].platform}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight">
                          {testimonials[index].name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonials[index].role}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#F26522]/10 px-6 py-3 rounded-2xl border border-[#F26522]/20">
                      <p className="text-[10px] text-[#F26522] font-black uppercase tracking-tighter mb-0.5">
                        Success Metric
                      </p>
                      <p className="text-white font-bold text-lg">
                        {testimonials[index].stats}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Vertical Stats Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {clientStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-white/[0.02] border border-white/5 rounded-[1.5rem] p-6 hover:bg-white/[0.05] hover:border-[#F26522]/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#F26522]/10 group-hover:text-[#F26522] transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-4xl font-black text-white tracking-tighter">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                    {stat.label}
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Logo Scroller (CSS-only marquee effect recommended for production) */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-center text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] mb-10">
            Trusted Global Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black tracking-tighter">ORACLE</span>
            <span className="text-2xl font-bold tracking-[0.2em]">SAMSUNG</span>
            <span className="text-2xl font-serif font-black">LuxeStay</span>
            <span className="text-2xl font-sans font-black uppercase italic">
              TechFlow
            </span>
            <span className="text-2xl font-mono font-bold tracking-tighter">
              NIKE+
            </span>
            <span className="text-2xl font-black">ADOBE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmClients;
