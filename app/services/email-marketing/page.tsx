import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import EmailHero from "./component/EmailHero";
import EmailTools from "./component/EmailTools";
import FAQ from "@/app/component/website/FAQ";
import { EmailMarketingFAQs } from "@/app/data/faqData";
import WhyEmail from "./component/WhyEmail";
import EmailProcess from "./component/EmailProcess";
import { Metadata } from "next";
import ContentService from "./component/ContentService";



export const metadata: Metadata = {
  title: "Email Marketing Company in Ahmedabad | Marketrixa",

  description:
    "Marketrixa is a leading email marketing company in Ahmedabad offering automated campaigns, newsletters, and targeted email strategies for business growth. ",

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
    title: "Email Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading email marketing company in Ahmedabad offering automated campaigns, newsletters, and targeted email strategies for business growth. ",

    url: "https://www.marketrixa.com/services/email-marketing",

    siteName: "Marketrixa",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/email-og-image.png",
        width: 1200,
        height: 630,
        alt: "Email Marketing Services by Marketrixa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Email Marketing Company in Ahmedabad | Marketrixa",

    description:
      "Marketrixa is a leading email marketing company in Ahmedabad offering automated campaigns, newsletters, and targeted email strategies for business growth. ",

    images: ["/email-og-image.png"],
  },
};

export default function EmailPage() {
  return (
    <>
      <Navbar />
      <EmailHero />
      <EmailTools />
      <EmailProcess />
      <ContentService/>
            <WhyEmail />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={EmailMarketingFAQs}
      />
      <Footer />
    </>
  );
}
