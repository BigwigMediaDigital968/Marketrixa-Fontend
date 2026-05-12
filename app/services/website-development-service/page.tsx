import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import WebHero from "./component/WebHero";
import AboutWebService from "./component/AboutWebService";
import WebsiteBuilt from "./component/WebsiteBuilt";
import WebFeatures from "./component/WebFeatures";
import WebsiteSection from "./component/WebsiteSection";
import WebWhyMarket from "./component/WebWhyMarket";
import Clientele from "@/app/component/website/homepage/Clientele";
import TechStack from "@/app/component/website/services/TechStack";
import FAQ from "@/app/component/website/FAQ";
import { serviceFAQs } from "@/app/data/faqData";
import WebTestimonials from "./component/WebTestimonials";
import OtherServices from "./component/OtherService";

export const metadata = {
  title: "Website Development Company in Ahmedabad | Marketrixa",
  description:
    "Hire the best website development company in Ahmedabad. Fast, SEO-ready & conversion-optimised websites for every business. Book a free strategy call.",

  keywords: [
    "website development company in Ahmedabad",
    "website designing company in Ahmedabad",
    "web design company in Ahmedabad",
    "best website development company in Ahmedabad",
    "custom website design Ahmedabad",
    "responsive web design Ahmedabad",
    "hire web developer Ahmedabad",
    "website redesign services Gujarat",
    "landing page design Ahmedabad",
    "affordable web development Ahmedabad",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "/services/website-development-service",
  },

  openGraph: {
    title: "Website Development Company in Ahmedabad | Marketrixa",
    description:
      "Build high-performance, SEO-ready websites with Marketrixa. Designed for speed, conversions, and growth.",
    url: "https://www.marketrixa.com/services/website-development-service",
    siteName: "Marketrixa",
    images: [
      {
        url: "/web-og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Ahmedabad | Marketrixa",
    description:
      "Fast, responsive, and SEO-optimized websites built for growth.",
    images: ["/web-og-image.png"],
    creator: "@marketrixa",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <WebHero />
      <AboutWebService />
      <WebsiteBuilt />
      <WebFeatures />
      <WebsiteSection />
      <WebWhyMarket />
      <Clientele />
      <WebTestimonials />
      <TechStack />
      <OtherServices />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={serviceFAQs}
      />
      <Footer />

      {/* Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // ✅ SERVICE SCHEMA
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Website Development Services in Ahmedabad",
              description:
                "Marketrixa offers professional website development services in Ahmedabad, delivering fast, responsive, and conversion-focused websites.",
              provider: {
                "@type": "Organization",
                name: "Marketrixa",
                url: "https://www.marketrixa.com",
              },
              areaServed: {
                "@type": "City",
                name: "Ahmedabad",
              },
              serviceType: "Web Development",
              url: "https://www.marketrixa.com/services/website-development-service",
            },

            // ✅ ARTICLE SCHEMA
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Website Development Company in Ahmedabad - Complete Guide",
              description:
                "Discover how professional website development in Ahmedabad can help your business grow with better performance and conversions.",
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
                "https://www.marketrixa.com/services/website-development-service",
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
                  name: "Web Development",
                  item: "https://www.marketrixa.com/services/website-development-service",
                },
              ],
            },

            // ✅ FAQ SCHEMA (AUTO FROM DATA)
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: serviceFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
