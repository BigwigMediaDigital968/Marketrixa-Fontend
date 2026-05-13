import Navbar from "./component/website/Navbar";
import Hero from "./component/website/homepage/Hero";
import Stats from "./component/website/homepage/Stats";
import ServiceGrid from "./component/website/homepage/ServiceGrid";
import Footer from "./component/website/Footer";
import Clientele from "./component/website/homepage/Clientele";
import Testimonials from "./component/website/homepage/Testimonial";
import LeadForm from "./component/website/homepage/LeadForm";
import Industry from "./component/website/homepage/IndustryCover";
import Blogs from "./component/website/homepage/Blogs";
import ServiceCardCarousel from "./component/website/homepage/ServiceCardCrousel";
import Partnership from "./component/website/homepage/Partnership";
import CTASection from "./component/website/CTASection";
import About from "./component/website/homepage/About";
import HowWeWork from "./component/website/homepage/HowWeWork";
import FAQ from "./component/website/FAQ";
import { homeFAQs } from "./data/faqData";
import Script from "next/script";

export const metadata = {
  title: "Marketrixa | Best Digital Marketing Company in Ahmedabad",
  description:
    "Marketrixa is the best digital marketing company in Ahmedabad & Deesa. SEO, Google Ads, social media & web. 50+ brands. Book a free Consultation today.",

  keywords: [
    "digital marketing company in Ahmedabad",
    "best digital marketing agency in Deesa",
    "digital marketing services Gujarat",
    "SEO company Ahmedabad",
    "performance marketing agency",
    "social media marketing Ahmedabad",
    "Google Ads agency Gujarat",
    "Marketrixa",
    "digital marketing agency North Gujarat",
    "PPC agency Ahmedabad",
  ],

  authors: [{ name: "Marketrixa" }],
  creator: "Marketrixa",
  publisher: "Marketrixa",

  metadataBase: new URL("https://www.marketrixa.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Marketrixa | Best Digital Marketing Company in Ahmedabad",
    description:
      "Grow your business with Marketrixa with SEO, Ads, Social Media & Web solutions for Ahmedabad & Gujarat businesses.",
    url: "https://www.marketrixa.com",
    siteName: "Marketrixa",
    images: [
      {
        url: "/home-og-image.png",
        width: 1200,
        height: 630,
        alt: "Marketrixa Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marketrixa | Best Digital Marketing Company in Ahmedabad",
    description:
      "SEO, Google Ads, Social Media & Web solutions to grow your business.",
    images: ["/home-og-image.png"],
    creator: "@marketrixa",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Partnership />
        <ServiceCardCarousel />
        <Stats />
        <CTASection />
        <ServiceGrid />
        <HowWeWork />
        <Industry />
        <LeadForm />
        <Clientele />
        <Testimonials />
        <Blogs />
        <FAQ
          eyebrow="Frequently Asked Questions?"
          title="Everything You Need to Know Before You Grow!"
          items={homeFAQs}
        />
        <Footer />
      </main>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // ✅ ORGANIZATION
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Marketrixa",
              url: "https://www.marketrixa.com",
              logo: "https://www.marketrixa.com/logo.png",
              sameAs: [
                "https://www.instagram.com/marketrixa",
                "https://www.linkedin.com/company/marketrixa",
              ],
            },

            // ✅ LOCAL BUSINESS (BOOSTS LOCAL SEO)
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Marketrixa",
              image: "https://www.marketrixa.com/logo.png",
              url: "https://www.marketrixa.com",
              telephone: "+919512400000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: ["Ahmedabad", "Deesa", "Gujarat"],
            },

            // ✅ SERVICE (CORE OFFERING)
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Digital Marketing Services",
              description:
                "Marketrixa offers SEO, Google Ads, social media marketing, and website development services in Ahmedabad and Gujarat.",
              provider: {
                "@type": "Organization",
                name: "Marketrixa",
              },
              areaServed: {
                "@type": "State",
                name: "Gujarat",
              },
            },

            // ✅ BREADCRUMB
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
              ],
            },

            // ✅ FAQ (FROM YOUR DATA)
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: homeFAQs.map((faq) => ({
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
