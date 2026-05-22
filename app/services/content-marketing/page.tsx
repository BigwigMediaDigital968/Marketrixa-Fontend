import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import ContentHero from "./component/ContentHero";
import ContentAbout from "./component/ContentAbout";
import ContentProcess from "./component/ContentProcess";
import FAQ from "@/app/component/website/FAQ";
import { ContentFAQs } from "@/app/data/faqData";
import ContentService from "./component/ContentService";
import { Metadata } from "next";
import WhyChooseMarketrixa from "./component/Whychoosemarketrixa";


export const metadata: Metadata = {
  title: "Content Marketing Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a leading content marketing Company in Ahmedabad providing SEO-driven content, blogs, website copy, and social media strategies to boost online growth. ",

  // keywords: [
  //   "social media optimization",
  //   "SMO company Ahmedabad",
  //   "social media optimization services",
  //   "SMO agency Ahmedabad",
  //   "social media marketing Ahmedabad",
  //   "Instagram marketing",
  //   "Facebook marketing",
  //   "brand visibility services",
  //   "social media engagement",
  //   "Marketrixa SMO services",
  // ],

  alternates: {
    canonical: "https://www.marketrixa.com/services/content-marketing",
  },

  openGraph: {
    title: "Content Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading content marketing Company in Ahmedabad providing SEO-driven content, blogs, website copy, and social media strategies to boost online growth. ",

    url: "https://www.marketrixa.com/services/content-marketing",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/content-og-image.png",
        width: 1200,
        height: 630,
        alt: "Content Marketing Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Content Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading content marketing Company in Ahmedabad providing SEO-driven content, blogs, website copy, and social media strategies to boost online growth. ",

    images: ["/content-og-image.png"],
  },
};

export default function ContantMarketingPage() {
  return (
    <>
      <Navbar />
      <ContentHero />
      <ContentAbout />
      <ContentProcess />
      <ContentService />
      <WhyChooseMarketrixa/>

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={ContentFAQs}
      />
      <Footer />
    </>
  );
}
