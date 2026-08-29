import { Metadata } from "next";
import FAQ from "../component/website/FAQ";
import Footer from "../component/website/Footer";
import ServiceCards from "../component/website/homepage/ServiceCardFlip";
import Navbar from "../component/website/Navbar";
import BusinessEdge from "../component/website/services/BusinessEdge";
import CoreServices from "../component/website/services/CoreService";
import DigitalMarketingTools from "../component/website/services/DigitalMarketigtools";
import IndustryCTA from "../component/website/services/IndustryCTA";
import ServiceHero from "../component/website/services/ServiceHero";
import TechStack from "../component/website/services/TechStack";
import { serviceFAQs } from "../data/faqData";

export const metadata : Metadata = {
  title: "Digital Marketing Services in Ahmedabad | Marketrixa",

  description:
    "Explore Marketrixa's digital marketing services in Ahmedabad – SEO, social media, web development & performance marketing.",

  keywords: [
    "digital marketing services Ahmedabad",
    "marketing solutions Ahmedabad",
    "online marketing company",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "https://www.marketrixa.com/services",
  },

  openGraph: {
    title: "Digital Marketing Services in Ahmedabad | Marketrixa",
    description:
      "Explore Marketrixa's digital marketing services in Ahmedabad – SEO, social media, web development & performance marketing.",
    url: "https://www.marketrixa.com/services",
    siteName: "Marketrixa",
    images: [
      {
        url: "/logo.jpg",
        alt: "Marketrixa Digital Marketing Services in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Ahmedabad | Marketrixa",
    description:
      "Explore Marketrixa's digital marketing services in Ahmedabad – SEO, social media, web development & performance marketing.",
    images: ["/logo.jpg"],
    creator: "@marketrixa",
  },
};


const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.marketrixa.com/services#webpage",
      "url": "https://www.marketrixa.com/services",
      "name": "Digital Marketing Services in Ahmedabad | Marketrixa",
      "description": "Explore Marketrixa's digital marketing services in Ahmedabad – SEO, social media, web development & performance marketing.",
      "isPartOf": {
        "@id": "https://www.marketrixa.com/#website"
      },
      "about": {
        "@id": "https://www.marketrixa.com/#organization"
      },
      "primaryImageOfPage": "https://www.marketrixa.com/logo.jpg",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.marketrixa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.marketrixa.com/services" }
        ]
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "ItemList",
      "name": "Digital Marketing Services Offered by Marketrixa",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Performance Marketing",
            "url": "https://www.marketrixa.com/services/performance-marketing",
            "description": "We create and optimize high-converting advertising campaigns across Meta and Google to generate qualified leads, increase sales, and maximize return on ad spend.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Performance Marketing / PPC"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Search Engine Optimisation (SEO)",
            "url": "https://www.marketrixa.com/services/search-engine-optimization",
            "description": "On-page SEO, technical audits, quality content, and ethical link building to improve search rankings sustainably.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Search Engine Optimization"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Website Development",
            "url": "https://www.marketrixa.com/services/website-development",
            "description": "Fast, conversion-optimised websites built to generate leads, build trust, and scale with your business.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Website Development"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "url": "https://www.marketrixa.com/services/social-media-marketing",
            "description": "Social presences that stop the scroll, grow audiences, and convert followers into loyal customers.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Social Media Marketing"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "Graphic Designing",
            "url": "https://www.marketrixa.com/services/graphic-design",
            "description": "Visual identity design including brand kits and campaign creatives.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Graphic Design"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Influencer Marketing",
            "url": "https://www.marketrixa.com/services/influencer-marketing",
            "description": "Connecting brands with trusted creators to drive authentic awareness, engagement, and conversions at scale.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Influencer Marketing"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Service",
            "name": "Email Marketing",
            "url": "https://www.marketrixa.com/services/email-marketing",
            "description": "Automated, personalised email sequences that nurture leads and drive repeat revenue.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Email Marketing"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "Service",
            "name": "Affiliate Marketing",
            "url": "https://www.marketrixa.com/services/affiliate-marketing",
            "description": "Building and managing affiliate networks that bring in qualified traffic on a pay-for-results basis.",
            "provider": { "@id": "https://www.marketrixa.com/#organization" },
            "areaServed": { "@type": "State", "name": "Gujarat" },
            "serviceType": "Affiliate Marketing"
          }
        }
      ]
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

export default function ServicePage() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <Navbar />
        <ServiceHero />
        <CoreServices />
        <ServiceCards />
        <DigitalMarketingTools />
        <BusinessEdge />
        <TechStack />
        <IndustryCTA />
        <FAQ
          eyebrow="Got questions?"
          title="Frequently Asked Questions"
          items={serviceFAQs}
        />
        <Footer />
      </main>
    </>
  );
}
