import Footer from "../component/website/Footer";
import AboutHero from "../component/website/About/Abouthero";
import AboutStats from "../component/website/About/AboutStats";
import Strategy from "../component/website/About/Ourprocess";
import OurServices from "../component/website/About/OurServices";
import Navbar from "../component/website/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Marketrixa | Digital Marketing Company in Ahmedabad",
  description: "Marketrixa is a performance-driven digital marketing company in Ahmedabad & Deesa, helping brands grow with SEO, social media, web development, and more.",
  alternates: {
    canonical: "https://www.marketrixa.com/about",
  },
  openGraph: {
    title: "About Marketrixa | Digital Marketing Company in Ahmedabad",
    description: "Learn about Marketrixa — a performance-driven digital marketing company in Ahmedabad & Deesa.",
    url: "https://www.marketrixa.com/about",
    siteName: "Marketrixa",
    images: [{ url: "https://www.marketrixa.com/about-og-image.png" }],
  },
};


export default function aboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Marketrixa",
            url: "https://www.marketrixa.com/about",
            title: "About Marketrixa | Digital Marketing Company in Ahmedabad",
            description:
              "Marketrixa is a performance-driven digital marketing company in Ahmedabad & Deesa, helping brands grow with SEO, social media, web development, and more.",
            publisher: {
              "@type": "Organization",
              name: "Marketrixa",
              url: "https://www.marketrixa.com",
              telephone: "+91-9512400000",
              email: "admin@marketrixa.com",
            },
          }),
        }}
      />
      <main>
        <Navbar />
        <AboutHero />
        <AboutStats />
        <OurServices />
        <Strategy />
        <Footer />
      </main>
    </>
  );
}
