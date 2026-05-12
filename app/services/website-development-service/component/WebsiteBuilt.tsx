"use client";
import React, { useRef } from "react";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ShieldCheck, ArrowUpRight, Monitor } from "lucide-react";

interface Mockup {
  id: number;
  src: string;
  color: string;
}

const WebsiteBuilt: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mockups: Mockup[] = [
    {
      id: 1,
      src: "/mockup-image-2.png",
      color: "#F26522",
    },
    {
      id: 2,
      src: "/mockup-image-3.png",
      color: "#00D084",
    },
    {
      id: 3,
      src: "/mockup-image-4.png",
      color: "#38bdf8",
    },
    {
      id: 4,
      src: "/mockup-image-5.png",
      color: "#818cf8",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-6 overflow-visible bg-[#0b0f1a]"
    >
      {/* Background Glows for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D084]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F26522] text-xs font-bold tracking-widest uppercase mb-3"
          >
            <ShieldCheck className="w-4 h-4" />
            Engineering Excellence
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            Websites Built for <br />
            <span className="text-[#F26522]">Performance and Growth</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-md max-w-5xl mx-auto leading-relaxed"
          >
            A great website does more than just look impressive. At Marketrixa,
            a top-rated web design company in Ahmedabad, we build digital
            platforms rigorously optimized for speed, clarity, and user
            engagement. Every element is thoughtfully crafted to guide visitors
            naturally from the moment they land on your page all the way through
            to conversion. As the best website development company in Ahmedabad,
            we make sure your website does not just look great but actively
            works for your business every single day. Our goal is to deliver
            real, measurable impact through smart engineering and purposeful
            design.
          </motion.p>
        </motion.div>

        {/* Stacked Cards Section */}
        <div className="relative mb-10 pb-[30vh]">
          {mockups.map((mockup, index) => {
            return (
              <Card
                key={mockup.id}
                index={index}
                src={mockup.src}
                color={mockup.color}
                total={mockups.length}
              />
            );
          })}
        </div>

        {/* Feature Context & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="p-2 bg-[#F26522]/10 rounded-lg">
                <Monitor className="text-[#F26522] w-6 h-6" />
              </span>
              Modern Architecture
            </h3>
            <p className="text-gray-400 text-md leading-relaxed">
              By blending contemporary design concepts with rock-solid coding
              standards, we ensure your website is not only visually striking
              but also technically superior in every regard. Our scalable
              architecture grows alongside your business, seamlessly
              accommodating future features, increased traffic, and evolving
              market demands without compromising on performance or reliability.
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <a
              href="/contact"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 group font-bold cursor-pointer"
            >
              GET STARTED
              <div className="bg-[#F26522] p-2 rounded-full text-[#0b0f1a]">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  index: number;
  src: string;
  color: string;
  total: number;
}

const Card: React.FC<CardProps> = ({ index, src, color, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track this specific card's position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Calculate scale-down for a stacking effect
  // As the user scrolls, the card beneath scales down slightly to provide depth
  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.05],
  );
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={cardRef}
      className="sticky top-[10vh] w-full flex items-center justify-center md:h-screen h-auto py-14"
      style={{ top: `${15 + index * 2.5}vh` }} // Staggered stickiness for stacking effect
    >
      <motion.div
        style={{
          scale: smoothScale,
          boxShadow: `0 20px 50px -10px rgba(0,0,0,0.7), 0 0 30px -10px ${color}33`,
        }}
        className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden"
      >
        <img
          src={src}
          alt={`Portfolio Project ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

        {/* Animated Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
            0{index + 1}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default WebsiteBuilt;
