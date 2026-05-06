"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  Blog,
  BlogFormData,
  BlogStatus,
  FAQ,
  SEOFields as SEOFieldsType,
} from "@/app/types/blog";
import StatusBadge from "./Statusbadge";
import SEOFields from "./Seofields";

const BlogEditor = dynamic(
  () => import("@/app/component/admin/blog/BlogEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-xl border border-white/10 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  },
);

// ─── Constants ───────────────────────────────────────────────────────────────

const INDUSTRIES = [
  "Technology",
  "Sales",
  "Marketing",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "SaaS",
  "E-commerce",
  "Education",
  "Other",
];

const emptySEO: SEOFieldsType = {
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  canonicalUrl: "",
  structuredData: "",
};

const emptyForm: BlogFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  coverImageAlt: "",
  author: "Marketrixa Team",
  industry: "Technology",
  tags: [],
  status: "draft",
  seo: emptySEO,
};

interface InlineFAQ {
  title: string;
  description: string;
  items: Array<{ id: string; question: string; answer: string }>;
}

const emptyFAQ: InlineFAQ = { title: "", description: "", items: [] };

// ─── Types ───────────────────────────────────────────────────────────────────

interface BlogFormProps {
  initialData?: Blog;
  initialFAQGroup?: { title: string; description?: string; faqs: FAQ[] } | null;
  mode: "new" | "edit";
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function charCount(str: string) {
  return str.length;
}

function seoScore(form: BlogFormData, faq: InlineFAQ) {
  let score = 0;
  if (
    form.seo.metaTitle &&
    form.seo.metaTitle.length >= 30 &&
    form.seo.metaTitle.length <= 60
  )
    score += 20;
  if (
    form.seo.metaDescription &&
    form.seo.metaDescription.length >= 120 &&
    form.seo.metaDescription.length <= 160
  )
    score += 20;
  if (form.seo.metaKeywords) score += 10;
  if (form.coverImage) score += 10;
  if (form.seo.canonicalUrl) score += 10;
  if (form.seo.ogTitle && form.seo.ogDescription) score += 10;
  if (faq.items.length > 0) score += 10;
  if (form.seo.structuredData) score += 10;
  return score;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SeoScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
  const label = score >= 80 ? "Good" : score >= 50 ? "Needs work" : "Poor";
  const r = 22;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex items-center gap-3">
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="4"
        />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 28 28)"
          style={{ transition: "stroke-dasharray 0.6s ease" }}
        />
        <text
          x="28"
          y="32"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="600"
        >
          {score}
        </text>
      </svg>
      <div>
        <p className="text-white text-sm font-semibold">SEO Score</p>
        <p className="text-xs" style={{ color }}>
          {label}
        </p>
      </div>
    </div>
  );
}

function ReadabilityMeta({
  content,
  readTime,
}: {
  content: string;
  readTime: number;
}) {
  const text = content.replace(/<[^>]+>/g, "");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div className="flex items-center gap-4 text-xs text-gray-500">
      <span>{words.toLocaleString()} words</span>
      <span className="w-px h-3 bg-white/10" />
      <span>{readTime} min read</span>
      <span className="w-px h-3 bg-white/10" />
      <span>{charCount(text).toLocaleString()} chars</span>
    </div>
  );
}

function FAQItem({
  item,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  item: { id: string; question: string; answer: string };
  index: number;
  onUpdate: (id: string, field: "question" | "answer", val: string) => void;
  onDelete: (id: string) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.02]">
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/[0.03] transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-gray-600 text-xs font-mono w-5 text-center select-none">
          {index + 1}
        </span>
        <span className="flex-1 text-sm text-gray-300 truncate">
          {item.question || (
            <span className="text-gray-600 italic">Question not set</span>
          )}
        </span>
        <div
          className="flex items-center gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onMoveUp(index)}
            disabled={isFirst}
            className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 transition-colors rounded-lg hover:bg-white/5"
            title="Move up"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 8l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => onMoveDown(index)}
            disabled={isLast}
            className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 transition-colors rounded-lg hover:bg-white/5"
            title="Move down"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-1.5 text-gray-600 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
            title="Delete"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2l8 8M10 2l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`text-gray-600 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-white/[0.06]">
          <div className="pt-3">
            <label className="label-sm">Question</label>
            <input
              value={item.question}
              onChange={(e) => onUpdate(item.id, "question", e.target.value)}
              placeholder="e.g. What industries do you serve?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors"
            />
          </div>
          <div>
            <label className="label-sm">Answer</label>
            <textarea
              value={item.answer}
              onChange={(e) => onUpdate(item.id, "answer", e.target.value)}
              placeholder="Provide a clear, concise answer…"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors resize-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BlogForm({
  initialData,
  initialFAQGroup,
  mode,
}: BlogFormProps) {
  const router = useRouter();

  const [form, setForm] = useState<BlogFormData>(
    initialData
      ? {
          title: initialData.title,
          slug: initialData.slug,
          excerpt: initialData.excerpt,
          content: initialData.content,
          coverImage: initialData.coverImage,
          coverImageAlt: initialData.coverImageAlt,
          author: initialData.author,
          industry: initialData.industry,
          tags: initialData.tags,
          status: initialData.status,
          seo: initialData.seo,
          faqGroupId: initialData.faqGroupId,
        }
      : emptyForm,
  );

  const [faq, setFaq] = useState<InlineFAQ>(() => {
    if (initialFAQGroup) {
      return {
        title: initialFAQGroup.title,
        description: initialFAQGroup.description ?? "",
        items: initialFAQGroup.faqs.map((f) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        })),
      };
    }
    return emptyFAQ;
  });

  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [autoSlug, setAutoSlug] = useState(mode === "new");
  const [activeTab, setActiveTab] = useState<
    "content" | "seo" | "faq" | "settings"
  >("content");
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 0);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const ogImageRef = useRef<HTMLInputElement>(null);

  const score = seoScore(form, faq);

  // Auto-slug
  useEffect(() => {
    if (autoSlug && form.title) {
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
    }
  }, [form.title, autoSlug]);

  // Auto-fill SEO title/og from title
  useEffect(() => {
    if (!form.seo.metaTitle && form.title) {
      setForm((p) => ({
        ...p,
        seo: {
          ...p.seo,
          metaTitle: `${p.title} | Marketrixa`,
          ogTitle: p.title,
        },
      }));
    }
  }, [form.title]); // eslint-disable-line

  // Auto read-time from content
  useEffect(() => {
    const words = form.content
      .replace(/<[^>]+>/g, "")
      .trim()
      .split(/\s+/).length;
    setReadTime(Math.max(1, Math.ceil(words / 200)));
  }, [form.content]);

  // Auto canonical URL
  useEffect(() => {
    if (form.slug && !form.seo.canonicalUrl) {
      setForm((p) => ({
        ...p,
        seo: {
          ...p.seo,
          canonicalUrl: `https://marketrixa.com/blogs/${form.slug}`,
        },
      }));
    }
  }, [form.slug]); // eslint-disable-line

  const update = useCallback(
    <K extends keyof BlogFormData>(key: K, val: BlogFormData[K]) => {
      setForm((p) => ({ ...p, [key]: val }));
    },
    [],
  );

  const updateSeo = useCallback(
    <K extends keyof SEOFieldsType>(key: K, val: SEOFieldsType[K]) => {
      setForm((p) => ({ ...p, seo: { ...p.seo, [key]: val } }));
    },
    [],
  );

  // ── Tag helpers ──
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) update("tags", [...form.tags, t]);
    setTagInput("");
  };

  // ── FAQ helpers ──
  const addFAQItem = () => {
    setFaq((p) => ({
      ...p,
      items: [
        ...p.items,
        { id: `faq_${Date.now()}`, question: "", answer: "" },
      ],
    }));
  };

  const updateFAQItem = (
    id: string,
    field: "question" | "answer",
    val: string,
  ) => {
    setFaq((p) => ({
      ...p,
      items: p.items.map((i) => (i.id === id ? { ...i, [field]: val } : i)),
    }));
  };

  const deleteFAQItem = (id: string) => {
    setFaq((p) => ({ ...p, items: p.items.filter((i) => i.id !== id) }));
  };

  const moveFAQItem = (index: number, dir: "up" | "down") => {
    const newItems = [...faq.items];
    const swap = dir === "up" ? index - 1 : index + 1;
    [newItems[index], newItems[swap]] = [newItems[swap], newItems[index]];
    setFaq((p) => ({ ...p, items: newItems }));
  };

  // ── Cover image ──
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) update("coverImage", data.url);
  };

  // ── Generate structured data ──
  const generateStructuredData = () => {
    const sd: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: form.title,
      description: form.excerpt,
      author: { "@type": "Organization", name: form.author },
      publisher: { "@type": "Organization", name: "Marketrixa" },
      url: form.seo.canonicalUrl,
      image: form.coverImage || undefined,
    };
    if (faq.items.length > 0) {
      Object.assign(sd, {
        mainEntity: {
          "@type": "FAQPage",
          mainEntity: faq.items.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
      });
    }
    updateSeo("structuredData", JSON.stringify(sd, null, 2));
  };

  // ── Submit ──
  const handleSubmit = async (overrideStatus?: BlogStatus) => {
    setError("");
    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!form.slug.trim()) {
      setError("Slug is required");
      return;
    }
    if (!form.content || form.content === "<p></p>") {
      setError("Content cannot be empty");
      return;
    }

    setSaving(true);
    try {
      const validFAQItems = faq.items.filter(
        (i) => i.question.trim() && i.answer.trim(),
      );
      const payload = {
        ...form,
        readTime,
        ...(overrideStatus ? { status: overrideStatus } : {}),
        ...(validFAQItems.length > 0
          ? {
              faqs: {
                title: faq.title || `${form.title} — FAQs`,
                description: faq.description || undefined,
                items: validFAQItems.map(({ question, answer }) => ({
                  question,
                  answer,
                })),
              },
            }
          : { faqs: { title: "", items: [] } }),
      };

      const url =
        mode === "new" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
      const method = mode === "new" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      router.push("/blog-management");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 focus:bg-white/[0.06] transition-all";

  // ─── SEO tab helpers ──────────────────────────────────────────────────────

  function MetaBar({
    label,
    value,
    min,
    max,
    warn,
  }: {
    label: string;
    value: string;
    min: number;
    max: number;
    warn?: boolean;
  }) {
    const len = value.length;
    const pct = Math.min(100, (len / max) * 100);
    const ok = len >= min && len <= max;
    const over = len > max;
    const barColor = over ? "#ef4444" : ok ? "#10b981" : "#f59e0b";
    return (
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="label-sm">{label}</label>
          <span
            className={`text-xs tabular-nums ${
              over ? "text-red-400" : ok ? "text-emerald-400" : "text-gray-500"
            }`}
          >
            {len} / {max}
          </span>
        </div>
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${pct}%`, backgroundColor: barColor }}
          />
        </div>
        {warn && over && (
          <p className="text-xs text-red-400">
            Exceeds recommended length — may be truncated in search results
          </p>
        )}
      </div>
    );
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-white/20 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">
                  {mode === "new" ? "New Blog Post" : "Edit Blog Post"}
                </h1>
                {initialData && <StatusBadge status={form.status} />}
              </div>
              <ReadabilityMeta content={form.content} readTime={readTime} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-400 hover:border-[#f26522]/40 hover:text-[#f26522] transition-all disabled:opacity-40"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit("published")}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
            >
              {saving && (
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {form.status === "published" ? "Update" : "Publish"}
            </button>
          </div>
        </div>

        {/* ── Error ── */}
        {error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M8 5v3.5M8 10.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {error}
          </div>
        )}

        {/* ── Tabs ── */}
        <div className="flex gap-1 bg-white/[0.04] rounded-xl p-1 w-fit border border-white/[0.06]">
          {(
            [
              { id: "content", label: "Content", icon: "✍" },
              { id: "seo", label: "SEO", icon: "🔍" },
              {
                id: "faq",
                label: `FAQs${
                  faq.items.length > 0 ? ` (${faq.items.length})` : ""
                }`,
                icon: "❓",
              },
              { id: "settings", label: "Settings", icon: "⚙" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? "bg-[#f26522] text-white shadow-md shadow-[#f26522]/20"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span className="text-xs">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════
            CONTENT TAB
        ════════════════════════════════════════════════ */}
        {activeTab === "content" && (
          <div className="space-y-5">
            {/* Cover image */}
            <div className="rounded-2xl p-5 space-y-4 bg-white/[0.03] border border-white/[0.07]">
              <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="2"
                    width="12"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx="5"
                    cy="6"
                    r="1.2"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M1 10l3.5-3 2.5 2 2-1.5L13 10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
                Cover Image
              </h3>
              <div className="flex gap-4 items-start">
                {form.coverImage ? (
                  <div className="relative group shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={form.coverImage}
                      alt="cover"
                      className="w-28 h-20 object-cover rounded-lg border border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <button
                      onClick={() => update("coverImage", "")}
                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/70 text-white text-xs rounded-lg hidden group-hover:flex items-center justify-center border border-white/20 hover:bg-red-500/80 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => coverInputRef.current?.click()}
                    className="w-44 h-28 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#f26522]/50 transition-all text-gray-600 hover:text-[#f26522] shrink-0 group"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mb-1.5"
                    >
                      <path
                        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs">Upload cover</span>
                    <span className="text-[10px] text-gray-700 mt-0.5">
                      1200×630 recommended
                    </span>
                  </div>
                )}
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCoverUpload}
                />
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="label-sm">
                      Alt Text <span className="text-gray-700">(SEO)</span>
                    </label>
                    <input
                      type="text"
                      value={form.coverImageAlt}
                      onChange={(e) => update("coverImageAlt", e.target.value)}
                      placeholder="Describe the image for screen readers and search engines…"
                      className={inputCls}
                    />
                  </div>
                  {!form.coverImage && (
                    <p className="text-xs text-amber-500/70 flex items-center gap-1.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6 1l5 10H1L6 1z"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 5v2.5M6 9v.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Missing cover image reduces SEO score
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Title + Slug */}
            <div className="rounded-2xl p-5 space-y-4 bg-white/[0.03] border border-white/[0.07]">
              <div>
                <label className="label-sm">
                  Blog Title <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="Enter a compelling blog title…"
                  className={`${inputCls} text-base font-semibold`}
                  maxLength={100}
                />
                <p className="text-xs text-gray-700 mt-1 text-right">
                  {form.title.length}/100
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="label-sm">
                    URL Slug <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setAutoSlug(true);
                      update("slug", slugify(form.title));
                    }}
                    className="text-xs text-[#f26522]/60 hover:text-[#f26522] transition-colors flex items-center gap-1"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M8.5 1.5A4.5 4.5 0 115 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5 4.5V1.5H5.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Auto-generate
                  </button>
                </div>
                <div className="flex items-center gap-0">
                  <span className="px-3 py-2.5 bg-white/[0.03] border border-r-0 border-white/[0.08] rounded-l-xl text-gray-600 text-xs font-mono whitespace-nowrap">
                    marketrixa.com/blogs/
                  </span>
                  <input
                    value={form.slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      update("slug", slugify(e.target.value));
                    }}
                    placeholder="your-blog-slug"
                    className="flex-1 bg-white/[0.04] border border-white/[0.09] rounded-r-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 font-mono transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="label-sm">Excerpt / Summary</label>
                  <span
                    className={`text-xs tabular-nums ${
                      form.excerpt.length > 200
                        ? "text-amber-400"
                        : "text-gray-600"
                    }`}
                  >
                    {form.excerpt.length}/200
                  </span>
                </div>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  placeholder="Brief summary shown in blog listings and social shares (150–200 chars recommended)…"
                  rows={3}
                  maxLength={300}
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>

            {/* Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="label-sm">
                  Content <span className="text-red-500">*</span>
                </label>
                <ReadabilityMeta content={form.content} readTime={readTime} />
              </div>
              <BlogEditor
                content={form.content}
                onChange={(html) => update("content", html)}
              />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════
            SEO TAB
        ════════════════════════════════════════════════ */}
        {activeTab === "seo" && (
          <div className="space-y-5">
            {/* Score card */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
              <SeoScoreRing score={score} />
              <div className="grid grid-cols-3 gap-3 flex-1 ml-8">
                {[
                  {
                    label: "Title",
                    ok:
                      form.seo.metaTitle.length >= 30 &&
                      form.seo.metaTitle.length <= 60,
                  },
                  {
                    label: "Description",
                    ok:
                      form.seo.metaDescription.length >= 120 &&
                      form.seo.metaDescription.length <= 160,
                  },
                  { label: "Keywords", ok: !!form.seo.metaKeywords },
                  { label: "Cover image", ok: !!form.coverImage },
                  { label: "Canonical URL", ok: !!form.seo.canonicalUrl },
                  { label: "FAQ schema", ok: faq.items.length > 0 },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        c.ok ? "bg-emerald-400" : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        c.ok ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SERP Preview */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-3">
              <h3 className="text-sm font-semibold text-gray-300">
                Search Preview (Google SERP)
              </h3>
              <div className="rounded-xl bg-white p-4 space-y-0.5">
                <p className="text-black text-base font-medium leading-tight truncate">
                  {form.seo.metaTitle ||
                    form.title ||
                    "Page title appears here"}
                </p>
                <p className="text-black text-xs">
                  https://marketrixa.com/blogs/{form.slug || "your-slug"}
                </p>
                <p className="text-black text-sm leading-snug line-clamp-2">
                  {form.seo.metaDescription ||
                    form.excerpt ||
                    "Page description appears here. Make it compelling and keyword-rich."}
                </p>
              </div>
            </div>

            {/* Meta fields */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
              <h3 className="text-sm font-semibold text-gray-300">Meta Tags</h3>

              <div className="space-y-3">
                <MetaBar
                  label="Meta Title"
                  value={form.seo.metaTitle}
                  min={30}
                  max={60}
                  warn
                />
                <input
                  value={form.seo.metaTitle}
                  onChange={(e) => updateSeo("metaTitle", e.target.value)}
                  placeholder="e.g. How AI is Transforming B2B Marketing in 2025 | Marketrixa"
                  className={inputCls}
                />
              </div>

              <div className="space-y-3">
                <MetaBar
                  label="Meta Description"
                  value={form.seo.metaDescription}
                  min={120}
                  max={160}
                  warn
                />
                <textarea
                  value={form.seo.metaDescription}
                  onChange={(e) => updateSeo("metaDescription", e.target.value)}
                  placeholder="Concise description of this page that entices users to click in search results…"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div>
                <label className="label-sm">Focus Keywords</label>
                <input
                  value={form.seo.metaKeywords}
                  onChange={(e) => updateSeo("metaKeywords", e.target.value)}
                  placeholder="AI, B2B marketing, marketing automation, lead generation"
                  className={inputCls}
                />
                <p className="text-xs text-gray-700 mt-1">
                  Comma-separated, 5–10 keywords recommended
                </p>
              </div>

              <div>
                <label className="label-sm">Canonical URL</label>
                <input
                  value={form.seo.canonicalUrl}
                  onChange={(e) => updateSeo("canonicalUrl", e.target.value)}
                  placeholder="https://marketrixa.com/blogs/your-slug"
                  className={`${inputCls} font-mono text-xs`}
                />
              </div>
            </div>

            {/* Open Graph */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
              <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                Open Graph
                <span className="text-xs font-normal text-gray-600">
                  — controls how this page looks when shared on social media
                </span>
              </h3>

              {/* OG Preview */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="h-32 bg-white/5 flex items-center justify-center relative overflow-hidden">
                  {form.seo.ogImage || form.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={form.seo.ogImage || form.coverImage}
                      alt="og"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-700 text-sm">
                      OG Image Preview
                    </span>
                  )}
                </div>
                <div className="p-3 bg-[#f0f2f5]">
                  <p className="text-[#65676b] text-[10px] uppercase tracking-wider">
                    MARKETRIXA.COM
                  </p>
                  <p className="text-[#050505] text-sm font-semibold leading-tight mt-0.5 line-clamp-1">
                    {form.seo.ogTitle || form.title || "Article title"}
                  </p>
                  <p className="text-[#65676b] text-xs mt-0.5 line-clamp-2">
                    {form.seo.ogDescription ||
                      form.excerpt ||
                      "Article description"}
                  </p>
                </div>
              </div>

              <div>
                <label className="label-sm">OG Title</label>
                <input
                  value={form.seo.ogTitle}
                  onChange={(e) => updateSeo("ogTitle", e.target.value)}
                  placeholder="Social share title (defaults to blog title)"
                  className={inputCls}
                />
              </div>
              <div>
                <MetaBar
                  label="OG Description"
                  value={form.seo.ogDescription}
                  min={60}
                  max={200}
                />
                <textarea
                  value={form.seo.ogDescription}
                  onChange={(e) => updateSeo("ogDescription", e.target.value)}
                  placeholder="Social share description…"
                  rows={2}
                  className={`${inputCls} resize-none mt-2`}
                />
              </div>
              <div>
                <label className="label-sm">
                  OG Image URL{" "}
                  <span className="text-gray-700">(or upload)</span>
                </label>
                <div className="flex gap-2">
                  <input
                    value={form.seo.ogImage}
                    onChange={(e) => updateSeo("ogImage", e.target.value)}
                    placeholder="https://… or use cover image"
                    className={`${inputCls} flex-1 font-mono text-xs`}
                  />
                  <button
                    onClick={() => ogImageRef.current?.click()}
                    className="px-3 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm whitespace-nowrap"
                  >
                    Upload
                  </button>
                  {form.coverImage && !form.seo.ogImage && (
                    <button
                      onClick={() => updateSeo("ogImage", form.coverImage)}
                      className="px-3 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-xs whitespace-nowrap"
                    >
                      Use cover
                    </button>
                  )}
                </div>
                <input
                  ref={ogImageRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const fd = new FormData();
                    fd.append("file", file);
                    const res = await fetch("/api/upload", {
                      method: "POST",
                      body: fd,
                    });
                    const d = await res.json();
                    if (d.url) updateSeo("ogImage", d.url);
                  }}
                />
              </div>
            </div>

            {/* Structured Data */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300">
                    Structured Data (JSON-LD)
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Schema.org markup for rich search results. FAQ items are
                    auto-included.
                  </p>
                </div>
                <button
                  onClick={generateStructuredData}
                  className="px-3 py-2 rounded-xl border border-white/10 text-gray-400 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-xs flex items-center gap-1.5"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 2L6 6m0 0L2 2m4 4v8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Auto-generate
                </button>
              </div>
              <textarea
                value={form.seo.structuredData || ""}
                onChange={(e) => updateSeo("structuredData", e.target.value)}
                placeholder={
                  '{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting"\n}'
                }
                rows={10}
                className={`${inputCls} font-mono text-xs resize-none`}
              />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════
            FAQ TAB
        ════════════════════════════════════════════════ */}
        {activeTab === "faq" && (
          <div className="space-y-5">
            {/* Info banner */}
            <div className="rounded-xl px-4 py-3 bg-[#f26522]/5 border border-[#f26522]/15 flex items-start gap-3 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#f26522] mt-0.5 shrink-0"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 5v3.5M8 10.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-gray-300 font-medium">
                  FAQs boost SEO with FAQ rich snippets
                </p>
                <p className="text-gray-600 text-xs mt-0.5">
                  Q&amp;As added here are automatically included in the JSON-LD
                  structured data and linked to this blog post.
                </p>
              </div>
            </div>

            {/* FAQ group metadata */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">
                FAQ Group Details
              </h3>
              <div>
                <label className="label-sm">Group Title</label>
                <input
                  value={faq.title}
                  onChange={(e) =>
                    setFaq((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder={`${
                    form.title || "Blog"
                  } — Frequently Asked Questions`}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="label-sm">
                  Group Description{" "}
                  <span className="text-gray-700">(optional)</span>
                </label>
                <input
                  value={faq.description}
                  onChange={(e) =>
                    setFaq((p) => ({ ...p, description: e.target.value }))
                  }
                  placeholder="Short context about this FAQ section…"
                  className={inputCls}
                />
              </div>
            </div>

            {/* FAQ items */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-300">
                  Questions &amp; Answers
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-white/[0.06] text-gray-500 text-xs font-normal">
                    {faq.items.length}
                  </span>
                </h3>
                <button
                  onClick={addFAQItem}
                  className="px-3 py-2 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-medium hover:bg-[#f26522]/20 transition-all flex items-center gap-1.5"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add Question
                </button>
              </div>

              {faq.items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/10 p-10 text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="mx-auto mb-3 text-gray-700"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 13c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-1.2 3.4-3 3.8V19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="16" cy="22" r="1" fill="currentColor" />
                  </svg>
                  <p className="text-gray-500 text-sm font-medium">
                    No questions yet
                  </p>
                  <p className="text-gray-700 text-xs mt-1">
                    Add questions that readers commonly ask about this topic
                  </p>
                  <button
                    onClick={addFAQItem}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-medium hover:bg-[#f26522]/20 transition-all"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Add First Question
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {faq.items.map((item, i) => (
                    <FAQItem
                      key={item.id}
                      item={item}
                      index={i}
                      onUpdate={updateFAQItem}
                      onDelete={deleteFAQItem}
                      onMoveUp={(idx) => moveFAQItem(idx, "up")}
                      onMoveDown={(idx) => moveFAQItem(idx, "down")}
                      isFirst={i === 0}
                      isLast={i === faq.items.length - 1}
                    />
                  ))}
                  <button
                    onClick={addFAQItem}
                    className="w-full py-3 rounded-xl border border-dashed border-white/10 text-gray-600 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Add Another Question
                  </button>
                </div>
              )}
            </div>

            {/* Reminder about structured data */}
            {faq.items.length > 0 && (
              <div className="rounded-xl px-4 py-3 bg-emerald-500/5 border border-emerald-500/15 flex items-center gap-3 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-emerald-400 shrink-0"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-400">
                  {faq.items.filter((i) => i.question && i.answer).length} valid
                  Q&amp;As will be saved.{" "}
                  <button
                    onClick={() => setActiveTab("seo")}
                    className="text-emerald-400 hover:underline"
                  >
                    Auto-generate structured data →
                  </button>
                </span>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════
            SETTINGS TAB
        ════════════════════════════════════════════════ */}
        {activeTab === "settings" && (
          <div className="space-y-5">
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
              <h3 className="text-sm font-semibold text-gray-300">
                Post Settings
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label-sm">Author</label>
                  <input
                    value={form.author}
                    onChange={(e) => update("author", e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="label-sm">Industry</label>
                  <select
                    value={form.industry}
                    onChange={(e) => update("industry", e.target.value)}
                    className={inputCls + " cursor-pointer"}
                  >
                    {INDUSTRIES.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label-sm">Publication Status</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {(["draft", "published", "archived"] as BlogStatus[]).map(
                    (s) => (
                      <button
                        key={s}
                        onClick={() => update("status", s)}
                        className={`py-2.5 rounded-xl text-sm font-medium border transition-all capitalize ${
                          form.status === s
                            ? s === "published"
                              ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                              : s === "draft"
                              ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                              : "bg-white/10 border-white/20 text-gray-300"
                            : "border-white/[0.08] text-gray-600 hover:text-gray-400 hover:border-white/15"
                        }`}
                      >
                        {s}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="label-sm">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                    placeholder="Type a tag and press Enter…"
                    className={`${inputCls} flex-1`}
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-gray-400 hover:bg-[#f26522]/10 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-sm"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#f26522]/10 text-[#f26522] border border-[#f26522]/20"
                    >
                      #{tag}
                      <button
                        onClick={() =>
                          update(
                            "tags",
                            form.tags.filter((t) => t !== tag),
                          )
                        }
                        className="hover:text-white transition-colors ml-0.5"
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1 1l6 6M7 1L1 7"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
                  {form.tags.length === 0 && (
                    <span className="text-xs text-gray-700">No tags yet</span>
                  )}
                </div>
              </div>
            </div>

            {/* Read time override */}
            <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">Read Time</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={readTime}
                    onChange={(e) => setReadTime(Number(e.target.value))}
                    className={`${inputCls} w-24`}
                  />
                </div>
                <p className="text-xs text-gray-600">
                  Auto-calculated:{" "}
                  {Math.max(
                    1,
                    Math.ceil(
                      form.content
                        .replace(/<[^>]+>/g, "")
                        .trim()
                        .split(/\s+/).length / 200,
                    ),
                  )}{" "}
                  min from content
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom save bar ── */}
        <div className="rounded-2xl p-4 flex items-center justify-between bg-white/[0.03] border border-white/[0.07] sticky bottom-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-xs">Changes are not auto-saved</p>
            <SeoScoreRing score={score} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="px-4 py-2.5 rounded-xl text-sm border border-white/10 text-gray-400 hover:border-white/20 hover:text-white transition-all disabled:opacity-40"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit()}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
            >
              {saving && (
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {mode === "new" ? "Create Post" : "Update Post"}
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .label-sm {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.375rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
