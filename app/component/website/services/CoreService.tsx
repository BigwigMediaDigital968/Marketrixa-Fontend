"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Search,
  Palette,
  FileText,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   SERVICE DATA  — add more entries freely
───────────────────────────────────────── */
const SERVICES = [
  {
    id: "web",
    icon: <Globe size={22} />,
    label: "Website Development",
    tagline: "Digital Architectures That Convert",
    description:
      "We engineer high-performance websites and web apps that blend cutting-edge technology with pixel-perfect design. Every build is optimised for speed, SEO, and scalability — because your site is your 24/7 sales engine.",
    highlights: [
      "Custom React / Next.js builds",
      "Core Web Vitals optimised",
      "CMS & headless integrations",
      "Mobile-first responsive design",
    ],
    tags: ["Next.js", "React", "Node.js", "Tailwind", "WordPress", "Webflow"],
    cta: "Build Your Digital Foundation",
    link: "/services/website-development-service",
    accent: "#f26522",
  },
  {
    id: "smm",
    icon: <TrendingUp size={22} />,
    label: "Social Media Marketing",
    tagline: "Scroll-Stopping Content. Real Results.",
    description:
      "Turn followers into brand advocates and likes into revenue. Our data-backed SMM strategies create thumb-stopping content that builds communities, sparks conversations, and drives measurable business growth across every platform.",
    highlights: [
      "Platform-native content strategy",
      "Paid social & retargeting",
      "Community management",
      "Real-time performance analytics",
    ],
    tags: [
      "Instagram",
      "LinkedIn",
      "Facebook",
      "TikTok",
      "X / Twitter",
      "Pinterest",
    ],
    cta: "Amplify Your Social Reach",
    link: "/services/social-media-marketing",
    accent: "#f26522",
  },
  {
    id: "seo",
    icon: <Search size={22} />,
    label: "SEO & Growth",
    tagline: "Rank Higher. Earn More. Dominate.",
    description:
      "Sustainable organic growth through technical excellence, authority building, and content strategy. We don't chase algorithms — we build the kind of digital presence search engines can't ignore.",
    highlights: [
      "Technical SEO audits & fixes",
      "E-E-A-T content strategy",
      "Link building & authority",
      "Local & international SEO",
    ],
    tags: [
      "On-Page",
      "Off-Page",
      "Technical",
      "Local SEO",
      "E-commerce SEO",
      "Analytics",
    ],
    cta: "Climb to Page One",
    link: "/services/seo-service",
    accent: "#f26522",
  },
  {
    id: "design",
    icon: <Palette size={22} />,
    label: "Graphic Design",
    tagline: "Visuals That Stop the Scroll.",
    description:
      "Great design is silent communication. Our creative team crafts brand identities, marketing assets, and UI experiences that command attention, communicate value instantly, and make your brand unforgettable.",
    highlights: [
      "Brand identity & style guides",
      "Social & digital creatives",
      "UI/UX design & prototyping",
      "Print & packaging design",
    ],
    tags: ["Branding", "Figma", "Illustrator", "Photoshop", "UI/UX", "Motion"],
    cta: "Elevate Your Visual Identity",
    link: "/services/graphic-design-service",
    accent: "#f26522",
  },
  {
    id: "performance",
    icon: <TrendingUp size={22} />,
    label: "Performance Marketing",
    tagline: "Data-Driven Ads That Deliver Real Results.",
    description:
      "We create and manage high-performance ad campaigns across Google, Meta, and other platforms to drive measurable growth. From lead generation to e-commerce sales, our strategies are built on data, optimization, and ROI — ensuring every rupee you spend works harder for your business.",
    highlights: [
      "Google Ads (Search, Display, YouTube)",
      "Meta Ads (Facebook & Instagram)",
      "Conversion tracking & analytics",
      "A/B testing & campaign optimization",
    ],
    tags: ["Google Ads", "Meta Ads", "ROI", "CPC", "Leads", "Sales Funnel"],
    cta: "Start Scaling Your Ads",
    link: "/services/performance-marketing-service",
    accent: "#f26522",
  },
  {
    id: "content",
    icon: <FileText size={22} />,
    label: "Content Marketing",
    tagline: "Words That Work While You Sleep.",
    description:
      "Authority-building content that attracts, nurtures, and converts. From thought-leadership articles to conversion-optimised landing pages, we create content ecosystems that generate compounding ROI long after publication.",
    highlights: [
      "Editorial & blog strategy",
      "Long-form thought leadership",
      "Landing page copywriting",
      "Email sequences & newsletters",
    ],
    tags: [
      "Blog",
      "Whitepapers",
      "Case Studies",
      "Email",
      "Landing Pages",
      "Scripts",
    ],
    cta: "Build Your Content Engine",
    link: "/services/content-marketing",
    accent: "#f26522",
  },
];

/* ── Animated section heading ── */
function SectionHeading() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="svc-heading-wrap"
    >
      <div className="svc-eyebrow">
        <span className="svc-eyebrow-dot" />
        What We Do
      </div>
      <h2 className="svc-h2">
        Our Core <em>Digital Services</em>
      </h2>
      <p className="svc-sub">
        From a single campaign to a full-stack digital transformation — every
        service is engineered for measurable business impact.
      </p>
    </motion.div>
  );
}

/* ── Service tab button ── */
function ServiceTab({
  service,
  active,
  onClick,
  index,
}: {
  service: (typeof SERVICES)[0];
  active: boolean;
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`svc-tab${active ? " svc-tab-active" : ""}`}
      onClick={onClick}
    >
      <span className={`svc-tab-icon${active ? " svc-tab-icon-active" : ""}`}>
        {service.icon}
      </span>
      <span className="svc-tab-label">{service.label}</span>
      <ChevronRight
        size={14}
        className={`svc-tab-arrow${active ? " svc-tab-arrow-active" : ""}`}
      />
    </motion.button>
  );
}

/* ── Detail panel ── */
function ServiceDetail({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="svc-detail"
      >
        {/* Top badge */}
        <div className="svc-detail-badge">
          <span className="svc-detail-badge-icon">{service.icon}</span>
          {service.label}
        </div>

        <h3 className="svc-detail-title">{service.tagline}</h3>
        <p className="svc-detail-desc">{service.description}</p>

        {/* Highlights */}
        <div className="svc-highlights">
          {service.highlights.map((h) => (
            <div key={h} className="svc-highlight-item">
              <CheckCircle size={14} className="svc-check" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech / platform tags */}
        <div className="svc-tags-section">
          <div className="svc-tags-label">
            <Sparkles size={11} />
            Tools & Platforms
          </div>
          <div className="svc-tags">
            {service.tags.map((t) => (
              <span key={t} className="svc-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href={service.link} className="svc-cta-btn">
          {service.cta}
          <span className="svc-cta-arrow">
            <ArrowRight size={15} />
          </span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Mobile accordion card ── */
function MobileCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`mob-card${open ? " mob-card-open" : ""}`}
    >
      <button className="mob-card-header" onClick={() => setOpen(!open)}>
        <span className={`mob-card-icon${open ? " mob-card-icon-open" : ""}`}>
          {service.icon}
        </span>
        <span className="mob-card-label">{service.label}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="mob-card-chevron"
        >
          <ChevronRight size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mob-card-body">
              <p className="mob-card-tagline">{service.tagline}</p>
              <p className="mob-card-desc">{service.description}</p>
              <div className="mob-highlights">
                {service.highlights.map((h) => (
                  <div key={h} className="mob-highlight">
                    <CheckCircle
                      size={12}
                      style={{ color: "#f26522", flexShrink: 0 }}
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="mob-tags">
                {service.tags.map((t) => (
                  <span key={t} className="svc-tag">
                    {t}
                  </span>
                ))}
              </div>
              <button className="svc-cta-btn" style={{ marginTop: 20 }}>
                {service.cta}
                <span className="svc-cta-arrow">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main export ── */
export default function CoreServices() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        /* ── Section wrapper ── */
        .svc-section {
          position: relative;
          width: 100%;
          padding: 110px 0 100px;
          overflow: hidden;
        }

        /* Decorative bg glows */
        .svc-glow-left {
          position: absolute; top: 20%; left: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: 0;
        }
        .svc-glow-right {
          position: absolute; bottom: 10%; right: -200px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(242,101,34,0.06) 0%, transparent 70%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .svc-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(242,101,34,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,101,34,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .svc-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 32px;
        }

        /* ── Heading ── */
        .svc-heading-wrap { text-align: center; margin-bottom: 72px; }

        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--brand-orange);
          margin-bottom: 18px;
        }
        .svc-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--brand-orange);
          box-shadow: 0 0 10px rgba(242,101,34,0.8);
          animation: eyebrowPulse 2s ease-in-out infinite;
        }
        @keyframes eyebrowPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }

        .svc-h2 {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .svc-h2 em {
          font-style: normal;
          background: linear-gradient(135deg, #f26522 20%, #ff9f5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-sub {
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          color: rgba(255,255,255,0.42);
          max-width: 560px; margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Desktop layout ── */
        .svc-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Tabs */
        .svc-tabs {
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: sticky;
          top: 100px;
        }
        .svc-tab {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .svc-tab::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(242,101,34,0.10) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .svc-tab:hover { color: rgba(255,255,255,0.75); border-color: rgba(242,101,34,0.20); }
        .svc-tab:hover::before { opacity: 1; }

        .svc-tab-active {
          border-color: rgba(242,101,34,0.50) !important;
          background: rgba(242,101,34,0.08) !important;
          color: #fff !important;
          box-shadow: 0 0 0 1px rgba(242,101,34,0.15), 0 8px 32px rgba(242,101,34,0.12);
        }
        .svc-tab-active::before { opacity: 1 !important; }

        .svc-tab-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.40);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .svc-tab-icon-active {
          background: var(--brand-orange) !important;
          border-color: var(--brand-orange) !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(242,101,34,0.40) !important;
        }
        .svc-tab-label {
          flex: 1;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .svc-tab-arrow {
          color: rgba(255,255,255,0.18);
          transition: transform 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
        }
        .svc-tab-arrow-active {
          color: var(--brand-orange);
          transform: translateX(3px);
        }

        /* ── Detail panel ── */
        .svc-detail {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(12px);
          min-height: 480px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .svc-detail::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(242,101,34,0.5), transparent);
        }
        .svc-detail::after {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .svc-detail-badge {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid rgba(242,101,34,0.25);
          background: rgba(242,101,34,0.08);
          font-size: 12px; font-weight: 600;
          color: var(--brand-orange);
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          width: fit-content;
        }
        .svc-detail-badge-icon { display: flex; align-items: center; }

        .svc-detail-title {
          font-size: clamp(1.5rem, 2.8vw, 2.1rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .svc-detail-desc {
          font-size: 0.94rem;
          color: rgba(255,255,255,0.50);
          line-height: 1.75;
          margin-bottom: 30px;
          max-width: 540px;
        }

        /* Highlights */
        .svc-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 30px;
        }
        .svc-highlight-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.65);
        }
        .svc-check { color: var(--brand-orange); flex-shrink: 0; }

        /* Tags */
        .svc-tags-section { margin-bottom: 36px; }
        .svc-tags-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,255,255,0.25);
          margin-bottom: 12px;
        }
        .svc-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .svc-tag {
          padding: 5px 13px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
          cursor: default;
        }
        .svc-tag:hover {
          border-color: rgba(242,101,34,0.35);
          color: var(--brand-orange);
          background: rgba(242,101,34,0.07);
        }

        /* CTA */
        .svc-cta-btn {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 15px 32px;
          border-radius: 12px;
          background: var(--brand-orange);
          color: #fff;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          border: none; cursor: pointer;
          position: relative; overflow: hidden;
          box-shadow: 0 6px 28px rgba(242,101,34,0.38);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: fit-content;
          margin-top: auto;
        }
        .svc-cta-btn::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left 0.6s ease;
        }
        .svc-cta-btn:hover::before { left: 160%; }
        .svc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(242,101,34,0.52);
        }
        .svc-cta-arrow {
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .svc-cta-btn:hover .svc-cta-arrow { transform: translateX(4px); }

        /* ── Mobile accordion ── */
        .svc-mobile { display: none; flex-direction: column; gap: 12px; }

        .mob-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .mob-card-open { border-color: rgba(242,101,34,0.35); }
        .mob-card-header {
          display: flex; align-items: center; gap: 14px;
          padding: 18px 20px;
          cursor: pointer; width: 100%; text-align: left;
          background: none; border: none; color: #fff;
        }
        .mob-card-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.45);
          flex-shrink: 0; transition: all 0.25s ease;
        }
        .mob-card-icon-open {
          background: var(--brand-orange) !important;
          border-color: var(--brand-orange) !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(242,101,34,0.40) !important;
        }
        .mob-card-label { flex: 1; font-size: 0.9rem; font-weight: 600; }
        .mob-card-chevron { color: rgba(255,255,255,0.30); }

        .mob-card-body { padding: 0 20px 24px; }
        .mob-card-tagline {
          font-size: 1rem; font-weight: 700;
          color: var(--brand-orange); margin-bottom: 8px;
        }
        .mob-card-desc {
          font-size: 0.84rem; color: rgba(255,255,255,0.45);
          line-height: 1.7; margin-bottom: 16px;
        }
        .mob-highlights { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
        .mob-highlight {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.8rem; color: rgba(255,255,255,0.60);
        }
        .mob-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 960px) {
          .svc-layout { display: none; }
          .svc-mobile { display: flex; }
          .svc-section { padding: 72px 0 64px; }
        }
        @media (max-width: 600px) {
          .svc-inner { padding: 0 18px; }
          .svc-heading-wrap { margin-bottom: 48px; }
        }
      `}</style>

      <section className="svc-section">
        <div className="svc-glow-left" />
        <div className="svc-glow-right" />
        <div className="svc-grid-overlay" />

        <div className="svc-inner">
          <SectionHeading />

          {/* ── DESKTOP ── */}
          <div className="svc-layout">
            {/* Tabs */}
            <div className="svc-tabs">
              {SERVICES.map((s, i) => (
                <ServiceTab
                  key={s.id}
                  service={s}
                  active={active === i}
                  onClick={() => setActive(i)}
                  index={i}
                />
              ))}
            </div>

            {/* Detail */}
            <ServiceDetail service={SERVICES[active]} />
          </div>

          {/* ── MOBILE ── */}
          <div className="svc-mobile">
            {SERVICES.map((s, i) => (
              <MobileCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
