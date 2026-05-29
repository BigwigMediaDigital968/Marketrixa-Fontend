import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.marketrixa.com";

// ─── Static pages ─────────────────────────────────────────────────────────────
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/blogs`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // Add more static routes here
];

// ─── Dynamic pages (wire to your CMS / DB) ────────────────────────────────────
async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    // Example: fetch blog post slugs from your API
    // const posts = await fetch(`${BASE_URL}/api/posts`, { next: { revalidate: 3600 } }).then(r => r.json());
    // return posts.map((p: { slug: string; updatedAt: string }) => ({
    //   url: `${BASE_URL}/blog/${p.slug}`,
    //   lastModified: new Date(p.updatedAt),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.7,
    // }));

    // Placeholder — remove once you wire in real data:
    return [];
  } catch (err) {
    console.error("[sitemap] Failed to fetch dynamic routes:", err);
    return [];
  }
}

// ─── Sitemap export ───────────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicRoutes = await getDynamicRoutes();
  return [...staticRoutes, ...dynamicRoutes];
}