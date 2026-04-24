"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Blog } from "@/app/types/blog";
import BlogCard from "@/app/component/admin/blog/Blogcard";

const INDUSTRIES = [
  "All",
  "Technology",
  "Sales",
  "Marketing",
  "Finance",
  "Healthcare",
  "Manufacturing",
];

export default function BlogManagementPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 350);
    return () => clearTimeout(t);
  }, [search]);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        ...(status !== "all" && { status }),
        ...(industry !== "all" && { industry }),
        ...(debouncedSearch && { search: debouncedSearch }),
      });
      const res = await fetch(`/api/blogs?${params}`);
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch {
      console.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  }, [status, industry, debouncedSearch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleDelete = async (id: string) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const handleStatusChange = async (id: string, newStatus: Blog["status"]) => {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    const data = await res.json();
    if (data.blog) {
      setBlogs((prev) => prev.map((b) => (b.id === id ? data.blog : b)));
    }
  };

  const stats = {
    total: blogs.length,
    published: blogs.filter((b) => b.status === "published").length,
    draft: blogs.filter((b) => b.status === "draft").length,
    archived: blogs.filter((b) => b.status === "archived").length,
    totalViews: blogs.reduce((s, b) => s + b.views, 0),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-[#f26522] text-xs font-semibold tracking-[0.2em] uppercase mb-1">
              Content Studio
            </p>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Blog Management
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Create, manage and publish blog posts for Marketrixa
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog-management/faqs"
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-400 hover:border-[#f26522]/40 hover:text-[#f26522] transition-all flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M7 5v2.5M7 9.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              FAQ Manager
            </Link>
            <Link
              href="/blog-management/new"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/25 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v12M1 7h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              New Blog
            </Link>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {
              label: "Total Blogs",
              value: stats.total,
              color: "text-white",
              bg: "from-white/5 to-white/[0.02]",
            },
            {
              label: "Published",
              value: stats.published,
              color: "text-emerald-400",
              bg: "from-emerald-500/10 to-emerald-500/[0.02]",
            },
            {
              label: "Drafts",
              value: stats.draft,
              color: "text-amber-400",
              bg: "from-amber-500/10 to-amber-500/[0.02]",
            },
            {
              label: "Archived",
              value: stats.archived,
              color: "text-gray-400",
              bg: "from-white/5 to-white/[0.02]",
            },
            {
              label: "Total Views",
              value: stats.totalViews.toLocaleString(),
              color: "text-[#f26522]",
              bg: "from-[#f26522]/10 to-[#f26522]/[0.02]",
            },
          ].map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-4 text-center bg-gradient-to-b ${s.bg} border border-white/[0.06] backdrop-blur`}
            >
              <p className={`text-2xl font-bold tabular-nums ${s.color}`}>
                {s.value}
              </p>
              <p className="text-gray-500 text-xs mt-0.5 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="rounded-2xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white/[0.03] border border-white/[0.06]">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M10 10l3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, excerpt, tag…"
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#f26522]/50 transition-colors"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#f26522]/50 cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#f26522]/50 cursor-pointer"
          >
            {INDUSTRIES.map((i) => (
              <option key={i} value={i === "All" ? "all" : i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* ── Blog List ── */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="rounded-2xl p-16 text-center bg-white/[0.02] border border-white/[0.06] border-dashed">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M6 4h12l6 6v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                  stroke="#6b7280"
                  strokeWidth="1.5"
                />
                <path
                  d="M18 4v6h6M10 14h8M10 19h5"
                  stroke="#6b7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg">No blogs found</p>
            <p className="text-gray-500 text-sm mt-1">
              {search || status !== "all" || industry !== "all"
                ? "Try adjusting your filters"
                : "Get started by creating your first blog post"}
            </p>
            {!search && status === "all" && industry === "all" && (
              <Link
                href="/admin/blog-management/new"
                className="inline-flex items-center gap-2 mt-5 px-6 py-2.5 rounded-xl bg-[#f26522] text-white text-sm font-semibold hover:bg-[#f26522]/80 transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Create First Blog
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
