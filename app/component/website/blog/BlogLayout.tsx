"use client";

import React, { useState, useMemo } from "react";
import FeaturedBlog, { blogPosts, BlogPost } from "./FeaturedBlog";

// ─── Constants ───────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 6;

const ALL_CATEGORIES = [
  "All",
  "AI",
  "B2B",
  "B2C",
  "Crypto",
  "Design",
  "Digital Marketing",
  "Ecommerce",
  "Email",
  "Financial",
  "Healthcare",
  "iGaming",
  "Influencer Marketing",
  "PPC",
  "PR",
  "Real Estate",
  "SaaS",
  "SEO",
  "Social Media",
  "Video Production",
];

// ─── BlogCard ────────────────────────────────────────────────────────────────

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => {
  return (
    <article
      className="blog-card group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer h-full"
      style={{
        animationDelay: `${index * 60}ms`,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Category pill on image */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
            style={{
              background: "var(--brand-orange)",
              color: "white",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Sub-category */}
        {post.subCategory && (
          <span
            className="text-xs font-medium uppercase tracking-widest mb-3 inline-block"
            style={{ color: "rgba(242,101,34,0.8)" }}
          >
            {post.subCategory}
          </span>
        )}

        {/* Title */}
        <h3
          className="text-base sm:text-lg font-bold leading-snug mb-3 text-white group-hover:text-[#f26522] transition-colors duration-300 line-clamp-2"
          style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div
          className="my-4 h-px w-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/40 text-xs">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
            <span>{post.readTime}</span>
          </div>

          <button
            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group/arrow"
            style={{ color: "var(--brand-orange)" }}
          >
            Read
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/arrow:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom orange bar on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--brand-orange)" }}
      />

      <style jsx>{`
        .blog-card:hover {
          border-color: rgba(242, 101, 34, 0.25);
          box-shadow:
            0 12px 40px -12px rgba(242, 101, 34, 0.15),
            0 0 0 1px rgba(242, 101, 34, 0.1);
          transform: translateY(-4px);
        }
      `}</style>
    </article>
  );
};

// ─── Pagination ───────────────────────────────────────────────────────────────

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  );

  // Insert ellipsis markers
  const withEllipsis: (number | "...")[] = [];
  let prev: number | null = null;
  for (const p of visiblePages) {
    if (prev !== null && p - prev > 1) withEllipsis.push("...");
    withEllipsis.push(p);
    prev = p;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
        }}
        aria-label="Previous page"
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
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page numbers */}
      {withEllipsis.map((item, i) =>
        item === "..." ? (
          <span key={`ellipsis-${i}`} className="text-white/30 px-1 text-sm">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item as number)}
            className="w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={
              currentPage === item
                ? {
                    background: "var(--brand-orange)",
                    color: "white",
                    border: "1px solid var(--brand-orange)",
                    boxShadow: "0 0 20px rgba(242,101,34,0.4)",
                  }
                : {
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.6)",
                  }
            }
          >
            {item}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
        }}
        aria-label="Next page"
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
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// ─── BlogLayout ───────────────────────────────────────────────────────────────

const BlogLayout: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const gridPosts = blogPosts.filter((p) => !p.featured);

  // Filter
  const filteredPosts = useMemo(() => {
    let posts = gridPosts;

    if (activeCategory !== "All") {
      posts = posts.filter(
        (p) =>
          p.category === activeCategory ||
          p.subCategory === activeCategory ||
          p.tags?.includes(activeCategory),
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    return posts;
  }, [activeCategory, searchQuery, gridPosts]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(
    () =>
      filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE,
      ),
    [filteredPosts, currentPage],
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--brand-white)" }}>
      {/* ── Header ── */}
      <header className="relative pt-16 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "var(--brand-orange)" }}
        />
        <div
          className="absolute -top-16 right-0 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none"
          style={{ background: "#f26522" }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                style={{ color: "var(--brand-orange)" }}
              >
                Knowledge Hub
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none text-white">
                Our articles,{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--brand-orange)" }}
                >
                  guides
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                    style={{ background: "var(--brand-orange)", opacity: 0.5 }}
                  />
                </span>
                ,<br className="hidden sm:block" /> strategies
              </h1>
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-72">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: "rgba(255,255,255,0.3)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-full text-sm outline-none placeholder-white/30 text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(242,101,34,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(242,101,34,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Category Filter ── */}
      <section className="px-4 sm:px-8 lg:px-16 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex flex-wrap gap-2 pb-1">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer"
                  style={
                    activeCategory === cat
                      ? {
                          background: "var(--brand-orange)",
                          color: "white",
                          border: "1px solid var(--brand-orange)",
                          boxShadow: "0 4px 16px rgba(242,101,34,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.6)",
                        }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* ── Featured Post ── */}
          {activeCategory === "All" && !searchQuery && (
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] px-4"
                  style={{ color: "var(--brand-orange)" }}
                >
                  Featured
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </div>
              <FeaturedBlog post={featuredPost} />
            </section>
          )}

          {/* ── Blog Grid ── */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-1 h-7 rounded-full"
                  style={{ background: "var(--brand-orange)" }}
                />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {activeCategory === "All"
                    ? "Latest Articles"
                    : activeCategory}
                </h2>
                <span
                  className="text-sm px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(242,101,34,0.1)",
                    border: "1px solid rgba(242,101,34,0.2)",
                    color: "var(--brand-orange)",
                  }}
                >
                  {filteredPosts.length}
                </span>
              </div>
            </div>

            {/* Empty state */}
            {paginatedPosts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(242,101,34,0.1)",
                    border: "1px solid rgba(242,101,34,0.2)",
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "var(--brand-orange)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Try a different category or search term.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 cursor-pointer"
                  style={{ background: "var(--brand-orange)" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedPosts.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(p) => {
                    setCurrentPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />

                {/* Results info */}
                <p className="text-center text-xs text-white/25 mt-4">
                  Showing{" "}
                  {Math.min(
                    (currentPage - 1) * POSTS_PER_PAGE + 1,
                    filteredPosts.length,
                  )}
                  –
                  {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)}{" "}
                  of {filteredPosts.length} articles
                </p>
              </>
            )}
          </section>
        </div>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .blog-card {
          animation: fadeUp 0.5s ease both;
        }
      `}</style>
    </div>
  );
};

export default BlogLayout;
