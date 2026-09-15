import { Metadata } from "next";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import PrivacyPolicy from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Marketrixa",
  description:
    "Read Marketrixa's Privacy Policy to learn how we collect, use, protect, and manage your personal information when you use our website and services.",

  alternates: {
    canonical: "https://www.marketrixa.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Marketrixa",
    description:
      "Learn how Marketrixa collects, uses, protects, and manages your personal information and data when you use our website and services.",
    url: "https://www.marketrixa.com/privacy-policy",
    siteName: "Marketrixa",
    type: "website",
    images: [
      {
        url: "/logo-rec.jpg",
        width: 1200,
        height: 630,
        alt: "Marketrixa Privacy Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Marketrixa",
    description:
      "Learn how Marketrixa collects, uses, protects, and manages your personal information and data.",
    images: ["/logo-rec.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
