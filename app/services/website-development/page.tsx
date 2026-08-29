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
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Website Development Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a trusted website development company in Ahmedabad, building fast, responsive & SEO-friendly websites.",

  keywords: [
    "website development company in Ahmedabad",
    "web design Ahmedabad",
    "custom website development",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "https://www.marketrixa.com/services/website-development",
  },

  openGraph: {
    title: "Website Development Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a trusted website development company in Ahmedabad, building fast, responsive & SEO-friendly websites.",
    url: "https://www.marketrixa.com/services/website-development",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Website Development Company in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Ahmedabad | Marketrixa",
    description:
      "Marketrixa is a trusted website development company in Ahmedabad, building fast, responsive & SEO-friendly websites.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};


const jsonLdData =
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Website Development Services",
      "serviceType": "Website Development",
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
      "url": "https://www.marketrixa.com/services/website-development",
      "description": "Marketrixa is a trusted website development company in Ahmedabad, building fast, responsive & SEO-friendly websites tailored to business goals.",
      "keywords": "website development company in Ahmedabad, web design Ahmedabad, custom website development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Web Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Static Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamic Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Redesign" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Website Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO-Friendly Web Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PSD To HTML Conversion" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can benefit from your website design and development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our services are designed for startups, small businesses, growing brands, and large enterprises across every industry. Whether you need a simple business website, a custom web design, or a fully dynamic web platform, Marketrixa, a trusted website development company in Ahmedabad, tailors every solution to your specific goals and target audience."
          }
        },
        {
          "@type": "Question",
          "name": "Which digital marketing technique delivers the best results alongside web development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most effective approach depends entirely on your business goals. SEO drives long-term organic traffic, PPC delivers immediate visibility, SMM builds brand awareness and engagement, and ORM protects your online reputation. As the best website development company in Ahmedabad, we integrate all of these strategies to ensure your website performs as a complete growth engine for your business."
          }
        },
        {
          "@type": "Question",
          "name": "How much do your website development services cost in Ahmedabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pricing varies based on the scope, complexity, and features of each project. We offer flexible packages for startups, growing businesses, and large enterprises. Contact us for a personalized quote tailored to your specific business needs, goals, and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Will I be kept informed at every stage of my project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We believe in complete transparency throughout the entire development process. As your dedicated web design company in Ahmedabad, you will receive regular progress updates, milestone reports, and direct access to your project team at every step, from the initial discovery call to the final launch."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible for providing content for the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can handle content creation as a part of our full-service offering, including professional copywriting, graphic design, and content strategy. However, if you prefer to provide your own content, our team will review, optimize, and incorporate it seamlessly into your new website."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose Marketrixa as my digital growth partner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marketrixa combines data-driven strategy, technical excellence, and creative design to deliver websites that produce real, measurable business results. As a leading website designing company in Ahmedabad, our focus is always on ROI, long-term growth, and a transparent partnership that puts your success at the center of everything we do."
          }
        },
        {
          "@type": "Question",
          "name": "How do you stay updated with the latest SEO and web development trends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team continuously monitors search engine algorithm updates, emerging technologies, and evolving industry best practices. We proactively adapt our strategies and development approaches to ensure your website always remains competitive, compliant, and ahead of the curve in both design and performance."
          }
        },
        {
          "@type": "Question",
          "name": "How does a professionally built website impact sales and revenue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A well-designed website builds trust, improves user experience, and dramatically increases conversion rates. Fast load speeds, mobile responsiveness, intuitive navigation, and strategically placed CTAs all work together to turn visitors into paying customers. At Marketrixa, the best website development company in Ahmedabad, every website we build is engineered specifically to support your business revenue goals from day one."
          }
        }
      ]
    }
  ]
};

export default function SeoPage() {
  return (
    <>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
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
              url: "https://www.marketrixa.com/services/website-development",
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
                "https://www.marketrixa.com/services/website-development",
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
                  item: "https://www.marketrixa.com/services/website-development",
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
