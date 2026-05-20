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
  LogsIcon,
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
  {
    icon: <Sparkles className="w-5 h-5" />,
    label: "Startups and new businesses establishing their brand",
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    label: "E-commerce brands building product and campaign creatives",
  },
  {
    icon: <Store className="w-5 h-5" />,
    label: "Corporate companies needing professional business design",
  },
  {
    icon: <User className="w-5 h-5" />,
    label: "Local businesses looking to stand out in a competitive market",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "Personal brands and consultants building their professional image",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Digital agencies requiring white-label design support",
  },
];

const whyPoints = [
  {
    title: "Strategic Design Thinking",
    desc: "We don't design by gut feeling. We design with purpose ensuring every visual element communicates the right message to the right audience.",
  },
  {
    title: "Brand-Focused Output",
    desc: "Trends change. Brand identity endures. We design with your long-term brand goals in mind, not just what looks good today.",
  },
  {
    title: "Reliable Timelines and Quality",
    desc: "Marketrixa respect your deadlines. Every project goes through quality checks before delivery so you receive work that is ready to publish, print, or present.",
  },
  {
    title: "End-to-End Design Capability",
    desc: "Logo, social media, ads, presentations. we handle your entire visual identity so every touchpoint speaks the same brand language.",
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
                  style={{ fontSize: "0.78rem", color: "#f26522" }}
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
                  fontSize: "clamp(2.6rem, 6.5vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Leading
                <span
                  className="relative inline-block"
                  style={{ color: "#f26522" }}
                >
                  Graphic Design Services That Make Your Brand
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
                <span style={{ color: "rgba(255,255,255,0.5)" }}>
                  Impossible to Ignore
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                {...fadeUp(0.15)}
                className="leading-relaxed mb-10 font-light"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 0.98rem)",
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: "56ch",
                }}
              >
                Your brand speaks before you do. At Marketrixa, we help
                businesses build a visual identity that earns attention, builds
                trust, and drives results. Whether you are a startup finding
                your voice or an established brand looking for a fresh look our
                graphic design team is built to deliver creative work that
                actually works.
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
                    color: "#fff",
                    padding: "0.9rem 2rem",
                    fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
                    boxShadow: "0 0 30px rgba(242,101,34,0.35)",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  GET A FREE DESIGN CONSULTATION
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
                  Why Choose Marketrixa for Graphic Design in Ahmedabad?
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
                A Graphic{" "}
                <span style={{ color: "#f26522" }}>Design Agency</span> That
                Understands Business
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
                There are many designers out there. What makes Marketrixa
                different is that we understand what design needs to do for a
                business not just how it should look. We are a graphic design
                company that combines creative thinking with strategic clarity.
                Every project we take on is treated with the same level of
                seriousness, whether it's a single logo or a full brand system.
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
                          fontSize: "clamp(0.8rem, 1.05vw, 0.775rem)",
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
                Industries We Design For
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.07)}
              className="font-bold mb-5"
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
              }}
            >
              Built for Every Kind of Business in{" "}
              <span className="text-[#f26522]">Gujarat</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              className="leading-relaxed text-gray-300 font-light mx-auto max-w-4xl"
            >
              We have worked with businesses across sectors and understand that
              different industries have different visual needs. Whether you run
              a local retail shop in Ahmedabad or a growing e-commerce brand
              serving customers across India, our design solutions are tailored
              to your market.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
            className="font-bold mb-6 text-3xl md:text-5xl"
            style={{
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build a <span style={{ color: "#f26522" }}>Brand </span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              That Stands Out in Ahmedabad?
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.13)}
            className="leading-relaxed mb-10 font-light mx-auto text-md"
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "85ch",
            }}
          >
            If you are looking for the best graphic design agency in Ahmedabad,
            Marketrixa brings you the combination of creative talent, strategic
            thinking, and professional delivery that your brand deserves. We
            don't just hand you files, we give you a visual identity that builds
            credibility and grows with your business.
            <br />
            Let's start with a conversation. Tell us about your brand and we
            will show you what's possible.
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
              className="inline-flex items-center gap-2.5 font-bold rounded-xl w-full uppercase sm:w-auto justify-center"
              style={{
                background: "#f26522",
                color: "#fff",
                padding: "1rem 2.5rem",
                fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
                boxShadow: "0 0 36px rgba(242,101,34,0.4)",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "box-shadow 0.35s ease",
              }}
            >
              Get a Free Design Consultation
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
