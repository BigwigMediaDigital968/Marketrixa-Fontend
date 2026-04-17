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

export default function ServicePage() {
  return (
    <>
      <main>
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
