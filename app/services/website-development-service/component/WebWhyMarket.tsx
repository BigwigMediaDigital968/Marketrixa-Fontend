"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Layers,
  Search,
  MousePointer2,
  TrendingUp,
  Palette,
  Headset,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- Types ---
interface WhyItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

// --- Data ---
const whyChooseData: WhyItem[] = [
  {
    id: 1,
    title: "Custom-Built Solutions",
    description:
      "We design every website from scratch to align perfectly with your business goals, target audience, and brand identity, never relying on generic, cookie-cutter templates that fail to differentiate your business.",
    icon: Code2,
    color: "#F26522",
  },
  {
    id: 2,
    title: "Performance-Oriented",
    description:
      "Every website we deliver is optimized for blazing-fast load speeds, smooth user experience, and solid technical performance across all browsers and devices without exception.",
    icon: Zap,
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "Stylish & Responsive",
    description:
      "Crafted for both elegance and functionality, your website delivers a flawless, consistent experience across every screen size, ensuring no visitor ever has a subpar experience with your brand.",
    icon: Layers,
    color: "#10B981",
  },
  {
    id: 4,
    title: "SEO-Ready Structure",
    description:
      "Built with clean, well-organized code and designed in full alignment with current SEO best practices to maximize your organic visibility and long-term search engine performance.",
    icon: Search,
    color: "#A855F7",
  },
  {
    id: 5,
    title: "User-Centric Approach",
    description:
      "We put users at the center of every design decision, prioritizing intuitive navigation and visitor-friendly layouts so every person who visits your website has the smoothest experience possible.",
    icon: MousePointer2,
    color: "#F43F5E",
  },
  {
    id: 6,
    title: "Scalable Architecture",
    description:
      "Our websites are engineered to evolve alongside your business, supporting future feature additions, growing traffic demands, and technology upgrades without disruption or the need to rebuild from scratch.",
    icon: TrendingUp,
    color: "#EAB308",
  },
  {
    id: 7,
    title: "Strong Consistency",
    description:
      "We ensure your design elements, color palette, and messaging are uniformly reflected throughout your entire website, reinforcing brand recognition at every single touchpoint.",
    icon: Palette,
    color: "#06B6D4",
  },
  {
    id: 8,
    title: "Reliable Support",
    description:
      "Our team provides ongoing assistance to keep your website secure, up to date, and running at peak performance without any hassle, so you can focus entirely on growing your business.",
    icon: Headset,
    color: "#6366F1",
  },
];

const WebWhyMarket = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F26522]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="md:text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#F26522] font-semibold tracking-widest uppercase text-sm"
          >
            The Marketrixa Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4"
          >
            Why Choose <span className="text-[#F26522]">Marketrixa</span> for
            Your Website?
          </motion.h2>

          <p className="text-gray-400 max-w-5xl text-md leading-relaxed mx-auto py-6">
            When searching for the best website development company in
            Ahmedabad, the real question is: who will treat your project with
            the attention, expertise, and commitment it truly deserves? At
            Marketrixa, we bring together creative talent, deep technical
            mastery, and strategic vision to build websites that go beyond
            aesthetics and deliver genuine, measurable business results. Here is
            what sets us apart as your ideal web design company in Ahmedabad.
          </p>
          <div className="w-20 h-1 bg-[#F26522] mx-auto rounded-full" />
        </div>

        {/* Cards Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-transparent border border-white/15 hover:border-[#F26522]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#F26522]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-[#F26522] group-hover:text-white transition-colors duration-500">
                    <item.icon
                      size={24}
                      strokeWidth={1.5}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#F26522] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-20 transition-opacity">
                <item.icon
                  size={80}
                  className="text-white -rotate-12 translate-x-4 translate-y-4"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center bg-[#F26522] text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            {/* Background Hover Layer */}
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />

            {/* Content */}
            <span className="relative z-10 text-sm flex items-center gap-3 transition-colors duration-300 group-hover:text-[#F26522]">
              TALK TO OUR WEB EXPERTS TODAY
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WebWhyMarket;
