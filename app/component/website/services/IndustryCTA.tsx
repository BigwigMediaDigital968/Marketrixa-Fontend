"use client";

import { useEffect, useRef, useState } from "react";

/* ── useInView hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── DATA ── */
const TIERS = [
  {
    id: "startup",
    label: "For Startups",
    popular: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l5.25 3.75L9 15.5V16h2v-1zm3-2.75L10.75 10H14v3.25z" />
        <path d="M13 2.05v2.02c2.01.2 3.84 1 5.32 2.23L19.74 4.8C17.82 3.16 15.53 2.2 13 2.05zM2.05 13H4.07c.2 2.01 1 3.84 2.23 5.32L4.8 19.74C3.16 17.82 2.2 15.53 2.05 13zm0-2c.2-2.53 1.16-4.82 2.75-6.74L6.3 5.68C5.07 7.16 4.27 8.99 4.07 11H2.05zM19.74 4.8l-1.42 1.42C19.5 7.68 20.3 9.5 20.5 11.5h2.02c-.2-2.53-1.16-4.82-2.78-6.7zM20.5 13c-.2 2.01-1 3.84-2.23 5.32l1.42 1.42c1.6-1.92 2.56-4.21 2.76-6.74H20.5z" />
      </svg>
    ),
    tagline: '"From napkin sketch to market dominance in 18 months"',
    desc: "We accelerate your journey from idea to a market-ready MVP, securing your foothold and attracting early adopters.",
    features: [
      "Rapid Prototyping & MVP Development",
      "Reduced Time-to-Market",
      "Cost-Effective Scalable Architecture",
      "Data-Driven Iteration for Product-Market Fit",
    ],
  },
  {
    id: "sme",
    label: "For Growing SMEs",
    popular: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
      </svg>
    ),
    tagline: '"Supercharge your growth and outpace competitors."',
    desc: "We optimize and scale your existing operations, removing bottlenecks therein, with our robust technology solutions.",
    features: [
      "Process Automation & System Integration",
      "Enhanced Operational Efficiency",
      "Advanced Data & Growth Analytics",
      "Scalable Infrastructure for Uninterrupted Growth",
    ],
  },
  {
    id: "enterprise",
    label: "For Large Enterprises",
    popular: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
    tagline: '"Transform legacy systems into agile, innovation powerhouses."',
    desc: "We modernize your digital core with cutting-edge solutions, ensuring security, efficiency, and market leadership.",
    features: [
      "Enterprise-Grade Digital Transformation",
      "Legacy System Modernization & Cloud Migration",
      "AI & ML Integration for Intelligent Operations",
      "Enhanced Security, Compliance, and Global Scalability",
    ],
  },
];

/* ── COMPONENT ── */
export default function IndustryCTA() {
  const ctaView = useInView(0.2);
  const scaleView = useInView(0.1);

  return (
    <div className="relative w-full overflow-hidden ">
      {/* shared bg grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,101,34,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,101,34,0.05)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* ══════════════════════════════════════
          SECTION 1 — CTA Banner
      ══════════════════════════════════════ */}
      <section className="relative px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        {/* radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(242,101,34,0.13)_0%,transparent_70%)]" />
        </div>

        <div
          ref={ctaView.ref}
          className={`
            relative z-10 max-w-[1280px] mx-auto
            rounded-2xl sm:rounded-3xl overflow-hidden
            bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#0a0a0a]
            border border-white/8
            shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(242,101,34,0.1)]
            transition-all duration-700
            ${ctaView.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          {/* inner glow spots */}
          <div className="absolute top-0 left-1/4 w-72 h-48 rounded-full bg-[radial-gradient(ellipse,rgba(242,101,34,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-40 rounded-full bg-[radial-gradient(ellipse,rgba(242,101,34,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 py-14 sm:py-16 lg:py-20 gap-6">
            {/* Badge */}
            <div
              className={`
                flex items-center gap-3 bg-[#1e1e1e] border border-white/10
                rounded-xl px-4 py-2.5 shadow-lg
                transition-all duration-700 delay-150
                ${ctaView.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
              `}
            >
              <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white leading-tight">
                  Industry Leadership
                </div>
                <div className="text-xs text-white/45 leading-tight">
                  500+ Successful Transformations
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2
              className={`
                text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white
                leading-tight tracking-tight max-w-3xl
                transition-all duration-700 delay-200
                ${ctaView.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              Ready to Transform Your Industry?
            </h2>

            {/* Sub */}
            <p
              className={`
                text-sm sm:text-base text-white/50 max-w-lg leading-relaxed
                transition-all duration-700 delay-300
                ${ctaView.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              Industry expertise that drives transformation.{" "}
              <strong className="text-white/80 font-semibold">
                Proven results.
              </strong>
            </p>

            {/* CTA Button */}
            <a
              href="/industry"
              className={`
                group inline-flex items-center gap-3
                bg-[#f26522] hover:bg-[#d94e1a]
                text-white font-bold text-sm sm:text-base
                px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl
                shadow-[0_8px_32px_rgba(242,101,34,0.45)]
                hover:shadow-[0_12px_40px_rgba(242,101,34,0.6)]
                transition-all duration-300 hover:-translate-y-1 active:scale-95
                ${ctaView.visible ? "opacity-100 translate-y-0 delay-[400ms]" : "opacity-0 translate-y-6"}
                transition-all duration-700
              `}
            >
              Explore Industry Solutions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Scale With Ambition
      ══════════════════════════════════════ */}
      <section className="relative px-5 sm:px-8 lg:px-10 pb-20 sm:pb-24">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div
            ref={scaleView.ref}
            className={`
              text-center mb-12 sm:mb-14
              transition-all duration-700
              ${scaleView.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Scale With the{" "}
              <span className="text-[#f26522] relative inline-block">
                Power of Your Ambition
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#f26522] rounded-full" />
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/45 max-w-xl mx-auto leading-relaxed mt-4">
              From emerging startup visionaries to global enterprise titans — we
              engineer technology that merges into your business for a resilient
              and scalable backbone
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {TIERS.map((tier, i) => (
              <TierCard
                key={tier.id}
                tier={tier}
                index={i}
                parentVisible={scaleView.visible}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Tier Card ── */
function TierCard({
  tier,
  index,
  parentVisible,
}: {
  tier: (typeof TIERS)[0];
  index: number;
  parentVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = 150 + index * 120;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex flex-col rounded-2xl overflow-hidden
        border transition-all duration-500 cursor-pointer
        ${
          hovered
            ? "border-[#f26522]/50 shadow-[0_24px_60px_rgba(242,101,34,0.2)] -translate-y-2 bg-white/[0.06]"
            : "border-white/8 bg-white/[0.03]"
        }
        ${parentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        transition-all duration-700
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute top-5 right-5 z-10">
          <span className="bg-[#f26522] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(242,101,34,0.5)] tracking-wide">
            Popular
          </span>
        </div>
      )}

      {/* Top accent bar */}
      <div
        className={`h-[3px] w-full transition-all duration-500 ${hovered ? "bg-[#f26522]" : "bg-transparent"}`}
      />

      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
              transition-all duration-300
              ${hovered ? "bg-[#f26522] shadow-[0_4px_16px_rgba(242,101,34,0.4)]" : "bg-[#1e1e1e] border border-white/10"}
            `}
          >
            {tier.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
            {tier.label}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-sm text-[#f26522] italic font-medium leading-snug">
          {tier.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed">{tier.desc}</p>

        {/* Feature list */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <span
                className={`
                  mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                  transition-colors duration-300
                  ${hovered ? "text-[#f26522]" : "text-[#f26522]/60"}
                `}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-full h-full"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-white/60 leading-snug">{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/industry"
          className={`
            group mt-2 flex items-center justify-center gap-2
            w-full py-3.5 rounded-xl font-bold text-sm
            transition-all duration-300
            ${
              hovered
                ? "bg-[#f26522] text-white shadow-[0_6px_24px_rgba(242,101,34,0.45)] hover:bg-[#d94e1a]"
                : "bg-[#f26522]/10 text-[#f26522] border border-[#f26522]/25 hover:bg-[#f26522]/20"
            }
          `}
        >
          Get Started
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}
