"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

type Service = {
  id: number;
  title: string;
  label: string;
  description: string;
  bgImage: string;
  href: string;
};

// ─── Replace these with your real images & copy ───────────────────────────────
const SERVICES: Service[] = [
  {
    id: 1,
    title: "Website\nDevelopment",
    label: "Web Dev",
    description:
      "Custom, high-performance websites designed to elevate your brand and drive measurable business growth.",
    bgImage: "/service-card.png",
    href: "/services/web-development-service",
  },
  {
    id: 2,
    title: "Social Media\nMarketing",
    label: "SMM",
    description:
      "Strategic social media campaigns that boost engagement, build brand presence, and convert audiences into loyal customers.",
    bgImage:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1170",
    href: "/services/community-building",
  },
  {
    id: 3,
    title: "SEO &\nGrowth",
    label: "SEO",
    description:
      "Data-driven SEO strategies to improve rankings, increase organic traffic, and accelerate long-term digital growth.",
    bgImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672",
    href: "/services/brand-narratives",
  },
  {
    id: 4,
    title: "Performance Marketing",
    label: "Design",
    description:
      "Creative and visually compelling designs that communicate your brand identity with clarity and impact.",
    bgImage:
      "https://images.unsplash.com/photo-1770970716469-4b32abc0a577?q=80&w=880",
    href: "/services/creative-direction",
  },
  {
    id: 5,
    title: "Video\nProduction",
    label: "Video",
    description:
      "High-quality video content that tells your story, captures attention, and drives engagement across platforms.",
    bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    href: "/services/video-production",
  },
  //   {
  //     id: 6,
  //     title: "Content\nMarketing",
  //     label: "Content",
  //     description:
  //       "Strategic content creation that builds authority, engages audiences, and fuels your brand’s digital presence.",
  //     bgImage: "https://images.unsplash.com/photo-1504691342899-4d92b50853e1",
  //     href: "/services/video-production",
  //   },
];

// Section background image — replace with your actual path
const SECTION_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172";

// ─────────────────────────────────────────────────────────────────────────────

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function ServiceCardCarousel() {
  const total = SERVICES.length;
  const [active, setActive] = useState(1); // Tribe (center)
  const [flipped, setFlipped] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance
  const startAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) setActive((a) => mod(a + 1, total));
    }, 1100);
  }, [paused, total]);

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAuto, paused]);

  const go = (dir: 1 | -1) => {
    setActive((a) => mod(a + dir, total));
    setFlipped(null);
  };

  // Touch / mouse drag
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStart.current = x;
    setIsDragging(true);
  };
  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart.current === null) return;
    const x = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const delta = dragStart.current - x;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    dragStart.current = null;
    setIsDragging(false);
  };

  // Card position relative to active
  const getOffset = (idx: number) => mod(idx - active + total, total);

  // Map offset → visual properties
  const getCardStyle = (offset: number) => {
    // 0 = center, 1 = right, total-1 = left, etc.
    const positions: Record<
      number,
      {
        x: string;
        scale: number;
        z: number;
        opacity: number;
        rotateY: string;
        blur: string;
      }
    > = {
      0: {
        x: "0%",
        scale: 1,
        z: 40,
        opacity: 1,
        rotateY: "0deg",
        blur: "0px",
      },
      1: {
        x: "68%",
        scale: 0.82,
        z: 20,
        opacity: 0.75,
        rotateY: "-28deg",
        blur: "0px",
      },
      [total - 1]: {
        x: "-68%",
        scale: 0.82,
        z: 20,
        opacity: 0.75,
        rotateY: "28deg",
        blur: "0px",
      },
      2: {
        x: "120%",
        scale: 0.65,
        z: 5,
        opacity: 0.25,
        rotateY: "-45deg",
        blur: "2px",
      },
      [total - 2]: {
        x: "-120%",
        scale: 0.65,
        z: 5,
        opacity: 0.25,
        rotateY: "45deg",
        blur: "2px",
      },
    };

    return (
      positions[offset] ?? {
        x: "0%",
        scale: 0,
        z: 0,
        opacity: 0,
        rotateY: "0deg",
        blur: "0px",
      }
    );
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
      style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
    >
      {/* ── Section background ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SECTION_BG})` }}
      />
      {/* Dark overlay matching the design */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,#0b0f1a 0%,#1a1410 35%,#0f172a 65%,#1a1410 100%)",
          opacity: 0.82,
        }}
      />

      {/* ── Section heading ── */}
      <div className="relative z-10 text-center mb-10 px-4">
        <p
          className="text-xs uppercase tracking-[0.35em] mb-2"
          style={{ color: "var(--brand-orange)" }}
        >
          What We Do
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
        >
          Our Services
        </h2>
      </div>

      {/* ── 3-D Carousel stage ── */}
      <div
        className="relative z-10 w-full flex items-center justify-center select-none"
        style={{ perspective: "1100px", height: "clamp(460px,72vw,620px)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
      >
        {SERVICES.map((svc, idx) => {
          const offset = getOffset(idx);
          const style = getCardStyle(offset);
          const isCenter = offset === 0;
          const isFlipped = flipped === idx;

          return (
            <div
              key={svc.id}
              className="absolute"
              style={{
                width: "clamp(220px,28vw,320px)",
                height: "clamp(340px,44vw,500px)",
                transform: `translateX(${style.x}) scale(${style.scale}) rotateY(${style.rotateY})`,
                zIndex: style.z,
                opacity: style.opacity,
                filter: style.blur !== "0px" ? `blur(${style.blur})` : "none",
                transition: isDragging
                  ? "none"
                  : "transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.65s ease, filter 0.65s ease",
                transformStyle: "preserve-3d",
                cursor: isCenter ? "pointer" : "pointer",
              }}
              onClick={() => {
                if (!isDragging) {
                  if (isCenter) setFlipped(isFlipped ? null : idx);
                  else setActive(idx);
                }
              }}
            >
              {/* Inner flip container */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  borderRadius: "16px",
                  boxShadow: isCenter
                    ? "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)"
                    : "0 16px 40px rgba(0,0,0,0.4)",
                }}
              >
                {/* ── Front face ── */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* BG image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${svc.bgImage})`,
                      transform: isCenter ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  {/* Border glow on center */}
                  {isCenter && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        border: "1.5px solid rgba(255,255,255,0.22)",
                        boxShadow: "inset 0 0 30px rgba(242,101,34,0.08)",
                      }}
                    />
                  )}
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
                    {/* Title */}
                    <h3
                      className="text-white text-center drop-shadow-lg"
                      style={{
                        fontFamily: "var(--font-outfit, serif)",
                        fontSize: "clamp(1.6rem,4vw,2.4rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                      }}
                    >
                      {svc.title}
                    </h3>
                    {/* Discover button */}
                    <button
                      className="group flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
                      style={{
                        background: isCenter
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.80)",
                        color: "#111",
                        letterSpacing: "0.18em",
                        border: "none",
                        boxShadow: isCenter
                          ? "0 4px 20px rgba(242,101,34,0.25)"
                          : "none",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlipped(isFlipped ? null : idx);
                      }}
                    >
                      Discover
                      <span
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1 cursor-pointer"
                        style={{ color: "var(--brand-orange)" }}
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* ── Back face ── */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 gap-5"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background:
                      "linear-gradient(145deg, #1a1410 0%, #0b0f1a 100%)",
                    border: "1.5px solid rgba(242,101,34,0.25)",
                  }}
                >
                  {/* Orange accent line */}
                  <div
                    className="w-10 h-0.5 rounded-full"
                    style={{ background: "var(--brand-orange)" }}
                  />
                  <h3
                    className="text-white text-center"
                    style={{
                      fontFamily: "var(--font-outfit, serif)",
                      fontSize: "clamp(1.4rem,3vw,1.9rem)",
                      fontWeight: 700,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-center text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {svc.label}
                  </p>
                  <p
                    className="text-center text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {svc.description}
                  </p>
                  <Link
                    href={svc.href}
                    className="mt-2 px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:opacity-80"
                    style={{
                      background: "var(--brand-orange)",
                      color: "#fff",
                      border: "none",
                    }}
                    // onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                  </Link>
                  {/* Flip back hint */}
                  <button
                    className="text-xs mt-1 opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
                    style={{
                      color: "#fff",
                      background: "none",
                      border: "none",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlipped(null);
                    }}
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Dot indicators ── */}
      <div className="relative z-10 flex gap-2.5 mt-8">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActive(idx);
              setFlipped(null);
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === idx ? "28px" : "8px",
              height: "8px",
              background:
                active === idx
                  ? "var(--brand-orange)"
                  : "rgba(255,255,255,0.3)",
              border: "none",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Arrow controls ── */}
      <div className="relative z-10 flex gap-5 mt-6">
        {(["←", "→"] as const).map((arrow, i) => (
          <button
            key={arrow}
            onClick={() => go(i === 0 ? -1 : 1)}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "1.1rem",
              backdropFilter: "blur(8px)",
            }}
          >
            {arrow}
          </button>
        ))}
      </div>

      {/* Touch hint */}
      <p
        className="relative z-10 mt-4 text-xs"
        style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.12em" }}
      >
        Drag or tap to explore
      </p>
    </section>
  );
}
