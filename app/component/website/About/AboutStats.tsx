"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, Laptop, Smile, GraduationCap } from "lucide-react";

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 1,
    label: "Years of Experience",
    value: 3,
    suffix: "+",
    icon: <GraduationCap className="w-8 h-8" />, // 🎓 experience / expertise
  },
  {
    id: 2,
    label: "Websites Developed",
    value: 50,
    suffix: "+",
    icon: <Laptop className="w-8 h-8" />, // 💻 development work
  },
  {
    id: 3,
    label: "Happy clients",
    value: 50,
    suffix: "+",
    icon: <Smile className="w-8 h-8" />, // 😊 satisfaction
  },
  {
    id: 4,
    label: "Skilled Digital Experts",
    value: 13,
    suffix: "+",
    icon: <Users className="w-8 h-8" />, // 👥 team / experts
  },
];

interface CounterProps {
  value: number;
  suffix: string;
}

const Counter = ({ value, suffix }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white">
      <motion.span>{displayValue}</motion.span>
      <span className="text-[#F26522]">{suffix}</span>
    </span>
  );
};

export default function AboutStats() {
  return (
    <section className="relative glass py-24 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none opacity-20">
        <svg
          className="relative block w-full h-[150px]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <motion.use
              href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(242, 101, 34, 0.3)"
              animate={{ x: [48, -90] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(242, 101, 34, 0.5)"
              animate={{ x: [48, -90] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
            <motion.use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(242, 101, 34, 0.2)"
              animate={{ x: [48, -90] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#F26522]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#F26522]/10 rounded-full blur-2xl group-hover:bg-[#F26522]/20 transition-all duration-500" />

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-[#F26522]/10 text-[#F26522] group-hover:scale-110 group-hover:bg-[#F26522] group-hover:text-black transition-all duration-500">
                  {stat.icon}
                </div>

                <div className="flex flex-col">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-gray-400 font-medium uppercase tracking-[0.2em] text-xs mt-2 group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
