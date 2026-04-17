import { NextRequest, NextResponse } from "next/server";
import { getBlogById, updateBlog, deleteBlog } from "@/lib/blog-store";

type Params = { params: { id: string } };

export async function GET(_req: NextRequest, { params }: Params) {
  const blog = getBlogById(params.id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ blog });
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const body = await req.json();
    const blog = updateBlog(params.id, body);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ blog });
  } catch {
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const deleted = deleteBlog(params.id);
  if (!deleted) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
