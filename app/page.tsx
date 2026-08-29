import dynamic from "next/dynamic";
import Script from "next/script";

import Navbar from "./component/website/Navbar";
import Hero from "./component/website/homepage/Hero";
import Stats from "./component/website/homepage/Stats";
import ServiceGrid from "./component/website/homepage/ServiceGrid";
import Footer from "./component/website/Footer";
import Clientele from "./component/website/homepage/Clientele";
import LeadForm from "./component/website/homepage/LeadForm";
import About from "./component/website/homepage/About";
import HowWeWork from "./component/website/homepage/HowWeWork";
import FAQ from "./component/website/FAQ";
import { homeFAQs } from "./data/faqData";

import TrustMetricsShowcase from "./component/website/homepage/Counter";
import LazySection from "./component/LazySection";
import { Metadata } from "next";

const TopServices = dynamic(
  () => import("./component/website/homepage/TopServices"),
);

const ResultsShowcase = dynamic(
  () => import("./component/website/homepage/ResultsShowcase"),
);

const UgcVideoSection = dynamic(
  () => import("./component/website/homepage/UgcVideoSection"),
);

const MarketingWall = dynamic(
  () => import("./component/website/homepage/MarketingWall"),
);

const Industries2 = dynamic(() =>
  import("./component/website/homepage/Inndustries").then(
    (mod) => mod.Industries2,
  ),
);

const CaseStudySection = dynamic(
  () => import("./component/website/homepage/CaseStudySection"),
);

const Partnership = dynamic(
  () => import("./component/website/homepage/Partnership"),
);

const ServiceCardCarousel = dynamic(
  () => import("./component/website/homepage/ServiceCardCrousel"),
);

const AIGrowthSection = dynamic(
  () => import("./component/website/homepage/AIGrowthSection"),
);

export const metadata : Metadata = {
  title: "Best Digital Marketing Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is the best digital marketing company in Ahmedabad, offering SEO, social media & performance marketing solutions.",

  keywords: [
    "best digital marketing company in Ahmedabad",
    "digital marketing agency Ahmedabad",
    "digital marketing services Ahmedabad",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "https://www.marketrixa.com/",
  },

  openGraph: {
    title: "Best Digital Marketing Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is the best digital marketing company in Ahmedabad, offering SEO, social media & performance marketing solutions.",
    url: "https://www.marketrixa.com/",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        width: 630,
        height: 630,
        alt: "Marketrixa - Best Digital Marketing Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is the best digital marketing company in Ahmedabad, offering SEO, social media & performance marketing solutions.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.marketrixa.com/#organization",
    "name": "Marketrixa",
    "legalName": "Marketrixa Digital Marketing Agency",
    "url": "https://www.marketrixa.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.marketrixa.com/_next/image?url=%2Flogo-rec-trans.png&w=384&q=75",
      "width": 384
    },
    "image": "https://www.marketrixa.com/logo.jpg",
    "description": "Marketrixa is a full-service digital marketing company in Ahmedabad & Deesa, Gujarat, offering SEO, Google Ads, social media marketing, web development and performance marketing solutions.",
    "email": "admin@marketrixa.com",
    "telephone": "+91-9512400000",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "201, 202 & 203, Second Floor, Business World Complex",
      "addressLocality": "Deesa",
      "addressRegion": "Gujarat",
      "postalCode": "385535",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9512400000",
        "contactType": "customer service",
        "email": "admin@marketrixa.com",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/marketrixa",
      "https://www.instagram.com/marketrixa.hq",
      "https://x.com/@marketrixa99"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.marketrixa.com/#website",
    "url": "https://www.marketrixa.com/",
    "name": "Marketrixa",
    "description": "Best digital marketing company in Ahmedabad offering SEO, social media & performance marketing solutions.",
    "publisher": {
      "@id": "https://www.marketrixa.com/#organization"
    },
    "inLanguage": "en-IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.marketrixa.com/#localbusiness",
    "name": "Marketrixa - Digital Marketing Company",
    "image": "https://www.marketrixa.com/logo.jpg",
    "url": "https://www.marketrixa.com/",
    "telephone": "+91-9512400000",
    "email": "admin@marketrixa.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "201, 202 & 203, Second Floor, Business World Complex",
      "addressLocality": "Deesa",
      "addressRegion": "Gujarat",
      "postalCode": "385535",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "City", "name": "Deesa" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "Country", "name": "India" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://linkedin.com/company/marketrixa",
      "https://www.instagram.com/marketrixa.hq",
      "https://x.com/@marketrixa99"
    ],
    "parentOrganization": {
      "@id": "https://www.marketrixa.com/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly does a Digital Marketing Agency do for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Digital Marketing Agency manages your entire online presence, including SEO, paid ads, social media, content, and email marketing. At Marketrixa, we build growth systems that attract the right audience, convert them into customers, and retain them long term."
        }
      },
      {
        "@type": "Question",
        "name": "How is a Digital Marketing Company different from an in-house marketing team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An in-house team has limited capacity and skill range. A digital marketing company gives you a full team of certified specialists, including SEO experts, designers, paid media strategists, content writers, and analysts, all at a fraction of the cost of hiring internally."
        }
      },
      {
        "@type": "Question",
        "name": "Are Digital Marketing Firms only for large corporations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Marketrixa specialises in scalable strategies that fit your current budget and grow with your business. You don't need a big budget; you need the right partner."
        }
      },
      {
        "@type": "Question",
        "name": "What's the typical timeline for seeing results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paid ads show results within 15 to 30 days. SEO takes 90 to 120 days but delivers compounding long-term returns. We set honest timelines from day one with no vague promises and full transparency."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure the success of your Digital Marketing Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track what matters: leads, cost per acquisition, conversion rates, organic traffic, ROAS, and revenue impact. We provide detailed monthly reports so you always know what your investment is returning."
        }
      },
      {
        "@type": "Question",
        "name": "What emerging trends should my business be aware of?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key trends include AI-powered personalisation, short-form video, voice search, zero-click SEO, and micro-influencer marketing. Marketrixa ensures your brand leverages what's working now, not outdated strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Can a Digital Marketing Company improve my search engine rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Marketrixa combines on-page SEO, technical audits, quality content, and ethical link building to improve your rankings sustainably, targeting keywords your actual customers are searching for."
        }
      },
      {
        "@type": "Question",
        "name": "What commitment is required when partnering with a Digital Marketing Agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most engagements run on a 3 to 6 month minimum to let strategies mature. Beyond that, we operate on transparency and performance. Clients stay because results keep improving, not because of rigid contracts."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Marketrixa confident in being the Best Digital Marketing Agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results, relationships, and accountability. We've delivered measurable growth for 50+ brands across 15+ industries in 3+ years. We don't just run campaigns, we own the outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What defines the Best Digital Marketing Company for a specific industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right agency understands your audience, competitive landscape, and the channels that drive results in your vertical. Marketrixa brings deep industry knowledge across Banking, Healthcare, Real Estate, Education, FMCG, and more."
        }
      },
      {
        "@type": "Question",
        "name": "What role do social media and SEO play in your Digital Marketing Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They're the twin engines of sustainable growth. SEO builds long-term organic visibility while social media drives brand awareness and trust. Together, they create a compounding growth loop that amplifies every other channel you invest in."
        }
      }
    ]
  }
];


export default function Home() {
  return (
    <>
      <main>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
        <Navbar />
        <Hero />
        <TrustMetricsShowcase />
        <About />

        <LazySection height={700}>
          <TopServices />
        </LazySection>

        <LazySection height={900}>
          <ResultsShowcase />
        </LazySection>

        <LazySection height={700}>
          <UgcVideoSection />
        </LazySection>

        <MarketingWall />

        {/* <Inndustries /> */}
        <Industries2 />
        <CaseStudySection />
        {/* <TestimonialCarousel /> */}
        {/* <Industry /> */}
        <Partnership />
        {/* <Testimonials /> */}
        <ServiceCardCarousel />
        <AIGrowthSection />
        <Stats />
        {/* <CTASection /> */}
        <ServiceGrid />
        <HowWeWork />
        <LeadForm />
        <Clientele />
        {/* <Blogs /> */}
        <FAQ
          eyebrow="Frequently Asked Questions?"
          title="Everything You Need to Know Before You Grow!"
          items={homeFAQs}
        />
        <Footer />
      </main>

    </>
  );
}
