"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Globe, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

const LocationSection = () => {
  const brandOrange = "#F26522";
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Get current time to show if office is "Open"
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  const hour = now.getHours();
  const isOpen = day !== 0 && day !== 6 && hour >= 9 && hour < 18;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const workingHours = [
    { days: "Mon - Fri", hours: "09:00 AM - 06:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 02:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="relative min-h-screen text-white py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden h-full w-full opacity-[0.02]">
        <h2 className="text-[25vw] font-black leading-none whitespace-nowrap rotate-90 origin-top-right uppercase">
          HQ • STUDIO • HQ • STUDIO
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch"
      >
        {/* LEFT: The Image Portal (L: 7/12) */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-7 relative group cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
            <motion.img
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6 }}
              src="/contact-office.png"
              alt="Main Office Headquarters image"
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

            {/* Overlay Info on Image */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">
                  Global HQ
                </p>
                <h3 className="text-2xl font-bold uppercase italic">
                  Innovation Hub
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md"
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Content Stack (L: 5/12) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pl-12">
          <div className="space-y-12">
            {/* Heading Section */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Building2
                    className="w-5 h-5"
                    style={{ color: brandOrange }}
                  />
                </span>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">
                  Our Presence
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                Visit Our <br />
                <span
                  className="text-transparent border-t-2 border-white/10 pt-2"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  innovation Hub
                </span>
              </h2>
            </motion.div>

            {/* Address Block */}
            <motion.div variants={fadeInUp} className="group cursor-default">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#F26522] group-hover:border-[#F26522] transition-all duration-500">
                    <MapPin className="w-5 h-5 transition-colors group-hover:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                    Address
                  </h4>
                  <p className="text-md font-light leading-snug max-w-md">
                    201, 202 & 203 Second floor, <br />
                    business world complex, <br />
                    Deesa, Gujarat, India - 385535
                  </p>
                  <button
                    onClick={() =>
                      router.push("https://share.google/A0hRZROINV4yLZU0v")
                    }
                    className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold hover:gap-4 transition-all cursor-pointer"
                    style={{ color: brandOrange }}
                  >
                    Open in Maps <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              variants={fadeInUp}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10">
                <span
                  className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  {isOpen ? "Currently Open" : "Closed"}
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">
                    Operating Hours
                  </h4>
                </div>

                <div className="space-y-4">
                  {workingHours.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-b border-white/5 pb-2"
                    >
                      <span className="text-sm font-medium text-gray-300">
                        {item.days}
                      </span>
                      <span
                        className={`text-sm ${item.days === "Sunday" ? "text-gray-600" : "text-white font-bold"}`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F26522]/10 blur-[50px] rounded-full group-hover:bg-[#F26522]/20 transition-all duration-700" />
            </motion.div>
          </div>

          {/* Bottom Footer Details */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              <span>GMT -07:00</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: brandOrange }}
              />
              <span>Free Parking Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: brandOrange }}
              />
              <span>Pet Friendly Office</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
