"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Quote,
  CheckCircle2,
  Star,
  Award,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  result: string;
  accentColor: string;
  initials: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We had a serious problem — a damaging article from 2021 was showing up as the second Google result every time anyone searched our clinic name. Marketrixa suppressed it completely within 60 days. Our enquiry volume recovered 35% in the following quarter. We'd tried two other agencies before and gotten nowhere. These people actually delivered.",
    author: "Dr. Priya Sharma",
    role: "Director",
    company: "Sharma Diagnostics & Wellness",
    location: "Pune",
    result: "Negative article suppressed — Page 1 → Page 4 in 60 days",
    accentColor: "#f26522", // Brand Orange
    initials: "PS",
  },
  {
    quote:
      "Our Google rating had dropped to 3.2 stars after a wave of competitor-driven fake reviews. We were losing sales and didn't know what to do. Marketrixa built us a proper review management programme, helped us get the fake reviews removed, and supported us in ethically generating over 200 new genuine five-star reviews. We're now at 4.6 stars and our conversion rate has nearly doubled.",
    author: "Rahul Mehta",
    role: "Co-Founder",
    company: "HomeMaker Interior Solutions",
    location: "Delhi NCR",
    result: "Google rating: 3.2 → 4.6 stars in 5 months",
    accentColor: "#fbbf24", // Gold Amber
    initials: "RM",
  },
  {
    quote:
      "When a senior executive's exit turned into a PR mess, we needed crisis management fast. Marketrixa had a full strategy in place within 48 hours. They managed social media responses, published counter-content, coordinated with journalists, and within 8 weeks the damaging narrative had virtually disappeared from search. The professionalism and speed were extraordinary.",
    author: "Kiran Desai",
    role: "Head of Communications",
    company: "TechScale Solutions Ltd.",
    location: "Bengaluru",
    result: "Crisis resolved — damaging content suppressed in 8 weeks",
    accentColor: "#38bdf8", // Sky Blue
    initials: "KD",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const OrmTestimonial: React.FC = () => {
  return (
    <section className="relative py-14 px-6 overflow-hidden text-white">
      {/* Backlit glow gradients for visual depth */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-bold tracking-widest uppercase mb-6 font-poppins"
          >
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            Client Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl"
          >
            Real Brands. Real Results. <br />
            <span className="text-[#f26522]">No Vague Promises.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-400 text-base mt-3 leading-relaxed max-w-2xl"
          >
            We let our results do the talking. These are the outcomes real
            Marketrixa clients have seen from our online reputation management
            services.
          </motion.p>
        </div>

        {/* Testimonials Adaptive Grid (Supports 2-col on mid desktop, 3-col on large, 1-col on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="premium-card p-8 md:p-10 flex flex-col justify-between group h-full relative overflow-hidden transition-all duration-500 border border-white/5 bg-white/[0.01] backdrop-blur-md rounded-[2.5rem] hover:border-[#f26522]/30 hover:bg-[#f26522]/[0.01]"
            >
              {/* Highlight accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="space-y-6">
                {/* Quote Icon Header */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white/50 transition-colors group-hover:text-white"
                    style={{ color: item.accentColor }}
                  >
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>

                  {/* Verified outcome stamp */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Case
                  </span>
                </div>

                {/* Actual Quote text */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-poppins font-light italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-6">
                {/* Author Card Info */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black font-outfit shadow-md border border-white/10"
                    style={{
                      backgroundColor: `${item.accentColor}15`,
                      color: item.accentColor,
                    }}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight font-outfit">
                      {item.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-poppins">
                      {item.role},{" "}
                      <span className="text-gray-400">{item.company}</span> (
                      {item.location})
                    </p>
                  </div>
                </div>

                {/* Specific Metric Highlight Bar */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 group-hover:border-white/10 transition-colors">
                  <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-emerald-400 font-poppins leading-tight">
                    {item.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EEAT Author Verification Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-md"
        >
          {/* Backdrop backlit glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f26522]/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
            {/* Stamp logo / Certification Badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] shrink-0">
              <UserCheck className="w-7 h-7" />
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold font-outfit text-white">
                    Marketrixa ORM Team
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 font-poppins tracking-wide">
                    Certified Digital Marketing & Reputation Management
                    Specialists
                  </p>
                </div>

                {/* E-E-A-T Verified Trust Label */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider font-poppins">
                  <Award className="w-3.5 h-3.5" />
                  E-E-A-T Verified
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins font-light text-justify md:text-left">
                This content has been written and reviewed by Marketrixa&apos;s
                in-house team of certified digital marketing specialists with 3+
                years of hands-on experience in online reputation management
                across 15+ industries. Our strategies are grounded in real
                campaign data, Google algorithm best practices, and direct
                client outcomes not generic industry theory. We manage ORM for
                500+ active clients and update our methodologies continuously
                based on platform changes and results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrmTestimonial;
