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
        <div className="absolute bottom-12 left-8 right-8 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <p className="text-gray-300 text-xs leading-relaxed backdrop-blur-sm p-4 rounded-xl bg-black/20 border border-white/5">
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
        "We ensure your website looks and functions flawlessly across every device, from mobile phones and tablets to desktops, providing a consistent, high-quality experience that keeps users engaged regardless of how they find you.",
      icon: <Monitor size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Static Website Design",
      description:
        "Simple, fast, and powerful. Perfect for businesses that need a clean, professional online presence with maximum page speed, zero complexity, and outstanding reliability from day one.",
      icon: <Zap size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Dynamic Website Design",
      description:
        "Build deeper, more meaningful connections with your visitors through interactive features, real-time content updates, and personalized browsing experiences carefully tailored to your specific audience.",
      icon: <Layers size={32} />,
      imageUrl: "/dynamic-web-image.png",
    },
    {
      title: "Startup Website Design",
      description:
        "Distinctive digital identities designed to tell your brand story powerfully and communicate your unique value proposition clearly to the audience that matters most to your growth.",
      icon: <Rocket size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Website Redesign",
      description:
        "We breathe new life into outdated websites, transforming them into sleek, modern digital platforms with improved usability, better visual appeal, and significantly enhanced performance across all metrics.",
      icon: <RefreshCcw size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Website Design",
      description:
        "Professional, polished business websites built to establish authority, meet complex operational requirements, and perform reliably even under the highest traffic volumes your business can generate.",
      icon: <Building2 size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Landing Page Design",
      description:
        "Conversion-optimized pages featuring persuasive messaging and strategic visual design, specifically engineered to turn every visitor into a qualified lead or loyal customer for your business.",
      icon: <Target size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SEO-Friendly Web Design",
      description:
        "Developed from the ground up with clean code, fast load times, and a solid technical structure that supports stronger, more sustainable rankings in competitive search engine results pages.",
      icon: <Search size={32} />,
      imageUrl:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "PSD To HTML",
      description:
        "Pixel-perfect, high-quality HTML conversion from your existing design files, delivered with absolute precision and full adherence to modern coding, browser compatibility, and accessibility standards.",
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
            Web Design Company in Ahmedabad
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
            className="text-gray-400 max-w-5xl mx-auto text-lg"
          >
            At Marketrixa, the best website development company in Ahmedabad, we
            create websites that are intuitive, visually impressive, and
            engineered to deliver results that matter. We truly understand the
            decisive role a great website plays in the growth and success of
            your business. Our comprehensive range of web design and development
            services covers everything your business needs to thrive in the
            digital space.
            <br /> Our top services include:
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
