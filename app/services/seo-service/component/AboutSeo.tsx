"use client";
import Popup from "@/app/component/website/Popup";
import { motion } from "framer-motion";
import { Search, TrendingUp, Globe, BarChart3, ArrowRight } from "lucide-react";
import React from "react";

const AboutSeo = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const features = [
    {
      icon: <Search className="text-yellow-500" size={24} />,
      title: "Optimize Performance",
      desc: "Speed up your rankings with technical SEO audits and core web vital improvements.",
    },
    {
      icon: <Globe className="text-yellow-500" size={24} />,
      title: "Boost Online Visibility",
      desc: "Expand your reach globally and locally with targeted keyword strategies.",
    },
    {
      icon: <TrendingUp className="text-yellow-500" size={24} />,
      title: "Elevate Your Rankings",
      desc: "Dominate search engine results pages through authority-building backlinks.",
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={24} />,
      title: "Unleash Potential",
      desc: "Data-driven insights to maximize your conversion rates and organic ROI.",
    },
  ];

  return (
    <>
      <section className="py-10 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-2 mb-6">
              <span className="text-white font-medium tracking-widest uppercase text-sm border-b-2 border-[#F26522] pb-1">
                Search Engine Marketing
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                It all starts with a{" "}
                <span className="text-[#F26522]">single search</span>
              </h2>
            </div>

            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl">
              In a world where consumers have access to their phones at all
              times, they often turn to search engines for answers. At{" "}
              <span className="font-semibold text-[#F26522]">MarketRixa</span>,
              we specialize in elevating your brand's visibility and driving
              results through strategic SEO tactics that turn searches into
              loyal customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-5 rounded-2xl border border-[#F26522] bg-gray-50/90 hover:bg-white hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
                >
                  <div className="mb-3 p-2 w-fit rounded-lg bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#F26522] transition-colors">
                    {feature.icon && feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => setShowPopup(true)}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 bg-gray-900 border border-[#F26522]/50 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#F26522] transition-all cursor-pointer"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Side: Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="SEO Strategy"
                className="w-full h-full object-cover"
              />
              {/* Glass Overlay Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#F26522] rounded-full flex items-center justify-center text-white">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-800 font-medium">
                      Monthly Growth
                    </p>
                    <p className="text-xl font-bold text-gray-900">+148%</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-[#F26522] rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-100/50 rounded-full blur-3xl -z-0" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#F26522] border-dashed rounded-full"
            />
          </motion.div>
        </div>
      </section>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default AboutSeo;
