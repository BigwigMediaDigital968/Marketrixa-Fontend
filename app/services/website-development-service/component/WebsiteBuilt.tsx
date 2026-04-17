"use client";
import { motion, Variants } from "framer-motion";
import {
  Zap,
  Target,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  MousePointerClick,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WebsiteBuilt = () => {
  // Explicitly typing variants to resolve the 'ease' property type error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any, // Casting as any or [number, number, number, number] resolves the type error
      },
    },
  };

  const performanceMetrics = [
    {
      label: "Page Speed",
      value: "99/100",
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Conversion",
      value: "+45%",
      icon: <Target className="w-4 h-4 text-emerald-400" />,
    },
    {
      label: "SEO Score",
      value: "A+",
      icon: <BarChart3 className="w-4 h-4 text-blue-400" />,
    },
  ];

  return (
    <section className="relative py-18 px-6 overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D084]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F26522] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Engineering Excellence
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            Websites Built for <br />
            <span className="text-[#F26522]">Performance and Growth</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            A good website should act as a business support tool as well. At
            Marketrixa, we strictly build digital platforms that are optimized
            for speed, clarity, and user engagement. Every element is perfectly
            thought through to naturally guide visitors from curiosity to
            conversion.
          </motion.p>
        </motion.div>

        {/* Central Dashboard & Mobile Mockup */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mt-20"
        > */}
        {/* Main Browser UI */}
        {/* <div className="relative z-10 bg-[#121212] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#181818]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <div className="px-4 py-1 bg-white/5 rounded-md text-[10px] text-gray-500 font-mono">
                marketrixa.com/analytics
              </div>
              <div className="w-12" />
            </div>

            <div className="p-4 md:p-8 grid grid-cols-12 gap-4 h-[320px] md:h-[500px]">
              <div className="hidden md:block col-span-2 space-y-4 border-r border-white/5 pr-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-full bg-white/5 rounded-lg" />
                ))}
              </div>

              <div className="col-span-12 md:col-span-10 space-y-6 md:pl-4">
                <div className="grid grid-cols-3 gap-4">
                  {performanceMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center"
                    >
                      <div className="mb-2">{m.icon}</div>
                      <div className="text-xl font-black text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 p-6 h-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-white/10 rounded-full" />
                    <div className="h-4 w-24 bg-[#00D084]/20 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-3 w-full bg-white/5 rounded-full" />
                    <div className="h-3 w-full bg-white/5 rounded-full" />
                    <div className="h-3 w-4/5 bg-white/5 rounded-full" />
                    <div className="h-3 w-3/5 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* Floating Mobile UI */}
        {/* <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-4 md:-left-16 z-20 w-[160px] md:w-[260px]"
          >
            <div className="bg-[#051612] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl p-4 aspect-[9/18.5] overflow-hidden">
              <div className="h-full w-full bg-[#121212] rounded-[2.2rem] relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 bg-[#F26522]/20 rounded-full flex items-center justify-center mb-4">
                  <MousePointerClick className="text-[#F26522] w-6 h-6" />
                </div>
                <div className="h-2 w-20 bg-white/10 rounded-full mb-3" />
                <div className="h-2 w-12 bg-white/5 rounded-full" />
                <div className="absolute bottom-6 left-0 right-0 px-6">
                  <div className="h-10 w-full bg-[#00D084] rounded-xl shadow-[0_0_20px_rgba(0,208,132,0.3)]" />
                </div>
              </div>
            </div>
          </motion.div> */}
        {/* </motion.div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-8xl mx-auto mt-20 text-center"
        >
          <Image
            src="/mockup-image-2.png"
            alt="Website Built"
            width={1100}
            height={500}
            className="rounded-xl text-center mx-auto shadow-2xl border border-white/10 hover:shadow-[#F26522]/20 transition-shadow"
          />
        </motion.div>

        {/* Feature Context & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="p-2 bg-[#F26522]/10 rounded-lg">
                <Monitor className="text-[#F26522] w-6 h-6" />
              </span>
              Modern Architecture
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              With blending contemporary design concepts with robust coding
              standards, we guarantee that your website will not only be
              visually striking but also highly functional from a technical
              perspective.
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 group font-bold cursor-pointer"
            >
              GET STARTED
              <div className="bg-[#F26522] p-2 rounded-full text-[#051612]">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteBuilt;
