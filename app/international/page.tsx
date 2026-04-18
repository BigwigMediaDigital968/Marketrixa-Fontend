import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";

import BgCTA from "@/app/component/website/BgCTA";
import InternationalHero from "./component/InternationalHero";
import InternationalClient from "./component/InternationalClient";

export default function SmmPage() {
  return (
    <>
      <Navbar />
      <InternationalHero />
      <InternationalClient />

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
      <Footer />
    </>
  );
}
