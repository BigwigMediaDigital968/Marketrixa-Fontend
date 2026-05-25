import FAQ, { FAQItem } from "@/app/component/website/FAQ";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import AffiliateOtherServices from "./component/AffiliateOtherServices";
import AffiliateHero from "./component/Affiliatehero";
import AffiliateAbout from "./component/AffiliateAbout";
import AffiliateGrow from "./component/AffiliateGrow";
import AffiliatePartner from "./component/AffiliatePartner";
import AffiliateServices from "./component/AffiliateServices";
import AffProcessBenifit from "./component/AffProcessBenifit";
import WhyAffMarketrixs from "./component/WhyAffMarketrixs";
import Link from "next/link";
import { Metadata } from "next";

export const AffiliateFAQs: FAQItem[] = [
  {
    question: "What is affiliate marketing?",
    answer:
      "Affiliate marketing is a performance-based strategy where businesses partner with publishers or creators who promote products and earn commissions for successful conversions.",
  },
  {
    question: "How can affiliate marketing help my business?",
    answer:
      (
        <>
          Affiliate campaigns combined with{" "}
          <Link
            href="/services/social-media-optimization"
            className="text-blue-600 hover:underline font-bold"
          >
            social media marketing
          </Link>{" "}
          help brands expand customer reach and engagement.
        </>
      ),
  },
  {
    question: "Do you provide affiliate partner recruitment?",
    answer:
      "Yes, Marketrixa identifies and connects businesses with suitable publishers, influencers, and promotional partners.",
  },
  {
    question: "How do affiliate commissions work?",
    answer:
      "Affiliates receive compensation based on predefined actions such as sales, leads, clicks, or subscriptions generated through their promotions.",
  },
  {
    question: "Is affiliate marketing suitable for ecommerce businesses?",
    answer:
      "Yes, ecommerce brands often benefit significantly from affiliate partnerships that support product promotion and customer acquisition.",
  },
  {
    question: "How do you track affiliate campaign performance?",
    answer:
      "We use advanced tracking systems to monitor clicks, conversions, leads, commissions, and overall campaign effectiveness.",
  },
  {
    question: "Can affiliate marketing increase online sales?",
    answer:
      "Performance-based partnerships can help businesses reach highly targeted audiences and improve conversion opportunities.",
  },
  {
    question: "Do you manage affiliate campaigns completely?",
    answer:
      "Yes, our team handles strategy creation, partner onboarding, tracking setup, optimization, and performance reporting.",
  },
  {
    question: "Why choose Marketrixa for affiliate marketing services?",
    answer:
      "Marketrixa combines strategic planning, data analysis, affiliate management, and optimization to deliver measurable business growth.",
  },
  {
    question: "Do you offer customized affiliate marketing solutions?",
    answer:
      "Yes, every campaign is tailored according to your business objectives, target audience, and industry requirements.",
  },
];

export const metadata: Metadata = {
  title: "Affiliate Marketing Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a leading Affiliate Marketing Company in Ahmedabad delivering partner-driven campaigns and scalable business growth solutions.",

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
    canonical: "https://www.marketrixa.com/services/affiliate-marketing",
  },

  openGraph: {
    title: "Affiliate Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading Affiliate Marketing Company in Ahmedabad delivering partner-driven campaigns and scalable business growth solutions.",

    url: "https://www.marketrixa.com/services/affiliate-marketing",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/affiliate-og-image.png",
        width: 1200,
        height: 630,
        alt: "Affiliate Marketing Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Affiliate Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading Affiliate Marketing Company in Ahmedabad delivering partner-driven campaigns and scalable business growth solutions.",

    images: ["/affiliate-og-image.png"],
  },
};

export default function ServicePage() {
  return (
    <>
      <main>
        <Navbar />
        <AffiliateHero />
        <AffiliatePartner />
        <AffProcessBenifit />

        {/* <AffiliateAbout />
        <AffiliateGrow /> */}

        {/* <AffiliateServices /> */}
        <WhyAffMarketrixs />

        {/* <AffiliateOtherServices /> */}

        <div className="-mt-10">
          <FAQ
            eyebrow="Got questions?"
            title="Frequently Asked Questions"
            items={AffiliateFAQs}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
