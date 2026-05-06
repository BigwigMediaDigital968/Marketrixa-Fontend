import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Blog, BlogFormData } from "@/app/types/blog";

// ─── Helper: serialize Firestore timestamps into a typed Blog ─────────────────
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

// ─── GET: Fetch all blogs with optional filters ───────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const industry = searchParams.get("industry");
    const search = searchParams.get("search")?.toLowerCase();

    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, orderBy("updatedAt", "desc"));
    const snapshot = await getDocs(q);

    let blogs: Blog[] = snapshot.docs.map((docSnap) =>
      serializeBlog(docSnap.id, docSnap.data()),
    );

    if (status && status !== "all")
      blogs = blogs.filter((b) => b.status === status);
    if (industry && industry !== "all")
      blogs = blogs.filter((b) => b.industry === industry);
    if (search)
      blogs = blogs.filter(
        (b) =>
          b.title?.toLowerCase().includes(search) ||
          b.excerpt?.toLowerCase().includes(search) ||
          b.tags?.some((t) => t.toLowerCase().includes(search)),
      );

    return NextResponse.json({ blogs, total: blogs.length });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

// ─── POST: Create a new blog ──────────────────────────────────────────────────
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

    const { faqs, ...blogData } = body;
    const now = Timestamp.now();
    const nowISO = now.toDate().toISOString();

    // Firestore document (uses Timestamps for proper querying/ordering)
    const firestoreDoc = {
      ...blogData,
      readTime,
      views: 0,
      faqGroupId: null as string | null,
      createdAt: now,
      updatedAt: now,
      publishedAt: blogData.status === "published" ? now : null,
    };

    const blogRef = await addDoc(collection(db, "blogs"), firestoreDoc);

    let faqGroup = null;

    if (faqs?.items?.length) {
      const faqFirestoreDoc = {
        blogId: blogRef.id,
        title: faqs.title ?? `${body.title} — FAQs`,
        description: faqs.description ?? "",
        faqs: faqs.items.map((f, i) => ({
          id: `f_${Date.now()}_${i}`,
          question: f.question,
          answer: f.answer,
          order: i + 1,
        })),
        createdAt: now,
        updatedAt: now,
      };

      const faqRef = await addDoc(collection(db, "faqGroups"), faqFirestoreDoc);
      await updateDoc(doc(db, "blogs", blogRef.id), { faqGroupId: faqRef.id });

      faqGroup = {
        id: faqRef.id,
        ...faqFirestoreDoc,
        createdAt: nowISO,
        updatedAt: nowISO,
      };
    }

    // Return typed Blog object
    const blog: Blog = {
      id: blogRef.id,
      ...blogData,
      readTime,
      views: 0,
      faqGroupId: faqGroup?.id ?? undefined,
      createdAt: nowISO,
      updatedAt: nowISO,
      publishedAt: blogData.status === "published" ? nowISO : undefined,
    };

    return NextResponse.json({ blog, faqGroup }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message ?? "Failed to create blog" },
      { status: 500 },
    );
  }
}
