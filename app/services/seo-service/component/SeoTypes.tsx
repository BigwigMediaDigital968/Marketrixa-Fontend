"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  MapPin,
  Users,
  Globe2,
  Magnet,
  ChevronRight,
} from "lucide-react";

const SeoTypes: React.FC = () => {
  const seoTypes = [
    {
      title: "Corporate SEO",
      description:
        "Stay ahead of your competition with enterprise-grade SEO strategies. We fine-tune your online presence with technical audits, authority building, and content optimization to ensure maximum visibility and tangible results for your Ahmedabad business.",
      icon: <Building2 className="w-8 h-8" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Ecommerce SEO",
      description:
        "Drive consistent online sales with our ecommerce SEO services in Ahmedabad. From product page optimization to strategic category keyword targeting, we help your online store rank higher and convert more visitors into paying customers.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Google Local Listings",
      description:
        "Get your Ahmedabad business found by local customers with our Google Business Profile optimization. We enhance your local listing to improve visibility in Google Maps and local search results, bringing nearby customers directly to your door.",
      icon: <MapPin className="w-8 h-8" />,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Lead Generation SEO",
      description:
        "Attract high-quality leads with targeted SEO strategies built to drive relevant traffic to your website. Our lead generation SEO services in Ahmedabad focus on bringing in visitors who are ready to engage, inquire, and convert.",
      icon: <Magnet className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Local SEO",
      description:
        "Dominate local search results and stay relevant to your Ahmedabad audience. As your dedicated search engine optimization company in Ahmedabad, we ensure your brand appears exactly where your customers are searching, whether on desktop or mobile.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Multilingual SEO",
      description:
        "Reach diverse audiences across Gujarati, Hindi, and English-speaking markets with our multilingual SEO services. Expand your organic reach and grow your brand beyond geographical boundaries with localized content strategies.",
      icon: <Globe2 className="w-8 h-8" />,
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  // Fixed Variants with "as const" to solve the TypeScript string literal error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* 3D Glassmorphism Atmospheric Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#F26522]/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl w-full z-10">
        {/* Header Section */}
        <div className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-[2px] bg-[#F26522]" />
            <span className="text-[#F26522] font-bold tracking-widest text-xs md:text-sm uppercase">
              SEO Services Includes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Our Dynamic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
              SEO Solutions
            </span>{" "}
            for Ahmedabad Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base max-w-4xl font-normal leading-relaxed"
          >
            Unlock the full potential of your brand with our comprehensive,
            data-driven SEO solutions. Whether you are a local business in
            Ahmedabad or an enterprise scaling across India, our SEO services in
            Ahmedabad are designed to deliver measurable growth.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {seoTypes.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative h-full"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 shadow-2xl">
                {/* 3D Gradient Hover Effect */}
                <div
                  className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${item.gradient} blur-[80px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Box */}
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white group-hover:text-[#F26522] group-hover:scale-110 transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-10 flex-grow font-light text-[15px] md:text-base">
                    {item.description}
                  </p>

                  {/* Footer Link */}
                  <div className="mt-auto flex items-center justify-between group/link cursor-pointer">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover/link:text-white transition-colors">
                      Learn More
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#F26522] group-hover/link:shadow-[0_0_20px_rgba(242,101,34,0.4)] transition-all duration-300">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Bar */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#F26522] to-orange-400 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Branding Line */}
      <div className="mt-20 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default SeoTypes;
