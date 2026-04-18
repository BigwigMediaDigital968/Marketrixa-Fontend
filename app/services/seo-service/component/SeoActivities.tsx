"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BarChart2,
  Map,
  Layout,
  ExternalLink,
  Settings,
  LineChart,
  Eye,
  Link2,
  GitPullRequest,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const activities = [
  {
    id: 1,
    title: "Keyword Research",
    icon: <Search size={24} />,
    color: "bg-yellow-400",
    summary: "Identify exact keywords your users search for with real intent.",
    details: [
      "Primary keywords for the homepage",
      "Niche keywords for category pages",
      "Long-tail keywords for individual pages",
    ],
  },
  {
    id: 2,
    title: "Difficulty Analysis",
    icon: <BarChart2 size={24} />,
    color: "bg-green-500",
    summary:
      "Analyze how difficult keywords are to rank for early traffic gains.",
    details: [
      "Identifying quick-win (low competition) keywords",
      "Planning long-term strategy for competitive keywords",
    ],
  },
  {
    id: 3,
    title: "Keyword Mapping",
    icon: <Map size={24} />,
    color: "bg-blue-500",
    summary:
      "Assign specific keywords to relevant pages instead of targeting all in one.",
    details: [
      "Informational keywords → Blog/FAQ pages",
      "Product keywords → Product pages",
    ],
  },
  {
    id: 4,
    title: "On-Page SEO",
    icon: <Layout size={24} />,
    color: "bg-purple-500",
    summary: "Optimize elements within your website like Meta tags and H-tags.",
    details: [
      "Meta tags & Headings (H1, H2)",
      "Content & Image Alt Tag optimization",
      "Continuous seasonal updates",
    ],
  },
  {
    id: 5,
    title: "Off-Page SEO",
    icon: <ExternalLink size={24} />,
    color: "bg-orange-500",
    summary: "Build authority outside your website through quality backlinks.",
    details: [
      "Guest posting & Content submission",
      "Forum participation & Q&A platforms",
    ],
  },
  {
    id: 6,
    title: "Technical SEO",
    icon: <Settings size={24} />,
    color: "bg-emerald-600",
    summary: "Ensure search engine requirements are met for crawlability.",
    details: [
      "Sitemap & Robots.txt optimization",
      "Structured data & Open Graph tags",
      "Fixing technical crawl errors",
    ],
  },
  {
    id: 7,
    title: "SERP Tracking",
    icon: <LineChart size={24} />,
    color: "bg-red-400",
    summary: "Monitor keyword performance on results pages in real-time.",
    details: [
      "Monitor keyword performance",
      "Identify and fix ranking drops quickly",
    ],
  },
  {
    id: 8,
    title: "Competitor Watch",
    icon: <Eye size={24} />,
    color: "bg-indigo-500",
    summary: "Analyze competitor backlinks to find new growth opportunities.",
    details: [
      "Identifying new backlink opportunities",
      "Monitoring competitor strategies & keywords",
    ],
  },
  {
    id: 9,
    title: "Link Building",
    icon: <Link2 size={24} />,
    color: "bg-cyan-500",
    summary: "Acquire high-quality backlinks from authoritative sites.",
    details: [
      "Broken link building",
      "Resource link acquisition",
      "White-hat guest posting",
    ],
  },
  {
    id: 10,
    title: "Interlinking",
    icon: <GitPullRequest size={24} />,
    color: "bg-pink-500",
    summary: "Connect pages within your website to distribute authority.",
    details: [
      "Improves site SEO structure",
      "Distributes link authority (Link Juice)",
      "Enhances internal navigation",
    ],
  },
  {
    id: 11,
    title: "Local SEO",
    icon: <MapPin size={24} />,
    color: "bg-yellow-600",
    summary:
      "Optimize for location-based searches and Google Business Profile.",
    details: [
      "Optimizing for 'near me' searches",
      "Location-based keyword targeting",
      "GMB Profile optimization",
    ],
  },
];

const SeoActivities = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-[2px] bg-[#F26522]" />
              <span className="text-[#F26522] font-bold tracking-widest text-xs md:text-sm uppercase">
                SEO Services Includes
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Mastering the{" "}
              <span className="text-[#F26522]">SEO Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Execution is everything. We follow a meticulous 11-step process to
              ensure your website doesn't just rank, but dominates its niche.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-400 mb-1">
                Total Success Rate
              </p>
              <p className="text-3xl font-bold text-[#F26522]">98.4%</p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group h-full"
            >
              <div className="h-full bg-[#122b22] border border-white/10 rounded-3xl p-6 transition-all duration-500 group-hover:border-[#F26522]/50 group-hover:bg-[#16352a] overflow-hidden flex flex-col">
                {/* Icon & ID */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-2xl ${activity.color} text-white shadow-lg shadow-black/20`}
                  >
                    {activity.icon}
                  </div>
                  <span className="text-white/20 font-mono text-2xl font-bold">
                    {activity.id.toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#F26522] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {activity.summary}
                </p>

                {/* Animated Details List */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    {activity.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-300"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#F26522] shrink-0"
                        />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background Glow on Hover */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Mobile "Learn More" Indicator */}
              <div className="md:hidden absolute bottom-4 right-6 text-yellow-400">
                <ChevronRight size={18} />
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 xl:col-span-1"
          >
            <div className="h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl shadow-yellow-500/20">
              <h4 className="text-2xl font-black text-[#0a1a14] mb-4">
                Ready to Boost Your Rankings?
              </h4>
              <p className="text-[#0a1a14]/80 text-sm font-medium mb-8">
                Get a comprehensive SEO audit for your website today.
              </p>
              <Link
                href="/contact"
                className="bg-[#0a1a14] text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0a1a14] transition-all duration-300 w-full shadow-lg"
              >
                Book Audit Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer Stats / Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/10 pt-12"
        >
          {[
            { label: "Keywords Ranked", val: "500K+" },
            { label: "Clients Globally", val: "1.2K" },
            { label: "Traffic Boost Avg", val: "240%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.val}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeoActivities;
