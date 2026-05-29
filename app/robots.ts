// app/robots.ts
// Next.js App Router — MetadataRoute.Robots
// Served automatically at /robots.txt

import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.marketrixa.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/private/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}