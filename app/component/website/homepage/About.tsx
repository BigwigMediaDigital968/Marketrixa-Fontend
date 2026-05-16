"use client";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      icon: <Award className="text-[#f26522]" size={20} />,
    },
    {
      label: "Brands Served",
      value: "50+",
      icon: <Target className="text-[#f26522]" size={20} />,
    },
    {
      label: "Certified Specialists",
      value: "13+",
      icon: <Users className="text-[#f26522]" size={20} />,
    },
  ];

  const values = [
    {
      title: "Precision",
      description:
        "Every decision is backed by data, not guesswork. We analyse, test, and optimise before we scale.",
      icon: <Target size={32} />,
      color: "from-orange-500/20 to-transparent",
    },
    {
      title: "Partnership",
      description:
        "Your goals become our goals from day one. We work as an extension of your team, not just a vendor.",
      icon: <Users size={32} />,
      color: "from-blue-500/20 to-transparent",
    },
    {
      title: "Performance",
      description:
        "We measure success by your results: traffic, leads, conversions, and revenue. Nothing else matters.",
      icon: <BarChart3 size={32} />,
      color: "from-[#f26522]/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#f26522] selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f26522]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Narrative (Sticky) */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-[#f26522]" />
              <span className="uppercase tracking-[0.3em] text-[#f26522] text-xs font-black">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8"
            >
              We Are Not Just an Agency. <br />
              <span className="text-[#f26522] italic">
                We Are Your Growth Partner.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-white/60 leading-relaxed max-w-xl"
            >
              <p>
                <strong className="text-white">Marketrixa</strong> is a
                full-service digital marketing company in Ahmedabad built for
                brands that refuse to settle for average. We combine data-driven
                strategy, creative execution, and performance marketing to help
                businesses grow faster, smarter, and more sustainably, whether
                they operate locally or across India.
              </p>
              <p>
                With 3+ years of experience, 50+ brands served, and a team of
                13+ certified digital specialists, we are more than an agency;
                we are your strategic growth engine. As the best digital
                marketing agency in Deesa, we bring regional expertise with
                national-scale execution, ensuring every rupee you invest drives
                measurable, compounding returns.
              </p>
            </motion.div>

            <Link
              href="/about"
              className="mt-12 group flex items-center gap-3 text-white font-bold tracking-tight"
            >
              <span className="bg-[#f26522] p-4 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={24} />
              </span>
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Learn More
                </span>
                <span className="text-xl">Read More About Us</span>
              </div>
            </Link>
          </div>

          {/* Right Column: Values & Visuals */}
          <div className="space-y-6 lg:pt-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="uppercase tracking-[0.3em] text-white/50 text-xs font-black">
                3 Core Values
              </span>
            </div>

            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative p-6 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 hover:border-[#f26522]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#f26522] group-hover:scale-110 group-hover:bg-[#f26522] group-hover:text-black transition-all duration-500">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      {value.title}
                      <Zap
                        size={16}
                        className="text-[#f26522] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
