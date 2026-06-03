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
  Users2,
  ArrowRight,
} from "lucide-react";
import Popup from "../Popup";
import Link from "next/link";

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
    title: "Meta Ads",
    description:
      "Scale your business with high-converting Facebook and Instagram ad campaigns designed to generate leads, sales, and measurable ROI.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#2cc2a7",
    link: "/services/social-media-marketing",
  },
  {
    number: "02",
    title: "Google Ads",
    description:
      "Reach customers actively searching for your products and services through data-driven Search, Display, and YouTube advertising campaigns.",
    icon: <Search className="w-6 h-6" />,
    color: "#f26522",
    link: "/services/social-media-marketing",
  },
  {
    number: "03",
    title: "UGC Videos",
    description:
      "Authentic user-generated content videos that build trust, increase engagement, and improve ad performance across digital platforms.",
    icon: <Code className="w-6 h-6" />,
    color: "#FBBF24",
    link: "/services/ugc-videos",
  },
  {
    number: "04",
    title: "Influencer Marketing",
    description:
      "Partner with relevant creators and influencers to expand brand awareness, drive engagement, and generate qualified leads.",
    icon: <Users2 className="w-6 h-6" />,
    color: "#A855F7",
    link: "/services/influencer-marketing",
  },
];
export default function OurServices() {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <>
      <section className="py-22 px-6 relative overflow-hidden">
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
              className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter"
            >
              The Service <span className="text-[#F26522]">Tree</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 max-w-2xl mx-auto pt-3 text-lg font-light"
            >
              End to end digital services designed to help brands scale faster,
              strengthen their presence, and deliver smooth user experiences
              across web and mobile ecosystems.
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
                  className={`flex flex-col md:flex-row items-center w-full mb-12 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
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
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.5,
                      }}
                      className="w-5 h-5 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      style={{ backgroundColor: step.color }}
                    />

                    {/* Branch Connector Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-white/20 ${index % 2 === 0 ? "right-1/2 mr-2" : "left-1/2 ml-2"
                        }`}
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
            onClick={() => setShowPopup(true)}
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
            <Link
              href="/services"
              className="mt-3 cursor-pointer inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F26522] text-[#F26522] hover:bg-[#F26522] hover:text-white transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
