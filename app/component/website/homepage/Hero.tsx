"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

const PHRASES = ["Focused on Growth", "Driving Results", "Chasing Scale"];

/* ── Magnetic cursor hook ── */
function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, sx, sy, onMove, onLeave };
}

/* ── Floating particle canvas ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let W = canvas.offsetWidth,
      H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const N = 90;
    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      phase: number;
    };
    const pts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.55 + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      // Connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(242,101,34,${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        const pulse = Math.sin(t + p.phase) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242,101,34,${p.alpha * pulse})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

/* ── Typewriter ── */
function Typewriter() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [idx, setIdx] = useState(0);
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const full = PHRASES[idx % PHRASES.length];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(full.substring(0, text.length + 1));
        setSpeed(90);
        if (text === full) setTimeout(() => setDeleting(true), 2200);
      } else {
        setText(full.substring(0, text.length - 1));
        setSpeed(40);
        if (text === "") {
          setDeleting(false);
          setIdx((i) => i + 1);
          setSpeed(400);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, speed]);

  return (
    <span className="typewriter-wrap pb-2">
      {text}
      <motion.span
        className="cursor-bar pb-2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

/* ── Stat counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = to / 60;
    const t = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(t);
      } else setVal(Math.floor(start));
    }, 22);
    return () => clearInterval(t);
  }, [to]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

const STATS = [
  { value: 500, suffix: "+", label: "Brands Scaled" },
  { value: 97, suffix: "%", label: "Retention Rate" },
  { value: 24, suffix: "+", label: "Years Mastery" },
  { value: 10, suffix: "x", label: "Avg ROI" },
];

export default function Hero() {
  const magnet = useMagnet(0.3);
  const router = useRouter();

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #050509;
        }

        /* ── Canvas ── */
        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* ── Video ── */
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-video-wrap video {
          width: 100%; height: 100%; object-fit: cover;
          transform: scale(1.08);
          filter: saturate(0.6) brightness(0.28);
        }
        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(242,101,34,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 20% 30%, rgba(242,101,34,0.06) 0%, transparent 60%),
            linear-gradient(180deg, rgba(5,5,9,0.35) 0%, rgba(5,5,9,0.15) 40%, rgba(5,5,9,0.70) 100%);
        }

        /* ── Ambient orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 2;
          animation: orbDrift 12s ease-in-out infinite alternate;
        }
        .orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(242,101,34,0.18) 0%, transparent 70%);
          top: -160px; left: -120px;
          animation-duration: 14s;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 70%);
          bottom: -100px; right: -80px;
          animation-duration: 10s;
          animation-delay: -5s;
        }
        .orb-3 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(255,160,80,0.10) 0%, transparent 70%);
          top: 50%; left: 55%;
          animation-duration: 18s;
          animation-delay: -9s;
        }
        @keyframes orbDrift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.12); }
        }

        /* ── Horizontal scan line ── */
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(242,101,34,0.4) 50%, transparent 100%);
          z-index: 3;
          animation: scanMove 8s linear infinite;
        }
        @keyframes scanMove {
          0%   { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.3; }
          100% { top: 100%; opacity: 0; }
        }

        /* ── Vignette ── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── Noise grain ── */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.028;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 220px 220px;
        }

        /* ── Content ── */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          max-width: 1000px;
          width: 100%;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px 6px 8px;
          border-radius: 100px;
          border: 1px solid rgba(242,101,34,0.30);
          background: rgba(242,101,34,0.08);
          backdrop-filter: blur(12px);
          margin-bottom: 32px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }
        .badge-dot {
          width: 22px; height: 22px;
          background: var(--brand-orange);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px;
          box-shadow: 0 0 10px rgba(242,101,34,0.7);
        }
        .badge-pulse {
          width: 6px; height: 6px;
          background: #fff;
          border-radius: 50%;
          animation: dotPulse 1.8s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { transform: scale(1); opacity:1; }
          50%     { transform: scale(1.5); opacity:0.7; }
        }

        /* H1 */
        .hero-h1 {
          font-size: clamp(2.6rem, 6.5vw, 3.0rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 24px;
        }
        .h1-line { display: block; }
        .h1-accent { display: block; color: transparent; }

        /* Typewriter */
        .typewriter-wrap {
          display: inline-block;
          background: linear-gradient(135deg, #f26522 0%, #ff9b4e 50%, #f26522 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 3s linear infinite;
          position: relative;
        }
        @keyframes shimmerText {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .cursor-bar {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #f26522;
          margin-left: 3px;
          vertical-align: middle;
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(242,101,34,0.8);
        }

        /* Sub */
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.18rem);
          color: rgba(255,255,255,0.50);
          line-height: 1.75;
          max-width: 660px;
          margin: 0 auto 44px;
          font-weight: 300;
        }

        /* CTA row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        /* Primary button */
        .btn-primary-hero {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 38px;
          background: var(--brand-orange);
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          border-radius: 60px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          box-shadow:
            0 0 0 0 rgba(242,101,34,0.5),
            0 8px 32px rgba(242,101,34,0.40);
          transition: box-shadow 0.4s ease, transform 0.3s ease;
        }
        .btn-primary-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          border-radius: inherit;
        }
        .btn-primary-hero::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 62px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          pointer-events: none;
        }
        .btn-primary-hero:hover {
          box-shadow: 0 0 0 12px rgba(242,101,34,0.12), 0 12px 40px rgba(242,101,34,0.55);
          transform: translateY(-2px);
        }
        .btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px; height: 22px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          font-size: 12px;
          transition: transform 0.3s ease;
        }
        .btn-primary-hero:hover .btn-arrow { transform: translateX(4px); }

        /* Ghost button */
        .btn-ghost-hero {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,0.75);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          background: none;
          border: none;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        .btn-ghost-hero:hover { color: #fff; }
        .play-ring {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          position: relative;
          transition: border-color 0.3s ease;
          backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.04);
        }
        .btn-ghost-hero:hover .play-ring { border-color: var(--brand-orange); }
        .play-ring::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1px dashed rgba(242,101,34,0.25);
          animation: spinDash 10s linear infinite;
        }
        @keyframes spinDash { to { transform: rotate(360deg); } }

        /* Stats bar */
        .stats-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 4px;
        }
        .stat-cell {
          flex: 1;
          padding: 18px 12px;
          text-align: center;
          position: relative;
          transition: background 0.3s ease;
        }
        .stat-cell:hover { background: rgba(242,101,34,0.06); }
        .stat-cell + .stat-cell::before {
          content: '';
          position: absolute;
          left: 0; top: 25%; bottom: 25%;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }
        .stat-val {
          font-weight: 800;
          font-size: 1.5rem;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .stat-val span { color: var(--brand-orange); }
        .stat-lbl {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* Scroll indicator */
        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.25);
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .scroll-track {
          width: 24px; height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          display: flex;
          justify-content: center;
          padding: 6px;
        }
        .scroll-thumb {
          width: 4px;
          border-radius: 2px;
          background: var(--brand-orange);
          box-shadow: 0 0 8px rgba(242,101,34,0.6);
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%   { height: 6px; opacity:1; transform:translateY(0); }
          60%  { height: 10px; opacity:0.5; transform:translateY(8px); }
          100% { height: 6px; opacity:0; transform:translateY(16px); }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .hero-badge { font-size: 9px; letter-spacing: 0.15em; }
          .hero-cta-row { gap: 14px; }
          .stats-bar { border-radius: 14px; }
          .stat-val { font-size: 1.2rem; }
        }
      `}</style>

      <section className="hero-section">
        {/* Video */}
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline>
            <source src="./hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        {/* Ambient effects */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="scan-line" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
        <ParticleField />

        {/* ── CONTENT ── */}
        <div className="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-badge pt-14">
              <div className="badge-dot">
                <div className="badge-pulse" />
              </div>
              Global innovation Excellence
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="h1-line">Built for Brands That Want More</span>
            <span className="h1-accent">
              <Typewriter />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            MarketRixa brings together performance marketing and creative
            intelligence to drive consistent growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.button
              onClick={() => router.push("/contact")}
              ref={magnet.ref}
              onMouseMove={magnet.onMove}
              onMouseLeave={magnet.onLeave}
              style={{ x: magnet.sx, y: magnet.sy }}
              className="btn-primary-hero"
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </motion.button>

            {/* <motion.button
              className="btn-ghost-hero"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="play-ring">
                <Play size={14} fill="#f26522" stroke="none" />
              </span>
              Watch Our Stories
            </motion.button> */}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="scroll-track">
            <div className="scroll-thumb" />
          </div>
          Scroll
        </motion.div>
      </section>
    </>
  );
}
