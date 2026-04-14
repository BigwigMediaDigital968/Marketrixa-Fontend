"use client";

import { useEffect, useRef, useState } from "react";
import Popup from "../Popup";

const TITLES = ["Digital Innovation", "Growth Strategy", "Brand Elevation"];

const STATS = [
  { icon: "◎", value: "1000+", label: "Projects Delivered" },
  { icon: "◈", value: "24+", label: "Years Experience" },
  { icon: "◉", value: "97%", label: "Client Retention" },
  { icon: "⚡", value: "100%", label: "Global Reach" },
];

const BRANDS = [
  "TVS",
  "RELAXO",
  "DTDC",
  "Panasonic",
  "Motherson",
  "Ecom Express",
];

export default function ServiceHero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Title cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const target = 500;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // Animated canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ["#f26522", "#ff8c00", "#ffd1a8", "#fff0e0", "#f26522"];

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 180 + 40,
        alpha: Math.random() * 0.08 + 0.03,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Base gradient
      const grad = ctx.createRadialGradient(
        width * 0.3,
        height * 0.3,
        0,
        width * 0.7,
        height * 0.7,
        width * 0.9,
      );
      grad.addColorStop(0, "#fff7f0");
      grad.addColorStop(0.4, "#fde8d4");
      grad.addColorStop(0.75, "#f9d2b0");
      grad.addColorStop(1, "#f4bc8a");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Diagonal light beam
      const beamGrad = ctx.createLinearGradient(0, 0, width, height);
      beamGrad.addColorStop(0, "rgba(255,255,255,0.18)");
      beamGrad.addColorStop(0.5, "rgba(255,255,255,0.04)");
      beamGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.save();
      ctx.rotate(-0.18);
      ctx.fillStyle = beamGrad;
      ctx.fillRect(-200, -100, width * 0.55, height * 2.5);
      ctx.restore();

      // Glowing blobs
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;

        const rg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        rg.addColorStop(0, `rgba(242,101,34,${p.alpha * 1.6})`);
        rg.addColorStop(0.5, `rgba(255,140,0,${p.alpha * 0.8})`);
        rg.addColorStop(1, `rgba(249,183,120,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = rg;
        ctx.fill();
      });

      // Fine grid overlay
      ctx.strokeStyle = "rgba(242,101,34,0.055)";
      ctx.lineWidth = 0.8;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="hero-root">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-stripe" />

        {/* ── MAIN HERO ── */}
        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="badge">
              <span>✦</span> Experience
            </div>

            <div className="title-box">
              <span className={`title-text${animating ? " hide" : ""}`}>
                {TITLES[titleIndex]}
              </span>
            </div>

            <p className="hero-tagline">
              Business-impacting problems need business-centric solutions. We
              craft data-driven strategies that accelerate growth, amplify
              reach, and build brands that matter.
            </p>

            <div className="hero-social-proof">
              <div className="avatar-stack">
                {["A", "B", "C"].map((l, i) => (
                  <div
                    className="avatar"
                    key={i}
                    style={{
                      background:
                        i === 1
                          ? "linear-gradient(135deg,#ff6b00,#f26522)"
                          : i === 2
                            ? "linear-gradient(135deg,#c94d00,#f26522)"
                            : undefined,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="plus-dot">+</div>
              <div className="counter-block">
                <div className="counter-num">{count}+</div>
                <div className="counter-label">Digital Transformations</div>
              </div>
            </div>

            <a href="/contact" className="cta-btn">
              Connect with Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="orbit-ring">
              <div className="orbit-dot" />
            </div>

            <div className="device-card">
              <div className="device-header">
                <div className="device-tag">Digital Transformation</div>
                <div className="device-title">
                  Build to Engage.
                  <br />
                  Engineer to Perform.
                </div>
                <p className="device-sub">
                  From data-powered automation to powerful mobile apps — we
                  create digital experiences that captivate users and deliver
                  measurable results.
                </p>
                {/* <button
                  onClick={() => setShowPopup(true)}
                  className="device-cta cursor-pointer"
                >
                  Let's Build Together →
                </button> */}
              </div>
              <div className="device-metrics">
                {STATS.map((s) => (
                  <div className="metric-pill" key={s.label}>
                    <span className="metric-icon">{s.icon}</span>
                    <div className="metric-info">
                      <div className="metric-val">{s.value}</div>
                      <div className="metric-desc">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        {/* <div className="stats-strip">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── BRANDS ── */}
        <div className="brands-section">
          <div className="brands-inner">
            <p className="brands-eyebrow">Trusted by World's Best</p>
            <div className="brands-row">
              {BRANDS.map((b) => (
                <div className="brand-pill" key={b}>
                  {b}
                </div>
              ))}
            </div>
            <p className="brands-more">· More than 150 brands ·</p>
          </div>
        </div>
      </section>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
