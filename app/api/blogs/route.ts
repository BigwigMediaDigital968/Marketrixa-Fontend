import { NextRequest, NextResponse } from "next/server";
import { getBlogs, createBlog } from "@/lib/blog-store";
import { BlogFormData } from "@/app/types/blog";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const industry = searchParams.get("industry");
    const search = searchParams.get("search")?.toLowerCase();

    let blogs = getBlogs();

    if (status && status !== "all") {
      blogs = blogs.filter((b) => b.status === status);
    }
    if (industry && industry !== "all") {
      blogs = blogs.filter((b) => b.industry === industry);
    }
    if (search) {
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(search) ||
          b.excerpt.toLowerCase().includes(search) ||
          b.tags.some((t) => t.toLowerCase().includes(search)),
      );
    }

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
    const body: BlogFormData = await req.json();

    // Basic validation
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 },
      );
    }

    // Auto-calculate read time (avg 200 words/min)
    const wordCount = body.content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    const blog = createBlog({ ...body, readTime });

    return NextResponse.json({ blog }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
