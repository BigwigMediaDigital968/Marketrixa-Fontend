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
} from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Data-Driven Strategy",
    description:
      "We don't guess. We use advanced analytics to find exactly what your audience is searching for.",
    icon: Target,
  },
  {
    title: "High-Velocity Output",
    description:
      "Scale your content without sacrificing quality. Our workflow is built for speed and precision.",
    icon: Zap,
  },
  {
    title: "Authority Building",
    description:
      "Position your brand as the go-to resource in your industry with thought-leadership content.",
    icon: ShieldCheck,
  },
  {
    title: "Audience Engagement",
    description:
      "Content designed to start conversations and build a community around your brand values.",
    icon: Users,
  },
  {
    title: "SEO Optimization",
    description:
      "Every piece is engineered to rank, bringing consistent organic traffic to your doorstep.",
    icon: TrendingUp,
  },
  {
    title: "Conversion Focused",
    description:
      "We bridge the gap between 'reading' and 'buying' with strategic calls to action.",
    icon: CheckCircle2,
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
              Strategic Content that <br />
              <span className="text-[#f26522]">Commands Attention.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: E }}
              className="text-white/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl"
            >
              We believe that content is the most powerful sales tool in your
              arsenal. Our approach combines creative storytelling with
              technical SEO to ensure your brand isn't just seen, but
              remembered.
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
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block">
        <div className="h-full w-full opacity-10 bg-grid-pattern" />
      </div>
    </section>
  );
};

export default ContentAbout;
