"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────
   IMAGE SIZE RECOMMENDATION (for devs):
   ► Card image: 600 × 960 px  (portrait 5:8 ratio)
   ► Format: WebP, compressed to ~80–120 KB each
   ► Focal point: keep subject in upper 60% — bottom is overlaid
   ► Background hero: 1920 × 1080 px, WebP ~200 KB
───────────────────────────────────────── */

const SERVICES = [
  {
    id: "web",
    title: "Website\nDevelopment",
    shortLabel: "Web Dev",
    slug: "/services/web-development",
    // Replace with your actual image paths:
    image: "/services/web-development.webp",
    // Fallback gradient shown until real image loads:
    gradient: "linear-gradient(160deg, #0f1a2e 0%, #1a2d1a 60%, #0a0f1e 100%)",
  },
  {
    id: "smm",
    title: "Social Media\nMarketing",
    shortLabel: "SMM",
    slug: "/services/social-media",
    image: "/services/social-media.webp",
    gradient: "linear-gradient(160deg, #1a0f0a 0%, #2d1a0f 60%, #1a0a0f 100%)",
  },
  {
    id: "seo",
    title: "SEO &\nGrowth",
    shortLabel: "SEO",
    slug: "/services/seo",
    image: "/services/seo.webp",
    gradient: "linear-gradient(160deg, #0a1a0f 0%, #1a2a10 60%, #0f1a0a 100%)",
  },
  {
    id: "design",
    title: "Graphic\nDesign",
    shortLabel: "Design",
    slug: "/services/design",
    image: "/services/graphic-design.webp",
    gradient: "linear-gradient(160deg, #1a0a1a 0%, #2a0f2a 60%, #0f0a1a 100%)",
  },
  {
    id: "video",
    title: "Video\nProduction",
    shortLabel: "Video",
    slug: "/services/video",
    image: "/services/video-production.webp",
    gradient: "linear-gradient(160deg, #1a1a0a 0%, #2a1f0a 60%, #0f0f1a 100%)",
  },
  {
    id: "content",
    title: "Content\nMarketing",
    shortLabel: "Content",
    slug: "/services/content",
    image: "/services/content-marketing.webp",
    gradient: "linear-gradient(160deg, #0a0f1a 0%, #101a2a 60%, #0a1a15 100%)",
  },
];

const TOTAL = SERVICES.length;

/* ── Utility: wrap index ── */
const wrap = (n: number, max: number) => ((n % max) + max) % max;

/* ── Single card with 3-D perspective tilt on hover ── */
function ServiceCard({
  service,
  stackPos, // 0 = front, 1 = mid, 2 = back-left, etc.
  total,
  onClick,
  direction,
}: {
  service: (typeof SERVICES)[0];
  stackPos: number;
  total: number;
  onClick: () => void;
  direction: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(my, { stiffness: 180, damping: 22 });
  const ry = useSpring(mx, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stackPos !== 0) return;
    const el = cardRef.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px * 14);
    my.set(-py * 10);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  /* Stack visual: each back card is offset, rotated, scaled */
  const isFront = stackPos === 0;
  const offsetX = stackPos * -60;
  const offsetY = stackPos * 10;
  const rotate = stackPos * -8;
  const scale = 1 - stackPos * 0.06;
  const zIndex = total - stackPos;
  const opacity = 1 - stackPos * 0.18;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={isFront ? undefined : onClick}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex,
        x: offsetX,
        y: offsetY,
        rotateY: isFront ? ry : rotate,
        rotateX: isFront ? rx : 0,
        scale,
        opacity,
        transformOrigin: "center bottom",
        transformStyle: "preserve-3d",
        cursor: isFront ? "default" : "pointer",
      }}
      animate={{
        x: offsetX,
        y: offsetY,
        rotate: isFront ? 0 : rotate,
        scale,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 1.1,
      }}
      className="sc-card"
    >
      {/* Background image + gradient overlay */}
      <div className="sc-card-bg" style={{ background: service.gradient }}>
        <img
          src={service.image}
          alt={service.shortLabel}
          className="sc-card-img"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Inner border frame (like reference design) */}
      <div className="sc-frame" />

      {/* Title */}
      <div className="sc-title-wrap">
        <h3 className="sc-title">{service.title}</h3>
      </div>

      {/* Discover button — only visible on front card */}
      {isFront && (
        <div className="sc-cta-wrap">
          <Link href={service.slug} className="sc-cta">
            DISCOVER
          </Link>
        </div>
      )}

      {/* Back-card label */}
      {!isFront && <div className="sc-back-label">{service.shortLabel}</div>}
    </motion.div>
  );
}

export default function ServiceCards() {
  const [frontIdx, setFrontIdx] = useState(0);
  const [dir, setDir] = useState(1); // 1 = left-to-right, -1 = right-to-left
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  /* Auto-rotate: alternates direction L→R then R→L */
  const rotateDir = useRef(1);

  const advance = useCallback((d: number) => {
    setDir(d);
    setFrontIdx((prev) => wrap(prev + d, TOTAL));
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      advance(rotateDir.current);
      rotateDir.current *= -1; // alternate direction each tick
    }, 3000);
  }, [advance]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  /* Touch swipe */
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) {
      const d = dx < 0 ? 1 : -1;
      advance(d);
      startAuto();
    }
    touchStart.current = null;
  };

  /* Build visible stack: front card + 2 behind it */
  const VISIBLE = 3;
  const stack = Array.from({ length: VISIBLE }, (_, i) => ({
    svc: SERVICES[wrap(frontIdx - i, TOTAL)],
    pos: i,
  }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .sc-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 24px;

          /* Replace this with your hero background image: */
          background: linear-gradient(135deg, #0b0f1a 0%, #1a1410 35%, #0f172a 65%, #1a1410 100%);
        }

        /* Section-wide bg image (add your own via inline style or CSS) */
        .sc-bg-image {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          /* background-image: url('/your-bg.webp'); */
          opacity: 0.18;
          z-index: 0;
        }
        .sc-bg-overlay {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(242,101,34,0.06) 0%, transparent 70%),
            linear-gradient(180deg, rgba(5,5,9,0.55) 0%, rgba(5,5,9,0.30) 50%, rgba(5,5,9,0.65) 100%);
          z-index: 1;
        }
        .sc-grain {
          position: absolute; inset: 0; z-index: 2;
          opacity: 0.03;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        /* Content wrapper */
        .sc-wrap {
          position: relative; z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 72px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Section header */
        .sc-header { text-align: center; }
        .sc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #f26522;
          margin-bottom: 16px;
        }
        .sc-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #f26522;
          box-shadow: 0 0 8px rgba(242,101,34,0.9);
          animation: scDotPulse 2s ease-in-out infinite;
        }
        @keyframes scDotPulse {
          0%,100% { transform:scale(1); opacity:1; }
          50% { transform:scale(1.6); opacity:0.5; }
        }
        .sc-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .sc-h2 em {
          font-style: italic;
          color: #f26522;
        }
        .sc-h2-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.88rem, 1.6vw, 1rem);
          color: rgba(255,255,255,0.38);
          max-width: 480px; margin: 0 auto;
          line-height: 1.7;
        }

        /* Stage */
        .sc-stage-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          width: 100%;
        }

        /* Perspective container */
        .sc-stage {
          position: relative;
          width: min(340px, 80vw);
          height: min(560px, 75vw);
          perspective: 1200px;
          flex-shrink: 0;
        }

        /* Individual card */
        .sc-card {
          border-radius: 18px;
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.07);
          user-select: none;
          will-change: transform;
        }

        /* Card background */
        .sc-card-bg {
          position: absolute; inset: 0;
          border-radius: inherit;
        }
        .sc-card-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: inherit;
          transition: transform 0.8s ease;
        }
        .sc-card:hover .sc-card-img { transform: scale(1.04); }

        /* Dark gradient over image */
        .sc-card::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          background:
            linear-gradient(180deg,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0.15) 40%,
              rgba(0,0,0,0.72) 80%,
              rgba(0,0,0,0.88) 100%);
          z-index: 1;
        }

        /* Inner border frame — the signature detail */
        .sc-frame {
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 8px;
          z-index: 2;
          pointer-events: none;
          transition: border-color 0.3s ease;
        }
        .sc-card:hover .sc-frame { border-color: rgba(242,101,34,0.50); }

        /* Title */
        .sc-title-wrap {
          position: absolute;
          top: 36px; left: 0; right: 0;
          text-align: center;
          z-index: 3;
          padding: 0 24px;
        }
        .sc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: 0.01em;
          white-space: pre-line;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        /* CTA */
        .sc-cta-wrap {
          position: absolute;
          bottom: 36px; left: 0; right: 0;
          display: flex;
          justify-content: center;
          z-index: 3;
          padding: 0 32px;
        }
        .sc-cta {
          display: block;
          width: 100%;
          padding: 14px 24px;
          background: rgba(255,255,255,0.92);
          color: #000;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .sc-cta:hover {
          background: #f26522;
          color: #fff;
          letter-spacing: 0.35em;
          box-shadow: 0 8px 28px rgba(242,101,34,0.45);
        }

        /* Back-card label */
        .sc-back-label {
          position: absolute;
          bottom: 40px; left: 0; right: 0;
          text-align: center;
          z-index: 3;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.06em;
          pointer-events: none;
        }

        /* Side info panel */
        .sc-info {
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 320px;
        }
        .sc-service-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sc-service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.25s ease;
        }
        .sc-service-item:hover { border-color: rgba(242,101,34,0.30); }
        .sc-item-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.20);
          width: 22px;
          flex-shrink: 0;
          letter-spacing: 0.08em;
        }
        .sc-item-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          flex: 1;
          transition: color 0.25s ease;
          letter-spacing: 0.02em;
        }
        .sc-service-item:hover .sc-item-label { color: rgba(255,255,255,0.85); }
        .sc-item-active .sc-item-label { color: #fff !important; }
        .sc-item-active .sc-item-num { color: #f26522 !important; }
        .sc-item-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .sc-item-active .sc-item-dot {
          background: #f26522;
          border-color: #f26522;
          box-shadow: 0 0 8px rgba(242,101,34,0.7);
        }

        /* Navigation dots */
        .sc-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
        }
        .sc-nav-dot {
          width: 28px; height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .sc-nav-dot-active {
          background: #f26522 !important;
          width: 44px;
          box-shadow: 0 0 10px rgba(242,101,34,0.5);
        }

        /* Arrows */
        .sc-arrows {
          display: flex; gap: 10px;
        }
        .sc-arrow {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.50);
          font-size: 1rem;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
        }
        .sc-arrow:hover {
          background: #f26522;
          border-color: #f26522;
          color: #fff;
          box-shadow: 0 6px 20px rgba(242,101,34,0.40);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .sc-stage-wrap { flex-direction: column; gap: 40px; }
          .sc-info { max-width: 100%; width: 100%; align-items: center; text-align: center; }
          .sc-service-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .sc-service-item { flex-direction: column; gap: 4px; border-bottom: none; padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); align-items: center; }
          .sc-item-num { display: none; }
          .sc-item-dot { display: none; }
          .sc-item-label { font-size: 0.75rem; text-align: center; }
          .sc-item-active { border-color: rgba(242,101,34,0.40) !important; background: rgba(242,101,34,0.06) !important; }
          .sc-stage { width: min(300px, 78vw); height: min(490px, 70vw); }
        }
        @media (max-width: 480px) {
          .sc-section { padding: 60px 18px; }
          .sc-service-list { grid-template-columns: repeat(2,1fr); }
          .sc-stage { width: min(270px, 82vw); height: min(440px, 75vw); }
        }
      `}</style>

      <section
        className="sc-section"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Background layers */}
        <div className="sc-bg-image" />
        <div className="sc-bg-overlay" />
        <div className="sc-grain" />

        <div className="sc-wrap">
          {/* Header */}
          <motion.div
            className="sc-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sc-eyebrow">
              <span className="sc-eyebrow-dot" />
              Our Expertise
            </div>
            <h2 className="sc-h2">
              Services That <em>Move</em>
              <br />
              Your Brand Forward
            </h2>
            <p className="sc-h2-sub">
              Tap a card to explore — or let the showcase do the talking.
            </p>
          </motion.div>

          {/* Stage + Info */}
          <div className="sc-stage-wrap">
            {/* Card stack */}
            <div
              className="sc-stage"
              onMouseEnter={() => {
                if (autoRef.current) clearInterval(autoRef.current);
              }}
              onMouseLeave={() => startAuto()}
            >
              {[...stack].reverse().map(({ svc, pos }) => (
                <ServiceCard
                  key={`${svc.id}-${pos}`}
                  service={svc}
                  stackPos={pos}
                  total={TOTAL}
                  onClick={() => {
                    advance(dir);
                    startAuto();
                  }}
                  direction={dir}
                />
              ))}
            </div>

            {/* Side panel */}
            <motion.div
              className="sc-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Service list */}
              <div className="sc-service-list">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.id}
                    className={`sc-service-item${i === frontIdx ? " sc-item-active" : ""}`}
                    onClick={() => {
                      const d = i > frontIdx ? 1 : -1;
                      setDir(d);
                      setFrontIdx(i);
                      startAuto();
                    }}
                  >
                    <span className="sc-item-num">0{i + 1}</span>
                    <span className="sc-item-label">{s.shortLabel}</span>
                    <span className="sc-item-dot" />
                  </div>
                ))}
              </div>

              {/* Navigation dots + arrows */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div className="sc-nav">
                  {SERVICES.map((s, i) => (
                    <div
                      key={s.id}
                      className={`sc-nav-dot${i === frontIdx ? " sc-nav-dot-active" : ""}`}
                      onClick={() => {
                        setFrontIdx(i);
                        startAuto();
                      }}
                    />
                  ))}
                </div>
                <div className="sc-arrows">
                  <button
                    className="sc-arrow"
                    onClick={() => {
                      advance(-1);
                      startAuto();
                    }}
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <button
                    className="sc-arrow"
                    onClick={() => {
                      advance(1);
                      startAuto();
                    }}
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
