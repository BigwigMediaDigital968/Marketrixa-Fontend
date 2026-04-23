"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Search,
  Bell,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Heart,
  LucideProps,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

// Standardized Custom Star Icon to match Lucide's expected signature
const StarIcon = ({ size = 24, className, ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WhyMarketORM: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const importancePoints = [
    {
      icon: Heart,
      title: "Builds Customer Trust",
      desc: "Positive reviews and consistent messaging create confidence among potential customers.",
      color: "#3b82f6",
    },
    {
      icon: Users,
      title: "Improves Brand Image",
      desc: "A well-managed reputation reflects professionalism and absolute reliability.",
      color: "#a855f7",
    },
    {
      icon: TrendingUp,
      title: "Supports Business Growth",
      desc: "A strong reputation attracts new customers and strengthens existing relationships.",
      color: "#10b981",
    },
  ];

  const services = [
    {
      title: "Online Review Management",
      icon: StarIcon,
      desc: "Customer reviews play a major role in shaping brand perception. We monitor and manage feedback daily.",
      features: [
        "Monitor customer reviews daily",
        "Respond to positive & negative feedback",
        "Encourage satisfied customers to share",
        "Maintain consistent communication",
      ],
    },
    {
      title: "Social Media Reputation",
      icon: MessageSquare,
      desc: "We manage your brand presence across social platforms to ensure positive engagement.",
      features: [
        "Monitoring comments & mentions",
        "Responding to customer queries",
        "Managing brand communication",
        "Handling negative feedback",
      ],
    },
    {
      title: "Search Engine Reputation",
      icon: Search,
      desc: "We work to improve visibility and ensure positive content appears prominently on SERPs.",
      features: [
        "Monitoring search engine results",
        "Promoting positive content",
        "Managing negative search listings",
        "Optimizing brand-related content",
      ],
    },
    {
      title: "Brand Monitoring & Alerts",
      icon: Bell,
      desc: "Real-time tracking of brand mentions across the web to keep you ahead of the narrative.",
      features: [
        "Real-time brand monitoring",
        "Keyword tracking",
        "Competitor reputation analysis",
        "Immediate negative content alerts",
      ],
    },
    {
      title: "Crisis Management",
      icon: AlertTriangle,
      desc: "Rapid response planning to help businesses respond effectively and maintain customer trust.",
      features: [
        "Rapid response planning",
        "Professional communication strategies",
        "Damage control & recovery support",
        "Reputation rebuilding campaigns",
      ],
    },
  ];

  return (
    <div className="text-white py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SECTION: Importance of ORM --- */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-[#f26522] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Asset Protection
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Why Reputation <br className="hidden md:block" />
                <span className="text-white/60 italic">Is Your #1 Asset.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left"
            >
              Customers rely heavily on online results. Even a small number of
              negative comments can influence purchasing decisions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {importancePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: E }}
                className="premium-card p-6 md:p-8 group hover:bg-white/[0.03] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${point.color}15`,
                    color: point.color,
                  }}
                >
                  <point.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION: Our ORM Services --- */}
        <div className="relative">
          <div className="text-center mb-12 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our ORM <span className="text-[#f26522]">Methodology.</span>
            </motion.h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-sm md:text-base px-4">
              Marketrixa offers a comprehensive range of services designed
              specifically for modern businesses, integrating technology and
              strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Service Navigation - Optimized for Mobile (Horizontal Scroll or Stack) */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`flex flex-shrink-0 lg:flex-shrink flex-items-center justify-between p-4 md:p-6 rounded-2xl border text-left transition-all duration-500 whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                    activeService === i
                      ? "bg-[#f26522] border-[#f26522] text-black shadow-[0_10px_40px_rgba(242,101,34,0.2)]"
                      : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <service.icon
                      size={18}
                      className={
                        activeService === i ? "text-black" : "text-[#f26522]"
                      }
                    />
                    <span className="font-bold text-xs md:text-sm tracking-tight">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`hidden lg:block ${
                      activeService === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Service Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: E }}
                className="premium-card !bg-neutral-950/50 p-6 md:p-12 min-h-[350px] flex flex-col relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-8 md:w-12 h-[1px] bg-[#f26522]" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40">
                    Active Capability
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">
                  {services[activeService].title}
                </h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light max-w-2xl">
                  {services[activeService].desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-10 gap-x-8 md:gap-x-12 mt-auto">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 md:gap-9 group"
                    >
                      <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#f26522]/10 flex items-center justify-center border border-[#f26522]/20 group-hover:bg-[#f26522] group-hover:text-black transition-all">
                        <CheckCircle2 size={10} className="md:w-3 md:h-3" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Background Decoration - Hidden on very small screens to keep UI clean */}
                <div className="absolute bottom-[-20px] right-[-20px] md:bottom-0 md:right-0 p-8 md:p-12 opacity-[0.02] md:opacity-[0.03] pointer-events-none">
                  {React.createElement(services[activeService].icon, {
                    size: 160,
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMarketORM;
