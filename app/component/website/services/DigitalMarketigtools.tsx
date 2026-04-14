"use client";

import { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CATEGORIES = [
  { id: "all", label: "All Tools" },
  { id: "seo", label: "SEO" },
  { id: "social", label: "Social Media" },
  { id: "analytics", label: "Analytics" },
  { id: "content", label: "Content" },
  { id: "ads", label: "Paid Ads" },
  { id: "email", label: "Email" },
];

const TOOLS = [
  // SEO
  {
    id: 1,
    name: "Ahrefs",
    category: "seo",
    desc: "Backlink analysis & keyword research powerhouse",
    icon: "🔗",
    color: "#f26522",
    stat: "10B+ Keywords",
    level: 95,
  },
  {
    id: 2,
    name: "SEMrush",
    category: "seo",
    desc: "All-in-one competitive intelligence platform",
    icon: "🎯",
    color: "#ff7c35",
    stat: "43T+ Backlinks",
    level: 90,
  },
  {
    id: 3,
    name: "Screaming Frog",
    category: "seo",
    desc: "Technical SEO crawling & site auditing",
    icon: "🐸",
    color: "#e55a0a",
    stat: "500 URLs Free",
    level: 88,
  },
  {
    id: 4,
    name: "Google Search Console",
    category: "seo",
    desc: "Official search performance monitoring",
    icon: "🔍",
    color: "#f49e3b",
    stat: "Real-time Data",
    level: 92,
  },
  // Social
  {
    id: 5,
    name: "Hootsuite",
    category: "social",
    desc: "Multi-platform scheduling & listening",
    icon: "🦉",
    color: "#f26522",
    stat: "35+ Networks",
    level: 87,
  },
  {
    id: 6,
    name: "Buffer",
    category: "social",
    desc: "Smart publishing & engagement analytics",
    icon: "📢",
    color: "#ff8c42",
    stat: "14-Day Queue",
    level: 85,
  },
  {
    id: 7,
    name: "Sprout Social",
    category: "social",
    desc: "Social CRM & in-depth reporting suite",
    icon: "🌱",
    color: "#e05500",
    stat: "5 Profiles Free",
    level: 89,
  },
  // Analytics
  {
    id: 8,
    name: "Google Analytics 4",
    category: "analytics",
    desc: "Event-based cross-platform attribution",
    icon: "📊",
    color: "#f26522",
    stat: "GA4 Standard",
    level: 96,
  },
  {
    id: 9,
    name: "Hotjar",
    category: "analytics",
    desc: "Heatmaps, session recordings & feedback",
    icon: "🔥",
    color: "#ff6b1a",
    stat: "35 Sessions/Day",
    level: 84,
  },
  {
    id: 10,
    name: "Mixpanel",
    category: "analytics",
    desc: "Product analytics with funnel analysis",
    icon: "🧪",
    color: "#f07020",
    stat: "20M Events/Mo",
    level: 82,
  },
  // Content
  {
    id: 11,
    name: "Jasper AI",
    category: "content",
    desc: "AI-driven long-form content generation",
    icon: "✍️",
    color: "#f26522",
    stat: "50+ Templates",
    level: 88,
  },
  {
    id: 12,
    name: "Canva Pro",
    category: "content",
    desc: "Drag-and-drop visual design platform",
    icon: "🎨",
    color: "#ff7a2e",
    stat: "100M+ Assets",
    level: 94,
  },
  {
    id: 13,
    name: "Loom",
    category: "content",
    desc: "Async video messaging & screen recording",
    icon: "🎬",
    color: "#e04e00",
    stat: "25 Videos Free",
    level: 80,
  },
  // Ads
  {
    id: 14,
    name: "Google Ads",
    category: "ads",
    desc: "Search, display & video campaign management",
    icon: "📣",
    color: "#f26522",
    stat: "$0 Min Spend",
    level: 97,
  },
  {
    id: 15,
    name: "Meta Ads Manager",
    category: "ads",
    desc: "Facebook & Instagram paid advertising",
    icon: "📱",
    color: "#ff8030",
    stat: "3B+ Users",
    level: 95,
  },
  {
    id: 16,
    name: "AdEspresso",
    category: "ads",
    desc: "A/B testing & ad optimization suite",
    icon: "⚡",
    color: "#e05a00",
    stat: "350+ Combos",
    level: 82,
  },
  // Email
  {
    id: 17,
    name: "Mailchimp",
    category: "email",
    desc: "Email campaigns with audience segmentation",
    icon: "🐵",
    color: "#f26522",
    stat: "500 Contacts Free",
    level: 91,
  },
  {
    id: 18,
    name: "Klaviyo",
    category: "email",
    desc: "eCommerce email & SMS automation flows",
    icon: "📧",
    color: "#ff7025",
    stat: "300 Emails Free",
    level: 88,
  },
  {
    id: 19,
    name: "Brevo",
    category: "email",
    desc: "Lead Gen email & SMS automation flows",
    icon: "📧",
    color: "#ff7025",
    stat: "300 Emails Free",
    level: 98,
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function DigitalMarketingTools() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [animatedBars, setAnimatedBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? TOOLS
      : TOOLS.filter((t) => t.category === activeCategory);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimatedBars(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Reset bar animation on category change
  useEffect(() => {
    setAnimatedBars(false);
    const t = setTimeout(() => setAnimatedBars(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  return (
    <>
      <style>{`

        .dmt-root {
          position: relative;
          width: 100%;
          padding: 90px 0 80px;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        /* ── bg ── */
        .dmt-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0b0f1a 0%, #1a1410 35%, #0f172a 65%, #1a1410 100%);
          z-index: 0;
        }
        .dmt-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(242,101,34,.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242,101,34,.06) 1px, transparent 1px);
          background-size: 48px 48px;
          z-index: 0;
        }
        .dmt-glow {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(242,101,34,.12) 0%, transparent 70%);
          top: -200px; left: -150px;
          z-index: 0;
          pointer-events: none;
        }
        .dmt-glow2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(242,101,34,.08) 0%, transparent 70%);
          bottom: -100px; right: -80px;
          z-index: 0;
          pointer-events: none;
        }

        /* ── inner wrapper ── */
        .dmt-inner {
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── header ── */
        .dmt-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .dmt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(242,101,34,.12);
          border: 1px solid rgba(242,101,34,.3);
          border-radius: 50px;
          padding: 7px 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #f26522;
          margin-bottom: 20px;
        }
        .dmt-eyebrow span { font-size: 15px; }
        .dmt-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .dmt-title em {
          font-style: normal;
          color: #f26522;
          position: relative;
        }
        .dmt-title em::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0;
          width: 100%; height: 3px;
          background: #f26522;
          border-radius: 2px;
          opacity: .4;
        }
        .dmt-subtitle {
          font-size: .98rem;
          color: rgba(255,255,255,.5);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── category tabs ── */
        .dmt-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .dmt-tab {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50px;
          padding: 9px 22px;
          font-size: .82rem;
          font-weight: 600;
          color: rgba(255,255,255,.45);
          cursor: pointer;
          transition: all .3s cubic-bezier(.4,0,.2,1);
          letter-spacing: .04em;
          outline: none;
        }
        .dmt-tab:hover {
          border-color: rgba(242,101,34,.35);
          color: rgba(255,255,255,.8);
          background: rgba(242,101,34,.07);
        }
        .dmt-tab.active {
          background: #f26522;
          border-color: #f26522;
          color: #fff;
          box-shadow: 0 4px 20px rgba(242,101,34,.4);
        }

        /* ── grid ── */
        .dmt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── tool card ── */
        .dmt-card {
          position: relative;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px;
          padding: 26px 24px 22px;
          cursor: pointer;
          transition: all .4s cubic-bezier(.4,0,.2,1);
          overflow: hidden;
          animation: cardIn .4s both;
        }
        @keyframes cardIn {
          from { opacity:0; transform:translateY(18px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .dmt-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(242,101,34,.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .4s;
        }
        .dmt-card:hover { 
          border-color: rgba(242,101,34,.35);
          transform: translateY(-5px);
          background: rgba(242,101,34,.05);
          box-shadow: 0 20px 50px rgba(242,101,34,.15), 0 0 0 1px rgba(242,101,34,.1);
        }
        .dmt-card:hover::before { opacity: 1; }

        /* corner accent */
        .dmt-card-corner {
          position: absolute;
          top: 0; right: 0;
          width: 60px; height: 60px;
          border-radius: 0 20px 0 60px;
          background: rgba(242,101,34,.08);
          transition: all .4s;
        }
        .dmt-card:hover .dmt-card-corner {
          background: rgba(242,101,34,.18);
          width: 80px; height: 80px;
        }

        .dmt-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .dmt-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(242,101,34,.1);
          border: 1px solid rgba(242,101,34,.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          transition: all .3s;
          flex-shrink: 0;
        }
        .dmt-card:hover .dmt-icon-wrap {
          background: rgba(242,101,34,.2);
          transform: scale(1.08) rotate(-4deg);
        }
        .dmt-stat-badge {
          background: rgba(242,101,34,.1);
          border: 1px solid rgba(242,101,34,.2);
          border-radius: 6px;
          padding: 4px 10px;
          font-size: .68rem;
          font-weight: 700;
          color: #f26522;
          letter-spacing: .05em;
          white-space: nowrap;
        }

        .dmt-tool-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 5px;
        }
        .dmt-tool-desc {
          font-size: .78rem;
          color: rgba(255,255,255,.45);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        /* proficiency bar */
        .dmt-bar-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 7px;
        }
        .dmt-bar-text {
          font-size: .68rem;
          font-weight: 600;
          color: rgba(255,255,255,.35);
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .dmt-bar-pct {
          font-family: 'Syne', sans-serif;
          font-size: .75rem;
          font-weight: 800;
          color: #f26522;
        }
        .dmt-bar-track {
          height: 5px;
          background: rgba(255,255,255,.06);
          border-radius: 10px;
          overflow: hidden;
        }
        .dmt-bar-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #e04e00, #f26522, #ff9a50);
          transition: width .9s cubic-bezier(.4,0,.2,1);
        }

        /* ── featured horizontal card (first tool of filtered) ── */
        .dmt-featured {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 32px;
          background: rgba(242,101,34,.06);
          border: 1px solid rgba(242,101,34,.22);
          border-radius: 22px;
          padding: 30px 36px;
          transition: all .4s;
          animation: cardIn .4s both;
          position: relative;
          overflow: hidden;
        }
        .dmt-featured::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(242,101,34,.08);
          pointer-events: none;
        }
        .dmt-featured:hover {
          border-color: rgba(242,101,34,.45);
          background: rgba(242,101,34,.1);
          transform: translateY(-3px);
          box-shadow: 0 24px 60px rgba(242,101,34,.18);
        }
        .dmt-featured-icon {
          width: 80px; height: 80px;
          border-radius: 20px;
          background: rgba(242,101,34,.15);
          border: 1px solid rgba(242,101,34,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 2.2rem;
          flex-shrink: 0;
          transition: transform .3s;
        }
        .dmt-featured:hover .dmt-featured-icon { transform: scale(1.07) rotate(-4deg); }
        .dmt-featured-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.45rem;
          color: #fff;
          margin-bottom: 4px;
        }
        .dmt-featured-desc {
          font-size: .85rem;
          color: rgba(255,255,255,.5);
          line-height: 1.55;
        }
        .dmt-featured-right {
          text-align: right;
          flex-shrink: 0;
        }
        .dmt-featured-stat {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #f26522;
          margin-bottom: 4px;
        }
        .dmt-featured-badge {
          display: inline-block;
          background: rgba(242,101,34,.15);
          border: 1px solid rgba(242,101,34,.3);
          border-radius: 6px;
          padding: 5px 14px;
          font-size: .72rem;
          font-weight: 700;
          color: #f26522;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        /* ── bottom count strip ── */
        .dmt-count-strip {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .dmt-count-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dmt-count-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f26522;
          box-shadow: 0 0 8px rgba(242,101,34,.6);
        }
        .dmt-count-text {
          font-size: .8rem;
          color: rgba(255,255,255,.4);
          font-weight: 500;
        }
        .dmt-count-num {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: #f26522;
        }

        /* divider */
        .dmt-count-div {
          width: 1px; height: 24px;
          background: rgba(255,255,255,.1);
        }

        /* ── responsive ── */
        @media (max-width: 1024px) {
          .dmt-grid { grid-template-columns: repeat(2, 1fr); }
          .dmt-featured { grid-template-columns: auto 1fr; }
          .dmt-featured-right { display: none; }
        }
        @media (max-width: 640px) {
          .dmt-inner { padding: 0 20px; }
          .dmt-grid { grid-template-columns: 1fr; }
          .dmt-featured { 
            grid-template-columns: auto 1fr; 
            padding: 22px 20px; 
            gap: 16px;
          }
          .dmt-featured-icon { width: 60px; height: 60px; font-size: 1.6rem; }
          .dmt-featured-title { font-size: 1.1rem; }
          .dmt-tabs { gap: 6px; }
          .dmt-tab { padding: 7px 14px; font-size: .74rem; }
        }
      `}</style>

      <section className="dmt-root" ref={sectionRef}>
        {/* <div className="dmt-bg" />
        <div className="dmt-bg-grid" />
        <div className="dmt-glow" />
        <div className="dmt-glow2" /> */}

        <div className="dmt-inner">
          {/* ── Header ── */}
          <div className="dmt-header">
            <div className="dmt-eyebrow">
              <span>⚙️</span> Our Marketing Stack
            </div>
            <h2 className="dmt-title">
              Tools That <em>Power</em> Results
            </h2>
            <p className="dmt-subtitle">
              We wield best-in-class platforms — handpicked, mastered, and
              combined into a unified growth engine for your brand.
            </p>
          </div>

          {/* ── Category Tabs ── */}
          <div className="dmt-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`dmt-tab ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Grid ── */}
          <div className="dmt-grid">
            {filtered.map((tool, i) => {
              const isFeatured = i === 0 && activeCategory !== "all";

              if (isFeatured) {
                return (
                  <div
                    key={tool.id}
                    className="dmt-featured"
                    onMouseEnter={() => setHoveredTool(tool.id)}
                    onMouseLeave={() => setHoveredTool(null)}
                    style={{ animationDelay: "0ms" }}
                  >
                    <div className="dmt-featured-icon">{tool.icon}</div>
                    <div>
                      <div className="dmt-featured-title">{tool.name}</div>
                      <div className="dmt-featured-desc">{tool.desc}</div>
                      <div
                        className="dmt-bar-track"
                        style={{ marginTop: 14, maxWidth: 280 }}
                      >
                        <div
                          className="dmt-bar-fill"
                          style={{
                            width: animatedBars ? `${tool.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                    <div className="dmt-featured-right">
                      <div className="dmt-featured-stat">{tool.level}%</div>
                      <div className="dmt-featured-badge">⭐ Top Pick</div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={tool.id}
                  className="dmt-card"
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <div className="dmt-card-corner" />

                  <div className="dmt-card-top">
                    <div className="dmt-icon-wrap">{tool.icon}</div>
                    <div className="dmt-stat-badge">{tool.stat}</div>
                  </div>

                  <div className="dmt-tool-name">{tool.name}</div>
                  <div className="dmt-tool-desc">{tool.desc}</div>

                  <div className="dmt-bar-label">
                    <span className="dmt-bar-text">Proficiency</span>
                    <span className="dmt-bar-pct">{tool.level}%</span>
                  </div>
                  <div className="dmt-bar-track">
                    <div
                      className="dmt-bar-fill"
                      style={{
                        width: animatedBars ? `${tool.level}%` : "0%",
                        transitionDelay: `${i * 60}ms`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom strip ── */}
          <div className="dmt-count-strip">
            <div className="dmt-count-item">
              <div className="dmt-count-dot" />
              <span className="dmt-count-text">
                <span className="dmt-count-num">{TOOLS.length}+</span> Tools
                Mastered
              </span>
            </div>
            <div className="dmt-count-div" />
            <div className="dmt-count-item">
              <div className="dmt-count-dot" />
              <span className="dmt-count-text">
                <span className="dmt-count-num">6</span> Marketing Disciplines
              </span>
            </div>
            <div className="dmt-count-div" />
            <div className="dmt-count-item">
              <div className="dmt-count-dot" />
              <span className="dmt-count-text">
                <span className="dmt-count-num">500+</span> Campaigns Delivered
              </span>
            </div>
            <div className="dmt-count-div" />
            <div className="dmt-count-item">
              <div className="dmt-count-dot" />
              <span className="dmt-count-text">
                <span className="dmt-count-num">98%</span> Client Retention
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
