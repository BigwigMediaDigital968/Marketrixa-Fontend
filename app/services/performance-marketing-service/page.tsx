import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import FAQ from "@/app/component/website/FAQ";
import { PpcServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import PerformanceClients from "./component/PerformanceClients";
import PerformanceAbout from "./component/PerformanceAbout";
import PerformanceHero from "./component/PerformanceHero";
import PerformanceProjects from "./component/PerformanceProject";
import PerformanceMarketingServices from "./component/PerformanceMarketingServices";
import PerformanceFeatures from "./component/PerformanceFeatures";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Performance Marketing Solutions for Sales Growth | Marketrixa",
  description:
    "Increase sales with Marketrixa’s performance marketing services. We run Google Ads, Meta Ads, and lead generation campaigns to drive more conversions.",

  keywords: [
    "performance marketing agency",
    "PPC services India",
    "Google Ads agency",
    "Meta Ads agency",
    "lead generation campaigns",
    "ROI marketing services",
  ],

  openGraph: {
    title: "Performance Marketing Solutions for Sales Growth | Marketrixa",
    description:
      "Drive more leads and revenue with high-ROI Google Ads and Meta Ads campaigns.",
    url: "https://www.marketrixa.com/services/performance-marketing-service",
    siteName: "Marketrixa",
    images: [
      {
        url: "/ppc-og-image.png",
        width: 1200,
        height: 630,
        alt: "Performance Marketing Services - Marketrixa",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing | Marketrixa",
    description:
      "Scale your business with ROI-focused Google & Meta Ads campaigns.",
    images: ["/ppc-og-image.png"],
  },

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/performance-marketing-service",
  },
};

export default function PerformancePage() {
  return (
    <>
      <Navbar />
      <PerformanceHero />
      <PerformanceAbout />
      <PerformanceMarketingServices />
      <PerformanceFeatures />
      <PerformanceProjects />
      <BgCTA
        title={
          <>
            Boost Your Conversion with the{" "}
            <span className="text-[#F26522]">High ROI</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven PPC strategies."
        ctaText="START BUSINESS GROWTH"
        bgImage="/cta-bg.png"
      />
      <PerformanceClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={PpcServiceFAQs}
      />
      <Footer />

      {/* SEO Tags */}

      <Script
        id="performance-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Performance Marketing",
          provider: {
            "@type": "Organization",
            name: "Marketrixa",
            url: "https://www.marketrixa.com",
          },
          description:
            "Marketrixa provides performance marketing services including Google Ads, Meta Ads, and lead generation campaigns focused on ROI.",
          areaServed: {
            "@type": "Place",
            name: "India",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PpcServiceFAQs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}
      </Script>
    </>
  );
}
