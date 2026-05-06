"use client";

import { useState } from "react";
import Link from "next/link";
import { Blog } from "@/app/types/blog";
import StatusBadge from "./Statusbadge";

interface BlogCardProps {
  blog: Blog;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Blog["status"]) => void;
}

export default function BlogCard({
  blog,
  onDelete,
  onStatusChange,
}: BlogCardProps) {
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const date = new Date(blog.updatedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleStatusChange = async (newStatus: Blog["status"]) => {
    setStatusUpdating(true);
    await onStatusChange(blog.id, newStatus);
    setStatusUpdating(false);
  };

  const handleDelete = async () => {
    if (!confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
    setDeleting(true);
    await onDelete(blog.id);
    // No need to reset — card will be removed from parent
  };

  return (
    <div
      className={`group glass rounded-2xl p-5 hover:border-[#f26522]/30 transition-all duration-300 hover:bg-white/[0.05] ${
        deleting ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* ── Main info ── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <StatusBadge status={blog.status} />
            {blog.industry && (
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {blog.industry}
              </span>
            )}
            {blog.faqGroupId && (
              <span className="text-xs text-indigo-400/70 bg-indigo-500/5 px-2 py-0.5 rounded-full border border-indigo-500/10">
                FAQ
              </span>
            )}
          </div>

          <h3 className="text-white font-semibold text-base leading-snug truncate group-hover:text-[#f26522] transition-colors">
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p className="text-gray-500 text-sm mt-1 line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-600">
            {blog.author && <span>{blog.author}</span>}
            {blog.author && blog.readTime && <span>·</span>}
            {blog.readTime && <span>{blog.readTime} min read</span>}
            <span>·</span>
            <span>Updated {date}</span>
            {blog.status === "published" && blog.views > 0 && (
              <>
                <span>·</span>
                <span>{blog.views.toLocaleString()} views</span>
              </>
            )}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {blog.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#f26522]/70 bg-[#f26522]/5 px-2 py-0.5 rounded-full border border-[#f26522]/10"
                >
                  #{tag}
                </span>
              ))}
              {blog.tags.length > 4 && (
                <span className="text-xs text-gray-600">
                  +{blog.tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* SEO meta hint */}
          {blog.seo?.metaTitle && (
            <p
              className="mt-2 text-xs text-gray-700 truncate"
              title={blog.seo.metaTitle}
            >
              <span className="text-gray-600 mr-1">SEO:</span>
              {blog.seo.metaTitle}
            </p>
          )}
        </div>

        {/* ── Actions ── */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href={`/blog-management/${blog.id}/edit`}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 hover:bg-[#f26522] hover:text-white border border-white/10 transition-all"
            >
              Edit
            </Link>

            {/* Status dropdown */}
            <div className="relative group/status">
              <button
                disabled={statusUpdating}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 transition-all disabled:opacity-50"
              >
                {statusUpdating ? (
                  <span className="inline-flex items-center gap-1">
                    <svg
                      className="animate-spin"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                      />
                    </svg>
                    …
                  </span>
                ) : (
                  "Status ▾"
                )}
              </button>
              {!statusUpdating && (
                <div className="absolute right-0 top-8 z-10 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[130px] hidden group-hover/status:block">
                  {(["draft", "published", "archived"] as Blog["status"][])
                    .filter((s) => s !== blog.status)
                    .map((s) => (
                      <button
                        key={s}
                        onClick={() => handleStatusChange(s)}
                        className="w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-[#f26522]/20 hover:text-[#f26522] capitalize transition-colors"
                      >
                        → {s}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all disabled:opacity-50"
            >
              {deleting ? "…" : "Delete"}
            </button>
          </div>

          {blog.status === "published" && blog.slug && (
            <Link
              href={`/blogs/${blog.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[#f26522] transition-colors"
            >
              View live ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
