import type { Metadata } from "next";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import OrmHero from "./component/OrmHero";
import AboutORM from "./component/AboutORM";
import WhyMarketORM from "./component/WhyMarketORM";
import WhyIndusMarket from "./component/WhyIndusMarket";
import OrmProcess from "./component/OrmProcess";
import FAQ from "@/app/component/website/FAQ";
import { ORMFaqs } from "@/app/data/faqData";
import OrmStats from "./component/OrmStats";
import OrmTestimonial from "./component/OrmTestimonial";

export const metadata: Metadata = {
  title: "Online Reputation Management Services | Marketrixa",
  description:
    "Marketrixa offers expert online reputation management services that protect your brand, suppress negative content, and build lasting trust. Get a free ORM audit today.",
  keywords: [
    "online reputation management",
    "ORM services",
    "brand reputation management",
    "online reputation management company",
    "reputation management agency",
    "negative review removal",
    "brand monitoring",
    "Google reputation management",
    "online reputation management India",
  ],

  alternates: {
    canonical:
      "https://www.marketrixa.com/services/online-reputation-management",
  },

  openGraph: {
    title: "Online Reputation Management Services | Marketrixa",
    description:
      "Your brand's story is being written online — with or without you. Marketrixa's ORM services help you take control, suppress negativity, and build unshakeable digital trust.",
    url: "https://www.marketrixa.com/services/online-reputation-management",
    siteName: "Marketrixa",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/orm-og-image.png",
        width: 1200,
        height: 630,
        alt: "Marketrixa ORM Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Management Services | Marketrixa",
    description:
      "Protect your brand online. Suppress negative content. Build real trust. Marketrixa's ORM services have you covered.",
    images: ["/orm-og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  metadataBase: new URL("https://www.marketrixa.com"),
};

export default function OrmPageContant() {
  // -----------------------------
  // SERVICE SCHEMA
  // -----------------------------
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Online Reputation Management Services",
    name: "Online Reputation Management Services",
    description:
      "Marketrixa provides expert online reputation management services to suppress negative content, monitor brand mentions, improve public perception, and build digital trust.",
    provider: {
      "@type": "Organization",
      name: "Marketrixa",
      url: "https://www.marketrixa.com",
      logo: "/logo-rec.jpg",
      sameAs: [
        // "https://www.facebook.com/",
        "https://www.instagram.com/marketrixa.hq",
        "https://linkedin.com/company/marketrixa",
        "https://x.com/@marketrixa99",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://www.marketrixa.com/services/online-reputation-management",
    image: "/orm-service-image.png",
    category: "Digital Marketing Service",
  };

  // -----------------------------
  // FAQ SCHEMA
  // -----------------------------
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ORMFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // -----------------------------
  // BREADCRUMB SCHEMA
  // -----------------------------
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
        name: "Online Reputation Management",
        item: "https://www.marketrixa.com/services/online-reputation-management",
      },
    ],
  };

  // -----------------------------
  // ORGANIZATION SCHEMA
  // -----------------------------

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
      <OrmHero />
      <OrmStats />
      <AboutORM />
      <WhyMarketORM />
      <OrmProcess />
      <WhyIndusMarket />
      <OrmTestimonial />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={ORMFaqs}
      />
      <Footer />
    </>
  );
}
