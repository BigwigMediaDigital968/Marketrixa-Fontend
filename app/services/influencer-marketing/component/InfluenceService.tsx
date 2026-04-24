"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Compass,
  Lightbulb,
  PenTool,
  Globe,
  BarChart3,
  Video,
  CheckCircle2,
  Zap,
  Star,
  Trophy,
  Briefcase,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

const InfluenceService: React.FC = () => {
  const mainServices = [
    {
      title: "Influencer Identification",
      icon: Compass,
      points: [
        "Researching relevant industry influencers",
        "Evaluating audience authenticity",
        "Matching with your target market",
        "Shortlisting suitable creators",
      ],
    },
    {
      title: "Strategy & Planning",
      icon: Lightbulb,
      points: [
        "Campaign objective planning",
        "Platform & content direction",
        "Timeline & content scheduling",
        "Budget & resource allocation",
      ],
    },
    {
      title: "Content Management",
      icon: PenTool,
      points: [
        "Social media posts & videos",
        "Product demonstrations",
        "Brand storytelling content",
        "Visual & caption guidelines",
      ],
    },
    {
      title: "Performance Tracking",
      icon: BarChart3,
      points: [
        "Reach and impressions",
        "Engagement metrics",
        "Audience growth analysis",
        "Campaign performance insights",
      ],
    },
  ];

  const platforms = [
    { name: "Instagram", icon: FaInstagram },
    { name: "YouTube", icon: FaYoutube },
    { name: "Facebook", icon: FaFacebook },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "Twitter", icon: FaTwitter },
    { name: "Shorts", icon: Video },
  ];

  const influencerTypes = [
    {
      title: "Nano Influencers",
      badge: "Engaged",
      icon: Zap,
      desc: "Smaller but highly engaged audiences. Ideal for building trust within local communities.",
    },
    {
      title: "Micro Influencers",
      badge: "Niche",
      icon: Star,
      desc: "Offer strong engagement and niche expertise. Highly effective for targeted campaigns.",
    },
    {
      title: "Macro Influencers",
      badge: "Reach",
      icon: Trophy,
      desc: "Large audiences that can significantly increase brand visibility and awareness.",
    },
    {
      title: "Industry Experts",
      badge: "Authority",
      icon: Briefcase,
      desc: "Professionals bringing authority to specialized fields like healthcare and finance.",
    },
  ];

  return (
    <div className="text-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HERO HEADER --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-[#f26522] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              End-to-End Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-8">
              Influencer Marketing <br />
              <span className="text-white/60 italic">
                Services by Marketrixa.
              </span>
            </h2>
            <p className="text-white/50 text-md font-light leading-relaxed">
              Marketrixa provides comprehensive influencer marketing solutions
              tailored to businesses across India. From planning to execution,
              our team manages every stage of your campaign journey.
            </p>
          </motion.div>
        </div>

        {/* --- MAIN SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: E }}
              className="p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 hover:border-[#f26522]/30 transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] group-hover:scale-110 transition-transform shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-[#f26522] transition-colors">
                    {service.title}
                  </h3>
                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-white/40 text-sm font-light"
                      >
                        <CheckCircle2 size={14} className="text-[#f26522]/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PLATFORM MANAGEMENT --- */}
        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight mb-4">
              Platform Expertise
            </h3>
            <p className="text-white/40 font-light">
              Maximized reach across major social channels.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 px-8 py-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all cursor-default"
              >
                <platform.icon size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- INFLUENCER TYPES --- */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 md:mb-20">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Who We Work With.
              </h3>
              <p className="text-white/50 max-w-xl font-light">
                Collaborating across categories to suit your specific marketing
                needs and goals.
              </p>
            </div>
            <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencerTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/15 hover:border-[#f26522]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#f26522] transition-colors">
                    <type.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/30 group-hover:bg-[#f26522]/10 group-hover:text-[#f26522] transition-all">
                    {type.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{type.title}</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CALL TO ACTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 md:p-20 rounded-[40px] bg-[#f26522] text-black text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <Globe size={240} />
          </div>
          <h3 className="text-3xl md:text-5xl text-white mb-8 relative z-10">
            Start Your Influence Journey.
          </h3>
          <Link
            href="/contact"
            className="px-10 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl relative z-10"
          >
            Contact Marketrixa
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InfluenceService;
