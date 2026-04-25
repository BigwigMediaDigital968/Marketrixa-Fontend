import { NextRequest, NextResponse } from "next/server";
import {
  getBlogById,
  updateBlog,
  deleteBlog,
  getFAQGroupByBlogId,
  upsertFAQGroupForBlog,
  deleteFAQGroupForBlog,
} from "@/lib/blog-store";

// type Params = { params: Promise<{ id: string }> };

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  const blog = getBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // Inline FAQ group if one is linked
  const faqGroup = getFAQGroupByBlogId(id);
  return NextResponse.json({ blog, faqGroup: faqGroup ?? null });
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const body: Partial<Parameters<typeof updateBlog>[1]> & {
      faqs?: {
        title: string;
        description?: string;
        items: Array<{ question: string; answer: string }>;
      };
    } = await req.json();

    const { faqs, ...blogData } = body;
    const blog = updateBlog(id, blogData);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    let faqGroup = null;
    if (faqs !== undefined) {
      if (faqs.items?.length) {
        faqGroup = upsertFAQGroupForBlog(id, blog.faqGroupId, {
          title: faqs.title ?? `${blog.title} — FAQs`,
          description: faqs.description,
          faqs: faqs.items.map((f, i) => ({
            id: `f_${Date.now()}_${i}`,
            question: f.question,
            answer: f.answer,
            order: i + 1,
          })),
        });
        if (!blog.faqGroupId) {
          updateBlog(id, { faqGroupId: faqGroup.id });
          blog.faqGroupId = faqGroup.id;
        }
      } else {
        deleteFAQGroupForBlog(id);
        updateBlog(id, { faqGroupId: undefined });
        blog.faqGroupId = undefined;
      }
    }

    return NextResponse.json({ blog, faqGroup });
  } catch {
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = await params;

  // Clean up the linked FAQ group first
  deleteFAQGroupForBlog(id);

  const deleted = deleteBlog(id);
  if (!deleted) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
