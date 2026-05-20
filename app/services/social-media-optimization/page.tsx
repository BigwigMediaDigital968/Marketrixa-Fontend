import type { Metadata } from "next";

import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";

import HeroSMO from "./Component/HeroSMO";
import ProcessSMO from "./Component/ProcessSMO";
import PricingSMO from "./Component/PricingSMO";
import SmoWhy from "./Component/SmoWhy";
import SmoPromise from "./Component/SmoPromise";
import FAQ from "@/app/component/website/FAQ";
import { SmoFaqs } from "@/app/data/faqData";

export const metadata: Metadata = {
  title: "Social Media Optimization Company in Ahmedabad | Marketrixa",

  description:
    "Trusted social media optimization company in Ahmedabad offering SMO services, audience engagement, and brand visibility solutions.",

  keywords: [
    "social media optimization",
    "SMO company Ahmedabad",
    "social media optimization services",
    "SMO agency Ahmedabad",
    "social media marketing Ahmedabad",
    "Instagram marketing",
    "Facebook marketing",
    "brand visibility services",
    "social media engagement",
    "Marketrixa SMO services",
  ],

  alternates: {
    canonical: "https://www.marketrixa.com/services/social-media-optimization",
  },

  openGraph: {
    title: "Social Media Optimization Company in Ahmedabad | Marketrixa",

    description:
      "Trusted social media optimization company in Ahmedabad offering SMO services, audience engagement, and brand visibility solutions.",

    url: "https://www.marketrixa.com/services/social-media-optimization",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/smo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Media Optimization Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Social Media Optimization Company in Ahmedabad | Marketrixa",

    description:
      "Trusted social media optimization company in Ahmedabad offering SMO services, audience engagement, and brand visibility solutions.",

    images: ["/smo-og-image.png"],
  },
};

export default function SocialMediaPage() {
  // =========================
  // SERVICE SCHEMA
  // =========================

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: "Social Media Optimization Services",

    name: "Social Media Optimization Company in Ahmedabad",

    description:
      "Marketrixa provides professional social media optimization services including audience engagement, profile optimization, content strategy, and brand visibility solutions for businesses in Ahmedabad.",

    provider: {
      "@type": "Organization",

      name: "Marketrixa",

      url: "https://www.marketrixa.com",

      logo: "https://www.marketrixa.com/logo.png",
    },

    areaServed: {
      "@type": "City",

      name: "Ahmedabad",
    },

    image: "/smo-og-image.png",

    url: "https://www.marketrixa.com/services/social-media-optimization",

    category: "Social Media Marketing Agency",
  };

  // =========================
  // FAQ SCHEMA
  // =========================

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: SmoFaqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };

  // =========================
  // BREADCRUMB SCHEMA
  // =========================

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://www.marketrixa.com",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Services",

        item: "https://www.marketrixa.com/services",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: "Social Media Optimization",

        item: "https://www.marketrixa.com/services/social-media-optimization",
      },
    ],
  };

  return (
    <>
      {/* =========================
          JSON-LD SCHEMAS
      ========================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =========================
          PAGE CONTENT
      ========================== */}

      <Navbar />

      <HeroSMO />

      <ProcessSMO />

      <SmoWhy />

      <SmoPromise />

      <PricingSMO />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SmoFaqs}
      />

      <Footer />
    </>
  );
}
