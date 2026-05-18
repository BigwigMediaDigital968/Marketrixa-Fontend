"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  ArrowUpRight,
  Layers,
  Search,
  Share2,
  Maximize2,
  BarChart3,
  ShoppingCart,
  Repeat,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "google-ads",
    title: "Google Ads Management",
    desc: "Drive targeted traffic and conversions through high-performing Search, Display, YouTube, and Performance Max campaigns. We optimize bidding strategies, keywords, and ad creatives to maximize ROI.",
    badge: "Search & Intent",
    img: "/service/performance/google-ads.png",
    icon: Search,
    accentColor: "#f26522", // Brand Orange
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Reach highly targeted audiences through data-driven campaigns on Facebook and Instagram. We focus on audience segmentation, creative testing, and conversion optimization for measurable results.",
    badge: "Social & Demographics",
    img: "/service/performance/meta-ads.png",
    icon: Share2,
    accentColor: "#38bdf8", // Sky Blue
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Advertising",
    desc: "Generate B2B leads and build pipeline growth with LinkedIn Ads tailored for SaaS, technology, and service-based businesses — designed around buyer intent and decision-making behavior.",
    badge: "B2B & Enterprise",
    img: "/service/performance/linkedin-ads.png",
    icon: FaLinkedin,
    accentColor: "#818cf8", // Indigo
  },
  {
    id: "retargeting",
    title: "Retargeting Campaigns",
    desc: "Reconnect with visitors who interacted with your website or ads and convert them into paying customers through personalized, intent-based retargeting strategies.",
    badge: "Conversion Focused",
    img: "/service/performance/retargeting.png",
    icon: Repeat,
    accentColor: "#22c55e", // Green
  },
  {
    id: "ecommerce",
    title: "E-commerce Performance",
    desc: "Scale online stores with platform-specific strategies for Google Shopping, Meta Ads, marketplace advertising, and dynamic product campaigns built to increase ROAS.",
    badge: "Revenue Growth",
    img: "/service/performance/ecommerce.png",
    icon: ShoppingCart,
    accentColor: "#eab308", // Yellow
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    desc: "Transparent reporting with real-time insights into ROAS, CPA, CTR, and customer acquisition metrics — so you always know exactly what your budget is doing.",
    badge: "Data & Insights",
    img: "/service/performance/analytics.png",
    icon: BarChart3,
    accentColor: "#6366f1", // Violet
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const PerformanceMarketingServices: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0b0f1a] text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#f26522]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-bold tracking-widest uppercase mb-6 font-poppins"
          >
            <Target className="w-4 h-4 animate-pulse" />
            Our Services
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1] font-outfit"
          >
            Performance Marketing{" "}
            <span className="text-[#f26522]">Services</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-md md:text-lg max-w-4xl mx-auto leading-relaxed font-poppins"
          >
            Full-funnel advertising across every platform your customers use
            built around your business goals.
          </motion.p>
        </motion.div>

        {/* 3-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#f26522]/30 hover:bg-[#f26522]/[0.02] hover:translate-y-[-6px]"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/40 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#f26522] backdrop-blur-md border border-white/10 text-gray-300 font-poppins">
                    {service.badge}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 -mt-14 relative z-10 shadow-lg border border-white/10 transition-colors duration-500 bg-[#0b0f1a] text-white group-hover:bg-[#f26522] group-hover:text-white"
                      style={{
                        boxShadow: `0 8px 24px -6px ${service.accentColor}44`,
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#f26522] transition-colors duration-300 font-outfit">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Card Accent Gradient on Active Focus */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f26522]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Closing conversion rate optimization feature highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-[#f26522]/20 bg-gradient-to-br from-[#f26522]/10 via-transparent to-transparent backdrop-blur-md"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="p-3 rounded-2xl bg-[#f26522]/15 text-[#f26522] shrink-0 mt-1">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 font-outfit">
                  Landing Page & Funnel Optimization
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-poppins">
                  We don't just build the ads. We improve landing pages, user
                  journeys, and total funnel performance to increase post-click
                  conversions and substantially reduce cost-per-acquisition
                  (CPA).
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-[#f26522] hover:bg-[#d94e1a] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-[#f26522]/30 transition-all flex items-center gap-2 whitespace-nowrap font-poppins text-sm cursor-pointer border-none"
            >
              Analyze Your Funnel
              <Maximize2 className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingServices;
