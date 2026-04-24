import { NextRequest, NextResponse } from "next/server";
import {
  getBlogs,
  createBlog,
  upsertFAQGroupForBlog,
  updateBlog,
} from "@/lib/blog-store";
import { BlogFormData } from "@/app/types/blog";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const industry = searchParams.get("industry");
    const search = searchParams.get("search")?.toLowerCase();

    let blogs = getBlogs();

    if (status && status !== "all")
      blogs = blogs.filter((b) => b.status === status);
    if (industry && industry !== "all")
      blogs = blogs.filter((b) => b.industry === industry);
    if (search)
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(search) ||
          b.excerpt.toLowerCase().includes(search) ||
          b.tags.some((t) => t.toLowerCase().includes(search)),
      );

    return NextResponse.json({ blogs, total: blogs.length });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: BlogFormData & {
      faqs?: {
        title: string;
        description?: string;
        items: Array<{ question: string; answer: string }>;
      };
    } = await req.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 },
      );
    }

    const wordCount = body.content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Create the blog first (without faqGroupId yet)
    const { faqs, ...blogData } = body;
    const blog = createBlog({ ...blogData, readTime });

    // If the request included inline FAQs, create the group and link it
    if (faqs?.items?.length) {
      const group = upsertFAQGroupForBlog(blog.id, undefined, {
        title: faqs.title ?? `${blog.title} — FAQs`,
        description: faqs.description,
        faqs: faqs.items.map((f, i) => ({
          id: `f_${Date.now()}_${i}`,
          question: f.question,
          answer: f.answer,
          order: i + 1,
        })),
      });
      // Write faqGroupId back onto the blog
      updateBlog(blog.id, { faqGroupId: group.id });
      blog.faqGroupId = group.id;

      return NextResponse.json({ blog, faqGroup: group }, { status: 201 });
    }

    return NextResponse.json({ blog }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
