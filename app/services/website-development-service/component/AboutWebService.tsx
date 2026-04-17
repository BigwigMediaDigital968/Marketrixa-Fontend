"use client";
import { motion, Variants } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Zap,
  ArrowRight,
  MessageSquare,
  Globe,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutWebService = () => {
  const router = useRouter();
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      title: "Clean & Simple Design",
      desc: "Aesthetic brilliance that never compromises on usability.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "SEO Optimized",
      desc: "Built to rank and perform in search engine landscapes.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Conversion Focused",
      desc: "Turning visitors into loyal customers through strategic UX.",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto md:px-24">
        {/* Header Section */}
        <div className="md:text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-black mb-6"
          >
            Deliver Digital Excellence with a <br />
            <span className="text-[#F26522]">Personalized Approach</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            At Marketrixa, our website design and development services combine
            visually appealing designs with high-performing functionality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visual Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Mockup Container */}
            <div className="relative z-10 bg-[#081f1a] rounded-[2rem] p-4 md:p-8 border border-white/5 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                <div className="ml-4 h-4 w-32 bg-white/5 rounded-full" />
              </div>

              <div className="space-y-4">
                <div className="h-40 w-full bg-gradient-to-br from-[#F26522]/20 to-transparent rounded-2xl" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-white/5 rounded-xl" />
                  <div className="h-20 bg-white/5 rounded-xl" />
                  <div className="h-20 bg-white/5 rounded-xl" />
                </div>
                <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                <div className="h-4 w-1/2 bg-white/5 rounded-full" />
              </div>
            </div>

            {/* Floating Elements (Similar to reference design) */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -top-6 -right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-[#F26522]/10 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-[#F26522]" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                  Responsive
                </p>
                <p className="text-sm font-black text-gray-900">
                  Multi-Device Ready
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={floatVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-4 md:-left-8 bg-[#F26522] p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-tight">
                  Performance
                </p>
                <p className="text-sm font-black text-white">100/100 Speed</p>
              </div>
            </motion.div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F26522]/5 rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-[#F26522] font-bold text-xl mb-4"
            >
              Dynamic Web Engagement
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-white text-lg leading-relaxed mb-8"
            >
              Our team designs websites that are both user-friendly to search
              engines and effective in generating conversions. In addition to
              that, we make sure that they are simple to use and can be accessed
              by different devices. <br />
              <br />
              So, if you own a brand new business or just giving your website a
              makeover, our designers are more than willing to collaborate with
              you in turning your ideas into digital experiences that not only
              attract but also engage and convert your targets.
            </motion.p>

            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-10 h-10 shrink-0 bg-[#F26522]/10 rounded-full flex items-center justify-center text-[#F26522]">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* <button className="flex items-center justify-center gap-3 bg-[#F26522] hover:bg-[#ffe7dc] text-[#051612] font-black px-6 py-4 rounded-full transition-all group cursor-pointer">
                BOOK A FREE CONSULTATION TODAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-[#F26522] text-white border border-white/10 px-8 py-4 rounded-full transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                BOOK A FREE CONSULTATION TODAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWebService;
