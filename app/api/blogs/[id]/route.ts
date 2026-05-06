import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { Blog, FAQGroup } from "@/app/types/blog";

type Params = { params: Promise<{ id: string }> };

// ─── Serializers ──────────────────────────────────────────────────────────────
function serializeBlog(id: string, data: Record<string, any>): Blog {
  return {
    ...(data as Omit<Blog, "id" | "createdAt" | "updatedAt" | "publishedAt">),
    id,
    createdAt:
      data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt ?? "",
    updatedAt:
      data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt ?? "",
    publishedAt:
      data.publishedAt?.toDate?.()?.toISOString() ??
      data.publishedAt ??
      undefined,
  };
}

function serializeFAQGroup(id: string, data: Record<string, any>): FAQGroup {
  return {
    ...(data as Omit<FAQGroup, "id" | "createdAt" | "updatedAt">),
    id,
    createdAt:
      data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt ?? "",
    updatedAt:
      data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt ?? "",
  };
}

// ─── Helper: find FAQ group linked to a blog ──────────────────────────────────
async function getFAQGroupByBlogId(blogId: string): Promise<FAQGroup | null> {
  const q = query(collection(db, "faqGroups"), where("blogId", "==", blogId));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return serializeFAQGroup(d.id, d.data());
}

// ─── GET /api/blogs/[id] ──────────────────────────────────────────────────────
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const blogSnap = await getDoc(doc(db, "blogs", id));
    if (!blogSnap.exists()) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const blog = serializeBlog(blogSnap.id, blogSnap.data());
    const faqGroup = await getFAQGroupByBlogId(id);

    return NextResponse.json({ blog, faqGroup });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

// ─── PUT /api/blogs/[id] ──────────────────────────────────────────────────────
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const blogSnap = await getDoc(doc(db, "blogs", id));
    if (!blogSnap.exists()) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const existing = blogSnap.data();
    const body: Record<string, any> = await req.json();
    const { faqs, ...blogData } = body;

    const now = Timestamp.now();
    const nowISO = now.toDate().toISOString();
    const wasPublished =
      existing.status !== "published" && blogData.status === "published";

    const updatePayload: Record<string, any> = {
      ...blogData,
      updatedAt: now,
      ...(wasPublished && { publishedAt: now }),
    };

    await updateDoc(doc(db, "blogs", id), updatePayload);

    // Re-fetch to get the full updated document
    const updatedSnap = await getDoc(doc(db, "blogs", id));
    const blog = serializeBlog(updatedSnap.id, updatedSnap.data()!);

    // ── FAQ handling ──────────────────────────────────────────────────────────
    let faqGroup: FAQGroup | null = null;

    if (faqs !== undefined) {
      const existingFAQ = await getFAQGroupByBlogId(id);

      if (faqs.items?.length) {
        const faqPayload = {
          blogId: id,
          title: faqs.title ?? `${blog.title} — FAQs`,
          description: faqs.description ?? "",
          faqs: faqs.items.map((f: any, i: number) => ({
            id: `f_${Date.now()}_${i}`,
            question: f.question,
            answer: f.answer,
            order: i + 1,
          })),
          updatedAt: now,
        };

        if (existingFAQ) {
          await updateDoc(doc(db, "faqGroups", existingFAQ.id), faqPayload);
          const snap = await getDoc(doc(db, "faqGroups", existingFAQ.id));
          faqGroup = serializeFAQGroup(snap.id, snap.data()!);
        } else {
          const newFAQRef = await addDoc(collection(db, "faqGroups"), {
            ...faqPayload,
            createdAt: now,
          });
          await updateDoc(doc(db, "blogs", id), { faqGroupId: newFAQRef.id });
          const snap = await getDoc(doc(db, "faqGroups", newFAQRef.id));
          faqGroup = serializeFAQGroup(snap.id, snap.data()!);
        }
      } else {
        // Empty items — delete FAQ group and unlink
        if (existingFAQ) {
          await deleteDoc(doc(db, "faqGroups", existingFAQ.id));
          await updateDoc(doc(db, "blogs", id), { faqGroupId: null });
        }
      }
    } else {
      // faqs key not in payload — return whatever exists
      faqGroup = await getFAQGroupByBlogId(id);
    }

    return NextResponse.json({ blog, faqGroup });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Failed to update blog" },
      { status: 500 },
    );
  }
}

// ─── DELETE /api/blogs/[id] ───────────────────────────────────────────────────
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const blogSnap = await getDoc(doc(db, "blogs", id));
    if (!blogSnap.exists()) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Remove linked FAQ group first
    const existingFAQ = await getFAQGroupByBlogId(id);
    if (existingFAQ) {
      await deleteDoc(doc(db, "faqGroups", existingFAQ.id));
    }

    await deleteDoc(doc(db, "blogs", id));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Failed to delete blog" },
      { status: 500 },
    );
  }
}
