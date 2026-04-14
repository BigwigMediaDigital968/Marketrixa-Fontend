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
      "Create a compelling brand image that differentiates your brand in highly competitive markets.",
    icon: <Palette className="w-6 h-6" />, // import from lucide-react
    color: "#FBBF24",
    link: "/services/branding",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Data-backed strategies crafted to boost your brand's visibility and generate qualified leads.",
    icon: <Globe className="w-6 h-6" />,
    color: "#A855F7",
    link: "/services/digital-marketing",
  },
  {
    number: "03",
    title: "Web & Mobile App Development",
    description:
      "High-performing websites and mobile apps that can be scaled up to meet increasing demands.",
    icon: <Code className="w-6 h-6" />,
    color: "#2cc2a7",
    link: "/services/web-app-development",
  },
  {
    number: "04",
    title: "Online Marketing",
    description:
      "Multi-channel marketing strategies that expand your reach and improve overall brand performance.",
    icon: <Megaphone className="w-6 h-6" />,
    color: "#3B82F6",
    link: "/services/online-marketing",
  },
  {
    number: "05",
    title: "Search Engine Marketing",
    description:
      "Targeted paid campaigns that deliver instant traffic and strong ROI across search platforms.",
    icon: <Search className="w-6 h-6" />,
    color: "#f26522",
    link: "/services/sem",
  },
  {
    number: "06",
    title: "Paid Marketing",
    description:
      "Performance-focused ad campaigns across Google, Meta, and other platforms to maximize conversions and revenue.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "#EF4444",
    link: "/services/paid-marketing",
  },
  {
    number: "07",
    title: "Search Engine Optimization",
    description:
      "Advanced SEO strategies that improve rankings, increase organic traffic, and strengthen long-term visibility.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "#34D399",
    link: "/services/seo",
  },
  {
    number: "08",
    title: "Social Media Marketing",
    description:
      "Engaging social media campaigns that grow your audience and boost brand engagement.",
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
