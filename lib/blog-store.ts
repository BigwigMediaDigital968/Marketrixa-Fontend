import { Blog, FAQ, FAQGroup } from "@/app/types/blog";

// ─── In-memory store ────────────────────────────────────────────────
// Replace with Prisma/Supabase/MongoDB calls in production

const blogs: Blog[] = [];

const faqGroups: FAQGroup[] = [];

// ─── Blog CRUD ───────────────────────────────────────────────────────

export function getBlogs(): Blog[] {
  return [...blogs].sort(
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
  return [...faqGroups];
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

// ─── FAQ helpers used internally by blog routes ─────────────────────

/** Find the FAQ group linked to a specific blog */
export function getFAQGroupByBlogId(blogId: string): FAQGroup | undefined {
  return faqGroups.find((g) => g.blogId === blogId);
}

/**
 * Upsert an FAQ group tied to a blog.
 * - If the blog already has an faqGroupId → update that group in-place.
 * - Otherwise → create a new group and return it so the caller can
 *   write faqGroupId back onto the blog record.
 */
export function upsertFAQGroupForBlog(
  blogId: string,
  existingGroupId: string | undefined,
  data: { title: string; description?: string; faqs: FAQ[] },
): FAQGroup {
  const now = new Date().toISOString();

  if (existingGroupId) {
    const idx = faqGroups.findIndex((g) => g.id === existingGroupId);
    if (idx !== -1) {
      faqGroups[idx] = { ...faqGroups[idx], ...data, blogId, updatedAt: now };
      return faqGroups[idx];
    }
  }

  const group: FAQGroup = {
    id: `faq_${Date.now()}`,
    ...data,
    blogId,
    createdAt: now,
    updatedAt: now,
  };
  faqGroups.push(group);
  return group;
}

/**
 * Remove the FAQ group that belongs to a blog (called on blog delete).
 * Silent no-op if the blog had no FAQ group.
 */
export function deleteFAQGroupForBlog(blogId: string): void {
  const idx = faqGroups.findIndex((g) => g.blogId === blogId);
  if (idx !== -1) faqGroups.splice(idx, 1);
}
