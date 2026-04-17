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

  // Debounce search
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
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
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
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-300 hover:border-[#f26522]/50 hover:text-[#f26522] transition-all"
            >
              📋 FAQ Manager
            </Link>
            <Link
              href="/blog-management/new"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20"
            >
              + New Blog
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { label: "Total Blogs", value: stats.total, color: "text-white" },
            {
              label: "Published",
              value: stats.published,
              color: "text-green-400",
            },
            { label: "Drafts", value: stats.draft, color: "text-yellow-400" },
            {
              label: "Archived",
              value: stats.archived,
              color: "text-gray-400",
            },
            {
              label: "Total Views",
              value: stats.totalViews.toLocaleString(),
              color: "text-[#f26522]",
            },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-gray-600 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="glass rounded-2xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs by title, excerpt, tag..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f26522]/50"
            />
          </div>

          {/* Status filter */}
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

          {/* Industry filter */}
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

        {/* Blog list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="glass rounded-2xl p-16 text-center">
            <p className="text-5xl mb-4">📝</p>
            <p className="text-white font-semibold text-lg">No blogs found</p>
            <p className="text-gray-500 text-sm mt-1">
              {search || status !== "all" || industry !== "all"
                ? "Try adjusting your filters"
                : "Get started by creating your first blog post"}
            </p>
            {!search && status === "all" && industry === "all" && (
              <Link
                href="/admin/blog-management/new"
                className="inline-block mt-5 px-6 py-2.5 rounded-xl bg-[#f26522] text-white text-sm font-semibold hover:bg-[#f26522]/80 transition-all"
              >
                + Create First Blog
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
