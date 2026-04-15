"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Search,
  Code2,
  Users2,
  TrendingUp,
  ShieldCheck,
  ThumbsUp,
  FileText,
  Globe,
  Mail,
  Link2,
} from "lucide-react";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Social Media Marketing",
    desc: "Engage your audience and grow your brand across all major social platforms.",
    icon: <Globe className="w-8 h-8" />,
    href: "/services/social-media-marketing",
  },
  {
    title: "Website Development",
    desc: "Build fast, scalable, and modern websites tailored to your business needs.",
    icon: <Code2 className="w-8 h-8" />,
    href: "/services/website-development",
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve your search rankings and visibility to attract high-quality organic traffic.",
    icon: <Search className="w-8 h-8" />,
    href: "/services/seo",
  },
  {
    title: "Performance Marketing",
    desc: "Drive measurable growth with data-driven campaigns focused on ROI and conversions.",
    icon: <TrendingUp className="w-8 h-8" />,
    href: "/services/performance-marketing",
  },
  {
    title: "Graphic Designing & Video Editing",
    desc: "Create visually compelling designs and videos that capture attention and communicate effectively.",
    icon: <PenTool className="w-8 h-8" />,
    href: "/services/design-video",
  },
  {
    title: "Affiliate Marketing",
    desc: "Expand your reach through strategic affiliate partnerships and performance-based growth.",
    icon: <Link2 className="w-8 h-8" />,
    href: "/services/affiliate-marketing",
  },

  {
    title: "Online Reputation Management",
    desc: "Monitor, manage, and enhance your brand’s reputation across digital platforms.",
    icon: <ShieldCheck className="w-8 h-8" />,
    href: "/services/orm",
  },
  {
    title: "Influencer Marketing",
    desc: "Leverage influencer partnerships to boost brand awareness and engagement.",
    icon: <Users2 className="w-8 h-8" />,
    href: "/services/influencer-marketing",
  },
  {
    title: "Social Media Optimization",
    desc: "Optimize your social profiles and content strategy for better reach and engagement.",
    icon: <ThumbsUp className="w-8 h-8" />,
    href: "/services/smo",
  },

  {
    title: "Content Marketing",
    desc: "Deliver valuable content that attracts, engages, and converts your target audience.",
    icon: <FileText className="w-8 h-8" />,
    href: "/services/content-marketing",
  },

  {
    title: "Email Marketing",
    desc: "Reach your audience directly with personalized and high-converting email campaigns.",
    icon: <Mail className="w-8 h-8" />,
    href: "/services/email-marketing",
  },
];

export default function ServiceGrid() {
  return (
    <section className="relative py-24 overflow-hidden px-6">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/marketing-hero-video.mp4" type="video/mp4" />
      </video> */}

      <Image
        src="/img-5.png"
        width={180}
        height={60}
        alt="marketrixa logo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* 🎨 Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />

      {/* Optional Brand Tint */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(242,101,34,0.15),transparent_60%)]" />
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Services We <span className="text-[#F26522]">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Empowering your brand with cutting-edge digital solutions tailored
            for maximum market impact and sustainable growth.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative backdrop-blur-xl border border-white/5 p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-[#111]"
            >
              {/* Brand Accent Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F26522] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon Container */}
              <div className="mb-8 text-gray-500 group-hover:text-[#F26522] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-4 tracking-tight group-hover:text-[#F26522] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Call to Action */}
              <Link
                href={service.href}
                className="text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-[#F26522] transition-all flex items-center gap-2 cursor-pointer"
              >
                Explore More
                <span>
                  <BiRightArrow className="hover:text-[#F26522] transition-all" />
                </span>
              </Link>

              {/* Hover Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,101,34,0.08),transparent_70%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
