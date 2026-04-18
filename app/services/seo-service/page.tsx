import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import SeoFeatures from "./component/SeoFeature";
import SeoTypes from "./component/SeoTypes";
import SeoHero from "./component/SeoHero";
import AboutSeo from "./component/AboutSeo";
import FAQ from "@/app/component/website/FAQ";
import { SeoServiceFAQs } from "@/app/data/faqData";
import BgCTA from "@/app/component/website/BgCTA";
import SeoActivities from "./component/SeoActivities";
import SeoClients from "./component/SeoClients";
import SeoProjects from "./component/SeoProjects";

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <SeoHero />
      <SeoFeatures />
      <AboutSeo />
      <SeoTypes />
      <BgCTA
        title={
          <>
            Boost Your Rankings to the{" "}
            <span className="text-[#F26522]">Top of Google</span>
          </>
        }
        description="Get more traffic, leads, and revenue with our data-driven SEO strategies."
        ctaText="START SEO GROWTH"
        bgImage="/cta-bg.png"
      />
      <SeoActivities />
      <SeoProjects />
      <SeoClients />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={SeoServiceFAQs}
      />
      <Footer />
    </>
  );
}
