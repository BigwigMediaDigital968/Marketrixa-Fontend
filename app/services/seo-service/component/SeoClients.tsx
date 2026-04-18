"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Award,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO, TechFlow Solutions",
    content:
      "Our organic traffic increased by 215% within the first six months. The technical SEO audit was a game-changer for our site architecture. Highly recommended for any scaling SaaS.",
    stats: "+215% Traffic",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director, LuxStay",
    content:
      "The local SEO strategy helped us dominate 'near me' searches in three new cities. We've seen a massive uptick in direct bookings and Google Business Profile engagement.",
    stats: "Top 3 Ranking",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, E-com Pulse",
    content:
      "Their link-building techniques are ethical and effective. We secured backlinks from high-authority niche sites that we couldn't reach on our own. True professionals.",
    stats: "45+ High DA Links",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const clientStats = [
  {
    icon: <TrendingUp className="text-orange-500" />,
    label: "Revenue Growth",
    value: "140%",
    desc: "Average increase for our long-term SEO clients.",
  },
  {
    icon: <Users className="text-orange-500" />,
    label: "Targeted Leads",
    value: "3.2x",
    desc: "Growth in conversion-ready organic inquiries.",
  },
  {
    icon: <Globe className="text-orange-500" />,
    label: "Global Reach",
    value: "12+",
    desc: "Countries where we manage international SEO.",
  },
  {
    icon: <Award className="text-orange-500" />,
    label: "First Page Results",
    value: "850+",
    desc: "Competitive keywords pushed to the top SERP positions.",
  },
];

const SeoClients = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-14 px-6 md:px-12 overflow-hidden bg-brand-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Trusted by Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Leaders
            </span>
          </motion.h2>
        </div>

        {/* Main Content Grid: Testimonial + Stats Overview */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Testimonial Slider Area */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[2rem] p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
              <Quote className="absolute top-8 right-8 text-white/5 w-24 h-24 rotate-12" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8 italic">
                    "{testimonials[index].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-14 h-14 rounded-full border-2 border-orange-500/30"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonials[index].role}
                      </p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-xl border border-orange-500/20 font-bold text-sm">
                        {testimonials[index].stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all group cursor-pointer"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all group cursor-pointer"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Summary Area */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clientStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-colors group"
              >
                <div className="mb-4 bg-orange-500/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h5 className="text-3xl font-black text-white mb-1">
                  {stat.value}
                </h5>
                <p className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logo Tape (Mimicking the dashboard integration look) */}
        <div className="mt-20 py-8 border-y border-white/5 overflow-hidden">
          <div className="flex items-center justify-around opacity-40 grayscale hover:grayscale-0 transition-all gap-8 flex-wrap md:flex-nowrap">
            <span className="text-2xl font-black italic tracking-tighter">
              ORACLE
            </span>
            <span className="text-2xl font-bold tracking-widest">
              DigiStreet
            </span>
            <span className="text-2xl font-serif font-bold">LuxeStay</span>
            <span className="text-2xl font-sans font-black uppercase">
              TechFlow
            </span>
            <span className="text-2xl font-mono font-bold tracking-tighter">
              E-COM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoClients;
