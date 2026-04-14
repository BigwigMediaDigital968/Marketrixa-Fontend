"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const DOMAINS = [
  {
    id: "frontend",
    label: "Frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    desc: "Modern UI frameworks & technologies",
    tools: [
      { name: "React", logo: "⚛️", bg: "#e8f4fd" },
      { name: "Next.js", logo: "▲", bg: "#f0f0f0" },
      { name: "Vue.js", logo: "🟢", bg: "#e8f5e8" },
      { name: "TypeScript", logo: "𝐓𝐒", bg: "#e8eef8" },
      { name: "Tailwind CSS", logo: "🌊", bg: "#e8f7f8" },
      { name: "Angular", logo: "🔺", bg: "#fde8e8" },
      { name: "Nuxt.js", logo: "💚", bg: "#edf7ed" },
      { name: "Astro", logo: "🚀", bg: "#f5e8fd" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    desc: "Scalable server-side technologies",
    tools: [
      { name: "Node.js", logo: "🟩", bg: "#e8f5e8" },
      { name: "Python", logo: "🐍", bg: "#f5f0e8" },
      { name: "Java", logo: "☕", bg: "#fde8e8" },
      { name: "Go", logo: "🔵", bg: "#e8f0fd" },
      { name: "PHP", logo: "🐘", bg: "#ede8fd" },
      { name: ".NET", logo: "🟣", bg: "#f0e8fd" },
      { name: "Django", logo: "🌿", bg: "#e8f5ec" },
      { name: "FastAPI", logo: "⚡", bg: "#fdf5e8" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    desc: "Native & cross-platform mobile development",
    tools: [
      { name: "React Native", logo: "⚛️", bg: "#e8f4fd" },
      { name: "Flutter", logo: "💙", bg: "#e8f4fd" },
      { name: "Swift", logo: "🍊", bg: "#fff0e8" },
      { name: "Kotlin", logo: "🟠", bg: "#fff3e8" },
      { name: "Expo", logo: "📱", bg: "#f0f0f0" },
      { name: "Ionic", logo: "🔷", bg: "#e8f0fd" },
      { name: "Android", logo: "🤖", bg: "#e8f5e8" },
      { name: "iOS", logo: "🍎", bg: "#f5e8e8" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    desc: "Relational, NoSQL & cloud databases",
    tools: [
      { name: "PostgreSQL", logo: "🐘", bg: "#e8f0fd" },
      { name: "MongoDB", logo: "🍃", bg: "#e8f5e8" },
      { name: "MySQL", logo: "🐬", bg: "#e8f4fd" },
      { name: "Redis", logo: "🔴", bg: "#fde8e8" },
      { name: "Firebase", logo: "🔥", bg: "#fff3e8" },
      { name: "Supabase", logo: "⚡", bg: "#e8f5e8" },
      { name: "DynamoDB", logo: "🟡", bg: "#fdfae8" },
      { name: "GraphQL", logo: "💜", bg: "#f5e8fd" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    desc: "Infrastructure, CI/CD & cloud platforms",
    tools: [
      { name: "AWS", logo: "☁️", bg: "#fff3e8" },
      { name: "Docker", logo: "🐳", bg: "#e8f4fd" },
      { name: "Kubernetes", logo: "⚙️", bg: "#e8f0fd" },
      { name: "GitHub Actions", logo: "🐙", bg: "#f0f0f0" },
      { name: "Google Cloud", logo: "🌐", bg: "#fde8e8" },
      { name: "Azure", logo: "🔷", bg: "#e8f0fd" },
      { name: "Terraform", logo: "🏗️", bg: "#ede8fd" },
      { name: "Vercel", logo: "▲", bg: "#f0f0f0" },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    desc: "Design tools, prototyping & systems",
    tools: [
      { name: "Figma", logo: "🎨", bg: "#f5e8fd" },
      { name: "Adobe XD", logo: "🟪", bg: "#f0e8fd" },
      { name: "Framer", logo: "🖼️", bg: "#e8eef8" },
      { name: "Webflow", logo: "🌊", bg: "#e8f4fd" },
      { name: "Lottie", logo: "✨", bg: "#fdfae8" },
      { name: "Storybook", logo: "📖", bg: "#fff3e8" },
      { name: "InVision", logo: "🔴", bg: "#fde8e8" },
      { name: "Zeplin", logo: "🟠", bg: "#fff0e8" },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        height="18"
      >
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    desc: "AI integrations, LLMs & workflow automation",
    tools: [
      { name: "OpenAI", logo: "🤖", bg: "#f0f0f0" },
      { name: "LangChain", logo: "🔗", bg: "#e8f5e8" },
      { name: "TensorFlow", logo: "🧠", bg: "#fff3e8" },
      { name: "Zapier", logo: "⚡", bg: "#fff0e8" },
      { name: "n8n", logo: "🔄", bg: "#fde8e8" },
      { name: "Hugging Face", logo: "🤗", bg: "#fdfae8" },
      { name: "Pinecone", logo: "🌲", bg: "#e8f5ec" },
      { name: "Make.com", logo: "🔵", bg: "#e8f0fd" },
    ],
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function TechStack() {
  const [active, setActive] = useState("frontend");

  const current = DOMAINS.find((d) => d.id === active)!;

  return (
    <>
      <style>{`

        .ts-section {
          width: 100%;
          padding: 80px 0 90px;
          position: relative;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        

        /* inner */
        .ts-inner {
          position: relative; z-index: 1;
          max-width: 1320px; margin: 0 auto;
          padding: 0 40px;
        }

        /* header */
        .ts-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .ts-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(242,101,34,.1);
          border: 1px solid rgba(242,101,34,.25);
          border-radius: 50px;
          padding: 7px 20px;
          font-size: 11px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: #f26522; margin-bottom: 18px;
        }
        .ts-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.9rem, 3.5vw, 3rem);
          font-weight: 800; color: #fff;
          line-height: 1.1; margin-bottom: 14px;
        }
        .ts-title em {
          font-style: normal; color: #f26522;
          position: relative;
        }
        .ts-title em::after {
          content: '';
          position: absolute; bottom: 2px; left: 0;
          width: 100%; height: 3px;
          background: #f26522; border-radius: 2px; opacity: .35;
        }
        .ts-subtitle {
          font-size: .95rem;
          color: rgba(255,255,255,.45);
          max-width: 500px; margin: 0 auto; line-height: 1.7;
        }

        /* ── main panel ── */
        .ts-panel {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          background: rgba(255,255,255,.97);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,.35),
            0 0 0 1px rgba(242,101,34,.15);
        }

        /* ── sidebar ── */
        .ts-sidebar {
          background: #fdf6f2;
          padding: 28px 20px;
          border-right: 1px solid rgba(0,0,0,.07);
          display: flex; flex-direction: column; gap: 6px;
        }
        .ts-sidebar-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: #1a0a00;
          padding: 0 12px;
          margin-bottom: 14px;
          letter-spacing: -.01em;
        }

        .ts-nav-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          cursor: pointer;
          border: none; background: transparent;
          text-align: left; width: 100%;
          transition: all .22s cubic-bezier(.4,0,.2,1);
          position: relative;
          font-family: 'Poppins', sans-serif;
        }
        .ts-nav-item:hover {
          background: rgba(242,101,34,.08);
        }
        .ts-nav-item.active {
          background: #1a0a00;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
        }

        .ts-nav-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(0,0,0,.06);
          display: flex; align-items: center; justify-content: center;
          color: #7a5c40;
          flex-shrink: 0;
          transition: all .22s;
        }
        .ts-nav-item.active .ts-nav-icon {
          background: #f26522;
          color: #fff;
        }
        .ts-nav-label {
          font-size: .88rem; font-weight: 600;
          color: #4a3520;
          transition: color .22s;
          white-space: nowrap;
        }
        .ts-nav-item.active .ts-nav-label { color: #fff; }

        .ts-nav-arrow {
          margin-left: auto;
          color: rgba(74,53,32,.3);
          transition: all .22s;
          flex-shrink: 0;
        }
        .ts-nav-item.active .ts-nav-arrow { color: rgba(255,255,255,.5); }
        .ts-nav-item:hover:not(.active) .ts-nav-arrow { color: #f26522; }

        /* active left border accent */
        .ts-nav-item.active::before {
          content: '';
          position: absolute; left: -20px; top: 50%;
          transform: translateY(-50%);
          width: 4px; height: 32px;
          background: #f26522;
          border-radius: 0 4px 4px 0;
        }

        /* ── content panel ── */
        .ts-content {
          padding: 36px 36px 32px;
          display: flex; flex-direction: column;
          min-height: 480px;
        }

        .ts-content-header {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0,0,0,.07);
        }
        .ts-content-icon {
          width: 56px; height: 56px; border-radius: 14px;
          background: #f26522;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(242,101,34,.35);
        }
        .ts-content-icon svg { color: #fff; width: 26px; height: 26px; }
        .ts-content-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.55rem; font-weight: 800;
          color: #1a0a00; margin-bottom: 3px;
        }
        .ts-content-desc {
          font-size: .82rem; color: #a07050;
          font-weight: 500;
        }

        /* tools grid */
        .ts-tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          flex: 1;
        }

        .ts-tool-card {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 10px;
          padding: 20px 12px 18px;
          border-radius: 14px;
          border: 1.5px solid rgba(0,0,0,.07);
          background: #f9f9f9;
          cursor: pointer;
          transition: all .25s cubic-bezier(.4,0,.2,1);
          animation: toolIn .3s both;
          position: relative;
          overflow: hidden;
        }
        @keyframes toolIn {
          from { opacity:0; transform:scale(.93) translateY(8px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        .ts-tool-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: #f26522;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s ease;
          border-radius: 0 0 2px 2px;
        }
        .ts-tool-card:hover {
          border-color: rgba(242,101,34,.4);
          background: #fff;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(242,101,34,.14), 0 2px 8px rgba(0,0,0,.06);
        }
        .ts-tool-card:hover::after { transform: scaleX(1); }

        .ts-tool-logo {
          width: 52px; height: 52px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          transition: transform .25s;
        }
        .ts-tool-card:hover .ts-tool-logo { transform: scale(1.1) rotate(-4deg); }

        .ts-tool-name {
          font-size: .8rem; font-weight: 600;
          color: #2a1a0a;
          text-align: center;
          letter-spacing: -.01em;
        }

        /* footer row */
        .ts-content-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,.07);
        }
        .ts-footer-count {
          font-size: .8rem; color: #a07050; font-weight: 500;
        }
        .ts-footer-count strong {
          font-family: 'Syne', sans-serif;
          font-weight: 800; color: #f26522;
        }
        .ts-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #f26522;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: .85rem;
          padding: 11px 26px;
          border-radius: 50px;
          border: none; cursor: pointer;
          transition: all .3s;
          letter-spacing: .02em;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(242,101,34,.35);
        }
        .ts-cta-btn:hover {
          background: #d94e1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(242,101,34,.45);
        }
        .ts-cta-btn svg { transition: transform .3s; }
        .ts-cta-btn:hover svg { transform: translateX(4px); }

        /* orange right accent bar (matches screenshot) */
        .ts-panel-wrap {
          position: relative;
        }
        .ts-accent-bar {
          position: absolute;
          right: -6px; top: 15%; bottom: 15%;
          width: 4px;
          background: #f26522;
          border-radius: 4px;
          box-shadow: 0 0 16px rgba(242,101,34,.6);
        }

        /* ── responsive ── */
        @media (max-width: 1024px) {
          .ts-panel { grid-template-columns: 240px 1fr; }
          .ts-tools-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .ts-panel { grid-template-columns: 1fr; border-radius: 20px; }
          .ts-sidebar {
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,.07);
            flex-direction: row; flex-wrap: wrap;
            padding: 16px;
            gap: 6px;
          }
          .ts-sidebar-title { display: none; }
          .ts-nav-item {
            flex-direction: column; gap: 4px;
            padding: 10px 12px;
            border-radius: 10px;
            flex: 1; min-width: 80px;
          }
          .ts-nav-item.active::before { display: none; }
          .ts-nav-arrow { display: none; }
          .ts-nav-label { font-size: .72rem; text-align: center; }
          .ts-nav-icon { width: 28px; height: 28px; border-radius: 7px; }
          .ts-content { padding: 24px 20px 20px; }
          .ts-tools-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .ts-content-footer { flex-direction: column; gap: 14px; align-items: flex-start; }
          .ts-accent-bar { display: none; }
        }
        @media (max-width: 480px) {
          .ts-inner { padding: 0 16px; }
          .ts-tools-grid { grid-template-columns: repeat(2, 1fr); }
          .ts-content-title { font-size: 1.2rem; }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-inner">
          {/* Header */}
          <div className="ts-header">
            <div className="ts-eyebrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                width="14"
                height="14"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Technology Stack
            </div>
            <h2 className="ts-title">
              Tools We <em>Build</em> With
            </h2>
            <p className="ts-subtitle">
              From concept to deployment — we use best-in-class technologies to
              deliver fast, scalable, and beautiful digital products.
            </p>
          </div>

          {/* Panel */}
          <div className="ts-panel-wrap">
            <div className="ts-panel">
              {/* Sidebar */}
              <aside className="ts-sidebar">
                <div className="ts-sidebar-title">Technology Domains</div>
                {DOMAINS.map((d) => (
                  <button
                    key={d.id}
                    className={`ts-nav-item ${active === d.id ? "active" : ""}`}
                    onClick={() => setActive(d.id)}
                  >
                    <span className="ts-nav-icon">{d.icon}</span>
                    <span className="ts-nav-label">{d.label}</span>
                    <span className="ts-nav-arrow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        width="14"
                        height="14"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </button>
                ))}
              </aside>

              {/* Content */}
              <div className="ts-content">
                {/* Content Header */}
                <div className="ts-content-header">
                  <div className="ts-content-icon">{current.icon}</div>
                  <div>
                    <div className="ts-content-title">{current.label}</div>
                    <div className="ts-content-desc">{current.desc}</div>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="ts-tools-grid" key={active}>
                  {current.tools.map((tool, i) => (
                    <div
                      key={tool.name}
                      className="ts-tool-card"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <div
                        className="ts-tool-logo"
                        style={{ background: tool.bg }}
                      >
                        {tool.logo}
                      </div>
                      <span className="ts-tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="ts-content-footer">
                  <span className="ts-footer-count">
                    <strong>{current.tools.length}</strong> technologies in{" "}
                    {current.label}
                  </span>
                  <a href="#contact" className="ts-cta-btn">
                    Explore Solutions
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      width="16"
                      height="16"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Orange accent bar */}
            <div className="ts-accent-bar" />
          </div>
        </div>
      </section>
    </>
  );
}
