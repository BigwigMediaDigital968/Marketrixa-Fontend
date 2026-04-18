"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Plane, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

const clients = [
  {
    name: "Vaan Travel House",
    domain: "vaantravelhouse.co.in",
    description:
      "A premier international travel and destination management house, specializing in bespoke global tours and luxury travel logistics.",
    category: "Travel & Hospitality",
    icon: <Plane className="text-orange-500" size={24} />,
    color: "from-orange-600/20 to-transparent",
    image: "/travel-image.jpg", // High-end travel placeholder
    stats: ["Global Itineraries", "24/7 Support", "Luxury Fleet"],
    link: "https://vaantravelhouse.co.in/",
  },
  {
    name: "Granth Properties",
    domain: "granthproperties.com",
    description:
      "Leading international real estate consultancy facilitating cross-border investments and premium property management services.",
    category: "Real Estate & Investment",
    icon: <Home className="text-blue-500" size={24} />,
    color: "from-blue-600/20 to-transparent",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", // Modern architecture placeholder
    stats: ["HNI Portfolio", "Expat Housing", "Market Research"],
    link: "https://www.granthproperties.com/",
  },
];

const InternationalClient = () => {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            >
              <Globe size={14} className="text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Trusted Internationally
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              EMPOWERING GLOBAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                ENTITIES.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            From luxury travel in Asia to high-stakes real estate in global
            markets, we build the digital infrastructure that drives
            international success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent`}
                />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                  {client.icon}
                  <span className="text-xs font-bold text-white tracking-tight">
                    {client.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      {client.name}
                    </h3>
                    <a
                      href={`https://${client.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      {client.domain} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                  {client.description}
                </p>

                {/* Stats / Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {client.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[11px] font-bold text-gray-300 uppercase tracking-wider"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <Link
                  href={client.link}
                  target="_blank"
                  className="w-full py-4 bg-white/5 hover:bg-orange-500 text-white font-bold rounded-2xl border border-white/10 hover:border-orange-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  VIEW CASE STUDY
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logobar Mockup */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-8">
            Global Network Participation
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple SVG Logo Placeholders for the brands */}
            <div className="h-8 flex items-center gap-2 font-black text-white text-xl">
              VAAN<span className="text-orange-500">.</span>
            </div>
            <div className="h-8 flex items-center gap-2 font-black text-white text-xl">
              GRANTH<span className="text-blue-500">.</span>
            </div>
            <div className="h-8 flex items-center gap-2 font-black text-white text-xl">
              GLOBAL<span className="text-gray-500">X</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalClient;
