"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Video,
  Megaphone,
  Users,
  MessageSquare,
  Layout,
  Zap,
  Cpu,
  Settings,
  ArrowUpRight,
  CheckCircle2,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/app/component/website/Popup";

const services = [
  {
    id: 1,
    icon: <Target className="text-orange-500" size={32} />,
    title: "Strategy & Planning",
    desc: "We begin every engagement with a thorough audit of your brand, competitors, and target audience. The result is a clear, data-backed social media roadmap built specifically for your business goals and the Ahmedabad market.",
    whatWeDo: ["Platform audits", "Competitor analysis", "Funnel mapping"],
    brandGets: ["Clear roadmap", "Targeted messaging", "Scalable engagement"],
    userExperience:
      "Relevant content, authentic communication, and a new social acquaintance.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 2,
    icon: <Video className="text-orange-500" size={32} />,
    title: "Content Creation",
    desc: "Our creative team produces high-performing content, including Reels, carousels, static graphics, and copy that is designed to stop the scroll. Every piece is on-brand, platform-optimized, and built to generate real engagement.",
    whatWeDo: [
      "Reels & short-form videos",
      "Carousel storytelling",
      "Visual branding",
    ],
    brandGets: [
      "Higher engagement",
      "Increased saves & shares",
      "More organic leads",
    ],
    userExperience:
      "Valuable content, a clear brand voice, and a refreshing social feed.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 3,
    icon: <Megaphone className="text-orange-500" size={32} />,
    title: "Social Advertising",
    desc: "We run performance-driven paid campaigns across Facebook, Instagram, LinkedIn, and YouTube, focused on generating high-quality leads and maximizing your return on ad spend through continuous testing and optimization.",
    whatWeDo: [
      "Meta Ads",
      "LinkedIn Ads",
      "YouTube campaigns",
      "Conversion tracking",
    ],
    brandGets: ["Qualified leads", "Lower CPL", "Predictable ROI"],
    userExperience:
      "Relevant offers, seamless journeys, and easier social commerce.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 4,
    icon: <Users className="text-orange-500" size={32} />,
    title: "Influencer & UGC",
    desc: "We identify, vet, and manage influencer partnerships and user-generated content campaigns that bring authentic social proof to your brand and extend your reach to audiences you could not access alone.",
    whatWeDo: ["Influencer selection", "Campaign management", "ROI tracking"],
    brandGets: ["Social proof", "Expanded reach", "Video dominance"],
    userExperience:
      "Relatable content, valuable information, and discoveries worth sharing.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 5,
    icon: <MessageSquare className="text-orange-500" size={32} />,
    title: "Community & ORM",
    desc: "We actively manage your online reputation by monitoring mentions, responding to feedback, and proactively engaging your audience. Your brand image stays protected, and your community stays strong.",
    whatWeDo: [
      "Comment & DM handling",
      "Reputation monitoring",
      "Sentiment building",
    ],
    brandGets: [
      "Stronger loyalty",
      "Improved credibility",
      "Revenue-generating community",
    ],
    userExperience:
      "Quicker responses, faster resolutions, and reassurance that your brand cares.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 6,
    icon: <Layout className="text-orange-500" size={32} />,
    title: "Account Management",
    desc: "Consistent, strategic social media presence does not happen by accident. We handle scheduling, monitoring, and profile management across all platforms to keep your brand active and visible every single day.",
    whatWeDo: [
      "Profile optimization",
      "Content calendars",
      "Performance reporting",
    ],
    brandGets: [
      "Consistent presence",
      "Audience retention",
      "Data-driven decisions",
    ],
    userExperience:
      "Consistent content, timely updates, and a cohesive brand experience.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 7,
    icon: <FaFacebook className="text-orange-500" size={32} />,
    title: "Meta Marketing",
    desc: "We develop Facebook and Instagram strategies built around Reels, Stories, and precision retargeting to maximize your reach, grow your following, and drive conversions from your most engaged audiences.",
    whatWeDo: [
      "Engagement strategies",
      "Meta Ads management",
      "Lookalike audiences",
    ],
    brandGets: [
      "Increased reach",
      "Visual brand presence",
      "Better conversion tracking",
    ],
    userExperience:
      "Entertaining content, meaningful interactions, and easy product discovery.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 8,
    icon: <FaLinkedin className="text-orange-500" size={32} />,
    title: "LinkedIn Marketing",
    desc: "For B2B brands and professionals, we build LinkedIn strategies that establish authority, grow meaningful connections, and generate high-intent leads from decision-makers who are actively looking for solutions.",
    whatWeDo: ["Thought leadership", "LinkedIn Ads", "Lead form campaigns"],
    brandGets: [
      "Industry authority",
      "High-intent B2B leads",
      "Stronger credibility",
    ],
    userExperience:
      "Insightful content, valuable connections, and relevant solutions.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 9,
    icon: <FaYoutube className="text-orange-500" size={32} />,
    title: "YouTube Marketing",
    desc: " We build video-first strategies that position your brand for long-term awareness and search discoverability on YouTube, helping you connect with audiences at every stage of the buying journey.",
    whatWeDo: ["Video SEO", "YouTube Ads", "Channel growth strategies"],
    brandGets: [
      "Higher visibility",
      "Brand storytelling",
      "Long-term discoverability",
    ],
    userExperience:
      "Informative videos, clear messaging, and easy-to-consume value.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 10,
    icon: <Zap className="text-orange-500" size={32} />,
    title: "Lead Generation",
    desc: " Every campaign we run has one non-negotiable goal: results. We design and manage lead generation campaigns that attract qualified prospects and move them through your funnel efficiently and cost-effectively.",
    whatWeDo: ["Funnel targeting", "Landing pages", "Retargeting & tracking"],
    brandGets: [
      "Qualified leads",
      "Lower acquisition cost",
      "Improved sales pipeline",
    ],
    userExperience:
      "Relevant offers, simple sign-ups, and personalized follow-ups.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 11,
    icon: <Cpu className="text-orange-500" size={32} />,
    title: "AI-Powered SMM",
    desc: "We use artificial intelligence to analyze audience behaviour, predict content performance, and optimize ad delivery, giving your brand a significant competitive edge across every platform we manage.",
    whatWeDo: ["Audience insights", "Content analysis", "Ad optimization"],
    brandGets: ["Smarter targeting", "Higher ROI", "Faster scaling"],
    userExperience: "Highly relevant content and personalized experiences.",
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 12,
    icon: <Settings className="text-orange-500" size={32} />,
    title: "SMM Automation",
    desc: "We implement smart automation workflows that improve operational efficiency across your social channels while preserving the personalized, human tone your audience expects from your brand.",
    whatWeDo: ["Scheduled workflows", "Chatbot flows", "Trigger campaigns"],
    brandGets: [
      "Operational efficiency",
      "Faster responses",
      "Scalable systems",
    ],
    userExperience:
      "Instant responses, seamless interactions, and smooth experiences.",
    color: "from-orange-500/20 to-transparent",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-500 ${
        isHovered
          ? "shadow-[0_0_40px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/30"
          : ""
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="p-8 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-orange-500/20 transition-colors duration-300">
            {service.icon}
          </div>
          <ArrowUpRight
            className={`text-white/20 group-hover:text-orange-500 transition-all duration-300 transform ${
              isHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
          />
        </div>

        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-500 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
          {service.desc}
        </p>

        {/* Animated Expanded Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-4 border-t border-white/10 mt-2">
                {/* Section: What We Do */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-orange-500/80 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} /> What We Do
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.whatWeDo.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-orange-500" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Brand Gets */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-orange-500/80 mb-3 flex items-center gap-2">
                    <ShieldCheck size={14} /> Brand Benefits
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.brandGets.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: User Experience */}
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-orange-500/80 mb-2 flex items-center gap-2">
                    <UserCheck size={14} /> User Experience
                  </h4>
                  <p className="text-xs text-gray-400 italic">
                    "{service.userExperience}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Placeholder spacer for non-hovered state to maintain visual weight */}
        {!isHovered && (
          <div className="mt-auto pt-6 text-xs text-orange-500/50 font-bold uppercase tracking-widest">
            Hover to explore details
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SmmServices = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 font-bold text-sm uppercase tracking-widest mb-6"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              360 Degree Coverage by the Best <br />
              <span className="text-orange-500">
                Social Media Marketing Agency
              </span>{" "}
              in Ahmedabad
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto text-md leading-relaxed">
              From strategy to execution and reporting, we handle every
              dimension of your social media presence so you can focus on
              running your business. As a dedicated social media marketing
              agency in Ahmedabad, we ensure your brand stays ahead across every
              platform, every day.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-orange-600 to-orange-500 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">
              Ready to Dominate the Social Landscape in Ahmedabad?
            </h3>
            <p className="text-white/90 mb-10 text-lg max-w-2xl mx-auto relative z-10">
              Our data-driven strategies and creative content are designed to
              make your brand the centre of every conversation in your market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-orange-600 font-black px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl cursor-pointer"
              >
                Start Your Campaign
              </button>
              <Link
                href="#projects"
                className="bg-[#001c1c] text-white font-black px-10 py-5 rounded-2xl hover:bg-black transition-colors shadow-xl border border-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default SmmServices;
