"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Palette,
  Play,
  ArrowUpRight,
  Star,
  Layers,
  Monitor,
  Megaphone,
  Building2,
  ChevronRight,
  Sparkles,
  Check,
  Globe,
  ShoppingBag,
  Briefcase,
  Store,
  User,
  Mail,
} from "lucide-react";
import GraphicApproach from "./GraphicApproach";
import GraphicPortfolio from "./GraphicPortfolio";
import DesignServices from "./DesignServices";

// ─── Easing constant (typed tuple for TS) ────────────────────────────────────
const E: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ─── Reusable reveal animation ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.72, ease: E, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.72, ease: E, delay },
});

// ─── SVG Decorations ─────────────────────────────────────────────────────────

const GridPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = "",
  opacity = 0.04,
}) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid"
        x="0"
        y="0"
        width="48"
        height="48"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 48 0 L 0 0 0 48"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#grid)`} style={{ opacity }} />
  </svg>
);

const CircleRing: React.FC<{ size: number; className?: string }> = ({
  size,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    className={`absolute pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={size / 2 - 2}
      fill="none"
      stroke="rgba(242,101,34,0.18)"
      strokeWidth="1"
      strokeDasharray="6 10"
    />
    <circle
      cx={size / 2}
      cy={size / 2}
      r={size / 2 - 16}
      fill="none"
      stroke="rgba(242,101,34,0.08)"
      strokeWidth="0.5"
    />
  </svg>
);

const DiamondAccent: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="9"
      y="1"
      width="11"
      height="11"
      rx="1.5"
      transform="rotate(45 9 9)"
      fill="#f26522"
    />
  </svg>
);

const WaveDivider: React.FC = () => (
  <svg
    viewBox="0 0 1440 60"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-12 md:h-16 block"
    preserveAspectRatio="none"
  >
    <path
      d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
      fill="rgba(242,101,34,0.06)"
    />
  </svg>
);

const OrbitSVG: React.FC = () => (
  <svg
    viewBox="0 0 320 320"
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="160"
      cy="160"
      r="140"
      fill="none"
      stroke="rgba(242,101,34,0.07)"
      strokeWidth="1"
    />
    <circle
      cx="160"
      cy="160"
      r="100"
      fill="none"
      stroke="rgba(242,101,34,0.05)"
      strokeWidth="0.5"
    />
    <circle
      cx="160"
      cy="160"
      r="60"
      fill="none"
      stroke="rgba(242,101,34,0.1)"
      strokeWidth="1"
      strokeDasharray="4 8"
    />
    <circle cx="160" cy="20" r="5" fill="#f26522" opacity="0.6" />
    <circle cx="300" cy="160" r="3.5" fill="#f26522" opacity="0.4" />
    <circle cx="160" cy="300" r="4" fill="#f26522" opacity="0.5" />
    <circle cx="20" cy="160" r="3" fill="#f26522" opacity="0.35" />
  </svg>
);

// ─── Portfolio mock items ─────────────────────────────────────────────────────

const portfolioItems = [
  {
    label: "Brand Identity",
    tag: "Branding",
    bg: "from-orange-900/40 to-black",
    icon: "✦",
    aspect: "tall",
    image: "",
  },
  {
    label: "Social Campaign",
    tag: "Social Media",
    bg: "from-amber-900/30 to-black",
    icon: "◈",
    aspect: "wide",
    image: "",
  },
  {
    label: "Corporate Deck",
    tag: "Corporate",
    bg: "from-red-900/30 to-black",
    icon: "◉",
    aspect: "normal",
    image: "",
  },
  {
    label: "Ad Creative",
    tag: "Marketing",
    bg: "from-orange-800/35 to-black",
    icon: "✧",
    aspect: "normal",
    image: "",
  },
  {
    label: "Logo Suite",
    tag: "Branding",
    bg: "from-yellow-900/30 to-black",
    icon: "⬡",
    aspect: "wide",
    image: "",
  },
  {
    label: "Event Poster",
    tag: "Print",
    bg: "from-orange-900/40 to-black",
    icon: "◆",
    aspect: "tall",
    image: "",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Brands Served" },
  { value: "3+", label: "Years of Expertise" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  {
    id: "brand",
    icon: <Palette className="w-6 h-6" />,
    title: "Brand Identity Design",
    subtitle: "A strong brand starts with a strong identity.",
    desc: "We create complete branding solutions that define how your business is perceived — from first impression to lasting recognition.",
    items: [
      "Logo design and brand mark creation",
      "Color palette selection",
      "Typography system development",
      "Brand guidelines and usage standards",
    ],
    accent: "#f26522",
  },
  {
    id: "social",
    icon: <Monitor className="w-6 h-6" />,
    title: "Social Media Design",
    subtitle: "Design that drives engagement.",
    desc: "We design engaging and visually consistent content for all major platforms — crafted to stop the scroll and start conversations.",
    items: [
      "Post creatives and templates",
      "Campaign-based visual content",
      "Promotional banners",
      "Story and reel cover designs",
    ],
    accent: "#e05a1e",
  },
  {
    id: "marketing",
    icon: <Megaphone className="w-6 h-6" />,
    title: "Marketing & Advertising",
    subtitle: "Visuals that convert.",
    desc: "We create impactful marketing visuals that help businesses communicate their message effectively across all campaign channels.",
    items: [
      "Digital advertising creatives",
      "Print advertisements",
      "Flyers and brochures",
      "Posters and banners",
    ],
    accent: "#d44f18",
  },
  {
    id: "corporate",
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate & Business Design",
    subtitle: "Professional design for professional growth.",
    desc: "Specialised design solutions for corporate communication and business needs — credibility through every slide and document.",
    items: [
      "Business presentations",
      "Company profiles",
      "Pitch decks",
      "Internal communication designs",
    ],
    accent: "#c94414",
  },
];

const industries = [
  { icon: <Sparkles className="w-5 h-5" />, label: "Startups" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "E-commerce Brands" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Corporate Companies" },
  { icon: <Store className="w-5 h-5" />, label: "Local Businesses" },
  { icon: <User className="w-5 h-5" />, label: "Personal Brands" },
  { icon: <Globe className="w-5 h-5" />, label: "Digital Agencies" },
];

const whyPoints = [
  {
    title: "Strategic Design Thinking",
    desc: "Every visual has a purpose — we combine creativity with strategy to ensure your designs communicate and convert.",
  },
  {
    title: "Brand-Focused Output",
    desc: "We align every deliverable with your goals, audience expectations, and brand values — not just trends.",
  },
  {
    title: "Timely Delivery & QA",
    desc: "Strict quality assurance and reliable timelines mean your projects are completed without compromise.",
  },
  {
    title: "End-to-End Capability",
    desc: "From logo to campaign — we handle every visual touchpoint so your brand speaks one consistent language.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

const GraphicVideo: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("brand");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const active = services.find((s) => s.id === activeService) ?? services[0];

  return (
    <div className="w-full overflow-x-hidden text-white">
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <GridPattern opacity={0.2} />

        {/* Radial glows */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 800,
              height: 500,
              background:
                "radial-gradient(ellipse, rgba(242,101,34,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: "0%",
              right: "-10%",
              width: 500,
              height: 500,
              background:
                "radial-gradient(ellipse, rgba(242,101,34,0.07) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Animated orbit rings */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px] h-[340px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <OrbitSVG />
          </motion.div>
          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: 72,
                height: 72,
                background: "linear-gradient(135deg, #f26522, #c94414)",
                boxShadow: "0 0 40px rgba(242,101,34,0.5)",
              }}
            >
              <Palette className="w-8 h-8 text-black" />
            </div>
          </div>
        </div>

        {/* Decorative scattered shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { x: "8%", y: "20%", size: 8, delay: 0 },
            { x: "92%", y: "15%", size: 5, delay: 0.5 },
            { x: "5%", y: "75%", size: 6, delay: 1 },
            { x: "88%", y: "80%", size: 9, delay: 1.5 },
            { x: "50%", y: "5%", size: 4, delay: 0.8 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              }}
              className="absolute rounded-full"
              style={{
                left: dot.x,
                top: dot.y,
                width: dot.size,
                height: dot.size,
                background: "#f26522",
              }}
            />
          ))}
          {/* Large decorative dashes */}
          <svg
            className="absolute top-1/4 left-4 opacity-10"
            width="40"
            height="2"
          >
            <line
              x1="0"
              y1="1"
              x2="40"
              y2="1"
              stroke="#f26522"
              strokeWidth="2"
            />
          </svg>
          <svg
            className="absolute top-1/4 left-14 opacity-6"
            width="20"
            height="2"
          >
            <line
              x1="0"
              y1="1"
              x2="20"
              y2="1"
              stroke="#f26522"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* hero section */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 w-full"
        >
          {/* Flex wrapper */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 max-w-4xl">
              {/* Eyebrow */}
              <motion.div
                {...fadeUp(0)}
                className="flex items-center gap-3 mb-7"
              >
                <span
                  className="uppercase tracking-[0.22em]"
                  style={{ fontSize: "0.98rem", color: "#f26522" }}
                >
                  Gujarat&apos;s Creative Agency
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.08)}
                className="font-bold leading-[1.04] mb-6"
                style={{
                  fontSize: "clamp(2.6rem, 6.5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Leading
                <span
                  className="relative inline-block"
                  style={{ color: "#f26522" }}
                >
                  Graphic Design
                  <svg
                    viewBox="0 0 300 12"
                    className="absolute -bottom-2 left-0 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,6 C50,0 100,12 150,6 C200,0 250,12 300,6"
                      fill="none"
                      stroke="rgba(242,101,34,0.5)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                & <br className="hidden sm:block" />
                <span style={{ color: "rgba(255,255,255,0.5)" }}>
                  Video Editing Agency
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                {...fadeUp(0.15)}
                className="leading-relaxed mb-10 font-light"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: "56ch",
                }}
              >
                We are a creative graphic design and video editing agency in
                Gujarat dedicated to helping brands express their ideas through
                powerful visuals and professional storytelling. Our focus is on
                transforming concepts into impactful designs and high-quality
                video content that connects with audiences and strengthens brand
                identity.
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.22)}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 50px rgba(242,101,34,0.55)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 font-bold rounded-xl"
                  style={{
                    background: "#f26522",
                    color: "#000",
                    padding: "0.9rem 2rem",
                    fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
                    boxShadow: "0 0 30px rgba(242,101,34,0.35)",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  GET A FREE CREATIVE CONSULTATION
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href="#portfolio"
                  whileHover={{ color: "#f26522" }}
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{
                    color: "rgba(255,255,255, 1.0)",
                    fontSize: "0.88rem",
                  }}
                >
                  <Play className="w-4 h-4" /> View Our Work
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT VIDEO */}
            <motion.div
              {...fadeUp(0.3)}
              className="w-full lg:w-1/2 order-1 md:order-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] border border-white/10"
            >
              <video
                src="/graphic-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS TICKER
      ══════════════════════════════════════════════════ */}
      <div
        className="relative py-8 border-y overflow-hidden"
        style={{
          borderColor: "rgba(242,101,34,0.12)",
          background: "rgba(242,101,34,0.03)",
        }}
      >
        <GridPattern opacity={0.02} />
        <div className="max-w-7xl mx-auto px-4 backdrop-blur-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-[#f26522]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="flex flex-col items-center justify-center py-6 px-4"
                style={{
                  background: "linear-gradient(135deg, #0b0f1a, #1a1410)",
                }}
              >
                <span
                  className="font-extrabold leading-none mb-1"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                    color: "#f26522",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          APPROACH SECTION
      ══════════════════════════════════════════════════ */}
      <GraphicApproach />

      {/* ══════════════════════════════════════════════════
          PORTFOLIO SHOWCASE
      ══════════════════════════════════════════════════ */}
      <GraphicPortfolio />

      <WaveDivider />

      {/* ══════════════════════════════════════════════════
          SERVICES — INTERACTIVE TABS
      ══════════════════════════════════════════════════ */}
      <DesignServices />

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-14 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <GridPattern opacity={0.025} />
        <CircleRing size={600} className="-bottom-48 -left-48 opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left sticky heading */}
            <div className="lg:sticky lg:top-28">
              <motion.div
                {...fadeLeft(0)}
                className="flex items-center gap-3 mb-4"
              >
                <span
                  className="uppercase tracking-widest"
                  style={{ fontSize: "0.98rem", color: "#f26522" }}
                >
                  Our Difference
                </span>
              </motion.div>

              <motion.h2
                {...fadeLeft(0.07)}
                className="font-bold leading-[1.08] mb-6"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
                  fontFamily: "var(--font-outfit, sans-serif)",
                }}
              >
                Why Choose <span style={{ color: "#f26522" }}>Marketrix</span>{" "}
                for Graphic Designing?
              </motion.h2>

              <motion.p
                {...fadeLeft(0.12)}
                className="leading-relaxed mb-10 font-light"
                style={{
                  fontSize: "clamp(0.9rem, 1.3vw, 1.02rem)",
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "52ch",
                }}
              >
                At Marketrix, we believe design is more than just visuals. It is
                a powerful tool for communication, positioning, and business
                growth. Every design we create is focused on delivering meaning,
                clarity, and impact that supports your brand identity. What
                makes us different is our approach to combining creativity with
                strategy. We follow strategic design thinking to ensure every
                visual has a purpose, not just appeal. Our team consistently
                delivers brand-focused output that aligns with your goals and
                audience expectations. With timely delivery and strict quality
                assurance, we make sure your projects are completed without
                compromise. At Marketrix, every design reflects your brand
                values and helps you stand out confidently in your industry.
              </motion.p>

              <motion.a
                {...fadeLeft(0.17)}
                href="/contact"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 46px rgba(242,101,34,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 font-bold rounded-xl"
                style={{
                  background: "#f26522",
                  color: "#000",
                  padding: "0.875rem 2rem",
                  fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                  boxShadow: "0 0 28px rgba(242,101,34,0.3)",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transition: "box-shadow 0.35s ease",
                }}
              >
                GET IN TOUCH
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Right: why points */}
            <div className="flex flex-col gap-5">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: E, delay: i * 0.09 }}
                  whileHover={{
                    borderColor: "rgba(242,101,34,0.35)",
                    y: -3,
                    boxShadow: "0 16px 40px rgba(242,101,34,0.1)",
                  }}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{
                    padding: "1.75rem 2rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s ease",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(242,101,34,0.07) 0%, transparent 70%)",
                      transition: "opacity 0.5s ease",
                    }}
                  />
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: "#f26522",
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0 mt-0.5"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(242,101,34,0.1)",
                        border: "1px solid rgba(242,101,34,0.15)",
                        color: "#f26522",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-outfit, sans-serif)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4
                        className="font-bold text-white mb-2"
                        style={{
                          fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                          fontFamily: "var(--font-outfit, sans-serif)",
                        }}
                      >
                        {point.title}
                      </h4>
                      <p
                        className="leading-relaxed font-light"
                        style={{
                          fontSize: "clamp(0.8rem, 1.05vw, 0.875rem)",
                          color: "rgba(255,255,255,0.42)",
                        }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(242,101,34,0.025)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              {...fadeUp(0)}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span
                className="uppercase tracking-widest"
                style={{ fontSize: "0.98rem", color: "#f26522" }}
              >
                Industries We Serve
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.07)}
              className="font-bold mb-5"
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
              }}
            >
              Designed for Every Industry
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease: E, delay: i * 0.07 }}
                whileHover={{
                  borderColor: "rgba(242,101,34,0.4)",
                  y: -5,
                  background: "rgba(242,101,34,0.08)",
                }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl cursor-default"
                style={{
                  padding: "1.5rem 1rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.35s ease",
                }}
              >
                <div
                  style={{
                    color: "#f26522",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(242,101,34,0.1)",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(242,101,34,0.15)",
                  }}
                >
                  {ind.icon}
                </div>
                <span
                  className="text-center font-medium"
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.3,
                  }}
                >
                  {ind.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        {/* Heavy glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 800,
              height: 400,
              background:
                "radial-gradient(ellipse, rgba(242,101,34,0.14) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>
        <GridPattern opacity={0.03} />

        {/* Decorative top SVG line */}
        <svg
          viewBox="0 0 1440 2"
          className="absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="1"
            x2="1440"
            y2="1"
            stroke="rgba(242,101,34,0.15)"
            strokeWidth="1"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            {...fadeUp(0)}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span
              className="uppercase tracking-widest"
              style={{ fontSize: "0.98rem", color: "#f26522" }}
            >
              Start Your Journey
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.07)}
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
            }}
          >
            Build a Strong{" "}
            <span style={{ color: "#f26522" }}>Visual Identity</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              with Marketrix
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.13)}
            className="leading-relaxed mb-10 font-light mx-auto"
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "82ch",
            }}
          >
            If you are looking for a reliable partner for graphic designing
            services in Gujarat, Marketrix is here to help you build a strong
            and consistent brand presence. We don’t just design visuals. We
            create meaningful brand experiences that connect with your audience
            and support long-term growth. <br />
            Start your project with Marketrix today and transform your ideas
            into impactful visual designs.
          </motion.p>

          <motion.div
            {...fadeUp(0.18)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(242,101,34,0.65)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 font-bold rounded-xl w-full sm:w-auto justify-center"
              style={{
                background: "#f26522",
                color: "#000",
                padding: "1rem 2.5rem",
                fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
                boxShadow: "0 0 36px rgba(242,101,34,0.4)",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "box-shadow 0.35s ease",
              }}
            >
              GET IN TOUCH
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.24)}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              "50+ Projects",
              "Gujarat-based",
              "3+ Years",
              "Free Consultation",
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem" }}
              >
                <Star
                  className="w-3 h-3"
                  style={{ color: "#f26522", opacity: 0.7 }}
                />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicVideo;
