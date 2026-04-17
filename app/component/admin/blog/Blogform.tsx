"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import {
  Blog,
  BlogFormData,
  BlogStatus,
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

interface BlogFormProps {
  initialData?: Blog;
  mode: "new" | "edit";
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogForm({ initialData, mode }: BlogFormProps) {
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
  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [autoSlug, setAutoSlug] = useState(mode === "new");
  const [faqGroups, setFaqGroups] = useState<{ id: string; title: string }[]>(
    [],
  );
  const [activeTab, setActiveTab] = useState<"content" | "seo" | "settings">(
    "content",
  );
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Load FAQ groups
  useEffect(() => {
    fetch("/api/faqs")
      .then((r) => r.json())
      .then((d) =>
        setFaqGroups(
          d.groups?.map((g: { id: string; title: string }) => ({
            id: g.id,
            title: g.title,
          })) || [],
        ),
      )
      .catch(() => {});
  }, []);

  // Auto-slug from title
  useEffect(() => {
    if (autoSlug && form.title) {
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
    }
  }, [form.title, autoSlug]);

  // Auto-fill SEO title
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

  const update = useCallback(
    <K extends keyof BlogFormData>(key: K, val: BlogFormData[K]) => {
      setForm((p) => ({ ...p, [key]: val }));
    },
    [],
  );

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      update("tags", [...form.tags, t]);
    }
    setTagInput("");
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) update("coverImage", data.url);
  };

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
      const payload = {
        ...form,
        ...(overrideStatus ? { status: overrideStatus } : {}),
      };
      const url =
        mode === "new" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
      const method = mode === "new" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      router.push("/admin/blog-management");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors";

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              ←
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {mode === "new" ? "New Blog Post" : "Edit Blog Post"}
              </h1>
              {initialData && <StatusBadge status={form.status} />}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-300 hover:border-[#f26522]/50 hover:text-[#f26522] transition-all disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit("published")}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
            >
              {saving && (
                <span className="w-3.5 h-3.5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
              )}
              {form.status === "published" ? "Update" : "Publish"}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-white/5 rounded-xl p-1 w-fit">
          {(["content", "seo", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? "bg-[#f26522] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "content"
                ? "✍ Content"
                : tab === "seo"
                ? "🔍 SEO"
                : "⚙ Settings"}
            </button>
          ))}
        </div>

        {/* ── CONTENT TAB ── */}
        {activeTab === "content" && (
          <div className="space-y-5">
            {/* Cover image */}
            <div className="glass rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-gray-300">
                Cover Image
              </h3>
              <div className="flex gap-4">
                {form.coverImage ? (
                  <div className="relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={form.coverImage}
                      alt="cover"
                      className="w-40 h-24 object-cover rounded-xl border border-white/10"
                    />
                    <button
                      onClick={() => update("coverImage", "")}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full hidden group-hover:flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => coverInputRef.current?.click()}
                    className="w-40 h-24 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#f26522]/50 transition-all text-gray-500 hover:text-[#f26522]"
                  >
                    <span className="text-2xl">📷</span>
                    <span className="text-xs mt-1">Upload cover</span>
                  </div>
                )}
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCoverUpload}
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={form.coverImageAlt}
                    onChange={(e) => update("coverImageAlt", e.target.value)}
                    placeholder="Cover image alt text (SEO)..."
                    className={inputCls}
                  />
                </div>
              </div>
            </div>

            {/* Title + slug */}
            <div className="glass rounded-2xl p-5 space-y-4">
              <div>
                <label className="label-sm">Blog Title *</label>
                <input
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="Enter a compelling blog title..."
                  className={`${inputCls} text-lg font-semibold`}
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="label-sm">URL Slug *</label>
                  <button
                    type="button"
                    onClick={() => {
                      setAutoSlug(true);
                      update("slug", slugify(form.title));
                    }}
                    className="text-xs text-[#f26522]/70 hover:text-[#f26522] transition-colors"
                  >
                    Auto-generate
                  </button>
                </div>
                <div className="flex items-center gap-0">
                  <span className="px-3 py-2.5 bg-white/5 border border-r-0 border-white/10 rounded-l-xl text-gray-500 text-xs">
                    /blogs/
                  </span>
                  <input
                    value={form.slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      update("slug", slugify(e.target.value));
                    }}
                    placeholder="your-blog-slug"
                    className="flex-1 bg-white/5 border border-white/10 rounded-r-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60 font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="label-sm">Excerpt / Summary</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  placeholder="Brief summary shown on blog listings and social shares (150-200 chars)..."
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>

            {/* Editor */}
            <div className="space-y-2">
              <label className="label-sm">Content *</label>
              <BlogEditor
                content={form.content}
                onChange={(html) => update("content", html)}
              />
            </div>
          </div>
        )}

        {/* ── SEO TAB ── */}
        {activeTab === "seo" && (
          <SEOFields seo={form.seo} onChange={(seo) => update("seo", seo)} />
        )}

        {/* ── SETTINGS TAB ── */}
        {activeTab === "settings" && (
          <div className="glass rounded-2xl p-5 space-y-5">
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
              <label className="label-sm">Status</label>
              <select
                value={form.status}
                onChange={(e) => update("status", e.target.value as BlogStatus)}
                className={inputCls + " cursor-pointer"}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
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
                  placeholder="Add tag and press Enter..."
                  className={`${inputCls} flex-1`}
                />
                <button
                  onClick={addTag}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-[#f26522]/20 hover:text-[#f26522] transition-all text-sm"
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
                      className="hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {faqGroups.length > 0 && (
              <div>
                <label className="label-sm">Linked FAQ Group</label>
                <select
                  value={form.faqGroupId || ""}
                  onChange={(e) =>
                    update("faqGroupId", e.target.value || undefined)
                  }
                  className={inputCls + " cursor-pointer"}
                >
                  <option value="">— No FAQ group —</option>
                  {faqGroups.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Save bar */}
        <div className="glass rounded-2xl p-4 flex items-center justify-between">
          <p className="text-gray-500 text-xs">Changes are not auto-saved</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-sm border border-white/10 text-gray-300 hover:border-white/30 transition-all disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit()}
              disabled={saving}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
            >
              {saving && (
                <span className="w-3.5 h-3.5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
              )}
              {mode === "new" ? "Create Post" : "Update Post"}
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .label-sm {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          color: #9ca3af;
          margin-bottom: 0.375rem;
        }
      `}</style>
    </div>
  );
}
