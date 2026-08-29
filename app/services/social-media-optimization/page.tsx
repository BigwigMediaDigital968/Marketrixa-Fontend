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
import OtherServices from "../website-development/component/OtherService";

export const metadata: Metadata =  {
  title: "Social Media Optimization Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa offers expert social media optimization services in Ahmedabad, strengthening your brand's online presence.",

  keywords: [
    "social media optimization company in Ahmedabad",
    "SMO services",
    "social profile optimization",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/social-media-optimization",
  },

  openGraph: {
    title: "Social Media Optimization Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa offers expert social media optimization services in Ahmedabad, strengthening your brand's online presence.",
    url: "https://www.marketrixa.com/services/social-media-optimization",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Social Media Optimization Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Optimization Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa offers expert social media optimization services in Ahmedabad, strengthening your brand's online presence.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};


export default function SocialMediaPage() {
  // =========================
  // SERVICE SCHEMA
  // =========================

  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Optimization Services",
  "serviceType": "Social Media Optimization (SMO)",
  "provider": {
    "@type": "Organization",
    "name": "Marketrixa",
    "url": "https://www.marketrixa.com/",
    "logo": "https://www.marketrixa.com/logo.jpg",
    "image": "https://www.marketrixa.com/logo.jpg",
    "telephone": "+91-9512400000",
    "email": "admin@marketrixa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "201, 202 & 203 Second floor, Business World Complex",
      "addressLocality": "Deesa",
      "addressRegion": "Gujarat",
      "postalCode": "385535",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/marketrixa",
      "https://www.instagram.com/marketrixa.hq",
      "https://x.com/@marketrixa99"
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Ahmedabad"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "description": "Marketrixa offers expert social media optimization (SMO) services in Ahmedabad, helping brands improve engagement, visibility, audience trust, and online growth through strategic content and platform optimization.",
  "url": "https://www.marketrixa.com/services/social-media-optimization",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SMO Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starter Growth"
        },
        "price": "9999",
        "priceCurrency": "INR",
        "description": "3 Social Media Platforms, 12 High-Quality Posts/mo, Basic Profile Optimization, Hashtag Strategy, Monthly Performance Report"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Pro"
        },
        "price": "16999",
        "priceCurrency": "INR",
        "description": "5 Social Media Platforms, 20 Custom Posts/mo, Reels & Short Video Editing, Active Community Management, Competitor Analysis, Advanced Analytics Dashboard, Priority Support"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Custom"
        },
        "description": "Unlimited Platforms, Daily Custom Content, Amplify with Creators, Paid Ad Management Integration, Dedicated Account Manager, 24/7 Monitoring & Response, Weekly Strategy Syncs"
      }
    ]
  }
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

      <OtherServices />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SmoFaqs}
      />

      <Footer />
    </>
  );
}
