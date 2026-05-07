"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { Blog, FAQGroup } from "@/app/types/blog";

interface Props {
  blog: Blog;
  faqGroup: FAQGroup | null;
  relatedBlogs: Blog[];
}

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

// ─── Single source-of-truth slugify ──────────────────────────────────────────
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// ─── Inject heading IDs into raw HTML string BEFORE rendering ─────────────────
// This guarantees IDs exist in the DOM on first paint — no useEffect race.
function injectHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])([^>]*)>([\s\S]*?)<\/h[23]>/gi,
    (_match, tag, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const id = slugify(text);
      const cleanAttrs = attrs.replace(/\s*id="[^"]*"/gi, "");
      return `<${tag}${cleanAttrs} id="${id}">${inner}</${tag}>`;
    },
  );
}

// ─── Extract TOC directly from HTML string (no DOM) ──────────────────────────
function extractTocFromHtml(html: string): TocItem[] {
  const items: TocItem[] = [];
  const regex = /<(h[23])[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    const level = m[1].toLowerCase() === "h2" ? 2 : 3;
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    if (text) items.push({ id: slugify(text), text, level });
  }
  return items;
}

// ─── Smooth scroll to heading ─────────────────────────────────────────────────
function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
const FAQAccordion: React.FC<{ faqGroup: FAQGroup }> = ({ faqGroup }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="mt-16">
      <div className="flex items-center gap-3 mb-7">
        <div
          className="w-1 h-7 rounded-full flex-shrink-0"
          style={{ background: "var(--brand-orange)" }}
        />
        <h2 className="text-xl font-black text-white">{faqGroup.title}</h2>
      </div>
      <div className="space-y-2.5 mt-10">
        {[...faqGroup.faqs]
          .sort((a, b) => a.order - b.order)
          .map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl overflow-hidden mb-3"
                style={{
                  background: isOpen
                    ? "rgba(242,101,34,0.05)"
                    : "rgba(255,255,255,0.03)",
                  border: isOpen
                    ? "1px solid rgba(242,101,34,0.22)"
                    : "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.25s, background 0.25s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-white text-sm leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen
                        ? "var(--brand-orange)"
                        : "rgba(255,255,255,0.08)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition:
                        "transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.25s",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="px-5 pb-5">
                    <div
                      className="h-px mb-4"
                      style={{ background: "rgba(242,101,34,0.12)" }}
                    />
                    <p className="text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

// ─── Desktop Sidebar TOC ──────────────────────────────────────────────────────
const TableOfContents: React.FC<{ items: TocItem[]; activeId: string }> = ({
  items,
  activeId,
}) => {
  if (!items.length) return null;
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="flex items-center gap-2.5 px-5 py-3.5"
        style={{
          background: "rgba(242,101,34,0.07)",
          borderBottom: "1px solid rgba(242,101,34,0.14)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="0" y="1" width="5" height="1.4" rx="0.7" fill="#f26522" />
          <rect
            x="0"
            y="4.5"
            width="9"
            height="1.4"
            rx="0.7"
            fill="rgba(255,255,255,0.28)"
          />
          <rect x="0" y="8" width="5" height="1.4" rx="0.7" fill="#f26522" />
          <rect
            x="0"
            y="11.5"
            width="8"
            height="1.4"
            rx="0.7"
            fill="rgba(255,255,255,0.28)"
          />
        </svg>
        <span
          className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: "var(--brand-orange)" }}
        >
          Table of Contents
        </span>
      </div>

      <nav className="px-3 py-3 space-y-px">
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToHeading(item.id)}
              className="w-full text-left flex items-start gap-2.5 rounded-lg px-2.5 py-2 cursor-pointer"
              style={{
                background: active ? "rgba(242,101,34,0.09)" : "transparent",
                transition: "background 0.2s",
              }}
            >
              {item.level === 2 ? (
                <span
                  className="flex-shrink-0 mt-[5px] w-[5px] h-[5px] rounded-full"
                  style={{
                    background: active
                      ? "var(--brand-orange)"
                      : "rgba(255,255,255,0.22)",
                    transform: active ? "scale(1.4)" : "scale(1)",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                />
              ) : (
                <span
                  className="flex-shrink-0 mt-[7px] ml-3 w-[3px] h-[3px] rounded-full"
                  style={{
                    background: active
                      ? "var(--brand-orange)"
                      : "rgba(255,255,255,0.14)",
                    transition: "background 0.2s",
                  }}
                />
              )}
              <span
                style={{
                  fontSize: item.level === 2 ? "12px" : "11px",
                  lineHeight: "1.45",
                  color: active
                    ? "#f26522"
                    : item.level === 2
                    ? "rgba(255,255,255,0.58)"
                    : "rgba(255,255,255,0.34)",
                  fontWeight: item.level === 2 ? 600 : 400,
                  transition: "color 0.2s",
                }}
              >
                {item.text}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="px-5 pb-4 pt-1">
        <div
          className="h-px mb-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />
        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.18)" }}>
          {items.filter((i) => i.level === 2).length} sections
          {items.filter((i) => i.level === 3).length > 0 &&
            ` · ${items.filter((i) => i.level === 3).length} subsections`}
        </p>
      </div>
    </div>
  );
};

// ─── Sidebar Compact Related Card ────────────────────────────────────────────
const SidebarRelatedCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="block group">
    <div
      className="flex gap-3 p-3 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 0.2s",
      }}
    >
      <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg,rgba(242,101,34,0.18),rgba(0,0,0,0.5))",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(242,101,34,0.45)"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M3 16l4-4 4 4 3-3 7 7" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
        <p
          className="text-[11px] font-semibold leading-snug line-clamp-2 group-hover:text-[#f26522] transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {blog.title}
        </p>
        <div className="flex items-center gap-1.5">
          {blog.industry && (
            <span
              className="text-[9px] font-bold uppercase tracking-wide"
              style={{ color: "rgba(242,101,34,0.65)" }}
            >
              {blog.industry}
            </span>
          )}
          {blog.industry && (
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "8px" }}>
              ·
            </span>
          )}
          <span
            className="text-[10px]"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            {blog.readTime}m read
          </span>
        </div>
      </div>
    </div>
  </Link>
);

// ─── Bottom Grid Related Card ─────────────────────────────────────────────────
const BottomRelatedCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="block group h-full">
    <div
      className="rounded-2xl overflow-hidden h-full flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.3s, transform 0.3s",
      }}
    >
      <div className="h-44 overflow-hidden relative flex-shrink-0">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg,rgba(242,101,34,0.1),rgba(0,0,0,0.4))",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              stroke="rgba(242,101,34,0.3)"
              strokeWidth="1.5"
            >
              <rect x="4" y="4" width="28" height="28" rx="5" />
              <path d="M4 24l8-8 6 6 4-4 10 10" strokeLinecap="round" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {blog.industry && (
          <span
            className="absolute top-3 left-3 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
            style={{ background: "var(--brand-orange)", color: "white" }}
          >
            {blog.industry}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-sm font-bold leading-snug line-clamp-2 mb-2 group-hover:text-[#f26522] transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p
            className="text-xs leading-relaxed line-clamp-2 mb-auto"
            style={{ color: "rgba(255,255,255,0.36)" }}
          >
            {blog.excerpt}
          </p>
        )}
        <div
          className="flex items-center justify-between mt-4 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span
            className="text-[11px]"
            style={{ color: "rgba(255,255,255,0.24)" }}
          >
            {blog.readTime} min read
          </span>
          <span
            className="text-[11px] font-semibold flex items-center gap-1"
            style={{ color: "var(--brand-orange)" }}
          >
            Read
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5h6M5 2l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </Link>
);

// ─── Mobile TOC Bottom Sheet ──────────────────────────────────────────────────
const MobileTocDrawer: React.FC<{ items: TocItem[]; activeId: string }> = ({
  items,
  activeId,
}) => {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden rounded-t-3xl overflow-hidden flex flex-col"
        style={{
          background: "rgba(12,14,22,0.98)",
          border: "1px solid rgba(242,101,34,0.18)",
          borderBottom: "none",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          maxHeight: "68vh",
        }}
      >
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="0"
                y="1"
                width="5"
                height="1.4"
                rx="0.7"
                fill="#f26522"
              />
              <rect
                x="0"
                y="4.5"
                width="9"
                height="1.4"
                rx="0.7"
                fill="rgba(255,255,255,0.28)"
              />
              <rect
                x="0"
                y="8"
                width="5"
                height="1.4"
                rx="0.7"
                fill="#f26522"
              />
              <rect
                x="0"
                y="11.5"
                width="8"
                height="1.4"
                rx="0.7"
                fill="rgba(255,255,255,0.28)"
              />
            </svg>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--brand-orange)" }}
            >
              Table of Contents
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2l8 8M10 2L2 10"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="overflow-y-auto px-4 py-3 space-y-px flex-1">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToHeading(item.id);
                  setOpen(false);
                }}
                className="w-full text-left flex items-start gap-2.5 rounded-lg px-3 py-2.5"
                style={{
                  background: active ? "rgba(242,101,34,0.1)" : "transparent",
                }}
              >
                <span
                  className={`flex-shrink-0 rounded-full ${
                    item.level === 2
                      ? "mt-[6px] w-[5px] h-[5px]"
                      : "mt-[8px] ml-4 w-[3px] h-[3px]"
                  }`}
                  style={{
                    background: active
                      ? "var(--brand-orange)"
                      : "rgba(255,255,255,0.22)",
                  }}
                />
                <span
                  style={{
                    fontSize: item.level === 2 ? "13px" : "12px",
                    color: active
                      ? "#f26522"
                      : item.level === 2
                      ? "rgba(255,255,255,0.62)"
                      : "rgba(255,255,255,0.38)",
                    fontWeight: item.level === 2 ? 600 : 400,
                    lineHeight: "1.45",
                  }}
                >
                  {item.text}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Floating trigger pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-4 z-40 lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full"
        style={{
          background: "rgba(10,12,20,0.94)",
          border: "1px solid rgba(242,101,34,0.35)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
          color: "rgba(242,101,34,0.9)",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <rect
            x="0"
            y="1"
            width="5"
            height="1.4"
            rx="0.7"
            fill="currentColor"
          />
          <rect
            x="0"
            y="4.5"
            width="9"
            height="1.4"
            rx="0.7"
            fill="currentColor"
            opacity="0.5"
          />
          <rect
            x="0"
            y="8"
            width="5"
            height="1.4"
            rx="0.7"
            fill="currentColor"
          />
          <rect
            x="0"
            y="11.5"
            width="8"
            height="1.4"
            rx="0.7"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
        <span className="text-[11px] font-bold">Contents</span>
      </button>
    </>
  );
};

// ─── Main BlogDetailClient ────────────────────────────────────────────────────
const BlogDetailClient: React.FC<Props> = ({
  blog,
  faqGroup,
  relatedBlogs,
}) => {
  const [activeId, setActiveId] = useState<string>("");
  const [readProgress, setReadProgress] = useState(0);
  const [shareToast, setShareToast] = useState(false);

  // Pre-patch HTML with IDs — happens synchronously, zero race condition
  const processedHtml = useMemo(
    () => injectHeadingIds(blog.content),
    [blog.content],
  );
  const tocItems = useMemo(
    () => extractTocFromHtml(blog.content),
    [blog.content],
  );

  useEffect(() => {
    if (tocItems.length && !activeId) setActiveId(tocItems[0].id);
  }, [tocItems]);

  // Scroll spy + progress bar
  useEffect(() => {
    if (!tocItems.length) return;
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(
        docH > 0 ? Math.min((window.scrollY / docH) * 100, 100) : 0,
      );

      let current = tocItems[0]?.id ?? "";
      for (const { id } of tocItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 112) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tocItems]);

  const publishDate = new Date(
    blog.publishedAt ?? blog.createdAt,
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(blog.title);

  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2200);
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--brand-white)" }}>
      {/* ── Read progress ── */}
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] pointer-events-none"
        style={{
          width: `${readProgress}%`,
          background: "linear-gradient(90deg,#f26522,rgba(242,101,34,0.5))",
          boxShadow: "0 0 10px rgba(242,101,34,0.55)",
          transition: "width 0.12s linear",
        }}
      />

      {/* ── Toast ── */}
      <div
        className="fixed bottom-5 left-1/2 z-50 px-4 py-2 rounded-full text-sm font-medium text-white pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          background: "rgba(242,101,34,0.92)",
          boxShadow: "0 4px 20px rgba(242,101,34,0.3)",
          opacity: shareToast ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        Link copied ✓
      </div>

      {/* ── Hero ── */}
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0">
          {blog.coverImage ? (
            <>
              <img
                src={blog.coverImage}
                alt={blog.coverImageAlt ?? blog.title}
                className="w-full h-full object-cover"
              />

              {/* Dark cinematic overlays */}
              <div className="absolute inset-0 bg-black/45" />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0.96) 100%)",
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 20% 30%, rgba(242,101,34,0.22), transparent 42%)",
                }}
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#0b0f1a 0%,#151821 35%,#1a1410 100%)",
                }}
              />

              {/* Orange glow */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 25% 35%, rgba(242,101,34,0.28), transparent 48%)",
                }}
              />

              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
                  backgroundSize: "42px 42px",
                }}
              />
            </>
          )}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(8,10,18,1), rgba(8,10,18,0))",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-[520px] sm:min-h-[600px] flex items-end">
              <div className="w-full pb-14 sm:pb-16 lg:pb-20">
                {/* Content wrapper */}
                <div className="max-w-4xl">
                  {/* Breadcrumb */}
                  <nav
                    className="flex items-center gap-2 text-[11px] sm:text-xs mb-6 flex-wrap"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>

                    <span>/</span>

                    <Link
                      href="/blogs"
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </Link>

                    <span>/</span>

                    <span
                      className="truncate max-w-[180px] sm:max-w-sm lg:max-w-md"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      {blog.title}
                    </span>
                  </nav>

                  {/* Industry badge */}
                  {blog.industry && (
                    <div className="mb-5">
                      <span
                        className="inline-flex items-center rounded-full px-4 py-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]"
                        style={{
                          background: "rgba(242,101,34,0.16)",
                          border: "1px solid rgba(242,101,34,0.35)",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {blog.industry}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em] text-white max-w-5xl">
                    {blog.title}
                  </h1>

                  {/* Excerpt */}
                  {blog.excerpt && (
                    <p
                      className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
                      style={{
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      {blog.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  {blog.tags?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {blog.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-[11px]"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.58)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">
          {/* Article */}
          <article className="flex-1 min-w-0 border p-5 border-white/20 backdrop-blur-lg rounded-2xl">
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {faqGroup && faqGroup.faqs.length > 0 && (
              <FAQAccordion faqGroup={faqGroup} />
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div
                className="mt-12 pt-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[10px] uppercase tracking-widest mb-3"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(242,101,34,0.06)",
                        color: "rgba(242,101,34,0.65)",
                        border: "1px solid rgba(242,101,34,0.14)",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer bar */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--brand-orange)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Back to Blog
              </Link>
              <div className="flex items-center gap-2 ml-auto">
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  Share:
                </span>
                {[
                  {
                    label: "𝕏",
                    href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                  },
                  {
                    label: "in",
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:text-white"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={copyLink}
                  title="Copy link"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:text-white cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect
                      x="3.5"
                      y="0.5"
                      width="8"
                      height="8"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    />
                    <path
                      d="M0.5 4.5v7h7"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[285px] xl:w-[300px] flex-shrink-0 self-start">
            <div className="sticky top-24 self-start">
              <div className="space-y-5">
                <TableOfContents items={tocItems} activeId={activeId} />

                {/* Info card */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-4"
                    style={{ color: "var(--brand-orange)" }}
                  >
                    Article Info
                  </p>
                  <div className="space-y-3">
                    {(
                      [
                        blog.author
                          ? { label: "Author", value: blog.author }
                          : null,
                        { label: "Published", value: publishDate },
                        { label: "Read time", value: `${blog.readTime} min` },
                        blog.industry
                          ? { label: "Industry", value: blog.industry }
                          : null,
                      ] as Array<{ label: string; value: string } | null>
                    )
                      .filter(Boolean)
                      .map((row) => (
                        <div
                          key={row!.label}
                          className="flex items-start justify-between gap-3"
                        >
                          <span
                            className="text-[11px] flex-shrink-0"
                            style={{ color: "rgba(255,255,255,0.22)" }}
                          >
                            {row!.label}
                          </span>
                          <span
                            className="text-[11px] text-right font-medium"
                            style={{ color: "rgba(255,255,255,0.55)" }}
                          >
                            {row!.value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Share card */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-3.5"
                    style={{ color: "var(--brand-orange)" }}
                  >
                    Share
                  </p>
                  <div className="flex gap-2">
                    {[
                      {
                        label: "𝕏 Twitter",
                        href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                      },
                      {
                        label: "in LinkedIn",
                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[11px] font-bold transition-all duration-200 hover:text-white"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.4)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={copyLink}
                      className="flex-shrink-0 w-10 flex items-center justify-center rounded-xl transition-all duration-200 hover:text-white"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      title="Copy link"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <rect
                          x="3.5"
                          y="0.5"
                          width="8"
                          height="8"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.1"
                        />
                        <path
                          d="M0.5 4.5v7h7"
                          stroke="currentColor"
                          strokeWidth="1.1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Related in sidebar */}
                {relatedBlogs.length > 0 && (
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="flex items-center gap-2.5 px-5 py-3.5"
                      style={{
                        background: "rgba(242,101,34,0.06)",
                        borderBottom: "1px solid rgba(242,101,34,0.12)",
                      }}
                    >
                      <div
                        className="w-0.5 h-4 rounded-full"
                        style={{ background: "var(--brand-orange)" }}
                      />
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest flex-1"
                        style={{ color: "var(--brand-orange)" }}
                      >
                        Related
                      </span>
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                        style={{
                          background: "rgba(242,101,34,0.14)",
                          color: "rgba(242,101,34,0.75)",
                          border: "1px solid rgba(242,101,34,0.2)",
                        }}
                      >
                        {relatedBlogs.length}
                      </span>
                    </div>
                    <div className="p-3 space-y-2">
                      {relatedBlogs.slice(0, 5).map((b) => (
                        <SidebarRelatedCard key={b.id} blog={b} />
                      ))}
                    </div>
                    {relatedBlogs.length > 5 && (
                      <div className="px-4 pb-4">
                        <Link
                          href="/blogs"
                          className="block text-center text-[11px] font-bold py-2.5 rounded-xl"
                          style={{
                            background: "rgba(242,101,34,0.07)",
                            color: "rgba(242,101,34,0.75)",
                            border: "1px solid rgba(242,101,34,0.14)",
                          }}
                        >
                          View all →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Bottom Related Grid ── */}
        {relatedBlogs.length > 0 && (
          <section
            className="mt-20 pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1 h-7 rounded-full flex-shrink-0"
                style={{ background: "var(--brand-orange)" }}
              />
              <h2 className="text-xl sm:text-2xl font-black text-white">
                More Articles
              </h2>
              <span
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(242,101,34,0.1)",
                  border: "1px solid rgba(242,101,34,0.18)",
                  color: "var(--brand-orange)",
                }}
              >
                {relatedBlogs.length}
              </span>
              <Link
                href="/blogs"
                className="ml-auto text-xs font-semibold flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                style={{ color: "var(--brand-orange)" }}
              >
                View all
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedBlogs.map((b) => (
                <BottomRelatedCard key={b.id} blog={b} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile TOC */}
      <MobileTocDrawer items={tocItems} activeId={activeId} />

      {/* ── Prose styles ── */}
      <style jsx global>{`
        .prose-blog {
          color: rgba(255, 255, 255, 0.72);
          font-size: 1.0125rem;
          line-height: 1.88;
          word-break: break-word;
        }
        .prose-blog h1,
        .prose-blog h2,
        .prose-blog h3,
        .prose-blog h4 {
          color: #fff;
          font-weight: 800;
          line-height: 1.28;
          margin-top: 2.4em;
          margin-bottom: 0.75em;
          scroll-margin-top: 96px;
        }
        .prose-blog h1 {
          font-size: 1.95rem;
        }
        .prose-blog h2 {
          font-size: 1.42rem;
          padding-left: 1rem;
          border-left: 3px solid #f26522;
        }
        .prose-blog h3 {
          font-size: 1.12rem;
          color: rgba(242, 101, 34, 0.88);
        }
        .prose-blog h4 {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
        }
        .prose-blog p {
          margin-bottom: 1.35em;
        }
        .prose-blog a {
          color: #f26522;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(242, 101, 34, 0.4);
          transition: opacity 0.2s;
        }
        .prose-blog a:hover {
          opacity: 0.75;
        }
        .prose-blog strong {
          color: #fff;
          font-weight: 700;
        }
        .prose-blog em {
          color: rgba(255, 255, 255, 0.88);
          font-style: italic;
        }
        .prose-blog ul,
        .prose-blog ol {
          padding-left: 1.6em;
          margin-bottom: 1.35em;
        }
        .prose-blog li {
          margin-bottom: 0.4em;
        }
        .prose-blog ul li::marker {
          color: #f26522;
        }
        .prose-blog ol li::marker {
          color: #f26522;
          font-weight: 700;
        }
        .prose-blog blockquote {
          border-left: 3px solid #f26522;
          padding: 0.9rem 1.3rem;
          margin: 1.8em 0;
          background: rgba(242, 101, 34, 0.055);
          border-radius: 0 0.8rem 0.8rem 0;
          color: rgba(255, 255, 255, 0.75);
          font-style: italic;
        }
        .prose-blog code {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 4px;
          padding: 0.1em 0.4em;
          font-size: 0.865em;
          color: #f26522;
          font-family: "Fira Code", "Cascadia Code", monospace;
        }
        .prose-blog pre {
          background: rgba(0, 0, 0, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 0.8rem;
          padding: 1.3rem;
          overflow-x: auto;
          margin: 1.8em 0;
        }
        .prose-blog pre code {
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875em;
        }
        .prose-blog img {
          border-radius: 0.8rem;
          width: 100%;
          margin: 1.8em 0;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .prose-blog hr {
          border: none;
          height: 1px;
          background: rgba(255, 255, 255, 0.07);
          margin: 2.4em 0;
        }
        .prose-blog table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.8em 0;
          display: block;
          overflow-x: auto;
        }
        .prose-blog th {
          background: rgba(242, 101, 34, 0.1);
          color: #fff;
          font-weight: 700;
          padding: 0.75rem 1rem;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.08);
          white-space: nowrap;
        }
        .prose-blog td {
          padding: 0.65rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
        }
        .prose-blog tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }
      `}</style>
    </div>
  );
};

export default BlogDetailClient;
