"use client";

import { useState } from "react";

const FEATURES = [
  {
    id: 1,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Business-First Thinking",
    desc: "Your P&L = our KPI. Every solution directly impacts your bottom line.",
    tagline: "Strategic planning meets tactical execution",
  },
  {
    id: 2,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-6 h-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Full-Spectrum Expertise",
    desc: "500+ specialists across 4 global hubs delivering comprehensive solutions.",
    tagline: "From strategy to implementation",
  },
  {
    id: 3,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="w-6 h-6"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
      </svg>
    ),
    title: "Human-Centered Delivery",
    desc: "No overengineering. Pure ROI. Solutions built for real business needs.",
    tagline: "Efficiency without complexity",
  },
];

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    iconColor: "text-[#f26522]",
    value: "95%",
    label: "On-Time Delivery",
    sub: "for brands like IKEA and INSEE",
    checkIcon: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    iconColor: "text-[#f26522]",
    value: "100+",
    label: "Global Brands",
    sub: "trust our expertise",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    iconColor: "text-[#f26522]",
    value: "30+",
    label: "Markets",
    sub: "worldwide presence",
  },
];

export default function BusinessEdge() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#1a1410] to-[#0f172a]">
      {/* bg grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,101,34,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,101,34,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* glow */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(242,101,34,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* ── Section Title ── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            We Bring Your{" "}
            <span className="text-[#f26522] relative inline-block">
              Business Edge
              <span className="absolute bottom-0.5 left-0 w-full h-[3px] bg-[#f26522] opacity-30 rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Our{" "}
            <strong className="text-white/75 font-semibold">
              95% timely project delivery
            </strong>{" "}
            and quality-driven outcome give you an edge that no competitor has.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — Feature list */}
          <div className="flex flex-col gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.id}
                onMouseEnter={() => setHovered(f.id)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  group relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl border cursor-pointer
                  transition-all duration-300
                  ${
                    hovered === f.id
                      ? "border-[#f26522]/40 bg-[rgba(242,101,34,0.06)] shadow-[0_16px_40px_rgba(242,101,34,0.12)] -translate-y-1"
                      : "border-white/8 bg-white/[0.03]"
                  }
                `}
              >
                {/* icon */}
                <div
                  className={`
                  flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
                  transition-all duration-300
                  ${hovered === f.id ? "bg-[#f26522] text-white shadow-[0_4px_16px_rgba(242,101,34,0.4)]" : "bg-white/8 text-white/60"}
                `}
                >
                  {f.icon}
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-[1.05rem] font-bold text-white mb-1.5 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-1.5">
                    {f.desc}
                  </p>
                  <p className="text-xs text-[#f26522]/70 italic font-medium">
                    {f.tagline}
                  </p>
                </div>

                {/* arrow */}
                <div
                  className={`
                  flex-shrink-0 self-center transition-all duration-300
                  ${hovered === f.id ? "text-[#f26522] translate-x-1" : "text-white/20"}
                `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Image + Stats */}
          <div className="relative">
            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/10">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-2 shadow-lg">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    className="w-3 h-3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-xs font-700 text-gray-800 font-semibold whitespace-nowrap">
                  Excellence Delivered
                </span>
              </div>

              {/* Team image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team working together"
                className="w-full h-[340px] sm:h-[380px] lg:h-[340px] xl:h-[380px] object-cover"
              />

              {/* Dark gradient overlay at bottom for stats */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Stats row — overlapping bottom of image */}
            <div className="relative -mt-1 grid grid-cols-3 gap-0 rounded-b-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.3)] border border-t-0 border-white/10">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`
                    group flex flex-col items-center text-center px-3 py-5 sm:py-6
                    bg-white/[0.97] backdrop-blur-md
                    transition-all duration-250 hover:bg-white cursor-default
                    ${i < STATS.length - 1 ? "border-r border-[#f26522]/15" : ""}
                  `}
                >
                  <span
                    className={`${s.iconColor} mb-2 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {s.icon}
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#1a0a00] leading-none mb-1">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-700 text-[#1a0a00] font-semibold leading-tight">
                    {s.label}
                  </span>
                  <span className="text-[10px] text-[#a07050] mt-0.5 leading-tight">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative orange corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#f26522]/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-[#f26522]/08 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
