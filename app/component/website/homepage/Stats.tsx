"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Briefcase, Globe, Users, Smile } from "lucide-react";

/**
 * STATS COMPONENT
 * Displays key business metrics with brand-themed icons and heavy entrance animations.
 */
const statItems = [
  {
    id: 1,
    label: "Years of Experience",
    value: "3+",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Websites Developed",
    value: "50+",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "Happy Clients",
    value: "50+",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "Skilled Digital Experts",
    value: "13+",
    icon: <Smile className="w-6 h-6" />,
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
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Stats() {
  return (
    <section className="relative glass py-24 px-6 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-[#F26522]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Turn Clicks Into <br />
                <span className="text-[#F26522]">Customers</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  MarketRixa is at your service to identify what's essential to
                  the customers and help you stand out by doing only what the
                  customers focus on. We merge data, creativity, and sharp
                  execution to deliver quantifiable results to you no matter the
                  platform you use. More visibility. More leads. More revenue.
                  That’s the goal.
                </p>

                <p className="text-sm border-l-2 border-[#F26522] pl-6 py-2">
                  From lead generation and brand awareness to customer
                  acquisition and retention, our smart business growth strategy
                  does it all for you.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side Stats Grid */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {statItems.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-3xl bg-[#111] border border-white/5 transition-all duration-300 hover:border-[#F26522]/40 hover:bg-[#111]/80 backdrop-blur-md shadow-lg cursor-pointer"
                >
                  {/* Icon with Brand Background */}
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-[#F26522] flex items-center justify-center text-black shadow-[0_0_20px_rgba(242,101,34,0.3)] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white tracking-tighter">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-snug max-w-[180px]">
                      {stat.label}
                    </p>
                  </div>

                  {/* Corner Accent Decor */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#F26522] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
