import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import FAQ from "@/app/component/website/FAQ";
import { SmmServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import SmmProjects from "./component/SmmProject";
import SmmServices from "./component/SmmServices";
import SmmPlatform from "./component/SmmPlatform";
import SmmHero from "./component/SmmHero";
import SmmAbout from "./component/SmmAbout";
import SmmClients from "./component/SmmClients";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",
  description:
    "Marketrixa is a trusted social media marketing agency in Ahmedabad offering social media management, viral content, paid ads, and lead generation services to grow your business online.",

  keywords: [
    "social media marketing agency Ahmedabad",
    "SMM services Ahmedabad",
    "Instagram marketing Ahmedabad",
    "Facebook ads agency Ahmedabad",
    "social media marketing India",
    "digital marketing agency Ahmedabad",
  ],

  openGraph: {
    title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",
    description:
      "Grow your business with expert social media marketing services in Ahmedabad. Content, ads, and lead generation that deliver results.",
    url: "https://www.marketrixa.com/services/social-media-marketing",
    siteName: "Marketrixa",
    images: [
      {
        url: "/smm-og-image.png", // create this
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services - Marketrixa",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",
    description: "Scale your brand with data-driven social media strategies.",
    images: ["/smm-og-image.png"],
  },

  alternates: {
    canonical: "https://www.marketrixa.com/services/social-media-marketing",
  },
};

export default function SmmPage() {
  return (
    <>
      <Navbar />
      <SmmHero />
      <SmmAbout />
      <SmmServices />
      <SmmPlatform />
      <SmmProjects />
      <BgCTA
        title={
          <>
            Boost Your Social to the{" "}
            <span className="text-[#F26522]">Top of the Trend</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven social media strategies built specifically for businesses in Ahmedabad."
        ctaText="START SOCIAL GROWTH"
        bgImage="/cta-bg.png"
      />
      <SmmClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SmmServiceFAQs}
      />
      <Footer />

      {/* SEO Tags */}

      <Script
        id="smm-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Social Media Marketing",
          provider: {
            "@type": "Organization",
            name: "Marketrixa",
            url: "https://www.marketrixa.com",
          },
          areaServed: {
            "@type": "Place",
            name: "Ahmedabad",
          },
          description:
            "Marketrixa offers social media marketing services including content creation, paid ads, and lead generation for businesses in Ahmedabad.",
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
          mainEntity: SmmServiceFAQs.map((faq) => ({
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
