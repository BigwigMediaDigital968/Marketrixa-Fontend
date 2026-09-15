import CTA2 from "../component/website/CTA2";
import FAQ from "../component/website/FAQ";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import IndustryHero from "../component/website/industry/IndustryHero";
import IndustryProject from "../component/website/industry/IndustryProject";
import IndustryShow from "../component/website/industry/IndustryShow";
import ResultsShowcase from "../component/website/homepage/ResultsShowcase";
import { industryFAQs } from "../data/faqData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Digital Marketing Solutions | Marketrixa",
  description:
    "Explore the industries Marketrixa serves with tailored digital marketing solutions for e-commerce, healthcare, real estate, education, finance, and more.",

  keywords: [
    "industries we serve",
    "digital marketing for industries",
    "industry specific digital marketing",
    "ecommerce digital marketing",
    "healthcare digital marketing",
    "real estate digital marketing",
    "education digital marketing",
    "finance digital marketing",
    "digital marketing agency",
    "Marketrixa",
  ],

  alternates: {
    canonical: "https://www.marketrixa.com/industry",
  },

  openGraph: {
    title: "Industries We Serve | Digital Marketing Solutions | Marketrixa",
    description:
      "Discover tailored digital marketing strategies from Marketrixa for e-commerce, healthcare, real estate, education, finance, and other industries.",
    url: "https://www.marketrixa.com/industry",
    siteName: "Marketrixa",
    type: "website",
    images: [
      {
        url: "/logo-rec.jpg",
        width: 1200,
        height: 630,
        alt: "Marketrixa Digital Marketing Solutions for Different Industries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Digital Marketing Solutions | Marketrixa",
    description:
      "Explore Marketrixa's tailored digital marketing solutions for e-commerce, healthcare, real estate, education, finance, and more.",
    images: ["/logo-rec.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function IndustryPage() {
  return (
    <>
      <main>
        <Navbar />
        <IndustryHero />
        <IndustryShow />
        <ResultsShowcase />
        <CTA2 />
        <IndustryProject />
        <FAQ
          eyebrow="Want to know more?"
          title="Frequently Asked Questions"
          items={industryFAQs}
        />
        <Footer />
      </main>
    </>
  );
}
