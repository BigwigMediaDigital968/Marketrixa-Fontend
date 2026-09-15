import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";

import BgCTA from "@/app/component/website/BgCTA";
import InternationalHero from "./component/InternationalHero";
import InternationalClient from "./component/InternationalClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Digital Marketing Agency | Marketrixa",
  description:
    "Expand your brand globally with Marketrixa's international digital marketing services. Reach new markets, attract global customers, and grow your business with data-driven strategies.",

  keywords: [
    "international digital marketing agency",
    "global digital marketing",
    "international SEO",
    "global SEO services",
    "international marketing agency",
    "digital marketing for global brands",
    "global brand marketing",
    "international social media marketing",
    "global lead generation",
    "Marketrixa",
  ],

  alternates: {
    canonical: "https://www.marketrixa.com/international",
  },

  openGraph: {
    title: "International Digital Marketing Agency | Marketrixa",
    description:
      "Expand your brand globally with Marketrixa's international digital marketing services. Reach new markets, attract global customers, and grow your business with data-driven strategies.",
    url: "https://www.marketrixa.com/international",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo-rec.jpg",
        width: 1200,
        height: 630,
        alt: "Marketrixa International Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "International Digital Marketing Agency | Marketrixa",
    description:
      "Expand your brand globally with Marketrixa's international digital marketing services and data-driven growth strategies.",
    images: ["/logo-rec.jpg"],
  },
};

export default function SmmPage() {
  return (
    <>
      <Navbar />
      <InternationalHero />
      <InternationalClient />

      <BgCTA
        title={
          <>
            Boost Your Sccial to the{" "}
            <span className="text-[#F26522]">Top of the Trend</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven SEO strategies."
        ctaText="START SOCIAL GROWTH"
        bgImage="/cta-bg.png"
      />
      <Footer />
    </>
  );
}
