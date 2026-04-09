"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Globe,
  Smartphone,
  Megaphone,
  Search,
  DollarSign,
  TrendingUp,
  Share2,
  ArrowUpRight,
  Rocket,
  Code,
} from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const steps: StepProps[] = [
  {
    number: "01",
    title: "Branding",
    description:
      "Crafting powerful brand identities that create lasting impressions and build trust.",
    icon: <Palette className="w-6 h-6" />, // import from lucide-react
    color: "#FBBF24",
    link: "/services/branding",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Comprehensive digital strategies to grow your online presence and drive conversions.",
    icon: <Globe className="w-6 h-6" />,
    color: "#A855F7",
    link: "/services/digital-marketing",
  },
  {
    number: "03",
    title: "Web & Mobile App Development",
    description:
      "Building high-performance websites and scalable mobile applications with modern technologies, seamless UX, and business-focused functionality.",
    icon: <Code className="w-6 h-6" />,
    color: "#2cc2a7",
    link: "/services/web-app-development",
  },
  {
    number: "04",
    title: "Online Marketing",
    description:
      "Multi-channel online marketing to maximize reach across platforms and audiences.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#3B82F6",
    link: "/services/online-marketing",
  },
  {
    number: "05",
    title: "Search Engine Marketing",
    description:
      "Paid advertising strategies on search engines to drive instant traffic and leads.",
    icon: <Search className="w-6 h-6" />,
    color: "#f26522",
    link: "/services/sem",
  },
  {
    number: "06",
    title: "Paid Marketing",
    description:
      "High-ROI paid campaigns across Google, Meta, and other ad platforms.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "#EF4444",
    link: "/services/paid-marketing",
  },
  {
    number: "07",
    title: "Search Engine Optimization",
    description:
      "Improve organic rankings and visibility with advanced SEO strategies.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "#34D399",
    link: "/services/seo",
  },
  {
    number: "08",
    title: "Social Media Marketing",
    description:
      "Engage and grow your audience with impactful social media campaigns.",
    icon: <Share2 className="w-6 h-6" />,
    color: "#FBBF24",
    link: "/services/social-media",
  },
];
export default function OurServices() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,101,34,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F26522] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block"
          >
            Our Speciality
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            The Service <span className="text-[#F26522]">Tree</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto text-lg font-light"
          >
            A complete suite of digital services crafted to build powerful
            brands, accelerate growth, and create seamless user experiences
            across web and mobile platforms.
          </motion.p>
        </div>

        {/* The Tree Structure */}
        <div className="relative">
          {/* Central Vertical Trunk Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#F26522] via-white/20 to-transparent hidden md:block"
          />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center w-full mb-12 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card Area */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-5/12"
                >
                  <a
                    href={step.link}
                    className="block group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Color Glow Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ backgroundColor: step.color }}
                    />

                    {/* Step Number */}
                    <span
                      className="text-6xl font-black absolute -top-4 -right-2 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110 duration-500"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                        style={{ color: step.color }}
                      >
                        Learn More{" "}
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Central Node Dot */}
                <div className="hidden md:flex w-2/12 justify-center relative z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    className="w-5 h-5 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Branch Connector Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-white/20 ${index % 2 === 0 ? "right-1/2 mr-2" : "left-1/2 ml-2"}`}
                  />
                </div>

                {/* Empty Spacer for Desktop */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Final Root Node */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center mt-12 cursor-pointer"
        >
          <div className="p-6 rounded-full bg-[#F26522]/10 border border-[#F26522]/20 text-[#F26522] animate-bounce">
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-white font-bold mt-4 uppercase tracking-[0.2em] text-xs">
            Reach New Heights
          </p>
        </motion.div>
      </div>
    </section>
  );
}
