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
  Network,
  TrendingUp,
  Briefcase,
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
    title: "Customized partnership marketing strategies",
    desc: "",
    icon: <Trophy />,
  },
  {
    title: "Transparent campaign management and reporting",
    desc: "",
    icon: <Users2 />,
  },
  {
    title: "Data-driven optimization for higher conversions",
    desc: "",
    icon: <MessagesSquare />,
  },
  {
    title: "Access to quality affiliate networks and publishers",
    desc: "",
    icon: <Network />,
  },
  {
    title: "Scalable growth-focused campaign structures",
    desc: "",
    icon: <TrendingUp />,
  },
  {
    title: "Multi-industry affiliate marketing expertise",
    desc: "",
    icon: <Briefcase />,
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
          <section className="pb-10 hidden">
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
          <div className="">


            {/* Why Brands Choose Us Column */}
            <div className="">
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
                  Why Choose Marketrixa?
                </h2>
              </motion.div>

              <div className=" grid md:grid-cols-2 gap-6">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row items-center gap-6 p-4 py-3 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] flex-shrink-0">
                      {React.cloneElement(v.icon, { size: 20 } as LucideProps)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{v.title}</h4>
                      {/* <p className="text-neutral-400 text-sm leading-relaxed">
                        {v.desc}
                      </p> */}
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 mt-10">
                  Businesses looking for a reliable <strong>Affiliate Marketing Company in Ahmedabad</strong> can depend on Marketrixa for performance-based growth solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default WhyAffMarketrixs;
