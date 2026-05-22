"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Zap,
  Users,
  TrendingUp,
  ShieldCheck,
  Share2,
  BarChart3,
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Audience-Focused Planning",
    description:
      "We analyse how audiences react, their search intent and industry trends to produce communication that is very relevant to the customer and will help them engage.",
    icon: Users,
  },
  {
    title: "Brand Positioning Content",
    description:
      "Our experts develop and craft well-researched and highly persuasive messaging that will help build your company's credibility in your market.",
    icon: ShieldCheck,
  },
  {
    title: "SEO-Based Optimization",
    description:
      "Each asset will be created to increase its organic reach and generate targeted traffic for your business from the search engines.",
    icon: TrendingUp,
  },
  {
    title: "Conversion-Oriented Messaging",
    description:
      "We create engaging content that inspires your visitors to act – whether it's to inquire, buy, or sign up.",
    icon: CheckCircle2,
  },
  {
    title: "Multi-Platform Distribution",
    description:
      "Whether it's through websites, social networks or via email, we make sure your message is delivered in the appropriate digital mediums.",
    icon: Share2,
  },
  {
    title: "Performance Tracking",
    description:
      "Engagement metrics are always monitored and campaigns always optimized in order to achieve the best long-term results.",
    icon: BarChart3,
  },
];

const ContentAbout: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-14 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div>
          {/* Header Section */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: E }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-[#f26522]" />
              <span className="uppercase tracking-[0.3em] text-[#f26522] text-xs font-black">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: E }}
              className="text-2xl md:text-4xl font-bold mb-8 leading-tight"
            >
              Purpose-Driven Content Solutions  <br />
              <span className="text-[#f26522]">That Deliver Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-4xl"
            >
              Communication is more than putting your words on the internet. You need valuable information that will interest, build trust and inspire action in your brand. We are a top content marketing agency in Ahmedabad and develop strategies that are custom-built, creative and performance-based.
            </motion.p>
          </header>

          {/* Features Grid: 2 Columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: E,
                }}
                className="group flex gap-5"
              >
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#f26522]/10 group-hover:border-[#f26522]/40">
                    <feature.icon
                      className="w-6 h-6 text-[#f26522]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#f26522] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl leading-relaxed font-light w-full"
            >
              Marketrixa is seen as a reliable Content Marketing Company in Ahmedabad by the companies that are looking for a consistent growth in bringing their business online by strategizing communication. 
            </motion.p>
          </div>
        </div>
      </div>

      {/* Subtle Background Detail */}
      
    </section>
  );
};

export default ContentAbout;
