"use client";

import React from "react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  subCategory?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Gen AI Development Companies in India (2026)",
    excerpt:
      "The race to deploy AI is real, and the skills gap is the biggest problem. McKinsey's survey found that 71% of organizations now regularly use generative AI in at least one business function — yet most still struggle to find the right development partner.",
    category: "AI",
    subCategory: "Guides Strategies",
    date: "April 10, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    featured: true,
    tags: ["GenAI", "India", "Development"],
  },
  {
    id: 2,
    title: "9 Top Google Ads Alternatives to Boost Your Reach",
    excerpt:
      "More budget doesn't always solve performance issues. Discover the top platforms that smart marketers are using to diversify their paid acquisition in 2026.",
    category: "PPC",
    subCategory: "Guides Strategies",
    date: "April 2, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    featured: false,
    tags: ["PPC", "Google Ads", "Marketing"],
  },
  {
    id: 3,
    title: "66 Key PPC Statistics Every Marketer Should Know in 2026",
    excerpt:
      "Data-driven marketers dominate. From click-through rates to conversion benchmarks, these essential PPC statistics will reshape how you plan your next campaign.",
    category: "PPC",
    date: "December 1, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    featured: false,
    tags: ["PPC", "Statistics", "Data"],
  },
  {
    id: 4,
    title: "89 Key SEO Statistics Every Marketer Should Know in 2026",
    excerpt:
      "Search is evolving faster than ever. These 89 SEO statistics reveal where traffic is coming from, what Google prioritizes, and how top-ranking pages are winning organic search.",
    category: "SEO",
    date: "August 8, 2025",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80",
    featured: false,
    tags: ["SEO", "Statistics", "Organic"],
  },
  {
    id: 5,
    title: "SEO for Startups: From Strategy Creation to Proven Tactics",
    excerpt:
      "Startups can't afford to ignore SEO. This guide walks you through building a scalable SEO strategy from zero — keyword research, technical foundations, and content that compounds.",
    category: "SEO",
    subCategory: "Guides Strategies",
    date: "July 31, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    featured: false,
    tags: ["SEO", "Startups", "Strategy"],
  },
  {
    id: 6,
    title: "B2B SaaS Content Marketing: The Complete 2026 Playbook",
    excerpt:
      "Content remains the highest-ROI channel for SaaS companies. Learn how leading B2B brands are combining thought leadership, SEO, and distribution to drive qualified pipeline.",
    category: "SaaS",
    subCategory: "B2B",
    date: "March 15, 2026",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    featured: false,
    tags: ["SaaS", "B2B", "Content"],
  },
  {
    id: 7,
    title: "How Influencer Marketing is Reshaping E-Commerce in 2026",
    excerpt:
      "From mega-influencers to nano-creators, the influencer economy has fundamentally changed how brands acquire customers online. Here's what's working right now.",
    category: "Influencer Marketing",
    subCategory: "Ecommerce",
    date: "February 28, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=80",
    featured: false,
    tags: ["Influencer", "Ecommerce", "Social"],
  },
  {
    id: 8,
    title: "Digital Marketing Trends Dominating Healthcare in 2026",
    excerpt:
      "Healthcare brands face unique digital challenges — from compliance hurdles to patient trust. Discover the channels and tactics driving real patient acquisition today.",
    category: "Healthcare",
    subCategory: "Digital Marketing",
    date: "January 20, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    featured: false,
    tags: ["Healthcare", "Digital", "Marketing"],
  },
  {
    id: 9,
    title: "Crypto Content Marketing: Building Trust in a Volatile Market",
    excerpt:
      "In a space filled with noise and skepticism, authentic content is your strongest asset. Learn how leading crypto projects are building loyal communities through strategic storytelling.",
    category: "Crypto",
    date: "December 10, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=900&q=80",
    featured: false,
    tags: ["Crypto", "Community", "Content"],
  },
  {
    id: 10,
    title: "Video Production for Social Media: A Brand's Complete Guide",
    excerpt:
      "Short-form video is no longer optional. From scripting to distribution, this guide covers everything your brand needs to produce high-converting video content at scale.",
    category: "Video Production",
    date: "November 5, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    featured: false,
    tags: ["Video", "Social Media", "Brand"],
  },
  {
    id: 11,
    title: "Email Marketing Automation: Sequences That Convert in 2026",
    excerpt:
      "Generic newsletters are dead. The brands winning email are using smart segmentation, behavioral triggers, and personalized journeys that feel 1-to-1 at scale.",
    category: "Email",
    date: "October 22, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=80",
    featured: false,
    tags: ["Email", "Automation", "Conversion"],
  },
  {
    id: 12,
    title: "Real Estate Digital Marketing: Closing More Deals Online",
    excerpt:
      "The modern homebuyer's journey starts on Google. Discover the digital channels — from local SEO to retargeting — that top real estate agencies are using to fill their pipeline.",
    category: "Real Estate",
    date: "September 14, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    featured: false,
    tags: ["Real Estate", "Digital", "Leads"],
  },
];

interface FeaturedBlogProps {
  post: BlogPost;
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ post }) => {
  return (
    <article className="featured-blog-card group relative overflow-hidden rounded-3xl cursor-pointer">
      {/* Background Image */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Orange accent line */}
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ background: "var(--brand-orange)" }}
        />

        {/* Featured Badge */}
        <div className="absolute top-6 left-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "var(--brand-orange)",
              color: "var(--brand-white)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.subCategory && (
              <span
                className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider"
                style={{
                  background: "rgba(242,101,34,0.15)",
                  border: "1px solid rgba(242,101,34,0.4)",
                  color: "var(--brand-orange)",
                }}
              >
                {post.subCategory}
              </span>
            )}
            <span
              className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 max-w-2xl line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.readTime}
              </span>
            </div>

            {/* Read More Button */}
            <button
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: "var(--brand-orange)",
                color: "white",
              }}
            >
              Read Article
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-blog-card {
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 32px 64px -16px rgba(0, 0, 0, 0.6);
          transition:
            box-shadow 0.4s ease,
            transform 0.4s ease;
        }
        .featured-blog-card:hover {
          box-shadow:
            0 0 0 1px rgba(242, 101, 34, 0.3),
            0 40px 80px -16px rgba(242, 101, 34, 0.15),
            0 0 60px -20px rgba(242, 101, 34, 0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </article>
  );
};

export default FeaturedBlog;
