import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/app/component/website/Navbar";
import Footer from "@/app/component/website/Footer";
import BlogDetailClient from "@/app/component/website/blog/BlogDetail";

import { db } from "@/lib/firebase";

import { collection, getDocs, query, where, limit } from "firebase/firestore";

import { Blog, FAQGroup } from "@/app/types/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ─────────────────────────────────────────────────────────────
   GET BLOG
───────────────────────────────────────────────────────────── */

async function getBlogBySlug(
  slug: string,
): Promise<{ blog: Blog; faqGroup: FAQGroup | null } | null> {
  try {
    const q = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      where("status", "==", "published"),
    );

    const snap = await getDocs(q);

    if (snap.empty) return null;

    const docSnap = snap.docs[0];

    const data = docSnap.data();

    const blog: Blog = {
      ...(data as Omit<Blog, "id">),

      id: docSnap.id,

      createdAt:
        data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt ?? "",

      updatedAt:
        data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt ?? "",

      publishedAt:
        data.publishedAt?.toDate?.()?.toISOString() ?? data.publishedAt ?? "",
    };

    let faqGroup: FAQGroup | null = null;

    if (blog.faqGroupId) {
      const faqQ = query(
        collection(db, "faqGroups"),
        where("blogId", "==", docSnap.id),
      );

      const faqSnap = await getDocs(faqQ);

      if (!faqSnap.empty) {
        const fd = faqSnap.docs[0];

        faqGroup = {
          ...(fd.data() as Omit<FAQGroup, "id">),

          id: fd.id,

          createdAt: fd.data().createdAt?.toDate?.()?.toISOString() ?? "",

          updatedAt: fd.data().updatedAt?.toDate?.()?.toISOString() ?? "",
        };
      }
    }

    return { blog, faqGroup };
  } catch (err) {
    console.log(err);

    return null;
  }
}

/* ─────────────────────────────────────────────────────────────
   RELATED BLOGS
───────────────────────────────────────────────────────────── */

async function getRelatedBlogs(
  currentId: string,
  industry: string,
): Promise<Blog[]> {
  try {
    const q = query(
      collection(db, "blogs"),
      where("status", "==", "published"),
      where("industry", "==", industry),
      limit(4),
    );

    const snap = await getDocs(q);

    return snap.docs
      .filter((d) => d.id !== currentId)
      .slice(0, 3)
      .map((d) => {
        const data = d.data();

        return {
          ...(data as Omit<Blog, "id">),

          id: d.id,

          createdAt: data.createdAt?.toDate?.()?.toISOString() ?? "",

          updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? "",

          publishedAt: data.publishedAt?.toDate?.()?.toISOString() ?? "",
        };
      });
  } catch {
    return [];
  }
}

/* ─────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const result = await getBlogBySlug(slug);

  if (!result) {
    return {
      title: "Blog Not Found",
    };
  }

  const { blog } = result;

  const title = blog.seo?.metaTitle || blog.title;

  const description = blog.seo?.metaDescription || blog.excerpt;

  const keywords = [
    ...(blog.tags || []),
    blog.industry,
    "AI",
    "Technology",
    "Future Tech",
    "Artificial Intelligence",
    "Democracy",
  ];

  const url =
    blog.seo?.canonicalUrl || `https://marketrixa.com/blogs/${blog.slug}`;

  const image = blog.seo?.ogImage || blog.coverImage || "/default-og.jpg";

  return {
    metadataBase: new URL("https://marketrixa.com"),

    title,

    description,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.seo?.ogTitle || title,

      description: blog.seo?.ogDescription || description,

      url,

      siteName: "Marketrixa",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.coverImageAlt || blog.title,
        },
      ],

      locale: "en_US",

      type: "article",

      publishedTime: blog.publishedAt,

      authors: [blog.author || "Marketrixa Team"],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const result = await getBlogBySlug(slug);

  if (!result) notFound();

  const { blog, faqGroup } = result;

  const relatedBlogs = await getRelatedBlogs(blog.id, blog.industry);

  const canonicalUrl =
    blog.seo?.canonicalUrl || `https://marketrixa.com/blogs/${blog.slug}`;

  const image = blog.seo?.ogImage || blog.coverImage;

  /* ─────────────────────────────────────────────────────────────
     JSON-LD SCHEMA
  ───────────────────────────────────────────────────────────── */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: blog.title,

    description: blog.seo?.metaDescription || blog.excerpt,

    image: [image],

    author: {
      "@type": "Person",
      name: blog.author || "Marketrixa Team",
    },

    publisher: {
      "@type": "Organization",

      name: "Marketrixa",

      logo: {
        "@type": "ImageObject",

        url: "https://marketrixa.com/logo.png",
      },
    },

    datePublished: blog.publishedAt,

    dateModified: blog.updatedAt,

    mainEntityOfPage: canonicalUrl,

    keywords: blog.tags?.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://marketrixa.com",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Blogs",

        item: "https://marketrixa.com/blogs",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: blog.title,

        item: canonicalUrl,
      },
    ],
  };

  const faqSchema =
    faqGroup && faqGroup.faqs?.length
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          mainEntity: faqGroup.faqs.map((faq) => ({
            "@type": "Question",

            name: faq.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* ARTICLE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ SCHEMA */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main>
        <Navbar />

        <BlogDetailClient
          blog={blog}
          faqGroup={faqGroup}
          relatedBlogs={relatedBlogs}
        />

        <Footer />
      </main>
    </>
  );
}
