import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import SeoFeatures from "./component/SeoFeature";
import SeoTypes from "./component/SeoTypes";
import SeoHero from "./component/SeoHero";
import AboutSeo from "./component/AboutSeo";
import FAQ from "@/app/component/website/FAQ";
import { SeoServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import SeoActivities from "./component/SeoActivities";
import SeoClients from "./component/SeoClients";
import SeoProjects from "./component/SeoProjects";
import Script from "next/script";

export const metadata = {
  title: "Best SEO Services in Ahmedabad | Marketrixa",
  description:
    "Turn search traffic into revenue. Marketrixa offers expert SEO services in Ahmedabad with proven results. Get your free audit now.",

  keywords: [
    "SEO services in Ahmedabad",
    "search engine optimization company in Ahmedabad",
    "best SEO company Ahmedabad",
    "local SEO Ahmedabad",
    "ecommerce SEO Ahmedabad",
    "SEO agency Gujarat",
    "Google ranking services Ahmedabad",
    "technical SEO Ahmedabad",
    "hire SEO expert Ahmedabad",
    "affordable SEO services Ahmedabad",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "/services/seo-services",
  },

  openGraph: {
    title: "Best SEO Services in Ahmedabad | Marketrixa",
    description:
      "Boost your Google rankings and grow your business with expert SEO services in Ahmedabad. Get a free audit today.",
    url: "https://www.marketrixa.com/services/seo-services",
    siteName: "Marketrixa",
    images: [
      {
        url: "/seo-og-image.png",
        width: 1200,
        height: 630,
        alt: "SEO Services in Ahmedabad - Marketrixa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best SEO Services in Ahmedabad | Marketrixa",
    description:
      "Get more traffic, leads, and revenue with Marketrixa's SEO services in Ahmedabad.",
    images: ["/seo-og-image.png"],
    creator: "@marketrixa",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <SeoHero />
      <SeoFeatures />
      <AboutSeo />
      <SeoTypes />
      <BgCTA
        title={
          <>
            Boost Your Rankings to the Top of Google with Our{" "}
            <span className="text-[#F26522]">SEO Services in Ahmedabad</span>
          </>
        }
        description="Get more organic traffic, higher-quality leads, and stronger revenue with data-driven SEO strategies built for Ahmedabad businesses. Partner with a search engine optimization company in Ahmedabad that delivers results you can measure."
        ctaText="START SEO GROWTH"
        bgImage="/cta-bg.png"
      />
      <SeoActivities />
      <SeoProjects />
      <SeoClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions About Our SEO Services in Ahmedabad"
        items={SeoServiceFAQs}
      />
      <Footer />

      {/* Schemas */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // ✅ SERVICE SCHEMA
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "SEO Services in Ahmedabad",
              description:
                "Marketrixa provides expert SEO services in Ahmedabad to help businesses increase visibility, traffic, and revenue through data-driven strategies.",
              provider: {
                "@type": "Organization",
                name: "Marketrixa",
                url: "https://www.marketrixa.com",
              },
              areaServed: {
                "@type": "City",
                name: "Ahmedabad",
              },
              serviceType: "Search Engine Optimization",
              url: "https://www.marketrixa.com/services/seo-service",
            },

            // ✅ ARTICLE SCHEMA (for content authority)
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "SEO Services in Ahmedabad - Complete Guide",
              description:
                "Learn how SEO services in Ahmedabad can help your business grow with higher rankings, traffic, and conversions.",
              author: {
                "@type": "Organization",
                name: "Marketrixa",
              },
              publisher: {
                "@type": "Organization",
                name: "Marketrixa",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.marketrixa.com/logo.png",
                },
              },
              mainEntityOfPage:
                "https://www.marketrixa.com/services/seo-service",
            },

            // ✅ BREADCRUMB SCHEMA
            {
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
                  name: "SEO Services",
                  item: "https://www.marketrixa.com/services/seo-service",
                },
              ],
            },
          ]),
        }}
      />

      {/* ✅ Faq Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SeoServiceFAQs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
