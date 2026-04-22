"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Share2,
  Newspaper,
  Video,
  Mail,
  Search,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

interface ServiceType {
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

const services: ServiceType[] = [
  {
    title: "Blog & Article Writing",
    description:
      "SEO-optimized long-form content that establishes authority and drives organic traffic.",
    icon: FileText,
    tags: ["SEO", "Long-form", "Thought Leadership"],
  },
  {
    title: "Social Media Content",
    description:
      "Viral-ready copy and visual prompts designed to stop the scroll and spark engagement.",
    icon: Share2,
    tags: ["Viral", "Engagement", "Platform-specific"],
  },
  {
    title: "Press Releases",
    description:
      "Professional newswire-ready content that captures journalist attention and builds PR.",
    icon: Newspaper,
    tags: ["PR", "Newsworthy", "Distribution"],
  },
  {
    title: "Video Scripting",
    description:
      "Compelling narratives for YouTube, TikTok, and corporate ads that keep viewers watching.",
    icon: Video,
    tags: ["Storytelling", "YouTube", "Commercials"],
  },
  {
    title: "Email Marketing",
    description:
      "High-conversion sequences and newsletters that nurture leads into loyal customers.",
    icon: Mail,
    tags: ["CRM", "Newsletters", "Retention"],
  },
  {
    title: "Whitepapers & E-books",
    description:
      "In-depth lead magnets that showcase technical expertise and capture high-quality leads.",
    icon: BookOpen,
    tags: ["Lead Gen", "Technical", "Data"],
  },
  {
    title: "Copywriting",
    description:
      "Persuasive sales copy for landing pages, ads, and websites that drive immediate action.",
    icon: Lightbulb,
    tags: ["Conversion", "Ads", "Sales"],
  },
  {
    title: "Technical Writing",
    description:
      "Complex concepts translated into easy-to-understand documentation and guides.",
    icon: Search,
    tags: ["Documentation", "B2B", "Manuals"],
  },
];

const ContentService: React.FC = () => {
  return (
    <section className="relative py-14 overflow-hidden">
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f26522]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
              <span className="text-[#f26522] uppercase tracking-widest font-bold">
                Specialized Content
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: E }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Versatile Content for <br />
              Every <span className="text-[#f26522]">Digital Frontier.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/80 max-w-xs text-sm leading-relaxed"
          >
            From high-converting sales copy to technical documentation, our
            creators bridge the gap between your brand and your audience.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: E }}
              whileHover={{ scale: 1.02 }}
              className="group premium-card p-8 flex flex-col h-full hover:border-[#f26522] transition-colors duration-500"
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center group-hover:bg-[#f26522] group-hover:text-[#f26522] transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#f26522] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-light mb-8 flex-grow">
                {service.description}
              </p>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/50">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] uppercase tracking-tighter text-white/70 group-hover:text-white/60 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-neutral-900 to-transparent border border-[#f26522] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">
              Need something specific?
            </h4>
            <p className="text-white/70">
              We handle custom content requirements for enterprise clients.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentService;
