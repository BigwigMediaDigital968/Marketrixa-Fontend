import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import FAQ from "@/app/component/website/FAQ";
import { SmmServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import SmmProjects from "./component/SmmProject";
import SmmServices from "./component/SmmServices";
import SmmPlatform from "./component/SmmPlatform";
import SmmHero from "./component/SmmHero";
import SmmAbout from "./component/SmmAbout";
import SmmClients from "./component/SmmClients";

export default function SmmPage() {
  return (
    <>
      <Navbar />
      <SmmHero />
      <SmmAbout />
      <SmmServices />
      <SmmPlatform />
      <SmmProjects />
      <BgCTA
        title={
          <>
            Boost Your Sccial to the{" "}
            <span className="text-[#F26522]">Top of the Trend</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven SEO strategies."
        ctaText="START SOCIAL GROWTH"
        bgImage="/cta-bg.png"
      />
      <SmmClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SmmServiceFAQs}
      />
      <Footer />
    </>
  );
}
