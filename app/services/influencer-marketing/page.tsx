import FAQ from "@/app/component/website/FAQ";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import { InfluencerFaqs } from "@/app/data/faqData";
import InfluencerHero from "./component/InfluencerHero";
import AboutInfluence from "./component/AboutInfluence";
import WhyInfluence from "./component/WhyInfluence";
import InfluenceService from "./component/InfluenceService";
import WhyInfluenceMar from "./component/WhyInfluenceMar";
import { Metadata } from "next";
import OtherServices from "../website-development/component/OtherService";

export const metadata : Metadata = {
  title: "Influencer Marketing Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a leading influencer marketing company in Ahmedabad, connecting brands with the right creators & audiences.",

  keywords: [
    "influencer marketing company in Ahmedabad",
    "influencer marketing agency",
    "influencer collaborations",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/influencer-marketing",
  },

  openGraph: {
    title: "Influencer Marketing Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a leading influencer marketing company in Ahmedabad, connecting brands with the right creators & audiences.",
    url: "https://www.marketrixa.com/services/influencer-marketing",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Influencer Marketing Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a leading influencer marketing company in Ahmedabad, connecting brands with the right creators & audiences.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Influencer Marketing Services",
      "serviceType": "Influencer Marketing",
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
      "areaServed": [
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "Country", "name": "India" }
      ],
      "url": "https://www.marketrixa.com/services/influencer-marketing",
      "description": "Marketrixa is a leading influencer marketing company in Ahmedabad, connecting brands with the right creators & audiences.",
      "keywords": "influencer marketing company in Ahmedabad, influencer marketing agency, influencer collaborations",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Influencer Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Identification" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategy & Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Tracking" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Platform Expertise" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is influencer marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Influencer marketing involves collaborating with digital creators to promote products, services, or brands to targeted audiences."
          }
        },
        {
          "@type": "Question",
          "name": "How does influencer marketing help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It improves brand awareness, customer trust, audience engagement, and digital visibility through authentic creator communication."
          }
        },
        {
          "@type": "Question",
          "name": "Which platforms are used for influencer campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Campaigns are commonly managed across Instagram, YouTube, LinkedIn, Facebook, and other social media platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How do you select influencers for campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We evaluate creators based on audience relevance, engagement quality, industry niche, and campaign objectives."
          }
        },
        {
          "@type": "Question",
          "name": "Can influencer marketing improve conversions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, strategic creator partnerships can help generate traffic, engagement, customer interest, and conversions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide campaign performance reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, detailed reports include reach, engagement, audience growth, conversions, and campaign insights."
          }
        }
      ]
    }
  ]
};

export default function InfluencerPage() {
  return (
    <>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      <Navbar />
      <InfluencerHero />
      <AboutInfluence />
      <WhyInfluence />
      <InfluenceService />
      <WhyInfluenceMar />
      <OtherServices />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={InfluencerFaqs}
      />
      <Footer />
    </>
  );
}
