"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Risk-Free Scaling",
    description:
      "Our performance-based model ensures you only pay for actual conversions, eliminating wasted ad spend and unnecessary risk.",
    icon: <ShieldCheck className="text-orange-500" size={24} />,
  },
  {
    title: "Precision Targeting",
    description:
      "We match your brand with niche-specific creators and platforms that align perfectly with your business objectives.",
    icon: <Target className="text-blue-500" size={24} />,
  },
  {
    title: "Measured Outcomes",
    description:
      "Every partnership is diligently supervised to provide quality traffic, high-intent engagement, and verifiable ROI.",
    icon: <TrendingUp className="text-green-500" size={24} />,
  },
];

const AffiliateAbout = () => {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Decorative gradient spot */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4">
              Why Choose Marketrixa
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              A Development Medium <br />
              <span className="text-gray-500">Built for Certainty.</span>
            </h3>

            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                Are you searching for a development medium that delivers growth
                without unnecessary risk? At Marketrixa, we design affiliate
                marketing programs that are organized to result in revenue
                through reliable partnerships.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our method is to locate your brand and the right affiliates,
                creators, and platforms that most properly fit your audience and
                business objectives. Each partnership is diligently supervised
                to provide you with quality traffic and high-intent engagement.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "High-Intent Traffic",
                "Verified Conversions",
                "Global Network",
                "Dedicated Support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle2 className="text-orange-500" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Features Cards */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom Callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/20"
            >
              <p className="text-orange-100 italic text-center font-medium">
                "If you wish to broaden your market, increase conversions and
                grow with certainty, then affiliate marketing is the right
                route."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateAbout;
