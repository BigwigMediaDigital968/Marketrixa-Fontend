"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Layers,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const AffiliatePartner = () => {
  const benefits = [
    {
      title: "Curated Affiliate Network",
      description:
        "We link your brand to top-notch affiliates and creators who resonate with your audience and deliver authentic results.",
      icon: <Network className="w-8 h-8" />,
      accent: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "End-to-End Management",
      description:
        "We manage the whole affiliate program with accuracy and regularity, from initial setup to monitoring and payments.",
      icon: <Layers className="w-8 h-8" />,
      accent: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Performance-Driven Optimization",
      description:
        "On-going review of data assists us in recognizing best performing partners while increasing your overall ROI.",
      icon: <TrendingUp className="w-8 h-8" />,
      accent: "text-green-500",
      bg: "bg-green-50",
    },
    {
      title: "Transparent, Results-Based Approach",
      description:
        "Payment is made only for actual results, ensuring productive expenditure and measurable growth at each step.",
      icon: <Target className="w-8 h-8" />,
      accent: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-14 relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-orange-500"></span>
            <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">
              Why Marketrixa
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            What Makes Marketrixa the Right{" "}
            <span className="text-[#f26522]">Affiliate Partner?</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div
                className={`mb-6 inline-flex p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
              >
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {benefit.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                <CheckCircle2 size={14} />
                <span>VERIFIED SYSTEM</span>
                <ArrowUpRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent group-hover:via-blue-400 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 px-6 py-8 md:px-10 md:py-10 rounded-3xl 
             bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 
             text-white border border-slate-700 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* LEFT SECTION */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left w-full lg:w-auto">
              {/* Avatars */}
              <div className="flex -space-x-3 justify-center sm:justify-start">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i + 20}`}
                      alt="Partner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center text-xs font-bold">
                  +500
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-lg md:text-xl font-bold">
                  Trusted by Global Brands
                </p>
                <p className="text-slate-400 text-sm italic">
                  Join our network of elite advertisers
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-slate-700" />
            <div className="block lg:hidden h-px w-full bg-slate-700" />

            {/* RIGHT SECTION */}
            <div className="grid grid-cols-3 gap-8 text-center w-full lg:w-auto">
              <div>
                <p className="text-2xl md:text-3xl font-black text-blue-400">
                  100%
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Transparency
                </p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-black text-green-400">
                  ROI
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Focused
                </p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-black text-orange-400">
                  24/7
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Management
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliatePartner;
