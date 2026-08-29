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
import OtherServices from "../website-development/component/OtherService";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a top social media marketing agency in Ahmedabad, helping brands grow engagement, followers & sales.",

  keywords: [
    "social media marketing agency in Ahmedabad",
    "SMM company Ahmedabad",
    "social media marketing services",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/social-media-marketing",
  },

  openGraph: {
    title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a top social media marketing agency in Ahmedabad, helping brands grow engagement, followers & sales.",
    url: "https://www.marketrixa.com/services/social-media-marketing",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Social Media Marketing Agency in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a top social media marketing agency in Ahmedabad, helping brands grow engagement, followers & sales.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};


const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Social Media Marketing Services",
      "serviceType": "Social Media Marketing (SMM)",
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
      "url": "https://www.marketrixa.com/services/social-media-marketing",
      "description": "Marketrixa is a top social media marketing agency in Ahmedabad, helping brands grow engagement, followers & sales.",
      "keywords": "social media marketing agency in Ahmedabad, SMM company Ahmedabad, social media marketing services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategy & Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Creation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Advertising" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer & UGC Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community & ORM" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Account Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "YouTube Marketing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered SMM" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SMM Automation" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Social Media Marketing (SMM)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing involves promoting your brand, products, or services on platforms like Instagram, Facebook, and LinkedIn to engage, grow, and convert your audience. For businesses in Ahmedabad, working with the right social media marketing agency in Ahmedabad ensures your campaigns are built around local market behaviour and deliver results that go beyond vanity metrics."
          }
        },
        {
          "@type": "Question",
          "name": "Which platforms should my business focus on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your target audience. Instagram is great for visual content, LinkedIn works best for B2B marketing, and Facebook helps reach a broader audience."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I post on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consistency matters. Typically, posting 3 to 5 times per week helps maintain engagement, visibility, and steady audience growth."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create content for social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as a full-service social media marketing agency in Ahmedabad, we design creatives, write captions, and plan content calendars that are fully aligned with your brand strategy and built to drive real engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Can social media marketing generate leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with the right strategy, audience targeting, and content, social media marketing can effectively drive traffic, generate leads, and increase conversions."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure social media success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track key metrics such as engagement, reach, follower growth, website traffic, and conversions using advanced analytics tools."
          }
        },
        {
          "@type": "Question",
          "name": "Will social media help my brand grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. A strong social media presence builds brand awareness, establishes trust, and opens a direct line of communication with your audience. When managed by the right social media marketing agency in Ahmedabad, it becomes one of the most powerful and cost-effective growth channels available to your business."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide monthly reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we share detailed monthly reports with performance metrics and insights across every platform we manage. As your dedicated social media marketing agency in Ahmedabad, we believe full transparency is the foundation of a strong and results-driven partnership."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose your SMM services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We combine creativity with data-driven strategies to create engaging campaigns that deliver measurable results. Our team continuously monitors performance, tests new approaches, and refines strategies to keep your brand growing. Every decision we make is backed by data and focused on delivering outcomes that have a real impact on your business."
          }
        }
      ]
    }
  ]
}

export default function SmmPage() {
  return (
    <>

    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

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
      <OtherServices />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SmmServiceFAQs}
      />
      <Footer />

    </>
  );
}
