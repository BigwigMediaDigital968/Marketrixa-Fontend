"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  BarChart4,
  Settings2,
  Eye,
  Users2,
  Trophy,
  MessagesSquare,
  ArrowRight,
  Plus,
  LucideProps,
} from "lucide-react";
import Popup from "@/app/component/website/Popup";

// --- Types ---
interface Feature {
  title: string;
  desc: string;
  icon: React.ReactElement<LucideProps>;
}

interface Industry {
  name: string;
}

interface ValueProp {
  title: string;
  desc: string;
  icon: React.ReactElement<LucideProps>;
}

// --- Data ---
const features: Feature[] = [
  {
    title: "Insight-Driven Decision Making",
    desc: "We use real-time data on performance, audience behaviour, and traffic quality to guide every strategic move.",
    icon: <BarChart4 />,
  },
  {
    title: "Flexible, Growth-Aligned Strategies",
    desc: "Our approach adapts to your business goals, whether you're aiming for rapid scale or steady, sustainable growth.",
    icon: <Settings2 />,
  },
  {
    title: "Complete Transparency & Live Reporting",
    desc: "Gain full visibility into clicks, conversions, partner performance, and payouts with clear, real-time insights.",
    icon: <Eye />,
  },
];

const industries: Industry[] = [
  { name: "E-commerce & Retail" },
  { name: "Education & EdTech" },
  { name: "Healthcare & Wellness" },
  { name: "Finance & Insurance" },
  { name: "Real Estate" },
  { name: "Automotive" },
  { name: "SaaS & Technology" },
  { name: "Travel & Hospitality" },
  { name: "Lifestyle & Fashion" },
  { name: "B2B Services" },
];

const values: ValueProp[] = [
  {
    title: "Proven Performance",
    desc: "We have repeatedly produced good affiliate results by concentrating on big-picture strategies and tangible growth.",
    icon: <Trophy />,
  },
  {
    title: "Dedicated Affiliate Skills",
    desc: "Our people possess a thorough understanding of affiliate ecosystems, tools, and partner behaviours.",
    icon: <Users2 />,
  },
  {
    title: "Seamless Collaboration",
    desc: "We work as an extension of your team so that there is always clear communication at every implementation stage.",
    icon: <MessagesSquare />,
  },
];

const WhyAffMarketrixs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="w-full text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. What Sets Us Apart */}
          <section className="pb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#f26522] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
                Differentiators
              </span>
              <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
                What Sets Our Affiliate <br />
                Marketing <span className="text-neutral-500">Apart?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 hover:border-[#f26522]/30 transition-colors group"
                >
                  <div className="text-[#f26522] mb-6 p-3 bg-[#f26522]/10 rounded-xl w-fit group-hover:bg-[#f26522] group-hover:text-black transition-colors">
                    {React.cloneElement(f.icon, { size: 24 } as LucideProps)}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 2. Industries & Why Choose Us (Side by Side on Large Screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
            {/* Industries Column */}
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <span className="text-[#f26522] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Industries We Support
              </h2>
              <p className="text-neutral-400 mb-10 text-sm md:text-base leading-relaxed">
                We deliver affiliate marketing solutions across a diverse range
                of industries, helping brands scale with precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((ind, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/5 hover:bg-white/[0.05] transition-colors group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#f26522] flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                      {ind.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Brands Choose Us Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="text-[#f26522] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                  Competitive Edge
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Brands Choose Marketrixa?
                </h2>
              </motion.div>

              <div className="space-y-6">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] flex-shrink-0">
                      {React.cloneElement(v.icon, { size: 20 } as LucideProps)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{v.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Final Scale Growth CTA */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-16 rounded-[2.5rem] mt-20 bg-gradient-to-br from-[#1a0c05] to-[#0a0a0a] border border-[#f26522]/20 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Scale Your Growth with <br />
                  <span className="text-[#f26522]">Affiliate Marketing</span>
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-0">
                  Do you want to increase your sales, expand your reach, and
                  build a channel for predictable growth? Then our affiliate
                  marketing solutions are exactly what you need to see
                  measurable results. At Marketrixa, we partner with you to
                  develop custom strategies with your business goals at the
                  center.
                </p>
              </div>

              <motion.button
                onClick={() => setShowPopup(true)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(242,101,34,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#f26522] text-black px-10 py-5 rounded-2xl font-bold tracking-widest text-xs uppercase flex items-center gap-3 flex-shrink-0 transition-shadow cursor-pointer"
              >
                START BUILDING TODAY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default WhyAffMarketrixs;
