import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import WebHero from "./component/WebHero";
import AboutWebService from "./component/AboutWebService";
import WebsiteBuilt from "./component/WebsiteBuilt";
import WebFeatures from "./component/WebFeatures";
import WebsiteSection from "./component/WebsiteSection";
import WebWhyMarket from "./component/WebWhyMarket";
import Clientele from "@/app/component/website/homepage/Clientele";
import TechStack from "@/app/component/website/services/TechStack";
import FAQ from "@/app/component/website/FAQ";
import { serviceFAQs } from "@/app/data/faqData";
import WebTestimonials from "./component/WebTestimonials";
import OtherServices from "./component/OtherService";

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <WebHero />
      <AboutWebService />
      <WebsiteBuilt />
      <WebFeatures />
      <WebsiteSection />
      <WebWhyMarket />
      <Clientele />
      <WebTestimonials />
      <TechStack />
      <OtherServices />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={serviceFAQs}
      />
      <Footer />
    </>
  );
}
