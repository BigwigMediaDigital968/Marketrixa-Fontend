import { NextRequest, NextResponse } from "next/server";
import { getFAQGroups, createFAQGroup } from "@/lib/blog-store";

export async function GET() {
  try {
    const groups = getFAQGroups();
    return NextResponse.json({ groups, total: groups.length });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch FAQ groups" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    const group = createFAQGroup({
      title: body.title,
      description: body.description || "",
      faqs: body.faqs || [],
      blogId: body.blogId,
    });
    return NextResponse.json({ group }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create FAQ group" },
      { status: 500 },
    );
  }
}
