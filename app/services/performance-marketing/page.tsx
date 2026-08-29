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
import OtherServices from "../website-development/component/OtherService";


export const metadata : Metadata = {
  title: "Performance Marketing Agency in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a results-driven performance marketing agency in Ahmedabad, maximizing ROI through targeted paid campaigns.",

  keywords: [
    "performance marketing agency in Ahmedabad",
    "PPC agency Ahmedabad",
    "paid ads management",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/performance-marketing",
  },

  openGraph: {
    title: "Performance Marketing Agency in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a results-driven performance marketing agency in Ahmedabad, maximizing ROI through targeted paid campaigns.",
    url: "https://www.marketrixa.com/services/performance-marketing",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Performance Marketing Agency in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a results-driven performance marketing agency in Ahmedabad, maximizing ROI through targeted paid campaigns.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Performance Marketing Services",
      "serviceType": "Performance Marketing / PPC",
      "provider": {
        "@type": "Organization",
        "name": "Marketrixa",
        "url": "https://www.marketrixa.com",
        "logo": "https://www.marketrixa.com/logo.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "201, 202 & 203 Second floor, Business World Complex",
          "addressLocality": "Deesa",
          "addressRegion": "Gujarat",
          "postalCode": "385535",
          "addressCountry": "IN"
        },
        "telephone": "+91-9512400000",
        "email": "admin@marketrixa.com",
        "sameAs": [
          "https://linkedin.com/company/marketrixa",
          "https://www.instagram.com/marketrixa.hq",
          "https://x.com/@marketrixa99"
        ]
      },
      "areaServed": {
        "@type": "City",
        "name": "Ahmedabad"
      },
      "url": "https://www.marketrixa.com/services/performance-marketing",
      "description": "Marketrixa is a results-driven performance marketing agency in Ahmedabad, maximizing ROI through targeted paid campaigns.",
      "keywords": "performance marketing agency in Ahmedabad, PPC agency Ahmedabad, paid ads management",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "15000",
          "priceCurrency": "INR",
          "unitText": "per month (minimum ad spend)"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Performance Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads (Facebook & Instagram)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retargeting Campaigns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Performance Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Analytics & Reporting" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is performance marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance marketing is a digital advertising strategy where you pay based on measurable actions — clicks, leads, or sales — rather than just impressions. Every campaign is tracked to a real business outcome, making it one of the most accountable forms of marketing available."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most campaigns begin generating measurable insights within the first 2–4 weeks. Significant, optimized growth typically builds over 2–3 months as data accumulates and campaigns are refined. We provide weekly reports so you always know where things stand."
          }
        },
        {
          "@type": "Question",
          "name": "Which platforms are best for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your goals and audience. Google Ads works best for high-intent, search-driven traffic. Meta (Facebook/Instagram) excels at audience-based targeting and D2C sales. LinkedIn is best for B2B lead generation. We recommend the right mix based on your industry and budget."
          }
        },
        {
          "@type": "Question",
          "name": "What reporting do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide weekly performance reports and a live Looker Studio dashboard tracking ROAS, CPA, CTR, conversions, and customer acquisition metrics. You have full visibility into every rupee spent and what it generated, no black boxes."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum ad budget?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with campaigns starting from ₹15,000 per month in ad spend. For competitive industries like real estate or finance, higher budgets allow faster testing and scaling. We'll recommend an appropriate starting budget based on your goals during your free audit."
          }
        },
        {
          "@type": "Question",
          "name": "Can performance marketing help small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Performance marketing allows businesses of all sizes to start with a controlled budget, prove ROI on a small scale, and then grow spend based on actual results, making it ideal for startups and SMEs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle creative and ad design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our team handles ad copywriting, creative strategy, and basic design. For brands that need high-production video or graphic assets, we collaborate with our in-house design team to produce conversion-optimized ad creative."
          }
        },
        {
          "@type": "Question",
          "name": "What is remarketing and do you do it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remarketing targets users who previously visited your site or engaged with your ads, converting warm prospects who didn't convert the first time. Yes, we build dedicated remarketing funnels for all our performance marketing clients."
          }
        }
      ]
    }
  ]
};

export default function PerformancePage() {
  return (
    <>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
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
      <OtherServices />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={PpcServiceFAQs}
      />
      <Footer />
    </>
  );
}
