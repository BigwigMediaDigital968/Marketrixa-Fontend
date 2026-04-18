import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import FAQ from "@/app/component/website/FAQ";
import { PpcServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import PerformanceClients from "./component/PerformanceClients";
import PerformanceAbout from "./component/PerformanceAbout";
import PerformanceHero from "./component/PerformanceHero";
import PerformanceProjects from "./component/PerformanceProject";

export default function PerformancePage() {
  return (
    <>
      <Navbar />
      <PerformanceHero />
      <PerformanceAbout />
      <PerformanceProjects />
      <BgCTA
        title={
          <>
            Boost Your Conversion with the{" "}
            <span className="text-[#F26522]">Hign ROI</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven PPC strategies."
        ctaText="START BUSINESS GROWTH"
        bgImage="/cta-bg.png"
      />
      <PerformanceClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={PpcServiceFAQs}
      />
      <Footer />
    </>
  );
}
