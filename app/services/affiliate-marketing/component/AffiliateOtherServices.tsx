"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Share2,
  BarChart3,
  PenTool,
  Globe,
  Mail,
  Zap,
  Video,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code,
} from "lucide-react";
import { link } from "fs";
import Link from "next/link";
import Popup from "@/app/component/website/Popup";

const services = [
  {
    title: "SEO",
    desc: "Improve your website rankings and drive consistent organic traffic.",
    icon: Search,
    link: "/services/seo-service",
  },
  {
    title: "SMM",
    desc: "Build a strong brand presence and connect with your audience across platforms.",
    icon: Share2,
    link: "/services/social-media-marketing",
  },
  {
    title: "Performance Marketing",
    desc: "Data-driven campaigns focused on measurable results and ROI.",
    icon: BarChart3,
    link: "/services/performance-marketing",
  },
  {
    title: "Content Marketing",
    desc: "Strategic content that informs, engages, and converts your audience.",
    icon: PenTool,
    link: "/services/content-marketing",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive websites built for performance and brand impact.",
    icon: Globe,
    link: "/services/website-development-service",
  },
  {
    title: "Email Marketing",
    desc: "Targeted email campaigns designed to nurture leads and boost retention.",
    icon: Mail,
    link: "/services/email-marketing",
  },
  {
    title: "SMO",
    desc: "Optimize your social profiles to improve visibility and consistency.",
    icon: Zap,
    link: "/services/social-media-optimization",
  },
  {
    title: "Video Editing",
    desc: "Creative visuals and high-quality video content that elevate identity.",
    icon: Video,
    link: "/services/video-editing",
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with relevant influencers to expand reach and trust.",
    icon: Users,
    link: "/services/influencer-marketing",
  },
  {
    title: "ORM",
    desc: "Protect and enhance your brand image across digital platforms.",
    icon: ShieldCheck,
    link: "/services/orm",
  },
  {
    title: "Website Development",
    desc: "Modern, responsive websites built for performance, usability, and brand impact.",
    icon: Code,
    link: "/services/website-development-service",
  },
];

const AffiliateOtherServices = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isAutoPlaying]);

  // Helper to get relative index for positioning
  const getCardProps = (index: number) => {
    const diff = (index - currentIndex + services.length) % services.length;

    // Logic to make it look infinite
    let position = diff;
    if (diff > services.length / 2) position = diff - services.length;

    const isVisible = Math.abs(position) <= 2;
    const isCenter = position === 0;
    const isBlurry = Math.abs(position) >= 2;

    return { position, isVisible, isCenter, isBlurry };
  };

  return (
    <>
      <section className="py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#F26522] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
              >
                Our Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-white"
              >
                Explore Our{" "}
                <span className="text-[#F26522] font-medium">Services</span>
              </motion.h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handlePrev();
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F26522] hover:border-[#F26522] transition-all cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F26522] hover:border-[#F26522] transition-all cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative h-[450px] w-full flex items-center justify-center">
            <div className="absolute w-full flex items-center justify-center">
              {services.map((service, index) => {
                const { position, isVisible, isCenter, isBlurry } =
                  getCardProps(index);

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      x: position * 340, // Distance between cards
                      scale: isCenter ? 1 : 0.85,
                      opacity: isBlurry ? 0 : isCenter ? 1 : 0.6,
                      filter: isCenter ? "blur(0px)" : "blur(4px)",
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-[300px] md:w-[320px] shrink-0"
                  >
                    <div
                      className={`p-8 rounded-[2.5rem] h-[380px] flex flex-col justify-between transition-colors duration-500 ${
                        isCenter
                          ? "bg-white/10 border-[#F26522]/40"
                          : "bg-white/5 border-white/5"
                      } border backdrop-blur-sm`}
                    >
                      <div>
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                            isCenter ? "bg-[#F26522]" : "bg-white/10"
                          } transition-colors duration-500`}
                        >
                          <service.icon className="text-white w-7 h-7" />
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                      <Link
                        href={service.link}
                        className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-opacity duration-300 ${
                          isCenter ? "opacity-100 text-[#F26522]" : "opacity-0"
                        }`}
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative rounded-[3rem] p-8 md:p-16 overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md"
          >
            {/* Background Blurs */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F26522] blur-[100px] rounded-full opacity-20 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Let’s Take Your Business to the{" "}
                  <span className="text-[#F26522]">Next Level</span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Work with our experts to build strategies that deliver impact.
                </p>
              </div>

              {/* Right Button */}
              <motion.button
                onClick={() => setShowPopup(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F26522] text-white font-black px-10 py-5 rounded-full shadow-xl hover:shadow-[#F26522]/40 transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer"
              >
                CONNECT WITH US
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default AffiliateOtherServices;
