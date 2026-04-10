"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing Strategies",
    excerpt:
      "Explore how machine learning is reshaping audience targeting and personalized content delivery in 2024.",
    category: "Technology",
    date: "April 12, 2024",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Mastering Social Media Algorithms for Brand Growth",
    excerpt:
      "Stop chasing trends and start building communities that last through strategic engagement patterns.",
    category: "Social Media",
    date: "April 10, 2024",
    author: "Marketrixa",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Why Branding is More Than Just a Logo Design",
    excerpt:
      "Understanding the psychological impact of brand identity on consumer trust and long-term loyalty.",
    category: "Branding",
    date: "April 08, 2024",
    author: "Expert",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blogs() {
  return (
    <section className="glass py-24 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#F26522] uppercase tracking-[0.3em] text-[10px] font-black mb-4 block"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white"
            >
              Our Recent <span className="text-[#F26522]">Articles</span>
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 text-white font-bold hover:text-[#F26522] transition-colors cursor-pointer"
          >
            Explore All News
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F26522] group-hover:border-[#F26522] group-hover:text-black transition-all">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-white/5 border border-white/10 overflow-hidden hover:border-[#F26522]/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F26522] text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#F26522]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[#F26522]" />
                    By {post.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#F26522] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn cursor-pointer"
                >
                  Read Article
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-[#F26522] group-hover/btn:text-black transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
