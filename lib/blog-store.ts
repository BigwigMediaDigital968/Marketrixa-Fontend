import { Blog, FAQGroup } from "@/app/types/blog";

// ─── In-memory store ────────────────────────────────────────────────
// Replace with Prisma/Supabase/MongoDB calls in production

const blogs: Blog[] = [
  {
    id: "1",
    title: "How AI is Transforming B2B Marketing in 2025",
    slug: "ai-transforming-b2b-marketing-2025",
    excerpt:
      "Artificial Intelligence is reshaping how businesses approach their marketing strategies, from lead generation to personalized outreach.",
    content: "<p>Full blog content here...</p>",
    coverImage: "",
    coverImageAlt: "AI transforming B2B marketing",
    author: "Marketrixa Team",
    industry: "Technology",
    tags: ["AI", "B2B", "Marketing", "2025"],
    status: "published",
    seo: {
      metaTitle: "How AI is Transforming B2B Marketing in 2025 | Marketrixa",
      metaDescription:
        "Discover how AI tools are reshaping B2B marketing strategies in 2025.",
      metaKeywords:
        "AI, B2B marketing, artificial intelligence, marketing automation",
      ogTitle: "How AI is Transforming B2B Marketing in 2025",
      ogDescription: "AI is reshaping B2B marketing. Here's how.",
      ogImage: "",
      canonicalUrl:
        "https://marketrixa.com/blogs/ai-transforming-b2b-marketing-2025",
    },
    readTime: 8,
    views: 1240,
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    publishedAt: new Date(Date.now() - 86400000 * 8).toISOString(),
  },
  {
    id: "2",
    title: "Lead Generation Strategies That Actually Work",
    slug: "lead-generation-strategies-2025",
    excerpt:
      "Stop wasting budget on tactics that don't convert. These proven lead generation strategies deliver real ROI.",
    content: "<p>Full blog content here...</p>",
    coverImage: "",
    coverImageAlt: "Lead generation strategies",
    author: "Marketrixa Team",
    industry: "Sales",
    tags: ["Lead Generation", "Sales", "ROI"],
    status: "draft",
    seo: {
      metaTitle: "Lead Generation Strategies That Actually Work | Marketrixa",
      metaDescription: "Proven lead generation strategies for B2B businesses.",
      metaKeywords: "lead generation, B2B sales, marketing strategy",
      ogTitle: "Lead Generation Strategies That Actually Work",
      ogDescription: "Proven strategies to generate quality leads.",
      ogImage: "",
      canonicalUrl:
        "https://marketrixa.com/blogs/lead-generation-strategies-2025",
    },
    readTime: 6,
    views: 0,
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
];

const faqGroups: FAQGroup[] = [
  {
    id: "faq1",
    title: "General FAQ",
    description: "Common questions about our services",
    faqs: [
      {
        id: "f1",
        question: "What industries does Marketrixa serve?",
        answer:
          "Marketrixa serves a wide range of B2B industries including technology, SaaS, manufacturing, professional services, and more.",
        order: 1,
      },
      {
        id: "f2",
        question: "How long does onboarding take?",
        answer:
          "Our onboarding process typically takes 1-2 weeks depending on the complexity of your requirements.",
        order: 2,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// ─── Blog CRUD ───────────────────────────────────────────────────────

export function getBlogs(): Blog[] {
  return blogs.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((b) => b.id === id);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function createBlog(
  data: Omit<Blog, "id" | "views" | "createdAt" | "updatedAt">,
): Blog {
  const blog: Blog = {
    ...data,
    id: Date.now().toString(),
    views: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt:
      data.status === "published" ? new Date().toISOString() : undefined,
  };
  blogs.push(blog);
  return blog;
}

export function updateBlog(id: string, data: Partial<Blog>): Blog | null {
  const idx = blogs.findIndex((b) => b.id === id);
  if (idx === -1) return null;
  const wasPublished =
    blogs[idx].status !== "published" && data.status === "published";
  blogs[idx] = {
    ...blogs[idx],
    ...data,
    updatedAt: new Date().toISOString(),
    publishedAt: wasPublished
      ? new Date().toISOString()
      : blogs[idx].publishedAt,
  };
  return blogs[idx];
}

export function deleteBlog(id: string): boolean {
  const idx = blogs.findIndex((b) => b.id === id);
  if (idx === -1) return false;
  blogs.splice(idx, 1);
  return true;
}

// ─── FAQ CRUD ────────────────────────────────────────────────────────

export function getFAQGroups(): FAQGroup[] {
  return faqGroups;
}

export function getFAQGroupById(id: string): FAQGroup | undefined {
  return faqGroups.find((g) => g.id === id);
}

export function createFAQGroup(
  data: Omit<FAQGroup, "id" | "createdAt" | "updatedAt">,
): FAQGroup {
  const group: FAQGroup = {
    ...data,
    id: `faq_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  faqGroups.push(group);
  return group;
}

export function updateFAQGroup(
  id: string,
  data: Partial<FAQGroup>,
): FAQGroup | null {
  const idx = faqGroups.findIndex((g) => g.id === id);
  if (idx === -1) return null;
  faqGroups[idx] = {
    ...faqGroups[idx],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return faqGroups[idx];
}

export function deleteFAQGroup(id: string): boolean {
  const idx = faqGroups.findIndex((g) => g.id === id);
  if (idx === -1) return false;
  faqGroups.splice(idx, 1);
  return true;
}
