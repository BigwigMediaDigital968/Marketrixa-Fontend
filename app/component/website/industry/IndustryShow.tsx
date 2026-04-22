"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Factory,
  Truck,
  Landmark,
  Hotel,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Industry {
  id: string;
  caption: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ReactNode;
}

const INDUSTRIES: Industry[] = [
  {
    id: "01",
    caption: "Architectural Digitalization",
    title: "Real Estate",
    description:
      "We transform properties into immersive digital assets, from high-fidelity 3D walkthroughs to intelligent property management portals.",
    details: [
      "Prop-Tech Development",
      "Virtual Staging",
      "Lead Capture Systems",
      "Marketplace Scalability",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "02",
    caption: "Clinical Innovation",
    title: "Healthcare",
    description:
      "Bridging the gap between patient care and technology with secure telemedicine platforms and HIPAA-compliant data ecosystems.",
    details: [
      "EHR Integration",
      "Patient Portals",
      "Medical IoT Dashboards",
      "Data Security Excellence",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "03",
    caption: "Industrial Intelligence",
    title: "Manufacturing",
    description:
      "Optimizing the factory floor through smart automation interfaces and predictive maintenance visualizations.",
    details: [
      "IIoT Monitoring",
      "Supply Demand Analytics",
      "Legacy System Modernization",
      "Global Distribution UX",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: "04",
    caption: "Logistics Optimization",
    title: "Supply Chain",
    description:
      "Real-time visibility across the global transit network. We build the backbone for complex logistics and warehouse management.",
    details: [
      "Fleet Tracking Systems",
      "Inventory Automation",
      "Blockchain Transparency",
      "Route Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: "05",
    caption: "Fintech Architecture",
    title: "Bank & Finance",
    description:
      "Engineering secure, high-frequency financial platforms that prioritize user trust and regulatory compliance.",
    details: [
      "Wealth Management Tools",
      "Secure Payment Gateways",
      "Fraud Detection UI",
      "Cross-border Solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1200",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "06",
    caption: "Guest-Centric Design",
    title: "Hospitality",
    description:
      "Elevating the travel experience through premium booking engines and personalized digital concierge services.",
    details: [
      "OTA Integrations",
      "Contactless Check-in",
      "Loyalty Program Design",
      "Multi-lingual Support",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    icon: <Hotel className="w-6 h-6" />,
  },
];

const IndustryShow: React.FC = () => {
  const brandOrange = "#F26522";
  const router = useRouter();

  // Animation Variants
  const blockVariants: Variants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 100 : -100,
      rotateY: isEven ? -10 : 10,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="text-white py-24 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden perspective-[2000px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 lg:mb-40 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: brandOrange }}
            />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-gray-500">
              Market Dominance
            </span>
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: brandOrange }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
            Specialized <span style={{ color: brandOrange }}>Industries</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From initial business design to global market expansion, we engineer
            digital solutions that redefine sector standards.
          </p>
        </div>

        {/* Industry Blocks */}
        <div className="space-y-32 md:space-y-48">
          {INDUSTRIES.map((industry, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={industry.id}
                custom={isEven}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={blockVariants}
                className={`relative flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-24 items-center`}
              >
                {/* 3D Image Card */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <span
                        className="text-5xl font-black opacity-20 italic"
                        style={{
                          WebkitTextStroke: "1px white",
                          color: "transparent",
                        }}
                      >
                        {industry.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card with Backdrop Blur */}
                <div className="w-full lg:w-1/2 relative">
                  {/* The 3D Block Background */}
                  <div className="absolute -inset-6 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-[20px_40px_80px_rgba(0,0,0,0.4)] z-0" />

                  {/* Content Body */}
                  <div className="relative z-10 p-4 lg:p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/20"
                        style={{ color: brandOrange }}
                      >
                        {industry.icon}
                      </div>
                      <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">
                        {industry.caption}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      {industry.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                      {industry.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 group"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: brandOrange }}
                          />
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => router.push("/contact")}
                      className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all hover:gap-6 cursor-pointer"
                      style={{ backgroundColor: brandOrange, color: "white" }}
                    >
                      book a demo call <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryShow;
