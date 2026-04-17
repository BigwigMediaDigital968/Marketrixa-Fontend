export type BlogStatus = "draft" | "published" | "archived";

export interface SEOFields {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  structuredData?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FAQGroup {
  id: string;
  title: string;
  description?: string;
  faqs: FAQ[];
  blogId?: string; // linked blog if any
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML from rich editor
  coverImage: string;
  coverImageAlt: string;
  author: string;
  industry: string;
  tags: string[];
  status: BlogStatus;
  seo: SEOFields;
  faqGroupId?: string;
  readTime: number; // minutes
  views: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  industry: string;
  tags: string[];
  status: BlogStatus;
  seo: SEOFields;
  faqGroupId?: string;
}
