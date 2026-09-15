import { Metadata } from "next";
import BlogHero from "../component/website/blog/BlogHero";
import BlogLayout from "../component/website/blog/BlogLayout";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Tips, Trends & Strategies | Marketrixa",
  description:
    "Explore Marketrixa's digital marketing blog for SEO strategies, social media tips, PPC insights, industry trends, and actionable ideas to grow your business online.",

  keywords: [
    "digital marketing blog",
    "digital marketing tips",
    "digital marketing strategies",
    "SEO tips",
    "SEO strategies",
    "social media marketing",
    "PPC marketing",
    "digital marketing trends",
    "online marketing tips",
    "business growth strategies",
    "Marketrixa blog",
  ],

  alternates: {
    canonical: "https://www.marketrixa.com/blogs",
  },

  openGraph: {
    title: "Digital Marketing Blog | Tips, Trends & Strategies | Marketrixa",
    description:
      "Discover digital marketing tips, SEO strategies, social media insights, PPC advice, and the latest industry trends from Marketrixa.",
    url: "https://www.marketrixa.com/blogs",
    siteName: "Marketrixa",
    type: "website",
    images: [
      {
        url: "https://www.marketrixa.com/logo-rec.jpg",
        width: 1200,
        height: 630,
        alt: "Marketrixa Digital Marketing Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog | Tips, Trends & Strategies | Marketrixa",
    description:
      "Explore SEO, social media, PPC, digital marketing trends, and actionable strategies from Marketrixa.",
    images: ["https://www.marketrixa.com/logo-rec.jpg"],
  },
};

export default function blogPage() {
  return (
    <>
      <main>
        <Navbar />
        <BlogHero />
        <BlogLayout />
        <Footer />
      </main>
    </>
  );
}
