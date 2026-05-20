import type { Metadata } from "next";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import GraphicVideo from "./component/GraphicVideo";
import GraphicPortfolio from "./component/GraphicPortfolio";
import FAQ from "@/app/component/website/FAQ";
import { GraphicFaqs } from "@/app/data/faqData";
import GraphicTestimonial from "./component/GraphicTestimonial";

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ahmedabad | Marketrixa",

  description:
    "Looking for a graphic design company in Ahmedabad? Marketrixa offers logo design, branding & social media creatives. Get a free consultation!",

  keywords: [
    "graphic design agency Ahmedabad",
    "graphic design company Ahmedabad",
    "logo design Ahmedabad",
    "branding agency Ahmedabad",
    "social media creatives",
    "graphic design services",
    "brochure design",
    "creative agency Ahmedabad",
    "business branding",
    "Marketrixa graphic design",
  ],

  alternates: {
    canonical: "https://www.marketrixa.com/services/graphic-design-service",
  },

  openGraph: {
    title: "Best Graphic Design Agency in Ahmedabad | Marketrixa",

    description:
      "Looking for a graphic design company in Ahmedabad? Marketrixa offers logo design, branding & social media creatives. Get a free consultation!",

    url: "https://www.marketrixa.com/services/graphic-design-service",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/graphic-og-image.png",
        width: 1200,
        height: 630,
        alt: "Graphic Design Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Graphic Design Agency in Ahmedabad | Marketrixa",

    description:
      "Looking for a graphic design company in Ahmedabad? Marketrixa offers logo design, branding & social media creatives. Get a free consultation!",

    images: ["/graphic-og-image.png"],
  },

  metadataBase: new URL("https://www.marketrixa.com"),
};

export default function GraphicVideoContent() {
  // =========================
  // SERVICE SCHEMA
  // =========================

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: "Graphic Design Services",

    name: "Graphic Design Services in Ahmedabad",

    description:
      "Marketrixa offers professional graphic design services including logo design, branding, brochures, social media creatives, and marketing materials for businesses in Ahmedabad.",

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

    image: "https://www.marketrixa.com/graphic-og-image.png",

    url: "https://www.marketrixa.com/services/graphic-design-service",

    category: "Graphic Design Agency",
  };

  // =========================
  // FAQ SCHEMA
  // =========================

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: GraphicFaqs.map((faq) => ({
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

        name: "Graphic Design Service",

        item: "https://www.marketrixa.com/services/graphic-design-service",
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

      <GraphicVideo />

      <GraphicPortfolio />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={GraphicFaqs}
      />

      <GraphicTestimonial />

      <Footer />
    </>
  );
}
