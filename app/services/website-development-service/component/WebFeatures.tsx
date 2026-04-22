"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import {
  Monitor,
  Zap,
  Layers,
  Rocket,
  RefreshCcw,
  Building2,
  Target,
  Search,
  Code2,
} from "lucide-react";

// --- Types ---
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

// --- Card Component with 3D Effect ---
const FeatureCard = ({
  title,
  description,
  icon,
  imageUrl,
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse Position for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Motion
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform values for tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[450px] w-full group cursor-pointer"
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-[#F26522]/10"
        style={{ transform: "translateZ(0px)" }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        {/* Glossy Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-white/5 opacity-80" />
      </div>

      {/* Content Layer (3D Pop) */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        {/* Default View: Center Aligned Title with Glossy Text */}
        <div className="transition-all duration-500 group-hover:translate-y-[-40px]">
          <div className="mb-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-[#F26522] shadow-xl">
              {icon}
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-2xl">
            {title}
          </h3>

          <div className="w-12 h-1 bg-[#F26522] mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-500" />
        </div>

        {/* Hover View: Description (hidden by default) */}
        <div className="absolute bottom-12 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4 backdrop-blur-sm p-4 rounded-xl bg-black/20 border border-white/5">
            {description}
          </p>
        </div>
      </div>

      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
    </motion.div>
  );
};

// --- Main Section Component ---
const WebFeatures = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const features = [
    {
      title: "Responsive Web Design",
      description:
        "We focus on how your website appears and functions across various devices, including mobile phones, tablets, and desktops.",
      icon: <Monitor size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Static Website Design",
      description:
        "Simple, quick, and powerful. Excellent for businesses wanting a no-nonsense online presence with maximum speed.",
      icon: <Zap size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Dynamic Website Design",
      description:
        "Create deeper connections with visitors through interactive features and personalized browsing experiences.",
      icon: <Layers size={32} />,
      imageUrl: "/dynamic-web-image.png",
    },
    {
      title: "Startup Website Design",
      description:
        "Creative digital identities designed to effectively tell your brand story and communicate your unique message.",
      icon: <Rocket size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Website Redesign",
      description:
        "We turn old-fashioned websites into sleek, powerful digital hubs enhancing usability, speed, and overall look.",
      icon: <RefreshCcw size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Website Design",
      description:
        "Professional business websites evoking reliability, developed for complex activities and high traffic performance.",
      icon: <Building2 size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Landing Page Design",
      description:
        "Optimized for conversions with persuasive messages and effective visuals to turn visitors into loyal customers.",
      icon: <Target size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SEO-Friendly Web Design",
      description:
        "Optimized from the ground up with clean code and fast loading to ensure better presence in search results.",
      icon: <Search size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "PSD To HTML",
      description:
        "Pixel-perfect, high-quality HTML conversion from your design files adhering to modern coding standards.",
      icon: <Code2 size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:text-center mb-20"
        >
          <motion.h2
            variants={headerVariants}
            className="text-[#F26522] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Web Design Company in Gujarat
          </motion.h2>
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Premium Web Design Services <br />
            <span className="text-[#F26522]">for Modern Businesses</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Premium Web Design Services for Modern Businesses We make websites
            that are easy for anyone to use and visually enjoyable. We really
            get it! A great website plays a huge role in the success of
            businesses. <br /> Our top services include:
          </motion.p>
        </motion.div>

        {/* Responsive Grid: 3 Desktop, 2 Tab, 1 Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFeatures;
