"use client";

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
  const date = new Date(blog.updatedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group glass rounded-2xl p-5 hover:border-[#f26522]/30 transition-all duration-300 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <StatusBadge status={blog.status} />
            {blog.industry && (
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                {blog.industry}
              </span>
            )}
          </div>

          <h3 className="text-white font-semibold text-base leading-snug truncate group-hover:text-[#f26522] transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-600">
            <span>{blog.author}</span>
            <span>·</span>
            <span>{blog.readTime} min read</span>
            <span>·</span>
            <span>Updated {date}</span>
            {blog.status === "published" && (
              <>
                <span>·</span>
                <span>{blog.views.toLocaleString()} views</span>
              </>
            )}
          </div>

          {blog.tags.length > 0 && (
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
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href={`/admin/blog-management/${blog.id}/edit`}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 hover:bg-[#f26522] hover:text-white border border-white/10 transition-all"
            >
              Edit
            </Link>

            <div className="relative group/status">
              <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 transition-all">
                Status ▾
              </button>
              <div className="absolute right-0 top-8 z-10 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl min-w-[130px] hidden group-hover/status:block">
                {(["draft", "published", "archived"] as Blog["status"][])
                  .filter((s) => s !== blog.status)
                  .map((s) => (
                    <button
                      key={s}
                      onClick={() => onStatusChange(blog.id, s)}
                      className="w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-[#f26522]/20 hover:text-[#f26522] capitalize transition-colors"
                    >
                      → {s}
                    </button>
                  ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (confirm(`Delete "${blog.title}"? This cannot be undone.`)) {
                  onDelete(blog.id);
                }
              }}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
            >
              Delete
            </button>
          </div>

          <Link
            href={`/blogs/${blog.slug}`}
            target="_blank"
            className="text-xs text-gray-600 hover:text-[#f26522] transition-colors"
          >
            View live ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
