"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Search,
  BarChart3,
  Code2,
  MonitorPlay,
  Camera,
  Share2,
  Users2,
} from "lucide-react";
import { BiRightArrow } from "react-icons/bi";

/**
 * SERVICEGRID COMPONENT
 * A responsive 4-column grid (on desktop) showcasing the agency's primary offerings.
 */
const services = [
  {
    title: "Creative & Communication",
    desc: "Adding and uplifting the brand psyche with communication & creative outlook.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Search Engine Marketing",
    desc: "Ensuring more visibility for your brand and more business for you.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Digital Marketing",
    desc: "Get the right marketing on the digital domain to reach out to billions of users.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Website Development",
    desc: "Make your brand/business stand out online with custom high-performance apps.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "AD Management",
    desc: "From creating Ads to running them and churning out leads, we do it all for you.",
    icon: <MonitorPlay className="w-8 h-8" />,
  },
  {
    title: "UGC Content Creation",
    desc: "Content is the key to all of it. We get you the right content that gives you the right hits.",
    icon: <Camera className="w-8 h-8" />,
  },
  {
    title: "Social Media Marketing",
    desc: "Connect and interact with billions of users on social media with the right content.",
    icon: <Share2 className="w-8 h-8" />,
  },
  {
    title: "Influencer Marketing",
    desc: "Let's barter the influencers' expertise to make your brand grow by generating content.",
    icon: <Users2 className="w-8 h-8" />,
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Services we <span className="text-[#F26522]">Offer</span>
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#0a0a0a] p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-[#111]"
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
              <button className="text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-[#F26522] transition-all flex items-center gap-2 cursor-pointer">
                Explore More
                <span>
                  <BiRightArrow className="hover:text-[#F26522] transition-all" />
                </span>
              </button>

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
