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

export const metadata: Metadata = {
  title: "Influencer Marketing Services in India | Marketrixa",

  description:
    "Connect your brand with the right influencers across Instagram, YouTube & LinkedIn. Marketrixa offers end-to-end influencer marketing services across India. Start your campaign today.",

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
    canonical: "https://www.marketrixa.com/services/email-marketing",
  },

  openGraph: {
    title: "Influencer Marketing Services in India | Marketrixa",

    description:
      "Connect your brand with the right influencers across Instagram, YouTube & LinkedIn. Marketrixa offers end-to-end influencer marketing services across India. Start your campaign today.",

    url: "https://www.marketrixa.com/services/email-marketing",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/influencer-og-image.png",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Influencer Marketing Services in India | Marketrixa",

    description:
      "Connect your brand with the right influencers across Instagram, YouTube & LinkedIn. Marketrixa offers end-to-end influencer marketing services across India. Start your campaign today.",

    images: ["/influencer-og-image.png"],
  },
};

export default function InfluencerPage() {
  return (
    <>
      <Navbar />
      <InfluencerHero />
      <AboutInfluence />
      <WhyInfluence />
      <InfluenceService />
      <WhyInfluenceMar />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={InfluencerFaqs}
      />
      <Footer />
    </>
  );
}
