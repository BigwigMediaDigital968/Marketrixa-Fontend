"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  MapPin,
  Award,
  Settings2,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

const WhyIndusMarket: React.FC = () => {
  const industries = [
    {
      title: "Healthcare",
      icon: Stethoscope,
      desc: "Hospitals & clinics rely on trust. We protect medical credibility.",
      accent: "#ef4444",
    },
    {
      title: "Real Estate",
      icon: Building2,
      desc: "Helping developers build confidence with property buyers.",
      accent: "#3b82f6",
    },
    {
      title: "Education",
      icon: GraduationCap,
      desc: "Transparent communication for students and parents.",
      accent: "#a855f7",
    },
    {
      title: "Hospitality",
      icon: UtensilsCrossed,
      desc: "Ensuring your service quality is reflected in online feedback.",
      accent: "#f59e0b",
    },
    {
      title: "Retail & E-Commerce",
      icon: ShoppingBag,
      desc: "Managing product reviews that directly impact your sales.",
      accent: "#10b981",
    },
  ];

  const valueProps = [
    {
      title: "Local Expertise",
      icon: MapPin,
      desc: "Based in Gujarat, we understand regional business dynamics and local customer behavior.",
    },
    {
      title: "Experienced Team",
      icon: Award,
      desc: "Skilled professionals in digital marketing, communication, and strategic brand management.",
    },
    {
      title: "Customized Strategies",
      icon: Settings2,
      desc: "Every business is unique. We design solutions based on your specific industry and goals.",
    },
    {
      title: "Transparent Reporting",
      icon: BarChart3,
      desc: "Regular progress reports showing performance metrics and reputation improvements.",
    },
    {
      title: "Continuous Support",
      icon: HeadphonesIcon,
      desc: "Ongoing monitoring and active support to ensure long-term reputation success.",
    },
  ];

  return (
    <div className="text-white selection:bg-[#f26522]/30">
      {/* --- SECTION: Industries We Serve --- */}
      <section className="py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-[#f26522] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Expertise Across Sectors
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Industries <br />
                <span className="text-white/30 italic">We Serve.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 font-light max-w-sm text-lg leading-relaxed"
            >
              Marketrixa offers tailored ORM solutions for a wide range of
              industries across Gujarat.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: E }}
                className="premium-card group p-8 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden relative"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{
                    backgroundColor: `${item.accent}10`,
                    color: item.accent,
                  }}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                {/* Decorative Accent Glow */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 flex flex-col justify-center items-center text-center border-dashed border-[#f26522]/30 bg-[#f26522]/5"
            >
              <h4 className="text-xl font-bold mb-4">
                Your Industry Not Listed?
              </h4>
              <p className="text-sm text-white/50 mb-6 font-light">
                We build custom frameworks for any business model.
              </p>
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-widest text-[#f26522] hover:text-white transition-colors underline underline-offset-8"
              >
                Consult Our Experts
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION: Why Choose Marketrixa (Gujarat Focus) --- */}
      <section className="py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-white/10 glass mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                The Marketrixa Edge
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Marketrixa for <br />
              <span className="text-[#f26522]">ORM Service in Gujarat?</span>
            </h2>

            <p className="mt-10 mx-auto max-w-2xl">
              Choosing the right reputation management partner can make a
              significant difference in your brand image. Marketrixa combines
              local market understanding with modern digital strategies to
              deliver reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-card aspect-square max-w-md mx-auto relative z-10 p-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Gujarat Business Hub"
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[#f26522] font-black text-6xl opacity-20 mb-2">
                    079
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Rooted in Local Innovation
                  </p>
                </div>
              </div>
              {/* Background Geometric Decor */}
              <div className="absolute -top-12 -left-12 w-48 h-48 border border-[#f26522]/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-white/5 rounded-full" />
            </motion.div>

            {/* Value Props Side */}
            <div>
              {valueProps.map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: E }}
                  className="group flex gap-6 p-6 rounded-2xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f26522]/50 group-hover:text-[#f26522] transition-all">
                    <prop.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#f26522] transition-colors">
                      {prop.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                      {prop.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Section */}
      <section className="pb-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border-white/5 p-12 md:p-20 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f26522] to-transparent" />
            <h3 className="text-2xl md:text-4xl font-bold mb-8 tracking-wide">
              Ready to Audit Your <br className="hidden md:block" /> Digital
              Reputation?
            </h3>
            <button className="btn-primary">Get Free Reputation Audit</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyIndusMarket;
